import Image from 'next/image';
import styles from './Properties.module.css';
import { Agent } from 'types';
import { createUSD } from '@lib/utils';

type Props = {
  agent: Agent;
};

export default function Properties({ agent }: Props) {
  return (
    <section className={styles.container}>
      <h2>{agent.name}'s Properties</h2>

      <div className={styles.cards}>
        {agent.properties.map((property) => (
          <div className={styles.card}>
            <div key={property._id} className={styles.image_and_price}>
              <Image
                src={property.image}
                width={800}
                height={500}
                alt='Property image'
              />
              <p className={styles.price}>{createUSD(property.price)}</p>
            </div>

            <div>
              <p className={styles.address}>{property.address}</p>
              <p className={styles.state}>
                {property.city}, {property.state}
              </p>
              <p className={styles.about}>{property.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}