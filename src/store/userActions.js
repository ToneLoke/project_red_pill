import axios from 'axios'

export const userInitial = {
  user: null
};

const AUTH_API = 'http://localhost:8000/login';
const REGISTER_API = 'http://localhost:8000/register';

//======================= ACTION CONSTANTS =======================
export const USER_AUTHENTICATE = 'USER_AUTHENTICATE'
export const USER_REGISTER = 'USER_REGISTER'
export const USER_SET = 'USER_SET'

export const setUser = ({payload}) => ({user: payload});
export const setToken = token => localStorage.setItem("token", token)

export const authenticate = async (body) => {
  return await axios.post(AUTH_API, body)
}

export const register = async (body) => {
 return await axios.post(REGISTER_API, body)
}

export const USER_REDUCER = (action, state) => {
  switch (action.type) {
    case USER_SET:
      return setUser(action);
    case USER_AUTHENTICATE:
      if(state){
        setToken(action.payload.token)
        return { alert: { message: action.payload.message } };
      }
      return authenticate
    case USER_REGISTER:
      if(state){
        setToken(action.payload.token)
        return { alert: { message: action.payload.message } };
      }
      return register
    default:
      return {...state, ...action.payload};
  }
}
