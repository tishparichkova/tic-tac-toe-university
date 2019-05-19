import * as actions from './../actions/actionTypes';

const initialState = {
  gameReady: false
};

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SETUP:
      return {
        ...state,
        board: action.board,
        players: action.players,
        playerTurn: 0,
        gameReady: true,
        winner: null
      };
    case actions.PLACE:
      debugger;

      return {
        ...state,
        board: state.board.map(
          (value, index) =>
            index === action.index
              ? state.players[state.playerTurn].token
              : value
        )
      };
    case actions.SET_PLAYER_TURN:
      return {
        ...state,
        playerTurn: action.playerTurn
      };
    case actions.SET_WINNER:
      return {
        ...state,
        winner: action.winner
      };
    default:
      return state;
  }
}

export { gameReducer };
