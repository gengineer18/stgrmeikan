import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles'
import { ThemeProvider as StyledThemeProvider } from 'emotion-theming'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '@/styles/theme'

export default function MyApp(props: AppProps): JSX.Element {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector(`#jss-server-side`)
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </>
  )
}
