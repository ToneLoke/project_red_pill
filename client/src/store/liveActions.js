//LIVE UPDATES TO GAME FROM SERVER
const LIVE_GAME_STATUS_CHANGE = 'LIVE_GAME_STATUS_CHANGE'
const LIVE_GAME_QUESTION_CHANGE = 'LIVE_GAME_QUESTION_CHANGE'

//LIVE EMITIONS TO SERVER
const LIVE_GAME_ANSWER_QUESTION = 'LIVE_GAME_PLAYER_STATS_UPDATE'
const LIVE_GAME_UPDATE = 'LIVE_GAME_UPDATE';

export const LIVE_GAME_REDUCER = (state, action) => {
  switch (action.type) {
    case LIVE_GAME_UPDATE:
      state.game.socket.emit(action.type, action.payload)
      return { game: {...state.game, status: 'play'}};
    case "LIVE_GAME_UPDATED":
      return { game: {...state.game, ...action.payload}};
    default:
      return { game: state.game };
  }
}
