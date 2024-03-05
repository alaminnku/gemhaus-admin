import Image from 'next/image';
import styles from './Hero.module.css';
import { Agent } from 'types';
import { QRCodeSVG } from 'qrcode.react';
import LinkButton from '@components/layout/LinkButton';

type Props = {
  agent: Agent;
};

export default function Hero({ agent }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.media}>
        <LinkButton href={`/agents/${agent._id}/update`} text='Edit Agent' />
        <Image
          src={agent.image}
          width={500}
          height={500}
          alt='Agent image'
          className={styles.agent_image}
        />

        <div className={styles.cta}>
          <div className={styles.actions}>
            <LinkButton
              href={`/agents/${agent._id}/add-property`}
              text='+ Add Property'
            />
            <LinkButton
              href={`/agents/${agent._id}/add-transaction`}
              text='+ Add Transaction'
            />
          </div>

          <QRCodeSVG value={agent.qrCodeLink} className={styles.qr_code} />
        </div>
      </div>

      <div className={styles.content}>
        <h1>{agent.name}</h1>
        <p className={styles.address}>{agent.address}</p>
        <p className={styles.email}>{agent.email}</p>
        <p className={styles.phone}>{agent.phone}</p>
        <div dangerouslySetInnerHTML={{ __html: agent.bio }}></div>
      </div>
    </section>
  );
}
