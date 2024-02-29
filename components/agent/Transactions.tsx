import { Agent } from 'types';
import styles from './Transaction.module.css';

type Props = {
  agent: Agent;
};

export default function Transactions({ agent }: Props) {
  return (
    <section className={styles.container}>
      <h2>
        Bill's Transaction <br /> History
      </h2>
      <table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1100 E. Knox Road Tempe, AZ 85284</td>
            <td>Sold</td>
          </tr>
          <tr>
            <td>1100 E. Knox Road Tempe, AZ 85284</td>
            <td>Sold</td>
          </tr>
          <tr>
            <td>1100 E. Knox Road Tempe, AZ 85284</td>
            <td>Sold</td>
          </tr>
          <tr>
            <td>1100 E. Knox Road Tempe, AZ 85284</td>
            <td>Sold</td>
          </tr>
          <tr>
            <td>1100 E. Knox Road Tempe, AZ 85284</td>
            <td>Sold</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
