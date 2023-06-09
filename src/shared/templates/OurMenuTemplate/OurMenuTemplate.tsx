import Head from 'next/head'

import { Banner, ReservationForm } from '@/shared/components'
import { Starters, MainDishes, Dessert } from './components'

export const OurMenuTemplate = () => {
  return (
    <>
      <Head>
        <title>Our Menu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner title="Our Menu" />
      <Starters />
      <MainDishes />
      <Dessert />
      <ReservationForm />
    </>
  )
}
