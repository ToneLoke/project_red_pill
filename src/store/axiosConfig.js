import axios from 'axios'

const getToken = () => localStorage.getItem('token')

const http = axios.create ({
  baseURL: 'http://localhost:8000',
  timeout: 1000,
  headers: {'Content-Type': 'application/json'},
});

http.interceptors.request.use (
  function (config) {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
);

export default http;
