import axios from "./axiosConfig";
// import { logger } from '../utils';
// const gameDataLog = logger('GAME_ACTIONS');

export const gameInitial = {
  game: null,
  games: null
};
const GAME_API = "/games";

//======================= ACTION CONSTANTS =======================
export const GAME_SET = "GAME_SET";
export const GAME_CLEAR = "GAME_CLEAR";
export const GAME_FETCH_ALL = "GAME_FETCH_ALL";
export const GAME_CREATE_UPDATE = "GAME_CREATE_UPDATE";

export const setGame = ({ update, game }) => ({ game: { ...game, ...update } });

//TODO: update games when update or create is called
export const createOrUpdateGame = async body => {
  const { _id } = body;
  if (_id) {
    return await axios.put(GAME_API + `/${_id}`, { ...body });
  } else {
    return await axios.post(GAME_API, { ...body });
  }
};

export const fetchGames = async () => {
  return await axios.get(GAME_API, { retry: 2, retryDelay: 1000 });
};

export const updateStoreGames = (games, game) => {
  if (!games) {
    return [game];
  } else {
    return games.map(g => (g._id === game._id ? game : g));
  }
};

export const GAME_REQUESTS = type => {
  switch (type) {
    case GAME_FETCH_ALL:
      return fetchGames;
    case GAME_CREATE_UPDATE:
      return createOrUpdateGame;
    default:
      return Promise.reject(new Error("No game request."));
  }
};

export const GAME_REDUCER = (state, action) => {
  switch (action.type) {
    case GAME_SET:
      let newGame = setGame({ update: action.payload, game: state.game });
      let isAdmin, question;
      //NOTE: set game admin
      if (state.user._id === action.payload.adminId._id) {
        isAdmin = true;
      }
      //NOTE: set first question
      if (action.payload.socket) {
        question = action.payload.questions[0];
      }
      return {
        ...state,
        ...newGame,
        user: { ...state.user, isAdmin },
        question
      };
    case GAME_CLEAR:
      return { game: { ...gameInitial } };
    case GAME_FETCH_ALL:
      return { games: action.payload };
    case GAME_CREATE_UPDATE:
      const user = state.user;
      if (!state.game || !state.game._id) {
        user.games = user.games
          ? [...user.games, action.payload]
          : [action.payload];
      }
      return {
        game: { ...state.game, ...action.payload },
        games: updateStoreGames(state.games, action.payload),
        user: { ...user, games: updateStoreGames(user.games, action.payload) }
      };
    default:
      return state;
  }
};
