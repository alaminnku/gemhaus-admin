'use client';

import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Property } from 'types';
import styles from './PropertyForm.module.css';
import RichText from '@components/layout/RichText';
import SubmitButton from '@components/layout/SubmitButton';
import MultipleImageUpload from '@components/layout/MultipleImageUpload';

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
  const {
    name,
    price,
    images,
    beds,
    baths,
    guests,
    rating,
    files,
    hostawayId,
    serviceFee,
    salesTax,
    lodgingTax,
    insuranceFee,
    cleaningFee,
    isFeatured,
  } = property;

  function handlePropertyChange(e: ChangeEvent<HTMLInputElement>) {
    setProperty((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <>
      <div className={styles.items}>
        <div className={styles.item}>
          <label htmlFor='hostawayId'>Hostaway Id</label>
          <input
            id='hostawayId'
            type='text'
            value={hostawayId}
            placeholder='Enter Hostaway id'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='name'>Property name</label>
          <input
            id='name'
            type='text'
            value={name}
            placeholder='Enter property name'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='price'>Property price</label>
          <input
            id='price'
            type='text'
            value={price}
            placeholder='Enter property price'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='beds'>Number of beds</label>
          <input
            id='beds'
            type='text'
            value={beds}
            placeholder='Enter number of beds'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='baths'>Number of baths</label>
          <input
            id='baths'
            type='text'
            value={baths}
            placeholder='Enter number of baths'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='guests'>Number of guests</label>
          <input
            id='guests'
            type='text'
            value={guests}
            placeholder='Enter number of guests'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='ratings'>Property rating</label>
          <input
            id='rating'
            type='text'
            value={rating}
            placeholder='Enter property rating'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='serviceFee'>Service fee (%)</label>
          <input
            id='serviceFee'
            type='text'
            value={serviceFee}
            placeholder='Enter service fee percentage'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='salesTax'>Sales tax (%)</label>
          <input
            id='salesTax'
            type='text'
            value={salesTax}
            placeholder='Enter sales tax percentage'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='lodgingTax'>Lodging tax (%)</label>
          <input
            id='lodgingTax'
            type='text'
            value={lodgingTax}
            placeholder='Enter lodging tax percentage'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='insuranceFee'>Insurance fee</label>
          <input
            id='insuranceFee'
            type='text'
            value={insuranceFee}
            placeholder='Enter insurance fee'
            onChange={handlePropertyChange}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='cleaningFee'>Cleaning fee</label>
          <input
            id='cleaningFee'
            type='text'
            value={cleaningFee}
            placeholder='Enter cleaning fee'
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
        <RichText value={description} setValue={setDescription} />
      </div>

      <MultipleImageUpload
        images={images}
        files={files}
        setState={setProperty}
      />
      <SubmitButton
        buttonText={buttonText}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
