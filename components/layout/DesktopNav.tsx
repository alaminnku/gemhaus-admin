'use client';

import styles from '@components/layout/DesktopNav.module.css';
import Logo from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <Logo />

      <div className={styles.navigation}>
        <Link
          href='/properties'
          className={pathname === '/properties' ? styles.active : ''}
        >
          Properties
        </Link>
        <Link
          href='/blog'
          className={pathname === '/blog' ? styles.active : ''}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
