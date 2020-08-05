import clubs from '@/assets/json/AllClubs.json'

import { Area, Club } from '@/types/json'

interface ITreeData {
  title: string
  value: string
  children: {
    title: string
    value: string
  }[]
}

const createChildren = (area: Area) =>
  area.list.map((club: Club) => {
    const title: string = club.name
    const value: string = club.clubId
    return { title, value }
  })

export const treeData: ITreeData[] = clubs.clubData.map((area: Area) => {
  const title: string = area.areaJp
  const value: string = area.areaEn
  const children: { title: string; value: string }[] = createChildren(area)
  return { title, value, children }
})
