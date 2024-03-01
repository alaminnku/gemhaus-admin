import Articles from '@components/blog/Articles';
import { authOptions } from '@lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function BlogPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') redirect('/sign-in');

  return (
    <main>
      <Articles />
    </main>
  );
}
