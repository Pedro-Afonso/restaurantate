import { HeadingSection } from '@/shared/components'
import styles from './VisitUs.module.scss'
import Image from 'next/image'

export const VisitUs = () => {
  return (
    <section className={styles.section}>
      <div>
        <HeadingSection
          title="Come and visit our Branches"
          miniLabel="VISIT US!"
          description=""
        />
        <div className={styles.cards}>
          <div>
            <div>
              <h3 className="h4">Los Angeles, CA</h3>
              <p>Riverside 25, San Francisco California</p>
              <div>
                <img src="/icons/mail-colored.svg" alt="" />
                <p>contact@restaurantate.com</p>
              </div>
              <div>
                <img src="/icons/phone-colored.svg" alt="" />
                <p>(487) 870 - 1087</p>
              </div>
            </div>
            <div>
              <Image src="/contact/visit-us-section/1.jpg" fill alt="" />
            </div>
          </div>
          <div>
            <div>
              <h3 className="h4">San Francisco, CA</h3>
              <p>Riverside 25, San Francisco California</p>
              <div>
                <img src="/icons/mail-colored.svg" alt="" />
                <p>contact@restaurantate.com</p>
              </div>
              <div>
                <img src="/icons/phone-colored.svg" alt="" />
                <p>(487) 870 - 1087</p>
              </div>
            </div>
            <div>
              <Image src="/contact/visit-us-section/2.jpg" fill alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
