# Bodhi Coffee — Sales Demo

Full QR ordering + kitchen + stock + owner demo for **Bodhi Coffee** (JP Nagar, Bengaluru).

Live: deploy URL after Vercel setup · Demo launcher: `/demo`

## Demo PINs

| Role   | PIN  |
|--------|------|
| Kitchen | `1111` |
| Stock   | `2222` |
| Owner   | `3333` |

## Stack

React · Vite · TypeScript · Tailwind · Supabase · Vercel

Prices are **GST-inclusive** (no extra GST line or restaurant charge).

## Local setup

```bash
cp .env.example .env   # set VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY
npm install
npm run dev
```

## Data isolation

Uses `bodhi_*` tables on Supabase so this demo does not share Crazy Monkey menu/orders/stock rows.
