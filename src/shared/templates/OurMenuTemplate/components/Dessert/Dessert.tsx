import Image from 'next/image'

import { Dishes } from '@/shared/components'

import styles from './Dessert.module.scss'

const dishes = {
  title: 'Dessert',
  dishes: [
    {
      id: '9',
      name: 'Apple Pie with Cream',
      description: 'Candied Jerusalem artichokes, truffle',
      price: '$40',
      url: '/home/menu-section/dessert-1.png'
    },
    {
      id: '10',
      name: 'Lemon Meringue Pie',
      description: 'Candied Jerusalem artichokes, truffle',
      price: '$20',
      url: '/home/menu-section/dessert-2.png'
    },
    {
      id: '11',
      name: 'Tender Octopus and Fennel',
      description: 'Candied Jerusalem artichokes, truffle',
      price: '$50',
      url: '/home/menu-section/dessert-3.jpg'
    },
    {
      id: '12',
      name: 'Sea Bass Cevich',
      description: 'Candied Jerusalem artichokes, truffle',
      price: '$35',
      url: '/home/menu-section/dessert-4.jpg'
    }
  ]
}

export const Dessert = () => {
  return (
    <section className={styles.section}>
      <div>
        <Image
          className={styles.image}
          src="/our-menu/3.jpg"
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
  )
}
