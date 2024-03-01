'use client';

import { signIn, signOut } from 'next-auth/react';

export default function SingInPage() {
  return (
    <main>
      <input type='text' placeholder='Email' />
      <input type='Password' placeholder='Password' />
      <button
        onClick={() =>
          signIn('credentials', {
            email: 'alaminn.ku@gmail.com',
            password: 'hello2024',
            redirect: false,
          })
        }
      >
        Sign In
      </button>

      <button onClick={() => signOut()}>Sign Out</button>
    </main>
  );
}
