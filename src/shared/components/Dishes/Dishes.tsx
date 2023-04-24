import Image from 'next/image'
import styles from './Dishes.module.scss'
import { FC } from 'react'

interface IDishesProps {
  title: string
  dishes: {
    id: string
    name: string
    description: string
    price: string
    url: string
  }[]
}

export const Dishes: FC<IDishesProps> = ({ title, dishes }) => {
  return (
    <div className={styles.menu}>
      <h3 className="h4">{title}</h3>
      <ul>
        {dishes.map(dish => (
          <li key={dish.id}>
            <Image src={dish.url} width={84} height={84} alt="" />
            <div>
              <p className="h5">{dish.name}</p>
              <div>
                <p>{dish.description}</p>
                <span className={styles.dots}></span>
                <p>{dish.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
