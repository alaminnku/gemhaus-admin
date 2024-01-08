import Error from '@components/layout/Error';
import { fetchInstance } from '@utils/utils';
import styles from './Property.module.css';

export default async function Property({ id }: { id: string }) {
  const { data, error } = await fetchInstance(`/properties/${id}`);

  return (
    <section className={styles.container}>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <h1>{data.name}</h1>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>
        </>
      )}
    </section>
  );
}
