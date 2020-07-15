import React from 'react'
import App from '@/components/App'
import { Typography } from '@material-ui/core'
import { myStyled } from '@/types/themes'

const StyleP = myStyled.p`
  font-size: 20px;
  color: ${(props) => props.theme.palette.primary.main};
  margin-top: ${(props) => props.theme.spacing(32)}px;
`

export default function About(): JSX.Element {
  return (
    <App>
      <StyleP>About Page by TypeScript!</StyleP>
      <Typography variant='subtitle1'>test</Typography>
    </App>
  )
}
