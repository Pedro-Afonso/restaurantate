import Image from 'next/image'
import styles from './TheStory.module.scss'

export const TheStory = () => {
  return (
    <section className={styles.section}>
      <div className={styles.icons}>
        <div>
          <Image src="icons/LocationIcon.svg" width={52} height={52} alt="" />
          <div>
            <p className="h5">Locate Us</p>
            <p>Riverside 25, San Francisco, California</p>
          </div>
        </div>
        <div>
          <Image src="icons/OpenIcon.svg" width={52} height={52} alt="" />
          <div>
            <p className="h5">Open Hours</p>
            <p>Mon To Fri 9:00 AM - 9:00 PM</p>
          </div>
        </div>
        <div>
          <Image src="icons/ReserveIcon.svg" width={52} height={52} alt="" />
          <div>
            <p className="h5">Reservation</p>
            <p>hirestaurantate@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        <Image
          priority={true}
          src="/home/story-section/bg-1.jpg"
          width={640}
          height={446}
          alt=""
        />
        <article className={styles.story}>
          <div>
            <h3 className="h4">The Story</h3>
            <p>
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using &apos;Content here, content
              gfshere&apos;, makinlook like readable English. Many desktop
              publishing packages.
            </p>
          </div>
          <div>
            <h4>1996</h4>
            <p>Lorem Ipsum is that it has a more-or-less normal distribution</p>
          </div>
          <div>
            <h4>2021</h4>
            <p>
              Lorem Ipsum is that it has a more-or-less normal Content content
            </p>
          </div>
          <div>
            <p>JOSEFINE</p>
            <Image
              src="icons/Josefine.svg"
              alt="Josefine"
              width={167}
              height={92}
            />
          </div>
        </article>
      </div>
    </section>
  )
}
