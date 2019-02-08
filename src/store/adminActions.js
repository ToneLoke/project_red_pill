
export const adminInitialState = {
  user: {
    loggedIn: false,
    prevGames: [], // list of game ids

  }
};

export const adminActions = {
  login: state => {
    return { user: { loggedIn: true } };
  },
  logout: state => {
    return { user: { loggedIn: false } };
  }
};
