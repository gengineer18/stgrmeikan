import React from 'react'
import Link from '@/components/utils/Link'

type IHeader = {
  pathname?: string
}

export const Header: React.FCX<IHeader> = ({ pathname }) => (
  <header>
    <Link href='/' color='secondary'>
      <a className={pathname === `/` ? `is-active` : ``}>Home</a>
    </Link>
    {` `}
    <Link href='/about' color='secondary'>
      <a className={pathname === `/about` ? `is-active` : ``}>About</a>
    </Link>
  </header>
)
