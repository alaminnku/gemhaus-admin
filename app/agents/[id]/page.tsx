import Agent from '@components/agent/Agent';

type Props = {
  params: {
    id: string;
  };
};

export default function AgentPage({ params }: Props) {
  return (
    <main>
      <Agent id={params.id} />
    </main>
  );
}
