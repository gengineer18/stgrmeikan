import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider as MaterialThemeProvider, StylesProvider } from '@material-ui/styles'
import { ThemeProvider as StyledThemeProvider } from 'emotion-theming'
import theme from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <Component {...pageProps} />
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  )
}
