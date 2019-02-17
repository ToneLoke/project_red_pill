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


export const authenticate = async (body) => {
  return await axios.post(AUTH_API, body)
}

export const register = async (body) => {
 return await axios.post(REGISTER_API, body)

}

export const ADMIN_REDUCER = (state, action) => {
  switch (action.type) {
    case USER_SET:
      return setUser(action);
    default:
      return {...state, ...action.payload};
  }
}
