import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { CombinedButtonsAccount } from '@/components/presentational'

storiesOf(`molecules/buttons/CombinedButtonsAccount`, module)
  .add(`True`, () => <CombinedButtonsAccount path='/account' />)
  .add(`False`, () => <CombinedButtonsAccount path='/' />)
