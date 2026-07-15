import type {
  OrderLineItem,
  OrderWithItems,
  OwnerAnalytics,
  TrendPeriod,
} from '@/types/analytics'
import { buildAnalytics } from '@/lib/analytics'
import { BODHI_MENU, BODHI_MENU_CATALOG } from '@/data/bodhiMenuSeed'

const MENU_CATALOG = BODHI_MENU_CATALOG

function idAt(index: number): string {
  return BODHI_MENU[index]?.id ?? BODHI_MENU[0].id
}

function lineItem(menuId: string, quantity: number): OrderLineItem {
  const menu = MENU_CATALOG[menuId]
  return {
    menu_item_id: menuId,
    name: menu.name,
    price: menu.price,
    category: menu.category,
    quantity,
  }
}

function hoursAgo(hours: number, minutes = 0): string {
  const date = new Date()
  date.setHours(date.getHours() - hours, date.getMinutes() - minutes, 0, 0)
  return date.toISOString()
}

function daysAgo(days: number, hour: number, minute = 0): string {
  const date = new Date()
  date.setDate(date.getDate() - days)
  date.setHours(hour, minute, 0, 0)
  return date.toISOString()
}

export function generateMockOrders(): OrderWithItems[] {
  const orders: OrderWithItems[] = []
  let counter = 0

  const pushOrder = (
    createdAt: string,
    tableId: string,
    items: OrderLineItem[],
    status: OrderWithItems['status'] = 'completed',
  ) => {
    counter += 1
    orders.push({
      id: `mock-order-${counter}`,
      table_id: tableId,
      status,
      created_at: createdAt,
      special_instructions: null,
      items,
    })
  }

  // Indices into BODHI_MENU (0-based)
  const coldCoffee = idAt(14) // Classic Cold Coffee
  const cappuccino = idAt(48) // Cappuccino
  const loadedFries = idAt(3) // Loaded Fries
  const biscoffFrappe = idAt(22) // Biscoff Frappe
  const espresso = idAt(46) // Espresso
  const spanishLatte = idAt(56) // Spanish Latte
  const pourOver = idAt(24) // Pour Over
  const matchaLatte = idAt(28) // Matcha Latte

  for (let i = 0; i < 8; i += 1) {
    pushOrder(
      hoursAgo(10 - i, i * 7),
      `table-${4 + i}`,
      [
        lineItem(cappuccino, 1 + (i % 2)),
        lineItem(coldCoffee, 1),
        lineItem(loadedFries, 1),
      ],
      'completed',
    )
  }

  pushOrder(
    hoursAgo(2),
    'table-12',
    [
      lineItem(spanishLatte, 2),
      lineItem(biscoffFrappe, 2),
      lineItem(espresso, 3),
    ],
    'completed',
  )

  pushOrder(
    hoursAgo(0, 3),
    'table-5',
    [lineItem(pourOver, 1), lineItem(loadedFries, 2)],
    'received',
  )

  pushOrder(
    hoursAgo(0, 12),
    'table-8',
    [lineItem(matchaLatte, 1), lineItem(coldCoffee, 1)],
    'preparing',
  )

  for (let day = 1; day <= 29; day += 1) {
    for (let slot = 0; slot < 3; slot += 1) {
      pushOrder(
        daysAgo(day, 12 + slot * 3, (day * 5 + slot * 11) % 50),
        `table-${(day % 10) + 1}`,
        [
          lineItem(cappuccino, 1),
          lineItem(coldCoffee, 1),
          lineItem(espresso, 1 + (slot % 2)),
          ...(day % 4 === 0 ? [lineItem(spanishLatte, 1)] : []),
          ...(day % 5 === 0 ? [lineItem(biscoffFrappe, 1)] : []),
        ],
      )
    }
  }

  return orders
}

export function getMockAnalytics(period: TrendPeriod = 'daily'): OwnerAnalytics {
  return buildAnalytics(generateMockOrders(), period, true)
}

export { MENU_CATALOG }
