import axios from 'axios'
// axios.interceptors.response.use((response) => {
//   console.log("intercepter good", response)
//   return response;
// }, function (error) {
//   // Do something with response error
//       console.log('unauthorized, logging out ...', error);
//       return Promise.reject(error.response);
// });
export const adminInitial = {
  user: {email:null, password:null},
  loggedIn: false
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

export const ADMIN_REDUCER = (action, state) => {
  switch (action.type) {
    case USER_SET:
      return setUser(action);
    case USER_AUTHENTICATE:
      if(state){
        setToken(action.payload.token)
        return { alert: { message: action.payload.message }, loggedIn: true };
      }
      return authenticate
    case USER_REGISTER:
      if(state){
        setToken(action.payload.token)
        return { alert: { message: action.payload.message }, loggedIn: true };
      }
      return register
    default:
      return {...state, ...action.payload};
  }
}
