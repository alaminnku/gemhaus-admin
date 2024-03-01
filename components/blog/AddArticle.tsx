'use client';

import { useState } from 'react';
import ArticleForm from './ArticleForm';
import styles from './AddArticle.module.css';
import revalidate from 'lib/revalidate';
import { fetchGemhausData } from '@lib/utils';
import { useRouter } from 'next/navigation';
import { useAlert } from '@contexts/Alert';

export default function AddArticle() {
  const router = useRouter();
  const { setAlert } = useAlert();
  const [content, setContent] = useState('');

  // Add article
  async function handleSubmit(formData: FormData) {
    formData.append('content', content);

    const { error } = await fetchGemhausData('/articles', {
      method: 'POST',
      body: formData,
    });
    if (error) return setAlert({ message: error.message, type: 'failed' });

    revalidate('articles');
    router.push('/blog');
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
