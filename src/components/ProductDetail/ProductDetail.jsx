"use client"
import { useState } from "react";
import styles from "./style.module.css";

const ProductDetailPage = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedStorage, setSelectedStorage] = useState('128GB');

  const colors = ['black', 'white', 'blue', 'red', 'green'];
  const storages = ['128GB', '256GB', '512GB', '64GB'];

  return (
    <div className={styles.wrapper}>
      
      
      <div className={styles.breadcrumbs}>
        <span className={styles.breadcrumb}>Home</span> &gt;&nbsp;
        <span className={styles.breadcrumb}>Catalog</span> &gt;&nbsp;
        <span className={styles.breadcrumb}>Smartphones</span> &gt;&nbsp;
        <span className={styles.breadcrumb}>Apple</span> &gt;&nbsp;
        <span className={styles.selectedProduct}>{product.productName}</span>
      </div>

     
      <div className={styles.mainContent}>
      
        <div className={styles.container}>
          <img className={styles.image} src={product.image} alt={product.productName} />
          <div className={styles.name}>{product.productName}</div>
          <div className={styles.price}>${product.price}</div>
          <div className={styles.stock}>Stok: {product.stockAmount} adet</div>
          <div className={styles.description}>{product.description}</div>
        </div>

        
        <div className={styles.detailsContainer}>
        <div className={styles.detailsTitle}>{product.productName}</div>

          <div className={styles.detailsPrice}>${product.price}</div>
          <div className={styles.detailsOldPrice}>${product.oldPrice}</div>

          <div className={styles.colorSelection}>
            <label>Select Color: </label>
            <div className={styles.colorOptions}>
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`${styles.colorBox} ${styles[color]} ${selectedColor === color ? styles.selected : ''}`}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <div className={styles.storageSelection}>
            <label>Select Storage: </label>
            <div className={styles.storageOptions}>
              {storages.map((storage, index) => (
                <button
                  key={index}
                  className={`${styles.storageButton} ${selectedStorage === storage ? styles.selected : ''}`}
                  onClick={() => setSelectedStorage(storage)}
                >
                  {storage}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.wishlistButton}>Add to Wishlist</button>
            <button className={styles.cartButton}>Add to Cart</button>
          </div>
        </div>
      </div>
        
        
            <div className={styles.specsSection}>
            <div className={styles.specTitle}>Details</div>
            <p className={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat ut neque nec dapibus. Integer non ligula a sem blandit lacinia.
            </p>

            <div className={styles.specGroup}>
                <div className={styles.specHeading}>SCREEN</div>

                <div className={styles.specItem}>
                <span className={styles.label}>The screen diagonal</span>
                <span className={styles.value}>6.7"</span>
                </div>
                <div className={styles.divider}></div>

                <div className={styles.specItem}>
                <span className={styles.label}>The screen resolution</span>
                <span className={styles.value}>2200px x 1100px</span>
                </div>
                <div className={styles.divider}></div>

                <div className={styles.specItem}>
                <span className={styles.label}>The screen refresh rate</span>
                <span className={styles.value}>120Hz</span>
                </div>
                <div className={styles.divider}></div>

                <div className={styles.specItem}>
                <span className={styles.label}>The pixel density</span>
                <span className={styles.value}>460ppi</span>
                </div>
                <div className={styles.divider}></div>

                <div className={styles.specItem}>
                <span className={styles.label}>Screen type</span>
                <span className={styles.value}>OLED</span>
                </div>
                <div className={styles.divider}></div>
            </div>

            <div className={styles.specGroup}>
                <div className={styles.specHeading}>ADDITIONALLY</div>
                <ul className={styles.list}>
                <li>Dynamic Island</li>
                <li>Always-On Display</li>
                <li>HDR Display</li>
                <li>True Tone</li>
                <li>Wide Color (P3)</li>
                </ul>
                <div className={styles.divider}></div>
            </div>

            <div className={styles.specItem}>
                <span className={styles.label}>CPU</span>
                <span className={styles.value}>A16 Bionic</span>
            </div>
            <div className={styles.divider}></div>
            </div>


    </div>
  );
};

export default ProductDetailPage;
