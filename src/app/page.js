import Image from "next/image";
import styles from "./page.module.css";
import products from "../Data/products.json"
import ProductList from "@/components/ProductList/ProductList";
export default function Home() {
  return (
    <div>
      <ProductList productList={products}/>
    </div>
  );
}
