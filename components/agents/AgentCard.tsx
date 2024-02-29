import { Agent } from 'types';
import styles from './AgentCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  agent: Agent;
};

export default function AgentCard({ agent }: Props) {
  return (
    <Link href={`/agents/${agent._id}`} className={styles.container}>
      <Image
        src={agent.image}
        width={400}
        height={400}
        alt={`${agent.name}'s image`}
      />

      <p className={styles.name}>{agent.name}</p>
      <p className={styles.email}>{agent.email}</p>
      <p className={styles.phone}>{agent.phone}</p>
    </Link>
  );
}
