'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function SingInPage() {
  const { data } = useSession();

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
