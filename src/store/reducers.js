
import { adminInitial, ADMIN_REDUCER } from "./adminActions";
import { ALERT_REDUCER } from "./alertActions";
import { gameInitial, GAME_REDUCER } from "./gameActions";
// we'll leave this empty for now
export const initialState = {
  ...adminInitial,
  ...gameInitial,
  alert: null
}

// this will act as a map of actions that will trigger state mutations
const Actions = {
  "ALERT": ALERT_REDUCER,
  "USER": ADMIN_REDUCER,
  "GAME": GAME_REDUCER
};

export const ACTION_CREATORS = Object.keys(Actions);
// the reducer is called whenever a dispatch action is made.
// the action.type is a string which maps to a function in Actions.
// We apply the update to existing state, and return a new copy of state.
const reducers =  (state, action) => {
    const PORTION = action.type.split('_')[0]
    console.log("======ACTION:", action.type)
    const act = Actions[PORTION];
    let update;
    if(act){
      update = act(state, action);
    }else{
      console.error("NO ACTION FOUND")
    }
    console.log('STORE REDUCER:', update)
    return { ...state, ...update };
};

export default reducers;
