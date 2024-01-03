'use client';

import React, { useState } from 'react';
import ArticleForm from './ArticleForm';
import { Article } from 'types';
import styles from './AddArticle.module.css';

export default function AddArticle() {
  const [article, setArticle] = useState<Article>({
    title: '',
    slug: '',
    image:
      'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    file: undefined,
  });
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {}

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
