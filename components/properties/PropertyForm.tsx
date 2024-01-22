'use client';

import { Dispatch, SetStateAction } from 'react';
import { Property } from 'types';
import styles from './PropertyForm.module.css';
import RichText from '@components/layout/RichText';
import SubmitButton from '@components/layout/SubmitButton';

type Props = {
  property?: Property;
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
          <label htmlFor='hostawayId'>Hostaway Id</label>
          <input
            id='hostawayId'
            name='hostawayId'
            type='number'
            defaultValue={property?.hostawayId}
            placeholder='Enter Hostaway id'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='name'>Property name</label>
          <input
            id='name'
            name='name'
            type='text'
            defaultValue={property?.name}
            placeholder='Enter property name'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='price'>Property price</label>
          <input
            id='price'
            name='price'
            type='number'
            defaultValue={property?.price}
            placeholder='Enter property price'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='beds'>Number of beds</label>
          <input
            id='beds'
            name='beds'
            type='number'
            defaultValue={property?.beds}
            placeholder='Enter number of beds'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='baths'>Number of baths</label>
          <input
            id='baths'
            name='baths'
            type='number'
            defaultValue={property?.baths}
            placeholder='Enter number of baths'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='guests'>Number of guests</label>
          <input
            id='guests'
            name='guests'
            type='number'
            defaultValue={property?.guests}
            placeholder='Enter number of guests'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='ratings'>Property rating</label>
          <input
            id='rating'
            name='rating'
            type='number'
            step='0.01'
            defaultValue={property?.rating}
            placeholder='Enter property rating'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='serviceFeePercent'>Service fee (%)</label>
          <input
            id='serviceFeePercent'
            name='serviceFeePercent'
            type='number'
            step='0.01'
            defaultValue={property?.serviceFeePercent}
            placeholder='Enter service fee percentage'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='salesTaxPercent'>Sales tax (%)</label>
          <input
            id='salesTaxPercent'
            name='salesTaxPercent'
            type='number'
            step='0.01'
            defaultValue={property?.salesTaxPercent}
            placeholder='Enter sales tax percentage'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='lodgingTaxPercent'>Lodging tax (%)</label>
          <input
            id='lodgingTaxPercent'
            name='lodgingTaxPercent'
            type='number'
            step='0.01'
            defaultValue={property?.lodgingTaxPercent}
            placeholder='Enter lodging tax percentage'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='insuranceFee'>Insurance fee</label>
          <input
            id='insuranceFee'
            name='insuranceFee'
            type='number'
            defaultValue={property?.insuranceFee}
            placeholder='Enter insurance fee'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='cleaningFee'>Cleaning fee</label>
          <input
            id='cleaningFee'
            name='cleaningFee'
            type='number'
            defaultValue={property?.cleaningFee}
            placeholder='Enter cleaning fee'
          />
        </div>

        <div className={styles.isFeatured}>
          <label htmlFor='isFeatured'>Is this property featured?</label>
          <input type='checkbox' id='isFeatured' name='isFeatured' />
        </div>
      </div>

      <div className={styles.description}>
        <label>Property description</label>
        <RichText value={description} setValue={setDescription} />
      </div>

      <div className={styles.files}>
        <input multiple type='file' name='files' accept='image/*' />
      </div>

      <SubmitButton text={buttonText} />
    </form>
  );
}
