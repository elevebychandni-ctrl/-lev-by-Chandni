# élevé by Chandni — Design Bible

## Part 3 — Editions 11–15 · "The Objects"

Editions 01–05 differ by **structure**. Editions 06–10 differ by **atmosphere**.
Editions 11–15 differ by **object metaphor** — each one asks the reader to believe
the page *is a physical thing*: a sunrise, a postcard, a café carte, a jewellery
house folio, a printed poster.

This produces the most extreme range in the project. Cherry (15) is the loudest
page of the fifteen; Pearl (14) is the quietest. Riviera (12) is the most
elaborately constructed; Mocha (13) is the most conceptually complete. Citrine (11)
is the only genuinely *cheerful* edition anywhere in the set.

Three project-firsts appear in this part:

1. **The only two full-bleed cinematic heroes outside Edition 02** — Riviera's
   postcard-front and Pearl's overlaid caption card.
2. **The only duotone photographic treatment** — Cherry's grayscale +
   `mix-blend-multiply` cherry wash.
3. **The only hover-inverting rows** — Cherry's services, where an entire row flips
   from cream-on-ink to cream-on-cherry in a single 500ms transition.

---
---

# EDITION 11 — THE CITRINE

`/citrine` · Mood: *Butter yellow · morning light* · Palette `#FBF4DC / #B8912F / #46390F`

**Unique in the project:** the only **circular (1:1) photographic crop**, the only
**staircase layout** (the journey steps rightward via a CSS custom property), the
only **alternating-side chat-bubble testimonials**, and the only edition with a
**pill-badge label system**.

## Direction

- **Creative direction.** Morning, systematised. The premise is that mornings decide
  days, and that getting dressed is the day's first negotiation — which élevé turns
  into the day's first win. Every label is solar: *the first light*, *the one who
  rises first*, *three rays*, *the sunrise — six hours*, *by golden hour*,
  *rise & enquire*, *send it sunward*, *have a golden day*.
- **Core inspiration.** Mid-century Californian optimism; Aesop and Glossier's warm
  minimalism inverted into a warmer key; a Bauhaus sun-disc; the soft-shadow,
  large-radius language of premium wellness packaging.
- **Mood board.** Butter cardstock. A round mirror catching 7am light. Cream
  ceramic on a yellow table. A sun-disc rising behind a headline.
- **Visual identity.** Four warm values (`#FBF4DC` ground, `#FDFAF0` cream card,
  `#F5E4AC` butter block, `#46390F` olive-brown ink) with `#B8912F` gold.
  Radius is the loudest signal: `rounded-full` photographs, `rounded-[2.5rem]`
  panels, `rounded-[2rem]` cards, `rounded-full` inputs, badges and pills.
  **The most rounded edition in the project by a wide margin.**
- **Emotional feeling.** Optimistic, generous, energising. The only edition that
  makes you feel *good* rather than *impressed*.
- **Brand personality.** The morning person. Warm, practical, encouraging.
  "Warmth you can feel and standards you can measure" — the copy names its own
  duality.
- **Luxury perception.** *Accessible luxury.* This is the least intimidating page
  of the fifteen and the one most likely to convert a first-time buyer of styling
  services. It is also the least likely to command the top price point.
- **Target audience.** Ambitious professionals 28–42; the "I want my mornings back"
  buyer; the audience most responsive to *routine* and *systems* language.
- **Editorial style.** Benefit-led and practical. "Confidence is not a mood. It is a
  *routine* — built once, worn daily, brighter every time." This is the most
  **actionable** philosophy line in the project and the one closest to a genuine
  value proposition.
- **Storytelling style.** A day arc. First light → the one who rises first → three
  rays → six hours → morning coffee → golden hour → tomorrow morning.
- **UX philosophy.** Friendly and legible. Big touch targets, rounded inputs,
  pill-shaped everything, generous padding. Objectively the most *comfortable* page
  in the project to use.
- **Motion philosophy.** **Rising.** `SunPhoto` arrives `y: 46, rotate: -4 → 0`
  over 1.4s — the longest photographic reveal in Part 3 — and the hero sun-disc
  `scale 0.6 → 1` over 1.6s on mount (one of only two mount-time animations in the
  project). Journey dots `scale 0.4 → 1`. Everything comes *up*.
- **Interaction philosophy.** Colour fills over 400–500ms; `whileTap 0.96–0.97`.
  The masthead CTA is a filled ink pill — the only edition where the header CTA is
  a solid button rather than a text link.
- **Layout philosophy.** Floating panels on an open ground. Nothing is full-bleed
  except the services band; everything else is a rounded card with air around it.
  The staircase journey is the one asymmetric moment.
- **Spacing philosophy.** `py-20 → lg:py-28` with `p-7/8/9` inside cards and
  `py-14` inside the big rounded panels. Padding-heavy rather than margin-heavy —
  which is what makes the page feel *cushioned*.
- **Photography philosophy.** Photographs are **suns**. `aspect-square` with
  `object-top`, `rounded-full`, a 6px cream border acting as a mount ring, and a
  long warm shadow. Only two are used, both of Chandni — and both are the warmest
  frames in the library (`warmPortrait`, `marbleSmile`), chosen to match.
- **Typography philosophy.** Conventional and clear. `4.4rem` hero, `1.4` leading
  on the manifesto, standard clamps throughout. Type is the *least* distinctive
  layer here — the personality lives in shape and colour.
- **Component philosophy.** Two bespoke (`Badge`, `SunPhoto`) plus the
  `rounded-[2.5rem]` panel pattern used three times (manifesto, results, enquiry).
- **Colour philosophy.** Analogous warm yellow-gold-brown, no cool anywhere. The
  ink is olive-brown rather than black, which is what keeps the yellow from
  screaming.
- **Conversion philosophy.** Momentum-led. *Start your morning* → *This one →* →
  *Send it sunward*. The price is presented **as an ink-filled pill next to the
  CTA** — the only edition where price and CTA share a row, which is a genuinely
  smart decision-support pattern.
- **Accessibility philosophy.** The best touch ergonomics in the project (rounded
  inputs at `py-3.5`, pills at `py-2.5`, 16px mobile inputs). Contrast is strong
  (ink ≈ 11.9:1). The `object-top` circular crop is the one risk — a circular mask
  on a portrait can clip a jaw or shoulder awkwardly.

## Colour system

| Role | Value |
| --- | --- |
| Primary ground | `#FBF4DC` |
| Card / panel | `#FDFAF0` (CREAM) |
| Block / accent ground | `#F5E4AC` (BUTTER) — sun disc, services band, enquiry panel |
| Primary ink | `#46390F` (INK) |
| Body | `#6E5A28` (SUB) |
| Accent | `#B8912F` (GOLD) — italics, script, bullets |
| Dark room | `#46390F` with `#FBF4DC` text, `#EBD9A4` label |
| Hover ink | `#5C4A15` |
| Shadow | `0 26–36px 52–70px -42/-50px rgba(70,57,15,0.55–0.6)` |

- **Contrast strategy.** INK ≈ 11.9:1 on ground, SUB ≈ 6.4:1. GOLD is used for
  display italics and 5px bullets only.
- **Luxury created.** Through **softness and shadow** rather than restraint. The
  `2.5rem` radii and long low-opacity shadows read as *premium consumer product*
  rather than *heritage house* — a different but legitimate luxury register.
- **Strengths.** The warmest, friendliest palette in the project. Photographs with
  warm skin tones sit inside it perfectly. Unmistakable in a thumbnail.
- **Weaknesses.** Yellow is the hardest colour to make read as expensive; the large
  radii push it further toward "modern DTC brand" and away from "luxury house". It
  is the palette least likely to survive a client's "does this look expensive?" test.

## Typography

| Element | Spec |
| --- | --- |
| H1 | `display clamp(2.4rem, 5.6vw, 4.4rem)`, `font-medium`, `leading-1.12`, `tracking--0.01em`, hard `<br/>` |
| H2 (Manifesto) | `display clamp(1.7rem, 3.4vw, 2.6rem)`, `font-normal`, `leading-1.4`, `max-w-2xl` centred |
| H2 (Founder) | `display clamp(2rem, 4vw, 3.2rem)`, `leading-1.1` |
| H2 (Services / Journey) | `display clamp(2rem, 4.4vw, 3.4rem)`, `leading-1.08` |
| H2 (Enquire) | `display clamp(1.9rem, 4vw, 3rem)`, `leading-1.1`, hard `<br/>` |
| H3 (Service) | `display 1.85rem font-medium leading-tight` |
| H3 (Hour) | `display 1.6rem font-medium leading-tight` |
| Badge | `sans 9.5px uppercase tracking-0.22em`, `rounded-full border px-5 py-2` on cream |
| Service numeral | 48px butter circle, `display text-lg italic` |
| Price | ink-filled pill, `sans 11px uppercase tracking-0.16em` |
| Body | `14.5–15px font-light leading-1.9/1.95` |
| Service body | `13.5px font-light leading-1.85` |
| Journey body | `13.5px font-light leading-1.85`, `max-w-2xl` |
| Point | outlined `rounded-full` chip, `sans 9.5px uppercase tracking-0.14em` |
| Caption | `sans 9px uppercase tracking-0.22em` |
| Quote | `display 1.2rem italic leading-1.65` |
| Script | `text-2xl` GOLD — `by Chandni`, essences, role, `have a golden day` |
| Input | `rounded-full px-6 py-3.5`, 16px mobile → 14.5px `sm`; label indented `pl-6` to align with the pill's inner edge |

- **Hierarchy quality — good but conventional.** The `Badge` component gives every
  section a consistent, pleasant entry point, but it also flattens hierarchy:
  eight sections all open with the same pill, so no section is visually senior.
- **Editorial treatment.** The journey points as outlined **chips** rather than a
  bulleted list is the freshest typographic idea here. The `pl-6` label indent
  matching the rounded input's inner padding is an excellent, easily-missed detail.
- **Strengths.** The price-pill beside the CTA is a real conversion pattern.
- **Weaknesses.** The **least distinctive typography in the project**. Nothing here
  would be recognised out of context. Two hard `<br/>` breaks fix line breaks at
  all viewports.

## Layout system

- **Container:** `max-w-[1240px]` (header, hero, founder, services, footer),
  `1000px` (manifesto), `1100px` (journey, results), `900px` (words), `860px`
  (enquiry).
- **Root:** `overflow-x-clip` — required for the `right-[-12%]` sun disc.
- **Hero:** `lg:grid-cols-12`, copy 7 / sun 5, with a `480–580px` butter disc
  absolutely positioned at `-top-24 right-[-12%]` (`md:right-[-4%]`).
- **Manifesto:** a single `rounded-[2.5rem]` cream panel with a shadow, centred,
  `1000px`.
- **Founder:** `lg:grid-cols-2`. The photo has a **second, smaller butter disc**
  offset `-left-8 -top-8` behind it — a two-layer sun composition, the best
  compositional detail on the page.
- **Services:** full-bleed `#F5E4AC` band containing three `rounded-[2rem]` cream
  cards with `h-full flex-col` and `mt-auto` pushing the price/CTA row to the
  bottom — correct equal-height card construction.
- **Journey — the staircase:** each row is a rounded card with
  `sm:ml-[var(--stair)]` where `--stair` is `min(i * 4.5%, 27%)`. Six rows step
  progressively rightward, capped at 27% so the last three align.
  **The only progressive-offset layout in the project**, and it genuinely reads as
  a sunrise arc.
- **Words:** alternating `max-w-xl` cards, odd ones `ml-auto`, with a *single
  squared corner* (`rounded-bl-md` / `rounded-br-md`) pointing toward the speaker —
  a conversation-bubble tail. Charming, and the only place in the project where
  testimonials feel like dialogue.
- **Results:** `rounded-[2.5rem]` ink panel, `md:grid-cols-2`.
- **Enquire:** `rounded-[2.5rem]` butter panel, two-up name/email, pills, textarea.
- **Composition & balance.** Panels floating on ground, with two sun discs providing
  the only bleed. Very stable, slightly repetitive.
- **Desktop.** Full staircase, 3-up cards, two-layer sun composition.
- **Tablet.** Staircase starts at `sm` (640px) and is capped at 27%, so it never
  crushes the content column — correct. Cards stack at `lg`.
- **Mobile.** Staircase off (rows are `flex-col`, the `sm:ml-` never applies); the
  journey numeral and label go `flex-row` side by side; sun disc still renders at
  480px, clipped by `overflow-x-clip`.

## Section-by-section

### Masthead
Outlined pill back-link / wordmark / **filled ink pill CTA**. The only solid header
CTA in the project. *Luxury 7 · Editorial 7 · Craft 8.*

### Hero
Badge → two-line headline with gold italic → support → filled + outlined pill CTAs
→ circular portrait, all in front of a 580px butter sun.
*Luxury 8 · Editorial 8 · Craft 9 — the sun disc is the single best background
device outside Lavender's orbs.*

### The First Light (manifesto)
Rounded cream panel, centred, badge + headline + paragraph.
*Luxury 8 · Editorial 9 · Craft 8 — the most useful philosophy statement in the
project.*

### The one who rises first (founder)
Two-layer sun composition + biography. *Luxury 8 · Editorial 8 · Craft 9.*

### Three Rays (services)
Butter band, three rounded cards, numeral medallions, `mt-auto` price-pill + CTA
row. *Luxury 7 · Editorial 7 · Craft 9 — best card *construction* in the project;
weakest card *concept* (it is unmistakably a pricing grid).*

### The Sunrise (journey)
Six stepped cards with dot medallions and chip points.
*Luxury 8 · Editorial 8 · Craft 9 — the staircase is a genuinely original idea.*

### Said over morning coffee
Alternating bubbles with directional corners. *Luxury 7 · Editorial 8 · Craft 9.*

### By golden hour (results)
Rounded ink panel with butter dots. *Luxury 8 · Editorial 7 · Craft 8.*

### Rise & enquire
Rounded butter panel; rounded-full inputs; `Send it sunward`.
*Luxury 7 · Editorial 8 · Craft 8 — the most *usable* form in Part 3.*

### Footer
Script `have a golden day`. *Luxury 7 · Editorial 7 · Craft 6.*

## Component library

| Component | Behaviour |
| --- | --- |
| `Badge` | `rounded-full` outlined pill on cream, `Reveal y={10}`; used 8× |
| `SunPhoto` | `rounded-full`, `aspect-square object-top`, 6px cream mount ring, butter placeholder, long shadow; `y 46 + rotate -4 → 0` over 1.4s |
| Sun disc | Absolutely-positioned butter circle; hero disc animates on mount `scale 0.6 → 1` over 1.6s |
| Service card | `rounded-[2rem]`, `h-full flex-col`, `mt-auto` footer row |
| Journey dot | 40px butter circle with a double `box-shadow` ring (`0 0 0 6px CREAM, 0 0 0 7px ink/20`) |
| Bubble | `rounded-[1.75rem]` with one squared corner indicating direction |
| Rounded input | `rounded-full px-6 py-3.5`, label indented `pl-6` |

## Photography usage

`warmPortrait` (hero) · `marbleSmile` (founder). **Two images — the lowest count in
the project.** The journey uses none, the services use none, the words use none.
For a page about *mornings* and *warmth*, showing Chandni twice is a serious
under-use of a 22-frame library and the edition's most fixable weakness.

## Motion inventory

| Element | Animation | Why it works |
| --- | --- | --- |
| Sun disc | `scale 0.6 → 1`, 1.6s, on mount | The sun rising as the page loads. One of only two mount-time animations in the project. |
| `SunPhoto` | `y 46 + rotate -4 → 0`, 1.4s | Rising and levelling — the metaphor executed literally. |
| Journey dots | `scale 0.4 → 1`, 0.9s | Sun positions appearing along the arc. |
| Text | `Reveal`, delays `0.05–0.4` | Standard. |
| Buttons | `whileTap 0.96–0.97` | — |

**Zero loops. Zero parallax. Zero blur.**

## UX assessment

- **Navigation.** Back-link, `ct-services` secondary CTA, `ct-enquire` header CTA.
  Complete.
- **Conversion path.** Header pill → hero primary → hero secondary → three
  `This one →` → submit. Six touchpoints — the most in Part 3.
- **Friction.** Lowest in the project. Everything is large, rounded and warm.
- **Trust signals.** Founder named/pictured 2×, three testimonials, price shown as
  a pill next to each CTA, personal-reply promise.
- **Missing.** FAQ, booking, and — glaringly — photography.

## Performance notes

- 2 images only.
- Two large absolutely-positioned discs (solid fill, not blurred) — cheap.
- Six long shadows on the journey cards plus three on the service cards.
- **Second-lightest payload in the project after Blush.**

## Art direction critique

- **What is genuinely original.** The `--stair` staircase; the two-layer sun
  composition; the directional-corner testimonial bubbles; the price-pill-beside-CTA
  row; the `pl-6` label indent.
- **What is derivative.** The 3-up rounded service cards and the rounded-panel
  rhythm are the most "generic modern web" moments in the entire project.
- **What would elevate it.** (1) Add six circular journey photographs inside the
  staircase — they would sit perfectly inside the stepped cards and triple the
  photography. (2) Reduce panel radius from `2.5rem` to `1.5rem`; the current radius
  is the main thing costing it luxury. (3) Give one section a full-bleed
  photographic moment — the page never once shows a large image. (4) Vary the badge
  treatment so section hierarchy exists.

## Scores

| Criterion | Score | Justification |
| --- | ---: | --- |
| Luxury feel | 6.5 | Warm and premium-consumer rather than luxury-house; radius and yellow both cost it. |
| Elegance | 7.0 | Comfortable rather than graceful. |
| Uniqueness | 8.0 | Staircase, sun discs and bubbles are all original; the cards are not. |
| Photography | 5.0 | **Lowest in the project** — two images. |
| Typography | 6.5 | Correct, clear, unmemorable. |
| Colour | 7.5 | Distinctive and joyful; hardest colour to make expensive. |
| Layout | 8.5 | Staircase and two-layer sun are excellent; panel rhythm repeats. |
| Motion | 8.0 | Every animation rises. Consistent and on-metaphor. |
| Whitespace | 8.0 | Padding-rich and cushioned. |
| Detail | 8.5 | `mt-auto`, `--stair` cap, double box-shadow ring, label indent. |
| Consistency | 9.0 | The solar metaphor never breaks. |
| Emotion | 8.5 | The only genuinely uplifting edition. |
| Conversion | 8.5 | Six touchpoints and the best price/CTA pairing in the project. |
| Accessibility | 9.0 | **Best touch ergonomics in the project.** |
| Performance | 9.0 | Two images, solid-fill discs. |
| Responsiveness | 9.0 | The `--stair` cap and `sm:` gating are both correct. |
| **Overall** | **7.9** | |

---
---

# EDITION 12 — THE RIVIERA

`/riviera` · Mood: *Apricot · a postcard from your best-dressed life* · Palette `#FBEEE2 / #BC6B3D / #4E2E1B`

**Unique in the project:** the only edition built on a **single reusable physical
object** (the postcard, used five times), the only **perforated stamp** component,
the only **postmark**, the only **ruled-paper textarea**, and the only **epistolary
first-person about section written as an actual letter**.

## Direction

- **Creative direction.** A postcard sent to the reader from a life they haven't
  had yet. The conceit is complete: the hero is the **front** of the postcard, the
  about section is the **back** (message left, address block right, stamp,
  postmark), the services are **fares**, the journey is an **itinerary**, the
  testimonials are **wish-you-were-here notes**, the results are **souvenirs**, and
  the enquiry is **your postcard back** with ruled writing lines.
- **Core inspiration.** 1960s Côte d'Azur travel ephemera; airmail borders; the
  `PAR AVION` stamp; Wes Anderson's prop design; a shoebox of holiday postcards.
- **Mood board.** Apricot cardstock. Dashed perforations. An inked circular
  postmark, always slightly askew. A teal sea. Terracotta.
- **Visual identity.** `#FBEEE2` ground, `#FDF7F0` card, `#F5D9BE` apricot block,
  `#4E2E1B` chocolate ink, `#BC6B3D` terracotta. `✦` is the system glyph and
  **dashed borders** are the system rule — used on stamps, service dividers, the
  itinerary spine, testimonial rules and the submit button.
- **Emotional feeling.** Sunlit, escapist, generous, faintly nostalgic. The most
  *charming* edition of the fifteen.
- **Brand personality.** The friend already there. Writes in first person, tells
  you the weather is wonderful, and closes with "You should visit. It suits you
  here." — the single best closing line in the project.
- **Luxury perception.** *Experiential luxury* — travel, not goods. The value
  proposition is framed as a **destination** you can be taken to, which is a
  genuinely different and rather clever sell for a styling service.
- **Target audience.** Warm, aspirational, 30–50; people who buy experiences over
  objects; the audience most responsive to storytelling and least responsive to
  spec sheets.
- **Editorial style.** Epistolary, first-person, present tense. "I write to you
  from the far side of a wardrobe that finally works. The weather here is wonderful
  — every morning resolved in minutes, every occasion dressed before it arrives."
  This is the **most imaginative piece of writing in the project**.
- **Storytelling style.** Correspondence. Front → back → fares → itinerary → notes
  → souvenirs → your reply.
- **UX philosophy.** Objects over sections. The reader navigates a *desk of paper*
  rather than a page of blocks, which makes scanning slower but memory stronger.
- **Motion philosophy.** **Arriving in the post.** `Postcard` slides in from left
  or right (`x: ±44`) *depending on its rotation sign* and settles from
  `rotate × 2.4` to `rotate` over 1.2s. The hero image scales `1.12 → 1` over 1.8s
  (the longest photographic move in Part 3), and the postmark stamps itself on with
  `scale 0.7 + rotate -22 → -10` over 0.9s.
- **Interaction philosophy.** Square controls with dashed or solid borders; ink
  fill on hover; `whileTap 0.96–0.97`.
- **Layout philosophy.** Full-width objects rather than columns. The two most
  important sections (about, enquiry) share the identical
  `md:grid-cols-[1.2–1.25fr_1px_1fr]` **two-panel-with-divider** layout — an actual
  postcard back, complete with the vertical rule.
- **Spacing philosophy.** `py-20 → lg:py-28`, `space-y-12` on the itinerary,
  `p-7 → md:p-10` inside postcards. Roomy but not ceremonial.
- **Photography philosophy.** Photographs are **printed matter**: the hero is a
  full-bleed postcard front with a bottom-up scrim and script overprint; everything
  else is inside a perforated stamp. `tealCorner` for the hero is the right call —
  it is the only photograph in the library with sea-adjacent colour.
- **Typography philosophy.** Script does the heaviest lifting of any edition:
  `Greetings from élevé` at `clamp(2.6rem, 7.5vw, 5.5rem)` is the **largest script
  type in the project** and functions as the hero headline. There is no serif H1 at
  all — a bold and correct decision.
- **Component philosophy.** Three bespoke, all physical: `Stamp` (dashed outer +
  solid inner + apricot mat), `Postmark` (rotated ring with three lines of type),
  `Postcard` (bordered cream card with a long shadow and a directional slide-in).
- **Colour philosophy.** Warm analogous apricot-terracotta-chocolate. The most
  *sun-baked* palette in the project.
- **Conversion philosophy.** *Send a postcard back →* → *Book this fare* →
  *Post it → ✦*. Framing the enquiry as **replying to correspondence you've already
  received** is a psychologically clever reciprocity play and the most original
  conversion framing in the fifteen.
- **Accessibility philosophy.** Good contrast (ink ≈ 11.2:1) and a proper
  `<figure>`-free but semantically clean structure. The ruled-paper textarea uses a
  repeating `linear-gradient` at `2.2em` line-height with matching `leading-[2.2em]`
  — genuinely accessible *and* delightful, which is rare.

## Colour system

| Role | Value |
| --- | --- |
| Primary ground | `#FBEEE2` |
| Card | `#FDF7F0` (CREAM) |
| Block / stamp mat | `#F5D9BE` |
| Primary ink | `#4E2E1B` (INK) |
| Body | `#6B4A31` (SUB) |
| Accent | `#BC6B3D` (TERRA) — script, postmarks, `✦`, dashed rules |
| Hero scrim | `linear-gradient(to top, #2E1a0e/75 → /10 → transparent)` |
| Dark room | `#4E2E1B` with `#FBEEE2` text, `#EBC9A8` label, `#E5A876` glyphs |
| Hover | `#a3552c` (terra), `#efc79c` (apricot) |
| Shadow | `0 16–36px 30–70px -20/-44px rgba(78,46,27,0.5–0.65)` |

- **Contrast strategy.** INK ≈ 11.2:1, SUB ≈ 6.3:1. TERRA is used for script,
  glyphs and 9.5px uppercase point lines — the last of which is borderline at
  ≈ 3.9:1 and is the edition's one real contrast weakness.
- **Luxury created.** Through **material honesty**: dashed perforations, a mat
  board inside every stamp, a two-panel divided back, an inked postmark. It reads as
  *well-made object* rather than *expensive brand* — closer to a beautifully
  produced book than to a jewellery house.
- **Strengths.** The most cohesive material world of the fifteen. Photographs of
  Chandni in warm tones sit inside it effortlessly.
- **Weaknesses.** Apricot/terracotta reads *holiday*, which risks undercutting the
  professional positioning. The palette is also close enough to Citrine's and
  Mocha's that the three can blur together in a side-by-side review.

## Typography

| Element | Spec |
| --- | --- |
| Hero "headline" | `font-script clamp(2.6rem, 7.5vw, 5.5rem)`, cream, over the photo — **largest script in the project** |
| Hero sub | `sans 10px → md:11px uppercase tracking-0.28em` |
| H2 (Fares / Itinerary) | `display clamp(2rem, 4.4vw, 3.4rem)`, `font-medium`, `leading-1.08` |
| H3 (Fare) | `display 1.8rem font-medium leading-tight` |
| H3 (Day) | `display 1.55rem font-medium leading-tight` |
| Letter salutation | `font-script text-3xl` TERRA — `Dear reader,` |
| Signature | `font-script text-2xl` TERRA — `— Chandni Ahuja` |
| Address value | `display 15px italic` |
| Address key | `sans 8.5px uppercase tracking-0.24em` |
| Postmark | `sans 7.5px uppercase tracking-0.18em` × 2 + `display 13px italic élevé` |
| Stamp price | `display 15px font-medium` + `sans 8.5px uppercase` |
| Day medallion | 68px circle: `sans 8px` "Day" over `display text-xl italic` numeral |
| Body | `13.5–14px font-light leading-1.85/1.95` |
| Point line | `sans 9.5px uppercase tracking-0.18em` TERRA, joined by `  ✦  ` |
| Quote | `display 1.12rem italic leading-1.7`, preceded by a script `x` (a kiss) |
| Textarea | `display 16px italic`, `leading-2.2em`, ruled background |
| Button | `sans 10–10.5px uppercase tracking-0.2–0.22em`, square |

- **Hierarchy quality — excellent, and unusual.** The hero has **no serif
  headline** — the script carries it entirely, and the descriptor line below
  supplies all the information. It works because the script is enormous and the
  scrim gives it a clean field.
- **Editorial treatment.** The `To / From / Route / Correspondence` address block
  set as `8.5px` caps keys against `15px` display-italic values is the most
  charming information design in the project. The script `x` above each testimonial
  (a kiss sign-off) is a detail almost no one will consciously notice and everyone
  will feel.
- **Strengths.** Script used structurally, not decoratively.
- **Weaknesses.** `9.5px` terracotta uppercase for the itinerary points is the
  weakest contrast decision in Part 3.

## Layout system

- **Container:** `1240px` (header, hero, fares, words, footer), `1100px` (about),
  `900px` (itinerary), `1000px` (enquiry).
- **Root:** `overflow-x-clip`.
- **Hero:** a bordered apricot frame with `p-2 md:p-3` (the postcard's white
  border), containing a `62svh min-h-[420px] md:h-[68vh]` image, a bottom-up scrim,
  overlaid script + descriptor, and a postmark at `top-5 right-5` (`hidden sm:`).
  Beneath: a justified caption row with the `Send a postcard back →` CTA.
  **`svh` on mobile and `vh` on desktop is the correct modern choice** and one of
  only two heroes in the project that gets it right.
- **About (the back):** one `Postcard` containing
  `md:grid-cols-[1.25fr_1px_1fr]` — the letter left, a literal 1px divider,
  the postmark + stamp + address block right.
- **Fares:** `lg:grid-cols-3` of `Postcard`s at `-1.4° / 1.1° / -0.9°`, each with a
  price **inside a rotated stamp** in the top-right. Dashed rule above the includes.
- **Itinerary:** a dashed vertical spine at `left-[34px]` with
  `grid-cols-[68px_1fr] sm:grid-cols-[68px_1fr_88px]` — medallion / text / stamped
  photo. The stamps alternate `-3° / +3°`.
- **Words:** 3-up `Postcard`s at `-1° / 1.2° / -0.8°` on cream.
- **Souvenirs:** full-bleed chocolate band, `md:grid-cols-2`.
- **Enquiry:** one `Postcard` with the same two-panel divided layout as the about
  section — **ruled-paper textarea left, sender fields right**. The symmetry
  between the about section and the enquiry (you received a card; now you write
  one) is the most satisfying structural rhyme in the project.
- **Composition & balance.** Objects on a desk. Slight rotations everywhere keep it
  from feeling gridded.
- **Desktop.** Full two-panel postcard backs, 3-up fares, stamped itinerary.
- **Tablet.** Fares stack at `lg`; the postcard backs stay two-panel at `md`
  (768px), which is the right threshold — a divided postcard back at 700px would be
  cramped. Itinerary stamps appear at `sm`.
- **Mobile.** Postcard backs stack (divider `hidden md:block`); hero postmark
  hidden; itinerary stamps hidden; hero drops to `62svh`.

## Section-by-section

### Masthead
Standard three-part bar; CTA reads `Write back`. *Luxury 7 · Editorial 8 · Craft 7.*

### Hero — the front
Framed photo, scrim, giant script, postmark, caption row with CTA.
*Luxury 9 · Editorial 10 · Craft 10 — **the best hero in Part 3** and one of the
three best in the project.*

### The back — about
The letter, the divider, the postmark, the stamp, the address block.
*Luxury 9 · Editorial 10 · Craft 10 — **the single best-executed section anywhere
in the fifteen editions.***

### Three Fares
Tilted postcards with stamped prices. *Luxury 8 · Editorial 9 · Craft 9 — putting
the price inside a postage stamp is the most delightful price treatment in the
project.*

### The Itinerary
Dashed spine, day medallions, stamped photos.
*Luxury 8 · Editorial 9 · Craft 9.*

### Wish-you-were-here notes
3-up tilted postcards with script kisses. *Luxury 7 · Editorial 8 · Craft 8.*

### Souvenirs
Chocolate band with `✦` markers. *Luxury 8 · Editorial 7 · Craft 7.*

### Your postcard back
Ruled textarea + sender panel + `Reply Requested` postmark + dashed `Post it → ✦`.
*Luxury 8 · Editorial 10 · Craft 10 — **the most original form in the project**.*

### Footer
Script `wish you were here`. *Luxury 7 · Editorial 9 · Craft 7.*

## Component library

| Component | Behaviour |
| --- | --- |
| `Stamp` | Dashed terracotta outer `p-1` + solid inner `p-1.5` on an apricot mat; used 8× at various rotations |
| `Postmark` | 96px (or 80px) `-rotate-10` ring, 2px border, three lines of centred type; `aria-hidden`; used 4× |
| `Postcard` | Bordered cream card, long shadow, slides from `x ±44` based on rotation sign, settles from `rotate ×2.4`; used 5× (about, 3 fares, 3 words, enquiry) |
| Ruled textarea | Repeating `linear-gradient` at `2.2em` with matching `leading-[2.2em]`, `bg-local` so rules scroll with the text |
| Day medallion | 68px circle with a two-line stacked label |
| Two-panel back | `md:grid-cols-[1.2–1.25fr_1px_1fr]` with a literal 1px divider element |

## Photography usage

`tealCorner` (hero) · `marbleSmile` (stamp on the postcard back) · six
`JOURNEY.photo` stamps = **eight images, but the six itinerary stamps are hidden
below `sm` (640px)**. On phones the edition shows two photographs. Same failure
mode as Lavender and Porcelain, and easily fixed — a `56px` stamp would fit on a
375px screen without difficulty.

## Motion inventory

| Element | Animation | Why it works |
| --- | --- | --- |
| Hero image | `scale 1.12 → 1`, 1.8s | The longest, slowest move in Part 3 — the postcard settling into view. |
| Hero script | `y 26 → 0`, 1.2s, delay 0.3 | Handwriting appearing after the image. |
| Postmark | `scale 0.7 + rotate -22 → -10`, 0.9s, delay 0.75 | Genuinely reads as a stamp being pressed. **Best micro-animation in Part 3.** |
| `Postcard` | `x ±44 + rotate ×2.4 → rotate`, 1.2s | Direction keyed to rotation sign — a subtle, correct touch. |
| Itinerary stamps | `scale 0.85 + rotate ±5 → ±3`, 1s | Consistent with the postcard settle at a smaller scale. |
| Text | `Reveal`, delays `0.05–0.2` | — |

**Zero loops. Zero parallax. Zero blur.**

## UX assessment

- **Navigation.** Back-link + `Write back`. **No services anchor** — the fares are
  scroll-only.
- **Conversion path.** Header → hero caption-row CTA → three `Book this fare` →
  `Post it`. Five touchpoints.
- **Friction.** The ruled textarea is `rows={9}` and set in italic display type —
  beautiful, and slightly slower to type into than a plain field. Acceptable.
- **Trust signals.** The address block (`To / From / Route / Correspondence`) is a
  trust device disguised as a prop — it answers who, where and how in four lines.
  Second only to Pistachio's `SPECS`.
- **Missing.** FAQ, booking, services anchor, mobile itinerary photography.

## Performance notes

- 8 images, hero eager, rest lazy; only 2 load on mobile.
- One gradient scrim, one repeating-gradient textarea background, ~12 shadows.
- All animations are transform/opacity.
- **Middle of the pack — light payload, moderate paint.**

## Art direction critique

- **What is genuinely original.** The stamp; the postmark; the two-panel postcard
  back; the ruled textarea; the price-inside-a-stamp; the script-as-headline; the
  about/enquiry structural rhyme; the direction-keyed slide-in.
  **Second only to Pistachio for volume of original ideas.**
- **What is derivative.** The tilted testimonial cards (shared with Blush) are the
  least fresh moment.
- **What would elevate it.** (1) Show itinerary stamps on mobile at `56px`.
  (2) Add a `rv-services` anchor. (3) Lift the itinerary point line from `9.5px`
  terracotta to `10.5px` chocolate for contrast. (4) One more full-bleed photograph
  mid-page — the edition front-loads all its photographic impact into the hero and
  then goes 2,000px without a large image.

## Scores

| Criterion | Score | Justification |
| --- | ---: | --- |
| Luxury feel | 8.0 | Beautifully made rather than expensive; holiday warmth caps it. |
| Elegance | 8.0 | Charming rather than restrained — a deliberate trade. |
| Uniqueness | 9.5 | Stamp, postmark, ruled paper, divided back — nothing else like it. |
| Photography | 7.0 | Superb hero; six of eight hidden on mobile. |
| Typography | 9.0 | Script-as-headline and the address block are both project-best ideas. |
| Colour | 7.5 | Cohesive and sun-baked; overlaps Citrine and Mocha. |
| Layout | 9.5 | The two-panel back used twice, with the enquiry rhyming the about — outstanding. |
| Motion | 9.0 | The postmark stamp and direction-keyed slides are exceptional. |
| Whitespace | 8.0 | Roomy, object-led. |
| Detail | 9.5 | Mat boards, rotation-keyed direction, `bg-local` rules, `svh` hero. |
| Consistency | 9.5 | The correspondence metaphor never once slips. |
| Emotion | 9.0 | "You should visit. It suits you here." |
| Conversion | 8.5 | Reciprocity framing is the smartest in the project; no services anchor. |
| Accessibility | 7.5 | Strong overall; the 9.5px terracotta point line is the weak spot. |
| Performance | 8.0 | Light payload, moderate shadow count. |
| Responsiveness | 8.0 | Correct `svh` and `md` thresholds; loses six images on mobile. |
| **Overall** | **8.7** | |

---
---

# EDITION 13 — THE MOCHA

`/mocha` · Mood: *Mocha mousse · a café carte* · Palette `#EFE7DE / #8A664B / #38291D`

**Unique in the project:** the only **printed receipt** component (with a
hand-authored barcode), the only **progress-bar journey** (each chapter shows
"% extracted" with an animated fill), the only **tasting-notes triptych**, and the
only edition where the services live inside a **dark chalkboard menu panel**.

## Direction

- **Creative direction.** A specialty café, rendered as a styling practice. Chandni
  is *the roaster*; the services are *the carte* (three blends, one house); the
  process is *the pour — six extractions*; the results arrive as a *receipt*; the
  enquiry is *reserve your table* and *place the order*. It is the most
  **completely worked-through** metaphor in the project — every noun has a café
  equivalent and none of them feel forced.
- **Core inspiration.** Third-wave coffee branding; a chalkboard carte; tasting
  notes on a bag of single-origin; the thermal-printed receipt; Mocha Mousse as
  Pantone's 2025 Colour of the Year.
- **Mood board.** Warm greige plaster. A dark chalkboard behind the counter. Kraft
  and cream. A curling receipt. Three thin wisps of steam.
- **Visual identity.** `#EFE7DE` ground, `#E3D5C5` band, `#F8F3EC` cream,
  `#3E2E21` board, `#38291D` ink, `#8A664B` mocha accent. Dashed rules signal
  *receipt*; solid rules signal *page*. The `Steam` mark (three vertical hairlines,
  centre one taller) is the edition's monogram and appears three times.
- **Emotional feeling.** Warm, unhurried, familiar, competent. The most
  *comfortable* edition alongside Citrine, but with far more gravitas.
- **Brand personality.** The roaster. Patient, exacting, a little obsessive about
  process. "A wardrobe, like a good cup, is ruined by guessing."
- **Luxury perception.** *Craft luxury* — the luxury of specialist obsession.
  Similar in register to Pistachio's technical authority but far warmer, which is
  why it converts the same argument into a much more likeable page.
- **Target audience.** Urban professionals 30–48; the specialty-coffee / natural
  wine / independent-bookshop consumer; design-aware but not design-precious.
- **Editorial style.** Tasting notes and menu copy. Short, sensory, confident.
  *Body / Finish / Notes* as a philosophy triptych is the most original way any
  edition states its value proposition.
- **Storytelling style.** A visit. Arrive → taste → meet the roaster → read the
  carte → watch the pour → take the receipt → reserve a table.
- **UX philosophy.** Menu logic. Everything is a list you read top-to-bottom with
  a price on the right — the most *familiar* information pattern in the project,
  which makes it unusually easy to parse despite the density.
- **Motion philosophy.** **Extraction.** The journey's six progress bars fill to
  `16% / 33% / 50% / 66% / 83% / 100%` over 1.3s each — the only
  **quantitative** animation in the project, and the only place where motion
  conveys *information* rather than mood.
- **Interaction philosophy.** Square controls, colour-only hovers, underlined
  `Order this blend →` links.
- **Layout philosophy.** Narrow and centred at the top (`760px` hero, `900px`
  tasting notes, `860px` carte, `820px` pour), widening only for the roaster and
  receipt sections (`1140px`). The page is **the narrowest overall in the project**
  — deliberately, because a menu is a narrow object.
- **Spacing philosophy.** `py-16 → lg:py-28`, `space-y-10/12` between carte items
  and pour steps.
- **Photography philosophy.** Photographs are **the room**, not the product. Two
  only: `libraryBook` (Chandni reading, `4/5`) and `stoolCrossed` (Chandni at the
  counter, `3/4`), both via the shared `PhotoFade` primitive — the only edition in
  Part 3 that uses a shared motion component rather than a bespoke one.
- **Typography philosophy.** Menu typography: name left, price right, dotted-free
  but baseline-aligned via `flex items-baseline justify-between`. Prices are set in
  **display italic** rather than sans — the only edition to do this, and it reads
  distinctly more like a carte than a price list.
- **Component philosophy.** Three bespoke (`Steam`, `CafeLabel`, the receipt) plus
  a hand-authored `BARCODE_WIDTHS` array of 26 integers.
- **Colour philosophy.** Warm neutral browns, four values, one accent. Closest of
  any edition to the base ivory/espresso palette of Edition 01 — which makes it the
  easiest of the fifteen to reconcile with the original brand direction.
- **Conversion philosophy.** *See the carte* → *Order this blend →* → *Place the
  order*. Ordering language lowers the stakes of a ₹34,999 decision by framing it
  as a purchase rather than a commitment — subtle and effective.
- **Accessibility philosophy.** Strong: bordered inputs, 16px on mobile,
  high-contrast dark panel (`#F5EBDF` on `#3E2E21` ≈ 11:1). The `12.5px` grey
  includes line inside the dark carte is the weakest text on the page.

## Colour system

| Role | Value |
| --- | --- |
| Primary ground | `#EFE7DE` |
| Band | `#E3D5C5` (roaster, receipt) |
| Cream | `#F8F3EC` (inputs, receipt card) |
| Board | `#3E2E21` (the carte panel) |
| Primary ink | `#38291D` (INK) |
| Body | `#5E4936` (SUB) |
| Accent | `#8A664B` (ACCENT) — steam, numerals, script, progress fill |
| Board text | `#F5EBDF` (headings), `#E4D5C6` (body), `#C9B096` (secondary), `#E3C9A8` (prices/notes), `#D8C4B0` (label) |
| Hover | `#54402e` |
| Shadow | `0 30px 58px -42px rgba(56,41,29,0.6)` |

- **Contrast strategy.** INK ≈ 11.6:1, SUB ≈ 6.5:1. Inside the board panel, the
  five-tone text hierarchy (`F5EBDF / E4D5C6 / E3C9A8 / C9B096 / D8C4B0`) is the
  most nuanced dark-surface type system in the project.
- **Luxury created.** Through **the dark panel**. Dropping a chalkboard into the
  middle of a warm neutral page is the single highest-impact decision here — it
  gives the carte the gravity that three light cards never could.
- **Strengths.** Warm, timeless, gender-neutral, closest to the original brand
  palette. Photographs sit perfectly.
- **Weaknesses.** The least *distinctive* palette of Part 3 — it is very close to
  Edition 01's ivory/espresso and could be mistaken for it in a thumbnail review.

## Typography

| Element | Spec |
| --- | --- |
| H1 | `display clamp(2.6rem, 6.4vw, 4.6rem)`, `leading-1.06`, `tracking--0.01em`, centred, hard `<br/>` |
| H2 (Enquire) | `display clamp(1.9rem, 4vw, 2.9rem)`, `leading-1.1`, centred |
| H2 (Roaster) | `display clamp(2rem, 4vw, 3.1rem)`, `leading-1.1` |
| H3 (Blend) | `display 1.7rem → md:1.9rem font-medium`, cream on board |
| H3 (Extraction) | `display 1.5rem font-medium leading-tight` |
| Carte price | `display 1.15rem italic` `#E3C9A8` + `0.8em not-italic` USD |
| Tasting-note title | `display text-xl italic` ACCENT |
| `CafeLabel` | `sans 10px uppercase tracking-0.3em`, wrapped in em-dashes: `— Tasting notes —` |
| Carte label | `sans 10px uppercase tracking-0.34em` `#D8C4B0` |
| Carte script | `font-script text-3xl` `#E8D6C3` — "three blends, one house" |
| Body | `14.5px font-light leading-1.9/1.95` |
| Extraction body | `13.5px font-light leading-1.85` |
| Extraction % | `sans 9px uppercase tracking-0.2em` — "50% extracted" |
| Includes (carte) | `12.5px font-light leading-1.9`, joined with `  ·  ` |
| Receipt header | `sans 11px uppercase tracking-0.3em` |
| Receipt line | `12px font-light` + `✓` in accent |
| Receipt total | `sans 11px uppercase tracking-0.24em` "Total" / `display 15px italic` "certainty, daily" |
| Receipt footer | `sans 8.5px uppercase tracking-0.3em` — "Thank you — come dressed again" |
| Quote | `display 1.2rem italic leading-1.65` |
| Numeral | `display text-xl italic` ACCENT |
| Button | `sans 9.5–10.5px uppercase tracking-0.22–0.24em`, square |

- **Hierarchy quality — very good.** The `— label —` em-dash wrapper is a small,
  consistent device that reads unmistakably as menu typography and gives every
  section the same modest entry weight without the flatness of Citrine's badges
  (because the sections themselves differ so much in treatment).
- **Editorial treatment.** Setting prices in **display italic** rather than sans is
  the defining typographic choice — it makes the carte read as a *menu* rather than
  a *pricing table*. `Total — certainty, daily` on the receipt is the wittiest line
  in the project.
- **Strengths.** The five-tone board hierarchy is genuinely sophisticated.
- **Weaknesses.** Compressing all the includes into one `12.5px` run-on line
  (`.join("  ·  ")`) saves space but makes the most scannable content on the page
  the least scannable. This is the edition's clearest information-design error.

## Layout system

- **Container:** `760px` (hero, enquiry), `900px` (tasting notes), `1140px`
  (roaster, receipt, header, footer), `860px` (carte), `820px` (pour).
- **Hero:** centred, narrow, steam → eyebrow → headline → support → `See the carte`
  → a `520px` `4/5` photograph beneath. The **only hero in the project where the
  CTA precedes the photograph**, which makes the image function as a closing image
  rather than an opening one.
- **Tasting notes:** `sm:grid-cols-3`, each a centred italic title over a
  `max-w-[240px]` note.
- **Roaster:** `lg:grid-cols-2` on `#E3D5C5`.
- **La carte:** a `#3E2E21` panel inside an `860px` container, `space-y-12`, each
  blend with a baseline-aligned name/price row over a dashed rule.
- **The pour:** `grid-cols-[40px_1fr]`, each extraction with a title/percentage row,
  a 3px progress track, body, and a `·`-joined point line.
- **Receipt section:** `lg:grid-cols-2` — testimonials left, the receipt card
  right at `max-w-[400px]`, dashed-bordered, with a barcode.
- **Enquiry:** `760px` centred, standard fields.
- **Composition & balance.** Narrow, vertical, menu-like. The dark carte at the
  centre is the page's anchor; the receipt is its counterweight.
- **Desktop.** Full two-column receipt section, wide roaster.
- **Tablet.** Tasting notes go 3-up at `sm`; roaster and receipt stack at `lg`.
  768–1023px is a clean single narrow column — this edition tablets better than
  almost any other because it was designed narrow to begin with.
- **Mobile.** Everything stacks. The receipt card centres at `max-w-[400px]`.
  Nothing is hidden at any breakpoint — **the only edition in Part 3 with zero
  breakpoint-hidden content.**

## Section-by-section

### Masthead
Standard bar; CTA reads `Reserve`. *Luxury 7 · Editorial 7 · Craft 7.*

### Hero
Steam mark → eyebrow → "Style, brewed / to *your* taste." → CTA → `4/5` photograph
of Chandni reading. *Luxury 8 · Editorial 8 · Craft 8.*

### Tasting notes
`Body / Finish / Notes` triptych. *Luxury 8 · Editorial 10 · Craft 9 — **the most
original philosophy section in the project**; it states three distinct value
propositions in eighteen words.*

### The Roaster
Photo + biography on the band. *Luxury 8 · Editorial 9 · Craft 8.*

### La carte
The dark chalkboard menu. *Luxury 9 · Editorial 9 · Craft 9 — **the highest-impact
single section in Part 3**; let down only by the run-on includes line.*

### The Pour
Six extractions with animated progress bars.
*Luxury 7 · Editorial 9 · Craft 10 — **the only journey in the project that
conveys progress quantitatively**.*

### Overheard at the counter + the receipt
Testimonials left, receipt right.
*Luxury 8 · Editorial 10 · Craft 10 — **the best single component in the project**.
A dashed thermal receipt listing the six results as line items, ticked, with
`Total — certainty, daily` and a 26-bar barcode.*

### Reserve your table
Centred form, `Place the order`. *Luxury 7 · Editorial 8 · Craft 8.*

### Footer
Steam mark at `scale-90 opacity-70` over the copyright. *Luxury 7 · Editorial 8 ·
Craft 8.*

## Component library

| Component | Behaviour |
| --- | --- |
| `Steam` | Three `w-px` bars (5 / 7 / 5 units tall) at 50% opacity; `aria-hidden`; used 3× at different scales |
| `CafeLabel` | `— TEXT —` at `10px/0.3em`, wrapped in `Reveal y={10}` |
| Receipt | Dashed border, cream ground, header + location + `✓` line items + total + barcode + thank-you |
| Barcode | 26 hand-authored bar widths (1–4px) rendered as flex children |
| Progress track | `h-[3px]` rounded, `scaleX` fill to `(i+1)/6` over 1.3s, `origin-left` |
| Carte row | `flex items-baseline justify-between` name/price over a dashed rule |
| `PhotoFade` | Shared project primitive (the only Part 3 edition to reuse one) |

## Photography usage

`libraryBook` (hero) · `stoolCrossed` (roaster). **Two images** — tied with Citrine
for the lowest count in the project. The carte, the pour, the receipt and the
testimonials are entirely text. For a café metaphor this is arguably right (menus
don't have photographs) but it means the page shows Chandni exactly twice.

## Motion inventory

| Element | Animation | Why it works |
| --- | --- | --- |
| Progress bars | `scaleX 0 → (i+1)/6`, 1.3s, delay 0.15 | **The only informational animation in the project.** You watch the extraction complete. |
| Photos | `PhotoFade` (`scale 1.03 → 1`, blur 8px → 0, 1.05s) | Shared primitive; warm and quiet. |
| Text | `Reveal`, delays `0.05–0.4` | — |
| Steam | **static** | Deliberately not animated during the motion-softening pass — the right call; animated steam would have been the one gimmick on the page. |
| Buttons | `whileTap 0.97` | — |

**Zero loops. Zero parallax.** One blur (inside the shared `PhotoFade`).

## UX assessment

- **Navigation.** Back-link, `Reserve` header CTA, and a hero CTA to `mc-carte`.
  Complete — and it is the only edition in Part 3 whose hero CTA points at the
  services rather than the form, which is arguably the better funnel.
- **Conversion path.** Header → hero (`See the carte`) → three `Order this blend →`
  → `Place the order`. Five touchpoints with a considered order of operations.
- **Friction.** Low. The form is short and centred.
- **Trust signals.** The receipt is a trust device of a completely different kind —
  it converts abstract outcomes into a **transaction record**, which is
  psychologically powerful. Plus the roaster biography and three testimonials.
- **Missing.** FAQ, booking, photography.

## Performance notes

- 2 images.
- One shadow, one blur (shared primitive), six `scaleX` bars, no gradients.
- Barcode is 26 DOM nodes — negligible.
- **Third-lightest edition in the project.**

## Art direction critique

- **What is genuinely original.** The receipt; the barcode; the tasting-notes
  triptych; the extraction percentages; display-italic prices; the `Steam` monogram;
  the dark carte panel; `Total — certainty, daily`.
- **What is derivative.** Nothing significant. The centred hero is conventional but
  the CTA-before-image ordering is not.
- **What would elevate it.** (1) **Break the includes out of the run-on line** —
  a two-column list inside the dark panel would fix the page's one real
  information-design flaw. (2) Add photography: three small square frames in the
  tasting-notes triptych would cost nothing conceptually and triple the imagery.
  (3) The receipt deserves to be larger and more central — it is the best thing on
  the page and currently sits in a right-hand column at `400px`.

## Scores

| Criterion | Score | Justification |
| --- | ---: | --- |
| Luxury feel | 8.0 | The dark carte gives it real gravity; warm neutrals age well. |
| Elegance | 8.5 | Narrow, quiet, well-mannered. |
| Uniqueness | 9.0 | Receipt, barcode, extraction bars, tasting notes. |
| Photography | 5.0 | **Two images** — tied lowest with Citrine. |
| Typography | 9.0 | Display-italic prices and the five-tone board hierarchy. |
| Colour | 8.0 | Warm, timeless, gender-neutral; least distinctive of Part 3. |
| Layout | 8.5 | Narrow menu logic executed consistently; the run-on includes cost it. |
| Motion | 9.0 | The only informational motion in the project. |
| Whitespace | 8.0 | Comfortable, never wasteful. |
| Detail | 9.5 | Hand-authored barcode, five-tone dark hierarchy, static steam. |
| Consistency | 10.0 | **The most completely worked-through metaphor in the project.** |
| Emotion | 8.0 | Warm and familiar without sentimentality. |
| Conversion | 8.5 | Best funnel ordering in Part 3; ordering language lowers the stakes. |
| Accessibility | 8.5 | Bordered inputs, strong contrast; the 12.5px run-on line is the weak spot. |
| Performance | 9.5 | Two images, one shadow, one blur. |
| Responsiveness | 9.5 | **The only Part 3 edition with zero breakpoint-hidden content.** |
| **Overall** | **8.6** | |

---
---

# EDITION 14 — THE PEARL

`/pearl` · Mood: *Champagne & gold · unhurried opulence* · Palette `#F7F4ED / #A88A50 / #3A3325`

**Unique in the project:** the only **gradient-filled hairline** (gold fading to
40% across its width), the only **vertical connector-line journey** (a centred
column of medallions joined by drawn gold segments), the only **overlaid caption
card** hero, and the only edition using `Édition XIV` — Roman numerals in the
masthead itself.

## Direction

- **Creative direction.** A jewellery house folio. Not a website — a *prospectus*.
  Sections are numbered `N° I` through `N° VI`; services are **suites**; the process
  is **the forming — six layers**; testimonials are **in confidence**; the enquiry
  is a **private enquiry**, *handled personally, answered always*.
- **Core inspiration.** Van Cleef & Arpels and Mikimoto brochures; the Row's website
  restraint; champagne-and-gold hotel identity systems; "quiet luxury" as a stated
  category rather than an implied one.
- **Mood board.** Champagne silk. A single gold hairline on cream. A pearl in
  cross-section. Cream marble. A hotel key card.
- **Visual identity.** `#F7F4ED` ground, `#FCFAF5` pearl, `#EFEADF` shell,
  `#3A3325` warm charcoal ink, `#A88A50` gold. **Gold is used at alpha values
  throughout** — `${GOLD}59`, `${GOLD}73`, `${GOLD}80`, `${GOLD}99`, `${GOLD}66` —
  five distinct opacities of one accent, which is the most refined single-colour
  handling in the project.
- **Emotional feeling.** Composed, private, expensive. Cool in temperature despite
  warm hues.
- **Brand personality.** The house. Speaks in the third person about itself. Never
  explains, never persuades — states.
- **Luxury perception.** **The highest of the fifteen.** The philosophy line
  *"Quiet luxury is not what you wear. It is how you arrive"* explicitly names the
  category, and the page then earns it: nothing is decorated, everything is
  hairlined, and the only ornament is a gold rule.
- **Target audience.** The highest net worth of the fifteen. 38–60. Board members,
  founders post-exit, public figures. "Composed for those who prefer to be
  remembered, not noticed" is a precise audience filter written as a headline.
- **Editorial style.** Declarative and short. The pearl metaphor is stated once,
  fully, in the philosophy — "A pearl is not decorated. It is formed — layer upon
  layer, in private, until its surface holds *light* on its own" — and then never
  laboured again. **This restraint is what separates Pearl from every other
  metaphor edition in the project**, all of which sustain their conceit in every
  label. Pearl states it and moves on, which is itself a luxury behaviour.
- **Storytelling style.** Prospectus. Arrival → philosophy → the house → the suites
  → the forming → in confidence → what the pearl holds → private enquiry.
- **UX philosophy.** Deference. Nothing is urgent, nothing is highlighted, nothing
  competes. The reader is trusted to find their way.
- **Motion philosophy.** **Drawing in gold.** `GoldRule` `scaleX 0 → 1` over 1.4s —
  the **slowest rule draw in the project** — used 8×. Journey connectors draw
  vertically (`scaleY 0 → 1`, `origin-top`) so the six layers assemble downward.
  `LuxePhoto` settles from `scale 1.06` with a separately-timed opacity curve
  (0.9s opacity inside a 1.3s scale) — the only edition that splits the two.
- **Interaction philosophy.** The primary buttons swap `backgroundColor` from ink to
  **gold** on hover via inline handlers — the only colour-inverting hover in the
  project on a solid button, and a genuinely luxurious moment.
- **Layout philosophy.** Full-bleed hero, then generous 12-column and centred
  alternation. The services are **rule-separated rows**, not cards — the same
  decision as Porcelain and, as there, the reason it reads as a house rather than a
  shop.
- **Spacing philosophy.** `py-20 → lg:py-28` throughout with `py-10 → lg:py-12`
  inside each suite row. The most *consistent* rhythm in Part 3.
- **Photography philosophy.** Photographs are **large, few and quiet**: a full-bleed
  `52svh / 80vh` hero and a single `3/4` founder portrait. No captions except the
  founder's. The hero is `stoolWide`; the founder is `heroMarble` — the two most
  composed frames in the library.
- **Typography philosophy.** The **smallest hero in Part 3** (`3.8rem`) — smaller
  than Cherry's `6.2rem` by a factor of 1.6 — because the house does not raise its
  voice. `N° I`–`N° VI` in `display text-sm italic` gold, over `9.5px/0.32em`
  labels, is the section system.
- **Component philosophy.** Three bespoke (`Shimmer`, `GoldRule`, `LuxePhoto`),
  the smallest bespoke surface in Part 3 — appropriate for the most restrained page.
- **Colour philosophy.** Champagne monochrome plus gold at five alphas. No second
  accent, no tertiary, nothing chromatic.
- **Conversion philosophy.** The quietest in the project. Header reads `Private
  enquiry`; the suite CTA is a 9.5px underlined `Reserve →`; the submit is
  `Send in confidence`. **This is the lowest-pressure conversion design of the
  fifteen** — appropriate to the audience, but objectively the weakest at driving
  action.
- **Accessibility philosophy.** Good contrast (ink ≈ 11.4:1) with two soft spots:
  gold-on-cream at `9.5px` is ≈ 3.2:1 (used for journey point lines), and the
  `Reserve →` links are very small targets.

## Colour system

| Role | Value |
| --- | --- |
| Primary ground | `#F7F4ED` |
| Pearl | `#FCFAF5` (founder band, medallions, enquiry card) |
| Shell | `#EFEADF` (journey band, image placeholder) |
| Primary ink | `#3A3325` (INK) |
| Body | `#5E553F` (SUB) |
| Accent | `#A88A50` (GOLD) at `59 / 66 / 73 / 80 / 99 / FF` |
| Dark room | `#3A3325` with `#F2EDE1` text, `#CDBE9C` label, `#F7F4ED33` rules |
| Hero scrim | `linear-gradient(to top, #1f1a10/50 → transparent)` |
| Gold rule | `linear-gradient(90deg, GOLD, GOLD66)` — **fades as it travels** |

- **Contrast strategy.** INK ≈ 11.4:1, SUB ≈ 6.8:1. GOLD carries display italics
  (`Shimmer`), numerals, rules and bullets. The one overreach is `9.5px` gold
  uppercase for journey points.
- **Luxury created.** Through **the gradient hairline**. A rule that starts at full
  gold and fades to 40% across its width is a detail almost nobody will consciously
  register and everybody will read as *finely made*. Used eight times, it is the
  page's entire ornamental budget.
- **Strengths.** The most convincingly expensive palette in the project. Ages
  indefinitely. Gender-neutral.
- **Weaknesses.** Champagne-and-gold is also the most *expected* luxury palette —
  it is the safe answer. It risks reading as a hotel or a jewellery brand rather
  than as a personal stylist, and it has the least personality of Part 3.

## Typography

| Element | Spec |
| --- | --- |
| Masthead | `display text-xl lowercase` + `font-script text-lg` gold |
| Hero eyebrow | `sans 9.5px uppercase tracking-0.3em` — `Édition XIV — The Pearl` |
| H1 | `display clamp(2.2rem, 5vw, 3.8rem)`, `leading-1.08`, `tracking--0.01em` — **smallest hero in Part 3** |
| H2 (Philosophy) | `display clamp(1.7rem, 3.4vw, 2.6rem)`, `font-normal`, `leading-1.42`, centred |
| H2 (House) | `display clamp(2rem, 4vw, 3.2rem)`, `leading-1.1` |
| H2 (Suites) | `display clamp(2rem, 4.4vw, 3.4rem)`, `leading-1.08` |
| H2 (Enquiry) | `display clamp(1.9rem, 4vw, 2.9rem)`, `leading-1.1` |
| H3 (Suite) | `display 2rem → md:2.3rem font-medium leading-tight` |
| H3 (Layer) | `display 1.7rem font-medium leading-tight` |
| Section numeral | `display text-sm italic` GOLD — `N° III` |
| Section label | `sans 9.5px uppercase tracking-0.32em` |
| Suite numeral | `display text-2xl italic` GOLD |
| Price | `display 1.6rem font-medium leading-none` **in gold** + `10px/0.22em` USD |
| Body | `14.5px font-light leading-1.95` |
| Suite description | `14px font-light leading-1.9`, `max-w-2xl` |
| Include item | `13px font-light leading-relaxed` with a **16px gold hairline dash** as the bullet |
| Featured quote | `display clamp(1.5rem, 3.2vw, 2.2rem) italic leading-1.6` |
| Secondary quote | `display 1.15rem italic leading-1.7` |
| Layer points | `sans 9.5px uppercase tracking-0.22em` GOLD, joined by `  ·  ` |
| Caption | `sans 9px uppercase tracking-0.26em` |
| Script | `text-2xl` GOLD — role line, `formed slowly, worn forever` |
| Button | `sans 9.5–10.5px uppercase tracking-0.24–0.26em`, square |

- **Hierarchy quality — excellent.** The `N° X` + wide-tracked label pair (shared
  in spirit with Porcelain's `Marker`) is used six times and never varies.
- **Editorial treatment.** Using a **16px gold hairline as the list bullet**
  instead of a dot or dash character is the most refined small decision in Part 3 —
  it makes each include read like a line item on an engraved card. Setting the price
  in **gold display** rather than ink is the second.
- **Strengths.** The restraint of the small hero against the full-bleed image
  behind it is genuinely confident.
- **Weaknesses.** Almost nothing is memorable in isolation; the edition's quality
  is cumulative rather than striking.

## Layout system

- **Container:** `1280px` (header, founder, footer), `820px` (philosophy, enquiry),
  `1100px` (suites, results), `720px` (journey), `860px` (words).
- **Hero:** a `52svh min-h-[380px] md:h-[80vh]` full-bleed `LuxePhoto` with a
  bottom-up scrim, and a `max-w-xl` pearl caption card that is **`-mt-24` overlapped
  on mobile and `absolute bottom-10 left-10` on desktop**. This dual-positioning is
  the cleanest solution to the overlaid-hero-card problem in the project — no other
  edition handles it as well.
- **Philosophy:** `820px` centred with a `160px` gold rule above.
- **The House:** `lg:grid-cols-12` — photo `col-span-5`, copy `col-span-6
  col-start-7`, with a `200px` gold rule closing the biography.
- **The Suites:** `md:grid-cols-[90px_1fr_190px]` rows separated by full-width
  `GoldRule`s above each and one closing the set — **four rules for three suites**,
  which is what makes them read as a ledger rather than a list. Includes are
  `sm:grid-cols-2`.
- **The Forming:** a `720px` centred column. Each layer: a `48px` drawn vertical
  gold connector (skipped for the first), a `36px` bordered gold medallion with a
  Roman numeral, then title, body and points — all centred.
  **The only vertically-connected centred journey in the project.**
- **In confidence:** a large featured quote, a `160px` gold rule, then
  `sm:grid-cols-2 text-left` secondaries.
- **What the pearl holds:** full-bleed ink band, `md:grid-cols-2`.
- **Private enquiry:** a `border p-1.5` gold frame around a pearl panel.
- **Composition & balance.** Alternating full-bleed → narrow centred → wide split →
  narrow centred. The most *paced* layout in Part 3.
- **Desktop.** Absolute hero card, 12-col founder, three-column suites.
- **Tablet.** Suites collapse at `md` (768px) into stacked blocks with the price row
  going `flex-row justify-between` — the same clean table-collapse pattern as
  Pistachio. Hero card is still `-mt-24` overlapped below `md`.
- **Mobile.** Hero at `52svh` with the card overlapping upward — an elegant solution
  that keeps both the image and the text legible without hiding either.
  **No content is hidden at any breakpoint.**

## Section-by-section

### Masthead
`Private enquiry` as the CTA. *Luxury 9 · Editorial 8 · Craft 7.*

### Hero
Full-bleed portrait, scrim, overlaid pearl card with a `3.8rem` headline.
*Luxury 10 · Editorial 9 · Craft 10 — **the most expensive-feeling hero in the
project**, and the best-executed responsive overlay.*

### N° I — The philosophy
`820px` centred over a `160px` gold rule.
*Luxury 10 · Editorial 10 · Craft 8 — **the best-written philosophy in the
project**; the pearl analogy is complete, precise and stated only once.*

### N° II — The house
Portrait + biography + closing gold rule. *Luxury 9 · Editorial 9 · Craft 9.*

### N° III — The suites
Gold-ruled ledger rows with gold prices and hairline bullets.
*Luxury 10 · Editorial 9 · Craft 10 — **the most expensive-looking services layout
in the project**.*

### N° IV — The forming
Centred column of connected gold medallions on shell.
*Luxury 9 · Editorial 8 · Craft 9 — beautiful; and the only journey in the project
with **no photographs and no differentiation between steps**, which makes it the
least informative.*

### N° V — In confidence
Featured quote + gold rule + 2-up secondaries. *Luxury 9 · Editorial 9 · Craft 9.*

### N° VI — What the pearl holds
Ink band with gold dots. *Luxury 9 · Editorial 8 · Craft 8.*

### Private enquiry
Gold-framed pearl panel, gold-hover submit. *Luxury 10 · Editorial 9 · Craft 9.*

### Footer
Script `formed slowly, worn forever`. *Luxury 9 · Editorial 9 · Craft 8.*

## Component library

| Component | Behaviour |
| --- | --- |
| `Shimmer` | A `<span>` in gold. Deliberately motionless (an animated shimmer was removed during the softening pass). Used 3× on the single most important word of each headline. |
| `GoldRule` | `h-px`, `linear-gradient(90deg, GOLD, GOLD66)`, `scaleX 0 → 1` over 1.4s, `origin-left`. Used 8×. |
| `LuxePhoto` | `scale 1.06 → 1` over 1.3s with opacity on a **separate 0.9s curve**; shell placeholder |
| Layer medallion | `36px` bordered gold circle on pearl with a Roman numeral |
| Layer connector | `48px` vertical gold line, `scaleY 0 → 1`, `origin-top` |
| Hairline bullet | `h-px w-4` gold span at `mt-[9px]` — the list marker |
| Gold-hover button | Inline `onMouseEnter/Leave` swapping `backgroundColor` ink ↔ gold |

## Photography usage

`stoolWide` (full-bleed hero) · `heroMarble` (founder). **Two images** — but unlike
Citrine and Mocha, one of them is a `80vh` full-bleed, so the *photographic
presence* is far higher than the count suggests. This is the most efficient use of
minimal photography in the project. Still, the suites and the forming would both
benefit from imagery.

## Motion inventory

| Element | Animation | Why it works |
| --- | --- | --- |
| `GoldRule` | `scaleX 0 → 1`, 1.4s | Slowest rule in the project. Gold being laid down. |
| Layer connectors | `scaleY 0 → 1`, 0.9s, `origin-top` | The pearl forming downward, layer by layer. |
| `LuxePhoto` | `scale 1.06 → 1` (1.3s) with opacity on 0.9s | Split timing means the image is fully visible while still settling — subtler than a single curve. |
| Hero card | `y 34 → 0`, 1.3s, delay 0.35 | Arrives after the image has established. |
| Button hover | ink → gold `backgroundColor`, 500ms | The only solid-button colour inversion in the project. |
| `Shimmer` | **static** | Correct. An animated gold shimmer would have cheapened the whole page. |

**Zero loops. Zero parallax. Zero blur.**

## UX assessment

- **Navigation.** Back-link + `Private enquiry`. **No suites anchor.** The quietest
  navigation in the project.
- **Conversion path.** Header → hero `Begin privately` → three `Reserve →` →
  `Send in confidence`. Five touchpoints, but the three suite CTAs are `9.5px`
  underlined text — **the smallest CTAs in the project**.
- **Friction.** Low functionally; high psychologically, and deliberately so. The
  page makes enquiring feel like a considered act.
- **Trust signals.** "One client at a time, by correspondence and consultation";
  featured testimonial at `2.2rem`; transparent pricing; "Answered *always*".
- **Missing.** FAQ, booking, suites anchor, and larger suite CTAs.

## Performance notes

- 2 images (one large hero).
- One gradient scrim, eight gradient hairlines, zero shadows, zero blurs.
- All animations are transform-only.
- **Very light.** The 80vh hero image is the only meaningful cost.

## Art direction critique

- **What is genuinely original.** The fading gradient hairline; gold at five
  alphas; the hairline-dash list bullet; gold-set prices; the split opacity/scale
  photo curve; the dual-position hero card; the connected medallion column;
  `Édition XIV`.
- **What is derivative.** Champagne-and-gold is the most-used luxury palette in the
  world. The page executes it beautifully but does not surprise.
- **What would elevate it.** (1) Add photography to the suites — one `3/4` frame per
  row in the `90px` numeral column's place would be transformative. (2) Enlarge the
  `Reserve →` CTAs; the current 9.5px underline is under-converting a page aimed at
  the highest-value buyer. (3) Add a suites anchor. (4) Lift the `9.5px` gold point
  lines to ink for contrast. (5) One unexpected element — a single unexpected crop,
  colour or type moment — would take this from *impeccable* to *memorable*.

## Scores

| Criterion | Score | Justification |
| --- | ---: | --- |
| Luxury feel | 10.0 | **Highest in the project.** Nothing else comes close on pure expense-signalling. |
| Elegance | 10.0 | Not a single element out of place. |
| Uniqueness | 7.0 | Flawless execution of the most predictable luxury palette. |
| Photography | 7.0 | Only two images, but one is an 80vh full-bleed used perfectly. |
| Typography | 9.0 | Gold prices, hairline bullets, the restrained hero. |
| Colour | 9.0 | Five alphas of one accent; impeccable, if expected. |
| Layout | 9.5 | Best-paced page in Part 3; the dual-position hero card is exemplary. |
| Motion | 9.0 | Slow, drawn, entirely gold. |
| Whitespace | 9.5 | The most confident use of emptiness in Part 3. |
| Detail | 9.5 | Gradient rules, split photo curves, hairline bullets, gold hover. |
| Consistency | 9.5 | Stated once, held throughout. |
| Emotion | 6.5 | Admirable rather than moving. Keeps the reader at a distance. |
| Conversion | 7.0 | **Smallest CTAs in the project**; no suites anchor. |
| Accessibility | 8.0 | Strong contrast except 9.5px gold; small tap targets. |
| Performance | 9.0 | Transform-only, zero shadows, one large image. |
| Responsiveness | 9.5 | **Zero hidden content**; the hero card solution is the best in the project. |
| **Overall** | **8.8** | |

---
---

# EDITION 15 — THE CHERRY

`/cherry` · Mood: *Cherry red on cream · poster declarations* · Palette `#F8F2E9 / #71182A / #26080F`

**Unique in the project:** the only **duotone photography** (grayscale +
`mix-blend-multiply` cherry at 50%), the only **hover-inverting service rows**
(an entire row flips to cherry with eleven synchronised colour transitions), the
only **all-uppercase heading system**, the only **downward clip reveal**, and the
only **three-up photographic gallery strip**.

## Direction

- **Creative direction.** A printed poster campaign. Every heading is an
  **uppercase declaration** ending in a cherry full stop. The sections are
  *the manifesto*, *three declarations*, *six moves. no wasted ones.*, *sworn
  statements*, *what you walk away with.*, *say it like you mean it.* — six
  sentences that would each work as a standalone poster.
- **Core inspiration.** Swiss poster design in a fashion register; Barbara Kruger's
  declarative typography; Saint Laurent campaign posters; a red-and-cream
  letterpress broadside.
- **Mood board.** Cream stock with a cherry bleed at the top edge. Black-and-white
  photography overprinted in red. A 3px rule sweeping under a headline. Full stops
  set in a second colour.
- **Visual identity.** `#F8F2E9` cream, `#F2E8DA` warm band, `#71182A` cherry,
  `#9E2235` bright, `#26080F` near-black. The signature is the **cherry full stop**
  — every poster heading terminates in a period set in cherry, which is the wittiest
  identity device in the project. A `1.5h` cherry bar sits at the very top of the
  page like a printed bleed.
- **Emotional feeling.** Bold, defiant, energising, a little confrontational.
  The loudest page of the fifteen by a wide margin.
- **Brand personality.** The advocate. Direct, impatient with self-effacement,
  unapologetic. "élevé exists for the moment you stop apologising for taking up
  space."
- **Luxury perception.** *Statement luxury* — the confidence of a fashion house
  campaign rather than a heritage maison. It is the only edition where luxury comes
  from **conviction** rather than from restraint, craft, atmosphere or care.
- **Target audience.** Women 30–45 in visible, competitive roles; anyone who has
  been told to tone it down; the audience most alienated by Pearl's discretion and
  most energised by directness.
- **Editorial style.** Slogans. "Subtle is lovely. *Invisible is not.*" is the
  sharpest two-line argument in the project and the single best pull-quote across
  all fifteen editions.
- **Storytelling style.** Manifesto. Declare → argue → three declarations → six
  moves → studies → sworn statements → what you walk away with → say it.
- **UX philosophy.** Impact over comfort. Big type, hard edges, high contrast, and
  the only interaction in the project that meaningfully changes what you see.
- **Motion philosophy.** **Wiping and sweeping.** `Duotone` reveals **downward**
  (`inset(0 0 100% 0) → inset(0)`) in 0.85s — the fastest photo reveal in the
  project and the only one that goes down rather than up. `Sweep` draws a 3px cherry
  rule left-to-right in 0.8s. Both are *fast*, which is the point: this page does
  not linger.
- **Interaction philosophy.** The service rows are the project's only substantive
  hover: `group-hover` drives **eleven simultaneous colour transitions** (numeral,
  title, essence, description, six include items, note, price, USD, and the CTA
  border) over 500ms as the row fills cherry. On touch devices the row simply
  doesn't invert — which is why the header copy reads `Choose — then commit` rather
  than "Hover".
- **Layout philosophy.** Poster blocks. Full-bleed cherry manifesto, full-bleed
  cherry results, full-bleed near-black enquiry — **three full-bleed colour blocks,
  more than any other edition**. Between them, wide `1280px` content.
- **Spacing philosophy.** `py-20 → lg:py-28`, `space-y-12/14`. Standard, but the
  full-bleed blocks make the rhythm feel more punctuated than the numbers suggest.
- **Photography philosophy.** Photographs are **overprinted plates**. All four are
  the black-and-white frames from the library (`bwWall`, `bwChin`, `bwStoolLean`,
  `bwStanding`) rendered `grayscale` with a `mix-blend-multiply` cherry layer at
  50%. This is the **only edition that transforms its photography rather than
  presenting it** — and it is the only one that could not use colour frames without
  breaking.
- **Typography philosophy.** The largest and loudest in the project:
  `clamp(2.6rem, 8vw, 6.2rem)` uppercase hero — **the biggest type in all fifteen
  editions**. The `PosterHeading` component fixes every H2 at
  `clamp(2rem, 5vw, 3.9rem)` uppercase, so all six section headings are the same
  size — a poster-series convention, not an oversight.
- **Component philosophy.** Three bespoke (`Duotone`, `Sweep`, `PosterHeading`).
- **Colour philosophy.** Two-colour printing. Cherry and near-black on cream, with
  a pink tint (`#F3B9C2`) and a warm mid (`#EFC7CD`) only for text on cherry
  grounds. It is the most *printerly* palette in the project.
- **Conversion philosophy.** Imperative throughout: *Make the statement* →
  *Claim it →* → *Send it*. The most action-oriented copy of the fifteen, and the
  only enquiry section whose heading is itself a command.
- **Accessibility philosophy.** Strong contrast almost everywhere (near-black on
  cream ≈ 16.4:1 — the highest in the project; cream on cherry ≈ 8.9:1). Two
  concerns: the duotone treatment reduces facial detail, and the hover-invert means
  desktop and touch users see materially different pages.

## Colour system

| Role | Value |
| --- | --- |
| Primary ground | `#F8F2E9` (CREAM) |
| Warm band | `#F2E8DA` (journey) |
| Cherry | `#71182A` — manifesto, results, hover fill, top bleed, rules |
| Bright | `#9E2235` — hovers, duotone multiply layer, enquiry full stop |
| Ink | `#26080F` — text, enquiry ground, footer |
| Body | `#66444A` (SUB) |
| On-cherry text | `#F8F2E9` body, `#EFC7CD` labels, `#F5DDE0` paragraphs, `#F3B9C2` accents |
| On-ink text | `#F8F2E9`, `#D8C3C7` body, `#E9D6D9` pills, `#EFC7CD` labels |

- **Contrast strategy.** `#26080F` on cream ≈ 16.4:1 — the highest contrast in the
  project. Cream on cherry ≈ 8.9:1. `#F3B9C2` on cherry ≈ 4.6:1 (fine at the sizes
  used). Every combination clears AA.
- **Luxury created.** Through **commitment**. There are no half-measures: the
  cherry is fully saturated, the type is at maximum scale, the blocks are
  full-bleed. Luxury here is the confidence to do one thing completely.
- **Strengths.** The most memorable page of the fifteen. Instantly identifiable
  from a thumbnail, from a screenshot, from across a room.
- **Weaknesses.** Red is the highest-risk brand colour — it reads *sale* in the
  wrong hands and *aggressive* in the wrong context. It is also the palette most
  likely to date to a specific season, and the one that most narrows the client's
  future flexibility.

## Typography

| Element | Spec |
| --- | --- |
| H1 | `display clamp(2.6rem, 8vw, 6.2rem)`, **uppercase**, `font-medium`, `leading-1.04`, 3 masked `Lines` at stagger 0.12 — **largest type in the project** |
| `PosterHeading` (all H2) | `display clamp(2rem, 5vw, 3.9rem)`, **uppercase**, `leading-1.06`, `tracking--0.01em` |
| H3 (Declaration) | `display 2rem → md:2.6rem`, **uppercase**, `leading-1.02` |
| H3 (Move) | `display 1.7rem → md:2rem`, **uppercase**, `leading-tight` |
| Service numeral | `display 3rem font-medium italic` cherry → `#F3B9C2` on hover |
| Journey numeral | `display 2.4rem font-medium italic` cherry |
| Price | `display 1.7rem font-medium leading-none` |
| Quote | `display clamp(1.5rem, 3.6vw, 2.4rem) font-medium italic leading-1.35` — **the second quote is set entirely in cherry** |
| Eyebrow | `sans 10px uppercase tracking-0.28–0.3em` |
| Essence | `sans 10px uppercase tracking-0.26em` |
| Body | `14–15px font-light leading-1.85` |
| Include item | `13px font-light` with an em-dash marker in cherry |
| Point line | `sans 10px uppercase tracking-0.2em` cherry, joined with `  —  ` |
| Result numeral | `display text-sm italic` `#F3B9C2`, zero-padded |
| Caption | `sans 9.5px uppercase tracking-0.22em` |
| Script | `text-lg/xl` cherry — `by Chandni`, `mean it, daily` (only 2 uses — the fewest in the project) |
| Button | `sans 9.5–11px uppercase tracking-0.22em`, square |

- **Hierarchy quality — deliberately flat, and correct for the concept.** All six
  section headings share one size. Hierarchy is carried by **ground colour**
  instead: cream sections are normal, cherry sections are loud, the ink section is
  final. This is a poster-series logic and it is the most conceptually confident
  typographic decision in the project.
- **Editorial treatment.** The **cherry full stop** is the identity. It appears on
  `mean it.`, `Three declarations.`, `Six moves. No wasted ones.`,
  `What you walk away with.` and `Say it like you mean it.` Setting the *second*
  testimonial entirely in cherry — rather than featuring the first, as every other
  edition does — is a small, deliberate refusal of convention.
- **Strengths.** The most distinctive typography in the fifteen, by a distance.
- **Weaknesses.** Uppercase Libre Baskerville at `2.6rem` on a 375px screen is
  three or four words per line; the hero occupies most of the first viewport on
  mobile. Uppercase also slows reading, which matters across six headings.

## Layout system

- **Container:** `1280px` (header, hero, services, gallery, footer), `1000px`
  (manifesto, journey), `980px` (words), `1100px` (results), `900px` (enquiry).
- **Top bleed:** a `1.5` unit cherry bar spanning the full width above the header —
  the only page furniture of its kind in the project.
- **Hero:** `lg:grid-cols-12`, copy 7 / duotone 5, `items-end`. Three masked
  uppercase lines, then a `320px` `Sweep` at delay 0.5, then support, then two
  square CTAs.
- **Manifesto:** full-bleed cherry, `1000px` centred, two masked lines with the
  second in `#F3B9C2` italic.
- **Declarations:** a bordered list — `border-t` on the container, `border-b` per
  row — with `md:grid-cols-[110px_1fr_190px]`. **The entire row inverts on hover.**
- **Six moves:** `#F2E8DA` band, `grid-cols-[64px_1fr]`, each move with a `120px`
  `Sweep` under its title.
- **Gallery strip:** `grid-cols-3 gap-4 md:gap-6` of three duotone `3/4` studies at
  0 / 0.14 / 0.28 delays — **the only dedicated photographic section in Part 3.**
- **Sworn statements:** `space-y-14` of large italic quotes, the second in cherry.
- **Results:** full-bleed cherry, `md:grid-cols-2`, zero-padded pink numerals.
- **Enquiry:** full-bleed `#26080F`, `900px`, cream-on-dark inputs.
- **Footer:** ink, `sm:flex-row` with the copyright left and script right.
- **Composition & balance.** Cream → cherry → cream → warm → cream → cherry → ink.
  **The most dramatic tonal sequence in the project** — the page gets progressively
  darker and louder toward the form.
- **Desktop.** Hover-invert active; 3-up gallery; 12-col hero.
- **Tablet.** Declaration rows collapse at `md` with the price row going
  `flex-row justify-between`; gallery stays 3-up (it is `grid-cols-3` at all sizes,
  which at 375px gives three ~105px frames — tight but intentional as a *strip*).
- **Mobile.** No hover inversion (the rows stay cream — a materially different
  experience); hero type at `2.6rem` uppercase; **no content hidden at any
  breakpoint.**

## Section-by-section

### Top bleed + masthead
Cherry bar, then a bar with a **filled cherry CTA**. *Luxury 8 · Editorial 9 ·
Craft 8.*

### Hero
Three uppercase masked lines with `like you` in cherry italic, a sweeping rule, two
square CTAs, and a duotone portrait.
*Luxury 8 · Editorial 10 · Craft 10 — **the most striking hero in the project**.*

### The Manifesto
Full-bleed cherry. "Subtle is lovely. *Invisible is not.*"
*Luxury 8 · Editorial 10 · Craft 9 — **the best pull-quote across all fifteen
editions**.*

### Three Declarations
Hover-inverting bordered rows.
*Luxury 8 · Editorial 9 · Craft 10 — **the single most impressive interaction in
the project**; eleven synchronised transitions with no layout shift.*

### Six moves. No wasted ones.
Warm band, big cherry numerals, per-title sweeps. *Luxury 7 · Editorial 9 · Craft
8.*

### Gallery strip
Three duotone studies. *Luxury 8 · Editorial 9 · Craft 9 — **the only edition in
Part 3 with a dedicated photography section**.*

### Sworn statements
Three large italic quotes, the middle one in cherry.
*Luxury 8 · Editorial 9 · Craft 8.*

### What you walk away with.
Full-bleed cherry, pink zero-padded numerals. *Luxury 8 · Editorial 8 · Craft 8.*

### Say it like you mean it.
Near-black room, cream-on-dark form, `Send it`.
*Luxury 8 · Editorial 9 · Craft 9 — the most decisive conversion moment in the
project.*

### Footer
Ink, justified, script `mean it, daily`. *Luxury 8 · Editorial 9 · Craft 8.*

## Component library

| Component | Behaviour |
| --- | --- |
| `Duotone` | `grayscale` image + absolutely-positioned `mix-blend-multiply` `#9E2235` at 50% on a cherry ground; reveals downward `inset(0 0 100% 0) → inset(0)` in 0.85s |
| `Sweep` | `h-[3px]` cherry bar, `scaleX 0 → 1` in 0.8s, `origin-left`; used 7× |
| `PosterHeading` | Fixed uppercase H2 at `clamp(2rem, 5vw, 3.9rem)`, `light` prop for cream text; used 5× |
| Hover-invert row | `group` + `group-hover:` on 11 child elements, all 500ms |
| Cherry full stop | A `<span>` in cherry inside the heading text; used 6× |

## Photography usage

`bwWall` (hero) · `bwChin`, `bwStoolLean`, `bwStanding` (gallery strip) =
**four images, all of them the black-and-white frames**, all duotoned, **none
hidden at any breakpoint**. Fewer images than Garden or Porcelain, but far higher
photographic *impact* because the gallery strip presents three at once and the
treatment is transformative. It also means the edition uses the four library frames
that no other edition prioritises — a useful complementarity if the final site
draws from multiple editions.

## Motion inventory

| Element | Animation | Why it works |
| --- | --- | --- |
| `Duotone` | downward clip, 0.85s | Fastest photo reveal in the project; a poster being pasted up. The **only downward reveal** anywhere. |
| `Sweep` | `scaleX 0 → 1`, 0.8s | A rule being drawn under a claim. |
| Hero `Lines` | 3 masked lines, stagger 0.12 | Each line lands as a separate statement. |
| Hover invert | 11 × 500ms colour transitions | The most substantial interaction in the project. |
| Text | `Reveal`, delays `0.04–0.68` | The hero's 0.68s delay is the longest sequence lead-in in Part 3. |

**Zero loops. Zero parallax. Zero blur. Zero shadow** — Cherry is the only edition
in the project with **no box-shadow anywhere**, which is why it reads as printed
rather than rendered.

## UX assessment

- **Navigation.** Back-link, filled cherry header CTA, and a hero secondary to
  `ch-services`. Complete — one of only three editions in Part 3 with a working
  services anchor.
- **Conversion path.** Header → hero primary → hero secondary → three `Claim it →`
  → `Send it`. Six touchpoints, all high-contrast and unambiguous.
  **The strongest conversion design in Part 3.**
- **Friction.** Low. The dark form has the highest-contrast inputs in the project.
- **Trust signals.** "Chandni replies personally — usually within a day" is the
  **only response-time commitment anywhere in the fifteen editions**, and it is a
  materially stronger trust signal than any other edition's phrasing.
- **Missing.** FAQ and booking. Nothing else.
- **Desktop/touch divergence.** The hover-invert means touch users never see the
  cherry rows. The copy was already adjusted (`Choose — then commit`), but the
  visual experience still differs substantially.

## Performance notes

- 4 images, all lazy except the hero.
- **Zero shadows, zero blurs, zero gradients** — the cleanest paint profile in the
  project alongside Pistachio.
- `mix-blend-multiply` on four elements is the only compositing cost.
- 11 simultaneous colour transitions per hovered row — colour transitions are
  cheap; no layout is affected.
- **Very fast.**

## Art direction critique

- **What is genuinely original.** The duotone treatment; the cherry full stop; the
  hover-inverting rows; the downward clip; the uniform `PosterHeading` scale;
  colouring the *second* testimonial instead of the first; the top bleed bar;
  zero shadows.
- **What is derivative.** Nothing. Cherry and Pistachio are the two least
  derivative pages in the project.
- **What would elevate it.** (1) Give touch users an equivalent to the hover
  inversion — inverting the *first* row permanently, or alternating cream/cherry
  rows on touch, would preserve the drama. (2) The gallery strip at `grid-cols-3`
  on a 375px screen gives 105px frames; a horizontal scroll strip would serve them
  better. (3) One quieter moment — the page is at maximum volume for its entire
  length, and a single restrained section would make the loud ones louder.
  (4) Consider a duotone in near-black rather than cherry for the gallery, so the
  hero portrait stays the only red-washed image.

## Scores

| Criterion | Score | Justification |
| --- | ---: | --- |
| Luxury feel | 8.0 | Campaign confidence rather than heritage; red caps the ceiling. |
| Elegance | 7.0 | Deliberately not elegant. Scored honestly, not punitively. |
| Uniqueness | 10.0 | Tied with Pistachio for **most original edition in the project**. |
| Photography | 8.5 | Four images, transformed, none hidden, plus a dedicated strip. |
| Typography | 10.0 | **Best typography in the project** — largest, boldest, and the cherry full stop. |
| Colour | 8.5 | Highest-contrast, most memorable, highest-risk. |
| Layout | 9.0 | Three full-bleed blocks and the most dramatic tonal sequence in the project. |
| Motion | 9.0 | Fast, downward, sweeping — perfectly matched to the register. |
| Whitespace | 7.5 | Least generous in Part 3; the type fills the space instead. |
| Detail | 9.5 | Cherry full stops, 11-element hover sync, second-quote colouring, zero shadows. |
| Consistency | 9.5 | Every heading is a declaration; every declaration ends in cherry. |
| Emotion | 9.0 | Genuinely energising. The only edition that makes you sit up. |
| Conversion | 9.5 | **Best in Part 3** — six touchpoints, imperative copy, and the only response-time promise in the fifteen. |
| Accessibility | 8.5 | Highest contrast in the project; duotone detail loss and hover divergence cost it. |
| Performance | 9.5 | Zero shadows, zero blurs, zero gradients. |
| Responsiveness | 8.5 | No hidden content; the hover divergence and 105px gallery frames are the gaps. |
| **Overall** | **8.8** | |

---
---

# PART 3 — CROSS-EDITION SYNTHESIS

## Overall standings

| # | Edition | Metaphor | Best at | Overall |
| --- | --- | --- | --- | ---: |
| 14 | **Pearl** | jewellery folio | luxury, elegance, whitespace | **8.8** |
| 15 | **Cherry** | printed poster | typography, uniqueness, conversion | **8.8** |
| 12 | **Riviera** | postcard | craft, layout, charm | **8.7** |
| 13 | **Mocha** | café carte | consistency, responsiveness, wit | **8.6** |
| 11 | **Citrine** | sunrise | accessibility, warmth | **7.9** |

## Full fifteen-edition standings

| Rank | Edition | Overall | Part |
| ---: | --- | ---: | --- |
| 1 | 01 Editorial | 9.1 | 1 |
| 2 | 03 Atelier | 9.0 | 1 |
| 3= | 10 Porcelain | 8.8 | 2 |
| 3= | 14 Pearl | 8.8 | 3 |
| 3= | 15 Cherry | 8.8 | 3 |
| 6= | 02 Gallery | 8.7 | 1 |
| 6= | 04 Journal | 8.7 | 1 |
| 6= | 12 Riviera | 8.7 | 3 |
| 9= | 06 Garden | 8.6 | 2 |
| 9= | 13 Mocha | 8.6 | 3 |
| 11= | 08 Lavender | 8.3 | 2 |
| 11= | 09 Pistachio | 8.3 | 2 |
| 13= | 05 Boutique | 8.2 | 1 |
| 13= | 07 Blush | 8.2 | 2 |
| 15 | 11 Citrine | 7.9 | 3 |

## Category winners within Part 3

- **Best hero:** Riviera (postcard front) for concept; Pearl for luxury; Cherry for
  impact.
- **Best philosophy:** Mocha's tasting-notes triptych for originality; Pearl's pearl
  analogy for writing; Cherry's manifesto for force.
- **Best services layout:** Pearl's gold-ruled ledger for luxury; Cherry's
  hover-invert rows for interaction; Riviera's stamped prices for delight.
- **Best journey:** Mocha's extraction bars (the only informational one); Citrine's
  staircase for originality; Riviera's stamped itinerary for charm.
- **Best testimonials:** Cherry (the cherry-set second quote); Citrine (directional
  bubbles); Riviera (script kisses).
- **Best conversion moment:** Cherry's near-black room with the response-time
  promise.
- **Best footer:** Cherry's justified ink bar.
- **Best single component:** Mocha's receipt — the best component in the entire
  project.
- **Best photographic treatment:** Cherry's duotone.
- **Best micro-animation:** Riviera's postmark stamp.

## Structural census (Part 3)

| Attribute | Citrine | Riviera | Mocha | Pearl | Cherry |
| --- | --- | --- | --- | --- | --- |
| Images used | **2** | 8 (2 mobile) | **2** | 2 (1 full-bleed) | 4 |
| Images hidden at a breakpoint | 0 | **6** | **0** | **0** | **0** |
| Border radius | **maximal** (2.5rem) | none | none | none | **none** |
| Box-shadows | 12+ | 12+ | 1 | **0** | **0** |
| Bespoke components | 2 | 3 | 3 | 3 | 3 |
| Full-bleed colour blocks | 0 | 1 | 1 (panel) | 1 | **3** |
| Journey format | staircase | dashed spine + stamps | **progress bars** | connected medallions | numbered moves |
| Services format | 3 rounded cards | 3 tilted postcards | dark carte | gold ledger rows | **hover-invert rows** |
| Uppercase headings | no | no | no | no | **yes** |
| Numbering | Arabic | Arabic + "Day" | Arabic + % | **Roman N° I–VI** | Arabic + zero-pad |
| System glyph | badge pill | `✦` + dashed | `Steam` + dashed | gold hairline | cherry full stop |
| Script uses | 4 | **6 (incl. hero H1)** | 2 | 2 | **2** |
| Animated property | y/rotate/scale | x/rotate/scale | **scaleX (data)** | scaleX/scaleY | clipPath/scaleX |
| Hero type | 4.4rem serif | **5.5rem script** | 4.6rem serif | **3.8rem serif** | **6.2rem uppercase** |

## Findings that affect the final build

1. **Photography is the project's systemic weakness, and Part 3 makes it worse.**
   Citrine (2), Mocha (2) and Pearl (2) are the three lowest counts in the fifteen.
   Across all fifteen editions the average is roughly six images from a library of
   twenty-two. **Recommendation: the final site should use 12–16 photographs with
   at least one full-bleed moment per third of the page.**

2. **Breakpoint-hidden imagery is now confirmed in five editions** (Lavender,
   Porcelain, Riviera, plus Blush's and Pistachio's journeys which have no imagery
   at all). Mocha, Pearl, Cherry and Citrine hide nothing — that should be the
   standard.

3. **The three most transplantable components in the project are all in Part 3
   or Part 2:** Mocha's **receipt**, Riviera's **two-panel postcard back**, and
   Pistachio's **services table**. None of them depend on their palette.

4. **Cherry holds the only response-time commitment in the fifteen** ("usually
   within a day"). This should be added to whichever edition wins — it is the
   cheapest trust upgrade available.

5. **Conversion CTA sizing varies enormously and inversely with price positioning.**
   Pearl — aimed at the highest-value buyer — has the smallest CTAs in the project
   (9.5px underlines). Cherry has the largest. The final site should take Pearl's
   *tone* and Cherry's *target sizes*.

6. **Uppercase display type appears in only two editions** (Pistachio, Cherry) and
   both score 10/10 for uniqueness. It is the single most under-used typographic
   lever in the project.

7. **The two content gaps hold across all fifteen editions: there is no FAQ
   anywhere, and no booking mechanism anywhere.** Every edition converts through a
   `mailto:` only. This is now the project's largest functional gap and should be
   closed in the final build regardless of which design wins.

8. **Emotional range is the clearest axis of choice for the client.** Blush 9.5,
   Cherry 9.0, Riviera 9.0, Garden 9.0 at one end; Pistachio 5.5, Pearl 6.5 at the
   other. Luxury and emotion are close to **inversely correlated** across the
   fifteen — Pearl scores 10.0 luxury / 6.5 emotion; Blush scores 7.5 / 9.5. The
   final site's central design decision is where on that trade-off Chandni wants to
   sit.

---

*Next: Part 4 — the full cross-edition comparison matrix and best-in-category
analysis across all fifteen editions.*
