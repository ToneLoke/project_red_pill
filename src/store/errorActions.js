import {default as ErrorTracker} from '../utils/AppError';

export const initialError = {
  error: null
};

export const ERROR_THROWN = 'ERROR_THROWN';
export const ERROR_CLEAR  = 'ERROR_CLEAR';

export const throwError = (action) => {
  const error = new ErrorTracker(action.payload).format();
  return {error}
}

export const clearError = (action) => {
  return {error: null}
}

export const ERROR_REDUCER = (state, action) => {
  switch (action.type) {
    case ERROR_THROWN:
      return throwError(action);
    case ERROR_CLEAR:
      return clearError(action);
    default:
      return state;
  }
}
