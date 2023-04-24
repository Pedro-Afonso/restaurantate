import Image from 'next/image'

import { Dishes } from '@/shared/components'

import styles from './MainDishes.module.scss'

const dishes = {
  title: 'Main Dish',
  dishes: [
    {
      id: '5',
      name: 'Grilled Salmon with Dil Sauce',
      description: 'Candied Jerusalem artichokes, truffle',
      price: '$40',
      url: '/home/menu-section/main-1.png'
    },
    {
      id: '6',
      name: 'Roast Beef with Vegetable',
      description: 'Candied Jerusalem artichokes, truffle',
      price: '$20',
      url: '/home/menu-section/main-2.png'
    },
    {
      id: '7',
      name: 'Marrkesh Vegetetarian Curruy',
      description: 'Candied Jerusalem artichokes, truffle',
      price: '$25',
      url: '/home/menu-section/main-3.png'
    },
    {
      id: '8',
      name: 'Spicy Vegan Potato Curry',
      description: 'Candied Jerusalem artichokes, truffle',
      price: '$30',
      url: '/home/menu-section/main-4.png'
    }
  ]
}

export const MainDishes = () => {
  return (
    <>
      <section className={styles.section}>
        <div>
          <Image
            className={styles.image}
            src="/our-menu/2.jpg"
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
        <Image src="/our-menu/bg-2.jpg" fill alt="" />
      </div>
    </>
  )
}
