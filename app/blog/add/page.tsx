import AddArticle from '@components/blog/AddArticle';
import { authOptions } from '@lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function AddBlogPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') redirect('/sign-in');

  return (
    <main>
      <AddArticle />
    </main>
  );
}
