import { FC } from 'react'
import cls from 'classnames'
import styles from './HeadingSection.module.scss'

interface IHeadingSectionProps {
  title: string
  miniLabel: string
  description: string
  className?: string
  darkBg?: boolean
}

export const HeadingSection: FC<IHeadingSectionProps> = ({
  title,
  miniLabel,
  description,
  darkBg = false,
  className = ''
}) => {
  const heading = cls(className, styles.heading, {
    [styles['dark-bg']]: darkBg
  })

  return (
    <div className={heading}>
      <p className="mini-label">{miniLabel}</p>
      <h3 className="h4">{title}</h3>
      <p>{description}</p>
    </div>
  )
}
