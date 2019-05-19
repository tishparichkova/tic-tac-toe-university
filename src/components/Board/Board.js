import React from 'react';

import { Square } from './../Square/Square';

const Board = ({ board, onChooseTile}) => {
  const renderSquare = (value, index) => {
    return (
      <Square
        key={index}
        value={value}
        onClick={() => onChooseTile(index)}
      />
    );
  };

  return (
    <div className="board">
      {board.map(renderSquare)}
    </div>
  );
}

export { Board };