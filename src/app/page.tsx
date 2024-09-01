import Image from "next/image";
import styles from "./page.module.css";
import img2 from './pokemonbig.webp';
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Landing Page</h1>
      <p>This is a first page.</p>
      <Image 
            className={styles.witchaphon} 
            src={img2}
            alt="Profile Image"
            width={1200}
            height={700}
          />
    </div>
    
  );
}
