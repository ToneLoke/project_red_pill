import { diff } from "deep-object-diff";
import { userInitial, USER_REDUCER, USER_REQUESTS } from "./userActions";
import { ALERT_REDUCER } from "./alertActions";
import { gameInitial, GAME_REDUCER, GAME_REQUESTS } from "./gameActions";
import {
  questionInitial,
  QUESTION_REDUCER,
  QUESTION_REQUESTS
} from "./questionActions";
import { LIVE_GAME_REDUCER, liveInitial } from "./liveActions";
import { storeLog } from "./index";
// we'll leave this empty for now
export const initialState = {
  ...userInitial,
  ...gameInitial,
  ...questionInitial,
  ...liveInitial,
  alert: null
};

// this will act as a map of actions that will trigger state mutations
const storeMap = {
  ALERT: ALERT_REDUCER,
  USER: USER_REDUCER,
  QUESTION: QUESTION_REDUCER,
  GAME: GAME_REDUCER,
  LIVE: LIVE_GAME_REDUCER
};

const fetchMap = {
  USER: USER_REQUESTS,
  QUESTION: QUESTION_REQUESTS,
  GAME: GAME_REQUESTS
};

const pluckProp = (type, typeMap) => typeMap[type.split("_")[0]];

//NOTE: update application state
export const reducers = (state, action) => {
  const updatedState = {
    ...state,
    ...pluckProp(action.type, storeMap)(state, action)
  };
  storeLog("ACCEPTED ACTION %o", action);
  storeLog("UPDATED %o", diff(state, updatedState));
  return updatedState;
};

//NOTE: get current request based on action type
export const requests = ({ type }) => pluckProp(type, fetchMap)(type);
