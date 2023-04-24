import Image from 'next/image'
import styles from './Counts.module.scss'

export const Counts = () => {
  return (
    <section className={styles.section}>
      <Image
        className={styles.background}
        src="/about-us/counts-section/bg-1.jpg"
        alt=""
        fill
      />
      <div className={styles.grid}>
        <div>
          <img src="/icons/freshIcon.svg" alt="Fresh Product" />
          <h3>Fresh Product</h3>
          <p>Professional consider everyone probls small niche friendly.</p>
          <button className="btn btn-text--colored">See more</button>
        </div>
        <span></span>
        <div>
          <img src="/icons/chefIcon.svg" alt="Skilled Chefs" />
          <h3>Skilled Chefs</h3>
          <p>Professional consider everyone probls small niche friendly.</p>
          <button className="btn btn-text--colored">See more</button>
        </div>
        <span></span>
        <div>
          <img src="/icons/drinkIcon.svg" alt="Drinks & Juices" />
          <h3>Drinks & Juices</h3>
          <p>Professional consider everyone probls small niche friendly.</p>
          <button className="btn btn-text--colored">See more</button>
        </div>
        <span></span>
        <div>
          <img src="/icons/veganIcon.svg" alt="Vegan Cuisine" />
          <h3>Vegan Cuisine</h3>
          <p>Professional consider everyone probls small niche friendly.</p>
          <button className="btn btn-text--colored">See more</button>
        </div>
      </div>
    </section>
  )
}
