import { HeadingSection } from '@/shared/components'
import { BlogCard } from '../BlogCard'

import styles from './News.module.scss'

export const News = () => {
  return (
    <section className={styles.section}>
      <div>
        <HeadingSection
          title="Be First Who Read News"
          miniLabel="Blog"
          description="Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making."
        />
        <div className={styles.cards}>
          <BlogCard
            image="/blog/blog-section/1.jpg"
            subtitle="Restaurants"
            date="Feb 22, 2022"
            title="The Most Popular Delicious Food Of Mediterranean Cuisine"
            text="Capitalize on low-hanging fruit to identify a ballpark value
            added matrix economically and the creative activity to beta test
            override the food quality."
          />
          <BlogCard
            image="/blog/blog-section/2.jpg"
            subtitle="Restaurants"
            date="Feb 22, 2022"
            title="The Most Popular Delicious Food Of Mediterranean Cuisine"
            text="Capitalize on low-hanging fruit to identify a ballpark value
            added matrix economically and the creative activity to beta test
            override the food quality."
          />
          <BlogCard
            image="/blog/blog-section/3.jpg"
            subtitle="Restaurants"
            date="Feb 22, 2022"
            title="The Most Popular Delicious Food Of Mediterranean Cuisine"
            text="Capitalize on low-hanging fruit to identify a ballpark value
            added matrix economically and the creative activity to beta test
            override the food quality."
          />
          <BlogCard
            image="/blog/blog-section/4.jpg"
            subtitle="Restaurants"
            date="Feb 22, 2022"
            title="The Most Popular Delicious Food Of Mediterranean Cuisine"
            text="Capitalize on low-hanging fruit to identify a ballpark value
            added matrix economically and the creative activity to beta test
            override the food quality."
          />
        </div>
      </div>
    </section>
  )
}
