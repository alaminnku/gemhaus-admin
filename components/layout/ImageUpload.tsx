import React, { Dispatch, SetStateAction, useRef } from 'react';
import { FiUpload } from 'react-icons/fi';
import styles from './ImageUpload.module.css';
import { formatUploadImageName } from '@utils/index';
import { Article, Property } from 'types';
import Image from 'next/image';

type Props = {
  image: string;
  file: File | undefined;
  setState: Dispatch<SetStateAction<Property | Article>>;
};

export default function ImageUpload({ file, image, setState }: Props) {
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container}>
      <div className={styles.upload}>
        {file ? (
          <div className={styles.file_name_and_remove_button}>
            {formatUploadImageName(file.name)}
            <span
              className={styles.remove_upload}
              onClick={() =>
                setState((prevState) => ({
                  ...prevState,
                  file: undefined,
                }))
              }
            >
              Remove
            </span>
          </div>
        ) : (
          <div className={styles.upload_icon_and_text}>
            <FiUpload /> Upload image
            <input
              type='file'
              id='image'
              accept='image/*'
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  file: e.target.files?.[0],
                }))
              }
            />
          </div>
        )}
      </div>

      {image && (
        <div className={styles.image} ref={imageRef}>
          <Image src={image} width={1600} height={1000} alt='Image thumbnail' />

          <span
            className={styles.remove_image}
            onClick={() =>
              setState((prevState) => ({
                ...prevState,
                image: '',
              }))
            }
          >
            Remove
          </span>
        </div>
      )}
    </div>
  );
}
