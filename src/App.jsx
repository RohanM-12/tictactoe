import React from 'react';
import Board from './Components/Board';
import './Components/styles/root.style.scss';
const App = () => {
  return (
    <>
      <div className="app">
        <h1 className="heading">TIC TAC TOE</h1>
        <Board />
      </div>
    </>
  );
};

export default App;
