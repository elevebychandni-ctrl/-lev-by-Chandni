# élevé by Chandni — Design Bible

## Part 0 — Shared Foundation Layer

> **Scope correction:** the project contains **15 editions**, not 20. Routes `/editorial`,
> `/gallery`, `/atelier`, `/journal`, `/boutique`, `/garden`, `/blush`, `/lavender`,
> `/pistachio`, `/porcelain`, `/citrine`, `/riviera`, `/mocha`, `/pearl`, `/cherry`,
> plus the selector at `/`.

Every edition inherits from one shared substrate. Understanding this layer first
prevents mis-attributing a shared behaviour to an individual edition.

---

### 0.1 Content model — the invariant

All 15 editions render **identical copy** from `src/lib/content.ts`. Nothing is
edition-specific except presentation. This is the single most important fact in
the whole project: **every difference between editions is purely a design
difference.** A like-for-like comparison is therefore genuinely valid.

| Constant | Shape | Contents |
| --- | --- | --- |
| `CONTACT_EMAIL` | string | `info@elevebychandni.com` |
| `LOCATION_LINE` | string | `New Delhi · Virtual Worldwide` |
| `PHOTOS` | 22 keyed `SitePhoto` | all Chandni; `src` + `alt` |
| `SERVICES` | 3 × `ServiceTier` | index, id, name, essence, priceInr, priceUsd, description, 6 × includes, note, photo, flip |
| `BEYOND_MODULES` | 10 strings | etiquette / presence modules |
| `STANDALONE_LINE` | string | standalone offerings sentence |
| `JOURNEY` | 6 × `JourneyChapter` | index, title, body, 3 × points, photo |
| `RESULTS` | 6 strings | "what changes" outcomes |
| `WORDS` | 3 × `ClientWord` | quote + anonymised author |
| `NAV_LINKS` | 4 | The Founder / Services / The Journey / Words |
| `EDITIONS` | 15 × `Edition` | number, name, path, descriptor, mood, photo, palette triad |
| `MARQUEE_ITEMS` | 7 strings | Personal Style … Presence |

**Service tiers (fixed across all editions):**

- `01 · élevé Edit` — "For clarity" — ₹11,999 / $149 — photo `tealCorner`
- `02 · élevé Signature` — "For cohesion" — ₹21,999 / $249 — photo `archDress`
- `03 · élevé Privé` — "For everything" — ₹34,999 / $399 — photo `profilePinstripe`

**Journey chapters (fixed):** 01 The Conversation · 02 The Analysis ·
03 The Direction · 04 The Fitting · 05 The Styling · 06 The Elevation.

**Featured testimonial** (used as the pull-quote in most editions):
*"I stopped dressing to blend in. People began asking what changed — the
wardrobe was the least of it."* — Senior Communications Professional, New Delhi.

---

### 0.2 Photography library — 22 frames, all Chandni

Every image is a photograph of Chandni Ahuja herself. There are no client
photos, no stock, no models. All captions must therefore reference Chandni —
this is a hard brand rule.

| Key | Description | Character |
| --- | --- | --- |
| `heroMarble` | seated at marble table, blue panelled walls | authority, colour |
| `marbleSmile` | smiling, resting on marble | warmth |
| `libraryBook` | studying a large fashion volume | scholarship |
| `libraryGesture` | turning pages of an archive | motion, craft |
| `windowPortrait` | navy blazer, warm window light | trust, calm |
| `stoolBlue` | powder-blue shirt on brass stool | ease |
| `profilePinstripe` | editorial profile, grey pinstripe | precision |
| `floorPinstripe` | seated on studio floor, pinstripe | relaxed authority |
| `standingPinstripe` | oversized pinstripe, standing | structure |
| `bwChin` | B&W, chin on hand | intimacy |
| `warmPortrait` | close warm portrait, soft smile | approachability |
| `bwWall` | B&W leaning on panelled wall | poise |
| `archDress` | cobalt dress within ivory arch | drama, colour |
| `tealCorner` | brown pinstripe against sage walls | soft tailoring |
| `bwStanding` | B&W full portrait, arms folded | conviction |
| `bwStoolLean` | leaning back on studio stool, B&W | candour |
| `stoolFront` | squarely on brass stool, facing camera | directness |
| `stoolEar` | on stool, hand to ear, smiling | charm |
| `blueHair` | powder-blue shirt, hands through hair | movement |
| `archArms` | before ivory arch, arms crossed | composure |
| `stoolCrossed` | crossed legs on brass stool, smiling | relaxed elegance |
| `stoolWide` | confident on brass stool, pinstripe | presence |

**Aspect ratios in use across editions:** `3/4` (dominant portrait),
`4/5` (editorial portrait), `16/10` and `16/11` (landscape pauses / cards),
`21/9` (full-bleed cinematic pause, Journal only), `1/1` and circular/oval
crops (Porcelain, Citrine, Blush cameos).

---

### 0.3 Typography foundation

Loaded from Google Fonts in `index.html`; declared in `tailwind.config.ts`.

```
display : "Libre Baskerville", "Times New Roman", Times, serif
sans    : Inter, system-ui, -apple-system, sans-serif
script  : "Times New Roman", Times, "Libre Baskerville", serif  (+ font-style: italic)
```

- **Libre Baskerville** — transitional serif, large x-height, sturdy. Reads as
  literary and trustworthy rather than fashion-didone. It is *wide*, so every
  headline clamp in the project has been retuned downward and line-heights
  loosened (≥ 1.02, typically 1.04–1.12) to prevent collision.
- **Inter** — neutral grotesque. Used at `font-light` (300) almost everywhere for
  body, and at `font-normal` for micro-labels.
- **`.font-script`** — no cursive is loaded. Script accents are *italic Times New
  Roman*. This is a deliberate downgrade from the original Monsieur La Doulaise
  for legibility and to satisfy the "clear & elegant fonts" brief. It reads as a
  restrained italic signature rather than calligraphy.

**Custom letter-spacing tokens:**

- `tracking-micro` = `0.32em` — used on all uppercase eyebrows, captions,
  labels, buttons. This is the single most recognisable typographic signature of
  the whole project.
- `tracking-wide2` = `0.18em` — used on chips/interest pills.

**The `.eyebrow` component class:**
`font-sans text-[10px] font-normal uppercase tracking-micro text-cocoa md:text-[11px]`

**Body defaults:** `text-[15px] font-light leading-[1.9] text-cocoa` is the
canonical paragraph across nearly all editions. Journal alone raises to
`15.5px / 2.05` for long-form.

---

### 0.4 Base colour tokens (`tailwind.config.ts`)

| Token | Hex | Role |
| --- | --- | --- |
| `ivory` | `#F6F1E9` | primary warm ground |
| `linen` | `#FBF8F2` | lifted paper / cards |
| `parchment` | `#EDE6D9` | alternate section ground |
| `sand` | `#E3DACA` | image placeholder, bands, deeper ground |
| `espresso` | `#2C2118` | primary ink & dark rooms |
| `cocoa` | `#59473A` | secondary text |
| `taupe` | `#8F7D6C` | tertiary / strokes |
| `bronze` | `#A6885B` | the single accent — italics, numerals, rules, hovers |

Editions 06–15 override these with **inline hex constants** (`INK`, `SUB`,
`ACCENT` etc. declared at the top of each page file) rather than theme tokens.
Editions 01–05 use the Tailwind tokens directly.

**Global CSS behaviours (`index.css`):**

- `--radius: 0rem` — **everything is square by default.** Rounded corners are an
  explicit, per-edition deviation (Lavender, Citrine).
- Universal border colour: `hsl(26 30% 13% / 0.14)` — a 14% espresso hairline.
- `::selection` — bronze background, ivory text.
- Custom scrollbar: 10px, ivory track, `#CBBFA9` thumb with 3px ivory border,
  bronze on hover.
- `:focus-visible` — 1px bronze outline, 3px offset. Applies site-wide.
- `img` — drag disabled, non-selectable.
- `@media (pointer: coarse)` — `touch-action: manipulation` on all interactive
  elements (kills 300ms tap delay).
- `-webkit-tap-highlight-color: transparent`.
- `.grain` — fixed full-viewport SVG fractal-noise overlay at **5% opacity**,
  `z-90`, `pointer-events: none`, 220px tile. Applied by most editions. This is
  what stops the flat colours reading as "digital".
- `.hairline` / `.hairline-light` — 1px top borders at 14% espresso / 20% ivory.
- `.link-line` — underline that scales in from the left on hover over 0.55s with
  the shared cubic-bezier; `.link-line-active` inverts it (visible, retracts).
- `prefers-reduced-motion` — disables `scroll-behavior` and kills marquees.

---

### 0.5 Motion foundation (`src/components/site/motion.tsx`)

**The shared easing — the single most important motion decision in the project:**

```
EASE = [0.16, 1, 0.3, 1]
```

This is a strongly front-loaded ease-out. Elements leave fast and arrive slowly,
decelerating almost to a stop over the final third. It reads as *weight settling*
rather than *UI snapping*. Every animation in all 15 editions uses it. Used
consistently, it is the reason the whole project feels like one brand.

**`useSmoothScroll()`** — Lenis with `lerp: 0.09`, `wheelMultiplier: 1`.
Disabled entirely when `prefers-reduced-motion`. A module-level singleton so
`scrollToId()` can drive it.

**`scrollToId(id)`** — Lenis `scrollTo` with `offset: -8`, `duration: 1.6`;
falls back to native `scrollIntoView({ behavior: "smooth" })`.

**`stopScroll(bool)`** — locks Lenis for full-screen menus.

**Primitives:**

| Primitive | Behaviour | Values |
| --- | --- | --- |
| `Reveal` | fade + rise on scroll | `y: 20 → 0`, opacity `0 → 1`, `0.85s`, viewport margin `-10%`, `once` |
| `Lines` | masked line-by-line rise | each line `y: 112% → 0%` inside `overflow-hidden`, `0.95s`, `stagger 0.09` (overridable), `-12%` margin |
| `ParallaxImage` | scroll-linked drift + settle | `y: ±2.75% × speed` across `start end → end start`; img `scale 1.1 → 1.05`, opacity `0 → 1`, `1.2s` |
| `PhotoFade` | staggered entrance, no parallax | `scale 1.03 → 1`, optional `blur(8px) → 0`, `1.05s`, `-8%` margin |
| `Eyebrow` | numbered label in a `Reveal` | `y: 14` |
| `TextButton` | uppercase + `link-line` + arrow | arrow `translate-x-1.5` on hover, 500ms |
| `SolidButton` | filled/outlined primary | `whileTap scale 0.975`, colour transition 700ms |

**Marquee keyframe:** `translateX(0) → translateX(-50%)`, **72s linear infinite**.
Deliberately slow — it reads as drift, not scroll. Disabled under reduced motion.

**Motion philosophy enforced project-wide:**

1. **One-time only.** Every scroll reveal is `viewport={{ once: true }}`. Nothing
   re-animates on scroll-back. There are **zero** `repeat: Infinity` animations
   left in the codebase (the marquee CSS animation is the sole exception and it
   is a background texture, not a focal element).
2. **No preloader.** Removed entirely.
3. **Short distances.** Nothing travels more than ~26px or scales more than 1.06
   (down from 1.16–1.22 in the first build).
4. **Parallax is homeopathic.** ±2.75% total drift. Perceptible as depth, never
   as movement.
5. **Reduced-motion respected** at three levels: Lenis off, parallax `style`
   omitted, marquee killed by CSS.

---

### 0.6 Shared behavioural components

**`useEnquiry()` (`src/hooks/use-enquiry.ts`)** — the conversion engine for
every edition. Holds `name`, `email`, `message`, `interest`, `sent`. `submit()`
composes a `mailto:` with subject `Enquiry — {interest} — {name}` and a
pre-written body (`Dear Chandni, … Warmly, {name} {email}`), navigates to it,
and flips `sent`.

- `INTEREST_OPTIONS` = `["élevé Edit", "élevé Signature", "élevé Privé", "Not sure yet"]`
- **Every service CTA on every edition sets `interest` then scrolls to that
  edition's enquiry anchor.** This is the core conversion mechanic and it is
  identical across all 15.
- **Success state** is identical everywhere: script `merci`, "Your note is on its
  way.", fallback mailto, "Compose another" reset.

**Enquiry anchor ids per edition:** `enquire` (01), `g-enquire` (02),
`at-rsvp` (03), `j-write-back` (04), `b-enquire` (05), `gd-enquire` (06),
`bl-write` (07), `lv-enquire` (08), `pi-enquire` (09), `pc-enquire` (10),
`ct-enquire` (11), `rv-enquire` (12), `mc-enquire` (13), `pl-enquire` (14),
`ch-enquire` (15).

**`EditionSwitcher`** — fixed `bottom-4 right-4`, `z-150`. Collapsed pill shows
the current edition numeral in bronze italic + "Editions". Expands upward into a
264px opaque ivory panel with a **5×3 numbered grid**, "View all" link, and a
"Now — 02 · The Gallery" footer line. Deliberately opaque ivory so it stays
legible over dark and coloured editions. `min-h-[44px]` touch target, 40px grid
cells. Auto-closes on route change. Panel animates `y: 10 → 0`, `scale 0.98 → 1`,
0.35s. **This is a review tool and must be deleted from the final site.**

**Accessibility baseline shared by all editions:** semantic landmarks
(`header`/`main`/`section`/`footer`), real `<button>`/`<a>`, `aria-label` on
icon-only controls, `aria-expanded` on disclosures, `aria-hidden` on decorative
glyphs and duplicated marquee copies, alt text on all 22 photographs,
`focus-visible` bronze ring, `16px` mobile font-size on every input (prevents
iOS zoom-on-focus), `44px` minimum coarse-pointer targets.

**Performance baseline:** all 15 edition pages are `React.lazy` route-split in
`App.tsx`; `ScrollToTop` on navigation; every image `loading="lazy"
decoding="async"` except explicit `priority` heroes which get `loading="eager"`
+ `fetchPriority="high"`; `will-change: transform` on animating images only.

---

### 0.7 The selector page (`/`) — "the edition room"

Not an edition, but a designed artefact and worth documenting.

- **Ground:** ivory + `.grain`. Masthead with hairline. Sticky desktop preview.
- **Structure:** two groups — "01 — The signatures" (editions 1–5, *"Five
  structural directions"*) and "02 — The colour studies" (editions 6–15, *"Ten
  aesthetic moods — sage to cherry"*).
- **Row anatomy:** bronze italic numeral · oversized serif edition name
  (`clamp(1.7rem, 4.2vw, 3rem)`, goes bronze on hover) · arrow that drifts
  `translate-x-2` · descriptor paragraph · **three-dot palette swatch triad** ·
  mood label. Row background lifts to `linen/70` on hover.
- **Desktop:** sticky `3/4` preview at `col-start-9` crossfades on row hover
  (`AnimatePresence popLayout`, `scale 1.06 → 1`, 0.8s) with the active edition's
  number, name, swatches and mood beneath.
- **Mobile:** each row grows an inline `16/8` thumbnail instead.
- **Notable pattern worth keeping:** the **palette-swatch triad** as a
  wayfinding device, and the **hover-driven sticky preview** — both are strong,
  reusable ideas independent of the edition-selection use case.

---

### 0.8 Cross-edition structural census

Every edition covers the same eight content beats. What changes is the metaphor,
the order, and the presentation.

| Beat | Universally present | Notes |
| --- | --- | --- |
| Hero / opening | ✅ 15/15 | wildly divergent |
| Navigation | ✅ 15/15 | 01 full nav; others reduced bars/rails |
| Philosophy / manifesto | ✅ 15/15 | always carries "perception" line + é·le·vé definition |
| Founder / About | ✅ 15/15 | always quote + 2 paras + 4 credentials + script signature |
| Services (3 tiers) | ✅ 15/15 | the most varied section in the project |
| Beyond the wardrobe | ✅ 15/15 | 10 modules + standalone line |
| Journey (6 chapters) | ✅ 15/15 | the second-most varied section |
| "What changes" (6 results) | ✅ 15/15 | almost always a 2-col numbered list |
| Testimonials (3) | ✅ 15/15 | |
| Enquiry form | ✅ 15/15 | shared `useEnquiry` |
| Footer | ✅ 15/15 | bespoke per edition |
| FAQ | ❌ 0/15 | **does not exist anywhere in the project** |
| Packages/pricing table | ⚠️ | pricing lives inside Services; no separate table except Atelier's carte and Pearl's suites |
| Booking widget | ❌ 0/15 | conversion is mailto-only; no calendar anywhere |
| Gallery (pure image grid) | ⚠️ | only Edition 02 approaches one |

**Two genuine content gaps to resolve in the final build: there is no FAQ
section and no real booking mechanism anywhere in the 15 editions.**
