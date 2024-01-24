import LinkButton from '@components/layout/LinkButton';
import styles from './Properties.module.css';
import PropertyCards from './PropertyCards';
import { fetchGemhausData } from '@lib/utils';
import Error from '@components/layout/Error';

export default async function Properties() {
  const { data, error } = await fetchGemhausData('/properties', {
    next: {
      tags: ['properties'],
    },
  });

  return (
    <section className={styles.container}>
      <LinkButton href='/properties/add' text='+ Add Property' />
      {error ? <Error error={error} /> : <PropertyCards properties={data} />}
    </section>
  );
}
