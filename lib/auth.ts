import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { fetchGemhausData } from './utils';
import { JWT } from 'next-auth/jwt';

// NextAuth options
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

        const { data, error } = await fetchGemhausData('/users/sign-in', {
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
          refreshToken: data.refreshToken,
          expiresIn: data.expiresIn,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.expiresIn = user.expiresIn;
      }
      if (Date.now() < token.expiresIn) return token;
      return await refreshToken(token);
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

// Refresh token
async function refreshToken(token: JWT) {
  const { data, error } = await fetchGemhausData('/auth/refresh-token', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token.refreshToken}`,
    },
  });
  if (error) return token;

  return {
    ...token,
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    expiresIn: data.expiresIn,
  };
}
