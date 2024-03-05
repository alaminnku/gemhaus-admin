import EditAgent from '@components/agent/EditAgent';
import Error from '@components/layout/Error';
import { authOptions } from '@lib/auth';
import { fetchGemhausData } from '@lib/utils';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

type Props = {
  params: { id: string };
};

export default async function UpdateAgentPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') redirect('/sign-in');

  const { id } = params;
  const { data, error } = await fetchGemhausData(`/users/agents/${id}`, {
    next: { tags: [`agent-${id}`] },
  });

  return (
    <main>
      {error ? <Error error={error} /> : <EditAgent id={id} agent={data} />}
    </main>
  );
}
