'use client';

import { Dispatch, SetStateAction } from 'react';
import { AgentProperty } from 'types';
import styles from './PropertyForm.module.css';
import RichText from '@components/layout/RichText';
import SubmitButton from '@components/layout/SubmitButton';

type Props = {
  property?: AgentProperty;
  buttonText: string;
  description: string;
  handleSubmit: (formData: FormData) => Promise<void>;
  setDescription: Dispatch<SetStateAction<string>>;
};

export default function PropertyForm({
  property,
  buttonText,
  description,
  setDescription,
  handleSubmit,
}: Props) {
  return (
    <form action={handleSubmit}>
      <div className={styles.items}>
        <div className={styles.item}>
          <label htmlFor='address'>Property address</label>
          <input
            id='address'
            name='address'
            type='text'
            defaultValue={property?.address}
            placeholder='Enter property address'
          />
        </div>
        <div className={styles.item}>
          <label htmlFor='city'>Property city</label>
          <input
            id='city'
            name='city'
            type='text'
            defaultValue={property?.city}
            placeholder='Enter property city'
          />
        </div>
        <div className={styles.item}>
          <label htmlFor='state'>Property state</label>
          <input
            id='state'
            name='state'
            type='text'
            defaultValue={property?.state}
            placeholder='Enter property state'
          />
        </div>
        <div className={styles.item}>
          <label htmlFor='price'>Property price</label>
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
        <label>Property description</label>
        <RichText value={description} setValue={setDescription} />
      </div>

      <div className={styles.files}>
        <label htmlFor='files'>Upload property images</label>
        <input multiple type='file' id='files' name='files' accept='image/*' />
      </div>

      <SubmitButton text={buttonText} />
    </form>
  );
}
