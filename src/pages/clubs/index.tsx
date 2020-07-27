import React from 'react'
import App from '@/components/App'
import clubs from '@/assets/json/AllClubs.json'
import { ClubData } from '@/types/json'

import { ClubList } from '@/components/presentational'

export default function Clubs({ data }: { data: ClubData }): JSX.Element {
  return (
    <App>
      {data.clubData.map((area) => (
        <ClubList data={area} key={area.id} />
      ))}
    </App>
  )
}

export function getStaticProps(): { props: { data: ClubData } } {
  const data = clubs
  return {
    props: {
      data,
    },
  }
}
