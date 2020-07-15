import React from 'react'
import { css } from '@emotion/core'
import { useRouter } from 'next/router'
import Link from '@/components/utils/Link'

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
          <CombinedButtonsHome path={router.pathname} />
        </Link>
        <Link href='/post'>
          <CombinedButtonsAddAPhoto path={router.pathname} />
        </Link>
        <Link href='/clubs'>
          <CombinedButtonsSoccer path={router.pathname} />
        </Link>
        <Link href='/mypage'>
          <CombinedButtonsAccount path={router.pathname} />
        </Link>
      </nav>
    </div>
  )
}
