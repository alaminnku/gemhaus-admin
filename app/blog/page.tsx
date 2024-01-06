import ArticleCards from '@components/blog/ArticleCards';
import AuthProvider from '@components/layout/AuthProvider';

export default function page() {
  return (
    <AuthProvider>
      <ArticleCards />
    </AuthProvider>
  );
}
