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
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
        method: 'POST',
        body: data,
        credentials: 'include',
      });
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
