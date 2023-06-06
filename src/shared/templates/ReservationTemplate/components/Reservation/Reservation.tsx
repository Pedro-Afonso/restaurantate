import Image from 'next/image'

import { HeadingSection } from '@/shared/components'

import styles from './Reservation.module.scss'

export const Reservation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <HeadingSection
            className={styles.heading}
            title="Book your table now"
            miniLabel="Reservation"
            description="The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time."
          />
          <form>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Phone" name="phone" />
            <input type="text" placeholder="Date" name="date" />
            <input type="text" placeholder="Time" name="time" />
            <input type="text" placeholder="Person" name="person" />
            <button className="btn btn-outline">Book a Table</button>
          </form>
        </div>
        <div className={styles.image}>
          <Image src="/reservation/reservation-section/bg-1.jpg" alt="" fill />
        </div>
      </div>
    </section>
  )
}
