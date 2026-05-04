export type ModalBlock =
  | {
      type: 'paragraph'
      content: string
      emphasis?: boolean
    }
  | {
      type: 'list'
      title?: string
      items: string[]
    }

export interface SiteImage {
  src: string
  alt: string
}

export interface SiteModal {
  key: string
  title: string
  body: ModalBlock[]
  images?: SiteImage[]
  placeholder?: string
}

export interface ProductContent {
  id: string
  order: number
  no: string
  title: string
  shortTitle: string
  subtitle: string
  description: string
  modalKey: string
  cardColor: string
  modal: SiteModal
}

export interface HonorContent {
  id: string
  title: string
  summary: string
  modalKey: string
  modal: SiteModal
}

export interface CubeFaceContent {
  id: string
  title: string
  subtitle: string
  colorClass: string
  textColorClass?: string
  transform: string
  modalKey: string
}

export interface SiteContent {
  site: {
    name: string
    badge: string
    navNote: string
    footer: string
    officialAccountName: string
  }
  hero: {
    titleLines: string[]
    subtitle: string
    manifesto: string[]
    primaryButtonLabel: string
    secondaryButtonLabel: string
  }
  cubeFaces: CubeFaceContent[]
  products: ProductContent[]
  workshop: {
    title: string
    tags: string[]
  }
  about: {
    title: string
    paragraphs: string[]
    methodTitle: string
    methodItems: string[]
    methodNote: string
  }
  honors: HonorContent[]
  cta: {
    title: string
    description: string
    buttonLabel: string
    modalKey: string
  }
  modals: Record<string, SiteModal>
}
