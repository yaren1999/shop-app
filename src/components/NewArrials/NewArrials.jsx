import Link from 'next/link';
import styles from './style.module.css';

const NewArrivals = () => {
  const products = [
    { 
      id: 1, 
      name: "iPhone 14 Pro", 
      image: "https://productimages.hepsiburada.net/s/513/375-375/110000568470744.jpg", 
      price: 1400, 
      description: "Apple'ın en yeni teknolojisiyle donatılmış güçlü bir akıllı telefon." 
    },
    { 
      id: 2, 
      name: "Samsung Galaxy S23 Ultra", 
      image: "https://productimages.hepsiburada.net/s/356/550/110000369658706.jpg", 
      price: 1300, 
      description: "Samsung'un en gelişmiş kamerası ve güçlü işlemcisiyle üst seviye bir deneyim sunar." 
    },
    { 
      id: 3, 
      name: "XIAOMI 11", 
      image: "https://images.hepsiburada.net/assets/Telefon/ProductDesc/HBV00000TOMQ-11.png", 
      price: 1300, 
      description: "Samsung'un en gelişmiş kamerası ve güçlü işlemcisiyle üst seviye bir deneyim sunar." 
    },
    { 
      id: 4, 
      name: "HP Omen 45L", 
      image: "https://static1.xdaimages.com/wordpress/wp-content/uploads/2021/12/HP-OMEN-45L-14.jpg", 
      price: 2200, 
      description: "Oyun severler için tasarlanmış, güçlü donanım özellikleriyle dikkat çeken bir model." 
    },
    { 
      id: 5, 
      name: "MacBook Air", 
      image: "https://productimages.hepsiburada.net/s/49/375-375/10983950254130.jpg", 
      price: 2500, 
      description: "M2 çipi ile üstün performans sunan Apple'ın yeni nesil dizüstü bilgisayarı." 
    },
    { 
      id: 6, 
      name: "Sony WH-1000XM5", 
      image: "https://productimages.hepsiburada.net/s/240/375-375/110000223938780.jpg", 
      price: 400, 
      description: "Gelişmiş gürültü engelleme teknolojisine sahip kablosuz kulaklık." 
    },
    { 
      id: 7, 
      name: "Logitech MX Master 3S", 
      image: "https://m.media-amazon.com/images/I/512V4kRs2iL.jpg", 
      price: 100, 
      description: "Ergonomik tasarımı ve yüksek hassasiyetiyle öne çıkan kablosuz fare." 
    },
    { 
      id: 8, 
      name: "Corsair K95 RGB Platinum", 
      image: "https://m.media-amazon.com/images/I/71PzW7vZNUL._AC_UF1000,1000_QL80_.jpg", 
      price: 150, 
      description: "Mekanik tuşları ve RGB aydınlatmasıyla oyuncular için özel tasarlanmış klavye." 
    }
  ];

  return (
            <div className={styles.container}>
               
                <div className={styles.header}>
                <span className={styles.activeTab}>🖤 New Arrival</span>
                <span className={styles.inactiveTab}>🤍 Best Seller</span>
                <span className={styles.inactiveTab}>🤍 Featured Products</span>
                </div>

                    <div className={styles.productGrid}>
                        {products.map((product) => (
                            <div key={product.id} className={styles.productCard}>
                            <img src={product.image} alt={product.name} className={styles.productImage} />
                            <h3 className={styles.productTitle}>{product.name}</h3>
                            <p className={styles.productDescription}>{product.description}</p>
                            <p className={styles.productPrice}>Price: ${product.price}</p>
                            <Link href={`/productDetail/${product.id}`} className={styles.shopButton}>
                                Buy Now
                            </Link>
                            </div>
                        ))}
            </div>   </div>
  );
};

export default NewArrivals;
