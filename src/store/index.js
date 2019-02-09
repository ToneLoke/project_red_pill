import React, { createContext, useReducer, useContext } from "react";
import reducers, { initialState } from "./reducers";
import { createLogger } from 'redux-logger'

const logger = createLogger({
  diff: true
});

// const customMiddleware = store => next => action => {
//   console.log("Action Triggered");
//   logger(action);
//   next(action);
// };

const Store = createContext();

const compose = (...funcs) => x =>
  funcs.reduceRight((composed, f) => f(composed), x);

const createStore = (reducer, initial, middlewares) => {
  const [state, dispatch] = useReducer(reducer, initial);

  if (typeof middlewares !== "undefined") {
    const middlewareAPI = {
      getState: () => state,
      dispatch: action => dispatch(action)
    };
    const chain = middlewares.map(middleware => middleware(middlewareAPI));
    const enhancedDispatch = compose(...chain)(dispatch);
    return { state, dispatch: enhancedDispatch };
  }

  return { state, dispatch };
};

const Provider = ({ children }) => {
  const store = createStore(reducers, initialState, [logger]);
  return <Store.Provider value={store}>{children}</Store.Provider>;
};


const useStore = () => {
  const { state, dispatch } = useContext(Store);
  return { state, dispatch };
}

export { Store, Provider, useStore };
