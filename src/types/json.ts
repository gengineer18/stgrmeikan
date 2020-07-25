export type ClubData = {
  clubData: Area[]
}

export type Area = {
  id: number
  areaEn: string
  areaJp: string
  list: Club[]
}

export type Club = {
  id: number
  clubId: string
  name: string
  color1: string
  color2?: string
  color3?: string
}
