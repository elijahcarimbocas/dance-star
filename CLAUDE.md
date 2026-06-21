# Dance Star — Project Handoff & Context

> This file is context for continuing work in the Claude CLI. It captures the brand,
> the design decisions, what's real vs. placeholder, and the next steps. Read it first.

## What this is

A redesigned marketing site for **Dance Star** (the brand behind `mydancestar.online`),
a Phoenix, AZ Latin dance academy — Bachata, Salsa & Latin Fusion. It replaces a generic
AI-built site and an ugly WellnessLiving-powered one. The bar was the owner's other site,
`moosevape.ca` — a hand-crafted, single-file premium static site — so this is built to the
same craft level, with a **red palette** (Phoenix Bachata's brand color) and the academy's
real, warm, community-driven voice.

## Tech / how it's built

- **Single self-contained `index.html`.** All CSS and JS are inline. No build step is
  required to view it — open it in a browser. Visuals are **photo-free** (pure CSS:
  animated mesh hero, rotating "stage" star, marquees, reveal-on-scroll, split-text
  headings, count-up stats) so it looks finished without any image/video assets.
- **Live countdown** to the next Friday "Bachata & Salsa Night Deluxe" (Phoenix time, MST).
- **Keyless Google Maps embeds** (iframe `?output=embed`) for both venues — no API key.
- Smooth scroll via **Lenis** (CDN, progressive enhancement).
- The page relies on CSS Grid, `clamp()`, and JS-driven reveal (`opacity:0` until in view),
  so it can only be rendered by a real browser — static/headless renderers will look broken.

> A Vite/React/shadcn `src/` tree existed in the original template but was **vestigial**
> (not part of the deployed static build). This standalone bundle drops it entirely.

## Deploy → the live URL

Push these files to a **public** repo named `dance-star` under the `elijahcarimbocas`
account, on `main`. The included workflow (`.github/workflows/pages.yml`) auto-enables
GitHub Pages and publishes to:

**https://elijahcarimbocas.github.io/dance-star/**

No settings toggle needed (`actions/configure-pages` with `enablement: true`). Pages is
free for public repos; private repos need a paid plan. All asset paths are absolute or
hash links, so it works correctly at the `/dance-star/` sub-path.

```sh
# from this unzipped folder
git init -b main
git add -A
git commit -m "Dance Star site"
git remote add origin https://github.com/elijahcarimbocas/dance-star.git
git push -u origin main
# create the empty public repo "dance-star" on GitHub first (gh repo create elijahcarimbocas/dance-star --public)
```

## Brand voice (from the academy's real emails)

Warm, energetic, welcoming, beginner-obsessed, emoji-friendly. Recurring signatures:

- **"Dress to impress. Dance to connect."**
- **"See you on the dance floor."**
- "More classes. More training. More opportunities to grow." / "our growing dance community"
- Tone: celebrate passion, rhythm, connection; always reassure beginners they're welcome.

## Real facts baked into the site (verify before launch)

- **Brand:** Dance Star / Phoenix Bachata Academy (a.k.a. Phoenix Bachata Dance).
- **Instructors:** Carlitos & CeCe (founders/leads); Brandon & Skye (bachata); a Ladies Team.
- **Venues:**
  - *Dance Star Studio* — 3302 N 3rd St, Phoenix, AZ 85012 (classes & workshops).
  - *Provision* — 711 E Missouri Ave Ste 115, Phoenix, AZ 85014 (Friday socials; 21+ late).
- **Weekly schedule (real):**
  - Wed 7:30 PM — Latin Fusion Community Night (complimentary salsa pre-social class,
    social + practice, potluck friendly) — the Studio.
  - Wed (eve) — Intermediate Salsa On-1 Partnering — the Studio.
  - Fri 9:00 PM–1:30 AM — Bachata & Salsa Night Deluxe (9 PM class, then social) —
    Provision. $20 online cover.
  - Sat 2:30 PM — Partnerwork workshop (e.g. Contrabalances & Rides) — the Studio.
- **Socials:** Instagram `@phoenixbachatadance`; Facebook `facebook.com/share/1CmHHrG554`.
- **Booking:** CTAs currently point to `mydancestar.online`.

## Placeholder / needs confirmation (TODO)

1. **Pricing** is inferred: First class free, $20 drop-in, $20 social cover, "Weekly
   Training Plan = unlimited (ask us)". Confirm real numbers (Venmo records showed
   $20/$25/$30 per class) and update the Pricing section.
2. **Testimonials** are illustrative placeholders (first-name only). Swap in real ones.
3. **Booking links** — confirm whether to route to mydancestar.online, Eventbrite,
   WellnessLiving, or an Instagram DM/contact form.
4. **Photos/video** — design is intentionally photo-free; drop in real class/social media
   if desired (hero, classes, instructors).
5. **Phone/email** — none was available; add a real contact method.
6. **Domain** — meta/canonical use `mydancestar.online`; update if the domain changes.

## Design system

- **Palette:** `--ink:#140609` / `--ink2:#0C0407` (near-black wine bg), `--wine:#26090F`,
  `--card:#1E070C`, **`--red:#E12330`** (primary), `--red-deep:#A30E1B`, `--gold:#E6B24C`
  (accent), `--cream:#F7ECE6` (text), `--smoke:#CDA9AE` (muted).
- **Type:** Playfair Display (headings, with italic `<em>` red emphasis), Sora (UI/eyebrows/
  buttons), Inter (body), Dancing Script (brand-flourish accent on "Star" / "dance floor").
- **Sections (in order):** Nav · Hero · marquee · Why · Classes · Schedule (+ featured
  event countdown) · marquee · Instructors · Pricing · Quotes · Locations (maps + stats) ·
  CTA band · Footer.

## Ideas / possible next steps

- Real booking/checkout flow (the academy uses WellnessLiving + Eventbrite + Zip today).
- A simple events/socials calendar pulled from a data file.
- Open Graph image (currently text-only meta).
- Gallery section once photos exist.
