import Error from '@components/layout/Error';
import { fetchInstance } from '@utils/index';
import styles from './Article.module.css';

export default async function Article({ id }: { id: string }) {
  const { data, error } = await fetchInstance(`/articles/${id}`);

  return (
    <section className={styles.container}>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <h1>{data.title}</h1>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></div>
        </>
      )}
    </section>
  );
}
