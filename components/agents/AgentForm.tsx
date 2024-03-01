import SubmitButton from '@components/layout/SubmitButton';
import styles from './AgentForm.module.css';
import RichText from '@components/layout/RichText';
import { Dispatch, SetStateAction } from 'react';
import { Agent } from 'types';

type Props = {
  agent?: Agent;
  content: string;
  buttonText: 'Add Agent';
  setContent: Dispatch<SetStateAction<string>>;
  handleSubmit: (formData: FormData) => Promise<void>;
};

export default function AgentForm({
  agent,
  content,
  buttonText,
  setContent,
  handleSubmit,
}: Props) {
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
        <RichText value={content} setValue={setContent} />
      </div>

      <div className={styles.file}>
        <label htmlFor='file'>Upload agent image*</label>
        <input type='file' id='file' name='file' accept='image/*' />
      </div>

      <SubmitButton text={buttonText} />
    </form>
  );
}
