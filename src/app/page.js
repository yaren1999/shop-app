import Image from "next/image";
import styles from "./page.module.css";
import BigPicture from "@/components/BigPicture/BigPicture";
import Categories from "@/components/Categories/Categories";

export default function Home() {
  return (
    <div>
     <BigPicture/>
     <Categories/>
    </div>
  );
}
