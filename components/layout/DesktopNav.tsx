'use client';

import styles from '@components/layout/DesktopNav.module.css';
import Logo from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { IoIosLogOut } from 'react-icons/io';
import { signOut, useSession } from 'next-auth/react';

export default function DesktopNav() {
  const pathname = usePathname();
  const { data: session } = useSession();

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

        {!session || session.user.role !== 'ADMIN' ? (
          <Link href='/sign-in' className={styles.sign_in}>
            Sign in <HiOutlineUserCircle />
          </Link>
        ) : (
          <button onClick={() => signOut()} className={styles.sign_out}>
            Sign out <IoIosLogOut />
          </button>
        )}
      </div>
    </nav>
  );
}
