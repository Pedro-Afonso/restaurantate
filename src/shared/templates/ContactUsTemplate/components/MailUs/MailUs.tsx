import { HeadingSection } from '@/shared/components'
import styles from './MailUs.module.scss'

export const MailUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <HeadingSection
            className={styles.heading}
            title="Have a Question?"
            miniLabel="Mail Us"
            description=""
          />
          <form>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Subject" name="subject" />
            <input type="text" placeholder="Phone" name="phone" />
            <textarea placeholder="Message" name="message" />
            <button className="btn btn-outline">Send</button>
          </form>
        </div>
        <div>
          <h3 className="h4">Contact Information</h3>
          <p>
            Bring the table winwin survival strateges ensure proactive
            domination the end of the day going real times multiple touchpoints.
          </p>
          <div className={styles.icon}>
            <img src="/icons/LocationIcon.svg" alt="" />
            <p>Riverside 25, San Francisco, California</p>
          </div>
          <div className={styles.icon}>
            <img src="/icons/Mail.svg" alt="" />
            <p>evanmattew@mail.com</p>
          </div>
          <div className={styles.icon}>
            <img src="/icons/phone.svg" alt="" />
            <p>800-234-567</p>
          </div>
          <div className={styles.social}>
            <img src="/icons/InstaIcon.svg" alt="" />
            <img src="/icons/FbIcon.svg" alt="" />
            <img src="/icons/TwiterIcon.svg" alt="" />
            <img src="/icons/PintrestIcon.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
