import React, { useCallback, createContext, useReducer, useContext } from "react";
import reducers, { initialState } from "./reducers";
import { authenticate, register } from "./adminActions";
import { fetchGames, createOrUpdateGame } from "./gameActions";
// import { createLogger } from 'redux-logger'
// const logger = createLogger({
//   diff: true
// });
// const customMiddleware = store => next => action => {
//   console.log("Action Triggered");
//   console.log("=====================")
//   console.log("ACTION", action)
//   console.log("=====================")
//   console.log("STORE", store)
//   console.log("=====================")
//   console.log("Next", next)
//   next(action);
// };
//======================= Create Global Store Context =======================
//=======================  =======================
// const compose = (...funcs) => x =>
//   funcs.reduceRight((composed, f) => f(composed), x);
// //======================= Method called to create the store object with reducers and middlewares =======================
// const createStore = (reducer, initial, middlewares) => {
//   //======================= useReducer hook creates state management =======================
//   const [state, dispatch] = useReducer(reducer, initial);
//   //======================= verify we are using middleware and construct new dispatch method =======================
//   if (typeof middlewares !== "undefined") {
//     const middlewareAPI = {
//       getState: () => state,
//       dispatch: action => dispatch(action)
//     };
//     //======================= create a chain of functions for each middleware applied =======================
//     const chain = middlewares.map(middleware => middleware(middlewareAPI));
//     //======================= ????? =======================
//     const enhancedDispatch = compose(...chain)(dispatch);
//     return { state, dispatch: enhancedDispatch };
//   }
//   return { state, dispatch };
// };
const Store = createContext();
const setToken = (token) => window.localStorage.setItem('token', token)
//TODO: FIGURE OUT SOME TYPE OF MIDDLEWARE from the above commented code.
const Provider = (props) => {
  const { children } = props;
  const [state, dispatcher] = useReducer(reducers, initialState);
  const customDispatch = useCallback(async (action) => {
    switch (action.type) {
      case "USER_AUTHENTICATE":
        try{
          const { data } = await authenticate(action.payload)
          setToken(data.token)
          dispatcher({
            type: 'ALERT_SUCCESS',
            payload: { alert: { message: data.message }, loggedIn: true }
          });
        }catch(e){
          dispatcher({
            type: "ALERT_ERROR",
            payload: { alert: {message:"invalid credentials", messages: e} }
          })
        }
        break;
      case "USER_REGISTER":
        try{
          const {data} = await register(action.payload)
          setToken(data.token)
          dispatcher({
            type: "ALERT_SUCCESS",
            payload: { alert: {message: data.message}, loggedIn: true }
          });
        }catch(e){
          dispatcher({
            type: "ALERT_ERROR",
            payload: { alert: {message:"cannot register", messages: e} }
          })
        }
        break;
      case "GAME_FETCH_ALL":
        try{
          const {data } = await fetchGames()
          dispatcher({
            type: action.type,
            payload: data
          });
        }catch(e){
          dispatcher({
            type: "ALERT_ERROR",
            payload: { alert: {message:"cannot retrieve admin games", messages: e} }
          })
        }
        break;
      case "GAME_CREATE_UPDATE":
        try{
          const { data } = await createOrUpdateGame(action.payload)
          dispatcher({
            type: action.type,
            payload: { game: data, alert: { message: "updated game successfully!"} }
          });
        }catch(e){
          dispatcher({
            type: "ALERT_ERROR",
            payload: { alert: {message:"cannot update game", messages: e} }
          })
        }
        break;
      default:
        // Not a special case(API CALL), dispatch the action
       dispatcher(action);
    }
  }, []);
  const store = { state, dispatch: customDispatch }
  return <Store.Provider value={store}>{children}</Store.Provider>;
};

//this is used for components to access the store; think redux connect but hooks version
const useStore = () => {
  const { state, dispatch } = useContext(Store);
  return { state, dispatch };
}

export { Store, Provider, useStore };
