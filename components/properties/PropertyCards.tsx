import styles from '@components/properties/PropertyCards.module.css';
import PropertyCard from './PropertyCard';

export default function PropertyCards() {
  return (
    <div className={styles.container}>
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </div>
  );
}
