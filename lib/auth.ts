import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { fetchGemhausData } from './utils';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'john@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          throw new Error('Email or password is missing');

        const formData = new FormData();
        formData.append('email', credentials.email);
        formData.append('password', credentials.password);

        const { data, error } = await fetchGemhausData('/users/authorize', {
          method: 'POST',
          body: formData,
        });
        if (error) throw new Error(error.message);
        if (data.role !== 'ADMIN') throw new Error('Invalid credentials');

        return {
          id: data._id,
          name: data.name,
          email: data.email,
          role: data.role,
          accessToken: data.accessToken,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
};
