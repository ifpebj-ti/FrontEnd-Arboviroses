import axios from 'axios';

// criar arquivo .env e adicionar a variável de ambiente com a url da api

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

// inteceptor padrão

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
