import { Link, useParams } from 'react-router-dom'
import {
  formatTableLabel,
  LOGO_URL,
  RESTAURANT_NAME,
  TAGLINE,
} from '@/constants/branding'

export default function WelcomePage() {
  const { tableId = '' } = useParams()

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden px-margin-mobile pb-28 pt-xl text-center fade-in">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(47,79,62,0.22), transparent 55%), radial-gradient(ellipse at 80% 100%, rgba(61,43,31,0.12), transparent 45%), linear-gradient(180deg, #f7f3ec 0%, #ebe4d6 100%)',
        }}
      />
      <img
        src={LOGO_URL}
        alt={RESTAURANT_NAME}
        className="relative z-10 h-36 w-36 rounded-full object-cover shadow-lg ring-4 ring-cream"
      />
      <h1 className="relative z-10 mt-lg font-display text-4xl font-bold tracking-tight text-primary">
        {RESTAURANT_NAME}
      </h1>
      <p className="relative z-10 mt-sm text-base text-on-surface-variant">{TAGLINE}</p>
      <p className="relative z-10 mt-md text-sm font-semibold text-secondary">
        {formatTableLabel(tableId)}
      </p>
      <Link
        to={`/order/${tableId}/menu`}
        className="relative z-10 mt-xl w-full rounded-xl bg-primary px-lg py-md text-base font-bold text-on-primary shadow-md"
      >
        View Menu
      </Link>
    </main>
  )
}
