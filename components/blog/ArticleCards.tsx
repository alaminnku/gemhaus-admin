import ActionButton from '@components/layout/ActionButton';
import styles from './ArticleCards.module.css';
import ArticleCard from './ArticleCard';
import { Article } from 'types';

type Props = {
  articles: Article[];
};

export default function ArticleCards({ articles }: Props) {
  return (
    <section className={styles.container}>
      <ActionButton href='/blog/create' text='+ Add Article' />

      <div className={styles.article_cards}>
        {articles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </section>
  );
}
