import AddTransaction from '@components/agent/AddTransaction';

type Props = {
  params: { id: string };
};

export default function AddPropertyPage({ params }: Props) {
  return (
    <main>
      <AddTransaction id={params.id} />
    </main>
  );
}
