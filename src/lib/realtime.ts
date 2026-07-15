import { supabase } from '@/lib/supabase'

type ChangeHandler = () => void

export function subscribeToOrders(onChange: ChangeHandler): () => void {
  const channel = supabase
    .channel('bodhi-orders-live')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'bodhi_orders' },
      () => onChange(),
    )
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'bodhi_order_items' },
      () => onChange(),
    )
    .subscribe()

  return () => {
    void supabase.removeChannel(channel)
  }
}

export function subscribeToStockItems(onChange: ChangeHandler): () => void {
  const channel = supabase
    .channel('stock-live')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'bodhi_stock_items' },
      () => onChange(),
    )
    .subscribe()

  return () => {
    void supabase.removeChannel(channel)
  }
}
