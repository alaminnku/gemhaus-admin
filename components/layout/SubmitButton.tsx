import styles from './SubmitButton.module.css';

type Props = {
  buttonText: string;
  handleSubmit: () => Promise<void>;
};

export default function SubmitButton({ buttonText, handleSubmit }: Props) {
  return (
    <button className={styles.submit_button} onClick={handleSubmit}>
      {buttonText}
    </button>
  );
}
