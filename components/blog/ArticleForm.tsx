'use client';

import styles from './ArticleForm.module.css';
import { Dispatch, SetStateAction, useState } from 'react';
import { Article } from 'types';
import RichText from '@components/layout/RichText';
import SubmitButton from '@components/layout/SubmitButton';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { fetchGemhausData } from '@lib/utils';
import { useAlert } from '@contexts/Alert';

type Props = {
  article?: Article;
  image?: string;
  buttonText: 'Add Article' | 'Edit Article';
  setImage?: Dispatch<SetStateAction<string>>;
  setContent: Dispatch<SetStateAction<string>>;
  handleSubmit: (formData: FormData) => Promise<void>;
};

export default function ArticleForm({
  image,
  setImage,
  article,
  buttonText,
  setContent,
  handleSubmit,
}: Props) {
  const { setAlert } = useAlert();
  const { update } = useSession();
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDeleteImage(image: string) {
    if (!article) return;
    setIsDeleting(true);
    const session = await update();
    const imageId = image.split('/')[image.split('/').length - 1];

    const { data, error } = await fetchGemhausData(
      `/articles/${article._id}/delete/${imageId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${session?.user.accessToken}`,
        },
      }
    );
    if (error) return setAlert({ message: error.message, type: 'failed' });

    setIsDeleting(false);
    setImage && setImage('');
    setAlert({ message: data.message, type: 'success' });
  }

  return (
    <form action={handleSubmit}>
      <div className={styles.title}>
        <label htmlFor='title'>Article title*</label>
        <input
          type='text'
          id='title'
          name='title'
          defaultValue={article?.title}
          placeholder='Enter your article title'
        />
      </div>

      <div className={styles.content}>
        <label>Article content*</label>
        <RichText defaultValue={article?.content} setValue={setContent} />
      </div>

      {image && (
        <div className={styles.image}>
          <Image src={image} width={200} height={200} alt='Article image' />
          <button
            disabled={isDeleting}
            onClick={() => handleDeleteImage(image)}
          >
            Delete
          </button>
        </div>
      )}

      <div className={styles.file}>
        <label htmlFor='file'>Upload article image*</label>
        <input type='file' id='file' name='file' accept='image/*' />
      </div>

      <SubmitButton text={buttonText} />
    </form>
  );
}
