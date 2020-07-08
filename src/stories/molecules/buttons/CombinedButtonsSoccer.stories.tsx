import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { CombinedButtonsSoccer } from '@/components/molecules'

storiesOf(`molecules/buttons/CombinedButtonsSoccer`, module)
  .add(`True`, () => <CombinedButtonsSoccer path='/clubs' />)
  .add(`False`, () => <CombinedButtonsSoccer path='/' />)
