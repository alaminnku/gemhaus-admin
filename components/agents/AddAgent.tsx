'use client';

import { useRouter } from 'next/navigation';
import AgentForm from './AgentForm';
import { useState } from 'react';
import { fetchGemhausData } from '@lib/utils';
import revalidate from '@lib/revalidate';
import styles from './AddAgent.module.css';

export default function AddAgent() {
  const router = useRouter();
  const [content, setContent] = useState('');

  // Add agent
  async function handleSubmit(formData: FormData) {
    formData.append('content', content);

    const { error } = await fetchGemhausData('/agents', {
      method: 'POST',
      body: formData,
    });
    if (error) return console.log(error);

    revalidate('articles');
    router.push('/agents');
  }
  return (
    <section className={styles.container}>
      <h1>Add Agent</h1>
      <AgentForm
        content={content}
        setContent={setContent}
        handleSubmit={handleSubmit}
        buttonText='Add Agent'
      />
    </section>
  );
}
