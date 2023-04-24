import { Dishes } from '@/shared/components'
import styles from './Starters.module.scss'
import Image from 'next/image'

const dishes = {
  title: 'Starters',
  dishes: [
    {
      id: '1',
      name: 'Raw Scallops from Erquy',
      description: 'Candied Jerusalem artichokes, truffle',
      price: '$40',
      url: '/home/menu-section/starters-1.png'
    },
    {
      id: '2',
      name: 'Spring Roll',
      description: 'Candied Jerusalem artichokes, truffle',
      price: '$20',
      url: '/home/menu-section/starters-2.png'
    },
    {
      id: '3',
      name: 'French Onion Soup',
      description: 'Candied Jerusalem artichokes, truffle',
      price: '$25',
      url: '/home/menu-section/starters-3.png'
    },
    {
      id: '4',
      name: 'Tomato Bruschetta',
      description: 'Candied Jerusalem artichokes, truffle',
      price: '$30',
      url: '/home/menu-section/starters-4.png'
    }
  ]
}

export const Starters = () => {
  return (
    <>
      <section className={styles.section}>
        <div>
          <Image
            className={styles.image}
            src="/our-menu/1.jpg"
            alt=""
            width={555}
            height={700}
          />
          <div>
            <Dishes title={dishes.title} dishes={dishes.dishes} />
            <button className="btn btn-outline">See all dishes</button>
          </div>
        </div>
      </section>
      <div className={styles.background}>
        <Image src="/our-menu/bg-1.jpg" fill alt="" />
      </div>
    </>
  )
}
