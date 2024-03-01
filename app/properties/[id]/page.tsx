import Property from '@components/properties/Property';
import { authOptions } from '@lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

type Props = {
  params: { id: string };
};

export default async function PropertyPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') redirect('/sign-in');

  const { id } = params;

  return (
    <main>
      <Property id={id} />
    </main>
  );
}
