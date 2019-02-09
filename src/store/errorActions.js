import {default as ErrorTracker} from '../../utils/AppError';

export const initialError = {
  error: null
};

export const errorActions = {
  throwError,
  clearError,
};

function throwError({state, action}){
  return {...state, error: new ErrorTracker("Context thrown error:", ...action.payload) }
}

function clearError({state, action}){
  return {...state, error: null }
}
