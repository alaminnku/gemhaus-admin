'use client';

import ArticleCards from '@components/blog/ArticleCards';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function page() {
  const router = useRouter();

  const isUser = true;

  useEffect(() => {
    if (!isUser) {
      router.push('/properties');
    }
  }, [isUser]);

  return (
    <main>
      <ArticleCards />
    </main>
  );
}
