import Image from 'next/image'
import styles from './AboutUs.module.scss'

export const AboutUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <p className="mini-label">About Us</p>
          <h3 className="h4">Quality and Tradition</h3>
          <p>
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using &apos;Content here, content gfshere
            making look like readable English. Many desktop publishing packages.
          </p>
          <div className={styles.sign}>
            <p>JOSEFINE</p>
            <Image
              src="icons/Josefine.svg"
              alt="Josefine"
              width={167}
              height={92}
            />
          </div>
          <button className="btn btn-outline">See More</button>
        </div>
        <div className={styles.image}>
          <Image
            className={styles.background}
            src="/about-us/about-us-section/bg-1.jpg"
            width={561}
            height={628}
            alt=""
          />
          <img
            className={styles.pattern}
            src="/about-us/about-us-section/pattern-1.svg"
            alt=""
          />
          <div className={styles.card}>
            <div>
              <Image
                src="/about-us/about-us-section/profile-1.jpg"
                width={72}
                height={72}
                alt="Josefine"
              />
              <p>Josefine</p>
              <p>Ceo & Founder</p>
            </div>
            <p>Capitalize on low hanging fruit to identify a ballpark</p>
            <div className={styles.rating}>
              <img src="/about-us/about-us-section/star.svg" alt="" />
              <img src="/about-us/about-us-section/star.svg" alt="" />
              <img src="/about-us/about-us-section/star.svg" alt="" />
              <img src="/about-us/about-us-section/star.svg" alt="" />
              <img src="/about-us/about-us-section/star.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
