'use client';

import { useFormStatus } from 'react-dom';
import styles from './SubmitButton.module.css';
import { BeatLoader } from 'react-spinners';

type Props = {
  text: string;
};

export default function SubmitButton({ text }: Props) {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className={styles.submit_button} disabled={pending}>
      {pending ? <BeatLoader color='#ffffff' size={10} /> : text}
    </button>
  );
}
