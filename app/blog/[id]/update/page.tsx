import EditArticle from '@components/blog/EditArticle';
import Error from '@components/layout/Error';
import { authOptions } from '@lib/auth';
import { fetchGemhausData } from '@lib/utils';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

type Props = {
  params: { id: string };
};

export default async function UpdateArticlePage({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') redirect('/sign-in');

  const { id } = params;
  const { data, error } = await fetchGemhausData(`/articles/${id}`, {
    next: { tags: [`article-${id}`] },
  });

  return (
    <main>
      {error ? <Error error={error} /> : <EditArticle id={id} article={data} />}
    </main>
  );
}
