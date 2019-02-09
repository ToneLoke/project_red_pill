import {default as ErrorTracker} from '../utils/AppError'

export const adminInitialState = {
  user: {email:null, password:null},
  loggedIn: false,
};

const setUser = (state, user) => ({user, loggedIn: true});


export const adminActions = {
  setUser,
}
