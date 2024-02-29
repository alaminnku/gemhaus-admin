import { Agent } from 'types';
import styles from './AgentCards.module.css';
import AgentCard from './AgentCard';

type Props = {
  agents: Agent[];
};

export default function AgentCards({ agents }: Props) {
  return (
    <div className={styles.container}>
      {agents.map((agent) => (
        <AgentCard key={agent._id} agent={agent} />
      ))}
    </div>
  );
}
