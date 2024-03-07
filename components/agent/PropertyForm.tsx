'use client';

import { Dispatch, SetStateAction } from 'react';
import { AgentProperty } from 'types';
import styles from './PropertyForm.module.css';
import RichText from '@components/layout/RichText';
import SubmitButton from '@components/layout/SubmitButton';
import Image from 'next/image';

type Props = {
  agentId?: string;
  images: string[];
  property?: AgentProperty;
  buttonText: 'Add Property' | 'Edit Property';
  setImages?: Dispatch<SetStateAction<string[]>>;
  handleSubmit: (formData: FormData) => Promise<void>;
  setDescription: Dispatch<SetStateAction<string>>;
  setDeletedImages?: Dispatch<SetStateAction<string[]>>;
};

export default function PropertyForm({
  images,
  setImages,
  property,
  buttonText,
  setDescription,
  handleSubmit,
  setDeletedImages,
}: Props) {
  function handleDeleteImage(image: string) {
    if (!setDeletedImages || !setImages) return;
    setDeletedImages((prevState) => [...prevState, image]);
    setImages((prevState) => prevState.filter((el) => el !== image));
  }

  return (
    <form action={handleSubmit}>
      <div className={styles.items}>
        <div className={styles.item}>
          <label htmlFor='address'>Property address*</label>
          <input
            id='address'
            name='address'
            type='text'
            defaultValue={property?.address}
            placeholder='Enter property address'
          />
        </div>
        <div className={styles.item}>
          <label htmlFor='city'>Property city*</label>
          <input
            id='city'
            name='city'
            type='text'
            defaultValue={property?.city}
            placeholder='Enter property city'
          />
        </div>
        <div className={styles.item}>
          <label htmlFor='state'>Property state*</label>
          <input
            id='state'
            name='state'
            type='text'
            defaultValue={property?.state}
            placeholder='Enter property state'
          />
        </div>
        <div className={styles.item}>
          <label htmlFor='price'>Property price*</label>
          <input
            id='price'
            name='price'
            type='number'
            step='0.01'
            defaultValue={property?.price}
            placeholder='Enter property price'
          />
        </div>

        <div className={styles.isFeatured}>
          <label htmlFor='isFeatured'>Is this property featured?</label>
          <input
            type='checkbox'
            id='isFeatured'
            name='isFeatured'
            defaultChecked={property?.isFeatured}
          />
        </div>
      </div>

      <div className={styles.description}>
        <label>Property description*</label>
        <RichText
          defaultValue={property?.description}
          setValue={setDescription}
        />
      </div>

      {images && images.length > 0 && (
        <div className={styles.images}>
          {images.map((image, index) => (
            <div className={styles.image}>
              <Image
                key={index}
                src={image}
                width={200}
                height={200}
                alt='Property image'
              />
              <p onClick={() => handleDeleteImage(image)}>Delete</p>
            </div>
          ))}
        </div>
      )}

      <div className={styles.files}>
        <label htmlFor='files'>Upload property images*</label>
        <input multiple type='file' id='files' name='files' accept='image/*' />
      </div>

      <SubmitButton text={buttonText} />
    </form>
  );
}
