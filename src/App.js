import React from 'react';
import './App.css';
import { Scene } from './components/Scene';
import { Heading } from './components/Heading';

function App() {
  return (
    <div className="container">
      <Heading  />
      <Scene  />
    </div>
  );
}

export default App;
