import Image from "next/image";
import styles from "./page.module.css";
import BigPicture from "@/components/BigPicture/BigPicture";
import Categories from "@/components/Categories/Categories";
import Promotion from "@/components/Promotion/Promotion";
import NewArrivals from "@/components/NewArrials/NewArrials";
import ShowCase from "@/components/ShowCase/ShowCase";
import BestSellerProducts from "@/components/BestSellerProducts/BestSellerProducts";

export default function Home() {
  return (
    <div>
     <BigPicture/>
     
     <Promotion/>
     <Categories/>
     <NewArrivals/>
     <ShowCase/>
     <BestSellerProducts/>
    </div>
  );
}
