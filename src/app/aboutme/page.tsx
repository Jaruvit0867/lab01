import Image from 'next/image'; 
import styles from './page.module.css'; 
import img1 from './image.png';

export default function Page() {
  return (
    <section className={styles.main}>
      <div className={styles.row}>
        <div id="text-main" className={styles.textMain}>
          <h1 className={styles.about}>About Me</h1>
          <p className={styles.intro}>
            ผม ชื่อจารุวิทย์ แสงแก้วสิริกุล เป็นนักศึกษาในมหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย กำลังศึกษาอยู่ชั้นปีที่ 3
          </p>  
          <p className={styles.description}>
            เกิดวันที่ 2 พฤษภาคม 2547 งานอดิเรกคือ ชอบเล่นเกม ดูหนัง ฟังเพลง
          </p>
        </div>
        <div id="img-main" className={styles.imgMain}>
          <Image 
            className={styles.border} 
            src={img1}
            alt="Profile Image"
            width={700}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
