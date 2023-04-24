import Image from 'next/image'
import styles from './Services.module.scss'

export const Services = () => {
  return (
    <section className={styles.section}>
      <div>
        <div className={styles.content}>
          <p className="mini-label">What we offer</p>
          <h3 className="h4">Our Great Services</h3>
          <p>
            Lorem Ipsum is that it has a more-or-less normal distribution
            content making it look like readable English.
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div>
              <Image
                src="/home/services-section/1.svg"
                width={54}
                height={54}
                alt=""
              />
              <p>Opened 24/7</p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <Image
                src="/home/services-section/2.svg"
                width={54}
                height={54}
                alt=""
              />
              <p>Special Menus</p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <Image
                src="/home/services-section/3.svg"
                width={54}
                height={54}
                alt=""
              />
              <p>Home Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
