import { Agent } from 'types';
import styles from './Transaction.module.css';

type Props = {
  agent: Agent;
};

export default function Transactions({ agent }: Props) {
  const soldTransactions = agent.transactions.filter(
    (transaction) => transaction.type === 'sold'
  );

  return (
    <section className={styles.container}>
      <h2>
        {agent.name}'s Transaction <br /> History
      </h2>
      <table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {soldTransactions.map((transaction) => (
            <tr>
              <td>{transaction.address}</td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
