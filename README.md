# warkopmdj

Landing site and CMS scaffold for **PT Warkop Medan Indonesia** (Warkop Medan di Jakarta).

Built with Next.js 15 (App Router) + TypeScript.

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Pages

Public:

- `/` — home
- `/about` — history, vision, mission, ambition
- `/outlets` — outlet list and customer persona gallery
- `/events` — events and articles
- `/contact` — contact form
- `/partnership` — partnership & investment application
- `/login` — login (UI only)

CMS (UI only, no real auth yet):

- `/admin` — dashboard
- `/admin/events`, `/admin/articles`, `/admin/outlets` — list / new / edit
- `/admin/vision-mission`, `/admin/history` — edit copy
- `/admin/contact-list`, `/admin/partnership-list` — submission lists

## Code conventions

These rules are mandatory for every file:

1. **All styling is in `src/styles/styles.css`.** No inline `style={{...}}` props. CSS rules are written multi-line, never collapsed onto a single line.
2. **No `if/else`, no ternary (`? :`), no nested `if`, no `&&` short-circuit rendering.** Conditionals must be guard clauses (`if (...) return ...;`). For conditional JSX, use the `<RenderWhen when={...}>` component.
3. Reusable or non-trivial UI blocks are extracted into `src/components/<Name>/index.tsx`.
4. TypeScript strict mode. Props typed via `interface`. No `any`.

## Mock data

Backend is stubbed. Data lives in `src/data/*.ts`. Forms log payloads to the console.
