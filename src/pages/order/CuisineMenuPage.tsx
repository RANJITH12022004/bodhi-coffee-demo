import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CustomerBackLink } from '@/components/customer/OrderLayout'
import { MenuItemCard } from '@/components/customer/MenuItemCard'
import { useCart } from '@/context/CartContext'
import { LOGO_URL, RESTAURANT_NAME } from '@/constants/branding'
import { categoryTile } from '@/constants/categories'
import { useMenuItems } from '@/hooks/useMenuItems'
import { DataErrorPanel } from '@/components/DataErrorPanel'
import type { MenuCategory } from '@/types/analytics'
import type { CafeCategory, MenuFilter, MenuItemRow } from '@/types/menu'

const CATEGORY_ORDER: MenuCategory[] = ['Starters', 'Mains', 'Desserts', 'Beverages']

function groupByCategory(items: MenuItemRow[]): Array<{ category: MenuCategory; items: MenuItemRow[] }> {
  return CATEGORY_ORDER.map((category) => ({
    category,
    items: items.filter((item) => item.category === category),
  })).filter((group) => group.items.length > 0)
}

function applyFilter(items: MenuItemRow[], filter: MenuFilter): MenuItemRow[] {
  if (filter === 'bestsellers') return items.filter((item) => item.is_bestseller)
  if (filter === 'veg') return items.filter((item) => item.is_veg)
  return items
}

export default function CuisineMenuPage() {
  const params = useParams()
  const tableId = params.tableId ?? ''
  const categoryId = (params.category ?? params.cuisine ?? 'classics') as CafeCategory
  const { items, loading, error, refresh } = useMenuItems()
  const { addItem, setQuantity, getQuantity } = useCart()
  const [filter, setFilter] = useState<MenuFilter>('all')
  const tile = categoryTile(categoryId)
  const heroUrl = tile?.image
  const title = tile?.title ?? 'Menu'

  const categoryItems = useMemo(
    () => items.filter((item) => item.cuisine === categoryId),
    [items, categoryId],
  )

  const filteredItems = useMemo(
    () => applyFilter(categoryItems, filter),
    [categoryItems, filter],
  )

  const grouped = useMemo(() => groupByCategory(filteredItems), [filteredItems])

  const addonItems = useMemo(() => {
    if (categoryId === 'addons') return []
    return applyFilter(
      items.filter((item) => item.cuisine === 'addons'),
      filter,
    )
  }, [items, categoryId, filter])

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center text-on-surface-variant">
        Loading menu…
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen px-margin-mobile py-xl">
        <DataErrorPanel error={error} onRetry={() => void refresh()} />
      </main>
    )
  }

  return (
    <main className="min-h-screen pb-28">
      {heroUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <img src={heroUrl} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent" />
        </div>
      )}

      <div className="px-margin-mobile pt-md">
        <CustomerBackLink to={`/order/${tableId}/menu`} label="Categories" />
        <div className="mt-md flex items-center gap-md animate-in fade">
          <img
            src={LOGO_URL}
            alt={RESTAURANT_NAME}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <h1 className="font-display text-2xl font-bold text-primary">{title}</h1>
            <span className="mt-1 inline-block rounded-full bg-primary-fixed px-2 py-0.5 text-[11px] font-bold tracking-wide text-primary uppercase">
              All prices incl. GST
            </span>
          </div>
        </div>

        <div className="mt-md flex flex-wrap gap-2">
          {(
            [
              ['all', 'All'],
              ['bestsellers', 'Bestsellers'],
              ['veg', 'Veg Only'],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={`rounded-full px-md py-sm text-sm font-semibold ${
                filter === value
                  ? 'bg-primary text-on-primary'
                  : 'border border-outline-variant bg-surface-container-lowest text-on-surface-variant'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {grouped.map((group) => (
          <section key={group.category} className="mt-xl">
            <h2 className="mb-md text-lg font-bold text-on-surface">{group.category}</h2>
            <div className="flex flex-col gap-lg">
              {group.items.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  quantity={getQuantity(item.id)}
                  onAdd={() => addItem(item.id)}
                  onQuantityChange={(quantity) => setQuantity(item.id, quantity)}
                />
              ))}
            </div>
          </section>
        ))}

        {addonItems.length > 0 && (
          <section className="mt-xl">
            <h2 className="mb-md text-lg font-bold text-on-surface">Add-ons</h2>
            <div className="flex flex-col gap-lg">
              {addonItems.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  quantity={getQuantity(item.id)}
                  onAdd={() => addItem(item.id)}
                  onQuantityChange={(quantity) => setQuantity(item.id, quantity)}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
