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
export const GAME_CLEAR = 'GAME_CLEAR';
export const GAME_FETCH_ALL = 'GAME_FETCH_ALL';
export const GAME_CREATE_UPDATE = 'GAME_CREATE_UPDATE';

export const setGame = ({payload}) => ({game: payload});
//TODO: update games when update or create is called
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

export const GAME_REDUCER = (action, state) => {
  switch (action.type) {
    case GAME_SET:
      return setGame(action);
    case GAME_CLEAR:
      return { game: {...gameInitial}};
    case GAME_FETCH_ALL:
      if(state) return { games: action.payload };
      return fetchGames
    case GAME_CREATE_UPDATE:
      if(state) return { game: action.payload }
      return createOrUpdateGame
    default:
      return state;
  }
}
