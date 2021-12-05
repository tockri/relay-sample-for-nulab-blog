import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import React from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { RelayEnvironmentProvider } from 'react-relay'
import { RecoilRoot } from 'recoil'
import { RelayEnvironment } from '../src/relay/RelayEnvironment'
import '../styles/globals.css'

const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  console.warn({ error })
  return (
    <div>
      error: {JSON.stringify(error)}
      <button onClick={() => resetErrorBoundary()}>reset</button>
    </div>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const NoSsr = dynamic(() => import('../src/components/NoSsr'), {
    ssr: false,
  })

  return (
    <NoSsr>
      <RecoilRoot>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Component {...pageProps} />
          </RelayEnvironmentProvider>
        </ErrorBoundary>
      </RecoilRoot>
    </NoSsr>
  )
}

export default MyApp
