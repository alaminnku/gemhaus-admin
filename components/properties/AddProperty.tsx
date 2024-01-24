'use client';

import { useState } from 'react';
import PropertyForm from './PropertyForm';
import styles from './AddProperty.module.css';
import { fetchGemhausData } from '@lib/utils';
import revalidate from 'lib/revalidate';
import { useRouter } from 'next/navigation';

export default function AddProperty() {
  const router = useRouter();
  const [description, setDescription] = useState('');

  async function handleSubmit(formData: FormData) {
    formData.append('description', description);

    const { error } = await fetchGemhausData('/properties', {
      method: 'POST',
      body: formData,
    });
    if (error) return console.log(error);

    revalidate('properties');
    router.push('/properties');
  }

  return (
    <section className={styles.container}>
      <h1>Add Property</h1>

      <PropertyForm
        buttonText='Add Property'
        description={description}
        handleSubmit={handleSubmit}
        setDescription={setDescription}
      />
    </section>
  );
}
