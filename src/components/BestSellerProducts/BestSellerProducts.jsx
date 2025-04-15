import ProductList from "../ProductList/ProductList";
import products from "../../data/products.json";
import styles from "./style.module.css";

const getRandomProducts = (count) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const BestSellerProducts = () => {
    const bsProducts = getRandomProducts(6);
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <span className={styles.icon}>★</span>
                BEST SELLER PRODUCTS
                <span className={styles.icon}>★</span>
            </div>
            <ProductList productList={bsProducts} />
        </div>
    );
};

export default BestSellerProducts;
