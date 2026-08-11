# élevé by Chandni — Design Bible

## Part 2 — Editions 06–10 · "The Colour Studies"

Where Editions 01–05 differ **structurally**, Editions 06–10 differ
**atmospherically**. Each takes a single colour world and pushes it to its logical
conclusion — sage, rose, lilac, olive, powder blue — and then invents a *metaphor
system* (garden / love letter / dream / specification sheet / dinner service) that
governs every label, icon, verb and button in the edition.

This is the most important finding of Part 2:

> **These five editions are not "the same page in a different colour." Each one
> re-writes the entire micro-copy layer.** The word "Services" becomes *The beds*,
> *The trousseau*, *Three dreams*, *Programmes & pricing*, *The table d'hôte*. The
> submit button becomes *Send to Chandni*, *Seal it with a kiss*, *Send it to
> Chandni*, *Submit specification*, *RSVP to Chandni*. Same content object, five
> completely different voices.

They also introduce **the only three non-monolithic ideas in the whole project**
that Editions 01–05 do not have:

1. A **centre-spine timeline** (Garden) — the only vertically-alternating journey.
2. A **specification-sheet table** (Pistachio) — the only tabular, data-dense layout.
3. A **framed-plate composition** (Porcelain) — the only edition where the page
   itself behaves like an object with a rim.

---
---

# EDITION 06 — THE GARDEN

`/garden` · Mood: *Sage · botanical calm* · Palette `#EAEFE4 / #6F835F / #2E3A2C`

**Unique in the project:** the only **centre-spine alternating timeline**, and the
only edition where photographs are **arched** (`rounded-t-full`) — a cathedral /
conservatory window shape that appears nowhere else in the fifteen.

## Direction

- **Creative direction.** A walled kitchen garden translated into a website. The
  organising conceit is *cultivation*: nothing is bought, everything is *planted*,
  *tended*, *pruned* and eventually *harvested*. The entire information
  architecture is renamed to fit — Philosophy, Gardener, Beds, Journey, Words,
  Harvest, Enquire.
- **Core inspiration.** English herbaria and seed catalogues; the Kew Gardens
  glasshouse arch; Cereal magazine's botanical issues; a conservatory at 4pm.
- **Mood board.** Sage-washed lime plaster. A pressed fern. Terracotta pots in a
  row. Hand-set fleurons (`❧`) in a Victorian plant register. The arch of a
  greenhouse pane.
- **Visual identity.** Three greens (`#EAEFE4` ground, `#F5F7F0` lifted panel,
  `#2E3A2C` ink) with `#6F835F` sage as the single living accent. The `❧`
  *rotated floral heart* is the edition's punctuation mark and appears in five
  distinct roles: divider, list bullet, journey bullet, harvest marker, and
  tagline prefix.
- **Emotional feeling.** Patient. Unhurried. Deeply calm. The one edition that
  lowers your heart rate.
- **Brand personality.** The head gardener. Knowledgeable, gentle, faintly
  amused, never in a rush. Speaks in seasons rather than deadlines.
- **Luxury perception.** *Slow luxury* — the luxury of time rather than money.
  This is the least transactional of the fifteen and the one that most convincingly
  justifies a high price with **patience** rather than **exclusivity**.
- **Target audience.** Clients recovering from burnout; women 35–55 rebuilding
  identity after a life change; the wellness-adjacent luxury buyer. The person who
  would find "elite" and "exclusive" off-putting.
- **Editorial style.** Extended horticultural metaphor sustained without a single
  break. Impressively disciplined: *annuals vs. perennials*, *light, seasons, soil*,
  *cutting back what no longer serves*, *training what remains toward the light*.
- **Storytelling style.** Nature parable. Belief (nothing forced into bloom) →
  gardener → beds → seasons → words → harvest → invitation to be tended.
- **UX philosophy.** Symmetrical and reassuring. Centred section headers, a
  centred spine, centred philosophy — the user is never asked to hunt.
- **Motion philosophy.** **Growth.** The signature move is `clipPath: inset(100%
  0 0 0) → inset(0)` — every photograph literally **grows upward out of the soil
  line** over 1.15s. Journey nodes `scale: 0 → 1` like buds opening. There is no
  other edition where the motion *is* the metaphor this completely.
- **Interaction philosophy.** Pill buttons that fill with ink on hover over 500ms;
  underlines that shift to sage; `whileTap: scale 0.97` on everything pressable.
- **Layout philosophy.** Alternating symmetry. 7/4 asymmetric hero, then a run of
  centred sections, then the mirrored timeline, then centred again. The page
  breathes in and out.
- **Spacing philosophy.** `py-16` → `lg:py-28`; noticeably tighter than Edition 01
  because the arch shapes and fleurons already supply visual rest.
- **Photography philosophy.** Photographs are **specimens under glass**. Every one
  is arched at the top, `3/4` portrait, captioned in 9px/0.22em sage-grey, and
  always names Chandni. The journey uses deliberately *small* `w-44 / md:w-56`
  plates so the text leads and the images annotate.
- **Typography philosophy.** Restrained scale. Hero tops out at `4.3rem` — the
  second-smallest hero of the fifteen — because a garden should not shout. Script
  italic Times carries the soft register (`by Chandni`, service essences,
  `grown with care`).
- **Component philosophy.** Two bespoke components only: `ArchPhoto` and
  `Fleuron`. Everything else is raw structure.
- **Colour philosophy.** Analogous, low-chroma, single-hue-family. The only
  chromatic risk taken is `#A9BC97` (pale sage) as the accent inside the dark
  harvest band.
- **Conversion philosophy.** Language of commitment without pressure — *Begin
  your season*, *Plant this one*, *Ready to be tended?*. Four CTAs total; no
  urgency, no scarcity.
- **Accessibility philosophy.** Strong. Ink-on-sage runs ≈ 11:1. Only weakness is
  the 9px caption and the `❧` glyph used as a bullet without a text alternative
  (correctly marked `aria-hidden`, but the list loses its visual marker for
  screen-reader users — semantically fine, visually decorative only).

## Colour system

| Role | Value |
| --- | --- |
| Primary ground | `#EAEFE4` — pale sage wash |
| Lifted panel | `#F5F7F0` — gardener band, service beds, words band, enquiry card |
| Image placeholder | `#DFE7D6` |
| Primary ink | `#2E3A2C` (INK) |
| Body / secondary | `#4C5A43` (SUB) |
| Accent | `#6F835F` (SAGE) — italics, fleurons, bullets, node rings, script |
| Dark room | `#2E3A2C` ground with `#EAEFE4` text |
| Dark-room label | `#C7D2BE` |
| Dark-room accent | `#A9BC97` |
| Hairlines | `#2E3A2C` at 15–20% |
| Hover ink | `#44543E` |

- **Contrast strategy.** INK-on-ground ≈ 11.4:1; SUB-on-ground ≈ 6.8:1 — both
  comfortably AA. SAGE is confined to display italics ≥ 16px, glyphs and rules —
  never body copy. The dark harvest band inverts to ≈ 11:1.
- **Luxury created.** Green is the hardest colour to make expensive — it slides
  into "eco-brand" or "spa" instantly. This edition avoids both by (a) keeping
  chroma extremely low, (b) using a near-black *green* ink rather than a neutral
  black, so the whole page is one hue family, and (c) refusing any gradient.
- **Strengths.** The most *ownable* palette of the fifteen — recognisable from a
  thumbnail. Photographs of Chandni in warm neutrals sit beautifully against cool
  sage (complementary warmth).
- **Weaknesses.** Green carries "organic / wellness / sustainability" baggage that
  may not match a high-fashion positioning. The three greens are close enough that
  the `#F5F7F0` panels can read as "white" rather than "lifted sage" on
  uncalibrated screens.

## Typography

| Element | Spec |
| --- | --- |
| H1 | `display clamp(2.4rem, 5.4vw, 4.3rem)`, `font-medium`, `leading-1.12`, `tracking--0.01em` |
| H2 (Philosophy) | `display clamp(1.7rem, 3.4vw, 2.6rem)`, `font-normal`, `leading-1.35`, centred |
| H2 (Gardener) | `display clamp(2rem, 4vw, 3.2rem)`, `font-medium`, `leading-1.1` |
| H2 (Beds / Journey) | `display clamp(2rem, 4.4vw, 3.4rem)`, `font-medium`, `leading-1.08`, centred |
| H2 (Enquire) | `display clamp(1.9rem, 4vw, 3rem)`, centred |
| H3 (Service) | `display 1.9rem font-medium leading-tight` |
| H3 (Season) | `display text-3xl` → `md:2.2rem` |
| Body | `14.5–15px font-light leading-1.9/1.95` SUB |
| Service body | `13.5px font-light leading-1.85` |
| Include item | `13px font-light leading-relaxed` |
| Journey body | `14px font-light leading-1.9` |
| Eyebrow | `sans 10px uppercase tracking-0.24em` SUB |
| Season label | `sans 10px uppercase tracking-0.22em` |
| Point label | `sans 10.5px uppercase tracking-0.16em` INK |
| Caption | `sans 9px uppercase tracking-0.22em` SUB, centred |
| Price | `sans 12px uppercase tracking-0.16em` INK |
| Numeral | Roman `I / II / III`, `display text-lg italic` SAGE |
| Service note | `display 13.5px italic leading-relaxed` INK |
| Quote | `display 1.15rem italic leading-1.7`, centred |
| Script | `font-script text-2xl` SAGE — essences, `founder & personal stylist`, `grown with care` |
| Button | `sans 10–11px uppercase tracking-0.2em`, `rounded-full` |

- **Hierarchy quality — very good.** Four tiers cleanly separated. The Roman
  numeral in italic sage above each service name is a small, genuinely elegant
  hierarchy device.
- **Editorial treatment.** Roman numerals (I–III) rather than Arabic is a
  deliberate botanical-register cue — plant catalogues number by Roman. Service
  essences are lowercased (`.toLowerCase()`) into script, which softens the whole
  services block.
- **Strengths.** The `4.3rem` hero cap is the correct restraint call; the page
  never feels like it is performing.
- **Weaknesses.** Least typographically *memorable* of the five in this part —
  nothing here is as striking as Pistachio's uppercase spec headline or
  Porcelain's `4.8rem` centred plate.

## Layout system

- **Container:** `max-w-[1240px]`, `px-6` → `md:px-10`.
- **Hero:** `lg:grid-cols-12` — copy `col-span-7`, arch portrait `col-span-4
  col-start-9`, `items-end` so the headline baseline and the arch base align.
- **Gardener:** `lg:grid-cols-2` — a two-up arch pair (one dropped `mb-10` for
  stagger) against the biography.
- **Services:** a single bordered block `lg:grid-cols-3` with
  `divide-y → lg:divide-x lg:divide-y-0`. **Not cards** — one object cut into three,
  which is precisely why it avoids the SaaS pricing-table read.
- **Journey:** `relative` container with an absolutely-positioned 1px spine at
  `left-[7px]` on mobile and `left-1/2 -translate-x-1/2` on `md`. Each chapter is
  `md:grid-cols-2` with `md:row-start-1` forcing text and photo onto the same row,
  and `flip = i % 2` swapping `col-start`. Odd chapters right-align their text
  (`md:text-right` + `md:items-end` on the points list) — a real mirrored layout,
  not a fake one.
- **Harvest / Results:** `md:grid-cols-2`, each item a baseline-aligned row with a
  bottom hairline.
- **Enquire:** `max-w-[840px]` bordered panel on lifted sage.
- **Section rhythm:** `py-16` → `lg:py-20` (philosophy) / `py-20` → `lg:py-28`
  (services, journey).
- **Composition & balance.** The centre spine is the strongest compositional idea
  in Part 2 — it gives the journey an axis of symmetry that no other edition has,
  and it reads unmistakably as a *stem*.
- **Reading order.** Correct on desktop and mobile. On `md` the alternating layout
  preserves DOM order (text always precedes its photo in the DOM), so the mirrored
  presentation never inverts the screen-reader sequence.
- **Desktop.** Full mirrored spine, 3-up beds, 7/4 hero.
- **Tablet.** The spine centres at `md` (768px) but the beds stay stacked until
  `lg` (1024px) — deliberate, because three columns of dense service copy at 768px
  would be unreadable. This is the single best responsive judgement in Part 2.
- **Mobile.** Spine moves to the left rail at `left-[7px]` with `pl-10` content
  offset; the journey photo drops to `w-44`; the hero arch is capped at
  `max-w-[380px]` and centred.

## Section-by-section

### Masthead
Three-part flex bar: `← Editions` / centred wordmark with script `by Chandni` /
`Enquire`. Bottom hairline only. No sticky behaviour, no scroll state — the
lightest header of the fifteen. *Luxury 7 · Editorial 7 · Craft 6.*

### Hero
Eyebrow `Edition 06 — The Garden · New Delhi…` → three-line masked headline
("Style that grows / with *you*, season / after season.") → 15px support → two
CTAs (`Begin your season` filled pill + `The services →` underline) → arched
portrait of `archArms`, captioned. Closes with a `Fleuron` at `pt-16 lg:pt-24`.
*Luxury 8 · Editorial 8 · Craft 9 — the arch reveal is the moment.*

### Philosophy
`max-w-[820px]` centred. Three masked lines at `stagger 0.12`, then a
`max-w-xl` paragraph. The annual/perennial argument is the sharpest single piece of
persuasive writing in this part. *Luxury 8 · Editorial 9 · Craft 7.*

### The Gardener
Two arched portraits (`archDress`, `marbleSmile` offset `mb-10`) beside the
biography, on the lifted `#F5F7F0` band with hairlines top and bottom. Ends with
`❧ Style. Image. Presence.` *Luxury 8 · Editorial 8 · Craft 8.*

### The Beds (services)
Centred header, then the divided 3-up. Each bed: Roman numeral → name → script
essence → price → description → hairline → bulleted includes with `·` in sage →
hairline → italic note → `Plant this one` outline pill. Standalone line beneath.
*Luxury 8 · Editorial 8 · Craft 8 — the divided-block treatment is why this
doesn't look like pricing cards.*

### The Journey (the stem)
Six chapters on the centre spine, alternating, each with a `scale 0 → 1` node,
`Season 0X` label, title, body, `❧`-prefixed points, and a small arched plate.
*Luxury 8 · Editorial 9 · Craft 9 — best journey layout in Part 2.*

### Words
A fleuron, then a 3-up of centred italic quotes on the lifted band. Deliberately
minimal — the shortest testimonial treatment in the project.
*Luxury 7 · Editorial 7 · Craft 6.*

### The Harvest
Full-width dark `#2E3A2C` band, `max-w-[1100px]`, two columns of six results with
pale-sage fleurons and bottom rules. The page's only tonal inversion — placed
immediately before the enquiry so the reader arrives at the form having just been
shown the payoff. *Luxury 9 · Editorial 8 · Craft 8.*

### Enquire
Bordered lifted panel, fleuron, `Ready to be tended?`, two-up name/email, interest
pills, textarea, centred `Send to Chandni`. On success the confirmation is
`display italic sage` ending in `❧`. *Luxury 8 · Editorial 8 · Craft 8.*

### Footer
Script `grown with care` over a 10px copyright line. Two lines total — the most
minimal footer of the fifteen. *Luxury 7 · Editorial 7 · Craft 6.*

## Component library

| Component | Behaviour |
| --- | --- |
| `ArchPhoto` | `rounded-t-full` container, `#DFE7D6` placeholder, `clipPath` bottom-up reveal 1.15s, optional 9px centred caption, `priority` → eager loading |
| `Fleuron` | 16px rule + `❧` + 16px rule, wrapped in `Reveal y={10}` |
| Journey node | 15px circle, `border-2` sage, sage-tinted ground, `scale 0 → 1` over 0.7s |
| Interest pill | `rounded-full`, ink-filled when active, 400ms colour transition |
| Bed CTA | Outline pill → ink fill on hover over 500ms |

## Photography usage

`archArms` (hero) · `archDress` + `marbleSmile` (gardener) · six `JOURNEY.photo`
plates. **Nine of the 22 photographs are used** — mid-range for the project.
All arched, all `3/4`, all captioned with Chandni's name. The arch crop
consistently cuts just above the head, which reads as *framing* rather than
*cropping* — a lucky and very effective interaction between the shape and the
source images.

## Motion inventory

| Element | Animation | Why it works |
| --- | --- | --- |
| Photographs | `clipPath inset(100% 0 0 0) → inset(0)`, 1.15s | Literal growth. The single best metaphor-motion pairing in the project. |
| Headlines | `Lines` masked rise, stagger 0.12 | Type sets itself line by line, matching the measured voice. |
| Journey nodes | `scale 0 → 1`, 0.7s | Buds opening; also draws the eye down the spine. |
| Fleurons | `Reveal y={10}` | Barely-there; correct for a divider. |
| Buttons | `whileTap scale 0.97` | Physical feedback without hover dependency — works on touch. |
| Hovers | 300–500ms colour only | Nothing moves on hover; nothing to chase. |

**Zero looping animation. Zero parallax.** Garden is the calmest edition in the
project by measurement, not just by impression.

## UX assessment

- **Navigation.** Two links and one CTA. No section nav, no anchor list, no
  scroll-spy. Fine for a page this length, but the journey and services are the two
  things a returning visitor wants to jump to and only services has an anchor
  (`gd-services`).
- **Conversion path.** Header → hero primary → per-bed CTA (which *pre-fills the
  interest pill* — the best conversion micro-detail shared across the project) →
  form. Four entry points, all leading to `gd-enquire`.
- **Friction.** None. No required fields, no validation gate, no multi-step.
- **Trust signals.** Founder named and pictured 9 times; three named testimonials;
  transparent pricing in INR *and* USD; personal-reply promise stated twice.
- **Missing.** FAQ, availability/turnaround, a booking link, and any indication of
  what happens after the mail is sent.

## Performance notes

- 9 images, all `loading="lazy"` except the hero, all `decoding="async"`.
- `clipPath` animation on a container (not the `<img>`) — compositor-friendly.
- No parallax, no scroll listeners beyond Lenis, no blur filters.
- **The lightest-running edition of the five in Part 2.**

## Art direction critique

- **What is genuinely original.** The arch crop; the centre spine; the `❧` used
  as a five-role system glyph; the growth clip-path.
- **What is derivative.** The centred philosophy block and the 3-up divided
  services are project-standard.
- **What would elevate it.** (1) Vary the arch — a *full* arch (`rounded-full`
  top and bottom) for one hero-scale plate would give the page a cathedral moment.
  (2) The Words section is under-designed relative to everything around it.
  (3) A seasonal shift in accent (four sages, one per journey pair) would pay off
  the "season after season" promise structurally.

## Scores

| Criterion | Score | Justification |
| --- | ---: | --- |
| Luxury feel | 8.0 | Slow luxury, convincingly. Loses points only because green reads "wellness" before "fashion". |
| Elegance | 9.0 | Nothing is oversized, nothing is loud. |
| Uniqueness | 9.0 | Arch + spine + fleuron system is unmistakable. |
| Photography | 8.5 | The arch crop flatters every frame. |
| Typography | 7.5 | Correct and restrained, but not memorable. |
| Colour | 8.5 | Most ownable palette in the project; category baggage is the only cost. |
| Layout | 9.0 | The mirrored spine is the best structural idea in Part 2. |
| Motion | 9.0 | Metaphor and motion are the same thing here. |
| Whitespace | 8.0 | Generous, slightly tighter than Edition 01. |
| Detail | 9.0 | Five-role glyph system, offset arch pairs, `md:text-right` mirroring. |
| Consistency | 9.5 | The horticultural metaphor never breaks once. |
| Emotion | 9.0 | The only edition that calms you. |
| Conversion | 7.5 | Soft, well-placed, but only four touchpoints and no booking. |
| Accessibility | 8.5 | Strong contrast; 9px captions are the only concern. |
| Performance | 9.0 | Lightest in Part 2. |
| Responsiveness | 9.0 | The `md`-spine / `lg`-columns split is exemplary judgement. |
| **Overall** | **8.6** | |

---
---

# EDITION 07 — THE BLUSH

`/blush` · Mood: *Rose · a love letter* · Palette `#FAF0F0 / #C4808E / #4E3237`

**Unique in the project:** the only **fully centre-axis edition** — every section
except one is centred — and the only one that uses **rotation** as a systemic
device (polaroids and journey billets settle at `-1.5°` to `+1.5°`).

## Direction

- **Creative direction.** A romance, structured as correspondence. The site is a
  courtship: *the vow*, *the trousseau*, *the courtship*, *love notes*, *write
  back*, *seal it with a kiss*. Choosing a service tier is framed as accepting a
  proposal (`Choose your ring` / `Say yes to this one`).
- **Core inspiration.** Bridal stationery; a keepsake box of polaroids; Victorian
  cameo brooches; the double-ruled border of a wedding invitation.
- **Mood board.** Blush cardstock. A rose-gold ring on tissue. Instant film curling
  at the edges. A script monogram pressed into an envelope.
- **Visual identity.** Four rose tones stacked (`#FAF0F0` ground → `#FFFBFB`
  card → `#F6E7E8` journey band → `#4E3237` deep plum ink) with `#C4808E` rose and
  `#A05A68` deep rose. `⋄` is the punctuation mark; a **double border** (outer
  `p-1.5`, inner content) is the frame system.
- **Emotional feeling.** Tender. Sentimental in the best sense. Warm and safe.
- **Brand personality.** The closest confidante. Affectionate, encouraging,
  emotionally direct. Says *because you do* and means it.
- **Luxury perception.** *Intimate luxury* rather than *institutional luxury* —
  the value proposition is care, not exclusivity. The weakest "expensive" signal of
  the five, and the strongest "she will actually look after me" signal.
- **Target audience.** Women 28–45; brides and brides-of-their-own-lives (the
  copy's own phrase); anyone who has felt dismissed by a snooty boutique. The
  most emotionally-led buyer.
- **Editorial style.** Second-person love letter. Short sentences. Direct address.
  The vow section is written as four masked lines and reads like a marriage vow —
  which is exactly the intent.
- **Storytelling style.** Courtship arc: attraction → vow → the person → the
  proposal → six billets → love notes → what blooms → write back.
- **UX philosophy.** Perfect symmetry as reassurance. Everything centred means
  nothing is hidden and nothing is prioritised over anything else — a deliberately
  non-hierarchical, non-aggressive experience.
- **Motion philosophy.** **Settling.** Polaroids arrive rotated at `rotate × 2.4`
  and settle to `rotate`, with `y: 34 → 0`, over 1.25s — as if dropped onto a table.
  The cameo `scale 0.93 → 1` opens like a locket. Nothing moves after it lands.
- **Interaction philosophy.** `whileTap 0.97`; outline pills that fill with plum
  on hover; interest pills invert to plum-on-blush when selected.
- **Layout philosophy.** Centre axis throughout. Only the About section breaks it
  (`text-center lg:text-left`) — and even that resolves to centred on tablet and
  mobile.
- **Spacing philosophy.** `py-16 → lg:py-20` on the short centred sections;
  `py-20 → lg:py-28` on services and journey. Service blocks are separated by
  `space-y-12` — the largest inter-item gap in Part 2, because each service is
  presented as a *proposal* and needs isolation.
- **Photography philosophy.** Two treatments, deliberately contrasted: the
  **cameo** (oval, ringed, formal — used for Chandni-as-founder) and the
  **polaroid** (rectangular, tilted, shadowed, script-captioned — used for
  Chandni-in-life). Formal vs. candid, encoded in shape.
- **Typography philosophy.** Script does more work here than in any other edition:
  the masthead wordmark itself is script `text-3xl`, plus essences, polaroid
  captions, the `“` mark at `text-5xl`, `write back` at `text-4xl`, and
  `with love, élevé`. Seven distinct script uses.
- **Component philosophy.** Three bespoke components (`OvalPhoto`, `Polaroid`,
  `Diamond`) plus the double-border frame pattern used twice (services, enquiry).
- **Colour philosophy.** Monochromatic rose with a plum anchor. The critical
  decision is that the ink is **plum, not black** — `#4E3237` keeps the whole page
  inside one warm family and is what stops it reading as a children's brand.
- **Conversion philosophy.** Emotional and consent-framed. *Begin the romance* →
  *Say yes to this one* → *Seal it with a kiss*. Charming, and a real risk: the
  metaphor may read as unserious to a corporate buyer.
- **Accessibility philosophy.** Good. Plum-on-blush ≈ 10.5:1. The header's
  `Write to her` link is `hidden sm:block`, so on mobile the header CTA disappears
  — the only place in Part 2 where a control is dropped rather than adapted.

## Colour system

| Role | Value |
| --- | --- |
| Primary ground | `#FAF0F0` |
| Card / panel | `#FFFBFB` |
| Journey band | `#F6E7E8` |
| Image placeholder | `#F2DEDE` |
| Primary ink | `#4E3237` (INK, plum) |
| Body | `#6E4A52` (SUB) |
| Accent | `#C4808E` (ROSE) — rules, `⋄`, bullets, cameo ring |
| Deep accent | `#A05A68` (DEEP_ROSE) — script, emphasis italics, focus state |
| Dark room | `#4E3237` with `#FAF0F0` text, `#E5C2C9` labels |
| Hover ink | `#6B424B` |
| Shadow | `0 26–28px 50–55px -32/-34px rgba(78,50,55,0.5)` |

- **Contrast strategy.** INK ≈ 10.6:1, SUB ≈ 6.2:1 on ground. ROSE is decorative
  only. DEEP_ROSE is used for display italics ≥ 20px, which keeps it legal.
- **Luxury created.** Almost entirely through **frames and shadow** rather than
  colour: the double border, the cameo ring with `p-2.5/3` breathing space, and the
  long low-opacity plum shadows under the polaroids. Remove those three and the
  palette collapses into "pink website".
- **Strengths.** Most emotionally distinctive palette in the project. Instantly
  recognisable. Photographs with warm skin tones sit inside it naturally.
- **Weaknesses.** The highest-risk palette commercially — it strongly genders the
  brand and narrows the addressable audience. Pink is also the hardest colour to
  keep from looking cheap on low-quality displays.

## Typography

| Element | Spec |
| --- | --- |
| Wordmark | `font-script text-3xl` DEEP_ROSE + `8.5px/0.28em` sub-line |
| H1 | `display clamp(2.3rem, 5.6vw, 4.2rem)`, `leading-1.12`, centred, 2 masked lines |
| H2 (Vow) | `display clamp(1.6rem, 3.2vw, 2.4rem)`, `font-normal`, `leading-1.45`, 4 masked lines, stagger 0.11 |
| H2 (About) | `display clamp(2rem, 4vw, 3.1rem)`, `leading-1.1` |
| H2 (Trousseau / Courtship) | `display clamp(2rem, 4.4vw, 3.3rem)`, `leading-1.08` |
| H3 (Service) | `display 2rem` → `md:2.4rem` |
| H3 (Billet) | `display 1.5rem font-medium leading-tight` |
| Body | `14.5px font-light leading-1.95` SUB |
| Service description | `14px font-light leading-1.9`, `max-w-xl` centred |
| Billet body | `13px font-light leading-1.85` |
| Include item | `13px font-light leading-relaxed` |
| Eyebrow | `sans 10px uppercase tracking-0.24em` |
| Service N° | `sans 9px uppercase tracking-0.26em` |
| Billet label | `sans 9px uppercase tracking-0.26em` |
| Caption (cameo) | `sans 9px uppercase tracking-0.22em` |
| Caption (polaroid) | `font-script text-xl` DEEP_ROSE, centred |
| Quote | `display 1.35rem → md:1.5rem italic leading-1.65`, centred |
| Quote mark | `font-script text-5xl` ROSE, `aria-hidden` |
| Script (enquiry title) | `font-script text-4xl` DEEP_ROSE |
| Form input | **centred text**, 16px mobile → 15px `sm` |
| Button | `sans 10–11px uppercase tracking-0.2em`, `rounded-full` |

- **Hierarchy quality — good, with one flaw.** The centred axis means hierarchy
  must be carried entirely by size and colour, with no positional cue. It mostly
  works; the weakest moment is the services block, where name / essence / price /
  description / includes / note / CTA are all centred and the eye has no rail.
- **Editorial treatment.** `N° 01` (with the degree-ordinal) rather than `01` is a
  precise stationery reference. The `“` set in script at `text-5xl` above each
  testimonial is the single prettiest typographic detail in Part 2.
- **Strengths.** The script layer is used with real discipline — always for
  *feeling*, never for *information*.
- **Weaknesses.** Centred body copy at `max-w-xl` in the services block is
  genuinely harder to read than left-aligned. The `includes` list correctly breaks
  to `text-left` inside a centred parent, which shows the author knew — but the
  descriptions above it stay centred.

## Layout system

- **Containers vary deliberately by section:** hero `900px`, vow `760px`, about
  `1140px`, trousseau `880px`, courtship `1140px`, love notes `760px`, blooms
  `1000px`, write-back `720px`. The page **narrows and widens like breathing** —
  the most varied container rhythm in the project.
- **Header:** absolutely-positioned side links with a centred two-line lockup.
- **Hero:** single centred column — eyebrow, headline, support, diamond, cameo at
  `w-[min(66vw,330px)]`, CTA. The cameo *below* the headline rather than beside it
  is what makes this the most "invitation-like" hero of the fifteen.
- **About:** `lg:grid-cols-2` with a `max-w-md` two-up polaroid cluster (one
  `mt-8` for stagger) against left-aligned copy.
- **Trousseau:** `space-y-12` stack of full-width double-framed panels — *not* a
  grid. Each service is a page-width event.
- **Courtship:** `sm:grid-cols-2 lg:grid-cols-3` of tilted billets, delay keyed to
  `(i % 3) * 0.12` so each row cascades left-to-right independently.
- **Blooms:** dark band, `md:grid-cols-2`, `text-left` inside a centred section —
  correctly overridden.
- **Write back:** `720px` double-framed panel, entirely centred including inputs.
- **Composition & balance.** Perfectly stable, deliberately static. The only
  dynamism comes from the rotations.
- **Reading order.** Linear and correct throughout.
- **Desktop.** 3-up billets; two-column about; wide dark band.
- **Tablet.** Billets go 2-up at `sm`; about stacks at `lg`, so 768–1023px shows a
  centred polaroid pair above centred copy — a genuinely attractive tablet state.
- **Mobile.** Everything single-column and centred; `Write to her` header link
  hidden; cameo scales with `66vw`; polaroid pair stays 2-up in a `max-w-md`
  container, which keeps the keepsake-cluster idea intact at small size.

## Section-by-section

### Masthead
Centred script lockup with absolutely-positioned side controls.
*Luxury 8 · Editorial 8 · Craft 7 — the two-line script/micro-caps lockup is the
best wordmark treatment in Part 2.*

### Hero
Two masked lines only — "Dressed in / *soft* confidence." The shortest headline in
the project, and the most confident. *Luxury 8 · Editorial 8 · Craft 8.*

### The Vow
Diamond → four masked lines → diamond. Pure typography, `760px`, no image.
"Style is not vanity — it is *self-respect*, made visible. This is a promise to
dress like you matter. Because you do." **The strongest emotional writing in the
entire project.** *Luxury 8 · Editorial 10 · Craft 8.*

### About
Polaroid pair + biography on `#FFFBFB`. *Luxury 8 · Editorial 8 · Craft 9 — the
formal-cameo / candid-polaroid distinction is excellent art direction.*

### The Trousseau
Three double-framed proposals. Includes list breaks to a two-column left-aligned
grid inside the centred frame. *Luxury 8 · Editorial 7 · Craft 8 — the frame is
beautiful; the centred body copy costs it.*

### The Courtship
Six tilted billets on `#F6E7E8`. *Luxury 7 · Editorial 8 · Craft 8 — the tilt is
charming but it is the one place the edition edges toward "scrapbook".*

### Love Notes
Three centred quotes with `text-5xl` script quote marks, `space-y-14`.
*Luxury 8 · Editorial 9 · Craft 9 — best testimonial treatment in Part 2.*

### What Blooms
Plum band, two columns, `⋄` markers in `#E5C2C9`. The page's only inversion.
*Luxury 9 · Editorial 8 · Craft 8.*

### Write Back
Double-framed, script title, centred inputs, `Seal it with a kiss`.
*Luxury 8 · Editorial 8 · Craft 8 — the most charming form in the project; also
the most polarising.*

### Footer
Script `with love, élevé` + copyright. *Luxury 7 · Editorial 7 · Craft 6.*

## Component library

| Component | Behaviour |
| --- | --- |
| `OvalPhoto` (cameo) | `rounded-[50%]` ring with `p-2.5/3` gap, inner `rounded-[50%]` crop, `opacity 0 + scale 0.93 → 1` over 1.3s, 9px caps caption |
| `Polaroid` | `p-3` white border, long plum shadow, `y 34 + rotate × 2.4 → rotate` over 1.25s, script caption |
| `Diamond` | 12px rule + `⋄` + 12px rule |
| Double frame | outer `border p-1.5` + inner `border` + content — used on services and enquiry |
| Billet | tilted bordered card, shadowed, `(i % 3)` cascade |
| Interest pill | `rounded-full`, plum-filled when active |

## Photography usage

`marbleSmile` (hero cameo) · `archDress` + `stoolCrossed` (polaroids). **Only
three photographs.** The journey uses **no images at all** — the billets are pure
text. This is the **most photo-sparse edition in the project** and it is a
deliberate, defensible choice (a love letter has few enclosures) but it wastes 19
of 22 available frames and makes the page feel lighter-weight than editions that
use nine or more.

## Motion inventory

| Element | Animation | Why it works |
| --- | --- | --- |
| Polaroids | `y 34 + rotate ×2.4 → rotate`, 1.25s | Reads as a print being placed by hand. |
| Cameo | `opacity + scale 0.93 → 1`, 1.3s | A locket opening. Slow enough to feel ceremonial. |
| Billets | `y 32 + rotate ×2.2 → rotate`, 1.15s, `(i%3)` cascade | Letters dealt onto a table, row by row. |
| Headlines | `Lines`, stagger 0.11 | Vows delivered one clause at a time. |
| Hero eyebrow | plain `y 10` fade | Correctly the quietest element. |
| Diamonds | `Reveal y={8}` | Almost imperceptible. |

**Zero loops. Zero parallax. Zero blur.** The rotation system is the only motion
signature and it is used exactly twice.

## UX assessment

- **Navigation.** Weakest in Part 2 — one back-link and one CTA that is *hidden on
  mobile*. There is no `bl-services` anchor, so nothing links to the trousseau.
- **Conversion path.** Header (desktop only) → hero → three service CTAs → form.
  All to `bl-write`.
- **Friction.** None functionally. The metaphor is the friction: a corporate client
  may hesitate at `Seal it with a kiss`.
- **Trust signals.** Named founder, three named testimonials, transparent pricing,
  "every letter is read, and every letter is answered."
- **Missing.** FAQ, booking, services anchor, mobile header CTA, and any imagery in
  the journey.

## Performance notes

- Only 3 images total — **by far the lightest payload of the fifteen.**
- Six long shadows (`blur 50–55px`) are the main paint cost; all static.
- `rotate` + `y` transforms are compositor-only.
- **Fastest edition in the project.**

## Art direction critique

- **What is genuinely original.** The cameo/polaroid formal-vs-candid system; the
  double frame; the script `“`; the ring/proposal metaphor for tier selection.
- **What is derivative.** Tilted cards are a familiar scrapbook trope and are the
  least sophisticated moment on the page.
- **What would elevate it.** (1) Use more photographs — the courtship section is
  crying out for six small polaroids. (2) Left-align the service descriptions
  inside their centred frames. (3) Restore the header CTA on mobile. (4) Consider
  dropping the tilt on the billets and letting the double frame carry them instead
  — it would raise the whole edition's register.

## Scores

| Criterion | Score | Justification |
| --- | ---: | --- |
| Luxury feel | 7.5 | Frames and shadows do a lot; pink does a little against it. |
| Elegance | 8.5 | Genuinely graceful, especially the vow and love notes. |
| Uniqueness | 8.5 | No other edition looks remotely like this. |
| Photography | 6.0 | Beautiful treatments, but only three images used. |
| Typography | 8.5 | The script layer is the best-managed in the project. |
| Colour | 7.5 | Distinctive and warm; commercially narrowing. |
| Layout | 7.5 | Lovely container rhythm; centred body copy costs readability. |
| Motion | 8.0 | The settle is well-judged; the tilt is a little obvious. |
| Whitespace | 8.5 | `space-y-12/14` gives every element room. |
| Detail | 9.0 | `N°`, script quote marks, ring gaps, cameo/polaroid split. |
| Consistency | 9.0 | The romance metaphor holds from masthead to footer. |
| Emotion | 9.5 | **Highest emotional score in the project.** |
| Conversion | 7.0 | Warm and consent-framed, but no mobile header CTA and no services anchor. |
| Accessibility | 8.0 | Good contrast; hidden mobile control and centred long copy cost it. |
| Performance | 9.5 | **Fastest edition in the project.** |
| Responsiveness | 8.0 | Good, except the dropped mobile CTA. |
| **Overall** | **8.2** | |

---
---

# EDITION 08 — THE LAVENDER

`/lavender` · Mood: *Lilac · a daydream* · Palette `#EFECF7 / #6E5F9E / #38304E`

**Unique in the project:** the only edition with an **atmospheric background
system** — nine blurred `Orb` gradients positioned across five sections — and the
only one where **blur is the primary reveal mechanism** for both text and image.

## Direction

- **Creative direction.** A daydream rendered as a page. The premise: you already
  know how you want to look, you have seen it half-asleep, and the service is the
  practice of *waking that version up*. Sections are named for the stages of a
  dream — reverie, the interpreter of dreams, three dreams, the drift, when you
  wake.
- **Core inspiration.** Soft-focus fashion photography; lens bokeh; Aphex-Twin-era
  ambient sleeve art rendered in couture colours; the moment before a dream
  resolves.
- **Mood board.** Lilac smoke. A wisteria wall out of focus. Silk crumpled in
  half-light. Morning through gauze curtains.
- **Visual identity.** Cool lilac ground `#EFECF7`, near-white `#F8F6FC` panels,
  `#E0DAF0` bands, deep violet-navy ink `#38304E`, `#6E5F9E` accent. Rounded
  corners are used here and almost nowhere else (`rounded-2xl` photos,
  `rounded-3xl` cards and enquiry panel) — softness is encoded in radius.
  `◦` is the punctuation mark.
- **Emotional feeling.** Dreamlike, floating, slightly nostalgic. The most
  *cinematic* of the five.
- **Brand personality.** The interpreter. Perceptive, softly spoken, exacting
  underneath ("softly spoken, exactingly precise" — the copy names its own
  personality).
- **Luxury perception.** *Atmospheric luxury.* This is the only edition where
  luxury comes from **light** rather than from paper, frames or restraint — closest
  in feel to a fragrance campaign.
- **Target audience.** Creative professionals, 28–45; art directors, architects,
  founders in design-led fields. The most aesthetically-sophisticated buyer.
- **Editorial style.** Interior, psychological. "Most wardrobes are collections of
  *other people's decisions* — trends, gifts, versions of you that expired years
  ago." This is the single most **diagnostic** line in the project and the
  strongest problem-statement writing anywhere in the fifteen.
- **Storytelling style.** Dream logic: haze → naming the fog → the interpreter →
  three recurring dreams → the drift from haze to clarity → what stays when you
  wake.
- **UX philosophy.** Softness must not cost clarity. Despite the atmosphere, every
  section keeps a hard structural skeleton (12-col hero, 3-up cards, numbered
  journey) — the blur is a *finish*, not a *structure*.
- **Motion philosophy.** **Focus-pulling.** `BlurIn` (`blur 6px + y 14 → 0`, 1s) is
  applied to nearly every text block; `FloatPhoto` (`blur 8px + scale 1.03 → 1`,
  1.15s) to every image. The whole page resolves like a lens finding focus. It is
  used **more than 30 times**, making it the most systematically-applied single
  animation in the project.
- **Interaction philosophy.** Colour-only hovers; `whileTap 0.97`; the enquiry
  pills invert to near-white on the dark panel.
- **Layout philosophy.** Asymmetric hero (7/4), then centred, then two-column,
  then 3-up, then a `[1fr_200px]` journey that alternates image side via
  `lg:order-first`.
- **Spacing philosophy.** The most generous in Part 2: journey uses `space-y-24`
  with `mt-20` lead-in — nearly double Garden's rhythm. Deliberate: dreams need
  room between them.
- **Photography philosophy.** Photographs are **memories, not documents** —
  rounded, shadowed (`0 44px 90px -46px`), and arriving out of focus. The journey
  images are only `200px` wide and **hidden below `lg`**, which makes the mobile
  journey text-only.
- **Typography philosophy.** Largest hero in Part 2 (`4.4rem`) and the loosest
  philosophy leading (`1.4`). The headline is *not* masked (`Lines` is not
  imported) — it blurs in as a whole block, which is the correct choice: masked
  lines are crisp, and crispness is off-brand here.
- **Component philosophy.** Three: `Orb`, `BlurIn`, `FloatPhoto`. `Orb` is pure
  atmosphere with `pointer-events-none` and `aria-hidden`.
- **Colour philosophy.** Cool analogous violet with a `#E2D0EA` pink-lilac orb
  smuggled in for warmth. The gradient `from-[#F8F6FC] to-[#EFECF7]` on the
  founder band is the only gradient in the project — used once, at 4% value
  difference, which is why it doesn't read as "AI gradient".
- **Conversion philosophy.** *Step into the dream* → *Dream this one* → *Send it
  to Chandni*. Dark enquiry panel floating on lilac with an orb behind it — the
  most visually arresting conversion moment in Part 2.
- **Accessibility philosophy.** Mostly strong (ink ≈ 12:1) with two real issues:
  animated `filter: blur()` on text is a motion-sensitivity concern, and the
  journey images vanish entirely below `lg` rather than reflowing.

## Colour system

| Role | Value |
| --- | --- |
| Primary ground | `#EFECF7` |
| Panel / card | `#F8F6FC` |
| Band | `#E0DAF0` (results, image placeholder) |
| Primary ink | `#38304E` (INK) |
| Body | `#554A6E` (SUB) |
| Accent | `#6E5F9E` (ACCENT) |
| Orb palette | `#CDC2EC/70`, `#E2D0EA/60`, `#C8BCE8/50`, `#DACFEF/70`, `#D5C9F0/60`, `#D9CDF2/60`, `#DCD2F1/60`, `#D3C7EF/70` |
| Card border | `#8D7EB5` at 25–30% |
| Dark room | `#38304E` with `#F8F6FC` text, `#CFC4E8` labels, `#D8CFEA` body |
| Journey numeral | `#8D7EB5/20` |
| Hover ink | `#4A3F68` |
| Shadow | `0 36–44px 70–90px -46/-48px rgba(56,48,78,0.55)` |

- **Contrast strategy.** INK ≈ 12.1:1, SUB ≈ 7:1. Inside the dark panel,
  `#F8F6FC` ≈ 12:1 and `#CFC4E8` ≈ 7.5:1. All safe.
- **Luxury created.** Through **depth**. Nine orbs at `blur-3xl` behind
  semi-transparent panels create genuine z-axis atmosphere without a single
  photograph in the background. It is the only edition that feels three-dimensional.
- **Strengths.** Beautiful, cohesive, unmistakably designed. The one edition that
  would photograph well as a case-study image.
- **Weaknesses.** Lilac is the most fashion-cyclical colour in the palette set — it
  will date faster than ivory, sage or blue. Nine blurred elements is also the
  heaviest paint cost in the project.

## Typography

| Element | Spec |
| --- | --- |
| H1 | `display clamp(2.4rem, 5.6vw, 4.4rem)`, `font-medium`, `leading-1.12`, `tracking--0.01em`, explicit `<br/>` breaks |
| H2 (Reverie) | `display clamp(1.7rem, 3.4vw, 2.6rem)`, `font-normal`, `leading-1.4`, centred |
| H2 (Dreamer) | `display clamp(2rem, 4vw, 3.2rem)`, `leading-1.1` |
| H2 (Services / Drift) | `display clamp(2rem, 4.4vw, 3.4rem)`, `leading-1.08` |
| H2 (Enquire) | `display clamp(1.9rem, 4vw, 3rem)` on dark |
| H3 (Service) | `display 1.85rem font-medium leading-tight` |
| H3 (Passage) | `display text-3xl` → `md:2.3rem` |
| Ghost numeral | `display 72px` → `md:110px` italic, `#8D7EB5/20`, absolutely positioned `-top-10/-14` |
| Body | `14.5–15px font-light leading-1.9/1.95` |
| Service body | `13.5px font-light leading-1.85` |
| Eyebrow | `sans 10px uppercase tracking-0.26em` |
| Dream label | `sans 9px uppercase tracking-0.26em` |
| Point | `sans 10.5px uppercase tracking-0.16em` |
| Caption | `sans 9px uppercase tracking-0.22em` |
| Quote | `display 1.3rem → md:1.45rem italic leading-1.7`, `border-l-2` accent, `pl-7` |
| Script | `text-2xl` ACCENT — essences, role line, `sweet dreams` |
| Button | `sans 10–11px uppercase tracking-0.2em`, `rounded-full` |

- **Hierarchy quality — excellent.** The ghost numeral behind each journey passage
  is the standout device: `110px` italic at 20% opacity, bleeding above the text
  block, giving the drift section a magazine-chapter weight that costs nothing in
  contrast.
- **Editorial treatment.** Emphasis italics are always the *concept* word —
  `dreams`, `other people's decisions`. `◦` (white bullet) rather than a filled
  dot is a small, correct softness decision.
- **Strengths.** The reverie headline at `leading-1.4` with a mid-sentence italic
  clause is the most beautifully set paragraph-as-headline in the project.
- **Weaknesses.** Hard `<br/>` breaks in the H1 mean the line break is fixed
  regardless of viewport; at 500–640px the second line can crowd.

## Layout system

- **Container:** `max-w-[1240px]` hero/services, `780px` reverie, `1000px`
  journey, `1100px` results, `820px` words, `860px` enquiry.
- **Root:** `overflow-x-clip` — required, because the orbs extend to `left-[-12%]`
  and `right-[-10%]`. A necessary and easily-missed detail.
- **Hero:** `lg:grid-cols-12`, copy 7 / photo 4 at `col-start-9`, `lg:min-h-[86vh]`.
- **Dreamer:** `lg:grid-cols-2` with a `max-w-sm` photo — the photo is *smaller*
  than the text column, which is unusual and works.
- **Services:** `lg:grid-cols-3` of `rounded-3xl` cards with `h-full` +
  `flex-col` + `self-start` CTA — correct equal-height card construction.
- **Drift:** `lg:grid-cols-[1fr_200px]` with `i % 2 === 1 && lg:order-first
  lg:justify-self-start` alternating the image side. `space-y-24`.
- **Results:** `#E0DAF0` band, `md:grid-cols-2`.
- **Words:** left-bordered blockquotes, `space-y-12`.
- **Enquire:** the dark panel is *not* full-bleed — it is a `rounded-3xl` island
  inside `px-6`, with an orb behind it. **This is the best conversion composition
  in Part 2.**
- **Composition & balance.** The orbs are positioned to counterweight content:
  where text sits left, the orb sits right. Deliberate and effective.
- **Desktop.** Full atmosphere, 3-up cards, alternating journey images.
- **Tablet.** Cards stack at `lg`; journey images disappear at `lg`; orbs remain.
  768–1023px is a single-column lilac column with atmosphere — attractive but
  image-poor.
- **Mobile.** Journey is text-only (six passages, no photos). Ghost numerals drop
  to `72px`. Orbs still render at full size, which is the main mobile paint cost.

## Section-by-section

### Masthead
Standard three-part bar, `z-20` so it sits above the orbs. *Luxury 7 · Editorial 7
· Craft 7.*

### Hero
Three orbs, 7/4 grid, `86vh`, four sequenced `BlurIn` blocks at 0 / 0.15 / 0.3 /
0.45. *Luxury 9 · Editorial 8 · Craft 9 — best atmospheric hero in the project.*

### Reverie
`780px` centred, one orb, a diagnostic headline and a resolution paragraph.
*Luxury 8 · Editorial 10 · Craft 8 — the best problem-statement in the fifteen.*

### The Dreamer
Gradient band, portrait `max-w-sm`, biography. *Luxury 8 · Editorial 8 · Craft 8.*

### Three Dreams
3-up rounded cards. *Luxury 8 · Editorial 7 · Craft 8 — the closest any edition
comes to a conventional card grid; the radius and shadow save it, but this is the
weakest section on the page.*

### The Drift
Six passages with ghost numerals and alternating `200px` plates, `space-y-24`.
*Luxury 8 · Editorial 9 · Craft 9.*

### When You Wake
`#E0DAF0` band, two columns, `◦` markers. *Luxury 7 · Editorial 7 · Craft 7.*

### Words
Left-ruled blockquotes. *Luxury 8 · Editorial 8 · Craft 7.*

### Enquire
Floating dark `rounded-3xl` island with an orb behind. *Luxury 9 · Editorial 8 ·
Craft 9.*

### Footer
Script `sweet dreams`. *Luxury 7 · Editorial 7 · Craft 6.*

## Component library

| Component | Behaviour |
| --- | --- |
| `Orb` | absolutely-positioned `rounded-full blur-3xl`, `pointer-events-none`, `aria-hidden`; 9 instances across 5 sections |
| `BlurIn` | `opacity 0 + blur 6px + y 14 → 0`, 1s, once, `-10%` margin |
| `FloatPhoto` | `opacity 0 + blur 8px + scale 1.03 → 1`, 1.15s, `rounded-2xl`, long shadow |
| Service card | `rounded-3xl`, `h-full flex-col`, `self-start` CTA |
| Ghost numeral | `110px` italic at 20%, absolute, `pointer-events-none select-none` |
| Interest pill | inverts to `#F8F6FC` fill on the dark panel |

## Photography usage

`blueHair` (hero) · `windowPortrait` (dreamer) · six `JOURNEY.photo` plates —
**eight images, but six of them only render at `lg` and above.** On phones and
tablets the edition shows **two photographs total**. This is the most significant
responsive content loss in the project.

## Motion inventory

| Element | Animation | Why it works |
| --- | --- | --- |
| All text | `BlurIn`, 1s | The page resolves like a lens. Applied ~30×, which is what makes it a *system* rather than an effect. |
| All images | `FloatPhoto`, 1.15s | Memory becoming clear. |
| Hero sequence | 0 / 0.15 / 0.3 / 0.45 | A slow, confident cascade. |
| Cards | `i * 0.15` | The longest inter-item delay in Part 2 — appropriate for three big cards. |
| Buttons | `whileTap 0.97` | — |

**Zero loops. Zero parallax.** The `useReducedMotion` guard was removed during the
motion-softening pass; the blur values are now low enough (6–8px) that this is
acceptable, but it is the one edition where a reduced-motion variant would still be
worth restoring.

## UX assessment

- **Navigation.** Back-link + Enquire, plus a hero secondary that jumps to
  `lv-services`. Adequate.
- **Conversion path.** Header → hero primary → hero secondary → three card CTAs →
  dark panel. Five touchpoints, the most in Part 2.
- **Friction.** None. The dark form panel on light ground is unusually easy to
  focus on.
- **Trust signals.** Founder named/pictured, three testimonials, transparent
  pricing, personal-reply promise.
- **Missing.** FAQ, booking, and — critically — **journey photography below
  1024px**.

## Performance notes

- Nine `blur-3xl` orbs are large composited layers; on low-end mobile this is the
  heaviest background cost in the project.
- ~30 animated `filter: blur()` transitions — filters are the most expensive
  animatable property used anywhere in the fifteen.
- Only 2 images actually load on mobile, which partly offsets the above.
- **Heaviest paint, lightest payload.** Net: acceptable on modern devices,
  the riskiest of the five on old ones.

## Art direction critique

- **What is genuinely original.** The orb atmosphere; blur-as-reveal applied
  systemically; the ghost numerals; the floating dark enquiry island; the single
  4%-delta gradient.
- **What is derivative.** The 3-up rounded service cards — the one section that
  looks like a generic product page.
- **What would elevate it.** (1) Show the journey photographs on mobile — even at
  `120px`. (2) Break the service cards out of the card idiom (Garden's divided
  block would work beautifully here). (3) Replace the hard `<br/>` in the H1 with a
  `Lines`-style break or a `max-w` constraint. (4) Reduce orb count from nine to
  five and increase their size — same atmosphere, half the paint.

## Scores

| Criterion | Score | Justification |
| --- | ---: | --- |
| Luxury feel | 9.0 | Atmospheric depth no other edition achieves. |
| Elegance | 8.5 | Soft without being weak. |
| Uniqueness | 9.0 | The orb + blur system is unrepeatable. |
| Photography | 6.5 | Beautiful treatment, but 6 of 8 images are desktop-only. |
| Typography | 8.5 | Ghost numerals and the reverie setting are exceptional. |
| Colour | 8.0 | Gorgeous; the most cyclical/datable palette. |
| Layout | 8.5 | Strong skeleton under the softness; the enquiry island is the highlight. |
| Motion | 9.0 | The most systematically-applied motion idea in the project. |
| Whitespace | 9.0 | `space-y-24` is the most generous rhythm in Part 2. |
| Detail | 8.5 | `overflow-x-clip`, counterweighted orbs, `h-full` card discipline. |
| Consistency | 9.0 | Dream metaphor holds throughout. |
| Emotion | 8.5 | Wistful and cinematic. |
| Conversion | 8.5 | Five touchpoints and the best-composed form in Part 2. |
| Accessibility | 7.5 | Good contrast; blur-on-text and hidden mobile images cost it. |
| Performance | 6.5 | Nine blurred orbs + ~30 animated filters. |
| Responsiveness | 7.0 | Loses six of eight images below `lg`. |
| **Overall** | **8.3** | |

---
---

# EDITION 09 — THE PISTACHIO

`/pistachio` · Mood: *Olive · a specification sheet* · Palette `#EDF2E0 / #4A5734 / #333D22`

**Unique in the project:** the only **document-object** edition — the entire page
is a bordered sheet floating on a margin — the only **tabular** services layout,
the only **uppercase** headlines, and the only edition with **registration ticks**.
It is the most conceptually radical of the fifteen.

## Direction

- **Creative direction.** A tailor's pattern specification. Not a website styled
  like a document — an actual *document*, with a numbered section register (001–007),
  a spec table, figure captions, registration marks and an explicit "End of
  specification" colophon.
- **Core inspiration.** Savile Row pattern cards; Swiss technical documentation;
  architectural drawing sheets; Dieter Rams' Braun manuals; the back page of a
  Yohji Yamamoto lookbook.
- **Mood board.** Olive drafting paper. A tailor's chalk line. Registration
  crosses on a printer's proof. A ruled ledger. `+` marks everywhere.
- **Visual identity.** `#EDF2E0` outer margin, `#F3F6EA` sheet, `#E9EFD9` ruled
  strips, `#333D22` olive-black ink. **Zero border radius anywhere.** `+` is the
  system glyph, used as: section-strip marker, corner registration tick, list
  bullet, and the plus in `Fig. 01–03`.
- **Emotional feeling.** Precise, competent, quietly authoritative. The one
  edition that makes styling feel like *engineering*.
- **Brand personality.** The pattern-maker. Unsentimental, exact, faintly severe.
  Says "measured first, mapped second, cut once" and means all three.
- **Luxury perception.** *Technical luxury* — the luxury of expertise. This is the
  only edition where the price feels justified by **method** rather than by taste,
  atmosphere or care. Closest in register to a Swiss watchmaker's spec sheet.
- **Target audience.** Analytical buyers; men as well as women (the only edition of
  the fifteen that is meaningfully gender-neutral); consultants, engineers,
  finance, architects. People who want to see the *system* before they buy.
- **Editorial style.** Technical register. `001 / Brief`. `Op. 03`. `Q-02`.
  `Fig. 01–03`. Even the philosophy is framed as a quoted specification clause.
- **Storytelling style.** Documentation, not narrative. Brief → philosophy →
  programmes & pricing → method (six operations) → outcomes → testimony → enquiry.
  **The only edition that presents outcomes as "guaranteed by method".**
- **UX philosophy.** Scannability above all. The section register (001–007) means
  a reader can navigate by number. The services table can be read across in five
  seconds — the fastest comparison of any edition in the project.
- **Motion philosophy.** **Mechanical.** `ClipReveal` wipes left-to-right with *no
  fade and no drift* — like a plotter drawing. Everything else is a short
  `Reveal`. Delays are the shortest in the project (`i * 0.06`), because a machine
  doesn't linger.
- **Interaction philosophy.** Square buttons. Underlined `Select →` links. Hover
  fills with `#E9EFD9` or `#46531F`. No radius, no shadow, no lift.
- **Layout philosophy.** Everything is a cell in a ruled grid. `divide-x`,
  `divide-y`, `border-b`, `gap-[1px]` on a dark background to fake hairline rules
  between images. The 3-column figure strip and the 4-column services table are the
  two densest layouts in the project.
- **Spacing philosophy.** Tightest in the project — `py-10` to `lg:py-16`. The
  ruled structure supplies the separation that whitespace supplies elsewhere. This
  is why the page reads as *efficient* rather than *cramped*.
- **Photography philosophy.** Photographs are **figures**. Three pinstripe frames
  presented as a single `Fig. 01–03` strip with a 1px rule between them, captioned
  as "a study in tailoring". **The journey uses no photographs at all.** The image
  count is the second-lowest in the project — a defensible choice for a spec sheet,
  but it means the edition never shows warmth.
- **Typography philosophy.** The only **uppercase** display type in the fifteen
  (`H1` and the enquiry `H2`), with positive `tracking-0.005em` rather than
  negative. Lowercase italic is used *inside* the uppercase headline
  (`cut to *measure*.`) — a genuinely sophisticated contrast that is the single
  best typographic idea in Part 2.
- **Component philosophy.** Four bespoke: `SectionHead`, `ClipReveal`, `Ticks`,
  `SpecPhoto`. Plus a static `SPECS` table.
- **Colour philosophy.** Four olives and nothing else. No secondary accent at all —
  `SUB` doubles as the accent, which is why the page reads as monochrome.
- **Conversion philosophy.** Functional and confident. *Request a fitting* →
  `Select →` → *Submit specification*. `✓ Mail app opened — ready to send` is the
  only checkmark confirmation in the project. No emotional language whatsoever.
- **Accessibility philosophy.** Best-structured of the five: 4-column form pills
  in a real grid, square inputs with visible borders (rather than underlines),
  `✓` outcome markers, and 16px mobile inputs. Contrast ≈ 12:1.

## Colour system

| Role | Value |
| --- | --- |
| Outer margin | `#EDF2E0` |
| Sheet | `#F3F6EA` |
| Ruled strip / placeholder | `#E9EFD9` |
| Input ground | `#FAFCF3` |
| Primary ink | `#333D22` (INK) |
| Body / label | `#4A5734` (SUB) |
| Rules | `#333D22` at 25–30% |
| Hover ink | `#46531F` |

- **Contrast strategy.** INK ≈ 12.4:1, SUB ≈ 7.4:1. Every rule is `/25` — a single
  consistent value across the entire page, defined once as the `LINE` constant.
- **Luxury created.** Through **precision**. The four registration ticks at
  `-4px/-7px` offsets, the `gap-[1px]` hairlines between figures, the single shared
  `LINE` token — these read as *care taken*, which is the technical equivalent of
  luxury.
- **Strengths.** The most disciplined colour system in the project (one hue, four
  values, one opacity for all rules). Extremely printable.
- **Weaknesses.** Olive/khaki is the least *desirable* colour of the five — it
  signals utility, not aspiration. It also flattens the photographs, which are all
  warm-neutral and now sit against a cool-green surround with no accent to bridge
  them.

## Typography

| Element | Spec |
| --- | --- |
| Wordmark | `display text-lg lowercase` + `font-script text-base` SUB |
| H1 | `display clamp(2.2rem, 5vw, 4rem)`, **uppercase**, `leading-1.1`, `tracking +0.005em`, with a lowercase italic inline |
| H2 (Philosophy) | `display clamp(1.7rem, 3.4vw, 2.6rem)`, `font-normal`, `leading-1.3`, set as a quotation |
| H2 (Enquiry) | `display clamp(1.9rem, 4vw, 3rem)`, **uppercase**, `leading-1.06` |
| H3 (Programme) | `display 1.7rem font-medium leading-tight` |
| H3 (Operation) | `display 1.45rem font-medium leading-tight` |
| Price | `display 1.35rem font-medium leading-none` + `10px/0.2em` USD beneath |
| Section head | `sans 9.5px uppercase tracking-0.26em` — `002 / PHILOSOPHY` |
| Table header | `sans 9px uppercase tracking-0.24em` |
| Spec key | `sans 9px uppercase tracking-0.24em`; value `sans 13px font-light` |
| Body | `14–14.5px font-light leading-1.9` |
| Programme body | `13px font-light leading-1.85` |
| Include item | `12.5px font-light leading-relaxed` with `+` marker |
| Operation body | `12.5px font-light leading-1.85` |
| Point | `sans 10px uppercase tracking-0.16em` |
| Figure caption | `sans 9px uppercase tracking-0.22em` |
| Testimony ref | `sans 9px uppercase tracking-0.26em` — `Q-01` |
| Quote | `display 1.15rem italic leading-1.65` |
| Numeral | `display text-lg italic` SUB |
| Colophon | `sans 9px uppercase tracking-0.22em` — "End of specification — 009 / Pistachio" |
| Button | `sans 9.5–10.5px uppercase tracking-0.22em`, square |

- **Hierarchy quality — exceptional for scanning, weaker for reading.** The
  numbered register plus the table header row means the page has a *table of
  contents built into its body*. No other edition achieves this.
- **Editorial treatment.** The uppercase-with-lowercase-italic headline is the
  best single typographic move in Part 2. `Q-01`, `Op. 03`, `Fig. 01–03` and
  `N°`-free numbering are all internally consistent technical conventions.
- **Strengths.** Every label is a *reference*, not a decoration.
- **Weaknesses.** Body sizes are the smallest in the project (12.5px in three
  places). At 1240px wide with four columns, the `Contents` cell can drop to a very
  narrow measure.

## Layout system

- **Root:** `px-3 py-3 sm:px-5 sm:py-5` on `#EDF2E0`, containing a bordered
  `max-w-[1240px]` sheet on `#F3F6EA`. **The page is an object with a margin** —
  unique in the project, and the reason it feels like a printed document.
- **Header strip:** `grid-cols-2 sm:grid-cols-3 divide-x` — wordmark / descriptor
  (hidden below `sm`) / back-link.
- **001 Hero:** `lg:grid-cols-12` — brief 7 / `SPECS` table 5. The spec table is a
  bordered stack of six ruled key-value rows with corner ticks.
- **Figure strip:** `grid-cols-3 gap-[1px]` on a `#333D22/25` background — the gap
  *is* the rule. Elegant technique.
- **003 Programmes:** `md:grid-cols-[64px_1.05fr_1.35fr_150px]` with a separate
  header row and `divide-x`. Below `md` it collapses to a stacked block per row.
  **The only true data table in the project.**
- **004 Method:** `sm:grid-cols-2 lg:grid-cols-3`, `gap-[1px]` on dark, ticks at
  the panel corners.
- **005 Outcomes:** `md:grid-cols-2` with 16px bordered `✓` boxes.
- **006 Testimony:** `md:grid-cols-3 md:divide-x`.
- **007 Enquiry:** `lg:grid-cols-12` — pitch 5 / form 7. Programme pills in a
  `grid-cols-2 sm:grid-cols-4`.
- **Colophon:** `sm:flex-row` justified strip.
- **Composition & balance.** Relentlessly gridded. The one release valve is the
  figure strip, which is full-bleed within the sheet.
- **Reading order.** Excellent — the numbered register makes it explicit.
- **Desktop.** Full 4-column table, 3-up method, 12-col hero and enquiry.
- **Tablet.** Table collapses at `md` (768px) into stacked blocks with the price
  row going `flex-row justify-between` — a genuinely well-handled table breakdown,
  and the hardest responsive problem solved in the project.
- **Mobile.** Header drops the descriptor cell; sheet margin shrinks to `px-3`;
  programme pills go 2-up; everything else stacks. The `Contents` column becomes a
  plain list, which is the correct degradation.

## Section-by-section

### Header strip
*Luxury 7 · Editorial 9 · Craft 9 — the divided cell header is more convincing as
a document than any other masthead in the project.*

### 001 / Brief
Uppercase headline + support + two square CTAs, beside the six-row `SPECS` table
with corner ticks. Then the `Fig. 01–03` strip.
*Luxury 8 · Editorial 10 · Craft 10 — **the best hero concept in Part 2**.*

### 002 / Philosophy
Two columns: a quoted spec clause and two short paragraphs, `self-end` aligned so
the paragraph baselines sit with the bottom of the quote.
*Luxury 8 · Editorial 9 · Craft 8.*

### 003 / Programmes & Pricing
The table. `N° / Programme / Contents / Investment`, with `Select →` per row.
*Luxury 8 · Editorial 10 · Craft 10 — **the single best services layout in the
entire project for comparison and decision-making**.*

### 004 / Method — six operations
3-up hairline grid with corner ticks. *Luxury 7 · Editorial 8 · Craft 8.*

### 005 / Outcomes — guaranteed by method
Two columns of `✓` items. The subtitle is the boldest claim in the project.
*Luxury 7 · Editorial 9 · Craft 8.*

### 006 / Testimony
Three divided cells with `Q-0X` references. Framing testimonials as *evidence
exhibits* is a genuinely clever reframe. *Luxury 7 · Editorial 9 · Craft 8.*

### 007 / Enquiry
5/7 split, square inputs, 4-up programme grid, `Submit specification`, `✓` confirm.
*Luxury 7 · Editorial 8 · Craft 9 — the most usable form in the project.*

### Colophon
"End of specification — 009 / Pistachio". *Luxury 7 · Editorial 10 · Craft 9 —
the best footer idea in the fifteen.*

## Component library

| Component | Behaviour |
| --- | --- |
| `SectionHead` | Ruled `#E9EFD9` strip, `index / LABEL` left, `+` right |
| `ClipReveal` | `clipPath inset(0 100% 0 0) → inset(0)`, 0.9s, no fade |
| `Ticks` | Four `+` glyphs at `-4px/-7px` panel corners, `pointer-events-none` |
| `SpecPhoto` | `ClipReveal`-wrapped `3/4` image on `#E9EFD9` |
| `SPECS` | Static six-row key/value table |
| Programme pill | Square, 4-up grid, ink-filled when active |

## Photography usage

`standingPinstripe`, `profilePinstripe`, `floorPinstripe` — **three images, all in
one strip.** Lowest image count in the project alongside Blush. The choice to use
all three *pinstripe* frames together is smart: pinstripe is literally a ruled
pattern, so the photographs echo the page's own grid. But the page shows Chandni
only once, in a single moment, which undersells the founder story.

## Motion inventory

| Element | Animation | Why it works |
| --- | --- | --- |
| Figures | `ClipReveal` L→R, 0.9s | A plotter drawing the figure. The only non-fading reveal in the project. |
| Text | `Reveal`, delays `0.06–0.32` | Fastest cadence in the project; machines don't linger. |
| Buttons | `whileTap 0.97` | — |
| Hovers | 300–500ms fill | — |

**Zero loops. Zero parallax. Zero blur. Zero shadow.** The most restrained motion
profile of the fifteen.

## UX assessment

- **Navigation.** The numbered register is a de-facto index, but there is **no
  clickable navigation to it** — a missed opportunity. Two anchors exist
  (`pi-services`, `pi-enquire`).
- **Conversion path.** Hero primary → hero secondary → three `Select →` links →
  submit. The `Select →` links are visually the weakest CTAs in the project
  (underlined 9.5px text), which is on-brand but costs clicks.
- **Friction.** Lowest in the project. The form is short, square, high-contrast and
  the programme pills are a proper 4-up grid rather than a wrap.
- **Trust signals.** The `SPECS` table is itself a trust device — it answers
  "who / what / how / where / how many" above the fold. **No other edition does
  this**, and it is the strongest single credibility element in the fifteen.
- **Missing.** FAQ (though this edition is the natural home for one), booking,
  clickable section index, and warmth.

## Performance notes

- 3 images, all lazy.
- `clipPath` only — no filters, no shadows, no blurs, no gradients.
- Shortest animation durations and delays in the project.
- **Fastest-painting edition of the fifteen.**

## Art direction critique

- **What is genuinely original.** The sheet-with-margin page object; the numbered
  register; the services table; registration ticks; `gap-[1px]` hairlines; the
  colophon; uppercase display with lowercase italic; `Q-0X` testimony references.
  **This edition contains more original ideas than any other in the project.**
- **What is derivative.** Nothing. It is the least derivative page in the fifteen.
- **What would elevate it.** (1) Make the section register clickable as a sticky
  index rail. (2) Add three more figures — a `Fig. 04–06` strip in the Method
  section would double the photography without breaking the concept. (3) The olive
  is the weak link; the same layout in ivory/espresso or in a cool grey would read
  significantly more expensive. (4) Add an `008 / Questions` FAQ section — this
  edition is the only one whose format *invites* it.

## Scores

| Criterion | Score | Justification |
| --- | ---: | --- |
| Luxury feel | 7.5 | Technical authority reads as expensive; olive undercuts it. |
| Elegance | 8.0 | Severe rather than graceful — but deliberately so. |
| Uniqueness | 10.0 | **Most original edition in the project.** |
| Photography | 5.5 | Three images, one strip, one moment. |
| Typography | 9.5 | Uppercase + lowercase italic; a complete reference-label system. |
| Colour | 6.5 | Disciplined but the least desirable palette. |
| Layout | 9.5 | The table and the sheet-object are both project-best. |
| Motion | 8.0 | Perfectly matched to concept; deliberately minimal. |
| Whitespace | 6.5 | Tightest in the project; rules carry the separation instead. |
| Detail | 10.0 | Ticks, `gap-[1px]`, single `LINE` token, colophon, `Q-0X`. |
| Consistency | 10.0 | Not one word or glyph breaks the specification voice. |
| Emotion | 5.5 | **Lowest emotional score in the project** — by design, but a real cost for a personal-styling brand. |
| Conversion | 8.0 | Best-structured form and best comparison table; weakest CTA styling. |
| Accessibility | 9.0 | Bordered inputs, real grids, high contrast, `✓` markers. |
| Performance | 10.0 | **Fastest edition in the project.** |
| Responsiveness | 9.5 | The table collapse is the hardest responsive problem in the project, solved cleanly. |
| **Overall** | **8.3** | |

> **Strategic note.** Pistachio scores 8.3 overall but contains the highest number
> of *transplantable* ideas of any edition. Even if the client rejects the olive
> palette outright, the services table, the `SPECS` credibility block, the
> numbered register and the colophon should all be considered for the final build.

---
---

# EDITION 10 — THE PORCELAIN

`/porcelain` · Mood: *Powder blue · fine china* · Palette `#EDF2F7 / #6E8FAC / #26394D`

**Unique in the project:** the only edition with **double hairline rules**
(the china rim), the only **animated rule-draw** (`scaleX 0 → 1`), the only use of
**`ring-offset`** as a decorative device, and the only edition where the journey
is a **course listing** rather than a timeline or a grid.

## Direction

- **Creative direction.** A formal dinner service. The site is an *invitation to
  the table*: `Service de style`, `The etiquette`, `The hostess`,
  `The table d'hôte — three settings`, `The service — six courses`,
  `Compliments to the house`, `What is carried home`, `The invitation`, `RSVP`.
  It is the most sustained French-hospitality conceit in the project.
- **Core inspiration.** Wedgwood and Limoges china; engraved calling cards; a
  `menu dégustation`; the double-gilt rim on a dinner plate; embassy stationery.
- **Mood board.** Powder-blue glaze. A gilt-edged place card. An oval miniature
  portrait in a locket. Two hairlines around a plate rim. Silver on damask.
- **Visual identity.** `#EDF2F7` ground, `#F5F8FB` band, `#DCE7F0` deep band,
  `#FAFCFE` card, `#26394D` navy ink, `#6E8FAC` china blue. Roman numerals I–VII
  run as a **single continuous register across the whole page** — the section
  markers, the service settings, the six courses *and* the six results all use the
  same numeral system. No other edition unifies its numbering this completely.
- **Emotional feeling.** Composed, correct, gracious. Formal without being cold.
- **Brand personality.** The hostess. Impeccable, warm within protocol, everything
  already anticipated. "So that every room you enter feels like it was expecting
  you" — the best closing line of any biography in the project.
- **Luxury perception.** *Institutional luxury* — the confidence of a house that
  has done this for a hundred years. **Reads the most expensive of the five** and
  arguably the most expensive of the fifteen after Edition 02.
- **Target audience.** Diplomatic, legal, boardroom; 35–60; the most conservative
  and highest-net-worth of the five audiences. Also the most *masculine-safe*
  palette after Pistachio.
- **Editorial style.** Etiquette manual. "Good style, like good manners, is never
  loud. It simply makes everyone — *including you* — more comfortable." This is the
  most quotable philosophy line in the fifteen.
- **Storytelling style.** A service in courses. Arrival → etiquette → the hostess →
  the settings → the six courses → compliments → what is carried home → the
  invitation.
- **UX philosophy.** Ceremony over speed. Centred, sequential, unhurried. The user
  is a guest being received, not a visitor scanning.
- **Motion philosophy.** **Drawing and placing.** `DoubleRule` draws its two
  hairlines outward with a 0.12s offset between them — the only `scaleX` animation
  in the project. Cameos `scale 0.93 → 1` over 1.35s, the **slowest reveal in the
  fifteen**, which is exactly right for porcelain being set down.
- **Interaction philosophy.** Square outline buttons filling with navy over 500ms.
  No radius on any control, in deliberate contrast to the ovals in the imagery — a
  smart tension between *round objects on a square table*.
- **Layout philosophy.** Centre-axis with two two-column exceptions (the hostess,
  and the results band). Narrow containers throughout (`720–1140px`) keep the page
  feeling like a place setting rather than a spread.
- **Spacing philosophy.** `py-16 → lg:py-28`, with `pt-14` between service
  settings and `py-8` per course row. Generous but disciplined.
- **Photography philosophy.** Every photograph is an **oval miniature** with a
  `ring-1 ring-offset-[10px]` — a real, physically-convincing cameo mount where the
  offset ring reads as the mat board. The journey rounds the *course* thumbnails
  too, at `ring-offset-4`. **Portraits are treated as porcelain objects, not as
  photographs.**
- **Typography philosophy.** Largest hero in Part 2 (`4.8rem`) and the most formal:
  centred, two lines with a hard break, italic china-blue on the second. Roman
  numerals in `display text-sm italic` blue appear 20+ times.
- **Component philosophy.** Three: `DoubleRule`, `Marker`, `Cameo`. Plus the
  nested-ring frame used on the featured quote and the enquiry card.
- **Colour philosophy.** Cool analogous blue, four values, one accent. The palette
  most similar to a real luxury heritage brand.
- **Conversion philosophy.** The most elegant CTA language in the project:
  *Request a place at the table* → *Reserve this setting* → *RSVP to Chandni*.
  Scarcity is implied by the metaphor (tables have limited seats) without a single
  word of urgency copy. **This is the most sophisticated conversion writing in the
  fifteen.**
- **Accessibility philosophy.** Strong contrast (≈ 11.8:1) and a proper `<figure>`
  /`<figcaption>` structure. Two weaknesses: the course thumbnails are
  `hidden sm:block`, and `tracking-0.34em` at 9.5px in the hero eyebrow is the
  most extreme letter-spacing in the project.

## Colour system

| Role | Value |
| --- | --- |
| Primary ground | `#EDF2F7` |
| Band | `#F5F8FB` (hostess, courses) |
| Deep band / placeholder | `#DCE7F0` (results) |
| Card | `#FAFCFE` (enquiry) |
| Primary ink | `#26394D` (INK, navy) |
| Body | `#42596E` (SUB) |
| Accent | `#6E8FAC` (BLUE) — numerals, italics, rings, bullets, script |
| Rules | `#26394D` at 20–35% |
| Hover ink | `#3A5068` |
| Shadow | `0 30px 60px -42px rgba(38,57,77,0.5)` — enquiry card only |

- **Contrast strategy.** INK ≈ 11.8:1, SUB ≈ 6.9:1. BLUE is used for numerals
  (13–14px italic display), rings and bullets — never for body copy.
- **Luxury created.** Through **rims and offsets**. The `ring-offset-[10px]` on
  every cameo, the double rule, and the nested `ring-1` inside `ring-1` on the
  enquiry card all create the same physical impression: *a valuable object with a
  margin around it*. This is the most consistently-applied luxury device in the
  project.
- **Strengths.** The most conventionally, safely, undeniably expensive palette of
  the five. Ages best. Photographs of Chandni in blue (`stoolBlue`, `blueHair`)
  sit inside it perfectly — the only edition where photograph and palette were
  clearly chosen for each other.
- **Weaknesses.** Cool blue is the least *warm* palette, and personal styling is an
  intimate service. It can read corporate. It is also the closest to a generic
  "premium consultancy" scheme — the least surprising palette of the five.

## Typography

| Element | Spec |
| --- | --- |
| Hero eyebrow | `sans 9.5px uppercase tracking-0.34em` — widest tracking in the project |
| H1 | `display clamp(2.6rem, 6.2vw, 4.8rem)`, `leading-1.06`, `tracking--0.01em`, centred, hard break |
| H2 (Etiquette) | `display clamp(1.6rem, 3.2vw, 2.4rem)`, `font-normal`, `leading-1.45`, centred |
| H2 (Hostess) | `display clamp(2rem, 4vw, 3.1rem)`, `leading-1.1` |
| H2 (Invitation) | `display clamp(1.8rem, 3.8vw, 2.7rem)`, `leading-1.12`, centred |
| H3 (Setting) | `display 2rem` → `md:2.3rem` |
| H3 (Course) | `display 1.5rem font-medium leading-tight` |
| Marker numeral | `display text-sm italic` BLUE — `N° IV` |
| Marker label | `sans 9.5px uppercase tracking-0.3em` |
| Course numeral | 44px circle, `border`, `display 13px italic` BLUE |
| Result numeral | `display 13px italic` BLUE |
| Body | `14.5px font-light leading-1.95` |
| Service line | `sans 10px uppercase tracking-0.26em` — essence + both prices on one line |
| Include item | `13px font-light leading-relaxed` with a 3px round bullet |
| Course points | `sans 9.5px uppercase tracking-0.2em`, joined with ` · ` |
| Featured quote | `display clamp(1.3rem, 2.8vw, 1.8rem)` italic `leading-1.65` |
| Secondary quote | `display 1.1rem italic leading-1.7` |
| Caption | `sans 9px uppercase tracking-0.24em` |
| Script | `text-2xl` BLUE — `by Chandni`, `founder & personal stylist` |
| Button | `sans 9.5–10.5px uppercase tracking-0.24em`, square |

- **Hierarchy quality — very good.** The `Marker` component (italic Roman numeral
  over a wide-tracked label) is the cleanest section-header device in Part 2 and
  is reused seven times, which is what makes the page feel *bound*.
- **Editorial treatment.** Combining essence and both prices onto one 10px
  wide-tracked line (`Signature — ₹21,999 · $249`) is a restrained, menu-like
  choice that avoids the price-tag look entirely. **The most elegant price
  treatment in the project.**
- **Strengths.** The Roman register across markers, settings, courses and results
  is the most complete numbering system in the fifteen.
- **Weaknesses.** `tracking-0.34em` at 9.5px is genuinely hard to read; the hard
  `<br/>` in the H1 fixes the break at all sizes.

## Layout system

- **Container:** `1140px` (header, hostess, footer), `860px` (hero, courses),
  `820px` (settings, compliments), `760px` (etiquette), `1000px` (results),
  `720px` (enquiry). Narrowing toward the invitation — the page **closes in** as
  the reader approaches the form, which is a genuinely sophisticated pacing device.
- **Hero:** centred, `860px`. Eyebrow → double rule → headline → support → cameo at
  `w-[min(62vw,320px)]` → CTA. Same architecture as Blush but larger and cooler.
- **Hostess:** `lg:grid-cols-2` with a two-up cameo cluster (second `mt-14`), on
  the `#F5F8FB` band.
- **Settings:** a `space`-less stack where each setting opens with a `DoubleRule`
  at `pt-14` — the rule *is* the separator, exactly as a plate rim separates one
  course from the next.
- **Courses:** `grid-cols-[44px_1fr]` → `sm:grid-cols-[44px_1fr_72px]`. Numeral
  medallion / text / oval thumbnail. `border-b` per row, `last:border-b-0`.
  **The most compact journey layout in the project** — six chapters in roughly the
  vertical space Lavender gives to two.
- **Compliments:** a nested double-ring frame around the featured quote, then
  `sm:grid-cols-2` for the other two — a proper primary/secondary testimonial
  hierarchy, which only Editions 01 and 10 attempt.
- **Results:** `#DCE7F0` band, `md:grid-cols-2`, Roman-numbered.
- **Enquiry:** `720px`, `ring-1` outer card with `shadow`, `ring-1` inner content —
  the nested-ring frame again.
- **Composition & balance.** Symmetrical, narrowing, ceremonial.
- **Reading order.** Linear and correct.
- **Desktop.** Two-column hostess, 72px course thumbnails, full ring offsets.
- **Tablet.** Course thumbnails appear at `sm` (640px) — so tablet keeps them.
  The hostess stacks at `lg`, giving 768–1023px a centred cameo pair over centred
  copy. Very strong tablet state.
- **Mobile.** Course thumbnails hidden below `640px`; cameo scales at `62vw`;
  everything centred. The `ring-offset` colours are hard-coded per surface
  (`ring-offset-[#EDF2F7]` vs `ring-offset-[#F5F8FB]`), which is correct and easy
  to get wrong.

## Section-by-section

### Masthead
Three-part bar; the CTA reads `Reserve`. *Luxury 8 · Editorial 8 · Craft 7.*

### Hero
`Service de style — Edition 10` → double rule → "Presence, served / on *fine
china*." → cameo → `Request a place at the table`.
*Luxury 10 · Editorial 9 · Craft 9 — **the most expensive-feeling hero in Part 2**.*

### N° II — The Etiquette
`760px` centred philosophy, closed with a double rule.
*Luxury 9 · Editorial 10 · Craft 8 — the most quotable line in the project.*

### N° III — The Hostess
Cameo pair + biography on the band. *Luxury 9 · Editorial 9 · Craft 9.*

### N° IV — The table d'hôte
Three settings separated by drawn double rules; single-line price treatment;
`Reserve this setting`. *Luxury 9 · Editorial 9 · Craft 9 — **the most elegant
services layout in the project**, though far less scannable than Pistachio's table.*

### N° V — The service, six courses
Compact numbered course list with oval thumbnails. *Luxury 8 · Editorial 9 · Craft
9 — best space-to-information ratio in the project.*

### N° VI — Compliments to the house
Nested-frame featured quote + 2-up secondaries. *Luxury 9 · Editorial 9 · Craft 9.*

### What is carried home
`#DCE7F0` band with Roman-numbered results. *Luxury 8 · Editorial 8 · Craft 8.*

### N° VII — The invitation
Nested-ring card, "You are cordially invited / to begin.", `RSVP to Chandni`.
*Luxury 10 · Editorial 9 · Craft 9 — **the best-written conversion moment in the
fifteen**.*

### Footer
A `120px` double rule over the copyright. *Luxury 8 · Editorial 8 · Craft 8.*

## Component library

| Component | Behaviour |
| --- | --- |
| `DoubleRule` | Two `h-px` spans, `scaleX 0 → 1` over 1.1s with a 0.12s offset; `max-w-[240px]` |
| `Marker` | Italic Roman numeral over a `0.3em` label, centred |
| `Cameo` | `rounded-[50%]`, `ring-1 ring-offset-[10px]` matched to its surface, `scale 0.93 → 1` over 1.35s |
| Course medallion | 44px bordered circle with an italic Roman numeral |
| Nested frame | `border p-2` + inner `border`, or `ring-1` + inner `ring-1` |
| Setting pill | Square outline → navy fill on hover |

## Photography usage

`stoolBlue` (hero) · `blueHair` + `windowPortrait` (hostess) · six `JOURNEY.photo`
course thumbnails = **nine images**, matching Garden for the highest count in Part
2. The oval crop at `72px` in the course list is the smallest photographic
treatment in the project and works because the ring gives each one a defined edge.
Selecting the two *blue-toned* portraits for the hostess section is the only
instance in the fifteen of photographs being chosen to match the palette.

## Motion inventory

| Element | Animation | Why it works |
| --- | --- | --- |
| `DoubleRule` | `scaleX 0 → 1`, 1.1s, 0.12s offset between the two lines | The rim being drawn. The only `scaleX` animation in the project and the most distinctive small motion in the fifteen. |
| Cameos | `scale 0.93 → 1`, 1.35s | The slowest reveal in the project — porcelain being set down. |
| Course thumbnails | `scale 0.9 → 1`, 1.1s | Consistent with the cameos at a smaller scale. |
| Text | `Reveal`, delays `0.05–0.4` | Quiet, sequenced. |
| Buttons | `whileTap 0.97` | — |

**Zero loops. Zero parallax. Zero blur.** Motion here is entirely about *drawing*
and *placing* — no drifting, no floating.

## UX assessment

- **Navigation.** Back-link + `Reserve`. **No services anchor at all** — the only
  route to the settings is scrolling. Weakest navigation in Part 2 alongside Blush.
- **Conversion path.** Header → hero → three `Reserve this setting` → `RSVP`. Five
  touchpoints, all with the strongest CTA copy in the project.
- **Friction.** None. The form is short and centred; the `RSVP` framing makes
  submitting feel like accepting rather than requesting.
- **Trust signals.** Founder named/pictured 3×, featured testimonial given its own
  frame, transparent pricing, personal-reply promise.
- **Missing.** FAQ, booking, services anchor, and any mobile course imagery.

## Performance notes

- 9 images, all lazy except the hero.
- One shadow, no blurs, no gradients, no filters.
- 8 `scaleX` rule animations + 9 `scale` image animations — all compositor-only.
- **Second-fastest edition in Part 2 after Blush.**

## Art direction critique

- **What is genuinely original.** The drawn double rule; `ring-offset` as a mat
  board; the unified Roman register across four different content types; the
  narrowing container sequence; the single-line price treatment; `Service de style`
  as a masthead descriptor.
- **What is derivative.** The centred hero with a portrait beneath is structurally
  identical to Blush; the results band is project-standard.
- **What would elevate it.** (1) Show course thumbnails on mobile at `40px` — they
  are the page's charm and they vanish exactly where charm matters most. (2) Add a
  `pc-services` anchor and point the masthead at it. (3) The `0.34em` hero eyebrow
  should come down to `0.28em`. (4) One warm accent — a single gilt/champagne tone
  at 1% surface area — would fix the coolness objection without touching the blue.

## Scores

| Criterion | Score | Justification |
| --- | ---: | --- |
| Luxury feel | 9.5 | **Highest in Part 2.** The rim/offset system reads unmistakably as heritage. |
| Elegance | 9.5 | Nothing is out of place. |
| Uniqueness | 8.0 | The rim system is original; the centred architecture is shared with Blush. |
| Photography | 8.5 | Nine images, palette-matched, beautifully mounted; lost on mobile. |
| Typography | 9.0 | Unified Roman register and the best price treatment in the project. |
| Colour | 8.5 | The safest expensive palette; slightly cool for the category. |
| Layout | 9.0 | Narrowing containers and the compact course list are both excellent. |
| Motion | 8.5 | The drawn rule is a signature; the 1.35s cameo is perfectly judged. |
| Whitespace | 8.5 | Ceremonial without waste. |
| Detail | 9.5 | Per-surface `ring-offset` colours, 0.12s rule offset, nested frames. |
| Consistency | 9.5 | The dinner-service voice never slips. |
| Emotion | 7.5 | Gracious rather than moving; formality holds the reader at arm's length. |
| Conversion | 9.0 | **Best CTA writing in the project**; loses points for no services anchor. |
| Accessibility | 8.0 | Strong contrast; `0.34em` tracking and hidden mobile thumbnails cost it. |
| Performance | 9.0 | Clean, compositor-only, one shadow. |
| Responsiveness | 8.5 | Excellent tablet state; loses course imagery on mobile. |
| **Overall** | **8.8** | |

---
---

# PART 2 — CROSS-EDITION SYNTHESIS

## Overall standings

| # | Edition | Metaphor | Best at | Overall |
| --- | --- | --- | --- | ---: |
| 10 | **Porcelain** | dinner service | luxury, elegance, CTA writing | **8.8** |
| 06 | **Garden** | cultivation | layout, motion-metaphor, calm | **8.6** |
| 08 | **Lavender** | daydream | atmosphere, problem-statement writing | **8.3** |
| 09 | **Pistachio** | specification | originality, information design, speed | **8.3** |
| 07 | **Blush** | love letter | emotion, performance | **8.2** |

*(For reference, Part 1: Editorial 9.1 · Atelier 9.0 · Gallery 8.7 · Journal 8.7 ·
Boutique 8.2.)*

## Category winners within Part 2

- **Best hero:** Pistachio (`001 / Brief` + `SPECS` table) for concept; Porcelain
  for luxury.
- **Best philosophy section:** Lavender's reverie (best diagnosis) and Blush's vow
  (best emotion) are tied on different axes; Porcelain's etiquette is the most
  quotable.
- **Best services layout:** Pistachio's table for decision-making; Porcelain's
  drawn-rule settings for elegance; Garden's divided block for balance.
- **Best journey:** Garden's centre spine for structure; Porcelain's course list
  for density; Lavender's ghost numerals for typography.
- **Best testimonials:** Blush (script quote marks) for beauty; Porcelain (nested
  frame + 2-up) for hierarchy; Pistachio (`Q-0X` exhibits) for concept.
- **Best conversion moment:** Lavender's floating dark island for composition;
  Porcelain's `RSVP` for copy; Pistachio's 5/7 grid for usability.
- **Best footer:** Pistachio's colophon, by a wide margin.
- **Best single component:** Porcelain's `DoubleRule` — 16 lines of code producing
  the most distinctive motion in the fifteen.
- **Best photographic treatment:** Porcelain's cameo with `ring-offset`; Garden's
  arch is a close second.

## Structural census (Part 2)

| Attribute | Garden | Blush | Lavender | Pistachio | Porcelain |
| --- | --- | --- | --- | --- | --- |
| Images used | 9 | 3 | 8 (2 on mobile) | 3 | 9 (3 on mobile) |
| Border radius | arch only | full/oval | 2xl/3xl | **none** | oval only |
| Bespoke components | 2 | 3 | 3 | 4 | 3 |
| Journey format | centre spine | 6 tilted cards | 6 passages + ghost numerals | 6 cells | 6 course rows |
| Services format | divided 3-up | 3 stacked frames | 3 cards | **table** | 3 rule-separated |
| Dark section | yes (harvest) | yes (blooms) | yes (enquiry) | **no** | **no** |
| Numbering | Roman I–III | `N° 01` | Arabic ghost | `001–007`, `Op.`, `Q-`, `Fig.` | Roman I–VII (unified) |
| System glyph | `❧` | `⋄` | `◦` | `+` | double rule |
| Container widths | 1 (1240) | **8 distinct** | 6 | 1 (1240 sheet) | 6 (narrowing) |
| Script uses | 4 | **7** | 3 | 1 | 2 |
| Centred layout | partial | **full** | partial | none | mostly |
| Animated property | clipPath | rotate/y | **filter** | clipPath | **scaleX** |

## Findings that affect the final build

1. **Metaphor-driven micro-copy is the single biggest differentiator.** The
   difference between "Services" and "The table d'hôte — three settings" is worth
   more perceived value than any colour choice. Whichever edition wins, its
   micro-copy layer should be treated as a first-class deliverable.

2. **Pistachio's services table is the best decision-support layout in the
   project** and should be considered for the final site even in a completely
   different palette. Porcelain's settings are more beautiful; Pistachio's table
   actually helps someone choose.

3. **Photography counts are dangerously uneven.** Blush (3) and Pistachio (3) use
   14% of the available library. Lavender shows 2 images on mobile, Porcelain 3.
   For a personal-styling brand where the founder *is* the product, the final site
   should show a minimum of 10–12 photographs, with **no photograph hidden by
   breakpoint**.

4. **Three editions have no services anchor** (Blush, Porcelain, and Garden's
   masthead doesn't link to its own `gd-services`). Trivial to fix, materially
   affects conversion.

5. **The `SPECS` block (Pistachio) is the strongest trust device in the project**
   and has no equivalent in any other edition. Founder / Discipline / Method /
   Studio / Programmes answered above the fold.

6. **The two content gaps confirmed in Part 0 persist through all of Part 2:** no
   FAQ, no booking mechanism. Pistachio's numbered register is the natural host for
   an `008 / Questions` section; Porcelain's `RSVP` framing is the natural host for
   a real calendar.

7. **Emotional range across the five is enormous** — Blush 9.5, Pistachio 5.5. The
   final site almost certainly needs to land between them: Porcelain's authority
   with one or two of Blush's warm moments (the vow, the script quote marks).

---

*Next: Part 3 — Editions 11–15 (Citrine, Riviera, Mocha, Pearl, Cherry).*
