'use client';

import { useState } from 'react';
import PropertyForm from './PropertyForm';
import styles from './AddProperty.module.css';
import { fetchGemhausData } from '@lib/utils';
import revalidate from 'lib/revalidate';
import { useRouter } from 'next/navigation';
import { Offering } from 'types';

type Props = {
  offerings: Offering[];
};

export default function AddProperty({ offerings }: Props) {
  const router = useRouter();
  const [description, setDescription] = useState('');
  const [selectedOfferings, setSelectedOfferings] = useState<string[]>([]);

  async function handleSubmit(formData: FormData) {
    formData.append('description', description);
    formData.append('offerings', JSON.stringify(selectedOfferings));

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
        offerings={offerings}
        buttonText='Add Property'
        description={description}
        handleSubmit={handleSubmit}
        setDescription={setDescription}
        setSelectedOfferings={setSelectedOfferings}
      />
    </section>
  );
}
