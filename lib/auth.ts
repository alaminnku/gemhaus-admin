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
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      const { data, error } = await fetchGemhausData(`/users/${token.sub}`);
      if (error) return token;

      return {
        ...token,
        id: data._id,
        role: data.role,
      };
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
  },
};
