import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode,
  title: React.ReactNode,
};

export default function Project({ children, title }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <Link className="inline-block margin-bottom-2" to="/">Back to project list</Link>
      <div>
        {children}
      </div>
    </div>
  );
}
