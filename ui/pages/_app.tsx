import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import createEmotionCache from '../utils/createEmotionCache'
import Footer from 'components/footer'
import { ThemeProvider, WhichThemeProvider } from 'providers'
import 'assets/fonts/style.css'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 10, // 10m
    },
  },
})

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
          <link rel='icon' href='favicon.png' />
          <link rel='dns-prefetch' href='//fonts.googleapis.com'></link>
          <link rel='dns-prefetch' href='//www.google.com'></link>
        </Head>
        <WhichThemeProvider>
          <ThemeProvider>
            <Component {...pageProps} />
            <Footer />
          </ThemeProvider>
        </WhichThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  )
}
