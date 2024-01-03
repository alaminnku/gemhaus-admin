import ActionButton from '@components/layout/ActionButton';
import styles from './Properties.module.css';
import PropertyCards from './PropertyCards';

export default function Properties() {
  return (
    <section className={styles.container}>
      <ActionButton href='/properties/create' text='+ Add Property' />
      <PropertyCards />
    </section>
  );
}
