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
  const { data } = useSession();
  const { setAlert } = useAlert();
  const [bio, setBio] = useState('');

  // Add agent
  async function handleSubmit(formData: FormData) {
    formData.append('bio', bio);

    const { error } = await fetchGemhausData('/users/agent', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${data?.user.accessToken}`,
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
        content={bio}
        setContent={setBio}
        handleSubmit={handleSubmit}
        buttonText='Add Agent'
      />
    </section>
  );
}
