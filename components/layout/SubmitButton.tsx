import styles from './SubmitButton.module.css';

type Props = {
  buttonText: string;
  isLoading: boolean;
  handleSubmit: () => Promise<void>;
};

export default function SubmitButton({
  buttonText,
  isLoading,
  handleSubmit,
}: Props) {
  return (
    <button
      className={styles.submit_button}
      onClick={handleSubmit}
      disabled={isLoading}
    >
      {isLoading ? 'Adding...' : buttonText}
    </button>
  );
}
