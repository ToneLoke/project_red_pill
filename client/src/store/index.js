import React, { useCallback, createContext, useReducer, useContext } from 'react';
import { initialState, reducers, requests } from './reducers';
import { logger } from '../utils';

export const storeLog = logger('STORE');
const actionLog = logger('ACTION');

//TODO: change api calls to reducer
const Store = createContext();

const Provider = (props) => {
  const { children } = props;
  const [state, dispatcher] = useReducer(reducers, initialState);
  //NOTE: Work around for sending API calls in useReducer hook
  const customDispatch = useCallback(async (action, isPreFetch = false) => {
    if (isPreFetch) {
      try {
        actionLog('REQUEST SENT %O', action)
        const { data } = await requests(action)(action.payload)
        storeLog('REQUEST RECIEVED %O', data);
        actionLog('%o', action);
        dispatcher({ type: action.type, payload: data });
      } catch (e) {
        //NOTE: custom error from server
        storeLog('REQUEST ERROR %o', e);
        if (e.response && e.response.status) {
          if (e.response.data === 401) localStorage.removeItem('token');
          dispatcher({
            type: 'ALERT_ERROR',
            payload: { alert: { message: e.response.data.message } }
          });
        } else {
          //NOTE: unknown error
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
      actionLog('%o', action)
      dispatcher(action);
    }
  }, []);
  //TIP: maybe convert to flatter object or array
  const store = { state, dispatch: customDispatch };
  return <Store.Provider value={store}>{children}</Store.Provider>;
};

//this is used for components to access the store; think redux connect but hooks version
const useStore = () => {
  const { state, dispatch } = useContext(Store);
  return { state, dispatch };
};

export { Store, Provider, useStore };
