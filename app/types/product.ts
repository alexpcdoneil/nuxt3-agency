export interface IProduct {
  id: number
  description: string
  price: number
  images: string[]
  status: keyof typeof ProductStatus
  watched: number
  created: string
}

export enum ProductStatus {
  promote = "promote",
  promoted = "promoted",
  hidden = "hidden",
}
