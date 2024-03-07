import SubmitButton from '@components/layout/SubmitButton';
import styles from './AgentForm.module.css';
import RichText from '@components/layout/RichText';
import { Dispatch, SetStateAction, useState } from 'react';
import { Agent } from 'types';
import { useAlert } from '@contexts/Alert';
import { useSession } from 'next-auth/react';
import { fetchGemhausData } from '@lib/utils';
import Image from 'next/image';

type Props = {
  image?: string;
  agent?: Agent;
  buttonText: 'Add Agent' | 'Edit Agent';
  setImage?: Dispatch<SetStateAction<string>>;
  setContent: Dispatch<SetStateAction<string>>;
  handleSubmit: (formData: FormData) => Promise<void>;
};

export default function AgentForm({
  image,
  setImage,
  agent,
  buttonText,
  setContent,
  handleSubmit,
}: Props) {
  const { setAlert } = useAlert();
  const { update } = useSession();
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDeleteImage(image: string) {
    if (!agent) return;
    setIsDeleting(true);
    const session = await update();
    const imageId = image.split('/')[image.split('/').length - 1];

    const { data, error } = await fetchGemhausData(
      `/users/agents/${agent._id}/delete/${imageId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${session?.user.accessToken}`,
        },
      }
    );
    if (error) return setAlert({ message: error.message, type: 'failed' });

    setIsDeleting(false);
    setImage && setImage('');
    setAlert({ message: data.message, type: 'success' });
  }
  return (
    <form action={handleSubmit}>
      <div className={styles.items}>
        <div className={styles.item}>
          <label htmlFor='name'>Agent name*</label>
          <input
            type='text'
            id='name'
            name='name'
            defaultValue={agent?.name}
            placeholder='Enter agent name '
          />
        </div>
        <div className={styles.item}>
          <label htmlFor='email'>Agent email*</label>
          <input
            type='email'
            id='email'
            name='email'
            defaultValue={agent?.email}
            placeholder='Enter agent email '
          />
        </div>
        <div className={styles.item}>
          <label htmlFor='phone'>Agent phone*</label>
          <input
            type='text'
            id='phone'
            name='phone'
            defaultValue={agent?.phone}
            placeholder='Enter agent phone '
          />
        </div>
        <div className={styles.item}>
          <label htmlFor='address'>Agent address*</label>
          <input
            type='text'
            id='address'
            name='address'
            defaultValue={agent?.address}
            placeholder='Enter agent address '
          />
        </div>
        <div className={styles.item}>
          <label htmlFor='qrCodeLink'>Agent QR code link*</label>
          <input
            type='text'
            id='qrCodeLink'
            name='qrCodeLink'
            defaultValue={agent?.qrCodeLink}
            placeholder='Enter agent QR code link '
          />
        </div>
      </div>

      <div className={styles.content}>
        <label>Agent bio*</label>
        <RichText defaultValue={agent?.bio} setValue={setContent} />
      </div>

      {image && (
        <div className={styles.image}>
          <Image src={image} width={200} height={200} alt='Article image' />
          <button
            disabled={isDeleting}
            onClick={() => handleDeleteImage(image)}
          >
            Delete
          </button>
        </div>
      )}

      <div className={styles.file}>
        <label htmlFor='file'>Upload agent image*</label>
        <input type='file' id='file' name='file' accept='image/*' />
      </div>

      <SubmitButton text={buttonText} />
    </form>
  );
}
