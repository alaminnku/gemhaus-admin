import Error from '@components/layout/Error';
import AddProperty from '@components/properties/AddProperty';
import { authOptions } from '@lib/auth';
import { fetchGemhausData } from '@lib/utils';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function page() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') redirect('/sign-in');

  const { data, error } = await fetchGemhausData('/properties/offerings');

  return (
    <main>
      {error ? <Error error={error} /> : <AddProperty offerings={data} />}
    </main>
  );
}
