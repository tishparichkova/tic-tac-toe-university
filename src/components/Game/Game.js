import React, {useEffect } from 'react';
import { connect } from "react-redux";

import { setup, placeAndProceed, clearAllFilters as clearAllFiltersAction } from "./../../store/actions";

import './Game.scss';
import { Board } from './../Board/Board';
import { InformationInput } from './../InformationInput/InformationInput';
import { MessageBox } from './../MessageBox/MessageBox';

const Game = ({ index, players, playerTurn, board, placeAndProceed, gameReady, setup, winner, clearAllFilters }) => {
  useEffect(() => {
    if (!gameReady) {
      setup(
        [...Array(9)],[{ computer: false, token: 'X', color: 'antiquewhite'}, { computer: true, token: 'O', color: 'grey' }]
      );
    }
  }, [gameReady, setup, winner]);

  const onPlace = (index) => {
    const isHumanTurn = !players[playerTurn].computer;

    if (isHumanTurn && !board[index] && !winner) {
      placeAndProceed(index);
    }
  };

  
  return (
    (gameReady && (
      <div>
        <div className="players-information">
          <InformationInput token={players[0].token} active={players[0].token === players[playerTurn].token} />
          <InformationInput token={players[1].token} active={players[1].token === players[playerTurn].token} />
        </div>
        <Board
          board={board}
          onChooseTile={onPlace}
        />
        <MessageBox hiddenClass={winner ? '' : 'hidden'} winner={winner} />
        <div className="button-wrapper">
          <button onClick={clearAllFilters}>New Game</button>
        </div>
      </div>
    )) ||
    "Setting up..."
  );
}

const mapStateToProps = state => ({
  gameReady: state.gameReady,
  board: state.board,
  playerTurn: state.playerTurn,
  players: state.players,
  winner: state.winner,
});

const mapDispatchToProps = (dispatch) => ({
  setup: (initialTokens, playersTokens) => dispatch(setup(initialTokens, playersTokens)),
  placeAndProceed: (index) => dispatch(placeAndProceed(index)),
  clearAllFilters: () => dispatch(clearAllFiltersAction()),
});

export const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);
