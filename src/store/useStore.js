import React, { createContext, useReducer, useContext } from "react";
import { adminInitialState, adminActions } from "./adminActions";
// we'll leave this empty for now
const initialState = {
  ...adminInitialState
}

const StoreContext = createContext(initialState);

// this will act as a map of actions that will trigger state mutations
const Actions = {
  ...adminActions
};

// the reducer is called whenever a dispatch action is made.
// the action.type is a string which maps to a function in Actions.
// We apply the update to existing state, and return a new copy of state.
const reducer = async (state, action) => {
  try {
    const act = Actions[action.type];
    const update = await act(state, action);
    console.trace('STORE REDUCER:', update)
    return { ...state, ...update };
  } catch (e) {
    console.error("STORE REDUCER ERROR:", e)
  }
};

// useStore will be used in React components to fetch and mutate state
export const useStore = store => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // console.trace("Store refresh:", state)
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
