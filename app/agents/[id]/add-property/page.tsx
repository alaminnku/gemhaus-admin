import AddProperty from '@components/agent/AddProperty';

type Props = { params: { id: string } };

export default function AddPropertyPage({ params }: Props) {
  return (
    <main>
      <AddProperty id={params.id} />
    </main>
  );
}
