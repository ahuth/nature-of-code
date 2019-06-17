import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>The Nature of Code</h1>
      <p>List of projects written while following along with <a href="https://natureofcode.com/">The Nature of Code</a>.</p>
      <ol>
        <li><Link to="/RandomWalk">Random Walk</Link></li>
        <li><Link to="/Gaussian">Gaussian</Link></li>
      </ol>
    </div>
  );
}
