import styles from '@components/blog/ArticleCard.module.css';
import Image from 'next/image';
import property from '@public/property.jpg';

export default function ArticleCard() {
  return (
    <div className={styles.container}>
      <Image src={property} alt='Blog thumbnail' />

      <div className={styles.content}>
        <p className={styles.published}>Posted on: November 8, 2023</p>
        <p>
          Making a Splash in the Rental Market: The Value of Pools in Your
          Property
        </p>
      </div>
    </div>
  );
}
