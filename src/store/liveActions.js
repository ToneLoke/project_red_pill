//LIVE GAME ACTIONS

//LIVE UPDATES TO GAME FROM SERVER
const LIVE_GAME_STATUS_CHANGE = 'LIVE_GAME_STATUS_CHANGE'
const LIVE_GAME_QUESTION_CHANGE = 'LIVE_GAME_QUESTION_CHANGE'

//LIVE EMITIONS TO SERVER
const LIVE_GAME_ANSWER_QUESTION = 'LIVE_GAME_PLAYER_STATS_UPDATE'


export const createOrUpdateGame = (body) => {

}

export const fetchGames = () => {

}

export const updateStoreGames = (games, game) => {

}

export const LIVE_GAME_REDUCER = (action, state) => {
  switch (action.type) {
    case LIVE_GAME_STATUS:
    case LIVE_GAME_CLEAR:
    case LIVE_GAME_FETCH_ALL:
    case LIVE_GAME_CREATE_UPDATE:
    default:
      return state;
  }
}
