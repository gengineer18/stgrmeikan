import React from 'react'
import App from '@/components/App'
import { StButton } from '@/components/StButton'
import { ButtonCircleAddIcon } from '@/components/atoms/buttons/ButtonCircleAddIcon'
import { ButtonPrimary } from '@/components/atoms/buttons/ButtonPrimary'
import { BNavigation } from '@/components/organisms/navigation/BNavigation'

export default function Home(): JSX.Element {
  return (
    <App>
      <StButton>Hello World!!!</StButton>
      <ButtonCircleAddIcon />
      <ButtonPrimary>test</ButtonPrimary>
      <BNavigation />
    </App>
  )
}
