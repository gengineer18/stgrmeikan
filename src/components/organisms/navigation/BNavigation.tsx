import React from 'react'
import { css } from '@emotion/core'
import { useRouter } from 'next/router'
import Link from 'next/link'

// icons
import {
  CombinedButtonsAccount,
  CombinedButtonsAddAPhoto,
  CombinedButtonsHome,
  CombinedButtonsSoccer,
} from '@/components/molecules'

// styles
import { colorPrimaryMain } from '@/styles/variable'

const styleBNaviWrapper = css({
  position: `fixed`,
  left: `0px`,
  bottom: `0px`,
  width: `100%`,
  padding: `8px 0`,
  zIndex: 100,
  backgroundColor: `${colorPrimaryMain}`,
})

const styleBNaviInner = css({
  maxWidth: `800px`,
  margin: `auto`,
})

export const BNavigation: React.FCX = () => {
  const router = useRouter()
  return (
    <div css={styleBNaviWrapper}>
      <nav css={styleBNaviInner}>
        <Link href='/'>
          <a>
            <CombinedButtonsHome path={router.pathname} />
          </a>
        </Link>
        <Link href='/post'>
          <a>
            <CombinedButtonsAddAPhoto path={router.pathname} />
          </a>
        </Link>
        <Link href='/clubs'>
          <a>
            <CombinedButtonsSoccer path={router.pathname} />
          </a>
        </Link>
        <Link href='/mypage'>
          <a>
            <CombinedButtonsAccount path={router.pathname} />
          </a>
        </Link>
      </nav>
    </div>
  )
}
