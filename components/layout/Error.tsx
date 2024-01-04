import styles from '@components/layout/Error.module.css';
import Link from 'next/link';

type Props = {
  error: {
    status: number;
    message: string;
  };
};

export default function Error({ error }: Props) {
  return (
    <div className={styles.container}>
      <p>{error.message}</p>
      {error.status === 401 && (
        <p>
          . Please <Link href='/sing-in'>sign in</Link>
        </p>
      )}
    </div>
  );
}
