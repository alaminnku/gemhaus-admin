import SubmitButton from '@components/layout/SubmitButton';
import styles from './AgentForm.module.css';
import RichText from '@components/layout/RichText';
import { Dispatch, SetStateAction } from 'react';
import { Agent } from 'types';

import Image from 'next/image';

type Props = {
  image?: string;
  agent?: Agent;
  buttonText: 'Add Agent' | 'Edit Agent';
  setImage?: Dispatch<SetStateAction<string>>;
  setContent: Dispatch<SetStateAction<string>>;
  setDeletedImage?: Dispatch<SetStateAction<string>>;
  handleSubmit: (formData: FormData) => Promise<void>;
};

export default function AgentForm({
  image,
  setImage,
  agent,
  buttonText,
  setContent,
  handleSubmit,
  setDeletedImage,
}: Props) {
  async function handleDeleteImage(image: string) {
    if (!setImage || !setDeletedImage) return;
    setImage('');
    setDeletedImage(image);
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
          <p onClick={() => handleDeleteImage(image)}>Delete</p>
        </div>
      )}

      {!image && (
        <div className={styles.file}>
          <label htmlFor='file'>Upload agent image*</label>
          <input type='file' id='file' name='file' accept='image/*' />
        </div>
      )}

      <SubmitButton text={buttonText} />
    </form>
  );
}
