import { api } from './api';

export async function getInfoHome() {
  const response = await api
    .get('/InfoHome')
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });

  return response;
}
