import { api } from './api';

export async function Login(email: string, password: string) {
  const response = await api
    .post('/Auth', {
      email,
      password
    })
    .then((response) => {
      // console.log(response);
      return response;
    })
    .catch((error) => {
      // console.log(error);
      return error.response;
    });

  return response;
}
