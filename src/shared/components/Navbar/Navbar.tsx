import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import { useState } from 'react'
import cls from 'classnames'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const clNav = cls(styles.nav, { [styles['menu-open']]: isMenuOpen })

  const clSocial = cls(styles.social, { [styles['menu-open']]: isMenuOpen })

  const handleMenuButton = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <header className={styles.header}>
      <div>
        <Image
          className={styles.logo}
          src="Logo.svg"
          alt="Restaurantate"
          width={379}
          height={188}
        />
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
          <button className={styles['menu-btn']} onClick={handleMenuButton}>
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
          <nav>
            <ul className={clNav}>
              <li>
                <Link onClick={() => setIsMenuOpen(false)} href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsMenuOpen(false)} href="#">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsMenuOpen(false)} href="#">
                  Menu
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsMenuOpen(false)} href="#">
                  Reservation
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsMenuOpen(false)} href="#">
                  Gallery
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsMenuOpen(false)} href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsMenuOpen(false)} href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <ul className={clSocial}>
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
