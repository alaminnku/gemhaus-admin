import ActionButton from '@components/layout/ActionButton';
import styles from './ArticleCards.module.css';
import ArticleCard from './ArticleCard';
import { Article } from 'types';
import { fetchInstance } from '@utils/index';
import Error from '@components/layout/Error';

export default async function ArticleCards() {
  const { data, error } = await fetchInstance('/articles', {
    cache: 'no-cache',
    next: { tags: ['articles'] },
  });
  const articles: Article[] = data;

  return (
    <section className={styles.container}>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <ActionButton href='/blog/create' text='+ Add Article' />

          <div className={styles.article_cards}>
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
