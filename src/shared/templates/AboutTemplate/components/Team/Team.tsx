import Image from 'next/image'
import styles from './Team.module.scss'
import { HeadingSection } from '@/shared/components'

export const Team = () => {
  return (
    <section className={styles.section}>
      <HeadingSection
        title="Meet Our Professional Chefs"
        description=""
        miniLabel="team"
      />
      <div className={styles.cards}>
        <div>
          <div className={styles.image}>
            <Image src="/about-us/team-section/1.jpg" fill alt="" />
          </div>
          <h4 className="h5">Avroko</h4>
          <p>Master Chef</p>
        </div>
        <div>
          <div className={styles.image}>
            <Image src="/about-us/team-section/2.jpg" fill alt="" />
          </div>
          <h4 className="h5">Evan Mattew</h4>
          <p>Master Chef</p>
        </div>
        <div>
          <div className={styles.image}>
            <Image src="/about-us/team-section/3.jpg" fill alt="" />
          </div>
          <h4 className="h5">Diane Clarkson</h4>
          <p>Master Chef</p>
        </div>
        <div>
          <div className={styles.image}>
            <Image src="/about-us/team-section/4.jpg" fill alt="" />
          </div>
          <h4 className="h5">Dan Rafalin</h4>
          <p>Assistant Chef</p>
        </div>
      </div>
    </section>
  )
}
