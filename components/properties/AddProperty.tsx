'use client';

import React, { useState } from 'react';
import PropertyForm from './PropertyForm';
import { ServerError } from 'types';
import styles from './AddProperty.module.css';
import { mutateData } from '@lib/utils';
import revalidate from 'lib/revalidate';
import { useRouter } from 'next/navigation';

export default function AddProperty() {
  const router = useRouter();
  const [description, setDescription] = useState('');

  async function handleSubmit(formData: FormData) {
    formData.append('description', description);
    try {
      await mutateData.post('/properties', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      revalidate('properties');
      router.push('/properties');
    } catch (err) {
      console.log(err as ServerError);
    }
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
