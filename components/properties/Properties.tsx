import ActionButton from '@components/layout/ActionButton';
import styles from './Properties.module.css';
import PropertyCards from './PropertyCards';
import { getData } from '@lib/utils';
import Error from '@components/layout/Error';

export default async function Properties() {
  const { data, error } = await getData('/properties', {
    cache: 'no-cache',
    next: {
      tags: ['properties'],
    },
  });

  return (
    <section className={styles.container}>
      <ActionButton href='/properties/add' text='+ Add Property' />
      {error ? <Error error={error} /> : <PropertyCards properties={data} />}
    </section>
  );
}
