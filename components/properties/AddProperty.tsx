'use client';

import React, { useState } from 'react';
import PropertyForm from './PropertyForm';
import { ServerError, Property } from 'types';
import styles from './AddProperty.module.css';
import { mutateData } from '@lib/utils';
import revalidate from 'lib/revalidate';
import { useRouter } from 'next/navigation';

export default function AddProperty() {
  const router = useRouter();
  const [property, setProperty] = useState<Property>({
    name: '',
    price: '',
    images: [],
    beds: '',
    baths: '',
    guests: '',
    rating: '',
    files: null,
    hostawayId: '',
    serviceFee: '',
    salesTax: '',
    lodgingTax: '',
    insuranceFee: '',
    cleaningFee: '',
    isFeatured: false,
  });
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    name,
    price,
    beds,
    baths,
    guests,
    rating,
    isFeatured,
    files,
    hostawayId,
    serviceFee,
    salesTax,
    lodgingTax,
    insuranceFee,
    cleaningFee,
  } = property;

  async function handleSubmit() {
    const data = new FormData();
    data.append('name', name);
    data.append('price', price);
    data.append('beds', beds);
    data.append('baths', baths);
    data.append('guests', guests);
    data.append('rating', rating);
    data.append('description', description);
    data.append('isFeatured', String(isFeatured));
    data.append('hostawayId', hostawayId);
    data.append('serviceFee', serviceFee);
    data.append('salesTax', salesTax);
    data.append('lodgingTax', lodgingTax);
    data.append('insuranceFee', insuranceFee);
    data.append('cleaningFee', cleaningFee);

    if (files) {
      for (let i = 0; i < files.length; i++) {
        data.append('files', files[i]);
      }
    }

    try {
      setIsLoading(true);
      await mutateData('/properties', { method: 'POST', body: data });

      revalidate('properties');
      router.push('/properties');
    } catch (err) {
      console.log(err as ServerError);
    } finally {
      setIsLoading(false);
    }
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
