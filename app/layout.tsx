import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import Header from '@components/layout/Header';
import AlertProvider from '@contexts/Alert';
import { getServerSession } from 'next-auth';
import { authOptions } from '@lib/auth';
import { AuthProvider } from '@contexts/Auth';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GemHaus Admin',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider session={session}>
          <AlertProvider>
            <Header />
            {children}
          </AlertProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
