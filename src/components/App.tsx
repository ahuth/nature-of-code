import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import RandomWalk from './RandomWalk';

export default function App() {
  return (
    <main className="flex justify-center">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/RandomWalk" exact component={RandomWalk} />
      </Router>
    </main>
  );
}
