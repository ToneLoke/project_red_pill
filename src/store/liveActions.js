//LIVE GAME ACTIONS

//LIVE UPDATES TO GAME FROM SERVER
const LIVE_GAME_STATUS_CHANGE = 'LIVE_GAME_STATUS_CHANGE'
const LIVE_GAME_QUESTION_CHANGE = 'LIVE_GAME_QUESTION_CHANGE'

//LIVE EMITIONS TO SERVER
const LIVE_GAME_ANSWER_QUESTION = 'LIVE_GAME_PLAYER_STATS_UPDATE'
const LIVE_GAME_PLAY = 'LIVE_GAME_PLAY';


export const createOrUpdateGame = (body) => {

}

export const fetchGames = () => {

}

export const updateStoreGames = (games, game) => {

}

export const LIVE_GAME_REDUCER = (action, { game }) => {
  switch (action.type) {
    case LIVE_GAME_PLAY:
      game.socket.emit(action.type, action.payload)
      return { game: {...game, status: 'play'}};
    case "LIVE_GAME_UPDATE":
      return { game: {...game, ...action.payload}};
    default:
      return { game };
  }
}
