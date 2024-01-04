import ArticleCards from '@components/blog/ArticleCards';
import { fetchInstance } from '@utils/index';

export default async function page() {
  const articles = await fetchInstance('/articles', {
    cache: 'no-cache',
    next: { tags: ['articles'] },
  });

  return <main>{<ArticleCards articles={articles} />}</main>;
}
