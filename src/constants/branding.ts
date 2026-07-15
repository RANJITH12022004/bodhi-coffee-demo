export const RESTAURANT_NAME = 'Bodhi Coffee'

export const TAGLINE = 'Mindful brewing in JP Nagar'

export const LOGO_URL = '/logo.png'

export const ADDRESS_LINES = [
  '612, 13th Cross, 14th Main Rd',
  '2nd Phase, J. P. Nagar',
  'Bengaluru, Karnataka 560078',
] as const

export const MAPS_QUERY = encodeURIComponent(
  'Bodhi Coffee, 612 13th Cross 14th Main Rd JP Nagar Bengaluru 560078',
)

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`

export const HOURS_WEEKDAY = '10:00 AM – 10:30 PM'
export const HOURS_WEEKEND = '10:00 AM – 11:00 PM (Fri–Sun)'

export const RESERVATION_LINKS = {
  district: 'https://www.district.in',
  zomato: 'https://www.zomato.com',
} as const

export const PRICES_INCLUDE_GST = true

/** Default table for printed QR / pitch demos */
export const DEMO_TABLE_ID = 'table-12'

/** GST-inclusive pricing — no extra tax lines at checkout */
export const GST_RATE = 0
export const RESTAURANT_CHARGE = 0

export const STAFF_PINS = {
  kitchen: { pin: '1111', role: 'Kitchen', path: '/kitchen' },
  stock: { pin: '2222', role: 'Stock', path: '/stock' },
  owner: { pin: '3333', role: 'Owner', path: '/owner' },
} as const

export function formatTableLabel(tableId: string): string {
  const cleaned = tableId.replace(/^table-?/i, '')
  return cleaned ? `Table ${cleaned}` : tableId
}

export function formatCurrency(amount: number): string {
  return `₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`
}

export function shortOrderId(orderId: string): string {
  return orderId.replace(/-/g, '').slice(0, 4).toUpperCase()
}
