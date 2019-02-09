import {default as ErrorTracker} from '../utils/AppError';

export const initialError = {
  error: null
};

const throwError = (state, action) => {
  const error = new ErrorTracker(action.payload).format();
  return {error}
}

const clearError = (state, action) => {
  return {error: null}
}

export const errorActions = {
  throwError,
  clearError,
};
