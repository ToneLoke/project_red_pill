import axios from 'axios'
export const gameInitial = {
  game: {
    title: '',
    questions: [],
  },
  games: null,
};
const GAME_API = 'http://localhost:8000/games';

const token = () => (localStorage.getItem('token'))

//======================= ACTION CONSTANTS =======================
export const GAME_SET = 'GAME_SET';
export const GAME_FETCH_ALL = 'GAME_FETCH_ALL';
export const GAME_CREATE_UPDATE = 'GAME_CREATE_UPDATE';

export const setGame = ({payload}) => ({game: payload});

export const createOrUpdateGame = async (body) => {
    const { _id } = body;
    if(_id){
      return await axios.put(GAME_API + `/${_id}`, {...body, token: token()} )
    }else{
      return await axios.post(GAME_API, {...body, token: token() } )
    }
}

export const fetchGames = async () => {
  return await axios.get(GAME_API, { headers: { "x-access-token": token()}})
}

export const GAME_REDUCER = (state, action) => {
  switch (action.type) {
    case GAME_SET:
      return setGame(action);
    case GAME_FETCH_ALL:
      return { games: action.payload };
    case GAME_CREATE_UPDATE:
      return { ...action.payload}
    default:
      return state;
  }
}
