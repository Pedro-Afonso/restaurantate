import Image from 'next/image'
import { FC } from 'react'

import styles from './BlogCard.module.scss'

interface IBlogCardProps {
  image: string
  title: string
  text: string
  subtitle: string
  date: string
}

export const BlogCard: FC<IBlogCardProps> = ({
  image,
  title,
  text,
  subtitle,
  date
}) => {
  return (
    <div className={styles.card}>
      <Image src={image} width={661} height={391} alt="" />
      <div>
        <p className="mini-label">{subtitle}</p>
        <p className="mini-label">{date}</p>
        <h4 className="h5">{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}
