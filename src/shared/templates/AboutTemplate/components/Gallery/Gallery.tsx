import { HeadingSection } from '@/shared/components'
import styles from './Gallery.module.scss'
import Image from 'next/image'

export const Gallery = () => {
  return (
    <section className={styles.section}>
      <div>
        <HeadingSection
          title="Gallery"
          miniLabel="What We Make"
          description=""
        />
        <div className={styles.grid}>
          <div>
            <Image src="/about-us/gallery-section/1.jpg" fill alt="" />
          </div>
          <div>
            <Image src="/about-us/gallery-section/2.jpg" fill alt="" />
          </div>
          <div>
            <Image src="/about-us/gallery-section/3.jpg" fill alt="" />
          </div>
          <div>
            <Image src="/about-us/gallery-section/4.jpg" fill alt="" />
          </div>
          <div>
            <Image src="/about-us/gallery-section/5.jpg" fill alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
