import Agents from '@components/agents/Agents';
import { authOptions } from '@lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function AgentsPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') redirect('/sign-in');

  return (
    <main>
      <Agents />
    </main>
  );
}
