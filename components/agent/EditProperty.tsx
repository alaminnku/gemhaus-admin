'use client';

import { useRouter } from 'next/navigation';
import PropertyForm from './PropertyForm';
import { useState } from 'react';
import { fetchGemhausData } from '@lib/utils';
import revalidate from '@lib/revalidate';
import styles from './AddProperty.module.css';
import { useAlert } from '@contexts/Alert';
import { useSession } from 'next-auth/react';
import { Agent, AgentProperty } from 'types';

type Props = {
  id: string;
  property: AgentProperty;
};

export default function EditProperty({ id, property }: Props) {
  const router = useRouter();
  const { update } = useSession();
  const { setAlert } = useAlert();
  const [description, setDescription] = useState(property.description);

  // Add agent's property
  async function handleSubmit(formData: FormData) {
    const session = await update();
    formData.append('description', description);

    const { error } = await fetchGemhausData(
      `/users/agents/${id}/properties/${property._id}`,
      {
        method: 'PATCH',
        body: formData,
        headers: {
          Authorization: `Bearer ${session?.user.accessToken}`,
        },
      }
    );
    if (error) return setAlert({ message: error.message, type: 'failed' });

    revalidate(`agent-${id}`);
    router.push(`/agents/${id}`);
  }

  return (
    <section className={styles.container}>
      <h1>Edit Agent's Property</h1>

      <PropertyForm
        property={property}
        buttonText='Edit Property'
        handleSubmit={handleSubmit}
        setDescription={setDescription}
      />
    </section>
  );
}
