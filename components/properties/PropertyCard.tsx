import Image from 'next/image';
import property from '@public/property.jpg';
import styles from '@components/properties/PropertyCard.module.css';
import { FaBath, FaBed, FaHeart, FaStar, FaUser } from 'react-icons/fa6';

export default function PropertyCard() {
  return (
    <div className={styles.container}>
      <div className={styles.image_and_icons}>
        <Image src={property} alt='Property image' />

        <div className={styles.featured}>
          <p>Featured</p>
          <FaHeart />
        </div>

        <div className={styles.details}>
          <div>
            <FaBed /> 4
          </div>
          <div>
            <FaBath /> 2
          </div>
          <div>
            <FaUser /> 14
          </div>
          <div>
            <FaStar /> 4.9
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h3>The Donkey House</h3>
        <p>Professional Host</p>
        <p>18-23 Dec</p>
        <p>
          <span>From $1,500</span> Per Night
        </p>
      </div>
    </div>
  );
}
