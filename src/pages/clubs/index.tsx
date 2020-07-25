import React from 'react'
import App from '@/components/App'
import { Avatar, Collapse, List } from 'antd'
import Link from '@/components/atom/Link'
import clubs from '@/assets/json/AllClubs.json'
import { ClubData } from '@/types/json'

const { Panel } = Collapse

export default function Clubs({ data }: { data: ClubData }): JSX.Element {
  return (
    <App>
      <Collapse ghost>
        {data.clubData.map((element) => (
          <Panel header={element.areaJp} key={element.id}>
            <List
              itemLayout='horizontal'
              dataSource={element.list}
              renderItem={(item) => (
                <Link href='/clubs/[clubid]' as={`/clubs/${item.clubId}`}>
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <Avatar shape='square' src={`/static/images/clubs/${item.clubId}.png`}>
                          {item.clubId}
                        </Avatar>
                      }
                      title={item.name}
                    />
                  </List.Item>
                </Link>
              )}
            />
          </Panel>
        ))}
      </Collapse>
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
