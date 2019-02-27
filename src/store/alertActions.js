

export const ALERT_SUCCESS = 'ALERT_SUCCESS';
export const ALERT_ERROR = 'ALERT_ERROR';
export const ALERT_CLEAR  = 'ALERT_CLEAR';

 const throwError = ({payload}) => {
  return { ...payload, class: 'error' }
}

 const throwSuccess = ({payload}) => {
  return { ...payload, class: 'success' }
}

 const clearALERT = () => {
  return { alert: null}
}

export const ALERT_REDUCER = (action, state) => {
  switch (action.type) {
    case ALERT_ERROR:
      return throwError(action);
    case ALERT_SUCCESS:
      return throwSuccess(action);
    case ALERT_CLEAR:
      return clearALERT();
    default:
      return state;
  }
}
