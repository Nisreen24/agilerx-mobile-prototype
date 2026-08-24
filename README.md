# AgileRx — Mobile Prototype

Phone-framed interactive pharmacy companion prototype (single self-contained `index.html`).

**Live demo:** https://nisreen24.github.io/agilerx-mobile-prototype/

## What's inside

Sign in + first-time pharmacy setup, patients, calendar with one-tap booking,
guided MedsCheck session (pre-flight, acknowledgement, worksheet, notify),
incident reporting (OCP AIMS — anonymous, de-identified), notifications,
billing and settings. All data and integrations are simulated — no backend.

## Run locally

    node serve.mjs 3001

then open http://localhost:3001

## Useful deep links

- `#patients` · `#calendar` · `#book` · `#incidents` · `#settings`
- `#session-medscheck-p1-s1` — guided MedsCheck session
- `#incident-new` — record a medication event
