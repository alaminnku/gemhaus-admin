import Link from 'next/link';
import styles from './ActionButton.module.css';

type Props = {
  href: string;
  text: string;
};

export default function ActionButton({ href, text }: Props) {
  return (
    <Link className={styles.action_button} href={href}>
      {text}
    </Link>
  );
}
