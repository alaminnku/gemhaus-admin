'use client';

import React, { useState } from 'react';
import PropertyForm from './PropertyForm';
import { Property } from 'types';
import styles from './AddProperty.module.css';
import { fetchInstance } from '@utils/index';
import revalidate from '@utils/revalidate';

export default function AddProperty() {
  const [property, setProperty] = useState<Property>({
    name: '',
    price: '',
    images: [],
    beds: '',
    baths: '',
    guests: '',
    rating: '',
    type: '',
    files: null,
    isFeatured: false,
  });
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { name, price, beds, baths, guests, rating, type, isFeatured, files } =
    property;

  async function handleSubmit() {
    const data = new FormData();
    data.append('name', name);
    data.append('price', price);
    data.append('beds', beds);
    data.append('baths', baths);
    data.append('guests', guests);
    data.append('rating', rating);
    data.append('type', type);
    data.append('description', description);
    data.append('isFeatured', String(isFeatured));
    if (files) {
      for (let i = 0; i < files.length; i++) {
        data.append('files', files[i]);
      }
    }

    await fetchInstance('/properties', { method: 'POST', body: data });
    revalidate('properties');
  }

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
