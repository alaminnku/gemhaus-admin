'use client';

import { useRouter } from 'next/navigation';
import PropertyForm from './PropertyForm';
import { useState } from 'react';
import { fetchGemhausData } from '@lib/utils';
import revalidate from '@lib/revalidate';
import styles from './AddProperty.module.css';

type Props = {
  id: string;
};

export default function AddProperty({ id }: Props) {
  const router = useRouter();
  const [description, setDescription] = useState('');

  // Add agent
  async function handleSubmit(formData: FormData) {
    formData.append('description', description);

    const { error } = await fetchGemhausData(`/users/agent/${id}/property`, {
      method: 'POST',
      body: formData,
    });
    if (error) return console.log(error);

    revalidate(`/agents/${id}`);
    router.push(`/agents/${id}`);
  }

  return (
    <section className={styles.container}>
      <h1>Add Agent's Property</h1>

      <PropertyForm
        buttonText='Add Property'
        handleSubmit={handleSubmit}
        description={description}
        setDescription={setDescription}
      />
    </section>
  );
}
