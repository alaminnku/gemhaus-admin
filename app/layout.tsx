import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import Header from '@components/layout/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'GemHaus Admin',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
