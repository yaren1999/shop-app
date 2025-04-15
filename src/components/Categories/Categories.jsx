
"use client"
import styles from "./style.module.css"
import categories from "../../data/categories.json"
import { useRouter } from "next/navigation"
import Image from "next/image"

const Categories = () => {

    const router = useRouter();
    return (
        <div className={styles.container}>
             <div className={styles.title}>Browse by Category</div> {/* Başlık eklendi */}
            
            {categories.map((c) => {
                return (
                    <div className={styles.card} key={c.categoryId} onClick={() => router.push(`/products/${c.categoryId}`)}>
                        {c.categoryName}
                        <Image src={c.img} width={50} height={50} alt="img" />
                    </div>
                )
            })}
        </div>
    )
}

export default Categories; 
