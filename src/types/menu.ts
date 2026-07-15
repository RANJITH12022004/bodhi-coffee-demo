import type { MenuCategory } from '@/types/analytics'

/** Cafe menu section slugs stored in menu_items.cuisine */
export type CafeCategory =
  | 'classics'
  | 'signatures'
  | 'chilled'
  | 'blended'
  | 'frappes'
  | 'slow_brew'
  | 'matcha'
  | 'refreshers'
  | 'dessert_drinks'
  | 'food'
  | 'addons'

export interface MenuItemRow {
  id: string
  name: string
  description: string | null
  price: number
  category: MenuCategory
  cuisine: CafeCategory
  image_url: string | null
  is_veg: boolean
  is_bestseller: boolean
}

export type MenuFilter = 'all' | 'bestsellers' | 'veg'
