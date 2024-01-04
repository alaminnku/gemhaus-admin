'use client';

import ArticleCards from '@components/blog/ArticleCards';
import { useCustomSWR } from '@utils/index';
import { Article } from 'types';

export default function page() {
  const { isLoading, data, error } = useCustomSWR('/articles');
  const articles: Article[] = data;
  return (
    <main>
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && !error && <ArticleCards articles={articles} />}
    </main>
  );
}
