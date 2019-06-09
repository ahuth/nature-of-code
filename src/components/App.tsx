import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

export default function App() {
  return (
    <main className="flex justify-center">
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </main>
  );
}
