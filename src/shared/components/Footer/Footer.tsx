import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <p>Instagram Feed</p>

        <Image src="Logo.svg" alt="Restaurantate" width={379} height={188} />

        <ul className={styles.social}>
          <li>
            <Link href="#">
              <Image
                src="icons/InstaIcon.svg"
                width={25}
                height={23}
                alt="Instagram"
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                src="icons/FbIcon.svg"
                width={25}
                height={23}
                alt="Instagram"
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                src="icons/TwiterIcon.svg"
                width={25}
                height={23}
                alt="Instagram"
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                src="icons/PintrestIcon.svg"
                width={25}
                height={23}
                alt="Instagram"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.middle}>
        <div>
          <p className="mini-label">Contact</p>
          <p>
            5 Rue Dalou, 75015 Paris <br />
            <span>Call</span> - +33 156 78 89 56
            <br />
            <span> benoit@mail.com</span>
          </p>
        </div>
        <div>
          <p>
            Join our mailing list for updates,
            <br /> Get news & offers events.
          </p>
          <form>
            <div className={styles.input + ' label-input'}>
              <label className="visually-hidden" htmlFor="email_footer">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email_footer"
                placeholder="Email"
              />
              <button>Subscribe</button>
            </div>
          </form>
        </div>
        <div>
          <p className="mini-label">Working Hours</p>
          <p>
            <span>Mon – Fri:</span> 7.00am – 6.00pm
            <br />
            <span>Sat:</span> 7.00am – 6.00pm <br />
            <span>Sun:</span> 8.00am – 6.00pm
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          © Copyright - Restaurantate | Designed by <span>VictorFlow </span>
          Templates - Powered by <span>Webflow</span>
        </p>
        <p>Styleguide / Licenses</p>
      </div>
    </footer>
  )
}
