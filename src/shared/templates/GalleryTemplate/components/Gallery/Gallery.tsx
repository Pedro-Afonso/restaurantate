import Image from 'next/image'
import styles from './Gallery.module.scss'

export const Gallery = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <Image src="/gallery/dishes-section/1.jpg" fill alt="" />
        </div>
        <div>
          <Image src="/gallery/dishes-section/3.jpg" fill alt="" />
        </div>
        <div>
          <Image src="/gallery/dishes-section/4.jpg" fill alt="" />
        </div>
        <div>
          <Image src="/gallery/dishes-section/5.jpg" fill alt="" />
        </div>
        <div>
          <Image src="/gallery/dishes-section/6.jpg" fill alt="" />
        </div>
        <div>
          <Image src="/gallery/dishes-section/2.jpg" fill alt="" />
        </div>
      </div>
      <button className={styles.button + ' btn btn-outline'}>
        See all dishes
      </button>
    </section>
  )
}
