import React from 'react'
import Layout from '@/layout/default'
import { StButton } from '@/components/StButton'
import { ButtonCircleAddIcon } from '@/components/atoms/buttons/ButtonCircleAddIcon'
import { ButtonPrimary } from '@/components/atoms/buttons/ButtonPrimary'

export default function Home(): JSX.Element {
  return (
    <Layout>
      <StButton>Hello World!!!</StButton>
      <ButtonCircleAddIcon />
      <ButtonPrimary>test</ButtonPrimary>
    </Layout>
  )
}
