import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <Image className={styles.image}
        src="/ekorre.jpg"
        width={300}
        height={450}
        alt="A picture of a squirrel"
      />
    </main>
  );
}
