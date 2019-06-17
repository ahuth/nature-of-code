import React, { useCallback, useRef } from 'react';
import { random } from 'lodash';
import Project from './Project';
import useInterval from '../hooks/useInterval';
import useToggle from '../hooks/useToggle';

const size = 320;

export default function RandomWalk() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [walking, toggleWalking] = useToggle(false);
  const [step, reset] = useRandomWalk(canvasRef, size);

  useInterval(step, 100, walking);

  return (
    <Project title="Random Walk">
      <button onClick={toggleWalking}>{walking ? 'Stop' : 'Walk'}</button>
      <button onClick={reset}>Clear</button>
      <br />
      <canvas className="border-1 border-whitesmoke" height={size} ref={canvasRef} />
    </Project>
  );
}

function useRandomWalk(canvasRef: React.RefObject<HTMLCanvasElement>, size: number) {
  const x = useRef(size / 2);
  const y = useRef(size / 2);

  const step = useCallback(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d')!;

      context.strokeStyle = 'white';
      context.lineTo(x.current, y.current);
      context.stroke();

      x.current += random(-8, 8);
      y.current += random(-8, 8);
    }
  }, [canvasRef]);

  const reset = useCallback(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d')!;

      context.beginPath();
      context.clearRect(0, 0, canvas.width, canvas.height);

      x.current = size / 2;
      y.current = size / 2;
    }
  }, [canvasRef, size]);

  return [step, reset];
}
