import axios from "./axiosConfig";
export const userInitial = {
  user: null
};

const AUTH_API = "/login";
const REGISTER_API = "/register";
const ME_API = "/me";

//======================= ACTION CONSTANTS =======================
export const USER_AUTHENTICATE = "USER_AUTHENTICATE";
export const USER_REGISTER = "USER_REGISTER";
export const USER_SET = "USER_SET";
export const USER_INFO = "USER_INFO";
export const USER_LOGOUT = "USER_LOGOUT";

export const setUser = ({ payload }) => ({ user: payload });

export const setToken = token => sessionStorage.setItem("token", token);

const authenticate = async body => {
  return await axios.post(AUTH_API, body);
};

const fetchUser = async () => {
  return await axios.get(ME_API, { retry: 2, retryDelay: 1000 });
};

const register = async body => {
  return await axios.post(REGISTER_API, body);
};

export const USER_REQUESTS = (type) => {
  switch (type) {
    case USER_AUTHENTICATE:
      return authenticate;
    case USER_REGISTER:
      return register;
    case USER_INFO:
      return fetchUser;
    default:
      return Promise.reject(new Error("Missing user request."));
  }
};

export const USER_REDUCER = (state, action) => {
  switch (action.type) {
    case USER_SET:
      return setUser(action);
    case USER_LOGOUT:
      sessionStorage.removeItem("token");
      return userInitial;
    case USER_AUTHENTICATE:
      setToken(action.payload.token);
      return {
        alert: { message: action.payload.message },
        user: action.payload.user
      };
    case USER_REGISTER:
      setToken(action.payload.token);
      return {
        alert: { message: action.payload.message },
        user: action.payload.user
      };
    case USER_INFO:
      if (!action.payload) sessionStorage.removeItem("token");
      return setUser(action);
    default:
      return state;
  }
};
