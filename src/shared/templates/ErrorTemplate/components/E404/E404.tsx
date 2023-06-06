import Image from 'next/image'
import styles from './E404.module.scss'

export const E404 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.code}>
        <Image src="/4.png" width={312} height={482} alt="" />
        <Image src="/dish.jpg" width={437} height={437} alt="" />
        <Image src="/4.png" width={312} height={482} alt="" />
      </div>
      <div className={styles.info}>
        <h2>Whoops, Nothing delicious to find here!</h2>
        <p>
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <button className="btn btn-solid">Back to Home</button>
      </div>
    </section>
  )
}
