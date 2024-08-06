import { api } from './api';

export async function postInfoHome(data: FormData) {
  const response = await api
    .post('/InfoHome', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });

  return response;
}

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
