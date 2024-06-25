import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { AxiosResponse } from 'axios';
import { jwtDecode } from 'jwt-decode';

import { Login } from './UserService';

type decodeTokenType = {
  unique_name: string;
  role: string;
  email: string;
  primaryaccess: string;
  active: string;
  nbf: number;
  exp: number;
  iat: number;
};

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Senha', type: 'password' }
      },

      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const response = (await Login(
          credentials!.email,
          credentials!.password
        )) as AxiosResponse;

        if (response.status === 200) {
          const decodeToken: decodeTokenType = jwtDecode(response.data.token);
          const user: User = {
            id: decodeToken.unique_name,
            name: decodeToken.unique_name,
            email: decodeToken.email,
            role: decodeToken.role,
            accessToken: response.data.token
          };
          return user;
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.accessToken = user.accessToken;
      }

      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      session.user.accessToken = token.accessToken;
      return session;
    }
  }
};
