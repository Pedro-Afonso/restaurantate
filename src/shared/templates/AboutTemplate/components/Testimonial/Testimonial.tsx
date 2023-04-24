import { HeadingSection } from '@/shared/components'
import styles from './Testimonial.module.scss'
import Image from 'next/image'

const CARDS = [
  {
    index: 0,
    name: 'Daniyal Sppra',
    role: 'Designer',
    image: '/about-use/testimonial-section/1.jpg',
    testimonial:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking  further overall value proposition organicallfriendly.'
  }
]

export const Testimonial = () => {
  // const [cardIndex, setCardIndex] = useState(0)

  // const handleLeftArrow = () => {
  //   setCardIndex(prev => prev - 1)
  // }

  // const handleRightArrow = () => {
  //   setCardIndex(prev => prev + 1)
  // }

  const cards = CARDS.map(card => (
    <div key={card.index} className={styles.card}>
      <div className={styles.testimonial}>
        <p>{card.testimonial}</p>
      </div>
      <div className={styles.info}>
        <Image src={card.image} alt={card.name} width={114} height={114} />
        <p>{card.name}</p>
        <p>{card.role}</p>
      </div>
    </div>
  ))

  return (
    <section className={styles.section}>
      <HeadingSection
        title="What Our Clients Say"
        miniLabel="Testimonial"
        description=""
        darkBg
      />
      <img src="/icons/apt.svg" alt="" />
      <div className={styles.carousel}>
        {/* <button onClick={handleLeftArrow}>Left</button> */}
        <div className={styles.cards}>{cards}</div>
        {/* <button onClick={handleRightArrow}>Right</button> */}
      </div>
    </section>
  )
}
