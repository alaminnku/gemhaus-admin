'use client';

import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Offering, Property } from 'types';
import styles from './PropertyForm.module.css';
import RichText from '@components/layout/RichText';
import SubmitButton from '@components/layout/SubmitButton';

type Props = {
  property?: Property;
  description: string;
  offerings: Offering[];
  buttonText: 'Add Property';
  handleSubmit: (formData: FormData) => Promise<void>;
  setDescription: Dispatch<SetStateAction<string>>;
  setSelectedOfferings: Dispatch<SetStateAction<string[]>>;
};

export default function PropertyForm({
  property,
  offerings,
  buttonText,
  description,
  setDescription,
  handleSubmit,
  setSelectedOfferings,
}: Props) {
  function handleOfferingsChange(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    setSelectedOfferings((prevState) =>
      !e.target.checked && prevState.includes(name)
        ? prevState.filter((offering) => offering !== name)
        : [...prevState, name]
    );
  }

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
            step='0.01'
            defaultValue={property?.price}
            placeholder='Enter property price'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='bedrooms'>Number of bedrooms</label>
          <input
            id='bedrooms'
            name='bedrooms'
            type='number'
            defaultValue={property?.bedrooms}
            placeholder='Enter number of bedrooms'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='bathrooms'>Number of bathrooms</label>
          <input
            id='bathrooms'
            name='bathrooms'
            type='number'
            defaultValue={property?.bathrooms}
            placeholder='Enter number of bathrooms'
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
            step='0.01'
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
            step='0.01'
            defaultValue={property?.cleaningFee}
            placeholder='Enter cleaning fee'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='latitude'>Latitude</label>
          <input
            id='latitude'
            name='latitude'
            type='text'
            defaultValue={property?.latitude}
            placeholder='Enter property latitude'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='longitude'>Longitude</label>
          <input
            id='longitude'
            name='longitude'
            type='text'
            defaultValue={property?.longitude}
            placeholder='Enter property longitude'
          />
        </div>

        <div className={styles.property_offerings}>
          <p>Property offerings</p>
          <div className={styles.offerings}>
            {offerings.map((offering, index) => (
              <div className={styles.offering} key={index}>
                <input
                  type='checkbox'
                  name={offering.name}
                  id={offering.name}
                  checked={property?.offerings.some(
                    (el) => el.name === offering.name
                  )}
                  onChange={handleOfferingsChange}
                />
                <label htmlFor={offering.name}>{offering.name}</label>
              </div>
            ))}
          </div>
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
        <label htmlFor='files'>Upload property images</label>
        <input multiple type='file' id='files' name='files' accept='image/*' />
      </div>

      <SubmitButton text={buttonText} />
    </form>
  );
}
