import NextAuth from 'next-auth';

import { nextAuthOptions } from '@/service/authOptions';

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
