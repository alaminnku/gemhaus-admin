import Error from '@components/layout/Error';
import AddProperty from '@components/properties/AddProperty';
import { fetchGemhausData } from '@lib/utils';

export default async function page() {
  const { data, error } = await fetchGemhausData('/properties/offerings');

  return (
    <main>
      {error ? <Error error={error} /> : <AddProperty offerings={data} />}
    </main>
  );
}
