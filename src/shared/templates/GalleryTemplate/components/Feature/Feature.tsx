import Image from 'next/image'
import styles from './Feature.module.scss'

export const Feature = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <p className="mini-label">Feature</p>
          <h3>Always fresh ingredients</h3>
          <p>
            The people, food and the prime locations make Rodich the perfect
            place good friends & family to come together and have great time.
          </p>
          <button className="btn btn-outline">View Menu</button>
        </div>
        <div>
          <Image src="/gallery/feature-section/1.jpg" alt="" fill />
        </div>
        <div>
          <Image src="/gallery/feature-section/2.jpg" alt="" fill />
        </div>
        <div className={styles.content}>
          <p className="mini-label">Feature</p>
          <h3>We invite you to visit our restaurant</h3>
          <p>
            Every time you perfectly dine with us, it should happy for great
            inspired food in an environment designed with individual touches
            unique to the local area.
          </p>
          <button className="btn btn-outline">View Menu</button>
        </div>
      </div>
    </section>
  )
}
