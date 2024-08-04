import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

import { api } from './api';

export async function Login(email: string, password: string) {
  const response = await api
    .post('/Auth', {
      email,
      password
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

export async function NewPassword(
  newPassword: string,
  defaultPassword: string
) {
  const myToken = Cookies.get('token');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const myUser: any = jwtDecode(myToken!);

  const response = await api
    .post('/Auth/primaryaccess', {
      email: myUser.email,
      newPassword,
      defaultPassword
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });

  return response;
}

export async function RecoverPassword(
  email: string,
  accessCode: string,
  newPassword: string
) {
  const response = await api
    .post('/Auth/updatepassword', {
      password: newPassword,
      email,
      uniqueCode: accessCode
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });

  return response;
}

export async function getUsers() {
  const response = await api
    .get('/User')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response;
    });

  return response;
}
