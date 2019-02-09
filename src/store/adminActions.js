import { useFetch } from './helpers';

export const adminInitialState = {
  user: null
};

const login = async (state, action) => {
  const payload = {
    url: 'http://localhost:8000/admin',
    method: 'POST',
    data: action.payload
  }
  try {
   const admin = await useFetch(payload)
   console.log("200:", admin)
   return {...state, admin}
  } catch (error) {
   return {...state}
  }
};


export const adminActions = {
  login,
}
