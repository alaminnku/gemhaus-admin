import styles from './ArticleCards.module.css';
import ArticleCard from './ArticleCard';
import { Article } from 'types';

type Props = {
  articles: Article[];
};

export default async function ArticleCards({ articles }: Props) {
  return (
    <div className={styles.container}>
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
}
