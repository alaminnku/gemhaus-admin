'use client';

import { useRouter } from 'next/navigation';
import AgentForm from './AgentForm';
import { useState } from 'react';
import { fetchGemhausData } from '@lib/utils';
import revalidate from '@lib/revalidate';
import styles from './AddAgent.module.css';
import { useAlert } from '@contexts/Alert';
import { useSession } from 'next-auth/react';

export default function AddAgent() {
  const router = useRouter();
  const { update } = useSession();
  const { setAlert } = useAlert();
  const [bio, setBio] = useState('');

  // Add agent
  async function handleSubmit(formData: FormData) {
    const session = await update();
    formData.append('bio', bio);

    const { error } = await fetchGemhausData('/users/agents', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });
    if (error) return setAlert({ message: error.message, type: 'failed' });

    revalidate('agents');
    router.push('/agents');
  }

  return (
    <section className={styles.container}>
      <h1>Add Agent</h1>
      <AgentForm
        setContent={setBio}
        buttonText='Add Agent'
        handleSubmit={handleSubmit}
      />
    </section>
  );
}
