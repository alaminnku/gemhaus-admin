'use client';

import { useState } from 'react';
import PropertyForm from './PropertyForm';
import styles from './AddProperty.module.css';
import { fetchGemhausData } from '@lib/utils';
import revalidate from 'lib/revalidate';
import { useRouter } from 'next/navigation';
import { Offering, Property } from 'types';
import { useAlert } from '@contexts/Alert';
import { useSession } from 'next-auth/react';

type Props = {
  id: string;
  property: Property;
  offerings: Offering[];
};

export default function EditProperty({ id, property, offerings }: Props) {
  const router = useRouter();
  const { update } = useSession();
  const { setAlert } = useAlert();
  const [images, setImages] = useState(property.images);
  const [deletedImages, setDeletedImages] = useState<string[]>([]);
  const [description, setDescription] = useState(property.description);
  const [selectedOfferings, setSelectedOfferings] = useState<string[]>(
    property.offerings.map((el) => el.name)
  );

  async function handleSubmit(formData: FormData) {
    const session = await update();
    formData.append('description', description);
    formData.append('images', JSON.stringify(images));
    formData.append('deletedImages', JSON.stringify(deletedImages));
    formData.append('offerings', JSON.stringify(selectedOfferings));

    const { error } = await fetchGemhausData(`/properties/${id}/update`, {
      method: 'PATCH',
      body: formData,
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });
    if (error) return setAlert({ message: error.message, type: 'failed' });

    revalidate(`property-${id}`);
    router.push(`/properties/${id}`);
  }

  return (
    <section className={styles.container}>
      <h1>Edit Property</h1>

      <PropertyForm
        images={images}
        property={property}
        offerings={offerings}
        setImages={setImages}
        buttonText='Edit Property'
        handleSubmit={handleSubmit}
        setDescription={setDescription}
        setDeletedImages={setDeletedImages}
        selectedOfferings={selectedOfferings}
        setSelectedOfferings={setSelectedOfferings}
      />
    </section>
  );
}
