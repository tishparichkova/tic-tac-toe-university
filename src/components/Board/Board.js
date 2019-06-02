import React from 'react';

import { connect } from 'react-redux';
import { clearAllFilters  as clearAllFiltersAction } from './../../store/actions';
import { Square } from './../Square/Square';

const BoardDumb = ({ board, onChooseTile, clearAllFilters }) => {
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
    <div>
      <div className="board-holder">
        <div className="board">
          {board.map(renderSquare)}
        </div>
      </div>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  clearAllFilters: () => dispatch(clearAllFiltersAction()),
});

export const Board = connect(
  null,
  mapDispatchToProps,
)(BoardDumb);

