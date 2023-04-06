import Image from 'next/image'
import styles from './Reservation.module.scss'

export const Reservation = () => {
  return (
    <section className={styles.section}>
      <Image src="/home/Background01.png" alt="" width={1920} height={1080} />
      <div>
        <p className="mini-label">Reservation</p>
        <h3 className="h4">Book your table now</h3>
        <form>
          <div className="label-input">
            <label htmlFor="name" className="visually-hidden">
              Name
            </label>
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div className="label-input">
            <label htmlFor="email" className="visually-hidden">
              Email
            </label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="label-input">
            <label htmlFor="person" className="visually-hidden">
              Person
            </label>
            <input
              type="number"
              id="person"
              name="person"
              placeholder="Person"
            />
          </div>
          <div className="label-input">
            <label htmlFor="timing" className="visually-hidden">
              Timing
            </label>
            <input type="time" id="timing" name="timing" placeholder="Timing" />
          </div>
          <div className="label-input">
            <label htmlFor="date" className="visually-hidden">
              Date
            </label>
            <input type="date" id="date" name="date" placeholder="Date" />
          </div>
          <button>Book a Table</button>
        </form>
      </div>
    </section>
  )
}
