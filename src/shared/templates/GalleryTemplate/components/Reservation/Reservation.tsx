import Image from 'next/image'
import styles from './Reservation.module.scss'

export const Reservation = () => {
  return (
    <section className={styles.section}>
      <Image src="/gallery/reservation-section/bg-1.jpg" alt="" fill />
      <div>
        <div className={styles.content}>
          <p className="mini-label">Reservation</p>
          <h3 className="h4">This evening will be graet!</h3>
          <p>
            Lorem Ipsum is that it has a more-or-less normal look like readable
            English.
          </p>
          <div className={styles.buttons}>
            <button className="btn btn-outline">Book a table</button>
            <button className="btn btn-text">Get in touch</button>
          </div>
        </div>
      </div>
    </section>
  )
}
