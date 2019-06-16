import { ticTacToeHelper } from '../../helpers/gameUtilities';

import * as action from './actionTypes';

export function setup(board, players) {
  return {
    type: action.SETUP,
    board,
    players
  };
}

export function setPlayerTurn(playerIndex) {
  return {
    type: action.SET_PLAYER_TURN,
    playerTurn: playerIndex
  };
}

export function place(index) {
  return {
    type: action.PLACE,
    index: index
  };
}

export function setWinner(winner) {
  return {
    type: action.SET_WINNER,
    winner
  };
}

export function setWinnerAndClearFields(winner) {
  return function(dispatch) {
    dispatch(setWinner(winner));
  }
}

export function clearAllFilters() {
  return function(dispatch) {
    dispatch(setup([...Array(9)],[{ computer: false, token: 'X', color: 'antiquewhite'}, { computer: true, token: 'O', color: 'grey' }]))
  }
}

export function placeAndProceed(index) {
  return function(dispatch, getState) {
    const openSquares = getState().board.filter(
      square => !square
    );

    if (openSquares.length > 0) {
      dispatch(nextPlayer());
      dispatch(place(index));
    }
    
    dispatch(checkWinner());
  };
}

export function checkWinner() {
  return function(dispatch, getState) {
    if (ticTacToeHelper.calculateWinner(getState().board) !== 'none') {
      dispatch(setWinnerAndClearFields(ticTacToeHelper.calculateWinner(getState().board)));
    }
  }
};

export function playAutomatically() {
  return function(dispatch, getState) {
    setTimeout(function() {
      const newBoard = getState().board;
      const randomSquare = ticTacToeHelper.findRandomSquare(
        newBoard
      );

      dispatch(placeAndProceed(randomSquare));
    }, 600);
  };
}

export function nextPlayer() {
  return function(dispatch, getState) {
    const { playerTurn, players } = getState();
    const nextPlayer =
      (playerTurn + 1) % players.length;
    
    dispatch(setPlayerTurn(nextPlayer));
    
    if (players[nextPlayer].computer) {
      dispatch(playAutomatically());
    }
  };
}
