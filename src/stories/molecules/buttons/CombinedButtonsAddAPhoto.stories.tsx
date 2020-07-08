import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { CombinedButtonsAddAPhoto } from '@/components/molecules'

storiesOf(`molecules/buttons/CombinedButtonsAddAPhoto`, module)
  .add(`True`, () => <CombinedButtonsAddAPhoto path='/post' />)
  .add(`False`, () => <CombinedButtonsAddAPhoto path='/' />)
