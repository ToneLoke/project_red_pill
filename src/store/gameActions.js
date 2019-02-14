import axios from 'axios'
export const gameInitial = {
  game: {
    title: '',
    questions: [],
  },
};
const GAME_API = 'http://localhost:8000/games';

//======================= ACTION CONSTANTS =======================
export const GAME_SET = 'GAME_SET';

export const setGame = ({payload}) => ({game: payload});

export const createGame = async (body) => {
   console.log("Post Game API CALL", body)
    return await axios.post(GAME_API, body).then( ({data}) => data)
    //TODO: set local storage for token
}

export const GAME_REDUCER = (state, action) => {
  switch (action.type) {
    case GAME_SET:
      return setGame(action);
    default:
      return state;
  }
}
