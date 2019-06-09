import React, { useCallback, useMemo, useRef } from 'react';
import Project from './Project';
import randomGaussian from '../utils/randomGaussian';
import useInterval from '../hooks/useInterval';
import useToggle from '../hooks/useToggle';

export default function Gaussian() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [running, toggleRunning] = useToggle(false);
  const [step, reset] = useGaussian(canvasRef, 320, 60);

  useInterval(step, 100, running);

  return (
    <Project title="Gaussian">
      <button onClick={toggleRunning}>{running ? 'Stop' : 'Go'}</button>
      <button onClick={reset}>Clear</button>
      <br />
      <canvas className="b1 b-white" width={640} ref={canvasRef} />
    </Project>
  );
}

function useGaussian(canvasRef: React.RefObject<HTMLCanvasElement>, mean: number, standardDeviation: number) {
  const getRandom = useMemo(() => randomGaussian(mean, standardDeviation), [mean, standardDeviation]);

  const step = useCallback(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d')!;
      context.beginPath();
      context.fillStyle = 'rgba(255, 255, 255, .10)';
      context.arc(getRandom(), canvas.height / 2, 16, 0, Math.PI * 2);
      context.fill();
    }
  }, [canvasRef, getRandom]);

  const reset = useCallback(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d')!;

      context.beginPath();
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [canvasRef]);

  return [step, reset];
}
