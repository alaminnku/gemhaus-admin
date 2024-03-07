'use client';

import { useRouter } from 'next/navigation';
import AgentForm from '../agents/AgentForm';
import { useState } from 'react';
import { fetchGemhausData } from '@lib/utils';
import revalidate from '@lib/revalidate';
import styles from './EditAgent.module.css';
import { useAlert } from '@contexts/Alert';
import { useSession } from 'next-auth/react';
import { Agent } from 'types';

type Props = {
  id: string;
  agent: Agent;
};

export default function EditAgent({ id, agent }: Props) {
  const router = useRouter();
  const { update } = useSession();
  const { setAlert } = useAlert();
  const [bio, setBio] = useState(agent.bio);
  const [deletedImage, setDeletedImage] = useState('');
  const [image, setImage] = useState<string>(agent.image);

  // Add agent
  async function handleSubmit(formData: FormData) {
    const session = await update();
    formData.append('bio', bio);
    formData.append('image', image);
    formData.append('deletedImage', deletedImage);

    const { error } = await fetchGemhausData(`/users/agents/${id}/update`, {
      method: 'PATCH',
      body: formData,
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });
    if (error) return setAlert({ message: error.message, type: 'failed' });

    revalidate('agents');
    router.push('/agents');
  }

  return (
    <section className={styles.container}>
      <h1>Edit Agent</h1>

      <AgentForm
        image={image}
        setImage={setImage}
        agent={agent}
        buttonText='Edit Agent'
        setContent={setBio}
        handleSubmit={handleSubmit}
        setDeletedImage={setDeletedImage}
      />
    </section>
  );
}
