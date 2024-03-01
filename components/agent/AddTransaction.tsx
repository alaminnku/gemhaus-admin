'use client';

import { useRouter } from 'next/navigation';
import styles from './AddTransaction.module.css';
import { fetchGemhausData } from '@lib/utils';
import revalidate from '@lib/revalidate';
import TransactionForm from './TransactionForm';
import { useAlert } from '@contexts/Alert';

type Props = {
  id: string;
};

export default function AddTransaction({ id }: Props) {
  const router = useRouter();
  const { setAlert } = useAlert();

  // Add agent's transaction
  async function handleSubmit(formData: FormData) {
    const { error } = await fetchGemhausData(`/users/agent/${id}/transaction`, {
      method: 'POST',
      body: formData,
    });
    if (error) return setAlert({ message: error.message, type: 'failed' });

    revalidate(`agent-${id}`);
    router.push(`/agents/${id}`);
  }

  return (
    <section className={styles.container}>
      <h1>Add Agent's Transaction</h1>

      <TransactionForm
        handleSubmit={handleSubmit}
        buttonText='Add Transaction'
      />
    </section>
  );
}
