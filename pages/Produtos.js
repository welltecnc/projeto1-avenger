import Image from 'next/image'
import '../src/css/base.css'
import styles from '../src/css/produtos.module.css'
import imgprod1 from '../src/assets/image1.jpg'
import imgprod2 from '../src/assets/image2.jpg'
import imgprod3 from '../src/assets/image3.jpg'
import imgprod4 from '../src/assets/image4.jpg'

const Produtos = () => {
  return (
    <section className={styles.section}>
      <li className={styles.grid}>
        <div className={styles.produtoLista}>
          <Image src={imgprod1} alt="imagem2" className={styles.foto}/>
          <h3 className={styles.titulo}>Produto-1</h3>
          <p className={styles.descricao}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cumque eum quo officiis id
          </p>
          <button className={styles.btnProd}>Comprar</button>
        </div>
      </li>

      <li className={styles.grid}>
        <div className={styles.produtoLista}>
          <Image src={imgprod2} alt="imagem2" className={styles.foto}/>
          <h3 className={styles.titulo}>Produto-1</h3>
          <p className={styles.descricao}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cumque eum quo officiis id
          </p>
          <button className={styles.btnProd}>Comprar</button>
        </div>
      </li>

      <li className={styles.grid}>
        <div className={styles.produtoLista}>
          <Image src={imgprod3} alt="imagem2" className={styles.foto}/>
          <h3 className={styles.titulo}>Produto-1</h3>
          <p className={styles.descricao}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cumque eum quo officiis id
          </p>
          <button className={styles.btnProd}>Comprar</button>
        </div>
      </li>

      <li className={styles.grid}>
        <div className={styles.produtoLista}>
          <Image src={imgprod4} alt="imagem2" className={styles.foto}/>
          <h3 className={styles.titulo}>Produto-1</h3>
          <p className={styles.descricao}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cumque eum quo officiis id
          </p>
          <button className={styles.btnProd}>Comprar</button>
        </div>
      </li>



    </section>
  )
}

export default Produtos