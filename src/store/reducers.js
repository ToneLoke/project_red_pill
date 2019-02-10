
import { adminInitialState, adminActions } from "./adminActions";
import { initialError, errorActions } from "./errorActions";
// we'll leave this empty for now
export const initialState = {
  ...adminInitialState,
  ...initialError
}


// this will act as a map of actions that will trigger state mutations
const Actions = {
  ...adminActions,
  ...errorActions
};

export const ACTION_CREATORS = Object.keys(Actions);
// the reducer is called whenever a dispatch action is made.
// the action.type is a string which maps to a function in Actions.
// We apply the update to existing state, and return a new copy of state.
const reducers =  (state, action) => {
    const act = Actions[action.type];
    const update = act(state, action);
    // console.log('STORE REDUCER:', update)
    return { ...state, ...update };
};

export default reducers;
