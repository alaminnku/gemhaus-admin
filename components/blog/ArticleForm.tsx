'use client';

import styles from './ArticleForm.module.css';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import Image from 'next/image';
import { Article } from 'types';

type Props = {
  article: Article;
  content: string;
  isLoading: boolean;
  buttonText: string;
  setArticle: Dispatch<SetStateAction<Article>>;
  setContent: Dispatch<SetStateAction<string>>;
  handleSubmit: () => Promise<void>;
};

const TOOLBAR_OPTIONS = [
  [{ header: [2, 3, 4, 5, 6, false] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['bold', 'italic', 'underline', 'blockquote'],
  ['clean'],
];

export default function ArticleForm({
  article,
  content,
  isLoading,
  buttonText,
  setArticle,
  setContent,
  handleSubmit,
}: Props) {
  const imageRef = useRef<HTMLDivElement>(null);
  const { title, slug, image, file } = article;

  function handleChangeArticle(e: ChangeEvent<HTMLInputElement>) {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  const formatImageName = (name: string) =>
    name.length > 15
      ? `${name.slice(0, 10)}.${name.split('.')[name.split('.').length - 1]}`
      : name;

  return (
    <>
      <div className={styles.title}>
        <label htmlFor='title'>Article title</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={handleChangeArticle}
          placeholder='Enter your article title'
        />
      </div>

      <div className={styles.slug}>
        <label htmlFor='slug'>Article slug</label>
        <input
          type='text'
          id='slug'
          value={slug}
          onChange={handleChangeArticle}
          placeholder='Enter your article slug'
        />
      </div>

      <div className={styles.content}>
        <label htmlFor='content'>Article content</label>
        <ReactQuill
          theme='snow'
          value={content}
          onChange={setContent}
          modules={{ toolbar: TOOLBAR_OPTIONS }}
        />
      </div>

      <div className={styles.upload_and_image}>
        <div className={styles.upload}>
          {file ? (
            <div className={styles.file_name_and_remove_button}>
              {formatImageName(file.name)}
              <span
                className={styles.remove_upload}
                onClick={() =>
                  setArticle((prevState) => ({
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
                  setArticle((prevState) => ({
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
            <Image src={image} width={1600} height={1000} alt='Article image' />

            <span
              className={styles.remove_image}
              onClick={() =>
                setArticle((prevState) => ({
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

      <button className={styles.submit_button} onClick={handleSubmit}>
        {buttonText}
      </button>
    </>
  );
}
