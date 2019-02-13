
import { adminInitialState, ADMIN_REDUCER } from "./adminActions";
import { initialError, ERROR_REDUCER } from "./errorActions";
// we'll leave this empty for now
export const initialState = {
  ...adminInitialState,
  ...initialError
}

// this will act as a map of actions that will trigger state mutations
const Actions = {
  "ERROR": ERROR_REDUCER,
  "USER": ADMIN_REDUCER,
};

export const ACTION_CREATORS = Object.keys(Actions);
// the reducer is called whenever a dispatch action is made.
// the action.type is a string which maps to a function in Actions.
// We apply the update to existing state, and return a new copy of state.
const reducers =  (state, action) => {
    const PORTION = action.type.split('_')[0]
    const act = Actions[PORTION];
    let update;
    if(act){
      update = act(state, action);
    }else{
      update = Actions.ERROR(state, {type: "ERROR_THROWN", payload: {message: "No Action found", code: "SA001"}})
    }
    console.log('STORE REDUCER:', update)
    return { ...state, ...update };
};

export default reducers;
