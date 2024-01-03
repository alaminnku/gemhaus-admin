import ActionButton from '@components/layout/ActionButton';
import styles from './ArticleCards.module.css';
import ArticleCard from './ArticleCard';
import { Article } from 'types';

export default async function ArticleCards() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
    credentials: 'include',
  });
  const articles: Article[] = await response.json();

  return (
    <section className={styles.container}>
      <ActionButton href='/blog/create' text='+ Add Article' />

      <div className={styles.article_cards}>
        {articles.map((article) => (
          <ArticleCard article={article} />
        ))}
        {/* <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard /> */}
      </div>
    </section>
  );
}
