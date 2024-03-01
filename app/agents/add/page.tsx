import AddAgent from '@components/agents/AddAgent';
import { authOptions } from '@lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function AddAgentPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') redirect('/sign-in');

  return (
    <main>
      <AddAgent />
    </main>
  );
}
