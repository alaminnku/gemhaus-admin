import LinkButton from '@components/layout/LinkButton';
import styles from './Agents.module.css';
import { fetchGemhausData } from '@lib/utils';
import Error from '@components/layout/Error';
import AgentCards from './AgentCards';

export default async function Agents() {
  const { data, error } = await fetchGemhausData('/users/agent', {
    next: { tags: ['agents'] },
  });

  return (
    <section className={styles.container}>
      <LinkButton href='/agents/add' text='+ Add Agent' />
      {error ? <Error error={error} /> : <AgentCards agents={data} />}
    </section>
  );
}
