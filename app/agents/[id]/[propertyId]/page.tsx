import EditProperty from '@components/agent/EditProperty';
import Error from '@components/layout/Error';
import { authOptions } from '@lib/auth';
import { fetchGemhausData } from '@lib/utils';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { AgentProperty } from 'types';

type Props = {
  params: { id: string; propertyId: string };
};

export default async function UpdateAgentPropertyPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') redirect('/sign-in');

  const { id, propertyId } = params;
  const { data, error } = await fetchGemhausData(`/users/agents/${id}`, {
    next: { tags: [`agent-${id}`] },
  });

  return (
    <main>
      {error ? (
        <Error error={error} />
      ) : (
        <EditProperty
          id={id}
          property={data.properties.find(
            (el: AgentProperty) => el._id === propertyId
          )}
        />
      )}
    </main>
  );
}
