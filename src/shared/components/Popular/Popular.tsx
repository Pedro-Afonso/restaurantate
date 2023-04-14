import Image from 'next/image'
import styles from './Popular.module.scss'

export const Popular = () => {
  return (
    <section className={styles.section}>
      <div>
        <div className={styles.header}>
          <p className="mini-label">Menu</p>
          <h3 className="h4">Popular Dishes</h3>
          <p>
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using &apos;Content here, content making.
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Image
              src="/home/popular-section/1.jpg"
              height={320}
              width={310}
              alt=""
            />
            <h4 className="h5">
              Chicken Manjoori <span>$15</span>
            </h4>
            <p>Lorem Ipsum is that it has a more-or-less normal</p>
          </div>
          <div className={styles.card}>
            <Image
              src="/home/popular-section/2.jpg"
              height={320}
              width={310}
              alt=""
            />
            <h4 className="h5">
              Chicken Manjoori <span>$15</span>
            </h4>
            <p>Lorem Ipsum is that it has a more-or-less normal</p>
          </div>
          <div className={styles.card}>
            <Image
              src="/home/popular-section/3.jpg"
              height={320}
              width={310}
              alt=""
            />
            <h4 className="h5">
              Chicken Manjoori <span>$15</span>
            </h4>
            <p>Lorem Ipsum is that it has a more-or-less normal</p>
          </div>
          <div className={styles.card}>
            <Image
              src="/home/popular-section/4.jpg"
              height={320}
              width={310}
              alt=""
            />
            <h4 className="h5">
              Chicken Manjoori <span>$15</span>
            </h4>
            <p>Lorem Ipsum is that it has a more-or-less normal</p>
          </div>
        </div>
        <button className={styles.btn + ' btn btn-outline'}>
          See all dishes
        </button>
      </div>
    </section>
  )
}
