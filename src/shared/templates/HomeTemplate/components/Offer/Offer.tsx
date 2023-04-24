import styles from './Offer.module.scss'

export const Offer = () => {
  return (
    <section>
      <p className="mini-label">Offer</p>
      <h3 className="h4">Our special Offer dishes</h3>
      <p>
        Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using &apos;Content here, content making.
      </p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div>
            <div>
              <span>Only</span>
              <span>$10</span>
            </div>
            <p>50% Offer Going</p>
            <h4>Chicken Burger</h4>
            <p>Lorem Ipsum is that it has a more-or-less normal</p>
          </div>
          {/* <Image
            src="/home/offer-section/1.jpg"
            width={330}
            height={240}
            alt=""
          /> */}
        </div>
        <div className={styles.card}>
          <div>
            <div>
              <span>Only</span>
              <span>$10</span>
            </div>
            <p>50% Offer Going</p>
            <h4>Chicken Burger</h4>
            <p>Lorem Ipsum is that it has a more-or-less normal</p>
          </div>
          {/* <Image
            src="/home/offer-section/1.jpg"
            width={330}
            height={240}
            alt=""
          /> */}
        </div>
      </div>
    </section>
  )
}
