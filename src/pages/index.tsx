import React from 'react'
import App from '@/components/App'
import { StButton } from '@/components/StButton'
import { ButtonPrimary } from '@/components/atom/buttons/ButtonPrimary'
import Link from '@/components/atom/Link'

export default function Home(): JSX.Element {
  return (
    <App>
      <StButton>Hello World!!!</StButton>
      <Link href='/post/[postId]' as='/post/test'>
        <ButtonPrimary>test</ButtonPrimary>
      </Link>
    </App>
  )
}
