import Link from 'next/link';
import styles from '../css/nav.module.css';
import '../css/base.css';

const Nav = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/Home" className={styles.logo}>
              AvengerCity
            </Link>
          </li>

          <li>
            <Link href="/Home" className={styles.link}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/Sobre" className={styles.link}>
              Sobre
            </Link>
          </li>

          <li>
            <Link href="/Produtos" className={styles.link}>
              Produtos
            </Link>
          </li>

          <li>
            <Link href="/Contato" className={styles.link}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
