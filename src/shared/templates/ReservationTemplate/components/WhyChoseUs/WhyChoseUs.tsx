import Image from 'next/image'
import styles from './WhyChoseUs.module.scss'
import { HeadingSection } from '@/shared/components'

export const WhyChoseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.image}>
          <Image src="/reservation/why-chose-us-section/bg-1.jpg" alt="" fill />
        </div>
        <div>
          <HeadingSection
            className={styles.heading}
            title="Why We Are The Best?"
            miniLabel="Why Choose Us"
            description="Bring the table winwin survival strateges ensure proactive  the domination the end of the day going forward new normal that
has evolved froms generation on the runway heading  towards streamlined cloud solution generated content in real times will have multiple touchpoints."
          />
          <div className={styles.items}>
            <div>
              <img src="/icons/slice-pizza.svg" alt="" />
              <p>Fresh Food</p>
            </div>
            <div>
              <img src="/icons/truck.svg" alt="" />
              <p>Fast Delivery</p>
            </div>
            <div>
              <img src="/icons/mark.svg" alt="" />
              <p>Qualty Maintain</p>
            </div>
            <div>
              <img src="/icons/clock.svg" alt="" />
              <p>24/7 Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
