import DesktopNav from './DesktopNav';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <DesktopNav />
    </header>
  );
}
