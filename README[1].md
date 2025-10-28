# MECASYST — mecasyst.solution (Vite + React + Tailwind)

Site vitrine FR/EN pour MECASYST INGENIERIE.

## Démarrage local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Déploiement sur Vercel
- Créez un compte sur https://vercel.com et importez ce dossier (Git recommandé).
- Vercel détecte Vite automatiquement.
- Ajoutez le domaine **mecasyst.solution** dans Project → Settings → Domains.
- DNS à poser chez le registrar :
  - **CNAME** `www` → valeur fournie par Vercel (ex: cname.vercel-dns.com)
  - **A** `@` (apex) → `76.76.21.21`
- Activez le HTTPS (auto) et définissez `www.mecasyst.solution` comme domaine principal si souhaité.
