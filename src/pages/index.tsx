import React from 'react'
import App from '@/components/App'
import { StButton } from '@/components/StButton'
import { ButtonCircleAddIcon } from '@/components/atoms/buttons/ButtonCircleAddIcon'
import { ButtonPrimary } from '@/components/atoms/buttons/ButtonPrimary'
import Link from '@/components/utils/Link'

export default function Home(): JSX.Element {
  return (
    <App>
      <StButton>Hello World!!!</StButton>
      <ButtonCircleAddIcon />
      <Link href='/post/[postId]' as='/post/test'>
        <ButtonPrimary>test</ButtonPrimary>
      </Link>
    </App>
  )
}
