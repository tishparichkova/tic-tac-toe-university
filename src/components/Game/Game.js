import React, {useEffect } from 'react';
import { connect } from "react-redux";

import { setup, placeAndProceed } from "./../../store/actions";

import './Game.scss';
import { Board } from './../Board/Board';

const Game = ({ index, players, playerTurn, board, placeAndProceed, gameReady, setup }) => {
  useEffect(() => {
    debugger;
    if (!gameReady) {
      debugger;
      setup(
        [...Array(9)],[{ computer: false, token: 'X' }, { computer: true, token: 'O' }]
      );
    }
  }, [gameReady, setup]);

  const onPlace = (index) => {
    const isHumanTurn = !players[playerTurn].computer;

    if (isHumanTurn && !board[index]) {
      placeAndProceed(index);
    }
  };

  
  return (
    (gameReady && (
      <div>
        <h2>Player {playerTurn}'s turn</h2>
        <Board
          board={board}
          onChooseTile={onPlace}
        />
      </div>
    )) ||
    "Setting up..."
  );
}

const mapStateToProps = state => ({
  gameReady: state.gameReady,
  board: state.board,
  playerTurn: state.playerTurn,
  players: state.players
});

const mapDispatchToProps = (dispatch) => ({
  setup: (initialTokens, playersTokens) => dispatch(setup(initialTokens, playersTokens)),
  placeAndProceed: (index) => dispatch(placeAndProceed(index))
});

export const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);
