# Rebrand the Dashboard to the AgileRx Lavender Identity

Context: Our mobile app prototype's visual identity is final and approved. Update
the desktop dashboard to match it EXACTLY — this is a re-skin, not a redesign.
**Do not change any layout, spacing, structure, copy, or behavior. Colors,
typography, radii, and shadows only.** Replace the current teal/green system
wholesale, the same way it was replaced on mobile.

## 1. Core palette (locked — use these exact hex values)

| Token | Value | Use |
|---|---|---|
| Primary accent | `#8B7CF6` | Primary buttons, active states, links, selected controls, progress fills |
| Accent tint — fill | `#EEEBFC` | Selected segmented option bg, initials-avatar bg, "ready" pill bg |
| Accent tint — hover | `#E4DFFA` | Hover on tinted elements, underlines/dividers on lavender surfaces |
| Accent tint — chip border | `#CFC7F5` | Borders of selected chips, today-ring on calendar |
| Accent tint — header bg | `#F1EEFB` | Patient/identity header cards (tinted section backgrounds) |
| Heading text | `#2B2A44` | H1–H3, row titles, values |
| Body text | `#3A3956` | Paragraphs, long-form text |
| Secondary text | `#6E6C88` | Labels, sublabels, help text |
| Muted text | `#8A88A3` | Captions, timestamps, placeholders, eyebrows |
| Chevron/icon muted | `#C4C1D9` | Chevrons, disabled icons |
| Border — default | `#ECEAF5` | Card borders, row separators, input borders |
| Border — strong | `#DDD9F0` | Outline-button borders, hover borders |
| Page ground | `#F6F5FA` | App/page background |
| Tile fill | `#FDFCFF` | Soft-white action tiles |
| Surface | `#FFFFFF` | Cards, inputs |
| Hover surface | `#F8F7FC` | Row/button hover |
| Active/pressed surface | `#F1EFF9` | Row pressed state, neutral badge bg |

All shadows are **tinted, never gray/black**: `rgba(58, 50, 110, α)`.
- Card: `0 8px 24px rgba(58,50,110,0.07)`
- Tile: `0 2px 10px rgba(58,50,110,0.05), 0 1px 3px rgba(58,50,110,0.04)`
- Floating elements (nav/FAB): `0 12px 30px rgba(58,50,110,0.16)`
- Primary button glow: `0 10px 24px rgba(139,124,246,0.32)`

## 2. Hero / banner gradient (if the dashboard has a hero or welcome band)
Light warm-peach → lilac, with **dark text** on top (never white text):
```css
background:
  radial-gradient(120% 110% at 90% 20%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 55%),
  linear-gradient(100deg, #F6DCCB 0%, #EFDAD8 35%, #E3D8F3 68%, #D9D3F7 100%);
```
Glass panels on the gradient: `rgba(255,255,255,0.55)` bg, `1px solid rgba(255,255,255,0.85)` border, `backdrop-filter: blur(12px)`, radius 20px.

## 3. Semantic colors (unchanged roles — exact values)

| Meaning | Text/solid | Tint bg | Extra |
|---|---|---|---|
| Success / revenue / "Paid" | `#1db871` | `#eafaf3` | done-chip border `#bfe9d8` |
| Error / High severity / allergy | `#e0403d` | `#fdecec` | severity border `#f5b5b3` |
| Warning / Moderate / suggested | `#f6a723` (solid btn) · text `#b8791a` | `#fdf0dc` · card `#fdf5e6` | border `#f6d3a0` |
| Informational banner | `#2f6fd0` | `#e8f1fd` | ONLY for info banners |
| AI-drafted content | `#7c5cd6` | `#f1edfc` | border `#ddd3f6` — ONLY for AI chips/captions |

Hard rules: violet `#7c5cd6/#f1edfc` marks **AI-generated content only**; blue is
**informational banners only**; amber solid `#f6a723` is the accept-warning
action (e.g., "Accept & log"); never use these as decoration.

## 4. Typography
- Font stack everywhere: `"Segoe UI", -apple-system, "Helvetica Neue", Arial, sans-serif` — one family, no serif.
- Screen titles 20px/700 · section heads 15–16px/700 · row titles 14px/650 · body 13–13.5px · secondary 12–12.5px · eyebrows 11px/600, `letter-spacing: .12em`, uppercase, `#8A88A3`.
- Numbers use `font-variant-numeric: tabular-nums`.

## 5. Shape scale (radii)
- Cards 16px · tinted header cards 18px · action tiles 15px · banners/warn cards 14px · primary buttons 14px · inputs & secondary buttons 12px · small icon buttons 10px · chips & pills 999px · avatars 50%.

## 6. Component recipes
- **Primary button**: solid `#8B7CF6`, white 15px/700 text, radius 14, glow shadow, label ends with "→". Disabled: `opacity .45`, no shadow. Pressed: `scale(.98)`.
- **Outline button** (secondary/sign-out): white bg, `1px #DDD9F0` border, `#6E6C88` 700 text, radius 12.
- **Segmented control**: white container, `1px #ECEAF5`, radius 12, 4px padding; options radius 9; selected = `#EEEBFC` bg + `#8B7CF6` text; ~44px tall.
- **Chips**: white, `1px #ECEAF5`, `#6E6C88` 600 text, radius 999; selected/done variants per semantic table.
- **Status pills**: ready `#EEEBFC/#8B7CF6` · paid `#eafaf3/#1db871` · submitted/invited `#F1EFF9/#6E6C88`.
- **List rows**: 1px `#ECEAF5` separators inset past the avatar, trailing `#C4C1D9` chevron on tappable rows, hover `#F8F7FC`, pressed `#F1EFF9`. Avatars = initials on `#EEEBFC` with `#8B7CF6` text — **no photographs anywhere**.
- **Validation**: field error text/border `#e0403d`, 12px, appears only after touch; disabled primary + amber "**N items remaining** · item · item" line naming what's missing.

## 7. Do not
- Do not keep any teal/green as an accent (green stays ONLY as the success semantic).
- Do not restyle layout/structure/copy — colors, type, radii, shadows only.
- Do not introduce new colors, gray shadows, photos, or a second font.
- Do not use default framework palettes (Tailwind indigo/blue etc.).

When done, screenshot each dashboard screen and compare against this sheet
(exact hex, radii, shadow values) — at least 2 comparison rounds.
