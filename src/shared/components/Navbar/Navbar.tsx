import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1 aria-hidden>Restaurantate</h1>
        <Image src="Logo.svg" alt="Restaurantate" width={379} height={188} />
        <button className="btn btn-outline">Call - 987 654 321</button>
        <div className={styles.reservation}>
          <Image
            src="icons/CartIcon.svg"
            width={33}
            height={31}
            alt="Carrinho"
          />
          <button className="btn btn-solid">Reservation</button>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.links}>
          <nav className={styles.nav}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservation</li>
              <li>Gallery</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </nav>

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
      </div>
    </header>
  )
}
