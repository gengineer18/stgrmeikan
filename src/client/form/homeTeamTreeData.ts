import clubs from '@/assets/json/AllClubs.json'

export const treeData = clubs.clubData.map((area) => {
  const title = area.areaJp
  const value = area.areaEn
  const children = area.list.map((club) => {
    const title = club.name
    const value = club.clubId
    return { title, value }
  })
  return { title, value, children }
})
