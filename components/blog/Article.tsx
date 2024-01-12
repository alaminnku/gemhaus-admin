import Error from '@components/layout/Error';
import { getData } from '@lib/utils';
import styles from './Article.module.css';
import Image from 'next/image';

export default async function Article({ id }: { id: string }) {
  const { data, error } = await getData(`/articles/${id}`);

  return (
    <section className={styles.container}>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <Image src={data.image} alt={data.title} width={800} height={450} />
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
