
import { adminInitial, ADMIN_REDUCER } from "./adminActions";
import { ALERT_REDUCER } from "./alertActions";
import { gameInitial, GAME_REDUCER } from "./gameActions";
import { questionInitial, QUESTION_REDUCER } from "./questionActions";
// we'll leave this empty for now
export const initialState = {
  ...adminInitial,
  ...gameInitial,
  ...questionInitial,
  alert: null
}

// this will act as a map of actions that will trigger state mutations
const Combined = {
  "ALERT": ALERT_REDUCER,
  "USER": ADMIN_REDUCER,
  "QUESTION": QUESTION_REDUCER,
  "GAME": GAME_REDUCER
};


// the reducer is called whenever a dispatch action is made.
// the action.type is a string which maps to a function in Actions.
// We apply the update to existing state, and return a new copy of state.
const reducers =  (state, action) => {
  console.log('=====================ACTION TRIGGERED=============')
  console.log( action )
  console.log('=======================================================')
  const PORTION = action.type.split('_')[0]
  const reducer = Combined[PORTION];
  let update = reducer(action, state);
  console.log('=====================STORE REDUCER UPDATED=============')
  console.log(state, update)
  console.log('=======================================================')
  if(state) return { ...state, ...update };
  return reducer(action)
};

export default reducers;
