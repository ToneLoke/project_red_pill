import axios from 'axios'
export const adminInitial = {
  user: {email:null, password:null},
  loggedIn: false
};
const AUTH_API = 'http://localhost:8000/admin';

//======================= ACTION CONSTANTS =======================
export const USER_AUTHENTICATE = 'USER_AUTHENTICATE'
export const USER_SET = 'USER_SET'

export const setUser = ({payload}) => ({user: payload});

export const authenticate = async (body) => {
   console.log("AUTH API CALL", body)
    return await axios.post(AUTH_API, body).then( ({data}) => data)
    //TODO: set local storage for token
}

export const ADMIN_REDUCER = (state, action) => {
  switch (action.type) {
    case USER_SET:
      return setUser(action);
    case USER_AUTHENTICATE:
      return {...action.payload};
    default:
      return state;
  }
}
