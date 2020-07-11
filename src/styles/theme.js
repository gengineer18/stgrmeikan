import { createMuiTheme } from '@material-ui/core'
import { colorPrimaryMain, colorSecondaryMain } from './variable'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${colorPrimaryMain}`,
    },
    secondary: {
      main: `${colorSecondaryMain}`,
    },
    text: {
      primary: `#212121`,
      secondary: `#757575`,
    },
  },
  spacing: 4,
  typography: {
    htmlFontSize: 14,
    subtitle1: {
      fontSize: 18,
    },
  },
})

export default theme
