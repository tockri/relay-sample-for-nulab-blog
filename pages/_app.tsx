import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const NoSsr = dynamic(() => import('../src/components/NoSsr'), {
    ssr: false,
  })

  return (
    <NoSsr>
      <Component {...pageProps} />
    </NoSsr>
  )
}

export default MyApp
