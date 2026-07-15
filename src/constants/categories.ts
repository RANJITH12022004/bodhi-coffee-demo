import type { CafeCategory } from '@/types/menu'

export interface CategoryTile {
  id: CafeCategory
  title: string
  subtitle: string
  image: string
}

/** Category hero images — local assets in /public/menu/categories/ */
export const CATEGORY_TILES: CategoryTile[] = [
  {
    id: 'classics',
    title: 'Coffee Classics',
    subtitle: 'Espresso, latte & pour-over staples',
    image: '/menu/categories/classics.jpg',
  },
  {
    id: 'signatures',
    title: 'Bodhi Signatures',
    subtitle: 'House favourites & creative pours',
    image: '/menu/categories/signatures.jpg',
  },
  {
    id: 'chilled',
    title: 'Chilled Coffee',
    subtitle: 'Iced, tonic & sparkling coffee',
    image: '/menu/categories/chilled.jpg',
  },
  {
    id: 'blended',
    title: 'Blended Favourites',
    subtitle: 'Cold coffee & whipped frappes',
    image: '/menu/categories/blended.jpg',
  },
  {
    id: 'frappes',
    title: 'Frappes',
    subtitle: 'Oreo, Biscoff & pistachio specials',
    image: '/menu/categories/frappes.jpg',
  },
  {
    id: 'slow_brew',
    title: 'Slow Brew',
    subtitle: 'Pour over, AeroPress & cold brew tower',
    image: '/menu/categories/slow-brew.jpg',
  },
  {
    id: 'matcha',
    title: 'Matcha Creations',
    subtitle: 'Ceremonial matcha & seasonal layers',
    image: '/menu/categories/matcha.jpg',
  },
  {
    id: 'refreshers',
    title: 'Refreshers & Mojito',
    subtitle: 'Iced teas & sparkling mocktails',
    image: '/menu/categories/refreshers.jpg',
  },
  {
    id: 'dessert_drinks',
    title: 'Dessert Drinks & Tea',
    subtitle: 'Hot chocolate, affogato & calm teas',
    image: '/menu/categories/dessert-drinks.jpg',
  },
  {
    id: 'food',
    title: 'Food',
    subtitle: 'Fries, toast, tacos & salads',
    image: '/menu/categories/food.jpg',
  },
]

export function categoryTile(id: CafeCategory): CategoryTile | undefined {
  return CATEGORY_TILES.find((tile) => tile.id === id)
}
