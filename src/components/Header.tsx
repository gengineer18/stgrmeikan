import React from 'react';
import Link from 'next/link';

type IHeader = {
  pathname?: string;
};

export const Header: React.FCX<IHeader> = ({ pathname }) => (
  <header>
    <Link href='/'>
      <a className={pathname === `/` ? `is-active` : ``}>Home</a>
    </Link>
    {` `}
    <Link href='/about'>
      <a className={pathname === `/about` ? `is-active` : ``}>About</a>
    </Link>
  </header>
);
