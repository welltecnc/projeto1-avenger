import '../src/css/base.css';
import styles from '../src/css/sobre.module.css';

const Sobre = () => {
  return (
    <section className={styles.section}>
      <div className={styles.medicao}>
        <div className={styles.medicaoItem}>
          <span className={styles.contador1}>100+</span>
          <h3>Vingadores</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quia.
          </p>
        </div>

        <div className={styles.medicaoItem}>
          <span className={styles.contador2}>200+</span>
          <h3>Usuários Conectados</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            veritatis culpa eos,
          </p>
        </div>
        <div className={styles.medicaoItem}>
          <span className={styles.contador3}>300+</span>
          <h3>Donwloads streaming</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod a
            illo, inventore quis
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
