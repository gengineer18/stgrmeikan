import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { CombinedButtonsSoccer } from '@/components/presentational'

storiesOf(`molecules/buttons/CombinedButtonsSoccer`, module)
  .add(`True`, () => <CombinedButtonsSoccer path='/clubs' />)
  .add(`False`, () => <CombinedButtonsSoccer path='/' />)
