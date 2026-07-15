# Bodhi Coffee — JP Nagar sales demo (5-minute pitch)

## Live URLs (fill after Vercel deploy)
- Demo launcher: `/demo`
- Customer QR: `/order/table-12`
- Staff: `/staff` — Kitchen `1111` · Stock `2222` · Owner `3333`

## Pitch flow
1. Open `/demo` on your laptop — show QR for Table 12.
2. Guest phone scans QR → Welcome → category menu → cart → place order.
3. Kitchen tablet (`1111`) sees the ticket arrive in realtime on the KDS.
4. Stock (`2222`) shows cafe inventory (beans, milk, matcha, syrups…).
5. Owner (`3333`) shows revenue trends, KPIs, Reports (GST already in prices).

## Notes
- All menu prices include GST — checkout shows item total only.
- Bodhi data lives in `bodhi_*` tables so Crazy Monkey (`public.menu_items` / `orders`) is untouched.
- Address on Welcome + Demo: 612, 13th Cross, 14th Main Rd, JP Nagar Phase 2, Bengaluru 560078.
