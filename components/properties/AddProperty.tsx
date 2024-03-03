'use client';

import { useState } from 'react';
import PropertyForm from './PropertyForm';
import styles from './AddProperty.module.css';
import { fetchGemhausData } from '@lib/utils';
import revalidate from 'lib/revalidate';
import { useRouter } from 'next/navigation';
import { Offering } from 'types';
import { useAlert } from '@contexts/Alert';
import { useSession } from 'next-auth/react';

type Props = {
  offerings: Offering[];
};

export default function AddProperty({ offerings }: Props) {
  const router = useRouter();
  const { update } = useSession();
  const { setAlert } = useAlert();
  const [description, setDescription] = useState('');
  const [selectedOfferings, setSelectedOfferings] = useState<string[]>([]);

  async function handleSubmit(formData: FormData) {
    const session = await update();

    formData.append('description', description);
    formData.append('offerings', JSON.stringify(selectedOfferings));

    const { error } = await fetchGemhausData('/properties', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });
    if (error) return setAlert({ message: error.message, type: 'failed' });

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
