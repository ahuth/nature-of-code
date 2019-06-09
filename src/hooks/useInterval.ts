import { useEffect, useRef } from 'react';

export default function useInterval(callback: () => void, delay: number, run = true) {
  const callbackRef = useRef(callback);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (callbackRef.current && run) {
      intervalRef.current = window.setInterval(callbackRef.current, delay);
      return () => window.clearInterval(intervalRef.current);
    }
  }, [delay, run]);
}
