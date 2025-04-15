import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.css';

const ShowCase = () => {
  return (
    <div className={styles.container}>
      
      {/* Kutu 1 */}
      <div className={styles.productBox}>
        <Image
          className={styles.img}
          src="/showcase/huawei.png"
          width={250}
          height={200}
          alt="Huawei Pods"
        />
        <h3 className={styles.title}>Huawei Pods</h3>
        <p className={styles.desc}>Kablosuz, güçlü ve şık bir ses deneyimi.</p>
        <Link href="/productDetail/24" className={styles.shopButton}>Shop Now</Link>
      </div>

      {/* Kutu 2 */}
      <div className={styles.productBox}>
        <Image
          className={styles.img}
          src="/showcase/ipad.png"
          width={250}
          height={200}
          alt="iPad Pro"
        />
        <h3 className={styles.title}>iPad Pro</h3>
        <p className={styles.desc}>Yüksek performanslı, şık tasarım.</p>
        <Link href="/productDetail/11" className={styles.shopButton}>Shop Now</Link>
      </div>

      {/* Kutu 3 */}
      <div className={styles.productBox}>
        <Image
          className={styles.img}
          src="/showcase/galaxy.png"
          width={250}
          height={200}
          alt="Samsung Galaxy"
        />
        <h3 className={styles.title}>Samsung Galaxy</h3>
        <p className={styles.desc}>Modern tasarım, üstün teknoloji.</p>
        <Link href="/productDetail/4" className={styles.shopButton}>Shop Now</Link>
      </div>

      {/* Kutu 4 */}
      <div className={styles.productBox}>
        <Image
          className={styles.img}
          src="/showcase/buffs.png"
          width={250}
          height={200}
          alt="Galaxy Buff"
        />
        <h3 className={styles.title}>Galaxy Buff</h3>
        <p className={styles.desc}>Koruma ve tarz bir arada.</p>
        <Link href="/productDetail/22" className={styles.shopButton}>Shop Now</Link>
      </div>

    </div>
  );
};

export default ShowCase;
