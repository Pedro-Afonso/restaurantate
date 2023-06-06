import Image from 'next/image'
import { useEffect, useState } from 'react'
import clx from 'classnames'

import { HeadingSection } from '@/shared/components'

import styles from './Testimonial.module.scss'

const CARDS = [
  {
    index: 0,
    name: 'Daniyal Sppra',
    role: 'Designer',
    image: '/about-us/testimonial-section/1.jpg',
    testimonial:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking  further overall value proposition organicallfriendly.'
  },
  {
    index: 1,
    name: 'Natasha D',
    role: 'Dev',
    image: '/about-us/testimonial-section/2.jpg',
    testimonial:
      '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quod perspiciatis et repellendus unde fugit consequuntur officiis voluptatum illum a error, explicabo maxime aliquid sunt rerum, assumenda culpa, perferendis iste?'
  }
]

export const Testimonial = () => {
  const [cardIndex, setCardIndex] = useState(0)

  const activeCard = (index: number) =>
    clx(styles.card, {
      [styles.active]: index === cardIndex
    })

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cardIndex < CARDS.length - 1) {
        setCardIndex(prev => prev + 1)
      } else {
        setCardIndex(0)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [cardIndex])

  const handleLeftArrow = () => {
    if (cardIndex < CARDS.length - 1) {
      setCardIndex(CARDS.length - 1)
    } else {
      setCardIndex(prev => prev - 1)
    }
  }

  const handleRightArrow = () => {
    if (cardIndex < CARDS.length - 1) {
      setCardIndex(prev => prev + 1)
    } else {
      setCardIndex(0)
    }
  }

  const cards = CARDS.map(card => (
    <div key={card.index} className={activeCard(card.index)}>
      <div className={styles.testimonial}>
        <div>
          <button className={styles.leftArrow} onClick={handleLeftArrow}>
            <img src="/icons/arrow.svg" alt="" />
          </button>
          <p>{card.testimonial}</p>
          <button className={styles.rightArrow} onClick={handleRightArrow}>
            <img src="/icons/arrow.svg" alt="" />
          </button>
        </div>
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
      <img className={styles.apt} src="/icons/apt.svg" alt="" />
      <div className={styles.carousel}>
        <div className={styles.cards}>{cards}</div>
      </div>
    </section>
  )
}
