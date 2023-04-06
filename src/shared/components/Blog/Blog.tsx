import Image from 'next/image'
import styles from './Blog.module.scss'

export const Blog = () => {
  return (
    <section className={styles.section}>
      <div>
        <div className={styles.top}>
          <p className="mini-label">Blog</p>
          <h3 className="h4">Be First Who Read News</h3>
          <p>
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using &apos;Content here, content making.
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Image src="/home/Image01.png" width={661} height={391} alt="" />
            <div>
              <p className="mini-label">Restaurants</p>
              <p className="mini-label">Feb 22, 2022</p>
              <h4 className="h5">
                The Most Popular Delicious Food Of Mediterranean Cuisine
              </h4>
              <p>
                Capitalize on low-hanging fruit to identify a ballpark value
                added matrix economically and the creative activity to beta test
                override the food quality.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src="/home/Image02.png" width={661} height={391} alt="" />
            <div>
              <p className="mini-label">Restaurants</p>
              <p className="mini-label">Feb 22, 2022</p>
              <h4 className="h5">
                Elegant Dessert: 10 Tips How to Make It at Home
              </h4>
              <p>
                Capitalize on low-hanging fruit to identify a ballpark value
                added matrix economically and the creative activity to beta test
                override the food quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
