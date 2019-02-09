
import { adminInitialState, adminActions } from "./adminActions";
// we'll leave this empty for now
export const initialState = {
  ...adminInitialState
}


// this will act as a map of actions that will trigger state mutations
const Actions = {
  ...adminActions
};

// the reducer is called whenever a dispatch action is made.
// the action.type is a string which maps to a function in Actions.
// We apply the update to existing state, and return a new copy of state.
const reducers =  (state, action) => {
    const act = Actions[action.type];
    const update = act(state, action.payload);
    console.trace('STORE REDUCER:', update)
    return { ...state, ...update };
};

export default reducers;
