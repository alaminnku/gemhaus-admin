'use client';

import { useState } from 'react';
import ArticleForm from './ArticleForm';
import styles from './AddArticle.module.css';
import revalidate from 'lib/revalidate';
import { fetchGemhausData } from '@lib/utils';
import { useRouter } from 'next/navigation';
import { useAlert } from '@contexts/Alert';
import { useSession } from 'next-auth/react';
import { Article } from 'types';

type Props = {
  id: string;
  article: Article;
};

export default function EditArticle({ id, article }: Props) {
  const router = useRouter();
  const { update } = useSession();
  const { setAlert } = useAlert();
  const [content, setContent] = useState(article.content);
  const [image, setImage] = useState<string>(article.image);

  // Edit article
  async function handleSubmit(formData: FormData) {
    const session = await update();
    formData.append('image', image);
    formData.append('content', content);

    const { error } = await fetchGemhausData(`/articles/${id}/update`, {
      method: 'PATCH',
      body: formData,
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });
    if (error) return setAlert({ message: error.message, type: 'failed' });

    revalidate(`article-${id}`);
    router.push(`/blog/${id}`);
  }

  return (
    <section className={styles.container}>
      <h1>Edit Article</h1>

      <ArticleForm
        image={image}
        setImage={setImage}
        article={article}
        setContent={setContent}
        buttonText='Edit Article'
        handleSubmit={handleSubmit}
      />
    </section>
  );
}
