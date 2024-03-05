import { fetchGemhausData } from '@lib/utils';
import FeaturedProperties from './FeaturedProperties';
import Hero from './Hero';
import Properties from './Properties';
import Transactions from './Transactions';
import Error from '@components/layout/Error';

type Props = {
  id: string;
};

export default async function Agent({ id }: Props) {
  const { data, error } = await fetchGemhausData(`/users/agents/${id}`, {
    next: { tags: [`agent-${id}`] },
  });

  return (
    <>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <Hero agent={data} />
          {data.properties && <Properties agent={data} />}
          {data.properties && <FeaturedProperties agent={data} />}
          {data.transactions && <Transactions agent={data} />}
        </>
      )}
    </>
  );
}
