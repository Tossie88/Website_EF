export type Category = 'milcheis' | 'fruchteis' | 'gelato' | 'sonderprodukte'

export interface Product {
  id: string
  name: string
  category: Category
  description: string
  sizes: string[]
  tags?: string[]
  featured?: boolean
}

export interface NavItem {
  label: string
  href: string
}
