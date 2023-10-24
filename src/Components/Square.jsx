import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      style={{
        color: isWinningSquare ? 'white' : 'black',
        fontWeight: isWinningSquare ? 'bolder' : 'normal',

        fontFamily: 'cursive',
      }}
      type="button"
      className="square"
      onClick={onClick}
    >
      {value}
      {/* <button></button> */}
    </button>
  );
};

export default Square;
