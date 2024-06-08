// import { AxiosResponse } from 'axios';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { Login } from 'services/UserService';
// import { jwtDecode } from 'jwt-decode';
// import { NextAuthOptions, User } from 'next-auth';

// type decodeTokenType = {
//   Id: string;
//   Role: string;
//   Email: string;
//   Nome: string;
//   Sobrenome: string;
//   Unidade: string;
//   Cargo: string;
//   nbf: number;
//   exp: number;
//   iat: number;
// };

// export const nextAuthOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Senha', type: 'password' }
//       },

//       async authorize(credentials) {
//         if (!credentials) {
//           return null;
//         }

//         const response = (await Login(
//           credentials!.email,
//           credentials!.password
//         )) as AxiosResponse;

//         if (response.status === 200) {
//           const decodeToken: decodeTokenType = jwtDecode(response.data.token);
//           const user: User = {
//             id: decodeToken.Id,
//             name: decodeToken.Nome + ' ' + decodeToken.Sobrenome,
//             email: decodeToken.Email,
//             role: decodeToken.Role
//           };
//           return user;
//         }
//         // console.log(response.data.message)

//         return null;
//       }
//     })
//   ],
//   pages: {
//     signIn: '/'
//   },
//   callbacks: {
//     jwt({ token, user }) {
//       if (user) {
//         token.role = user.role;
//       }

//       return token;
//     },
//     session({ session, token }) {
//       session.user.role = token.role;
//       return session;
//     }
//   }
// };
