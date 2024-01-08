import Article from '@components/blog/Article';

type Props = {
  params: { id: string };
};

export default async function ArticlePage({ params }: Props) {
  const { id } = params;

  return (
    <main>
      <Article id={id} />
    </main>
  );
}
