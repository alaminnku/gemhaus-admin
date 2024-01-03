'use client';

import React, { useState } from 'react';
import PropertyForm from './PropertyForm';
import { Property } from 'types';
import styles from './AddProperty.module.css';

export default function AddProperty() {
  const [property, setProperty] = useState<Property>({
    name: '',
    price: '',
    image: '',
    beds: '',
    baths: '',
    guests: '',
    rating: '',
    type: '',
    isFeatured: false,
    file: undefined,
  });
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {}

  return (
    <section className={styles.container}>
      <h1>Add Property</h1>

      <PropertyForm
        property={property}
        buttonText='Add Property'
        description={description}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        setProperty={setProperty}
        setDescription={setDescription}
      />
    </section>
  );
}
