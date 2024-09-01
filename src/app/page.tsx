import Image from "next/image";
import styles from "./page.module.css";
import img2 from './pokemonbg.webp';
export default function Home() {
  return (
    <div className={styles.container}>
      <h1></h1>
      <p></p>
      <Image 
            className={styles.border} 
            src={img2}
            alt="Profile Image"
            width={2150}
            height={950}
          />
    </div>
    
  );
}
