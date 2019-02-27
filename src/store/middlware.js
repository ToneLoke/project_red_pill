// // import { createLogger } from 'redux-logger'
// // const logger = createLogger({
// //   diff: true
// // });
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
// // ======================= Create Global Store Context =======================
// // =======================  =======================
// const compose = (...funcs) => x =>
//   funcs.reduceRight((composed, f) => f(composed), x);
// //======================= Method called to create the store object with reducers and middlewares =======================
// const combineMiddleware = (sharedDispatch, middlewares) => {
//   //======================= useReducer hook creates state management =======================
//   //======================= verify we are using middleware and construct new dispatch method =======================
//   if (typeof middlewares !== "undefined") {
//     const middlewareAPI = {
//       getState: () => state,
//       dispatch: action => dispatch(action)
//     };
//     //======================= create a chain of functions for each middleware applied =======================
//     const chain = middlewares.map(middleware => middleware(middlewareAPI));
//     //======================= ????? =======================
//     const enhancedDispatch = compose(...chain)(sharedDispatch);
//     return  enhancedDispatch

// };
