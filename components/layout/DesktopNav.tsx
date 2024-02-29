'use client';

import styles from '@components/layout/DesktopNav.module.css';
import Logo from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { IoIosLogOut } from 'react-icons/io';

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
        <Link
          href='/agents'
          className={pathname === '/agents' ? styles.active : ''}
        >
          Agents
        </Link>

        {/* <Link href='/sign-in' className={styles.sign_in}>
          Sign in <HiOutlineUserCircle />
        </Link> */}

        <button className={styles.logout}>
          Logout <IoIosLogOut />
        </button>
      </div>
    </nav>
  );
}
