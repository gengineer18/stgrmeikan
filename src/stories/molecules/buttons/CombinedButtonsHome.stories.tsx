import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { CombinedButtonsHome } from '@/components/molecules'

storiesOf(`molecules/buttons/CombinedButtonsHome`, module)
  .add(`True`, () => <CombinedButtonsHome path='/' />)
  .add(`False`, () => <CombinedButtonsHome path='/post' />)
