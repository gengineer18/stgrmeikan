import styled, { CreateStyled } from '@emotion/styled'
import { Palette } from './palette'

interface MyTheme {
  palette: Palette
  spacing: (arg1: number, arg2?: number, arg3?: number, arg4?: number) => string
}
export const myStyled: CreateStyled<MyTheme> = styled
