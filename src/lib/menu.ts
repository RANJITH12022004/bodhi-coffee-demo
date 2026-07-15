import { supabase } from '@/lib/supabase'
import { classifySupabaseError, DataFetchError } from '@/lib/supabaseErrors'
import type { CafeCategory, MenuItemRow } from '@/types/menu'

const MENU_TABLE = 'bodhi_menu_items'

function mapMenuRow(row: Record<string, unknown>): MenuItemRow {
  return {
    id: row.id as string,
    name: row.name as string,
    description: row.description as string | null,
    price: Number(row.price),
    category: row.category as MenuItemRow['category'],
    cuisine: row.cuisine as CafeCategory,
    image_url: row.image_url as string | null,
    is_veg: Boolean(row.is_veg),
    is_bestseller: Boolean(row.is_bestseller),
  }
}

export async function fetchAllMenu(): Promise<MenuItemRow[]> {
  try {
    const { data, error } = await supabase
      .from(MENU_TABLE)
      .select('id, name, description, price, category, cuisine, image_url, is_veg, is_bestseller')
      .order('name')

    if (error) {
      throw classifySupabaseError(error, { table: MENU_TABLE, operation: 'select menu_items' })
    }

    return (data ?? []).map(mapMenuRow)
  } catch (error) {
    if (error instanceof DataFetchError) throw error
    throw classifySupabaseError(error, { table: MENU_TABLE, operation: 'load menu' })
  }
}

export async function fetchMenuByCategory(category: CafeCategory): Promise<{
  items: MenuItemRow[]
  addons: MenuItemRow[]
}> {
  const all = await fetchAllMenu()
  const items = all.filter((item) => item.cuisine === category)
  const addons =
    category === 'addons' ? [] : all.filter((item) => item.cuisine === 'addons')
  return { items, addons }
}

export function getMenuItemMap(items: MenuItemRow[]): Map<string, MenuItemRow> {
  return new Map(items.map((item) => [item.id, item]))
}
