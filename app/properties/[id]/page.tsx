import Property from '@components/properties/Property';

type Props = {
  params: { id: string };
};

export default function PropertyPage({ params }: Props) {
  const { id } = params;
  return (
    <main>
      <Property id={id} />
    </main>
  );
}
