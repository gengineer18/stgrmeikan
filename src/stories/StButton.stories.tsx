import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { StButton } from '../components/StButton'

storiesOf(`Button`, module).add(`with text`, () => <StButton>Hello</StButton>)
