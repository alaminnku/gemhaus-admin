'use client';

import React, { useState } from 'react';
import ArticleForm from './ArticleForm';
import { Article } from 'types';
import styles from './AddArticle.module.css';

export default function AddArticle() {
  const [article, setArticle] = useState<Article>({
    title: '',
    slug: '',
    image: '',
    file: undefined,
  });
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {}

  return (
    <section className={styles.container}>
      <h1>Add article</h1>

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
