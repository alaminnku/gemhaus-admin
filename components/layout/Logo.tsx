import Link from 'next/link';
import Image from 'next/image';
import logo from '@public/layout/logo-black.png';
import styles from '@components/layout/Logo.module.css';

export default function Logo() {
  return (
    <Link href='/' className={styles.container}>
      <Image src={logo} alt='GemHaus logo' />
      <p>GemHaus</p>
    </Link>
  );
}
