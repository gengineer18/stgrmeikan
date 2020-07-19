import React from 'react'
import { Typography } from '@material-ui/core'
import App from '@/components/App'
import { myStyled } from '@/types/themes'

const StyleP = myStyled.p`
  font-size: 20px;
  color: ${(props) => props.theme.palette.primary.main};
  margin-top: ${(props) => props.theme.spacing(32)}px;
`

export default function Complete(): JSX.Element {
  return (
    <App>
      <StyleP>Complete Page by TypeScript!</StyleP>
      <Typography variant='subtitle1'>test</Typography>
    </App>
  )
}
