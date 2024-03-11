'use client';

import styles from './ArticleForm.module.css';
import { Dispatch, SetStateAction } from 'react';
import { Article } from 'types';
import RichText from '@components/layout/RichText';
import SubmitButton from '@components/layout/SubmitButton';
import Image from 'next/image';

type Props = {
  article?: Article;
  image?: string;
  buttonText: 'Add Article' | 'Edit Article';
  setImage?: Dispatch<SetStateAction<string>>;
  setContent: Dispatch<SetStateAction<string>>;
  setDeletedImage?: Dispatch<SetStateAction<string>>;
  handleSubmit: (formData: FormData) => Promise<void>;
};

export default function ArticleForm({
  image,
  setImage,
  article,
  buttonText,
  setContent,
  handleSubmit,
  setDeletedImage,
}: Props) {
  async function handleDeleteImage(image: string) {
    if (!setImage || !setDeletedImage) return;
    setImage('');
    setDeletedImage(image);
  }

  return (
    <form action={handleSubmit}>
      <div className={styles.items}>
        <div className={styles.item}>
          <label htmlFor='title'>Article title*</label>
          <input
            type='text'
            id='title'
            name='title'
            defaultValue={article?.title}
            placeholder='Enter your article title'
          />
        </div>

        <div className={styles.item}>
          <label htmlFor='excerpt'>Article excerpt*</label>
          <input
            type='text'
            id='excerpt'
            name='excerpt'
            defaultValue={article?.excerpt}
            placeholder='Enter your article excerpt'
          />
        </div>
      </div>

      <div className={styles.content}>
        <label>Article content*</label>
        <RichText defaultValue={article?.content} setValue={setContent} />
      </div>

      {image && (
        <div className={styles.image}>
          <Image src={image} width={200} height={200} alt='Article image' />
          <p onClick={() => handleDeleteImage(image)}>Delete</p>
        </div>
      )}

      {!image && (
        <div className={styles.file}>
          <label htmlFor='file'>Upload article image*</label>
          <input type='file' id='file' name='file' accept='image/*' />
        </div>
      )}

      <SubmitButton text={buttonText} />
    </form>
  );
}
