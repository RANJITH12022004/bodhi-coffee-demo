import { Link, useParams } from 'react-router-dom'
import { CustomerBackLink } from '@/components/customer/OrderLayout'
import { LOGO_URL, RESTAURANT_NAME } from '@/constants/branding'
import { CATEGORY_TILES } from '@/constants/categories'

export default function CategoryPickerPage() {
  const { tableId = '' } = useParams()

  return (
    <main className="min-h-screen px-margin-mobile pb-28 pt-md">
      <CustomerBackLink to={`/order/${tableId}`} label="Back" />
      <div className="mt-md flex items-center gap-md fade-in">
        <img src={LOGO_URL} alt={RESTAURANT_NAME} className="h-14 w-14 rounded-full object-cover" />
        <div>
          <h1 className="font-display text-2xl font-bold text-primary">Choose a category</h1>
          <p className="text-sm text-on-surface-variant">
            Coffee, matcha, food & more — all prices incl. GST
          </p>
        </div>
      </div>

      <div className="mt-lg flex flex-col gap-lg">
        {CATEGORY_TILES.map((tile, index) => (
          <Link
            key={tile.id}
            to={`/order/${tableId}/menu/${tile.id}`}
            className="fade-up overflow-hidden rounded-2xl border border-outline-variant/50 bg-surface-container-lowest shadow-sm"
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <div className="h-44 w-full overflow-hidden">
              <img src={tile.image} alt={tile.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-md">
              <h2 className="font-display text-xl font-bold text-on-surface">{tile.title}</h2>
              <p className="text-sm text-on-surface-variant">{tile.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
