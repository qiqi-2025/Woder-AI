export interface Product {
  _id: string
  title: string
  description: string
  image?: {
    asset: {
      url: string
    }
  }
  order: number
  modalTitle?: string
  modalBody?: string
  images?: string[]
}

export interface Honor {
  _id: string
  title: string
  description: string
  image?: {
    asset: {
      url: string
    }
  }
  images?: string[]
}

export interface About {
  _id: string
  content: string
}

export interface Hero {
  _id: string
  title: string
  subtitle: string
  manifesto: string
}
