import Error from '@components/layout/Error';
import { authOptions } from '@lib/auth';
import { fetchGemhausData } from '@lib/utils';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import EditProperty from '@components/properties/EditProperty';

type Props = {
  params: { id: string };
};

export default async function EditPropertyPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') redirect('/sign-in');

  const { data: offerings, error: offeringsError } = await fetchGemhausData(
    '/properties/offerings'
  );

  const { id } = params;
  const { data: property, error: propertyError } = await fetchGemhausData(
    `/properties/${id}`,
    {
      next: { tags: [`property-${id}`] },
    }
  );

  return (
    <main>
      {offeringsError || propertyError ? (
        <Error error={offeringsError || propertyError} />
      ) : (
        <EditProperty id={id} offerings={offerings} property={property} />
      )}
    </main>
  );
}
