import React, { useCallback, createContext, useReducer, useContext } from "react";
import reducers, { initialState } from "./reducers";



//TODO: change api calls to reducer

const Store = createContext();
//TODO: FIGURE OUT SOME TYPE OF MIDDLEWARE from the above commented code.
const Provider = (props) => {
  const { children } = props;
  const [state, dispatcher] = useReducer(reducers, initialState);
  const customDispatch = useCallback(async (action, isReq = false) => {
    if(isReq){
      try{
        const {data} = await reducers(null,action)(action.payload)
        dispatcher({ type: action.type, payload: data});
      }catch(e){
        console.log("==================REQUEST ERROR=============================")
        console.log(e)
        if(e.response && e.response.status && e.response.data === 401 )
        {
          localStorage.removeItem("token")
          dispatcher({
            type: "ALERT_ERROR",
            payload: { alert: {message: e.response.data.message }}
          })
        }else{
          //dispatch error?
        }
      }
    }else{
      // Not a special case(API CALL), dispatch the action
      console.log("NORMAL ACTION UPDATE")
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
