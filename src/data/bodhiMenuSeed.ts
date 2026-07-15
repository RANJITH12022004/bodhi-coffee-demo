/**
 * Bodhi Coffee menu catalog — source of truth for migrations & mock analytics.
 * Prices are GST-inclusive (₹).
 */
import type { CafeCategory } from '@/types/menu'
import type { MenuCategory } from '@/types/analytics'

export interface BodhiMenuSeedItem {
  id: string
  name: string
  description: string
  price: number
  category: MenuCategory
  cuisine: CafeCategory
  image: string
  is_veg: boolean
  is_bestseller?: boolean
}

function item(
  n: number,
  name: string,
  description: string,
  price: number,
  category: MenuCategory,
  cuisine: CafeCategory,
  image: string,
  is_veg = true,
  is_bestseller = false,
): BodhiMenuSeedItem {
  const hex = n.toString(16).padStart(12, '0')
  return {
    id: `b1000001-0000-4000-8000-${hex}`,
    name,
    description,
    price,
    category,
    cuisine,
    image: `/menu/${image}`,
    is_veg,
    is_bestseller,
  }
}

export const BODHI_MENU: BodhiMenuSeedItem[] = [
  // Food
  item(1, 'Classic Fries', 'Crispy golden fries with house seasoning', 229, 'Starters', 'food', 'fries.jpg'),
  item(2, 'Peri Peri Fries', 'Spiced peri peri toss on crispy fries', 249, 'Starters', 'food', 'fries.jpg'),
  item(3, 'Parsley Parmesan Fries', 'Fries finished with parmesan, parsley and savoury herbs', 259, 'Starters', 'food', 'fries.jpg'),
  item(4, 'Loaded Fries', 'Fries loaded with cheese, herbs and savoury toppings', 279, 'Starters', 'food', 'fries.jpg', true, true),
  item(5, 'Classic Scrambled Eggs on Sourdough', 'Creamy scrambled eggs on toasted sourdough, served with chips', 269, 'Mains', 'food', 'toast.jpg', false),
  item(6, 'BBQ Mushroom Toast', 'BBQ sautéed mushrooms with cream cheese on sourdough, served with chips', 279, 'Mains', 'food', 'toast.jpg', true, true),
  item(7, 'Cream Cheese Cucumber Sandwich', 'Fresh cucumber and cream cheese on soft milk bread, served with chips', 249, 'Mains', 'food', 'sandwich.jpg'),
  item(8, 'Mushroom Soft Shell Tacos', 'Soft tortillas filled with spiced mushrooms, salsa and mint mayo, served with chips', 279, 'Mains', 'food', 'tacos.jpg', true, true),
  item(9, 'Waldorf Salad', 'Lettuce, apple, cucumber, olives and walnuts in a creamy dressing', 279, 'Starters', 'food', 'salad.jpg'),

  // Chilled Coffee
  item(10, 'Espresso Tonic', 'Bold espresso layered over sparkling tonic water and ice for a crisp finish', 239, 'Beverages', 'chilled', 'tonic-espresso.jpg'),
  item(11, 'Vietnamese Coffee', 'Strong filter coffee shaken with condensed milk and poured over ice', 249, 'Beverages', 'chilled', 'tonic-espresso.jpg'),
  item(12, 'Iced Spanish Latte', 'Espresso with sweet condensed milk poured over ice', 259, 'Beverages', 'chilled', 'iced-latte.jpg', true, true),
  item(13, 'Orange Espresso', 'Orange juice poured over ice and topped with a bold espresso shot', 239, 'Beverages', 'chilled', 'tonic-espresso.jpg'),
  item(14, "Salt n' Cola Espresso", 'Espresso layered with chilled cola, sea salt and whipped cream', 239, 'Beverages', 'chilled', 'tonic-espresso.jpg'),

  // Blended
  item(15, 'Classic Cold Coffee', 'Blended espresso, milk and ice for a creamy café-style cold coffee', 239, 'Beverages', 'blended', 'cold-coffee.jpg', true, true),
  item(16, 'French Vanilla Frappe', 'Smooth coffee frappe with sweet vanilla notes and whipped cream', 249, 'Beverages', 'blended', 'frappe.jpg'),
  item(17, 'Mocha Frappe', 'Rich chocolate and coffee frappe topped with whipped cream and drizzle', 259, 'Beverages', 'blended', 'mocha.jpg', true, true),
  item(18, 'Hazelnut Frappe', 'Creamy iced coffee blended with hazelnut syrup and whipped cream', 249, 'Beverages', 'blended', 'frappe.jpg'),
  item(19, 'Caramel Frappe', 'Blended coffee with caramel sweetness, whipped cream and caramel drizzle', 249, 'Beverages', 'blended', 'frappe.jpg'),

  // Frappes
  item(20, 'Overloaded Oreo', 'Chocolate frappe blended with Oreo cookies, whipped cream and cookie crumble', 249, 'Beverages', 'frappes', 'oreo-frappe.jpg', true, true),
  item(21, 'Coconut Oreo Frappe', 'Creamy coconut frappe blended with Oreo cookies and coconut flakes', 269, 'Beverages', 'frappes', 'oreo-frappe.jpg'),
  item(22, 'Caramel Cheesecake Frappe', 'Sweet caramel frappe with cheesecake notes and whipped cream', 249, 'Beverages', 'frappes', 'frappe.jpg'),
  item(23, 'Biscoff Frappe', 'Creamy frappe blended with Biscoff spread, whipped cream and cookie crumbs', 289, 'Beverages', 'frappes', 'biscoff-frappe.jpg', true, true),
  item(24, 'Pistachio Frappe', 'Rich creamy frappe with pistachio flavour, whipped cream and nut crumble', 299, 'Beverages', 'frappes', 'pistachio-latte.jpg'),

  // Slow Brew
  item(25, 'Pour Over', 'Manual hand-pour using Kalita method — choice of single origin beans', 229, 'Beverages', 'slow_brew', 'pour-over.jpg', true, true),
  item(26, 'Aero Press', 'Pressurised immersion brew — bold, smooth and rich single origin', 229, 'Beverages', 'slow_brew', 'pour-over.jpg'),
  item(27, 'Classic Cold Brew', '18+ hour slow drip — clean, bright, low acidity', 279, 'Beverages', 'slow_brew', 'cold-brew.jpg', true, true),
  item(28, 'Brandy Barrel Brew', 'Barrel-aged beans — velvety body with oak and smooth brandy finish', 299, 'Beverages', 'slow_brew', 'cold-brew.jpg'),

  // Matcha
  item(29, 'Matcha Latte (Hot / Iced)', 'Premium ceremonial matcha whisked with silky milk', 249, 'Beverages', 'matcha', 'matcha.jpg', true, true),
  item(30, 'Strawberry Matcha', 'Fresh strawberry and milk layered with ceremonial matcha and whipped cream', 279, 'Beverages', 'matcha', 'matcha.jpg'),
  item(31, 'Mango Matcha', 'Creamy mango purée blended with smooth matcha and whipped cream', 279, 'Beverages', 'matcha', 'matcha.jpg'),
  item(32, 'Peach Matcha Sunrise', 'Peach syrup, citrus tonic and ceremonial matcha layered over ice', 279, 'Beverages', 'matcha', 'matcha.jpg'),
  item(33, 'Matcha Lemonade', 'Premium matcha with lemonade, tonic water and fresh lime garnish', 279, 'Beverages', 'matcha', 'matcha.jpg'),

  // Refreshers
  item(34, 'Lemon Mint Iced Tea', 'Refreshing iced tea with lemon, fresh mint and ice', 229, 'Beverages', 'refreshers', 'iced-tea.jpg'),
  item(35, 'Peach Iced Tea', 'Classic iced tea infused with sweet peach and citrus notes', 229, 'Beverages', 'refreshers', 'iced-tea.jpg'),
  item(36, 'Passion Fruit Iced Tea', 'Bright tropical iced tea with passion fruit sweetness', 229, 'Beverages', 'refreshers', 'iced-tea.jpg'),
  item(37, 'Hibiscus Iced Tea', 'Floral hibiscus tea with a delicate citrus finish', 229, 'Beverages', 'refreshers', 'iced-tea.jpg'),
  item(38, 'Classic Mojito', 'A refreshing blend of mint, lime and sparkling fizz', 219, 'Beverages', 'refreshers', 'mojito.jpg'),
  item(39, 'Spice Cola Mojito', 'A fizzy, refreshing cola mojito with a spiced twist', 239, 'Beverages', 'refreshers', 'mojito.jpg'),

  // Dessert drinks & tea
  item(40, 'Affogato', 'A scoop of ice cream finished with a hot shot of espresso', 249, 'Desserts', 'dessert_drinks', 'affogato.jpg', true, true),
  item(41, 'Classic Hot Chocolate', 'Rich dark chocolate melted into steamed milk for a velvety cup', 229, 'Beverages', 'dessert_drinks', 'hot-chocolate.jpg'),
  item(42, '55% Dark Chocolate', 'Deep cocoa hot chocolate with bold bittersweet notes', 249, 'Beverages', 'dessert_drinks', 'hot-chocolate.jpg'),
  item(43, 'French Hot Chocolate Giggles', 'Classic hot chocolate with vanilla, topped with marshmallows', 259, 'Beverages', 'dessert_drinks', 'hot-chocolate.jpg'),
  item(44, 'Biscoff Hot Chocolate', 'Warm chocolate blended with Biscoff, whipped cream and biscuit crumbs', 279, 'Beverages', 'dessert_drinks', 'biscoff-frappe.jpg', true, true),
  item(45, 'Green Tea', 'Light and refreshing green tea brewed at the perfect temperature', 199, 'Beverages', 'dessert_drinks', 'tea.jpg'),
  item(46, 'Chamomile Tea', 'Calming herbal tea with delicate floral notes', 219, 'Beverages', 'dessert_drinks', 'tea.jpg'),

  // Coffee Classics
  item(47, 'Espresso', 'A bold single shot of rich, concentrated coffee', 159, 'Beverages', 'classics', 'espresso.jpg', true, true),
  item(48, 'Americano', 'Smooth espresso diluted with hot water for a balanced black coffee', 179, 'Beverages', 'classics', 'americano.jpg'),
  item(49, 'Cappuccino', 'Espresso with steamed milk and a soft, creamy foam finish', 209, 'Beverages', 'classics', 'cappuccino.jpg', true, true),
  item(50, 'Café Latte', 'Espresso blended with silky steamed milk for a smooth, milky coffee', 219, 'Beverages', 'classics', 'latte.jpg', true, true),
  item(51, 'Flat White', 'Stronger espresso with silkier milk and finely textured microfoam', 209, 'Beverages', 'classics', 'latte.jpg'),
  item(52, 'Cortado', 'Equal parts espresso and steamed milk for a bold, balanced cup', 189, 'Beverages', 'classics', 'espresso.jpg'),
  item(53, 'Iced Americano', 'Double espresso served over ice for a bold refreshing black coffee', 189, 'Beverages', 'classics', 'americano.jpg'),
  item(54, 'Iced Latte', 'Smooth espresso layered over chilled milk and ice cubes', 229, 'Beverages', 'classics', 'iced-latte.jpg'),

  // Bodhi Signatures
  item(55, 'Mocha', 'Espresso, dark chocolate and steamed milk for a rich chocolate coffee', 249, 'Beverages', 'signatures', 'mocha.jpg', true, true),
  item(56, 'Hazelnut Cappuccino', 'Classic cappuccino infused with sweet hazelnut flavour', 249, 'Beverages', 'signatures', 'cappuccino.jpg'),
  item(57, 'Spanish Latte', 'Espresso with milk and sweet condensed milk for a rich creamy finish', 249, 'Beverages', 'signatures', 'latte.jpg', true, true),
  item(58, 'Pistachio Latte', 'Silky milk coffee infused with rich pistachio notes', 259, 'Beverages', 'signatures', 'pistachio-latte.jpg', true, true),
  item(59, 'Coco Fusion', 'Coconut water, coconut syrup and espresso layered beautifully over ice', 249, 'Beverages', 'signatures', 'coconut.jpg'),
  item(60, 'Coconut Oreo Coffee', 'Creamy coconut coffee blended with Oreo cookies and cookie crumble', 259, 'Beverages', 'signatures', 'oreo-frappe.jpg'),
  item(61, 'Rose Coconut Matcha', 'Coconut water and ceremonial matcha topped with rose whipped cream foam', 289, 'Beverages', 'signatures', 'matcha.jpg', true, true),
  item(62, 'White Chocolate Matcha', 'Sweet white chocolate blended with hot milk and earthy matcha', 269, 'Beverages', 'signatures', 'matcha.jpg'),

  // Add-ons
  item(63, 'Oat / Almond / Soya Milk', 'Plant-based milk swap', 40, 'Beverages', 'addons', 'addon.jpg'),
  item(64, 'Whipped Cream', 'Extra whipped cream topping', 40, 'Beverages', 'addons', 'addon.jpg'),
  item(65, 'Extra Flavour Shot', 'Vanilla, caramel, hazelnut or other syrup', 40, 'Beverages', 'addons', 'addon.jpg'),
  item(66, 'Extra Espresso Shot', 'Additional espresso shot', 60, 'Beverages', 'addons', 'espresso.jpg'),
  item(67, 'Ice Cream Scoop', 'Add a scoop of ice cream', 60, 'Desserts', 'addons', 'affogato.jpg'),
  item(68, 'Take Away Pack', 'Eco packaging for food to go', 15, 'Starters', 'addons', 'addon.jpg'),
]

export const BODHI_MENU_CATALOG: Record<
  string,
  { name: string; price: number; category: MenuCategory }
> = Object.fromEntries(
  BODHI_MENU.map((row) => [row.id, { name: row.name, price: row.price, category: row.category }]),
)
