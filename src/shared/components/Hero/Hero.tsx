import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <section className={styles.section}>
      <div>
        <div className={styles.content}>
          <h2>Welcome to Restaurantate</h2>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy .
          </p>
          <Link href="#" className="btn btn-outline">
            View Menu
          </Link>
        </div>
        <div className={styles['hero-image']}>
          <Image
            src="home/PhotoBanner.svg"
            width={601}
            height={747}
            alt="Restaurantate"
          />
        </div>
        <Image
          className={styles['hero-details']}
          src="home/Pattern.svg"
          width={363}
          height={363}
          alt=""
        />
      </div>
    </section>
  )
}
