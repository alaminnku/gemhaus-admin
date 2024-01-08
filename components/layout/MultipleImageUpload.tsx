import React, { Dispatch, SetStateAction, useRef } from 'react';
import { FiUpload } from 'react-icons/fi';
import styles from './MultipleImageUpload.module.css';
import { Property } from 'types';
import Image from 'next/image';

type Props = {
  images: string[];
  files: FileList | null;
  setState: Dispatch<SetStateAction<Property>>;
};

export default function MultipleImageUpload({
  files,
  images,
  setState,
}: Props) {
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container}>
      <div className={styles.upload}>
        {files ? (
          <div className={styles.file_name_and_remove_button}>
            <span>{files.length} images</span>
            <span
              className={styles.remove_upload}
              onClick={() =>
                setState((prevState) => ({
                  ...prevState,
                  files: null,
                }))
              }
            >
              Remove
            </span>
          </div>
        ) : (
          <div className={styles.upload_icon_and_text}>
            <FiUpload /> Upload images
            <input
              multiple
              type='file'
              id='image'
              accept='image/*'
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  files: e.target.files,
                }))
              }
            />
          </div>
        )}
      </div>

      {images && (
        <>
          {images.map((image) => (
            <div className={styles.image} ref={imageRef}>
              <Image
                src={image}
                width={1600}
                height={1000}
                alt='Image thumbnail'
              />

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
          ))}
        </>
      )}
    </div>
  );
}
