import Image from 'next/image';
import '../src/css/home.module.css';
import styles from '../src/css/home.module.css';
import image1 from '../src/assets/image1.jpg';

const Home = () => {
  return (
    <section className={styles.section}>
      <div className={styles.home}>
        <div className={styles.left}>
          <p>Marvel Development</p>
          <h4>
            Com grandes Códigos
            <br />
            vem grandes responsabilidades.
          </h4>
          <button className={styles.btn}>Parcipe</button>
        </div>
        <div className={styles.right}>
          <Image src={image1} className={styles.img} alt="imagem" />
          <div className={styles.sombra}></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
