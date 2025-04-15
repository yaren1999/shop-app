import Image from "next/image";
import styles from "./page.module.css";
import BigPicture from "@/components/BigPicture/BigPicture";
import Categories from "@/components/Categories/Categories";
import Promotion from "@/components/Promotion/Promotion";

export default function Home() {
  return (
    <div>
     <BigPicture/>
     
     <Promotion/>
     <Categories/>
    </div>
  );
}
