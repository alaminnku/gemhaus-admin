import ActionButton from '@components/layout/ActionButton';
import styles from './ArticleCards.module.css';
import ArticleCard from './ArticleCard';
import { Article } from 'types';
import { fetchInstance } from '@utils/index';
import Error from '@components/layout/Error';

export default async function ArticleCards() {
  const { data, error } = await fetchInstance('/articles', {
    next: { tags: ['articles'] },
  });
  const articles: Article[] = data;

  return (
    <section className={styles.container}>
      <ActionButton href='/blog/add' text='+ Add Article' />

      {error ? (
        <Error error={error} />
      ) : (
        <div className={styles.article_cards}>
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
