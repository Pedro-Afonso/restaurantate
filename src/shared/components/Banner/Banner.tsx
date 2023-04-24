import { FC } from 'react'
import styles from './Banner.module.scss'

interface IBannerProps {
  title: string
}

export const Banner: FC<IBannerProps> = ({ title }) => {
  return (
    <div className={styles.banner}>
      <h2>{title}</h2>
    </div>
  )
}
