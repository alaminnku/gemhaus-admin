import styles from '@components/properties/PropertyCards.module.css';
import PropertyCard from './PropertyCard';
import { Property } from 'types';

type Props = {
  properties: Property[];
};

export default function PropertyCards({ properties }: Props) {
  return (
    <div className={styles.container}>
      {properties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  );
}
