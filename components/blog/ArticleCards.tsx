import styles from './ArticleCards.module.css';
import ArticleCard from './ArticleCard';
import { Article } from 'types';

type Props = {
  articles: Article[];
};

export default function ArticleCards({ articles }: Props) {
  return (
    <div className={styles.container}>
      {articles.map((article) => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </div>
  );
}
