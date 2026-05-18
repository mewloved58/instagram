# Cozy Circle

A private social app prototype inspired by Instagram polish and Setlog-like emotional real-time sharing.

## Stack
- Next.js + React
- TailwindCSS
- Framer Motion
- Supabase client ready (`lib/supabase.ts`)

## Run
```bash
npm install
npm run dev
```

## Environment
Create `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## Product pillars
- Invite-only private circles
- Real-time short moments (photo/video)
- Story-like emotional feed
- Daily memory archive vibe
- Cozy minimal Korean SNS aesthetic

## Improved UX in this version
- Circle-based filtering (all/family/besties/roommates)
- Emotional daily archive summary card
- Realtime share bottom-sheet composer with smooth motion
- Better reaction/comment visual hierarchy
