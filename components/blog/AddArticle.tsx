'use client';

import React, { useState } from 'react';
import ArticleForm from './ArticleForm';
import { Article } from 'types';
import styles from './AddArticle.module.css';
import revalidate from '@utils/revalidate';
import { fetchInstance } from '@utils/index';

export default function AddArticle() {
  const [article, setArticle] = useState<Article>({
    title: '',
    slug: '',
    image: '',
    file: undefined,
  });
  const { title, slug, image, file } = article;
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Add article
  async function handleSubmit() {
    const data = new FormData();
    data.append('title', title);
    data.append('slug', slug);
    data.append('file', file as File);
    data.append('content', content);

    try {
      await fetchInstance('/articles', { method: 'POST', body: data });
      revalidate('articles');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className={styles.container}>
      <h1>Add Article</h1>

      <ArticleForm
        article={article}
        content={content}
        setArticle={setArticle}
        setContent={setContent}
        isLoading={isLoading}
        buttonText='Add Article'
        handleSubmit={handleSubmit}
      />
    </section>
  );
}
