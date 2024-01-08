import ActionButton from '@components/layout/ActionButton';
import React from 'react';
import ArticleCards from './ArticleCards';
import { fetchInstance } from '@utils/utils';
import Error from '@components/layout/Error';
import styles from './Articles.module.css';

export default async function Articles() {
  const { data, error } = await fetchInstance('/articles', {
    next: { tags: ['articles'] },
  });

  return (
    <section className={styles.container}>
      <ActionButton href='/blog/add' text='+ Add Article' />
      {error ? <Error error={error} /> : <ArticleCards articles={data} />}
    </section>
  );
}
