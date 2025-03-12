export interface IProduct {
  id: number
  name: string
  price: number
  image: string
  status: keyof typeof ProductStatus
}

export enum ProductStatus {
  promote = "promote",
  promoted = "promoted",
  hidden = "hidden",
}
