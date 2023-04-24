import Image from 'next/image'
import Link from 'next/link'
import styles from './Menu.module.scss'
import { Dishes } from '@/shared/components'

const starters = {
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

const main = {
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

const dessert = {
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
    }
  ]
}

export const Menu = () => {
  return (
    <section className={styles.section}>
      <div>
        <div className={styles['special-offers']}>
          <p className="mini-label">MENU</p>
          <h3 className="h4">Try Our Special Offers</h3>
          <p>
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content making it look
            like readable English.
          </p>
          <Image
            priority={true}
            src="/home/menu-section/special.jpg"
            width={398}
            height={548}
            alt=""
          />
          <Link href="#" className={'btn btn-outline ' + styles.link}>
            See all dishes
          </Link>
        </div>
        <div className={styles.menu}>
          {/* start - Starter */}
          <Dishes title={starters.title} dishes={starters.dishes} />
          {/* end - Starter */}

          {/* start - Main Dish */}
          <Dishes title={main.title} dishes={main.dishes} />
          {/* end - Main Dish */}

          {/* start - Dessert */}
          <Dishes title={dessert.title} dishes={dessert.dishes} />
          {/* end - Dessert */}
        </div>
      </div>
    </section>
  )
}
