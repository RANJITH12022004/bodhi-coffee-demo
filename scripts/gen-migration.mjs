import { writeFileSync, mkdirSync } from 'fs'

function id(n) {
  return `b1000001-0000-4000-8000-${n.toString(16).padStart(12, '0')}`
}

const items = [
  [1, 'Classic Fries', 'Crispy golden fries with house seasoning', 229, 'Starters', 'food', 'fries.jpg', true, false],
  [2, 'Peri Peri Fries', 'Spiced peri peri toss on crispy fries', 249, 'Starters', 'food', 'fries.jpg', true, false],
  [3, 'Parsley Parmesan Fries', 'Fries finished with parmesan, parsley and savoury herbs', 259, 'Starters', 'food', 'fries.jpg', true, false],
  [4, 'Loaded Fries', 'Fries loaded with cheese, herbs and savoury toppings', 279, 'Starters', 'food', 'fries.jpg', true, true],
  [5, 'Classic Scrambled Eggs on Sourdough', 'Creamy scrambled eggs on toasted sourdough, served with chips', 269, 'Mains', 'food', 'toast.jpg', false, false],
  [6, 'BBQ Mushroom Toast', 'BBQ sautéed mushrooms with cream cheese on sourdough, served with chips', 279, 'Mains', 'food', 'toast.jpg', true, true],
  [7, 'Cream Cheese Cucumber Sandwich', 'Fresh cucumber and cream cheese on soft milk bread, served with chips', 249, 'Mains', 'food', 'sandwich.jpg', true, false],
  [8, 'Mushroom Soft Shell Tacos', 'Soft tortillas filled with spiced mushrooms, salsa and mint mayo, served with chips', 279, 'Mains', 'food', 'tacos.jpg', true, true],
  [9, 'Waldorf Salad', 'Lettuce, apple, cucumber, olives and walnuts in a creamy dressing', 279, 'Starters', 'food', 'salad.jpg', true, false],
  [10, 'Espresso Tonic', 'Bold espresso layered over sparkling tonic water and ice for a crisp finish', 239, 'Beverages', 'chilled', 'tonic-espresso.jpg', true, false],
  [11, 'Vietnamese Coffee', 'Strong filter coffee shaken with condensed milk and poured over ice', 249, 'Beverages', 'chilled', 'tonic-espresso.jpg', true, false],
  [12, 'Iced Spanish Latte', 'Espresso with sweet condensed milk poured over ice', 259, 'Beverages', 'chilled', 'iced-latte.jpg', true, true],
  [13, 'Orange Espresso', 'Orange juice poured over ice and topped with a bold espresso shot', 239, 'Beverages', 'chilled', 'tonic-espresso.jpg', true, false],
  [14, "Salt n' Cola Espresso", 'Espresso layered with chilled cola, sea salt and whipped cream', 239, 'Beverages', 'chilled', 'tonic-espresso.jpg', true, false],
  [15, 'Classic Cold Coffee', 'Blended espresso, milk and ice for a creamy café-style cold coffee', 239, 'Beverages', 'blended', 'cold-coffee.jpg', true, true],
  [16, 'French Vanilla Frappe', 'Smooth coffee frappe with sweet vanilla notes and whipped cream', 249, 'Beverages', 'blended', 'frappe.jpg', true, false],
  [17, 'Mocha Frappe', 'Rich chocolate and coffee frappe topped with whipped cream and drizzle', 259, 'Beverages', 'blended', 'mocha.jpg', true, true],
  [18, 'Hazelnut Frappe', 'Creamy iced coffee blended with hazelnut syrup and whipped cream', 249, 'Beverages', 'blended', 'frappe.jpg', true, false],
  [19, 'Caramel Frappe', 'Blended coffee with caramel sweetness, whipped cream and caramel drizzle', 249, 'Beverages', 'blended', 'frappe.jpg', true, false],
  [20, 'Overloaded Oreo', 'Chocolate frappe blended with Oreo cookies, whipped cream and cookie crumble', 249, 'Beverages', 'frappes', 'oreo-frappe.jpg', true, true],
  [21, 'Coconut Oreo Frappe', 'Creamy coconut frappe blended with Oreo cookies and coconut flakes', 269, 'Beverages', 'frappes', 'oreo-frappe.jpg', true, false],
  [22, 'Caramel Cheesecake Frappe', 'Sweet caramel frappe with cheesecake notes and whipped cream', 249, 'Beverages', 'frappes', 'frappe.jpg', true, false],
  [23, 'Biscoff Frappe', 'Creamy frappe blended with Biscoff spread, whipped cream and cookie crumbs', 289, 'Beverages', 'frappes', 'biscoff-frappe.jpg', true, true],
  [24, 'Pistachio Frappe', 'Rich creamy frappe with pistachio flavour, whipped cream and nut crumble', 299, 'Beverages', 'frappes', 'pistachio-latte.jpg', true, false],
  [25, 'Pour Over', 'Manual hand-pour using Kalita method — choice of single origin beans', 229, 'Beverages', 'slow_brew', 'pour-over.jpg', true, true],
  [26, 'Aero Press', 'Pressurised immersion brew — bold, smooth and rich single origin', 229, 'Beverages', 'slow_brew', 'pour-over.jpg', true, false],
  [27, 'Classic Cold Brew', '18+ hour slow drip — clean, bright, low acidity', 279, 'Beverages', 'slow_brew', 'cold-brew.jpg', true, true],
  [28, 'Brandy Barrel Brew', 'Barrel-aged beans — velvety body with oak and smooth brandy finish', 299, 'Beverages', 'slow_brew', 'cold-brew.jpg', true, false],
  [29, 'Matcha Latte (Hot / Iced)', 'Premium ceremonial matcha whisked with silky milk', 249, 'Beverages', 'matcha', 'matcha.jpg', true, true],
  [30, 'Strawberry Matcha', 'Fresh strawberry and milk layered with ceremonial matcha and whipped cream', 279, 'Beverages', 'matcha', 'matcha.jpg', true, false],
  [31, 'Mango Matcha', 'Creamy mango purée blended with smooth matcha and whipped cream', 279, 'Beverages', 'matcha', 'matcha.jpg', true, false],
  [32, 'Peach Matcha Sunrise', 'Peach syrup, citrus tonic and ceremonial matcha layered over ice', 279, 'Beverages', 'matcha', 'matcha.jpg', true, false],
  [33, 'Matcha Lemonade', 'Premium matcha with lemonade, tonic water and fresh lime garnish', 279, 'Beverages', 'matcha', 'matcha.jpg', true, false],
  [34, 'Lemon Mint Iced Tea', 'Refreshing iced tea with lemon, fresh mint and ice', 229, 'Beverages', 'refreshers', 'iced-tea.jpg', true, false],
  [35, 'Peach Iced Tea', 'Classic iced tea infused with sweet peach and citrus notes', 229, 'Beverages', 'refreshers', 'iced-tea.jpg', true, false],
  [36, 'Passion Fruit Iced Tea', 'Bright tropical iced tea with passion fruit sweetness', 229, 'Beverages', 'refreshers', 'iced-tea.jpg', true, false],
  [37, 'Hibiscus Iced Tea', 'Floral hibiscus tea with a delicate citrus finish', 229, 'Beverages', 'refreshers', 'iced-tea.jpg', true, false],
  [38, 'Classic Mojito', 'A refreshing blend of mint, lime and sparkling fizz', 219, 'Beverages', 'refreshers', 'mojito.jpg', true, false],
  [39, 'Spice Cola Mojito', 'A fizzy, refreshing cola mojito with a spiced twist', 239, 'Beverages', 'refreshers', 'mojito.jpg', true, false],
  [40, 'Affogato', 'A scoop of ice cream finished with a hot shot of espresso', 249, 'Desserts', 'dessert_drinks', 'affogato.jpg', true, true],
  [41, 'Classic Hot Chocolate', 'Rich dark chocolate melted into steamed milk for a velvety cup', 229, 'Beverages', 'dessert_drinks', 'hot-chocolate.jpg', true, false],
  [42, '55% Dark Chocolate', 'Deep cocoa hot chocolate with bold bittersweet notes', 249, 'Beverages', 'dessert_drinks', 'hot-chocolate.jpg', true, false],
  [43, 'French Hot Chocolate Giggles', 'Classic hot chocolate with vanilla, topped with marshmallows', 259, 'Beverages', 'dessert_drinks', 'hot-chocolate.jpg', true, false],
  [44, 'Biscoff Hot Chocolate', 'Warm chocolate blended with Biscoff, whipped cream and biscuit crumbs', 279, 'Beverages', 'dessert_drinks', 'biscoff-frappe.jpg', true, true],
  [45, 'Green Tea', 'Light and refreshing green tea brewed at the perfect temperature', 199, 'Beverages', 'dessert_drinks', 'tea.jpg', true, false],
  [46, 'Chamomile Tea', 'Calming herbal tea with delicate floral notes', 219, 'Beverages', 'dessert_drinks', 'tea.jpg', true, false],
  [47, 'Espresso', 'A bold single shot of rich, concentrated coffee', 159, 'Beverages', 'classics', 'espresso.jpg', true, true],
  [48, 'Americano', 'Smooth espresso diluted with hot water for a balanced black coffee', 179, 'Beverages', 'classics', 'americano.jpg', true, false],
  [49, 'Cappuccino', 'Espresso with steamed milk and a soft, creamy foam finish', 209, 'Beverages', 'classics', 'cappuccino.jpg', true, true],
  [50, 'Café Latte', 'Espresso blended with silky steamed milk for a smooth, milky coffee', 219, 'Beverages', 'classics', 'latte.jpg', true, true],
  [51, 'Flat White', 'Stronger espresso with silkier milk and finely textured microfoam', 209, 'Beverages', 'classics', 'latte.jpg', true, false],
  [52, 'Cortado', 'Equal parts espresso and steamed milk for a bold, balanced cup', 189, 'Beverages', 'classics', 'espresso.jpg', true, false],
  [53, 'Iced Americano', 'Double espresso served over ice for a bold refreshing black coffee', 189, 'Beverages', 'classics', 'americano.jpg', true, false],
  [54, 'Iced Latte', 'Smooth espresso layered over chilled milk and ice cubes', 229, 'Beverages', 'classics', 'iced-latte.jpg', true, false],
  [55, 'Mocha', 'Espresso, dark chocolate and steamed milk for a rich chocolate coffee', 249, 'Beverages', 'signatures', 'mocha.jpg', true, true],
  [56, 'Hazelnut Cappuccino', 'Classic cappuccino infused with sweet hazelnut flavour', 249, 'Beverages', 'signatures', 'cappuccino.jpg', true, false],
  [57, 'Spanish Latte', 'Espresso with milk and sweet condensed milk for a rich creamy finish', 249, 'Beverages', 'signatures', 'latte.jpg', true, true],
  [58, 'Pistachio Latte', 'Silky milk coffee infused with rich pistachio notes', 259, 'Beverages', 'signatures', 'pistachio-latte.jpg', true, true],
  [59, 'Coco Fusion', 'Coconut water, coconut syrup and espresso layered beautifully over ice', 249, 'Beverages', 'signatures', 'coconut.jpg', true, false],
  [60, 'Coconut Oreo Coffee', 'Creamy coconut coffee blended with Oreo cookies and cookie crumble', 259, 'Beverages', 'signatures', 'oreo-frappe.jpg', true, false],
  [61, 'Rose Coconut Matcha', 'Coconut water and ceremonial matcha topped with rose whipped cream foam', 289, 'Beverages', 'signatures', 'matcha.jpg', true, true],
  [62, 'White Chocolate Matcha', 'Sweet white chocolate blended with hot milk and earthy matcha', 269, 'Beverages', 'signatures', 'matcha.jpg', true, false],
  [63, 'Oat / Almond / Soya Milk', 'Plant-based milk swap', 40, 'Beverages', 'addons', 'addon.jpg', true, false],
  [64, 'Whipped Cream', 'Extra whipped cream topping', 40, 'Beverages', 'addons', 'addon.jpg', true, false],
  [65, 'Extra Flavour Shot', 'Vanilla, caramel, hazelnut or other syrup', 40, 'Beverages', 'addons', 'addon.jpg', true, false],
  [66, 'Extra Espresso Shot', 'Additional espresso shot', 60, 'Beverages', 'addons', 'espresso.jpg', true, false],
  [67, 'Ice Cream Scoop', 'Add a scoop of ice cream', 60, 'Desserts', 'addons', 'affogato.jpg', true, false],
  [68, 'Take Away Pack', 'Eco packaging for food to go', 15, 'Starters', 'addons', 'addon.jpg', true, false],
]

function esc(s) {
  return String(s).replace(/'/g, "''")
}

const values = items
  .map(
    ([n, name, desc, price, cat, cuisine, img, veg, best]) =>
      `  ('${id(n)}', '${esc(name)}', '${esc(desc)}', ${Number(price).toFixed(2)}, '${cat}', '${cuisine}', '/menu/${img}', ${veg}, ${best})`,
  )
  .join(',\n')

const sql = `-- Bodhi Coffee demo schema + seed (fresh project)
-- GST-inclusive menu prices

create table if not exists public.staff_pins (
  id uuid primary key default gen_random_uuid(),
  pin_hash text not null unique,
  role text not null check (role in ('kitchen', 'stock', 'owner')),
  display_name text not null
);

insert into public.staff_pins (pin_hash, role, display_name) values
  ('1111', 'kitchen', 'Ravi'),
  ('2222', 'stock', 'Priya'),
  ('3333', 'owner', 'Arjun')
on conflict (pin_hash) do nothing;

alter table public.staff_pins enable row level security;
drop policy if exists "Demo anon read staff_pins" on public.staff_pins;
create policy "Demo anon read staff_pins" on public.staff_pins for select to anon, authenticated using (true);

create table if not exists public.stock_items (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  category text not null,
  quantity numeric(10, 2) not null default 0 check (quantity >= 0),
  unit text not null,
  threshold_low numeric(10, 2) not null default 0,
  last_updated timestamptz not null default now()
);

create index if not exists stock_items_category_idx on public.stock_items (category);

insert into public.stock_items (name, category, quantity, unit, threshold_low, last_updated) values
  ('Single Origin Beans', 'Coffee', 8.00, 'kg', 3.00, now() - interval '1 day'),
  ('Espresso Blend', 'Coffee', 12.00, 'kg', 4.00, now() - interval '6 hours'),
  ('Cold Brew Concentrate', 'Coffee', 6.00, 'L', 3.00, now() - interval '4 hours'),
  ('Whole Milk', 'Dairy', 24.00, 'L', 10.00, now() - interval '3 hours'),
  ('Oat Milk', 'Dairy', 4.00, 'L', 5.00, now() - interval '2 hours'),
  ('Almond Milk', 'Dairy', 3.00, 'L', 4.00, now() - interval '5 hours'),
  ('Condensed Milk', 'Dairy', 8.00, 'tins', 3.00, now() - interval '1 day'),
  ('Whipping Cream', 'Dairy', 2.00, 'L', 3.00, now() - interval '1 hour'),
  ('Ceremonial Matcha', 'Tea & Matcha', 0.80, 'kg', 1.00, now() - interval '2 days'),
  ('Green Tea Bags', 'Tea & Matcha', 40.00, 'pcs', 20.00, now() - interval '3 days'),
  ('Chamomile Tea', 'Tea & Matcha', 25.00, 'pcs', 15.00, now() - interval '1 day'),
  ('Dark Chocolate', 'Syrups & Toppings', 3.00, 'kg', 2.00, now() - interval '8 hours'),
  ('Biscoff Spread', 'Syrups & Toppings', 2.00, 'kg', 1.50, now() - interval '12 hours'),
  ('Oreo Cookies', 'Syrups & Toppings', 5.00, 'packs', 3.00, now() - interval '6 hours'),
  ('Hazelnut Syrup', 'Syrups & Toppings', 2.00, 'bottles', 2.00, now() - interval '2 days'),
  ('Vanilla Syrup', 'Syrups & Toppings', 3.00, 'bottles', 2.00, now() - interval '1 day'),
  ('Caramel Syrup', 'Syrups & Toppings', 2.00, 'bottles', 2.00, now() - interval '4 hours'),
  ('Pistachio Paste', 'Syrups & Toppings', 1.00, 'kg', 1.00, now() - interval '3 days'),
  ('Sourdough Loaves', 'Bakery', 6.00, 'pcs', 4.00, now() - interval '5 hours'),
  ('Milk Bread', 'Bakery', 8.00, 'pcs', 4.00, now() - interval '7 hours'),
  ('Soft Tortillas', 'Bakery', 20.00, 'pcs', 15.00, now() - interval '1 day'),
  ('Frozen Fries', 'Food Prep', 10.00, 'kg', 5.00, now() - interval '2 days'),
  ('Button Mushrooms', 'Food Prep', 2.00, 'kg', 3.00, now() - interval '3 hours'),
  ('Eggs', 'Food Prep', 36.00, 'pcs', 24.00, now() - interval '6 hours'),
  ('Ice Cream Scoops', 'Frozen', 4.00, 'L', 2.00, now() - interval '1 day'),
  ('Paper Cups 12oz', 'Packaging', 200.00, 'pcs', 100.00, now() - interval '2 days'),
  ('Takeaway Boxes', 'Packaging', 80.00, 'pcs', 50.00, now() - interval '1 day')
on conflict (name) do nothing;

alter table public.stock_items enable row level security;
drop policy if exists "Demo anon read stock_items" on public.stock_items;
create policy "Demo anon read stock_items" on public.stock_items for select to anon, authenticated using (true);
drop policy if exists "Demo anon update stock_items" on public.stock_items;
create policy "Demo anon update stock_items" on public.stock_items for update to anon, authenticated using (true) with check (true);
drop policy if exists "Demo anon insert stock_items" on public.stock_items;
create policy "Demo anon insert stock_items" on public.stock_items for insert to anon, authenticated with check (true);

create table if not exists public.menu_items (
  id uuid primary key,
  name text not null unique,
  description text,
  price numeric(10, 2) not null check (price >= 0),
  category text not null check (category in ('Starters', 'Mains', 'Desserts', 'Beverages')),
  cuisine text not null check (cuisine in (
    'classics','signatures','chilled','blended','frappes','slow_brew','matcha','refreshers','dessert_drinks','food','addons'
  )),
  image_url text,
  is_veg boolean not null default true,
  is_bestseller boolean not null default false
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  table_id text not null,
  status text not null check (status in ('received', 'preparing', 'ready', 'completed')),
  created_at timestamptz not null default now(),
  special_instructions text
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  menu_item_id uuid not null references public.menu_items(id),
  quantity integer not null check (quantity > 0)
);

create index if not exists orders_created_at_idx on public.orders (created_at desc);
create index if not exists order_items_order_id_idx on public.order_items (order_id);

insert into public.menu_items (id, name, description, price, category, cuisine, image_url, is_veg, is_bestseller) values
${values}
on conflict (name) do nothing;

do $$
declare
  order_id uuid;
  day_offset int;
  hour_slot int;
begin
  if exists (select 1 from public.orders limit 1) then
    return;
  end if;

  for day_offset in 0..29 loop
    for hour_slot in 1..3 loop
      order_id := gen_random_uuid();
      insert into public.orders (id, table_id, status, created_at, special_instructions)
      values (
        order_id,
        'table-' || (4 + (day_offset % 8)),
        case when day_offset = 0 and hour_slot <= 2 then
          case hour_slot when 1 then 'received' else 'preparing' end
        else 'completed' end,
        date_trunc('day', now() - (day_offset || ' days')::interval)
          + ((10 + hour_slot * 3) || ' hours')::interval
          + ((day_offset * 5 + hour_slot * 7) % 40 || ' minutes')::interval,
        case when day_offset = 0 and hour_slot = 1 then 'Less sweet please' else null end
      );
      insert into public.order_items (order_id, menu_item_id, quantity) values
        (order_id, '${id(50)}', 1),
        (order_id, '${id(4)}', 1),
        (order_id, '${id(29)}', 1 + (hour_slot % 2));
      if day_offset % 4 = 0 then
        insert into public.order_items (order_id, menu_item_id, quantity)
        values (order_id, '${id(55)}', 1);
      end if;
      if day_offset % 5 = 0 then
        insert into public.order_items (order_id, menu_item_id, quantity)
        values (order_id, '${id(23)}', 1);
      end if;
    end loop;
  end loop;
end $$;

alter table public.menu_items enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

drop policy if exists "Demo anon read menu_items" on public.menu_items;
create policy "Demo anon read menu_items" on public.menu_items for select to anon, authenticated using (true);
drop policy if exists "Demo anon read orders" on public.orders;
create policy "Demo anon read orders" on public.orders for select to anon, authenticated using (true);
drop policy if exists "Demo anon write orders" on public.orders;
create policy "Demo anon write orders" on public.orders for all to anon, authenticated using (true) with check (true);
drop policy if exists "Demo anon read order_items" on public.order_items;
create policy "Demo anon read order_items" on public.order_items for select to anon, authenticated using (true);
drop policy if exists "Demo anon write order_items" on public.order_items;
create policy "Demo anon write order_items" on public.order_items for all to anon, authenticated using (true) with check (true);

do $$ begin
  alter publication supabase_realtime add table public.orders;
exception when duplicate_object then null; end $$;
do $$ begin
  alter publication supabase_realtime add table public.order_items;
exception when duplicate_object then null; end $$;
do $$ begin
  alter publication supabase_realtime add table public.stock_items;
exception when duplicate_object then null; end $$;
`

mkdirSync('supabase/migrations', { recursive: true })
writeFileSync('supabase/migrations/001_bodhi_full.sql', sql)
console.log('Wrote migration, items=', items.length)
