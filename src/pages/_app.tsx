import type { AppProps } from 'next/app'

import { Footer, Navbar } from '@/shared/components'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
