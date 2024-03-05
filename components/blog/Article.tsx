import Error from '@components/layout/Error';
import { fetchGemhausData } from '@lib/utils';
import styles from './Article.module.css';
import Image from 'next/image';
import LinkButton from '@components/layout/LinkButton';

export default async function Article({ id }: { id: string }) {
  const { data, error } = await fetchGemhausData(`/articles/${id}`, {
    next: { tags: [`article-${id}`] },
  });

  return (
    <section className={styles.container}>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <LinkButton text='Edit Article' href={`/blog/${id}/update`} />
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
