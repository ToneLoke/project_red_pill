import axios from './axiosConfig'
export const userInitial = {
  user: null
};

const AUTH_API = '/login';
const REGISTER_API = '/register';
const ME_API = '/me';

//======================= ACTION CONSTANTS =======================
export const USER_AUTHENTICATE = 'USER_AUTHENTICATE'
export const USER_REGISTER = 'USER_REGISTER'
export const USER_SET = 'USER_SET'
export const USER_INFO = 'USER_INFO'

export const setUser = ({payload}) => ({user: payload});
export const setToken = token => localStorage.setItem("token", token)

export const authenticate = async (body) => {
  return await axios.post(AUTH_API, body)
}

const fetchUser = async () => {
  return await axios.get(ME_API)
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
    case USER_INFO:
      if(state){
        return setUser(action)
      }
      return fetchUser
    default:
      return state
  }
}
