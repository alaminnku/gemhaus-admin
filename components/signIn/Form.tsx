'use client';

import { signIn } from 'next-auth/react';
import styles from './Form.module.css';
import { useAlert } from '@contexts/Alert';
import { isValidEmail } from '@lib/utils';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
  const router = useRouter();
  const { setAlert } = useAlert();

  async function credentialSignIn(formData: FormData) {
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password)
      return setAlert({
        message: 'Email or password is missing',
        type: 'failed',
      });
    if (!isValidEmail(email as string))
      return setAlert({
        message: 'Please provide a valid email',
        type: 'failed',
      });

    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    if (response?.error)
      return setAlert({ message: response.error, type: 'failed' });

    router.push('/');
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Sign in</h2>
      <form action={credentialSignIn}>
        <input type='email' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <button type='submit'>Sign in</button>
      </form>
    </section>
  );
}
