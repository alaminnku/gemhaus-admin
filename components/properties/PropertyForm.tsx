'use client';

import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Property } from 'types';
import styles from './PropertyForm.module.css';
import TextEditor from '@components/layout/TextEditor';
import ImageUpload from '@components/layout/ImageUpload';
import SubmitButton from '@components/layout/SubmitButton';

type Props = {
  property: Property;
  isLoading: boolean;
  buttonText: string;
  description: string;
  handleSubmit: () => Promise<void>;
  setDescription: Dispatch<SetStateAction<string>>;
  setProperty: Dispatch<SetStateAction<Property>>;
};

export default function PropertyForm({
  property,
  isLoading,
  buttonText,
  handleSubmit,
  setProperty,
  description,
  setDescription,
}: Props) {
  const { name, price, image, beds, baths, guests, rating, file, isFeatured } =
    property;

  function handlePropertyChange(e: ChangeEvent<HTMLInputElement>) {
    setProperty((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <>
      <div className={styles.items}>
        <div className={styles.name}>
          <label htmlFor='name'>Property name</label>
          <input
            id='name'
            type='text'
            value={name}
            placeholder='Enter property name'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.price}>
          <label htmlFor='price'>Property price</label>
          <input
            id='price'
            type='text'
            value={price}
            placeholder='Enter property price'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.beds}>
          <label htmlFor='beds'>Number of beds</label>
          <input
            id='beds'
            type='text'
            value={beds}
            placeholder='Enter number of beds'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.baths}>
          <label htmlFor='baths'>Number of baths</label>
          <input
            id='baths'
            type='text'
            value={baths}
            placeholder='Enter number of baths'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.guests}>
          <label htmlFor='guests'>Number of guests</label>
          <input
            id='guests'
            type='text'
            value={guests}
            placeholder='Enter number of guests'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.rating}>
          <label htmlFor='ratings'>Property rating</label>
          <input
            id='rating'
            type='text'
            value={rating}
            placeholder='Enter property rating'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.isFeatured}>
          <label htmlFor='isFeatured'>Is this property featured?</label>
          <input
            type='checkbox'
            id='isFeatured'
            checked={isFeatured}
            onChange={(e) =>
              setProperty((prevState) => ({
                ...prevState,
                isFeatured: e.target.checked,
              }))
            }
          />
        </div>
      </div>

      <div className={styles.description}>
        <label>Property description</label>
        <TextEditor value={description} setValue={setDescription} />
      </div>

      {/* @ts-ignore */}
      <ImageUpload file={file} image={image} setState={setProperty} />
      <SubmitButton buttonText={buttonText} handleSubmit={handleSubmit} />
    </>
  );
}
