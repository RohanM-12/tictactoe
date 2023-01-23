import React, { useState } from 'react';
import Board from './Components/Board';
import Square from './Components/Square';
import './Components/styles/root.style.scss';
import { calculateWinner } from './helper';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is : ${winner}`
    : `Next player is : ${isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (board[position]) {
      return;
    }
    if (winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((Square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }

        return Square;
      });
    });
    setIsXNext(prev => !prev);
  };

  return (
    <>
      <div className="app">
        <h1 className="heading">TIC TAC TOE</h1>
        <h2 className="heading">{message}</h2>
        <Board board={board} handleSquareClick={handleSquareClick} />

        <div id="background-wrap">
          <div class="bubble x1"></div>
          <div class="bubble x2"></div>
          <div class="bubble x3"></div>
          <div class="bubble x4"></div>
          <div class="bubble x5"></div>
          <div class="bubble x6"></div>
          <div class="bubble x7"></div>
          <div class="bubble x8"></div>
          <div class="bubble x9"></div>
          <div class="bubble x10"></div>
        </div>
      </div>
    </>
  );
};

export default App;
