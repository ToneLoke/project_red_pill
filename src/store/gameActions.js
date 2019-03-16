import axios from './axiosConfig';

export const gameInitial = {
  game: null,
  games: null,
};
const GAME_API = '/games';

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
      return await axios.put(GAME_API + `/${_id}`, {...body} )
    }else{
      return await axios.post(GAME_API, {...body} )
    }
}

export const fetchGames = async () => {
  return await axios.get(GAME_API, { retry: 2, retryDelay: 1000})
}

export const updateStoreGames = (games, game) => {
  if(!games) {
    return [game]
  }else{
    console.log("game", game)
    return games.map( g => g._id === game._id ? game : g)
  }
}

export const GAME_REDUCER = (action, state) => {
  switch (action.type) {
    case GAME_SET:
      let stateUpdate = setGame(action);
      let isAdmin, question;

      if(state.user._id === action.payload.adminId._id){
        isAdmin = true
      }

      if(action.payload.socket){
        question = action.payload.questions[0]
      }

      return { ...stateUpdate, user: { ...state.user, isAdmin }, question};
    case GAME_CLEAR:
      return { game: {...gameInitial}};
    case GAME_FETCH_ALL:
      if(state) return { games: action.payload };
      return fetchGames
    case GAME_CREATE_UPDATE:
      if(state) {
        const user = state.user
        if(!state.game || !state.game._id){
          user.games = user.games ? [...user.games, action.payload] : [action.payload]
        }
        return { game: { ...state.game, ...action.payload }, games: updateStoreGames(state.games, action.payload), user: {...user, games: updateStoreGames(user.games, action.payload)} }
      }
      return createOrUpdateGame
    default:
      return state;
  }
}
