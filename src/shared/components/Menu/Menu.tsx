import Image from 'next/image'
import Link from 'next/link'
import styles from './Menu.module.scss'

export const Menu = () => {
  return (
    <section className={styles.section}>
      <div>
        <div className={styles['special-offers']}>
          <p className="mini-label">MENU</p>
          <h3 className="h4">Try Our Special Offers</h3>
          <p>
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content making it look
            like readable English.
          </p>
          <Image
            priority={true}
            src="/home/menu-section/special.jpg"
            width={398}
            height={548}
            alt=""
          />
          <Link href="#" className={'btn btn-outline ' + styles.link}>
            See all dishes
          </Link>
        </div>
        <div className={styles.menu}>
          {/* start - Starter */}
          <div>
            <h3 className="h4">Starters</h3>
            <ul>
              <li>
                <Image
                  src="/home/menu-section/starters-1.png"
                  width={84}
                  height={84}
                  alt=""
                />
                <div>
                  <p className="h5">Raw Scallops from Erquy</p>
                  <div>
                    <p>Candied Jerusalem artichokes, truffle</p>
                    <span className={styles.dots}></span>
                    <p>$40</p>
                  </div>
                </div>
              </li>
              <li>
                <Image
                  src="/home/menu-section/starters-2.png"
                  width={84}
                  height={84}
                  alt=""
                />
                <div>
                  <p className="h5">Spring Roll</p>
                  <div>
                    <p>Candied Jerusalem artichokes, truffle</p>
                    <span className={styles.dots}></span>
                    <p>$20</p>
                  </div>
                </div>
              </li>
              <li>
                <Image
                  src="/home/menu-section/starters-3.png"
                  width={84}
                  height={84}
                  alt=""
                />
                <div>
                  <p className="h5">French Onion Soup</p>
                  <div>
                    <p>Candied Jerusalem artichokes, truffle</p>
                    <span className={styles.dots}></span>
                    <p>$25</p>
                  </div>
                </div>
              </li>
              <li>
                <Image
                  src="/home/menu-section/starters-4.png"
                  width={84}
                  height={84}
                  alt=""
                />
                <div>
                  <p className="h5">Tomato Bruschetta</p>
                  <div>
                    <p>Candied Jerusalem artichokes, truffle</p>
                    <span className={styles.dots}></span>
                    <p>$30</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* end - Starter */}

          {/* start - Main Dish */}
          <div>
            <h3 className="h4">Main Dish</h3>
            <ul>
              <li>
                <Image
                  src="/home/menu-section/main-1.png"
                  width={84}
                  height={84}
                  alt=""
                />
                <div>
                  <p className="h5">Grilled Salmon with Dil Sauce</p>
                  <div>
                    <p>Candied Jerusalem artichokes, truffle</p>
                    <span className={styles.dots}></span>
                    <p>$40</p>
                  </div>
                </div>
              </li>
              <li>
                <Image
                  src="/home/menu-section/main-2.png"
                  width={84}
                  height={84}
                  alt=""
                />
                <div>
                  <p className="h5">Roast Beef with Vegetable</p>
                  <div>
                    <p>Candied Jerusalem artichokes, truffle</p>
                    <span className={styles.dots}></span>
                    <p>$20</p>
                  </div>
                </div>
              </li>
              <li>
                <Image
                  src="/home/menu-section/main-3.png"
                  width={84}
                  height={84}
                  alt=""
                />
                <div>
                  <p className="h5">Marrkesh Vegetetarian Curruy</p>
                  <div>
                    <p>Candied Jerusalem artichokes, truffle</p>
                    <span className={styles.dots}></span>
                    <p>$25</p>
                  </div>
                </div>
              </li>
              <li>
                <Image
                  src="/home/menu-section/main-4.png"
                  width={84}
                  height={84}
                  alt=""
                />
                <div>
                  <p className="h5">Spicy Vegan Potato Curry</p>
                  <div>
                    <p>Candied Jerusalem artichokes, truffle</p>
                    <span className={styles.dots}></span>
                    <p>$30</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* end - Main Dish */}

          {/* start - Dessert */}
          <div>
            <h3 className="h4">Dessert</h3>
            <ul>
              <li>
                <Image
                  src="/home/menu-section/dessert-1.png"
                  width={84}
                  height={84}
                  alt=""
                />
                <div>
                  <p className="h5">Apple Pie with Cream</p>
                  <div>
                    <p>Candied Jerusalem artichokes, truffle</p>
                    <span className={styles.dots}></span>
                    <p>$40</p>
                  </div>
                </div>
              </li>
              <li>
                <Image
                  src="/home/menu-section/dessert-2.png"
                  width={84}
                  height={84}
                  alt=""
                />
                <div>
                  <p className="h5">Lemon Meringue Pie</p>
                  <div>
                    <p>Candied Jerusalem artichokes, truffle</p>
                    <span className={styles.dots}></span>
                    <p>$20</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* end - Dessert */}
        </div>
      </div>
    </section>
  )
}
