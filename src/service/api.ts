import axios from 'axios';
import Cookies from 'js-cookie';

// criar arquivo .env e adicionar a variável de ambiente com a url da api

export const api = axios.create({
  baseURL: 'http://localhost:5263/api'
});

// inteceptor padrão

api.interceptors.request.use(
  (config) => {
    const myToken = Cookies.get('token');
    if (myToken) {
      config.headers.Authorization = `Bearer ${myToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
