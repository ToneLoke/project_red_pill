import React, { useCallback, createContext, useReducer, useContext } from 'react';
import reducers, { initialState } from './reducers';

//TODO: change api calls to reducer
const Store = createContext();

const Provider = (props) => {
  const { children } = props;
  const [state, dispatcher] = useReducer(reducers, initialState);
  //NOTE: Work around for sending API calls in useReducer hook
  const customDispatch = useCallback(async (action, isReq = false) => {
    if (isReq) {
      try {
        const { data } = await reducers(null, action)(action.payload);
        dispatcher({ type: action.type, payload: data });
      } catch (e) {
        if (e.response && e.response.status) {
          if (e.response.data === 401) localStorage.removeItem('token');
          dispatcher({
            type: 'ALERT_ERROR',
            payload: { alert: { message: e.response.data.message } }
          });
        } else {
          dispatcher({
            type: 'ALERT_ERROR',
            payload: {
              alert: {
                message: `sorry, something went wrong please try again.${JSON.stringify(e) || ''}`
              }
            }
          });
        }
      }
    } else {
      //NOTE: Not a special case(API CALL), dispatch the action
      dispatcher(action);
    }
  }, []);
  const store = { state, dispatch: customDispatch };
  return <Store.Provider value={store}>{children}</Store.Provider>;
};

//this is used for components to access the store; think redux connect but hooks version
const useStore = () => {
  const { state, dispatch } = useContext(Store);
  return { state, dispatch };
};

export { Store, Provider, useStore };
