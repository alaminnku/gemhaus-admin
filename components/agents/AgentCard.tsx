import { Agent } from 'types';
import styles from './AgentCard.module.css';

type Props = {
  agent: Agent;
};

export default function AgentCard({ agent }: Props) {
  return (
    <div className={styles.container}>
      <p>{agent.name}</p>
    </div>
  );
}
