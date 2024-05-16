import Link from 'next/link'
import styles from '@/app/components/Navbar/navbar.module.css';
 
function Navbar() {
    return (
      <ul className={styles.navbar}>
        <li className={styles.navbar}>
          <Link className={styles.navbar} href="/">Home</Link>
        </li>
        <li className={styles.navbar}>
          <Link className={styles.navbar} href="/about">About Me</Link>
        </li>
      </ul>
    );
  }
 
export default Navbar