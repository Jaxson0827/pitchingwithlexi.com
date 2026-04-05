# Pitching With Lexi — UX & Visual Specification

**Document purpose:** This is the single source of truth for how the one-page site should *look*, *feel*, and *behave* on scroll. It is written for design and engineering so the shipped page reads as **luxury, intentional, and calm**—not “sports template,” not “busy coach flyer.”

**Product shape:** One URL, vertical narrative, anchor navigation. Conversion = **book a lesson** (in-person or online).

---

## 1. Design thesis: “expensive” in concrete terms

**Luxury here is restraint.** The page should feel like a boutique studio or a high-end trainer’s personal brand: lots of breathing room, a narrow color story, photography that carries emotion, type that whispers confidence. Nothing competes with the **Book** moment.

**Anti-patterns to avoid**

- Neon gradients, heavy drop shadows, “athletic” clip-art, starburst sale badges, crowded icon rows, more than one display font, autoplay loud video with sound, comic sans energy in CTAs, rainbow accent colors.

**North-star references (mood, not copy)**

- Editorial fashion / architecture sites: full-bleed imagery, minimal chrome, strong grid.
- Premium fitness/wellness brands: calm palette, human photography, soft motion.

---

## 2. Global layout system

### 2.1 Canvas and grid

- **Content max width:** `1200px` for text-heavy sections; **hero and some imagery may break full-bleed** to the viewport edges.
- **Horizontal padding:** `24px` mobile, `40px` tablet, `64px` desktop (adjust slightly if viewport is very wide—never let text lines exceed ~68 characters in body copy).
- **Vertical rhythm:** Base unit **`8px`**. Section padding: **`96px` top/bottom** desktop; **`72px`** tablet; **`56px`** mobile. Between major blocks inside a section: **`48px`** desktop / **`32px`** mobile.

### 2.2 Breakpoints (implementation targets)

- **Mobile:** `< 640px`
- **Tablet:** `640px – 1024px`
- **Desktop:** `> 1024px`

### 2.3 Background strategy

- **Default section background:** warm paper `#F6F4EF` (see palette).
- **Contrast sections** (e.g. credibility strip, pre-footer CTA band, optional FAQ panel): deep surface `#14120F` with inverted type—used **sparingly** so it feels like a designed “chapter break,” not a dark mode.

---

## 3. Color system (exact tokens)

| Token | Hex | Usage |
|--------|-----|--------|
| `--bg` | `#F6F4EF` | Primary page background (warm off-white). |
| `--bg-elevated` | `#FFFFFF` | Cards, scheduler panel, subtle lift. |
| `--ink` | `#14120F` | Primary text, dark section backgrounds. |
| `--ink-muted` | `#5C5852` | Secondary body, captions. |
| `--ink-faint` | `#8A857C` | Tertiary labels, dividers with low emphasis. |
| `--line` | `#E3DED4` | Hairline borders, card outlines (1px). |
| `--accent` | `#C45C3E` | Primary CTA fills, key links on hover underline animation, small highlights. *Burnt terracotta reads warm and premium—not default “sports red.”* |
| `--accent-hover` | `#A64E35` | CTA hover state. |
| `--accent-subtle` | `rgba(196, 92, 62, 0.12)` | Soft tint behind badges or selected tab. |

**Rules**

- **Accent covers < 5%** of the viewport at any time except inside the primary button cluster—never flood large areas with accent.
- **Links in body:** default `ink-muted` or `ink` with **underline on hover only** (animated width or opacity), except in dark sections where link color shifts to a **desaturated cream** `#E8E2D6`.

---

## 4. Typography

### 4.1 Font roles (recommended pairings)

**Display (headlines):** *Fraunces* (soft editorial serif with slight personality) **or** *Instrument Serif* for even more fashion-editorial. Use for H1, H2, and one-line section titles.

**UI & body:** *DM Sans* or *Söhne / Inter* class—high legibility, neutral, slightly geometric. Use for navigation, buttons, FAQ, body, captions.

**Optional accent (single use only):** a **very restrained** italic moment in the hero subline only—same family as body, italic, not a third font.

### 4.2 Scale (desktop → mobile)

| Element | Desktop | Mobile | Weight | Letter-spacing |
|---------|---------|--------|--------|------------------|
| H1 (hero) | `clamp(2.75rem, 5vw, 4.25rem)` | same clamp | 500–600 | `-0.02em` |
| H2 (section) | `clamp(2rem, 3.5vw, 3rem)` | same | 500 | `-0.02em` |
| H3 (cards) | `1.25rem` | `1.125rem` | 600 | `-0.01em` |
| Body | `1.0625rem` (17px) | `1rem` | 400 | `0` |
| Small / legal | `0.8125rem` | same | 400 | `0.02em` (caps labels only) |
| Nav | `0.8125rem` | `0.8125rem` | 500 | `0.08em` **uppercase** |

**Line height:** Headlines `1.05–1.15`. Body `1.6–1.7`.

**Paragraph width:** Cap at `36rem` for reading comfort in About / FAQ.

---

## 5. Header & anchor navigation

### 5.1 Initial state (top of page)

- **Height:** `72px` desktop, `64px` mobile.
- **Background:** **transparent** over hero; logo wordmark + nav sit on hero image with **subtle scrim** behind header row only if contrast fails (optional: `linear-gradient` top fade `rgba(20,18,15,0.35)` height ~120px behind nav only).

**Left:** Wordmark **“Pitching with Lexi”** in body font, `500`, `ink` or `#FFFFFF` depending on hero image contrast (implementation: detect light vs dark hero region or default white on hero).

**Right (desktop):** Anchor links: `ABOUT` · `SERVICES` · `BOOK` · `FAQ` · `CONTACT` — spaced `32px` apart, uppercase small nav style.

**Right (mobile):** **Hamburger** icon (two-line minimal, not chunky), opens **full-screen overlay menu** with large tap targets, same links, bottom-aligned primary button **Book a lesson**.

### 5.2 Sticky / scrolled state

- On scroll past **~90px**:
  - Header becomes **solid** `--bg-elevated` with **1px** `--line` bottom border, **slight shadow** `0 8px 30px rgba(20,18,15,0.06)`.
  - Logo and nav flip to `--ink` / `--ink-muted`.
  - **Optional:** compress height to `64px`.
- **Active section:** Current anchor in view highlights with **accent underline** (2px, 4px below text) or **ink** bold—subtle, not neon.

### 5.3 Micro-interaction

- Nav hover: color shift `ink-muted` → `ink`, **100ms** ease.
- Keyboard focus: **2px** outline `accent` with **2px** offset—always visible.

---

## 6. Section-by-section UX (exact look & behavior)

### 6.1 Hero

**Layout (desktop)**

- **Full viewport height** `min-height: 100svh` (fallback `100vh`).
- **Split:** **58%** imagery / **42%** content **or** full-bleed image with **left-aligned text column** in safe area (choose one consistent system; recommended: **image right**, text left for editorial balance).

**Imagery**

- Single **large** photograph: Lexi coaching, side profile toward athlete, or hands on ball at release—**shallow depth of field**, natural light, **no** cluttered dugout background.
- **Treatment:** Slight **warmth** (+5 on temperature in grade), **5–8%** vignette on edges only, **no** heavy filters.

**Text block (left)**

- **Eyebrow** (optional): `0.75rem` uppercase, `ink-faint`, letter-spacing `0.12em` — e.g. `PRIVATE SOFTBALL PITCHING`
- **H1:** One line if possible; if two lines, break for sense:  
  *“Train with intention.”* / *“Pitch with confidence.”* (final copy TBD—structure matters more here.)
- **Subline:** One sentence, `ink-muted`, max width `22rem`, `1.6` line height.
- **CTA row:**
  - **Primary button:** `Book a lesson` — filled `--accent`, text `#FFFFFF`, height `52px`, padding `0 28px`, radius **`6px`** (not pill—slightly architectural).
  - **Secondary:** `View services` — ghost: `1px` `--line` border, `--bg-elevated` fill at 80% opacity over image if needed, text `--ink`.

**Scroll affordance**

- Thin **vertical line** or **chevron** centered bottom, `opacity 0.5`, **gentle bounce** animation 2.5s loop, `prefers-reduced-motion: reduce` → static.

**Mobile**

- Stack: image **first** (60% viewport height crop) then text block on `--bg` **overlapping** image with **16px** top radius curve (card feel) **or** image full-bleed with text in lower third over gradient scrim—pick one; recommended **overlap card** for premium mobile apps feel.

---

### 6.2 Credibility strip

**Purpose:** Fast trust without a wall of logos.

**Layout**

- **Full width**, **dark band** `--ink` background, **py 28px** mobile / **py 36px** desktop.
- **Content:** Single horizontal row (desktop) of **3–4 metrics** separated by **1px** `rgba(255,255,255,0.15)` vertical dividers **or** dot separators.

**Metric pattern**

- **Number** in display font, `2rem`, color `#E8E2D6`.
- **Label** below in uppercase small nav style, `ink-faint` mapped to `rgba(232,226,214,0.55)`.

**Example placeholders** (replace with real): `10+ years` / `1:1 sessions` / `In-person & online` / `Mechanics-first`

**Motion:** On scroll into view, **fade up 12px** + opacity 0→1, **stagger 80ms** per item. Reduced motion: no stagger, simple fade.

---

### 6.3 About Lexi

**Layout (desktop)**

- **Two columns:** **50 / 50**, vertical align center.
- **Left:** Portrait or coaching moment—**rounded none** or **`4px`** radius only (keep sharp/luxury). Image **does not** have heavy shadow; optional **1px** `--line` frame inset 12px (double-frame effect).

**Right**

- **H2:** “About Lexi” or more editorial: “The coach in your corner.”
- **2–3 short paragraphs** body copy; **pull quote** optional: one line in display italic, `1.5rem`, left border **3px** `--accent`, padding-left `24px`.

**Mobile:** Image full width, then text with standard section padding.

---

### 6.4 Services (in-person vs online)

**Purpose:** Clear fork without looking like a pricing table from 2010.

**Layout**

- **H2** + one-line intro centered, max-width `40rem`, margin-bottom `56px`.
- **Two cards** side by side desktop, stacked mobile.

**Card spec**

- Background `--bg-elevated`, **1px** `--line`, radius **`8px`**, padding **`40px`** desktop / **`28px`** mobile.
- **Top:** Small label uppercase `PRIVATE · IN PERSON` vs `PRIVATE · ONLINE` in `ink-faint`.
- **H3:** `In-person lesson` / `Online lesson`
- **Bullets:** 3–4 items, custom bullet = **short horizontal dash** `accent` width `12px`, vertically centered with first line.
- **Meta row:** Duration `1 hour` with **icon-free** tiny label treatment (text only).
- **Footer of card:** Text button **Choose times** (accent on hover) **or** secondary solid outline button—both scroll to `#book` with **hash + optional query** `?type=inperson` for future analytics.

**Hover (desktop)**

- Card lifts **`translateY(-4px)`**, shadow `0 20px 50px rgba(20,18,15,0.08)`, **200ms** `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Border color shifts subtly to `rgba(196,92,62,0.35)`.

---

### 6.5 Book (conversion zone)

**Purpose:** Calm “room” where the scheduler lives—visitors should feel **safe and focused**.

**Layout**

- Section background **`--bg`** with **inner container** `--bg-elevated`, **max-width `880px`**, centered, padding **`48px`** desktop / **`24px`** mobile, **1px** `--line`, radius **`12px`**, shadow **very soft** `0 30px 80px rgba(20,18,15,0.06)`.

**Header inside panel**

- **H2:** “Book a session”
- **Subcopy:** One reassuring sentence (e.g. pick a time, you’ll receive confirmation).
- **Segmented control (optional but recommended):** Two tabs `In person` | `Online` — selected state: **pill** background `--accent-subtle`, text `--ink`, **2px** bottom indicator **or** full pill; unselected: `ink-muted`. Switching tabs **swaps embed URL** or iframe with **150ms** crossfade.

**Scheduler embed**

- Minimum height placeholder **`640px`** while loading; centered **skeleton**: three pulsing bars `rgba(227,222,212,0.6)` **not** flashy spinner.
- Embed iframe **radius `8px`**, **no double scrollbar**: container `overflow: hidden` with internal scroll if provider requires.

**Trust microcopy below embed**

- Single line: `Secure booking · Calendar invite included` in `small` `ink-faint`.

---

### 6.6 Location & online details

**Layout**

- **Two-column** desktop: **Map or static map image** (styled grayscale **light** + accent pin) **or** embedded map; adjacent column with **H3** blocks: `Where we meet`, `What to bring`, `Parents`.
- **Online column** equivalent: `How Zoom works`, `Space & equipment`, `Filming tips`—same visual components.

**Mobile:** Accordion per block if length is high; default first block open.

---

### 6.7 Testimonials

**Layout**

- **Horizontal scroll** on mobile (snap, **no** scrollbar chrome—use gradient fade edges) **or** **single featured quote** desktop with **small avatar circle** optional.

**Card**

- Quote in display font `1.5rem`, line height `1.4`, `ink`.
- Attribution: name `600`, role/team `ink-muted` `small`.

**Do not** use star ratings unless they are real Google reviews linked—otherwise it cheapens.

---

### 6.8 FAQ

**Layout**

- **H2** left; optional right column **sticky** empty on desktop—keep FAQ **single column** max-width `720px`.

**Accordion item**

- Question row: **padding `20px 0`**, border-bottom `1px` `--line`, **+** icon right (morphs to **−**), `ink` question `500`.
- Answer: **padding `0 0 24px`**, `ink-muted`, **slide down** height animation max **300ms** ease; reduced motion: instant expand.

---

### 6.9 Contact & footer

**Layout**

- **Narrow** closing section: centered text, **H2** small `Contact` or “Still have questions?”
- **Email** as text link with **mailto**; **Instagram** icon **single line** stroke `1.5px`, **24px** size, circle outline—no multicolor social blobs.

**Footer bar**

- `ink` on `--bg` or inverse on dark—pick one system. **Copyright**, **privacy** link (stub ok), **terms** stub. **12–14px** muted.

---

## 7. Buttons & interactive elements

**Primary**

- Fill `--accent`, text white, **no** uppercase (sentence case feels more premium).
- Hover: background `--accent-hover`, **translateY(-1px)** subtle.
- Active: **translateY(0)**, darken one step.
- Focus: **outline** as per global.

**Secondary**

- Transparent, `1px` `--ink` or `--line` depending on background, text `--ink`.

**Destructive / N/A** for v1.

**Hit area:** Minimum **`44×44px`** touch target even if visual button is smaller (extend padding).

---

## 8. Imagery & iconography

- **Icons:** Prefer **none**; if needed, use **thin stroke** Lucide-style at **1.5px**, **20px**, `ink-muted`.
- **Photography direction:** Candid, **eyes and hands** in frame, **no** posed arms-crossed stock coach. **Diversity** in athletes if showing clients. **Wardrobe:** clean, neutral—avoid loud team graphics in hero.

---

## 9. Motion & performance

- **Global easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` for “luxury” deceleration.
- **Section entrance:** `opacity` + `translateY(16px)` max, **500ms**, **intersection observer** once.
- **Parallax:** If used, **max 8px** movement on hero image—subtle.
- **prefers-reduced-motion:** Disable parallax, stagger, and bounce; keep opacity fades **≤200ms** or none.

**Performance**

- Hero image: **priority** load, **WebP/AVIF**, dimensions explicit, **LCP** target **< 2.5s** on mid mobile.
- Below-fold images: lazy.

---

## 10. Voice & microcopy (UX tone)

- **Calm, confident, short sentences.** Avoid exclamation overload.
- **Booking:** “Choose a time that works for you” beats “Book now!!!”
- **Services:** Lead with **outcomes** (mechanics, speed safely, confidence) not jargon stacks.

---

## 11. Accessibility checklist

- Contrast: Body text on `--bg` meets **WCAG AA**; verify `--ink-muted` on `--bg` (if borderline, darken to `#4A4640`).
- **Skip link** to `#book` or `#main`.
- **Landmarks:** `header`, `main`, `footer`, `nav` with `aria-label` where duplicated.
- **Accordion:** `button` elements, `aria-expanded`, keyboard **Enter/Space**.
- **Reduced motion** respected everywhere.

---

## 12. Empty, error, and edge states

- **Scheduler failed to load:** Inside panel, **calm message** + **mailto** fallback + “Refresh” text button—not red alarm text; use `ink-muted` and small accent link.
- **Very small height embed:** Allow internal scroll; **min-height** preserved so layout never jumps.

---

## 13. Future shop (visual continuity only)

When `/shop` exists: **same header/footer**, same **type scale** and **button styles**. Product cards use **same card spec** as Services (radius, border, hover lift). **No** new accent color—use photography and layout to differentiate.

---

**End of specification.** Implementations should match this document unless an explicit change is recorded in the project plan.
