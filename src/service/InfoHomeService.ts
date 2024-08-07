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

export async function deleteInfoHome(id: string) {
  console.log(id);
  const response = await api
    .delete(`/InfoHome/`, {
      params: {
        Id: id
      }
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error.response;
    });

  return response;
}

export async function putInfoHome(data: FormData) {
  const response = await api
    .put('/InfoHome', data, {
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
