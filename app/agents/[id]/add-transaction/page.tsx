import AddTransaction from '@components/agent/AddTransaction';
import { authOptions } from '@lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

type Props = {
  params: { id: string };
};

export default async function AddPropertyPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') redirect('/sign-in');

  return (
    <main>
      <AddTransaction id={params.id} />
    </main>
  );
}
