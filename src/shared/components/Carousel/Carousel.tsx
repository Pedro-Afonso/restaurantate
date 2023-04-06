/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from 'next/image'
import styles from './Carousel.module.scss'

export const Carousel = () => {
  return (
    <section className={styles.section}>
      <div>
        <p className="mini-label mini-label-white">Testimonial</p>
        <h3 className="h4">What our clients say</h3>
        <p>
          We love to hear from customers, so please leave a comment or say hello
          in an email.
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div>
              <Image
                src="home/clients/Image01.svg"
                width={114}
                height={113}
                alt=""
              />
              <div>
                <p>Daniyal Sppra</p>
                <p>Newyork</p>
              </div>
            </div>
            <div>
              <p>
                &quot;It is professional, considers everyone&apos;s time, can
                think about the There are many variations of passages whole
                probls small niche, friendly.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <Image
                src="home/clients/Image02.svg"
                width={114}
                height={113}
                alt=""
              />
              <div>
                <p>Daniyal Sppra</p>
                <p>Newyork</p>
              </div>
            </div>
            <div>
              <p>
                &quot;It is professional, considers everyone&apos;s time, can
                think about the There are many variations of passages whole
                probls small niche, friendly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
