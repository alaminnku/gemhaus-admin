import ActionButton from '@components/layout/ActionButton';
import styles from './ArticleCards.module.css';
import ArticleCard from './ArticleCard';

export default function ArticleCards() {
  return (
    <section className={styles.container}>
      <ActionButton href='/blog/create' text='+ Add Article' />

      <div className={styles.article_cards}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </section>
  );
}
