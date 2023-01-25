import React, { useState } from 'react';
import Board from './Components/Board';
import Square from './Components/Square';
import './Components/styles/root.style.scss';
import { calculateWinner } from './helper';

import History from './Components/History';
import StatusMessage from './Components/StatusMessage';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  // const [isXNext, setIsXNext] = useState(false);

  const { winner, win_Combination } = calculateWinner(current.board);

  const handleSquareClick = position => {
    if (current.board[position]) {
      return;
    }
    if (winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((Square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return Square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    // setIsXNext(prev => !prev);
    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <>
      <div className="app">
        <h1 className="heading">TIC TAC TOE</h1>
        {/* <h2 className="heading">{message}</h2> */}
        <StatusMessage winner={winner} current={current} />
        <Board
          board={current.board}
          handleSquareClick={handleSquareClick}
          win_Combination={win_Combination}
        />
        <button className="newGameBtn" type="button" onClick={onNewGame}>
          Start New Game
        </button>
        <h2 className="heading">Current Game History</h2>
        <History history={history} moveTo={moveTo} currentMove={currentMove} />
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

        <div
          style={{
            color: 'white',
            fontFamily: 'cursive',
            borderBottom: '10px',
          }}
        >
          Report an issue -rohanmali.2002@gmail.com
          <link rel="rohanmali.2002@gmail.com"></link>
        </div>
      </div>
    </>
  );
};

export default App;
