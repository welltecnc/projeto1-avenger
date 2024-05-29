import '../src/css/base.css';
import styles from '../src/css/contato.module.css';

const Contato = () => {
  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <h1 className={styles.h1}>Entre em Contato</h1>
        <p className={styles.nome}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id={styles.nome}
            placeholder="Digite seu nome"
            name="nome"
          />
        </p>
        <p className={styles.telefone}>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id={styles.telefone}
            placeholder="Digite seu telefone"
            name="telefone"
          />
        </p>
        <p className={styles.email}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id={styles.email}
            placeholder="Digite seu email"
            name="email"
          />
        </p>
        <p>
          <textarea
            className={styles.textarea}
            placeholder="Deixe sus Mensagem"
          ></textarea>
        </p>

        <button className={styles.btn}>Enviar</button>
      </form>
    </section>
  );
};

export default Contato;
