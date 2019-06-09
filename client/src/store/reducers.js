import { userInitial, USER_REDUCER, USER_REQUESTS } from './userActions';
import { ALERT_REDUCER } from './alertActions';
import { gameInitial, GAME_REDUCER, GAME_REQUESTS } from './gameActions';
import { questionInitial, QUESTION_REDUCER, QUESTION_REQUESTS } from './questionActions';
import { LIVE_GAME_REDUCER } from './liveActions';
// we'll leave this empty for now
export const initialState = {
  ...userInitial,
  ...gameInitial,
  ...questionInitial,
  alert: null
};

// this will act as a map of actions that will trigger state mutations
const storeMap = {
  ALERT: ALERT_REDUCER,
  USER: USER_REDUCER,
  QUESTION: QUESTION_REDUCER,
  GAME: GAME_REDUCER,
  LIVE: LIVE_GAME_REDUCER,
};

const fetchMap = {
  USER: USER_REQUESTS,
  QUESTION: QUESTION_REQUESTS,
  GAME: GAME_REQUESTS,
}

const pluckProp = ({type, payload}, typeMap) => typeMap[type.split('_')[0]];

export const reducers = (state, action) => pluckProp(action, storeMap)({state, action});

export const requests = (action) => pluckProp(action, fetchMap)(action)
