'use client';

import { useRouter } from 'next/navigation';
import styles from './AddTransaction.module.css';
import { fetchGemhausData } from '@lib/utils';
import revalidate from '@lib/revalidate';
import TransactionForm from './TransactionForm';
import { useAlert } from '@contexts/Alert';
import { useSession } from 'next-auth/react';

type Props = {
  id: string;
};

export default function AddTransaction({ id }: Props) {
  const router = useRouter();
  const { update } = useSession();
  const { setAlert } = useAlert();

  // Add agent's transaction
  async function handleSubmit(formData: FormData) {
    const session = await update();

    const { data: result, error } = await fetchGemhausData(
      `/users/agents/${id}/transaction`,
      {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${session?.user.accessToken}`,
        },
      }
    );
    console.log({ result });
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
