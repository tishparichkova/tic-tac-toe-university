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
    case action.CLEAR_FIELDS:
     return {
        ...state,
        board: new Array(9),
        players: new Array(2),
        playerTurn: 0,
        gameReady: true,
        winner: null,
     }
    default:
      return state;
  }
}

export { gameReducer };
