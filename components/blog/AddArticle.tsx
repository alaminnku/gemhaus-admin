'use client';

import React, { useState } from 'react';
import ArticleForm from './ArticleForm';
import { Article, ServerError } from 'types';
import styles from './AddArticle.module.css';
import revalidate from 'lib/revalidate';
import { mutateData } from '@lib/utils';
import { useRouter } from 'next/navigation';

export default function AddArticle() {
  const router = useRouter();
  const [content, setContent] = useState('');

  // Add article
  async function handleSubmit(formData: FormData) {
    formData.append('content', content);
    try {
      await mutateData.post('/articles', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      revalidate('articles');
      router.push('/blog');
    } catch (err) {
      console.log(err as ServerError);
    }
  }

  return (
    <section className={styles.container}>
      <h1>Add Article</h1>

      <ArticleForm
        content={content}
        setContent={setContent}
        buttonText='Add Article'
        handleSubmit={handleSubmit}
      />
    </section>
  );
}
