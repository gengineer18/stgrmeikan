export interface Palette {
  primary: PaletteColors
  secondary: PaletteColors
  error: PaletteColors
  warning: PaletteColors
  info: PaletteColors
  success: PaletteColors
  text: PaletteTypography
  action: PaletteButton
  background: PaletteBackground
  divider: string
}

interface PaletteColors {
  main: string
  dark: string
  light: string
}

interface PaletteTypography {
  primary: string
  secondary: string
  disabled: string
}

interface PaletteButton {
  active: string
  hover: string
  selected: string
  disabled: string
  disabledBackground: string
}

interface PaletteBackground {
  default: string
  paper: string
}
