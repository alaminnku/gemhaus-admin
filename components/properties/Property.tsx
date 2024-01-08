import Error from '@components/layout/Error';
import { fetchInstance } from '@utils/index';

export default async function Property({ id }: { id: string }) {
  const { data, error } = await fetchInstance(`/properties/${id}`);

  return (
    <section>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <h1>{data.name}</h1>
        </>
      )}
    </section>
  );
}
