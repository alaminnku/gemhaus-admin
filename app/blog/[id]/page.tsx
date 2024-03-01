import Article from '@components/blog/Article';
import { authOptions } from '@lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

type Props = {
  params: { id: string };
};

export default async function ArticlePage({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') redirect('/sign-in');

  const { id } = params;

  return (
    <main>
      <Article id={id} />
    </main>
  );
}
