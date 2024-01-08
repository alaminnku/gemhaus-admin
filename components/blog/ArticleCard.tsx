import styles from '@components/blog/ArticleCard.module.css';
import Image from 'next/image';
import property from '@public/property.jpg';
import { Article } from 'types';
import Link from 'next/link';

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <Link href={`/blog/${article._id}`} className={styles.container}>
      <Image src={property} alt='Blog thumbnail' />

      <div className={styles.content}>
        <p className={styles.published}>Posted on: November 8, 2023</p>
        <p>{article.title}</p>
      </div>
    </Link>
  );
}
