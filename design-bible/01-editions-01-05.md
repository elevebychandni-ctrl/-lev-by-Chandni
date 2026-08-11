# élevé by Chandni — Design Bible

## Part 1 — Editions 01–05 · "The Signatures"

These five are the **structural** directions. They differ in architecture, not
merely palette. Editions 06–15 are colour studies built on variations of these
skeletons.

---
---

# EDITION 01 — THE EDITORIAL

`/editorial` · Mood: *Ivory · Vogue spread* · Palette `#F6F1E9 / #A6885B / #2C2118`

**Unique in the project:** the only edition assembled from *separate reusable
components* (`Navbar`, `Hero`, `Manifesto`, `About`, `Services`, `Journey`,
`Testimonials`, `Enquire`, `Footer`) rather than one monolithic page file. It is
therefore the de-facto "main site" architecture and the easiest to promote.

## Direction

- **Creative direction.** A printed fashion quarterly translated to screen. Not a
  website *about* a stylist — a *magazine issue* whose subject happens to be
  Chandni. Numbered sections `( 01 ) — The Philosophy` through
  `( 06 ) — The Beginning` are the spine.
- **Core inspiration.** Vogue Italia / Porter / Kinfolk editorial spreads; the
  asymmetric 12-column magazine grid; pull-quotes; running heads; captions set
  beneath plates.
- **Mood board.** Warm uncoated paper. Bronze foil. A pinned contact sheet on a
  studio wall. A French dictionary open at *élevé*. A slow marquee of services
  like a masthead ticker.
- **Visual identity.** Ivory ground, espresso ink, one bronze accent. Zero
  radius. Hairlines everywhere. Oversized serif set against tiny 0.32em-tracked
  uppercase Inter. A 34vw script watermark bleeding off the left edge at 5%
  opacity.
- **Emotional feeling.** Considered, unhurried, quietly expensive. The feeling of
  turning a heavy page.
- **Brand personality.** The editor-in-chief. Cultured, decisive, warm but not
  familiar. Never shouts.
- **Luxury perception.** *Earned* rather than *declared*. Luxury comes from
  restraint, whitespace and typographic confidence — not gold, gradients or
  gloss. Highest "old-money" reading of the fifteen.
- **Target audience.** Senior professionals, founders, diplomats — 30–50, design-
  literate, sceptical of hard-sell. The audience that reads captions.
- **Editorial style.** Long-form magazine. Every section has a number, an
  eyebrow, a masked-reveal headline, a support paragraph in the opposite column.
- **Storytelling style.** Third-person editorial with first-person quotations.
  Belief → person → offer → method → proof → invitation.
- **UX philosophy.** Scroll is the only navigation that matters. The nav exists
  to reassure, not to route. Nothing is hidden behind interaction.
- **Motion philosophy.** Motion as *paper physics*. Lines rise from beneath a
  crop like type being set. Photographs settle. Nothing bounces, nothing loops.
- **Interaction philosophy.** Hover is a whisper: an underline scaling in, an
  arrow drifting 6px, a colour shift to bronze over 500–700ms.
- **Layout philosophy.** 12-column asymmetry. Content never centres except the
  Philosophy headline. Images and text alternate sides (`flip` on each service
  tier). Deliberate overhangs and negative offsets create collage depth.
- **Spacing philosophy.** Generous and rhythmic: `py-24` mobile → `lg:py-36`
  desktop per section; `space-y-28` → `lg:space-y-44` between service spreads.
  Whitespace is the primary luxury signal.
- **Photography philosophy.** Photographs are *plates*, always captioned, always
  cropped to `4/5` or `3/4`, always drifting fractionally on scroll. Two images
  are frequently paired with one overlapping and rotated.
- **Typography philosophy.** Extreme scale contrast — `clamp(2.6rem, 7.2vw,
  5.9rem)` headline against `10px` eyebrows. Italic Libre Baskerville in cocoa or
  bronze is the only emphasis device.
- **Component philosophy.** Almost no components in the SaaS sense. No cards. No
  panels. Content sits directly on paper, separated by hairlines.
- **Colour philosophy.** One ground, one ink, one accent. Sections alternate
  ivory ↔ `parchment/60`. Exactly two dark rooms (Enquire, Footer) for punctuation.
- **Conversion philosophy.** Soft, repeated, never interruptive. Nav CTA + hero
  primary + per-tier text CTA + dark enquiry spread + footer. No popups, no
  urgency, no discount language.
- **Accessibility philosophy.** Native semantics throughout; the only risk is
  small type at 10px.

## Colour system

| Role | Value |
| --- | --- |
| Primary ground | `ivory #F6F1E9` |
| Secondary ground | `parchment/60` (About, Testimonials, Beyond band) |
| Lifted paper | `linen #FBF8F2` (pinned notes, framed photo mounts) |
| Image placeholder | `sand #E3DACA` |
| Primary ink | `espresso #2C2118` |
| Body text | `cocoa #59473A` |
| List text | `espresso/90` |
| Accent | `bronze #A6885B` — italics, numerals, rules, hovers, selection |
| Dark rooms | `espresso` ground, `ivory` text, `ivory/85` body, `ivory/65–75` labels |
| Hairlines | `espresso/10–14`, `ivory/15–20` on dark |

- **Contrast strategy.** espresso-on-ivory ≈ 13:1. cocoa-on-ivory ≈ 7:1. Bronze
  is *never* used for body copy — only for italic display type ≥ 12px, numerals
  and 1px rules, which keeps it decorative rather than functional.
- **Luxury created.** The warmth of `#F6F1E9` over pure white is the single
  highest-leverage decision. It reads as paper stock. Bronze at ~1% surface area
  behaves like foil-stamping.
- **Strengths.** Timeless; photograph-flattering (all 22 images have warm
  neutral casts that sit inside the palette); infinitely extensible.
- **Weaknesses.** Low chromatic memorability — it will not be recognised from a
  thumbnail. Bronze-on-ivory at small sizes is borderline for WCAG AA.

## Typography

| Element | Spec |
| --- | --- |
| H1 (Hero) | `display`, `clamp(2.6rem, 7.2vw, 5.9rem)`, `font-medium`, `leading-1.08`, `tracking--0.01em`, `font-feature-display` (lnum, kern) |
| H2 (Philosophy) | `clamp(2rem, 5.4vw, 4.4rem)`, `leading-1.08`, centred, max-w-5xl |
| H2 (About) | `clamp(2.2rem, 6vw, 4.8rem)`, `leading-1.12` |
| H2 (Services) | `clamp(2.1rem, 5.2vw, 4.2rem)`, `leading-1.12`, `lg:col-span-7` |
| H2 (Journey) | `clamp(2.3rem, 5.6vw, 4.6rem)`, `leading-1.05`, `tracking--0.015em`, `lg:col-span-8` |
| H2 (Enquire) | `clamp(2.1rem, 5.2vw, 4.3rem)`, `leading-1.12` |
| H3 (Service name) | `clamp(1.9rem, 3.6vw, 3rem)`, **lowercase**, `leading-tight` |
| H3 (Chapter) | `clamp(1.7rem, 3vw, 2.5rem)` |
| Blockquote (featured) | `clamp(1.7rem, 3.6vw, 3.1rem)`, `leading-1.25`, `font-medium` |
| Secondary quotes | `display italic 16px`, `leading-1.7`, cocoa |
| Founder quote | `display italic clamp(1.35rem, 2.2vw, 1.9rem)`, `leading-1.5` |
| Body | `sans 15px font-light leading-1.9 cocoa`, `max-w-lg` |
| Support column | `sans 14px font-light leading-1.9` |
| List item | `sans 13px font-light leading-relaxed espresso/90` |
| Eyebrow | `sans 10px → md:11px uppercase tracking-micro cocoa` |
| Caption | `sans 10px uppercase tracking-micro cocoa`, `mt-3` |
| Micro-caption | `sans 9px uppercase tracking-micro` |
| Numeral (list) | `display 11–12px italic bronze`, zero-padded |
| Numeral (chapter) | `display xl italic bronze`; sticky plate numeral `display 7rem italic ivory` + drop-shadow |
| Button | `sans 11px uppercase tracking-micro`, `px-9 py-4` |
| Nav link | `sans 11px uppercase tracking-micro` + `link-line` |
| Mobile nav item | `display text-4xl` |
| Script | italic Times — signature `clamp(2.6rem, 4.5vw, 3.6rem)` bronze; footer lockup `0.34em` of the wordmark |
| Wordmark (footer) | `clamp(3.6rem, 10.5vw, 8.5rem)` lowercase, `leading-0.98`, `tracking--0.015em` |

- **Hierarchy quality — excellent.** Five clearly separated tiers (oversized
  display / mid display / italic quote / body / micro-label). No ambiguity
  anywhere.
- **Editorial treatment.** Italic is used semantically, not decoratively: it
  always marks the *emotional* half of a headline ("the most / *elevated* /
  version of you"). Numerals are always italic bronze and zero-padded.
- **Strengths.** The 10px/0.32em micro-label against 5.9rem display is a genuine
  signature. Lowercase service names are a sophisticated, non-obvious choice.
- **Weaknesses.** 10px uppercase at 0.32em is at the edge of comfortable
  legibility on mobile. Libre Baskerville's width means the hero clamp can only
  hold three short lines.

## Layout system

- **Container:** `max-w-[1500px]`, `px-6` → `md:px-10`.
- **Grid:** `lg:grid-cols-12`, `gap-8` desktop / `gap-10–16` stacked.
- **Signature column pairs:** `col-span-7` + `col-span-4 col-start-9` (headline
  vs. support); `col-span-5` + `col-span-6 col-start-7` (image vs. story);
  Journey uses `col-span-5` sticky + `col-span-6 col-start-7` scrolling.
- **Section rhythm:** `py-24` → `lg:py-36`. Hero `pt-32` → `lg:pt-40`.
- **Alignment:** left-aligned throughout; only the Philosophy headline and its
  eyebrow are centred — a deliberate single moment of symmetry.
- **Composition & balance.** Asymmetric but weighted: heavy display type on one
  side, a tall portrait on the other, with the gutter carrying the tension.
- **Visual rhythm.** eyebrow → headline → support → whitespace → content →
  hairline. Repeated six times, which is why the page feels *bound* rather than
  scrolled.
- **Negative space.** The dominant material. `mt-20 lg:mt-32` between a headline
  and its content is typical.
- **Reading order.** Perfectly linear and matches DOM order.
- **Desktop.** Full 12-col asymmetry, sticky journey plate, parallax active,
  script watermark at 24vw.
- **Tablet.** Collapses to single column at the `lg` breakpoint (1024px); grids
  become `sm:grid-cols-2` for module and result lists. Portrait columns capped at
  `max-w-[560px]` and centred — this is what prevents the iPad "stretched
  portrait" failure.
- **Mobile.** Single column, watermark grows to 34vw as background texture,
  journey plate hidden and replaced by an inline `16/10` image per chapter,
  `( scroll )` hint hidden, marquee retained.

## Section-by-section

### Navigation (`Navbar.tsx`)
- **Purpose.** Reassurance + persistent CTA.
- **Style.** Transparent over hero; after `scrollY > 32` it gains
  `bg-ivory/95`, `backdrop-blur-[2px]`, a hairline, and compresses padding
  `py-6/8 → py-4` over 700ms.
- **Left:** `élevé` at `text-2xl/26px` lowercase + `by Chandni` at 9px micro
  (hidden < sm). Whole lockup is a scroll-to-top button, goes bronze on hover.
- **Right (lg+):** four `link-line` nav buttons at `gap-10`, then a bordered
  "Enquire" button that inverts to solid espresso on hover over 700ms.
- **Mobile:** 44×44 two-line burger; the lines rotate ±45° into an X over 500ms.
- **Overlay:** full-screen ivory, `z-110`, body scroll + Lenis both locked.
  Five `display text-4xl` items each masked and rising `y: 110% → 0%` over 0.9s,
  staggered 0.07s. Contact block fades in at 0.55s. Menu closes, then waits 450ms
  before scrolling — so the reader sees the destination arrive.
- **Conversion.** CTA visible at all times without ever being sticky-aggressive.
- **Luxury 9 · Editorial 8 · Craft 9.**

### Hero (`Hero.tsx`)
- **Purpose.** State the promise; establish the paper.
- **Layout.** `grid-cols-12`; headline `col-span-7 pr-8`, portrait `col-span-5`.
- **Watermark.** `élevé` in script at **34vw** (`lg:24vw`), `espresso/[0.05]`,
  `-left-[4vw] bottom-[6%]`, `z-0`, parallax `x: 0 → -3%`.
- **Type.** eyebrow → `Lines` H1 (three lines, middle italic cocoa) → 15px
  paragraph `max-w-md` → CTA pair → `( scroll )`.
- **Photography.** `heroMarble`, `4/5`, eager + `fetchPriority="high"`, explicit
  `width/height` (prevents CLS), scale `1.1 → 1.03` over 1.4s, parallax `y: 0 → 6%`.
  Caption is a justified pair: `Chandni Ahuja` ←→ `Founder, élevé`.
- **Motion timeline.** eyebrow 0.10s → headline lines 0.20s (+0.09 stagger) →
  figure 0.25s → paragraph 0.50s → CTAs 0.62s → scroll hint 0.85s → marquee 0.90s.
  A ~1.2s composed entrance sequence.
- **Marquee.** Full-bleed, `border-y espresso/10`, `py-5`, 7 services in 11px
  micro-caps separated by bronze `·`, duplicated with the second copy
  `aria-hidden`, 72s loop.
- **Conversion.** Primary `SolidButton` → enquire; secondary `TextButton` → services.
- **Strengths.** The watermark + parallax + marquee triad is the most
  "designed" hero in the project. Text and image parallax at different rates
  (12% vs 6%) creates real depth.
- **Weaknesses.** Not full-viewport, so it reads as a spread rather than a
  statement — less immediately arresting than Gallery or Cherry.
- **Luxury 9 · Editorial 10 · Craft 9.**

### Philosophy / Manifesto (`Manifesto.tsx`)
- `( 01 ) — The Philosophy`, centred eyebrow and headline (the only centred
  headline on the page), three masked lines with *perception* in bronze italic.
- **Left `col-span-5`:** a pinned collage — `libraryBook` in a `linen` mount with
  `p-3 pb-14`, rotated `-2°`, drop shadow `0 18px 50px -30px`, caption inside the
  bottom margin; overlapped by a second `linen` note rotated `+2.5°`, 55% width,
  offset `-bottom-12 right-0`, carrying a script line *"dress for the life you
  are building"* signed *"— a note from Chandni"*.
- **Right `col-span-6 col-start-7`:** the é·le·vé dictionary entry
  (`display clamp(1.9rem,3.2vw,2.8rem)` + `/ adj.` italic), then two hairline-
  separated paragraphs, then the triad `Style. Image. Presence.` in bronze italic
  at `gap-6`.
- **Strengths.** The rotated pinned-paper collage is the single most tactile
  moment in Edition 01 and one of the best ideas in the project.
- **Weaknesses.** The `-bottom-12` overhang requires the following section's
  top padding to absorb it; fragile if content changes.
- **Luxury 9 · Editorial 10 · Craft 9.**

### About / The Founder (`About.tsx`)
- `bg-parchment/60`. `( 02 ) — The Founder`. Two-line masked H2.
- **Portrait pair.** `bwChin` at `4/5` and **88% width** (deliberately not
  full-bleed, leaving a slice of paper), captioned; overlapped by `warmPortrait`
  at 46% width, `-bottom-14`, inside a **6px linen frame** with a
  `0 24px 60px -32px` shadow — a physical print-in-a-mount effect.
- **Story column.** Founder quote in `display italic clamp(1.35rem,2.2vw,1.9rem)`
  → two 15px paragraphs → **credentials ledger**: four hairline rows,
  `justify-between`, 10px micro-label left / 13px value right, staggered 0.06s.
- **Signature.** `Chandni Ahuja` in script bronze at `clamp(2.6rem,4.5vw,3.6rem)`.
- **Trust building.** The credentials ledger is the strongest trust device in the
  project — it reads like a masthead colophon, not a CV.
- **Luxury 9 · Editorial 9 · Craft 9.**

### Services (`Services.tsx`)
- `( 03 ) — The Services`, H2 `col-span-7` + support `col-span-4 col-start-9`.
- **Three full spreads**, `space-y-28 lg:space-y-44`, alternating via `tier.flip`
  (image `col-start-1` or `col-start-8`, words the reverse).
- **Per spread:** italic bronze index + lowercase name on one baseline → price
  line `₹11,999 · $149` in 11px micro-caps with a bronze `·` → 15px description →
  `The experience —` label → **six hairline rows**, each with a zero-padded bronze
  italic numeral and 13px item, staggered 0.05s → italic display `note` →
  `TextButton` *"Enquire about Edit/Signature/Privé"* which preselects the tier.
- **Beyond the wardrobe band.** `border-y` + `bg-parchment/60`; ten modules in a
  `sm:grid-cols-2` hairline list, staggered 0.04s; `stoolEar` portrait
  `col-start-8`; standalone line in italic display.
- **Strengths.** The most *convincing* services presentation of the fifteen — it
  reads as three brochure spreads, and the numbered inclusion list makes value
  legible without a comparison table.
- **Weaknesses.** Very long (three full spreads + a band). No at-a-glance tier
  comparison; a skimmer cannot diff Edit vs Signature quickly.
- **Luxury 9 · Editorial 10 · Conversion 7 · Craft 9.**

### Journey (`Journey.tsx`)
- `( 04 ) — The Journey`. H2 `col-span-8` + support `col-span-3 col-start-10`.
- **Sticky plate, desktop only.** `col-span-5`, `sticky top-28`, `4/5`.
  `AnimatePresence mode="popLayout"` crossfades the chapter photo
  (`opacity 0 → 1`, `scale 1.08 → 1`, 0.9s). A `7rem` italic ivory numeral sits
  bottom-left with a `drop-shadow(0 2px 18px rgba(44,33,24,0.45))` and animates
  `y: 16 → 0` on change. Beneath: **six progress hairlines** that fill bronze
  cumulatively over 700ms.
- **Driver.** Six `IntersectionObserver`s with `rootMargin: "-42% 0px -42% 0px"` —
  the chapter occupying the middle 16% band of the viewport wins.
- **Chapters.** Hairline-separated, `pt-10 pb-12 lg:pb-16`, `Reveal y=34`.
  Italic bronze index + `clamp(1.7rem,3vw,2.5rem)` title; body indented
  `lg:pl-14` to align under the title; three point labels in 10px micro-caps.
- **Mobile.** Plate hidden; each chapter grows its own `16/10` `PhotoFade` with
  `object-top`.
- **"What changes".** Hairline + `What changes —` eyebrow, then six results in
  `md:grid-cols-2`, each with a zero-padded bronze italic numeral.
- **Strengths.** The best storytelling device in the project. Scroll-linked image
  swapping gives a six-chapter list narrative momentum without any user effort.
- **Weaknesses.** Desktop-only; mobile loses the whole mechanic. The `-42%`
  margin means very tall chapters can briefly leave nothing active.
- **Luxury 9 · Editorial 10 · Motion 10 · Craft 10.**

### Testimonials (`Testimonials.tsx`)
- `bg-parchment/60`. `( 05 ) — In Their Words`.
- **Featured quote** `col-span-7 pr-10`: a `5rem` bronze/70 italic opening quote
  glyph at `leading-0.6`, then the headline testimonial as **three masked lines**
  at `clamp(1.7rem,3.6vw,3.1rem)` — i.e. proof is typeset at headline scale.
  Attribution in 10px micro-caps.
- **Two supporting quotes** in `md:grid-cols-2`, hairline-topped, `display italic
  16px` cocoa.
- **Discretion line.** *"Shared with permission — names withheld for discretion"*
  — a luxury signal in itself.
- **Portrait** `marbleSmile`, `col-span-4 col-start-9`, `max-w-[480px]`.
- **Strengths.** Treating the testimonial as the headline is the correct
  editorial move; anonymity by role+city reads as discretion, not weakness.
- **Luxury 9 · Editorial 10 · Craft 9.**

### Enquire (`Enquire.tsx`)
- **The only dark spread** (`bg-espresso`) besides the footer — maximum contrast
  exactly where the decision happens.
- **Left `col-span-6`:** masked H2 with *conversation.* in bronze italic →
  48-hour promise → `Write directly` block with the email as a
  `clamp(1.25rem,2.4vw,1.9rem)` italic `link-line` → location → a desktop-only
  `archArms` photo inside an `ivory/15` 3px frame, captioned *"awaiting your note"*.
- **Right `col-span-5 col-start-8`:** four fields — name, email, **interest chip
  row**, note. Fields are borderless with an `ivory/35` bottom rule that goes
  bronze on focus over 500ms; `16px` on mobile → `15px` at `sm` (iOS zoom guard).
  Chips: selected = `border-bronze bg-bronze/15 text-ivory`; idle =
  `border-ivory/30 text-ivory/75`.
- **Submit.** `SolidButton light` — outlined ivory that inverts to solid ivory
  with espresso text on hover; full width on mobile.
- **Success.** Framed panel, script `merci` at `text-5xl` bronze, italic
  confirmation, mailto fallback, "Compose another".
- **Conversion strategy.** Zero-friction: 2 required fields, chips pre-filled
  from whichever service CTA the user pressed, message optional. `mailto:` means
  no backend, but also **no lead capture and no mobile-webmail guarantee** — the
  single biggest conversion weakness across all 15 editions.
- **Luxury 9 · Editorial 8 · Conversion 7 · Craft 8.**

### Footer (`Footer.tsx`)
- `bg-espresso`, `hairline-light` cap, `pt-20 lg:pt-28 pb-10`.
- **Oversized wordmark** `clamp(3.6rem,10.5vw,8.5rem)` lowercase ivory, with
  `by Chandni` absolutely positioned at `0.34em` of the wordmark size,
  `-bottom-[0.28em] left-[0.9em]`, in bronze script — a genuine logotype lockup,
  not two stacked lines.
- **Right:** two 10px-labelled columns — Pages (5 `link-line` buttons) and
  Correspondence (email + address).
- **Baseline:** copyright left, `Style. Image. Presence.` in bronze italic right.
- **Luxury 9 · Editorial 9 · Craft 9.**

## Component library (Edition 01)

| Component | Design | Interaction | Spacing | Animation | Luxury |
| --- | --- | --- | --- | --- | --- |
| `SolidButton` | square, `bg-espresso text-ivory`; `light` = `border-ivory/40` | hover → bronze (dark) / invert to ivory (light), 700ms | `px-9 py-4` | `whileTap scale 0.975`, 0.25s | 9 |
| `TextButton` | uppercase 11px + `link-line` + `→` | underline scales L→R 0.55s; arrow `+6px` 500ms | `gap-3` | — | 9 |
| Nav CTA | `border-espresso/30` | inverts to solid espresso | `px-6 py-2.5` | 700ms | 8 |
| Interest chip | square bordered pill | selected = bronze border + 15% bronze fill | `px-5 py-2.5` | 500ms | 8 |
| Input | borderless, bottom rule only | rule → bronze on focus | `py-4` | 500ms | 9 |
| Hairline row | `border-t espresso/14` | static | `py-3.5–5` | staggered `Reveal` | 9 |
| Numeral | bronze italic display, zero-padded | static | `gap-4–5` | — | 10 |
| Eyebrow | `( 0n ) — Title` 10px micro-caps | static | `mb-10 lg:mb-14` | `Reveal y=14` | 10 |
| Pinned note | `linen` + border + rotate + shadow | static | `p-3 pb-14` / `p-5` | `Reveal` | 10 |
| Photo mount | `border-[6px] border-linen` + deep shadow | static | — | `ParallaxImage` | 10 |
| Sticky plate | `4/5` + giant numeral + progress rules | scroll-driven | `top-28` | crossfade 0.9s | 10 |
| Marquee | full-bleed `border-y`, 11px micro-caps | none | `py-5`, `px-8` per item | 72s linear | 8 |
| Burger | two 1px lines, 44×44 | rotates to X | — | 500ms | 8 |
| Credentials row | label/value `justify-between` | static | `py-4` | stagger 0.06s | 10 |

## Photography (Edition 01)

- **Ratios.** `4/5` heroes and plates, `3/4` on smaller mounts, `16/10` mobile
  journey inlines.
- **Positioning.** Never symmetric. Always paired with an offset second image
  (`-bottom-12`, `-bottom-14`, 46–55% width) or set against a text column.
- **Scale.** Portraits are large — `col-span-5` of a 1500px container ≈ 590px.
- **Treatment.** No filters, no duotone, no overlays. The photographs are
  presented as *plates*: cropped, captioned, framed only by paper.
- **Overlays.** None whatsoever in Edition 01 — a deliberate purity that
  distinguishes it from Gallery (gradient) and Cherry (duotone).
- **Spacing.** `mt-3` caption gap; `mt-16 lg:mt-24` above image groups.
- **Strengths.** The mount-and-shadow treatment makes digital images feel like
  physical prints. Captions in micro-caps do enormous work for perceived quality.
- **Weaknesses.** Overlapping absolute-positioned pairs are the most fragile
  layout in the project.

## Motion design (Edition 01) — with rationale

| Moment | Spec | Why it works |
| --- | --- | --- |
| Navbar entrance | `y -24 → 0`, opacity, 1s, delay 0.2 | arrives *after* the hero eyebrow, so the page leads with content, not chrome |
| Navbar settle | padding + bg + border, 700ms | slow enough to read as a state, not a jump |
| Hero line reveal | `y 112% → 0%` masked, 0.95s, stagger 0.09 | mimics type being set; the mask means you never see a partial glyph |
| Hero image | `scale 1.1 → 1.03`, 1.4s | ends *above* 1.0 so the crop stays generous; the residual scale hides parallax edges |
| Text vs image parallax | 12% vs 6% | differential rates = genuine depth, not a slide |
| Watermark drift | `x 0 → -3%` | almost subliminal; gives the background its own plane |
| Marquee | 72s linear | slow enough that it reads as ambient texture rather than a ticker |
| Journey crossfade | `opacity + scale 1.08 → 1`, 0.9s, popLayout | the scale keeps the incoming image "arriving" rather than blinking |
| Journey numeral | `y 16 → 0`, 0.7s | slightly faster than the photo so the number leads |
| Progress hairlines | `bg` colour, 700ms | non-positional progress; no distracting movement |
| `link-line` | `scaleX 0 → 1`, origin right→left, 0.55s | drawn like a pen stroke, directional |
| Arrow drift | `translate-x-1.5`, 500ms | suggests forward motion without a hover card |
| Button tap | `scale 0.975`, 0.25s | tactile confirmation on touch where hover doesn't exist |
| Mobile menu | items masked `y 110% → 0%`, 0.9s, stagger 0.07 | the same typographic language as the hero — consistency |
| Menu → scroll delay | 450ms | lets the overlay clear so the destination is *seen* arriving |

- **Motion hierarchy.** Headlines (masked, 0.95s) > photographs (1.05–1.4s) >
  body (`Reveal`, 0.85s) > micro-labels (`y=14`). Larger elements move slower —
  the correct physical reading.
- **Emotional feeling.** Composure. Nothing is eager.

## UX analysis (Edition 01)

- **Journey.** Promise → belief → person → offer → method → proof → invitation.
  Textbook luxury-service order: trust is fully established before price appears.
- **Information hierarchy.** Six numbered sections; every section self-labels.
- **Scanning.** Supported by numerals, micro-caps and hairlines; a skimmer can
  read only the eyebrows and numerals and still understand the whole page.
- **Trust building.** Credentials ledger, 48-hour promise, discretion line,
  anonymised-but-specific attributions, "answered personally".
- **Attention control.** One bronze accent per viewport, at most. The eye always
  knows where to go.
- **CTA placement.** Nav (persistent) → hero (×2) → per-tier (×3) → dark spread →
  footer. Seven opportunities, none interruptive.
- **Cognitive load.** Low-to-moderate; the page is long but never dense.
- **Scroll experience.** Lenis `lerp 0.09` gives noticeable inertia. Combined
  with `-10%` viewport margins, content is already settled by the time it is read.
- **Mobile usability.** Strong — 16px inputs, 44px targets, capped portrait
  widths, sticky mechanics gracefully replaced.
- **Tablet.** The weakest breakpoint: the 1024px `lg` jump means an iPad in
  portrait (768px) gets the full mobile stack, which is correct but leaves the
  12-col compositions unseen at a very common size.
- **Accessibility.** Good semantics; risks are 10px micro-type and bronze-on-
  ivory small text.

## Performance (Edition 01)

- Lazy-loaded route; `Navbar`/`Hero` eager, everything else `loading="lazy"`.
- Hero has explicit `width={1200} height={1800}` — the only image in the project
  with intrinsic dimensions declared, so it is the only one fully CLS-proof.
- Animation cost: transform/opacity only, `will-change: transform` scoped to
  animating images. Two `useScroll` listeners (hero, per-image) — cheap.
- Six `IntersectionObserver`s in Journey — negligible.
- **Concerns.** 22 unoptimised `.jpg` files with no `srcset`, no AVIF/WebP, no
  responsive sizes. This is the project-wide performance ceiling.

## Art direction (Edition 01)

Editorial influence **10** · Fashion **9** · Luxury **9** · Magazine **10** ·
Brand perception: *established, quietly authoritative* · Premium **9** ·
Modernity **7** (intentionally timeless rather than current) · Elegance **10** ·
Minimalism **8** (rich, not sparse) · Confidence **9** · Emotion **8**.

## Scores — Edition 01

| Criterion | Score | Reasoning |
| --- | --- | --- |
| Luxury | 9.5 | restraint + warm paper + foil-like bronze; nothing shouts |
| Editorial | 10 | the reference standard; numbered sections, plates, pull-quotes |
| Creativity | 8 | superb execution of a known language rather than a new one |
| Originality | 7 | the "warm ivory editorial" genre is well-trodden |
| Typography | 9.5 | five clean tiers, semantic italics, extreme scale contrast |
| Motion | 9.5 | masked lines, differential parallax, sticky crossfade — all justified |
| Photography | 9 | mounts, shadows, captions, offsets; no gimmicks |
| UX | 9 | linear, scannable, low load |
| Conversion | 7 | seven CTAs but mailto-only and no tier comparison |
| Accessibility | 8 | strong semantics; 10px type and bronze contrast are the gaps |
| Performance | 7.5 | good code, unoptimised images |
| Storytelling | 9.5 | belief-first order; journey has real momentum |
| Elegance | 10 | the most elegant of the fifteen |
| Premium feel | 9.5 | |
| Craftsmanship | 9.5 | componentised, consistent, detail-obsessed |
| **Overall** | **9.1** | **the strongest all-round edition and the safest base architecture** |

---
---

# EDITION 02 — THE GALLERY

`/gallery` · Mood: *Espresso · Exhibition* · Palette `#2C2118 / #A6885B / #F6F1E9`

## Direction

- **Creative direction.** A museum exhibition. The site is a building; the
  sections are **rooms**; the content is **hung**. Six exhibits in Roman
  numerals, I–VI, each with a wall label.
- **Core inspiration.** Gallery wall labels, engraved plaques, white-mount
  framing, exhibition catalogues, the drama of a dark room with lit works.
- **Mood board.** A darkened hall. A single canvas under a spot. Ivory mounts.
  Brass plaques. A curtain being drawn.
- **Visual identity.** Inverted — espresso ground, ivory type. **Uppercase**
  display with `0.14–0.18em` tracking (Edition 01 is lowercase/sentence case).
  Roman numerals. Centred symmetry throughout.
- **Emotional feeling.** Reverence. Hushed, theatrical, slightly formal.
- **Brand personality.** The curator. Authoritative, ceremonial, a little cool.
- **Luxury perception.** *Declared* rather than earned — this is the most overtly
  "expensive-looking" edition. Darkness plus gold plus symmetry is the fastest
  route to perceived luxury, and also the most conventional.
- **Target audience.** Clients who want to feel they are buying something rare.
  Reads as high-ticket, appointment-only.
- **Editorial style.** Exhibition catalogue. Wall label → work → plaque.
- **Storytelling style.** Curatorial third-person. The visitor is *led through*.
- **UX philosophy.** Guided procession. Centre-aligned so the eye never wanders.
- **Motion philosophy.** **Unveiling.** The signature is the `clipPath` curtain
  — works are revealed as if a drape were drawn. Directional (`bottom`, `left`,
  `right`) so the drape has physicality.
- **Interaction philosophy.** Minimal, ceremonial. Buttons invert to ivory.
- **Layout philosophy.** Centred symmetry for labels and quotes; a rare
  **3-column divided grid** for services; a **horizontal scroll strip** for the
  journey. The most layout-varied edition of the five signatures.
- **Spacing philosophy.** Large and even. `py-24 lg:py-32`, `mb-14 lg:mb-20`
  under wall labels.
- **Photography philosophy.** Photographs are **works**. Mounted on ivory
  (`bg-ivory p-3`), full-bleed in the hero under a gradient, and always revealed
  by curtain.
- **Typography philosophy.** Uppercase + wide tracking = engraving. Roman
  numerals for exhibits, Arabic for chapters.
- **Component philosophy.** Two bespoke components carry the identity:
  `ExhibitLabel` and `Plaque`.
- **Colour philosophy.** One inversion trick: exhibit VI (the enquiry) flips to
  `bg-ivory text-espresso`. **The room where you act is the only lit room.**
- **Conversion philosophy.** "Acquire this experience" — purchase framed as
  acquisition. The light-room inversion is the strongest conversion device in the
  project.
- **Accessibility philosophy.** Good — but light-on-dark at `ivory/75–85` for
  micro-labels is the weakest contrast in the edition.

## Colour system

| Role | Value |
| --- | --- |
| Ground | `espresso #2C2118` |
| Curtain backing | `#1E160F` (deeper than espresso — reads as void) |
| Inverted room | `ivory #F6F1E9` (exhibit VI only) |
| Mount | `ivory` (`p-3 md:p-4` around works) |
| Primary text | `ivory` |
| Body | `ivory/85` |
| Labels | `ivory/70–80` |
| Accent | `bronze` |
| Rules | `ivory/15`, plaque borders `ivory/25`, buttons `ivory/40` |
| Hero scrim | `gradient-to-b from-espresso/70 via-espresso/30 to-espresso/90` |

- **Contrast strategy.** Ivory-on-espresso ≈ 13:1 — excellent. `ivory/70` labels
  ≈ 9:1 — still fine. Bronze on espresso ≈ 4.3:1 — acceptable at display sizes.
- **Luxury created.** Darkness is the fastest luxury shorthand; the ivory mounts
  and the three-stop gradient give it depth rather than flatness.
- **Strengths.** Photographs — especially the B&W frames — look dramatically
  better on espresso than on ivory. Memorable at thumbnail size.
- **Weaknesses.** Dark UI is fatiguing over a long page. The gradient hero risks
  looking generic. Least "warm" edition, which fights the brand's warmth.

## Typography

| Element | Spec |
| --- | --- |
| Hero H1 | `clamp(2.7rem, 11vw, 8rem)` **uppercase**, `leading-none`, `tracking-0.18em` — literally the word `élevé` |
| Hero script | `clamp(1.9rem, 4.5vw, 3rem)` bronze italic |
| Hero sub | `display italic clamp(1.1rem, 2.2vw, 1.5rem)` |
| `ExhibitLabel` roman | `display italic 14px bronze` |
| `ExhibitLabel` title | `clamp(1.9rem, 4.6vw, 3.6rem)` uppercase, `leading-1.1`, `tracking-0.14em` |
| Philosophy quote | `clamp(1.8rem, 4.6vw, 3.6rem)`, `leading-1.25` |
| Service name | `clamp(1.6rem, 2.4vw, 2.1rem)` **lowercase** |
| Price | `display clamp(1.5rem, 2.4vw, 2rem)` + 12px sans USD |
| Chapter title | `clamp(1.4rem, 2.4vw, 1.8rem)` uppercase `tracking-0.1em` |
| Chapter numeral | `display 3xl italic bronze` |
| Testimonial | `display italic clamp(1.3rem, 2.8vw, 2rem)`, `leading-1.5`, centred |
| Exhibit VI H2 | `clamp(2rem, 5.4vw, 4rem)` uppercase `tracking-0.12em` |
| Footer wordmark | `text-2xl` uppercase `tracking-0.3em` |
| Body | `15px / 1.9` ivory/85; card body `14px / 1.85` |
| Plaque | `sans 10px uppercase tracking-micro ivory/85` |

- **Hierarchy quality — very good**, with one flaw: the hero H1 is the *brand
  name*, not a proposition. The value promise is demoted to a 1.5rem italic line.
- **Editorial treatment.** Roman/Arabic numeral split; wide-tracked uppercase as
  engraving; a 10px `h-10 w-px` bronze rule dropped under every wall label.
- **Strengths.** The uppercase-wide-tracked system is instantly distinctive and
  is the strongest *alternative* typographic voice to Edition 01.
- **Weaknesses.** Uppercase Libre Baskerville at 8rem with 0.18em tracking is
  wide — it only survives because the word is five characters.

## Layout system

- Container `max-w-[1400px]`; enquiry narrows to `max-w-[900px]`; testimonials to
  `max-w-3xl`; modules to `max-w-3xl`.
- **Hero:** `h-[100svh]` (svh, not vh — correct for mobile browser chrome),
  full-bleed, centred flex column, bottom bar with location and `( scroll to enter )`.
- **Services:** `lg:grid-cols-3` with `lg:divide-x lg:divide-ivory/15` and
  `lg:gap-0` — columns literally separated by wall lines, `lg:px-10` with first/
  last flush. **The only true 3-up comparison layout in the project.**
- **Journey:** full-bleed horizontal `snap-x snap-mandatory` strip,
  `w-[82vw] sm:w-[400px]` frames, `gap-8`, `no-scrollbar`, with ← → buttons that
  scroll `min(85% of width, 460px)`.
- **Header:** fixed, `bg-espresso/95`, hairline, `z-120`.
- **Alignment:** centred for all labels, quotes and the philosophy; left-aligned
  inside service columns and journey frames.
- **Desktop.** Three-column services with divide rules; horizontal strip visible
  ~3 frames at a time.
- **Tablet.** Services stack to one column with `gap-16`; strip shows ~1.5
  frames at 400px each.
- **Mobile.** Frames at 82vw with snap — genuinely good touch UX; captions and
  plaques centre; "All editions" link hidden below `sm`.

## Section-by-section

### Hero — "the opening wall"
- Full-bleed `bwStanding` with `object-top`, `immediate` curtain from bottom
  (`inset(0% 0% 100% 0%) → inset(0)`, 1.3s) plus `scale 1.06 → 1`.
- Three-stop gradient scrim so the centre stays legible while top and bottom
  darken.
- Timeline: eyebrow 0.70s → H1 0.35s → script 1.10s → sub 1.35s → bottom bar
  1.70s. **Note the deliberate non-linearity: the wordmark arrives before its own
  eyebrow finishes**, which makes the name feel like it was already there.
- **Strengths.** The most cinematic opening of the fifteen. `100svh` + full-bleed
  portrait + gradient is genuinely arresting.
- **Weaknesses.** Sells the *brand*, not the *offer*. A first-time visitor learns
  what the company is called before learning what it does.
- **Luxury 10 · Editorial 8 · Craft 9.**

### Exhibit I — Philosophy
Centred wall label → the perception line as a `clamp(1.8rem,4.6vw,3.6rem)`
quotation with an explicit `<br />` → 15px centred paragraph → a `Plaque`
carrying the é·le·vé definition → the triad separated by `h-px w-8` ivory rules.
The plaque-as-definition is a genuinely clever content/metaphor fit.
**Luxury 9 · Editorial 9 · Craft 9.**

### Exhibit II — Founder
`bwWall` inside an **ivory mount** (`bg-ivory p-3 md:p-4`) at `3/4` — the mount
is what makes it read as a hung work. Plaque beneath with name/role/city. Right
column repeats the Edition 01 founder structure (quote → 2 paras → 4 credential
rows on `ivory/15` rules → script signature).
**Luxury 9 · Editorial 9 · Craft 9.**

### Exhibit III — The Collection (Services)
- Three columns divided by vertical rules. Each: curtain-revealed `3/4` photo
  (staggered `i * 0.15`) → caption → **name + essence on one baseline** ("élevé
  Edit" / *"For clarity"*) → large display price with small sans USD → 14px
  description → six numbered rows on hairlines → italic note → **full-width
  outlined button "Acquire this experience"** that inverts to ivory on hover.
- **Annexe.** Centred sub-label, ten modules in `sm:grid-cols-2`, standalone line
  in italic.
- **Strengths.** The best *comparison* layout in the project — three tiers side
  by side, identical row order, prices at the same optical height. This is the
  only edition where a buyer can genuinely diff the tiers at a glance.
- **Weaknesses.** Three long columns are heavy on tablet where they stack into a
  very long scroll. "Acquire" is arguably too transactional for the brand.
- **Luxury 9 · Editorial 8 · Conversion 9 · Craft 9.**

### Exhibit IV — The Journey (horizontal)
Six frames hung left-to-right. Each photo in a 2.5px ivory mount, curtain from
**left** with `(i % 3) * 0.14` stagger. Large italic bronze index + uppercase
title, 14px body, point labels. Nav arrows are 44×44 outlined squares.
- **Strengths.** The only horizontal journey in the project. Snap + 82vw on
  mobile is excellent touch UX and physically mirrors "walking a gallery wall".
- **Weaknesses.** Horizontal scroll hides content from scanners and from SEO
  weight; desktop users may not notice the arrows.
- **Luxury 9 · Editorial 9 · Motion 8 · Craft 9.**

### Exhibit V — In Their Words
Three centred quotes at `clamp(1.3rem,2.8vw,2rem)` separated by a single bronze
`·` glyph with `mt-14` breathing room. Then "What changes —" and six results in
`md:grid-cols-2` on `ivory/15` rules.
**Luxury 8 · Editorial 9 · Craft 8.**

### Exhibit VI — The Beginning (inverted room)
- `bg-ivory text-espresso`, narrowed to `max-w-[900px]`, centred header.
- Fields on `espresso/35` rules; name/email in `sm:grid-cols-2`; chips fill solid
  espresso when selected; centred `SolidButton` with `sm:px-14`; a "or write
  directly" fallback line beneath.
- **Why the inversion works.** After five dark rooms, arriving in a lit one is a
  physical relief. It signals "this is the exit / the action" without a single
  word of instruction. **This is the single best conversion idea in the project.**
- **Luxury 9 · Conversion 10 · Craft 9.**

### Footer
Centred column: uppercase wide-tracked `élevé`, script `by Chandni`, email,
location, then "All editions" + copyright. Simple, ceremonial, symmetrical.
**Luxury 8 · Craft 8.**

## Component library (Edition 02)

| Component | Notes |
| --- | --- |
| `Curtain` | `clipPath` reveal from bottom/left/right, 1.3s, + `scale 1.06 → 1`; `immediate` prop for above-fold; `#1E160F` backing |
| `ExhibitLabel` | roman + uppercase title + optional sub + `h-10 w-px` bronze drop-rule; centred, `mb-14 lg:mb-20` |
| `Plaque` | `border-ivory/25`, `px-5 py-3`, 10px micro-caps — used for definitions and attributions |
| Ivory mount | `bg-ivory p-2.5–4` wrapper — the "framed work" device |
| Outlined button | `border-ivory/40` → inverts to `bg-ivory text-espresso`, 500ms |
| Strip arrows | 44×44 squares, same inversion |
| Divided grid | `lg:divide-x lg:divide-ivory/15` |
| Snap frame | `w-[82vw] sm:w-[400px] snap-start shrink-0` |

## Photography (Edition 02)

Ratios `3/4` throughout plus one full-bleed hero. **Mounts are the defining
treatment** — ivory padding around every framed work. The hero is the only image
with an overlay (three-stop gradient). B&W frames (`bwStanding`, `bwWall`) are
deliberately chosen for the hero and founder — they read as archival prints on a
dark wall. Photographs are never rotated or offset here; everything is squared
and hung. **Strength:** dark ground makes the imagery sing. **Weakness:** the
gradient scrim is the one generic move.

## Motion design (Edition 02)

| Moment | Spec | Why |
| --- | --- | --- |
| Curtain | `clipPath inset` 1.3s + `scale 1.06 → 1` | reveals *area* rather than opacity — reads as physical drapery |
| Directional curtains | bottom (hero), left (journey), default (works) | direction gives the drape a mechanism |
| Curtain stagger | `i * 0.15` services, `(i % 3) * 0.14` journey | modulo means each visible row starts fresh |
| Hero sequence | 0.35 → 0.70 → 1.10 → 1.35 → 1.70s | a 2s ceremonial entrance; the longest in the project |
| Strip scroll | `scrollBy` `min(85%, 460px)`, native smooth | lands on a snap point, never mid-frame |
| Button inversion | 500ms bg+color | slow enough to read as a light coming on |
| Room inversion | none (instant on scroll) | the *absence* of transition is what makes it feel architectural |

**Motion hierarchy.** Curtains (1.3s) > hero copy (1.0–1.2s) > `Reveal` (0.85s).
**Emotional feeling.** Ceremony, anticipation.

## UX analysis (Edition 02)

- **Journey.** Name → belief → curator → collection → method → proof → act.
- **Trust building.** Credentials, plaques, discretion line, "answered personally".
- **Attention control.** Excellent — centred symmetry plus one lit element per
  viewport.
- **Conversion.** Strongest of the five signatures: 3-up comparison + "Acquire" +
  the inverted room.
- **Cognitive load.** Moderate — dark UI plus horizontal scroll asks more of the
  reader.
- **Navigation clarity.** Weakest of the five — the fixed header has no section
  links at all, only "All editions" and "Enquire". A visitor cannot jump to
  Services.
- **Mobile.** Very good: `100svh` hero, 82vw snap frames, stacked services.
- **Accessibility.** Arrows have `aria-label`; strip is keyboard-scrollable;
  `ivory/70` micro-labels are the contrast floor.

## Performance (Edition 02)

Hero eager + priority; everything else lazy. `clipPath` animation is
GPU-composited but more expensive than opacity — acceptable at this count.
Horizontal strip renders all six frames at once (no virtualisation needed at n=6).
Same unoptimised-JPEG ceiling.

## Art direction (Edition 02)

Editorial **8** · Fashion **8** · Luxury **10** · Magazine **7** (catalogue, not
magazine) · Premium **10** · Modernity **7** · Elegance **9** · Minimalism **7** ·
Confidence **10** · Emotion **7** (cool rather than warm).

## Scores — Edition 02

| Criterion | Score | Reasoning |
| --- | --- | --- |
| Luxury | 10 | the most expensive-*looking* edition; dark + gold + symmetry |
| Editorial | 8 | catalogue rather than magazine; less typographic play than 01 |
| Creativity | 9 | the exhibition metaphor is carried through every component |
| Originality | 8 | dark luxury is common; the curtain + inverted room are not |
| Typography | 8.5 | strong uppercase system, but H1 is the brand not the offer |
| Motion | 9 | the curtain is the best single reveal mechanic in the project |
| Photography | 9.5 | mounts + dark ground + B&W selection — best image presentation |
| UX | 7.5 | no section navigation; horizontal scroll hides content |
| Conversion | 9 | 3-up comparison, "Acquire", inverted action room |
| Accessibility | 7.5 | dark UI + `ivory/70` labels + horizontal scroll |
| Performance | 7.5 | `clipPath` cost, unoptimised images |
| Storytelling | 8.5 | procession works, but the offer arrives late |
| Elegance | 9 | |
| Premium feel | 10 | highest of the fifteen |
| Craftsmanship | 9 | |
| **Overall** | **8.7** | **the luxury and conversion benchmark; weakest on navigation** |

---
---

# EDITION 03 — THE ATELIER

`/atelier` · Mood: *Parchment · Studio* · Palette `#EDE6D9 / #8F7D6C / #2C2118`

## Direction

- **Creative direction.** A stylist's working studio. Not a finished magazine —
  the **process**: prints pinned to a board with paper tape, an index rail down
  the left wall, a services menu set like a restaurant carte, a working ledger of
  the method.
- **Core inspiration.** Couture ateliers, mood boards, drafting tables,
  contact sheets, French restaurant menus with dotted leader lines, tailors'
  spec cards.
- **Mood board.** Parchment. Masking tape. Pins. A vertical brass rail. A menu
  card. Handwriting in the margin.
- **Visual identity.** `parchment #EDE6D9` ground — warmer and *dustier* than
  ivory. Outlined "drafted" numerals with a 1px taupe stroke and 13% fill.
  Rotated, taped prints. Dotted leader rules. Vertical writing-mode text.
- **Emotional feeling.** Craft, intimacy, being let backstage.
- **Brand personality.** The maker. Skilled, hands-on, precise, a little French.
- **Luxury perception.** *Artisanal* luxury — the value of hand-work, not
  scarcity. The most human-feeling of the five signatures.
- **Target audience.** Clients who want to understand the craft; process-curious,
  detail-oriented buyers.
- **Editorial style.** Working document. Numbered sections `01–06` with French
  labels (*la carte des services*, *ce qui change*, *r.s.v.p.*).
- **Storytelling style.** Show-your-work. The method is presented as a ledger.
- **UX philosophy.** A persistent **index rail** — the only edition with
  always-visible non-linear navigation. You can see where you are (bronze
  numeral) and jump anywhere.
- **Motion philosophy.** **Wipe and pin.** Prints slide open like drawer files
  (`clipPath` from left/right) and settle from a rotated, lifted state onto the
  board.
- **Interaction philosophy.** Quiet. Rail numerals change colour and their
  underline fills bronze. Text buttons and dotted-leader menu rows.
- **Layout philosophy.** Two systems in one page: a **free collage** (hero, with
  absolutely positioned rotated prints) and a **strict ledger** (method, with a
  responsive `64px/1fr → 88px/96px/1fr → 12-col` grid).
- **Spacing philosophy.** Tighter than 01/02 — `py-20 lg:py-28`. Deliberately
  more worked, less airy. The carte narrows to `max-w-[900px]`.
- **Photography philosophy.** Photographs are **prints on a board** — mounted on
  linen with `p-2.5 pb-9`, taped, rotated ±1–3°, with handwritten script notes in
  the bottom margin.
- **Typography philosophy.** Lowercase serif section titles ("the *philosophy*",
  "la carte *des services*") with the second half italic bronze. Outlined
  numerals as drafting marks. Script used as *marginalia*.
- **Component philosophy.** The richest bespoke component set of the five:
  `WipeImage`, `MountedPrint`, `SectionHead`, index rail, dotted-leader menu row.
- **Colour philosophy.** Parchment base with `linen/70` (carte) and `sand/50`
  (RSVP) rooms — three warm neutrals differentiating sections without any hue
  change. Zero dark rooms.
- **Conversion philosophy.** "R.S.V.P." and "Request an appointment" — framed as
  *invitation*, not purchase. The most exclusive-feeling CTA language.
- **Accessibility philosophy.** Rail buttons have `aria-label`s; inputs use
  `aria-label` (no visible labels) — a small regression vs Editions 01/02.

## Colour system

| Role | Value |
| --- | --- |
| Ground | `parchment #EDE6D9` |
| Carte room | `linen/70` |
| RSVP room | `sand/50` |
| Cards / mounts | `linen #FBF8F2` |
| Tape | `sand/90` |
| Ink | `espresso` |
| Body | `cocoa` |
| Numeral stroke | `taupe #8F7D6C` (SectionHead) / `bronze` (method) |
| Numeral fill | `espresso/[0.13]` / `espresso/[0.16]` |
| Accent | `bronze` |
| Rules | `espresso/15–30`, dotted `espresso/40` |

- **Contrast strategy.** espresso-on-parchment ≈ 11.6:1. Slightly lower than
  ivory but still strong. Outlined numerals are decorative and `aria-hidden`.
- **Luxury created.** Three warm neutrals stacked (parchment / linen / sand)
  creates a *material* palette — it feels like different papers rather than
  different colours.
- **Strengths.** The warmest, most tactile palette of the fifteen. Photographs on
  linen mounts against parchment look like real prints.
- **Weaknesses.** Low contrast *between* the three grounds — section changes are
  subtle to the point of near-invisible on a poor screen. No dark room means no
  dramatic punctuation anywhere on the page.

## Typography

| Element | Spec |
| --- | --- |
| Hero H1 | `clamp(2.5rem, 6.4vw, 4.8rem)`, `leading-1.1`, with *presence.* italic bronze |
| `SectionHead` numeral | `clamp(3.6rem, 9vw, 7rem)`, `leading-0.8`, `espresso/[0.13]`, `-webkit-text-stroke: 1px #8F7D6C` |
| `SectionHead` title | `clamp(1.8rem, 4vw, 3rem)` **lowercase**, `leading-1.05`; second word italic bronze |
| Philosophy statement | `clamp(1.7rem, 3.6vw, 2.9rem)`, `leading-1.3` |
| Carte item name | `clamp(1.6rem, 3.4vw, 2.4rem)` lowercase, `shrink-0` |
| Carte price | `display clamp(1.2rem, 2.4vw, 1.7rem)` + 11px USD beneath |
| Method numeral | `clamp(2.2rem, 4.5vw, 3.4rem)` italic, `espresso/[0.16]`, `stroke 1px bronze` |
| Method title | `clamp(1.45rem, 2.6vw, 2rem)` |
| Founder quote | `display italic clamp(1.25rem, 2.2vw, 1.75rem)`, `leading-1.55` |
| Whispered quote | `display italic 15.5px`, `leading-1.7` |
| RSVP script | `clamp(2.6rem, 5vw, 3.4rem)` bronze |
| Print note | `font-script clamp(1.05rem, 1.6vw, 1.35rem)` cocoa |
| Rail | `9px uppercase tracking-micro`, `[writing-mode: vertical-rl]` + `rotate-180` |
| Body | `15px / 1.9` cocoa; carte `14.5px / 1.9`; method `14px / 1.85` |
| Chip | `11px uppercase tracking-wide2`, `border-espresso/25`, `px-4 py-2` |

- **Hierarchy quality — very good.** The outlined numeral is a *third* type layer
  that carries no reading weight but enormous structural weight.
- **Editorial treatment.** French section names; lowercase titles with italic
  bronze second halves; dotted leader lines between item and price.
- **Strengths.** `-webkit-text-stroke` outlined numerals are the most original
  typographic device in the whole project.
- **Weaknesses.** `-webkit-text-stroke` is non-standard (works in all current
  browsers, but it is a prefix). Lowercase-everything can read as informal.

## Layout system

- Container `max-w-[1380px]` (`px-6 md:px-12`); carte `max-w-[900px]`; RSVP card
  `max-w-xl`; whispered words `max-w-3xl`.
- **Index rail.** `fixed left-0 top-0 h-screen w-[92px]`, `border-r`, `z-120`,
  `lg:flex` only. Three zones: rotated vertical link "élevé — atelier n°03" at
  top, six numeral buttons at centre (`gap-6`), rotated "New Delhi" at bottom.
  Active numeral = bronze + bronze `h-px w-5` underline.
- `main` is offset `lg:pl-[92px]`.
- **Mobile header.** `sticky top-0`, `bg-parchment/95`, wordmark + "All editions"
  + "R.S.V.P." button.
- **Hero.** `lg:min-h-[100svh]`, `grid-cols-12`; text `col-span-5`, board
  `col-span-6 col-start-7` with a fixed height (`440px → sm:520px → lg:600px`)
  containing three absolutely positioned prints at 58% / 44% / 44% width.
- **Method ledger grid.** `grid-cols-[64px_1fr]` → `sm:grid-cols-[88px_96px_1fr]`
  → `lg:grid-cols-12` (`1 / 2 / 6 / 3`). A genuinely sophisticated three-stage
  responsive grid.
- **Carte row.** `flex items-baseline gap-4` with a `flex-1 border-b border-dotted`
  spacer between name and price — the classic menu leader.
- **Desktop.** Rail + collage + 12-col ledger.
- **Tablet.** Rail disappears at `lg`, replaced by the sticky bar; ledger uses the
  3-column `sm` form; prints board keeps its 520px height.
- **Mobile.** Ledger collapses to `64px/1fr` with points wrapping full-width
  underneath; method thumbnails hidden below `sm`.

## Section-by-section

### Index rail (Navigation)
The only persistent non-linear navigation in the project. Six
`IntersectionObserver`s at `rootMargin: "-45% 0px -45% 0px"` drive the active
state. Vertical writing-mode text at top and bottom frames it like a spine.
- **Strengths.** Always shows position; jumps anywhere; occupies zero horizontal
  reading space; the vertical text is a real design flourish.
- **Weaknesses.** Numerals alone (01–06) are not self-describing — you must hover
  for the `aria-label`. Desktop only.
- **Luxury 9 · Editorial 9 · UX 9 · Craft 10.**

### 01 — The Studio (Hero)
Left: eyebrow "Atelier n°03" → H1 → 15px paragraph → `SolidButton` "Request an
appointment" + `TextButton` "View la carte".
Right: **three taped prints** — `stoolCrossed` (58%, `-2.5°`, note *"the studio,
morning"*, priority), `bwStoolLean` (44%, `+2°`, wipes from right, delay 0.18),
`archArms` (44%, `-1°`, note *"fittings"*, delay 0.36). Each has a `w-16 h-5`
`sand/90` tape strip at `-top-2.5` rotated `-3°`.
- **Strengths.** The most characterful hero in the project. The layered rotated
  prints communicate "stylist" faster than any headline could.
- **Weaknesses.** Fixed-height board means the composition is not fluid; at some
  widths the prints crowd.
- **Luxury 9 · Editorial 9 · Craft 10.**

### 02 — Philosophy
`SectionHead 02 the *philosophy*`. Left `col-span-7`: statement + two paragraphs.
Right `col-span-4 col-start-9`: a **bordered linen card** holding the é·le·vé
definition and, under a hairline, `Style. Image. Presence.` in bronze script.
The only card-like object in the edition, and it earns its place as a "pinned
reference note". **Luxury 8 · Editorial 9 · Craft 9.**

### 03 — The Stylist
`windowPortrait` as a single `MountedPrint` rotated `-1.5°` with the script note
*"Chandni Ahuja — the stylist"* — signature-as-caption. Right column: quote, one
condensed paragraph, four credential rows, script signature.
**Luxury 9 · Editorial 9 · Craft 9.**

### 04 — La Carte des Services
- Narrowed to `max-w-[900px]` — the menu is a *smaller object* than the page.
- Each item: name → **dotted leader** → price stack (₹ large display, $ small
  sans). Then `01 — For clarity` in bronze italic, description, **inclusions in
  `sm:grid-cols-2` with bronze em-dash bullets**, italic note, and a `TextButton`
  *"Reserve Edit / Signature / Privé"*. Hairline between items.
- **Beyond the wardrobe — supplements**: ten bordered chips, staggered 0.03s.
- **Strengths.** The dotted-leader menu row is the most elegant price
  presentation in the project — price is present but never shouted. "Reserve" is
  perfect brand language.
- **Weaknesses.** No images inside the carte (the tier photos are unused here),
  so it is text-dense. No 3-up comparison.
- **Luxury 10 · Editorial 10 · Conversion 7 · Craft 10.**

### 05 — The Method
Six ledger rows. Each: outlined bronze-stroked italic numeral · a small
wipe-revealed thumbnail (`h-28 w-24`, hidden below `sm`, alternating wipe
direction by row parity) · title + body · point labels stacked vertically on
desktop, wrapped horizontally on mobile. Then `ce qui change — what changes` and
the six results in `md:grid-cols-2`.
- **Strengths.** The densest, most *informational* journey treatment — reads like
  a real working document. Alternating wipe direction is a lovely touch.
- **Weaknesses.** Least emotional journey of the five; thumbnails are small.
- **Luxury 8 · Editorial 10 · Craft 9.**

### 06 — R.S.V.P.
- `bg-sand/50`. Opens with the **whispered words**: three testimonials at
  `max-w-md` positioned left / right (`ml-auto text-right`) / centre
  (`mx-auto text-center`) — a staggered, conversational arrangement unique to
  this edition.
- Then a **centred bordered linen card** (`max-w-xl`, `p-8 md:p-12`): script
  `r.s.v.p.` → "Request a private appointment" → 48-hour line → **centre-aligned
  fields** (a distinctive choice — `text-center` on every input) → centred chips
  → full-width `SolidButton` "Send your request" → email + location line.
- **Strengths.** "R.S.V.P." reframes the form as an invitation. The card-on-sand
  treatment makes it feel like a physical reply card. Centre-aligned inputs are
  unusual and genuinely elegant here.
- **Weaknesses.** Centre-aligned inputs hurt scannability for long entries.
  `aria-label`-only fields (no visible `<label>`) is an accessibility regression.
- **Luxury 10 · Conversion 8 · Craft 9.**

### Footer
Three-part flex: copyright · `Style. Image. Presence.` in script bronze · "All
editions". Minimal, correct. **Luxury 7 · Craft 8.**

## Component library (Edition 03)

| Component | Notes |
| --- | --- |
| `WipeImage` | `clipPath` from left/right + opacity, 1.25s (opacity 0.6s) + `scale 1.06 → 1` |
| `MountedPrint` | linen + border + `p-2.5 pb-9 md:p-3 md:pb-11` + shadow; enters `y 26 → 0` and `rotate ±3° → rotate`; tape strip pseudo-element; optional script note in the bottom margin |
| `SectionHead` | outlined numeral + lowercase title + italic bronze second half + `hairline mt-6` |
| Index rail | fixed 92px, six numerals + fill underline, vertical writing-mode caps |
| Dotted leader row | `flex-1 border-b border-dotted border-espresso/40` between name and price |
| Chip | `border-espresso/25 px-4 py-2` 11px `tracking-wide2` |
| Linen card | `border-espresso/20 bg-linen p-7` |
| RSVP card | `border-espresso/30 bg-linen p-8 md:p-12`, centred |
| Centred input | bottom rule + `text-center` |
| Em-dash bullet | bronze `—` + 13px item |

## Photography (Edition 03)

Ratios `3/4` universally; method thumbnails are fixed `h-28 w-24` / `lg:h-36
max-w-[150px]`. **Rotation is the signature** (±1–3°). Mounts have asymmetric
padding (`pb-9` vs `p-2.5`) so there is a visible bottom margin for the
handwritten note — exactly like a real darkroom print. Tape strips add the final
physical cue. No overlays, no filters.
- **Strengths.** The most tactile photographic treatment in the project.
- **Weaknesses.** Rotation + absolute positioning is the most fragile layout;
  small method thumbnails waste good photography.

## Motion design (Edition 03)

| Moment | Spec | Why |
| --- | --- | --- |
| `WipeImage` | `clipPath` L/R 1.25s + opacity 0.6s + `scale 1.06 → 1` | the shorter opacity means the frame appears before the image resolves — like paper sliding out |
| `MountedPrint` | `y 26 → 0`, `rotate ±3° → target`, 1.2s | the print *lands* on the board and settles into its pinned angle |
| Stagger 0 / 0.18 / 0.36 | hero board | three prints pinned in sequence, not at once |
| Alternating wipe | `i % 2` left/right in the method | prevents six identical reveals |
| Rail active | colour + underline, 500ms | positional feedback with no movement |
| `TextButton` | underline + arrow drift | consistent with 01 |

**Motion hierarchy.** Prints (1.2s) > wipes (1.25s) > `Reveal` (0.85s).
**Emotional feeling.** Handwork. Things being placed, not rendered.

## UX analysis (Edition 03)

- **Journey.** Studio → belief → maker → menu → method → invitation.
- **Information hierarchy.** Best-labelled of the five (numbered rail + numbered
  section heads = you always know where you are).
- **Navigation clarity.** Best on desktop, average on mobile.
- **Conversion.** Softest language ("Reserve", "R.S.V.P.", "Request") — highest
  perceived exclusivity, lowest urgency.
- **Cognitive load.** Moderate-to-high; the method ledger is dense.
- **Trust building.** Process transparency *is* the trust device here — showing
  the method builds more confidence than any testimonial.
- **Mobile.** Good; the collage board keeps a fixed height so it never collapses,
  and the ledger degrades cleanly.
- **Tablet.** The `lg` rail cutoff means iPad portrait loses the rail; the sticky
  bar covers it adequately.

## Performance (Edition 03)

Hero print eager; everything else lazy. Six `IntersectionObserver`s. `clipPath` +
`rotate` animation is slightly heavier than 01. Rotated elements can produce
subpixel text softness on some browsers (the prints contain only images and a
script note, so impact is minimal).

## Art direction (Edition 03)

Editorial **10** · Fashion **9** · Luxury **9** · Magazine **8** · Premium **9** ·
Modernity **6** (deliberately analogue) · Elegance **9** · Minimalism **5** (rich
and layered by design) · Confidence **8** · Emotion **10** (the warmest).

## Scores — Edition 03

| Criterion | Score | Reasoning |
| --- | --- | --- |
| Luxury | 9 | artisanal rather than opulent; "Reserve"/"R.S.V.P." language is superb |
| Editorial | 9.5 | French section names, carte, ledger, marginalia |
| Creativity | 10 | the richest set of original devices in the project |
| Originality | 9.5 | outlined numerals, taped prints, dotted leaders, vertical rail |
| Typography | 9.5 | three-layer hierarchy including a purely structural numeral layer |
| Motion | 9 | wipe + land + settle is physically coherent |
| Photography | 9.5 | rotation, tape, asymmetric mounts, script notes |
| UX | 9 | the index rail is the best navigation in the project |
| Conversion | 7.5 | beautiful language, but no comparison view and no price prominence |
| Accessibility | 7 | `aria-label`-only inputs; centred fields; desktop-only rail |
| Performance | 7 | rotation + clipPath + unoptimised images |
| Storytelling | 9.5 | show-your-work is the most persuasive narrative strategy |
| Elegance | 9.5 | |
| Premium feel | 9 | |
| Craftsmanship | 10 | the most meticulously detailed edition |
| **Overall** | **9.0** | **the most original and most craft-forward; weakest on conversion mechanics** |

---
---

# EDITION 04 — THE JOURNAL

`/journal` · Mood: *Linen · Long-form* · Palette `#FBF8F2 / #A6885B / #2C2118`

## Direction

- **Creative direction.** A **letter from Chandni**. Not a website — a bound
  personal essay, set in one 720px column, addressed to "Dear reader", signed off
  "Yours, in good taste". The most radical structural departure in the project.
- **Core inspiration.** Fine-press books, literary journals, Substack at its most
  refined, drop caps, fleurons, colophons, chapter title pages.
- **Mood board.** Cream book stock. A drop cap in gold. Three centred dots
  between passages. A signature in ink. A single full-bleed plate breaking the
  column.
- **Visual identity.** `linen #FBF8F2` — the lightest, cleanest ground of the
  fifteen. One column. Centred chapter heads with Roman numerals. Bronze drop
  cap. Everything else is typography.
- **Emotional feeling.** Intimacy. Being written *to*, personally.
- **Brand personality.** The confidante. Warm, candid, literate, first-person.
- **Luxury perception.** *Intellectual* luxury — the luxury of attention and
  time. This is the only edition where luxury comes from what is **absent**.
- **Target audience.** Readers. Considered decision-makers who research
  thoroughly before enquiring. Lowest-friction for a sceptical buyer.
- **Editorial style.** Long-form literary. Four Roman chapters
  (I The woman writing to you · II What I offer you · III How our work unfolds ·
  IV What clients write back) plus an unnumbered opening and a sign-off.
- **Storytelling style.** **First person, throughout.** This is the only edition
  where Chandni speaks as "I" — a fundamentally different and much warmer voice.
- **UX philosophy.** Reading, not browsing. No navigation at all beyond the
  masthead. The scroll *is* the experience.
- **Motion philosophy.** The quietest of the fifteen. `PhotoFade` with `blur`
  and `Reveal` only. **No parallax, no clipPath, no sticky, no marquee, no
  hover-heavy interaction.** Photographs breathe in through a soft blur; that is
  the entire motion vocabulary.
- **Interaction philosophy.** Almost none — and that is the point. Interaction
  would break the reading spell.
- **Layout philosophy.** One `max-w-[720px]` column, centred, for the entire
  page. Exactly one deliberate violation: a full-bleed image that escapes via
  `left-1/2 w-screen -translate-x-1/2`.
- **Spacing philosophy.** Typographic, not sectional. `mt-24 lg:mt-28` before
  chapters, `my-14 lg:my-16` around fleurons, `mt-7` between paragraphs. Rhythm
  is set by line-height (`2.05`), not by padding blocks.
- **Photography philosophy.** Photographs are **pauses for breath**, not
  illustrations. They sit between passages, always centred, always captioned
  centrally, always entering through blur.
- **Typography philosophy.** The purest of the fifteen. Body type at
  `15.5px / 2.05` is set for genuine sustained reading. The drop cap at `4.4em`
  with `leading-0.72` is the single strongest typographic gesture in the project.
- **Component philosophy.** Two components: `Chapter` and `Fleuron`. Nothing else.
- **Colour philosophy.** One ground, one ink, one accent. **Zero section
  backgrounds.** Zero dark rooms. Absolute chromatic discipline.
- **Conversion philosophy.** Earned, not engineered. The CTA is *"Write back"*
  and the copy explicitly says *"If any line of this letter felt like it was
  written about you — it probably was."* This is the best-written conversion
  moment in the project.
- **Accessibility philosophy.** The most readable edition by a wide margin — long
  measure, generous leading, high contrast, no motion dependency.

## Colour system

| Role | Value |
| --- | --- |
| Ground | `linen #FBF8F2` (only edition using linen as the page) |
| Ink | `espresso` |
| Body | `cocoa` |
| List / emphasis | `espresso/90` |
| Accent | `bronze` — drop cap, chapter romans, fleurons, blockquote rules, em-dashes, signature |
| Rules | `espresso/15`, blockquote `border-l border-bronze/50` |

- **Contrast.** cocoa on linen ≈ 7.6:1; espresso on linen ≈ 14:1. Best in project.
- **Luxury created.** The near-white linen plus a single bronze accent reads as
  fine paper. Restraint is the entire strategy.
- **Strengths.** Nothing competes with the words. Photographs pop against the
  lightest ground. Prints beautifully.
- **Weaknesses.** Least visually distinctive; from a thumbnail it is "a document".
  No colour memory at all.

## Typography

| Element | Spec |
| --- | --- |
| H1 | `clamp(2.7rem, 8vw, 4.8rem)`, `leading-1.05`, centred, with *well.* in italic |
| Script sub | `clamp(1.7rem, 3.6vw, 2.3rem)` bronze — "a letter from Chandni" |
| `Chapter` roman | `display italic 13px bronze` — "Chapter I" |
| `Chapter` title | `clamp(1.7rem, 4.2vw, 2.7rem)`, centred, + `h-9 w-px` bronze drop-rule |
| **Body** | `sans 15.5px font-light leading-[2.05] cocoa` — the loosest leading in the project |
| **Drop cap** | `first-letter: float-left, mr-3, mt-1, font-display, text-[4.4em], font-medium, leading-[0.72], text-bronze` |
| Blockquote | `display italic clamp(1.2rem, 2.6vw, 1.55rem)`, `leading-1.65`, `border-l border-bronze/50 pl-6` |
| Service name | `clamp(1.55rem, 3.4vw, 2.15rem)` lowercase, centred |
| Service price | `11px uppercase tracking-micro` + lowercase italic essence |
| Journey run-in | `display 17px font-medium not-italic` — "01 · The Conversation." inline with the body |
| Testimonial | `display italic clamp(1.1rem, 2.4vw, 1.4rem)`, `leading-1.7` |
| Sign-off script | `clamp(2.6rem, 5.5vw, 3.6rem)` bronze |
| Write-back H2 | `clamp(1.6rem, 3.6vw, 2.3rem)` with *back.* italic bronze |
| Fleuron | `display 16px tracking-[0.7em] bronze` — `· · ·` |
| Colophon | `9px uppercase tracking-micro` |

- **Hierarchy quality — excellent within a deliberately narrow range.** Because
  everything sits in one column, hierarchy is carried by *scale and centring*
  alone, and it works.
- **Editorial treatment.** Drop cap, fleurons, Roman chapters, run-in heads
  (`01 · The Conversation.` set inline at 17px display before the body text),
  border-left blockquotes, a colophon. This is real book typography.
- **Strengths.** The `2.05` leading at `15.5px` is genuinely comfortable for
  1,500+ words — no other edition attempts sustained reading. The run-in journey
  heads are a beautiful, space-efficient solution.
- **Weaknesses.** The drop cap only appears once (the opening paragraph); a
  second one at Chapter I would strengthen the conceit. No display moment above
  4.8rem, so the page never *shouts* — by design, but it costs impact.

## Layout system

- **The whole page is `max-w-[720px] px-6`.** Masthead and colophon match.
- **Masthead:** three-part baseline flex — `Vol. I — New Delhi` · `élevé journal`
  · `All editions`.
- **The single full-bleed violation:** `relative left-1/2 w-screen
  -translate-x-1/2` wrapping `libraryGesture` at `16/10 → md:21/9`. Because it is
  the *only* violation on the page, it lands with real force.
- **Vertical rhythm:** title page `pt-20 lg:pt-28` → fleuron → opening → photo →
  Chapter I → … → sign-off → write-back → colophon.
- **Alignment:** body left-aligned (correct for reading); chapter heads, service
  heads, sign-off, form and captions all centred.
- **Desktop / tablet / mobile:** effectively identical. **This is the only
  edition that is fully responsive by construction** — a single column cannot
  break. The only breakpoint work is `sm:aspect-[3/4]` on inline photos and
  `md:aspect-[21/9]` on the full-bleed.
- `overflow-x-clip` on the root guards the `w-screen` escape.

## Section-by-section

### Masthead (Navigation)
Three items, one hairline, no CTA, no scroll behaviour. **Purpose: establish
"this is a publication" and get out of the way.** The lack of a persistent CTA is
a deliberate conversion sacrifice in service of the reading experience.
**Luxury 8 · Editorial 10 · UX 6 · Craft 8.**

### Title page
Eyebrow "A letter on style, image & presence" → H1 *On dressing well.* →
script "a letter from Chandni". Then a fleuron. This is a **book title page** and
it is instantly legible as one. **Luxury 9 · Editorial 10 · Craft 9.**

### The opening (drop cap)
"Dear reader — how we dress shapes perception, long before we speak." The
philosophy content is delivered as the *opening of a letter* rather than a
manifesto section — a much more natural placement. Second paragraph carries the
é·le·vé definition inline as italic. **This is the most elegant integration of
the brand definition across all fifteen editions.**
**Luxury 10 · Editorial 10 · Craft 10.**

### Chapter I — The woman writing to you (About)
First-person credentials written as prose rather than a ledger ("I am a certified
fashion stylist with a Master's in political communications…"). The founder quote
is **rewritten in the first person** — *"I simply help you decide what yours will
say."* — the only edition to adapt the copy voice.
- **Strengths.** Far warmer and more persuasive than the ledger treatments.
- **Weaknesses.** Loses the scannable credential list; a skimmer gets nothing.
- **Luxury 9 · Editorial 10 · Trust 9 · Craft 9.**

### Chapter II — What I offer you (Services)
Three centred blocks separated by fleurons. Each: bronze italic index → lowercase
name → `₹11,999 · $149 — for clarity` in micro-caps → description → six em-dash
inclusions → italic note → centred `TextButton` *"Ask me about Edit"*.
Beyond-the-wardrobe is folded into a **single running sentence** with the ten
modules lowercased and joined by ` · ` — a genuinely clever compression.
- **Strengths.** "Ask me about…" is the warmest CTA phrasing in the project.
- **Weaknesses.** No images at all in the services section; no comparison;
  price is small and easy to miss. Weakest commercial presentation of the fifteen.
- **Luxury 9 · Editorial 9 · Conversion 6 · Craft 9.**

### Full-bleed pause
`libraryGesture`, `21/9` on desktop, captioned *"Chandni, in the archive — the
study never ends"*. The only moment the column breaks. **Luxury 10 · Craft 10.**

### Chapter III — How our work unfolds (Journey)
Six paragraphs with **run-in heads**: `01 · The Conversation.` in 17px display
medium, then the body flowing on the same line. No images, no cards, no numbers
column. Then "By the end, I promise you will notice —" and the six results as
em-dash lines.
- **Strengths.** The most space-efficient journey treatment; reads as genuine
  explanation rather than a feature list. The lead-in sentence before the results
  ("I promise you will notice") converts a bullet list into a promise.
- **Weaknesses.** Zero visual interest; six similar paragraphs is a lot of grey.
- **Luxury 8 · Editorial 10 · Craft 8.**

### Chapter IV — What clients write back (Testimonials)
Three `border-l border-bronze/50 pl-6` blockquotes. Discretion line beneath.
The chapter title reframes testimonials as **correspondence** — perfectly
consistent with the letter conceit. **Luxury 9 · Editorial 10 · Craft 9.**

### The sign-off
*"If any line of this letter felt like it was written about you — it probably
was. Write back to me."* → `Yours, in good taste` → script signature.
**This is the single best-written conversion paragraph in the entire project.**
It converts by *recognition* rather than persuasion.
**Luxury 10 · Conversion 9 · Craft 10.**

### Write back (Enquiry)
Hairline → centred H2 *Write **back.*** → `max-w-md` centred form with
centre-aligned fields, centred chips, `SolidButton` **"Post your letter"**,
contact line. Then a **P.S.** carrying the standalone-services sentence in
italic — the most natural placement of that awkward line anywhere in the project.
- **Strengths.** "Post your letter" and the P.S. are perfect metaphor
  maintenance. Narrow `max-w-md` form feels personal, not administrative.
- **Weaknesses.** `aria-label`-only inputs; centred fields; no visible labels.
- **Luxury 10 · Conversion 8 · Craft 10.**

### Colophon (Footer)
A single 9px centred line: `© 2026 élevé by Chandni — journal edition · Style.
Image. Presence.` The most restrained footer in the project and exactly right.
**Luxury 9 · Editorial 10 · Craft 9.**

## Component library (Edition 04)

| Component | Notes |
| --- | --- |
| `Chapter` | centred roman (13px italic bronze) + title + `h-9 w-px` bronze drop-rule; `mb-10 mt-24 lg:mt-28` |
| `Fleuron` | `· · ·` at `tracking-[0.7em]` bronze, `my-14 lg:my-16` |
| Drop cap | `first-letter:` utilities, `4.4em`, `leading-0.72`, bronze |
| Blockquote | `border-l border-bronze/50 pl-6` |
| Run-in head | `display 17px font-medium not-italic` inline before body |
| Em-dash list item | bronze `—` + 13.5px text, `py-1.5` |
| Full-bleed escape | `left-1/2 w-screen -translate-x-1/2` |
| Centred input | bottom rule + `text-center`, `max-w-md` container |
| P.S. line | italic display 13.5px, centred |

## Photography (Edition 04)

Only **five** photographs on the whole page (`warmPortrait`, `bwChin`,
`libraryGesture`, `stoolFront`, plus none in services) — by far the fewest of the
fifteen, and deliberately so. Ratios `4/5` on mobile → `sm:3/4` inline;
`16/10 → md:21/9` for the full-bleed. **Every single one uses `blur` on
`PhotoFade`** — the images resolve out of softness, which reads as memory or
recollection and suits the letter voice exactly. Captions always centred.
- **Strengths.** Scarcity gives each image weight. The blur entrance is a
  distinct and appropriate signature.
- **Weaknesses.** 17 of the 22 photographs go unused; the services section is
  entirely image-free.

## Motion design (Edition 04)

| Moment | Spec | Why |
| --- | --- | --- |
| `PhotoFade` + blur | `blur(8px) → 0`, `scale 1.03 → 1`, opacity, 1.05s | mimics focus being found; suits recollection |
| `Reveal` | `y 20 → 0`, 0.85s | the only text motion on the page |
| Title stagger | 0 / 0.12 / 0.22s | three beats, then stillness |
| Lenis | `lerp 0.09` | inertia matters more here than anywhere — it makes long scrolling feel like page-turning |

**Motion hierarchy.** Photographs (1.05s) > text (0.85s). That is the entire
system. **Emotional feeling.** Calm. Nothing interrupts the voice.
**Why the restraint works:** in a reading experience, motion is noise. Removing
it is the design decision.

## UX analysis (Edition 04)

- **Journey.** Salutation → thesis → self → offer → method → proof → invitation.
  Exactly the structure of a persuasive letter.
- **Information hierarchy.** Weak by design — everything is at one level. This is
  the trade.
- **Scanning behaviour.** **Poor.** A skimmer gets chapter titles and little else.
  Prices, inclusions and credentials are all buried in prose.
- **Trust building.** Highest of the fifteen for a reader who actually reads —
  first-person voice plus admitted process plus discretion.
- **Reading flow.** Best in project by a wide margin.
- **Attention control.** Total — there is nothing else to look at.
- **CTA placement.** Three text CTAs in services + the sign-off + the form. No
  persistent CTA anywhere. **Lowest CTA density of the fifteen.**
- **Cognitive load.** Low per-screen, high cumulative (long read).
- **Navigation clarity.** Effectively none. There is no way to jump to services.
- **Mobile / tablet / desktop.** Identical and all excellent. The most robust
  responsive behaviour in the project.
- **Accessibility.** Best in project: high contrast, long measure, generous
  leading, minimal motion, no hover dependencies. Only flaw is `aria-label`-only
  form fields.

## Performance (Edition 04)

Lightest page in the project — five images, two components, no observers, no
scroll listeners, no `clipPath`, no sticky. Fastest to interactive by a
considerable margin.

## Art direction (Edition 04)

Editorial **10** · Fashion **5** (deliberately not fashion) · Luxury **8** ·
Magazine **9** (book rather than magazine) · Premium **8** · Modernity **6** ·
Elegance **10** · Minimalism **10** · Confidence **8** (quiet confidence) ·
Emotion **10** (the most emotionally effective).

## Scores — Edition 04

| Criterion | Score | Reasoning |
| --- | --- | --- |
| Luxury | 8.5 | intellectual luxury; lacks visual opulence entirely |
| Editorial | 10 | real book typography — drop cap, fleurons, run-ins, colophon |
| Creativity | 9 | the letter conceit is fully committed, including a voice change |
| Originality | 9.5 | no other stylist site would dare a single 720px column |
| Typography | 10 | the only edition set for genuine sustained reading |
| Motion | 6 | intentionally minimal — correct for the concept, low as a resource |
| Photography | 7 | beautiful but scarce; 17 photos unused |
| UX | 7 | superb for readers, poor for skimmers; no navigation |
| Conversion | 6.5 | the best *copy*, the weakest *mechanics* |
| Accessibility | 9.5 | best in project |
| Performance | 9.5 | lightest page in project |
| Storytelling | 10 | first-person voice; the sign-off is the best copy in the project |
| Elegance | 10 | |
| Premium feel | 8 | |
| Craftsmanship | 9.5 | |
| **Overall** | **8.7** | **the storytelling, typography and accessibility benchmark; commercially the weakest** |

---
---

# EDITION 05 — THE BOUTIQUE

`/boutique` · Mood: *Sand · Statement* · Palette `#E3DACA / #2C2118 / #A6885B`

## Direction

- **Creative direction.** A contemporary luxury retail brand. **Colour-blocked
  rooms** you scroll through — ivory, sand, espresso, ivory, espresso, bronze,
  espresso — like walking a flagship store where each space is a different
  finish. The most *commercial* and most *modern* edition.
- **Core inspiration.** Aesop, Jacquemus, Toteme, Glossier-adjacent DTC
  minimalism; contemporary fashion e-commerce; oversized lowercase type;
  accordion product rows.
- **Mood board.** Painted colour blocks. A bronze room. Oversized lowercase
  serif. A sticky statement beside scrolling product shots. Italic marquee bands.
- **Visual identity.** Oversized **lowercase** display with tight tracking, a
  bronze full stop punctuating the wordmark and headlines (`élevé.`,
  `three ways to begin.`, `let's begin.`), sharp colour-block section changes,
  two italic marquee bands, an accordion.
- **Emotional feeling.** Confident, current, energetic. The most "2026" edition.
- **Brand personality.** The brand director. Commercial, decisive, stylish.
- **Luxury perception.** *Contemporary* luxury — bold, branded, accessible. Reads
  younger and more scalable than 01–04.
- **Target audience.** Younger professionals, digital-native buyers, anyone who
  shops online. Lowest-friction commercially.
- **Editorial style.** Brand campaign more than magazine. Numbered
  `( 01 ) — The Belief` … `( 06 ) — The Beginning`, but the numbers are labels,
  not chapter heads.
- **Storytelling style.** Punchy, declarative, lowercase. "shop the services".
- **UX philosophy.** Familiar commercial patterns — sticky hero, accordion,
  card grid — executed with taste. Fastest to comprehend.
- **Motion philosophy.** Structural motion. The **sticky-vs-scroll hero** and the
  **accordion height animation** are the two signatures; both are functional
  rather than decorative.
- **Interaction philosophy.** The most *interactive* edition: an accordion with
  a rotating `+`, image zoom on card hover, `whileTap` on every button.
- **Layout philosophy.** Colour-blocked full-width rooms; a 50/50 sticky split
  hero; full-width accordion rows; a 3-column card grid.
- **Spacing philosophy.** `py-24 lg:py-32` per room; accordion rows `py-8 lg:py-10`.
  Rooms are separated by *colour*, not whitespace — so it reads faster and denser
  than 01–04.
- **Photography philosophy.** Photographs as **product shots** — `4/5`, clean, in
  a scrolling column beside a fixed statement, or `16/11` at the top of cards.
  The only edition with an image **hover zoom**.
- **Typography philosophy.** Lowercase everything at large scale. The bronze full
  stop is a repeated brand mark. Weight and scale do all the work.
- **Component philosophy.** The most conventional component set — accordion,
  cards, chips, marquee bands — but tuned to the palette.
- **Colour philosophy.** **The only edition using bronze as a full section
  ground.** The bronze enquiry room with espresso type is the boldest colour
  decision in the project.
- **Conversion philosophy.** The most aggressive of the five signatures: "Let's
  begin", "Shop the services", "Take this one". Solid espresso buttons that
  hover to bronze. Price visible on the collapsed accordion row.
- **Accessibility philosophy.** Good — `aria-expanded` on accordion rows, real
  buttons — but `aria-label`-only inputs again.

## Colour system

| Room | Ground | Type |
| --- | --- | --- |
| Header / hero | `ivory` (`bg-ivory/95` fixed header) | espresso |
| Marquee band | `sand` + `border-y espresso/15` | espresso, bronze `✦` |
| Philosophy | `sand/70` | espresso / cocoa |
| Founder | `espresso` | ivory, `ivory/85` body, `ivory/30` chips |
| Services | `ivory` | espresso |
| Journey cards | `ivory` page, `parchment/80` cards | espresso / cocoa |
| Words | `espresso` | ivory |
| **Enquire** | **`bronze #A6885B`** | espresso type, ivory full stop |
| Footer | `espresso` | ivory |

- **Contrast strategy.** espresso-on-bronze ≈ 5.4:1 — passes AA for normal text
  and AAA for large. It is the tightest contrast pair in the project but it holds.
- **Luxury created.** Confidence through commitment. Seven distinct rooms in one
  page is bold, and the bronze room is genuinely memorable.
- **Strengths.** The most *memorable* palette usage of the fifteen. Rooms create
  strong pacing. Espresso rooms make the ivory ones feel brighter.
- **Weaknesses.** Seven ground changes is close to too many — the page can read
  as segmented rather than composed. Bronze at full-section scale is the riskiest
  colour call in the project; it can read slightly muddy on uncalibrated screens.

## Typography

| Element | Spec |
| --- | --- |
| Hero H1 | `clamp(2.8rem, 7.8vw, 6.2rem)` **lowercase**, `leading-1.04`, `tracking--0.015em`; three hard-broken lines with `elevated` in italic bronze and a bronze full stop |
| Philosophy H2 | `clamp(2rem, 5vw, 3.9rem)` lowercase, `leading-1.1` |
| Founder H2 | `clamp(2.1rem, 5vw, 3.8rem)` lowercase, `leading-1.05`, ivory |
| Services H2 | `clamp(2.2rem, 5.4vw, 4.4rem)` lowercase, `leading-1.06` |
| Accordion row name | `clamp(1.7rem, 4.6vw, 3.6rem)` lowercase, `leading-none`; bronze when open |
| Journey H2 | `clamp(2rem, 5vw, 3.9rem)` lowercase, `leading-1.08` |
| Card title | `clamp(1.3rem, 2.2vw, 1.65rem)` lowercase |
| Card numeral | `display 3xl italic bronze` |
| Testimonial | `clamp(1.4rem, 3.4vw, 2.6rem)` **lowercase**, `leading-1.3`, `font-medium`, `max-w-4xl` |
| Enquire H2 | `clamp(2.6rem, 7vw, 5.6rem)` lowercase, `leading-1.02`, two hard lines, ivory full stop |
| Marquee item | `display clamp(1.1rem, 2.2vw, 1.6rem)` **italic lowercase**, bronze `✦` separators |
| Script | hero `clamp(1.6rem, 3vw, 2.1rem)`; signature `clamp(2.3rem, 4vw, 3.1rem)` |
| Chip | `10px uppercase tracking-wide2`, `border-ivory/30` (founder) / `bg-parchment` (beyond) |
| Body | `15px / 1.9`; cards `13.5px / 1.85` |

- **Hierarchy quality — very good and very fast.** Because everything is
  lowercase, hierarchy is pure scale, and the jumps are large (6.2rem → 3.6rem →
  1.65rem → 15px).
- **Editorial treatment.** The **bronze full stop** is the cleverest single
  device — it appears on the wordmark, three headlines, and inverts to ivory on
  the bronze room. It functions as a logo mark made of punctuation.
- **Strengths.** Testimonials set lowercase at `2.6rem font-medium` is a striking,
  contemporary treatment — proof presented as campaign copy.
- **Weaknesses.** Lowercase-everything is a strong stylistic bet that reads as
  fashionable *now* and may date. Hard `<br />` line breaks in the hero and
  enquire headings are not fluid.

## Layout system

- Container `max-w-[1500px]`, `px-6 md:px-10`.
- **Sticky split hero.** `lg:grid-cols-2 lg:gap-14`. Left column is
  `lg:sticky lg:top-0 lg:h-screen` and holds the statement; right column is a
  normal-flow stack of **three `4/5` photographs** at `lg:gap-12` with alternating
  offsets (`lg:ml-14`, `lg:mr-14`). **The statement holds while the photographs
  scroll past it.** This is the single best structural idea in Edition 05.
- **Accordion.** Full-width rows inside `border-t/border-b espresso/15`.
  Open content is a 12-col grid: photo `col-span-3`, description + CTA
  `col-span-4`, inclusions `col-span-4 col-start-9`.
- **Journey grid.** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, `gap-6`,
  `parchment/80` cards, `16/11` image + `p-7` body. The only true card grid in
  the five signatures.
- **Enquire.** `lg:grid-cols-12` — statement `col-span-6`, form `col-span-5
  col-start-8`.
- **Desktop.** Sticky hero, 3-col journey, 12-col enquire.
- **Tablet.** Hero un-sticks and stacks (`pt-24` on the section provides header
  clearance); journey becomes 2-col; accordion content stacks.
- **Mobile.** Hero photographs cap at `max-w-[560px]` centred; accordion price
  moves from the row into the open panel (`sm:hidden` / `hidden sm:inline`) — a
  nice responsive detail; journey becomes 1-col.

## Section-by-section

### Header
Fixed, `bg-ivory/95`, hairline. Left: `élevé.` at 22px lowercase with a bronze
full stop. Right: "All editions" (hidden < sm) + a **solid espresso "Let's begin"
button** that hovers to bronze. The most commercially assertive header of the
five. **Luxury 8 · Conversion 9 · Craft 8.**

### Hero (sticky split)
- Left (sticky): eyebrow → three-line lowercase H1 → 15px paragraph `max-w-sm` →
  two solid/outlined buttons with `whileTap 0.97` → script `Style. Image.
  Presence.`
- Right (scrolling): `stoolWide` (priority) / `blueHair` (`lg:ml-14`) /
  `marbleSmile` (`lg:mr-14`), all `4/5`, captioned *"Chandni Ahuja — Founder,
  élevé"*, *"Ease, tailored"*, *"Presence, kept daily"*, staggered 0 / 0.15 / 0.25.
- **Why it works.** The proposition stays on screen for three full viewport
  heights while the imagery does the selling. It is the highest-dwell hero in the
  project and requires no animation to achieve it.
- **Weakness.** On tablet the stickiness is lost entirely and it becomes an
  ordinary stack.
- **Luxury 9 · Editorial 8 · Motion 9 · Craft 10.**

### Marquee bands (×2)
`bg-sand`, `border-y`, `py-4`, oversized **italic lowercase** display items with
bronze `✦` separators. The second band (`reverse` via `animationDirection`)
carries *"the journey · six chapters · one transformation"* — using the marquee
as a **section divider with editorial content** rather than as decoration.
**Luxury 7 · Editorial 9 · Craft 8.**

### Philosophy room (sand/70)
`( 01 ) — The Belief` · `col-span-7` headline vs `col-span-4 col-start-9`
bottom-aligned support (`justify-end`) with the é·le·vé definition as a single
italic line. Compact and confident.
**Luxury 8 · Editorial 8 · Craft 8.**

### Founder room (espresso)
`floorPinstripe` at `4/5` on the left; right column: `( 02 ) — The Founder` →
lowercase H2 *"styled by someone who read the room **first.**"* → one condensed
paragraph → **four credential chips** (`border-ivory/30`, 10px, `tracking-wide2`)
→ script signature.
- **Notable variation.** Credentials as *chips* rather than a ledger — faster to
  scan, less formal, more brand-like.
- **Best headline in the project:** *"styled by someone who read the room first"*
  compresses the entire positioning into eight words.
- **Luxury 9 · Editorial 9 · Craft 9.**

### Services (accordion)
- Rows on hairlines. Collapsed: bronze index · huge lowercase name · price
  (`sm:` only) · a `+` that **rotates 45° into an ×** over 0.5s.
- Open (`height: 0 → auto`, opacity, 0.75s): photo `3/4 max-w-[300px]` captioned
  with the lowercase essence, description + italic note + a solid **"Take this
  one"** button, and the six inclusions as numbered hairline rows.
- `useState<string | null>("edit")` — **the first tier is open by default**, so
  the section never presents as a closed, empty list.
- **Strengths.** The most *usable* services section in the project: all three
  tiers and their prices are visible in one screen, and detail is one tap away.
  Best conversion mechanics of the five signatures.
- **Weaknesses.** Accordions hide content from scanning and from print; only one
  tier is comparable at a time.
- **Luxury 8 · Editorial 7 · Conversion 9.5 · Craft 9.**

### Journey (card grid)
Six `parchment/80` cards in a 3-col grid. `16/11` image with
`group-hover:scale-[1.04]` over 700ms inside an `overflow-hidden` wrapper, then
`p-7` containing a `3xl` italic bronze numeral, lowercase title, body and point
labels. Staggered by `(i % 3) * 0.1`.
- **Strengths.** The only journey you can take in at a single glance. Modulo
  stagger means each *row* animates as a row.
- **Weaknesses.** Cards are the least editorial device in the project and the
  one pattern the brief explicitly cautioned against. Hover zoom is desktop-only.
- **Luxury 6.5 · Editorial 6 · UX 9 · Craft 8.**

### Words room (espresso)
Three testimonials at `clamp(1.4rem, 3.4vw, 2.6rem)` **lowercase font-medium**,
with the second right-aligned (`lg:text-right lg:ml-auto`) — an asymmetric
rhythm. Then the six results in `md:grid-cols-2` on `ivory/15` rules.
- **Strengths.** Setting testimonials at near-headline scale in lowercase makes
  proof feel like brand copy. The alternating alignment stops three big quotes
  becoming monotonous.
- **Luxury 8 · Editorial 8 · Craft 8.**

### Enquire room (bronze)
- The boldest moment in the project. `bg-bronze` with espresso type.
- Left: `( 06 )` → `let's` / `begin` **with an ivory full stop** →
  paragraph → email as an italic `link-line` at `clamp(1.2rem,2.4vw,1.7rem)` →
  location.
- Right: fields on `espresso/50` rules, chips that fill solid espresso, and a
  **full-width solid espresso submit** that hovers to cocoa.
- **Why it works.** After espresso and ivory rooms, a saturated bronze room is
  unmistakably "the end". The espresso-on-bronze inversion is arresting.
- **Weaknesses.** Tightest contrast pair in the project; placeholder text at
  `espresso/60` on bronze is the single weakest contrast instance across all
  fifteen editions.
- **Luxury 8 · Conversion 9 · Craft 8.**

### Footer
`bg-espresso`, three-part flex: `élevé.` + script `by Chandni` · copyright ·
"All editions". Compact. **Luxury 7 · Craft 7.**

## Component library (Edition 05)

| Component | Notes |
| --- | --- |
| Accordion row | hairline row, rotating `+` (0.5s), `height 0 → auto` + opacity (0.75s), `aria-expanded`, default-open first item |
| `MarqueeBand` | `bg-sand border-y py-4`, italic lowercase display, bronze `✦`, `reverse` prop via `animationDirection` |
| Journey card | `parchment/80`, `16/11` image with `group-hover:scale-[1.04]` 700ms, `p-7` body |
| Solid button | `bg-espresso text-ivory` → hover `bg-bronze`, `whileTap 0.97`, `px-9 py-4` |
| Outlined button | `border-espresso/40` → inverts on hover |
| Credential chip | `border-ivory/30 px-4 py-2` 10px `tracking-wide2` |
| Beyond chip | `bg-parchment px-4 py-2.5` (filled, not outlined) |
| Bronze full stop | `<span className="text-bronze">.</span>` appended to wordmark and headlines |
| Sticky statement | `lg:sticky lg:top-0 lg:h-screen` |

## Photography (Edition 05)

Ratios: `4/5` hero column and founder, `3/4` accordion detail (capped at 300px),
`16/11` journey cards. **The only edition with a hover zoom** (`scale 1.04`,
700ms, clipped). Alternating `lg:ml-14` / `lg:mr-14` offsets in the hero column
create a gentle zigzag as you scroll. Captions are short and brand-ish ("Ease,
tailored", "Presence, kept daily") rather than descriptive — closer to campaign
copy than to plate captions.
- **Strengths.** The scrolling hero column is the best use of multiple portraits
  in the project.
- **Weaknesses.** Card-cropped `16/11` images cut portraits badly; `object-top`
  mitigates but does not solve it.

## Motion design (Edition 05)

| Moment | Spec | Why |
| --- | --- | --- |
| Sticky hero | CSS `position: sticky` | zero JS, zero animation cost, maximum effect — motion by *layout* |
| Accordion | `height 0 → auto` + opacity, 0.75s | slow enough to track; `AnimatePresence initial={false}` avoids an animation on mount |
| `+` rotation | `rotate 0 → 45`, 0.5s | the icon *becomes* a close affordance rather than swapping |
| Card hover zoom | `scale 1.04`, 700ms, clipped | slow zoom reads as premium; fast zoom reads as cheap |
| `whileTap 0.97` | every button | touch feedback where hover is unavailable |
| Marquee reverse | `animationDirection: reverse` | two bands moving oppositely creates a woven rhythm |
| `PhotoFade` stagger | 0 / 0.15 / 0.25 in hero | the three portraits arrive as a sequence, not a block |
| Journey stagger | `(i % 3) * 0.1` | row-wise, not index-wise |

**Motion hierarchy.** Accordion (0.75s) > photos (1.05s entrance) > `Reveal`
(0.85s) > micro (0.5s). **Emotional feeling.** Brisk, controlled, contemporary.

## UX analysis (Edition 05)

- **Journey.** Statement → belief → founder → shop → method → proof → begin.
  Commercial order: the offer arrives earlier than in 01–04.
- **Scanning behaviour.** **Best in project.** Colour-blocked rooms act as
  chapter markers; the accordion surfaces all three prices at once; the card grid
  makes the journey glanceable.
- **Attention control.** Very good — each room has exactly one focal element.
- **CTA placement.** Header (persistent) → hero ×2 → per-tier "Take this one" ×3
  → bronze room → footer. Highest CTA density of the five signatures.
- **Conversion.** Strongest overall mechanics: price visible without interaction,
  one-tap detail, aggressive-but-tasteful language, high-contrast final room.
- **Cognitive load.** Lowest of the fifteen.
- **Navigation clarity.** Header has a CTA but no section links — same gap as
  Edition 02, mitigated by the fast visual chunking.
- **Mobile.** Very good: capped image widths, price relocation, 1-col grids,
  `whileTap` feedback throughout.
- **Tablet.** Loses the sticky hero — the single biggest tablet regression in the
  project.
- **Accessibility.** `aria-expanded` correct; the bronze-room placeholder
  contrast is the weakest point.

## Performance (Edition 05)

Hero image 1 eager, rest lazy. `height: auto` animation forces layout on the
accordion (the most expensive animation in the project, though only on user
action). Two CSS marquees. Sticky positioning is free. Hover zoom is
transform-only.

## Art direction (Edition 05)

Editorial **6** · Fashion **9** · Luxury **8** · Magazine **5** (campaign, not
magazine) · Premium **8** · Modernity **10** (the most current) · Elegance **7** ·
Minimalism **6** · Confidence **10** · Emotion **6**.

## Scores — Edition 05

| Criterion | Score | Reasoning |
| --- | --- | --- |
| Luxury | 8 | contemporary and confident rather than rarefied |
| Editorial | 6.5 | cards and accordions are commercial, not editorial devices |
| Creativity | 8 | sticky hero and bronze room are genuinely strong ideas |
| Originality | 7 | the DTC-luxe language is widely used |
| Typography | 8.5 | oversized lowercase + bronze full stop is a real system |
| Motion | 8.5 | structural rather than decorative; the sticky hero is superb |
| Photography | 8 | best multi-portrait sequencing; card crops are weak |
| UX | 9.5 | fastest to comprehend, best scanning, best price visibility |
| Conversion | 9.5 | highest CTA density, visible pricing, one-tap detail, bold final room |
| Accessibility | 7.5 | good ARIA, weakest contrast instance in the project |
| Performance | 7 | `height: auto` accordion, two marquees |
| Storytelling | 7 | efficient but less moving; the offer leads |
| Elegance | 7.5 | |
| Premium feel | 8 | |
| Craftsmanship | 8.5 | |
| **Overall** | **8.2** | **the UX and conversion benchmark; least editorial of the five** |

---
---

## Part 1 — Signatures comparison

| | 01 Editorial | 02 Gallery | 03 Atelier | 04 Journal | 05 Boutique |
| --- | --- | --- | --- | --- | --- |
| Metaphor | magazine | exhibition | studio | letter | boutique |
| Ground | ivory | espresso | parchment | linen | 7 rooms |
| Case | sentence + lowercase | UPPERCASE wide | lowercase | sentence | lowercase |
| Container | 1500 | 1400 / 900 | 1380 / 900 | **720** | 1500 |
| Navigation | full nav + overlay | CTA only | **index rail** | masthead only | CTA only |
| Hero | split + watermark + marquee | full-bleed `100svh` | taped collage | title page | **sticky split** |
| Services | 3 spreads | **3-col divided** | **dotted-leader carte** | prose blocks | **accordion** |
| Journey | **sticky crossfade** | horizontal snap | ledger grid | run-in prose | card grid |
| Testimonials | headline pull-quote | centred trio | scattered whispers | letter blockquotes | lowercase campaign |
| Enquiry | dark spread | **inverted light room** | R.S.V.P. card | write back + P.S. | **bronze room** |
| Signature motion | masked lines + parallax | **curtain clipPath** | wipe + pin | blur focus | sticky + accordion |
| Dark rooms | 2 | 5 of 6 | 0 | 0 | 3 |
| Images used | 11 | 12 | 11 | **5** | 10 |
| Best at | elegance | luxury | craft | storytelling | conversion |
| Overall | **9.1** | 8.7 | 9.0 | 8.7 | 8.2 |
