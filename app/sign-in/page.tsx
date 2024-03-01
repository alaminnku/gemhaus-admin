import Form from '@components/signIn/Form';
import { authOptions } from '@lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function SingInPage() {
  const session = await getServerSession(authOptions);
  if (session && session.user.role === 'ADMIN') redirect('/');

  return (
    <main>
      <Form />
    </main>
  );
}
