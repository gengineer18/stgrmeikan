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
import { baseInnerWidth } from '@/styles/common'

const styleBNaviWrapper = css({
  position: `fixed`,
  left: `0px`,
  bottom: `0px`,
  width: `100%`,
  padding: `8px 0`,
  zIndex: 100,
  backgroundColor: `${colorPrimaryMain}`,
})

export const BNavigation: React.FCX = () => {
  const router = useRouter()
  return (
    <footer css={styleBNaviWrapper}>
      <nav css={baseInnerWidth}>
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
    </footer>
  )
}
