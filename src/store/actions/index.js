import { findRandomSquare } from '../../helpers/gameUtilities';

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

export function placeAndProceed(index) {
  return function(dispatch, getState) {
    dispatch(place(index));
    debugger;

    const openSquares = getState().board.filter(
      square => !square
    );

    debugger;
    if (openSquares.length > 0) {
      dispatch(nextPlayer());
    } else {
      alert(
        "Implement the winner check in redux/actions.js"
      );
    }
  };
}

export function playAutomatically() {
  return function(dispatch, getState) {
    setTimeout(function() {
      const newBoard = getState().board;
      const randomSquare = findRandomSquare(
        newBoard
      );
      dispatch(placeAndProceed(randomSquare));
    }, 500);
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
