import Image from 'next/image';
import styles from './FeaturedProperties.module.css';
import { Agent } from 'types';

type Props = {
  agent: Agent;
};

export default function FeaturedProperties({ agent }: Props) {
  return (
    <section className={styles.container}>
      <h2>Bill's Featured Properties</h2>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.image_and_featured}>
            <Image
              src='/agent/property.png'
              width={400}
              height={400}
              alt='Property image'
              className={styles.property_image}
            />

            <div className={styles.featured}>
              <p>Featured</p>
              <img src='/agent/heart.png' />
            </div>
          </div>

          <p className={styles.address}>1100 E Knox Road </p>
          <p className={styles.state}>Tempe, AZ</p>
          <p className={styles.price}>$2,100,000</p>
          <p className={styles.about}>
            9 BD, 8.5 BA, 8,954 SQFT, Single-Family Listing courtesy of The
            Agency
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.image_and_featured}>
            <Image
              src='/agent/property.png'
              width={400}
              height={400}
              alt='Property image'
              className={styles.property_image}
            />

            <div className={styles.featured}>
              <p>Featured</p>
              <img src='/agent/heart.png' />
            </div>
          </div>

          <p className={styles.address}>1100 E Knox Road </p>
          <p className={styles.state}>Tempe, AZ</p>
          <p className={styles.price}>$2,100,000</p>
          <p className={styles.about}>
            9 BD, 8.5 BA, 8,954 SQFT, Single-Family Listing courtesy of The
            Agency
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.image_and_featured}>
            <Image
              src='/agent/property.png'
              width={400}
              height={400}
              alt='Property image'
              className={styles.property_image}
            />

            <div className={styles.featured}>
              <p>Featured</p>
              <img src='/agent/heart.png' />
            </div>
          </div>

          <p className={styles.address}>1100 E Knox Road </p>
          <p className={styles.state}>Tempe, AZ</p>
          <p className={styles.price}>$2,100,000</p>
          <p className={styles.about}>
            9 BD, 8.5 BA, 8,954 SQFT, Single-Family Listing courtesy of The
            Agency
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.image_and_featured}>
            <Image
              src='/agent/property.png'
              width={400}
              height={400}
              alt='Property image'
              className={styles.property_image}
            />

            <div className={styles.featured}>
              <p>Featured</p>
              <img src='/agent/heart.png' />
            </div>
          </div>

          <p className={styles.address}>1100 E Knox Road </p>
          <p className={styles.state}>Tempe, AZ</p>
          <p className={styles.price}>$2,100,000</p>
          <p className={styles.about}>
            9 BD, 8.5 BA, 8,954 SQFT, Single-Family Listing courtesy of The
            Agency
          </p>
        </div>
      </div>
    </section>
  );
}
