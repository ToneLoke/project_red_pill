export const adminInitialState = {
  user: {email:null, password:null},
};

const setUser = (state, {payload: {user}}) => ({user});

export const adminActions = {
  setUser,
}
