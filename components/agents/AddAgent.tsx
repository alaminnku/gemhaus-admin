'use client';

import { useRouter } from 'next/navigation';
import AgentForm from './AgentForm';
import { useState } from 'react';
import { fetchGemhausData } from '@lib/utils';
import revalidate from '@lib/revalidate';
import styles from './AddAgent.module.css';

export default function AddAgent() {
  const router = useRouter();
  const [bio, setBio] = useState('');

  // Add agent
  async function handleSubmit(formData: FormData) {
    formData.append('bio', bio);

    const { error } = await fetchGemhausData('/users/agent', {
      method: 'POST',
      body: formData,
    });
    if (error) return console.log(error);

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
