# SuttonVS.com — Claude Code Build Spec
## Sutton Venture Studio · Full Project Brief
**Version 1.0 · Q1 2026 · Built in Antigravity with Multi-Agent Architecture**

---

## PROJECT OVERVIEW

**Domain:** suttonvs.com  
**Entity:** Sutton Ventures LLC  
**Purpose:** Studio identity site — legitimacy signal for partners/applications, deal flow magnet for consulting leads and co-founder opportunities  
**Build Environment:** Claude Code in Antigravity, two-agent parallel architecture  
**Stack:** HTML/CSS/JS (static, no framework) + Supabase for lead capture  
**Deploy Target:** Vercel  

---

## DESIGN SYSTEM

Inherit directly from the Revanta Rate Card. Do not deviate from these tokens.

```css
:root {
  --black: #0a0a0a;
  --off-white: #f5f2ee;
  --warm-white: #faf8f5;
  --gold: #c8a96e;
  --gold-light: #e8d5a8;
  --gold-dark: #9a7c45;
  --muted: #6b6560;
  --border: #e2ddd8;
  --border-dark: #2a2825;

  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 48px;
  --space-xl: 80px;
  --space-2xl: 120px;

  --max-width: 1100px;
  --nav-height: 64px;
}
```

**Typography:**  
- `DM Serif Display` — headings, hero, section titles (Google Fonts)  
- `DM Sans` — body, nav, labels, meta  
- Load both from Google Fonts, same link tag as rate card

**Design Direction:** Swiss/Editorial — commanding authority without startup-template energy. Asymmetric layouts, generous whitespace, gold as the single accent. No gradients, no blobs, no glassmorphism.

**Signature Design Moment:** The venture portfolio grid — each card has a left-border status indicator in gold (live), muted (building), or faint (on deck), with the venture name in DM Serif Display italic on hover.

---

## SITE ARCHITECTURE

```
suttonvs.com/           → Home
suttonvs.com/ventures   → Full Portfolio
suttonvs.com/consulting → Revanta Consulting (links to revanta.agency)
suttonvs.com/about      → Founder + Studio Model
suttonvs.com/contact    → Qualified Intake Form
```

**Navigation:** Sticky, transparent on load → black background + gold logo mark on scroll. Desktop: horizontal links right-aligned. Mobile: full-screen overlay.

---

## PAGE-BY-PAGE CONTENT SPEC

---

### HOME (index.html)

**Above fold — Hero:**
```
EYEBROW (gold, tracked uppercase, 11px):
  Houston, TX · Patent-First · AI-Native

HEADLINE (DM Serif Display, 72px desktop / 40px mobile):
  Building ventures
  worth building.

SUBHEAD (DM Sans 300, 18px, muted, max-width 520px):
  Sutton Venture Studio designs, architects, and ships
  AI-first platforms — wholly-owned products, co-founded
  ventures, and consulting engagements that fund the vision.

PRIMARY CTA: "View Our Ventures" → /ventures
SECONDARY CTA: "Work With Us" → /consulting
```

**Section 2 — Studio Model (3-column, asymmetric):**
```
EYEBROW: How We Build

Three columns, each with a gold numeral:

01  Wholly-Owned Products
    We design and build platforms under the studio —
    from first commit to market. Full equity. Full control.

02  Co-Founded Ventures
    We partner with operators who bring domain depth.
    We bring architecture, design, and AI execution.

03  Consulting Practice
    Revanta Consulting funds the studio while products
    mature. Agency-quality delivery at 40–70% below
    traditional market rates.
```

**Section 3 — Portfolio Snapshot (featured 3, link to full):**
Show only: Music Ops Pro, Conference Buddy, Info2Vote  
Status badges visible. CTA: "See all ventures →" → /ventures

**Section 4 — Consulting Pull-Quote:**
```
Dark background section (--black), gold left border:

"Traditional agencies charge $120K–$200K for the same builds
on 6–9 month timelines. We deliver production-quality systems
in 8–16 weeks at 40–70% of agency cost."

CTA: "See Engagement Tiers" → /consulting
```

**Section 5 — Location/Identity Bar:**
```
Horizontal meta strip (bordered top/bottom):
Houston, TX  ·  Est. 2024  ·  Sutton Ventures LLC  ·  suttonvs.com
```

---

### VENTURES (/ventures)

**Hero:**
```
EYEBROW: Portfolio
HEADLINE: The Studio's
          Active Ventures.
SUBHEAD: Eight platforms across music, civic tech, finance,
         cultural heritage, and custom apparel — each built
         patent-first, AI-native, and designed to lead.
```

**Portfolio Grid — All 8 Ventures:**

Use a 2-column grid (desktop) / 1-column (mobile). Each card:
- Gold left-border (color varies by status — see below)
- Venture name (DM Serif Display, 22px)
- One-line descriptor
- Status badge (pill, right-aligned)
- Domain/URL if live
- Brief (2 sentence) description

```
STATUS BADGE SYSTEM:
  "Live — Beta"      → gold border + gold badge
  "In Testing"       → gold border + gold badge  
  "Nearly Complete"  → gold-dark border + muted badge
  "Under Construction" → muted border + muted badge
  "On Deck"          → border-dark + faint badge
  "Active"           → gold border + gold badge
  "Partnership"      → gold border + gold badge
```

**Venture Data:**

| Venture | Domain | Status | Descriptor |
|---|---|---|---|
| Music Ops Pro | musicops.pro | In Testing — V.1 | AI-powered operations platform for music industry professionals. The first release within The Pulse Ecosystem. |
| Conference Buddy | — | Nearly Complete | Smart conference companion that helps attendees navigate events, sessions, and networking. |
| The Pulse Ecosystem | — | On Deck | Multi-product music industry ecosystem connecting fans, artists, and industry professionals. |
| Info2Vote | — | Under Construction | Dual-platform civic engagement system — AI voter information and modern campaign management tools. |
| Apparel Flow | — | Active | AI-native operations platform for the $44B custom apparel and screen printing industry. Co-founded with Brandon Watson. |
| Capital Playbook | — | Building | AI-powered financial education platform for Gen Z, with specialized NIL athlete tools. |
| ValidData.io | validdata.io | Partnership | AI-powered due diligence platform. Strategic partnership with Paul O'Brien (MediaTech Ventures CEO). |
| My Heritage Art Gallery | — | Active | Cultural heritage art platform digitizing 40+ years of expertise across multi-heritage markets. |

**Below grid:**
```
SECTION: Built Under Revanta Consulting

Prestige Elite Promotions — Client Engagement
PWA + iOS + Android build. Currently in active development.
[Link out to revanta.agency]
```

---

### CONSULTING (/consulting)

**Hero:**
```
EYEBROW: Revanta Consulting · A Sutton Venture Studio Practice
HEADLINE: AI-augmented builds.
          Agency results.
SUBHEAD: Production-quality systems in 8–16 weeks at 40–70%
         below traditional agency cost — powered by AI-augmented
         development and a founder's eye for architecture.
```

**Two-column layout:**
- Left: Brief positioning statement (3 paragraphs)
- Right: Key stats (dark card, gold numbers)
  - `$1.5K–$3.5K` — Entry engagements
  - `8–16 wks` — Typical build timeline
  - `40–70%` — Below agency market rate
  - `6 tiers` — From landing page to multi-agent system

**Engagement Overview (summary tier list — NOT the full rate card):**

```
Tier 00  Web Presence & Commerce      $2,500 – $45,000
Tier 01  Strategy & Architecture      $3,500 – $8,000
Tier 02  MVP Sprints                  $15,000 – $55,000
Tier 03  Full Product Builds          $45,000 – $95,000
Tier 04  AI Agents & Chatbots         $1,500 – $95,000
Tier 05  Retained Infrastructure      $1,500 – $8,000/mo
```

**CTA Block (dark background):**
```
HEADLINE: Ready to build?
SUBHEAD: Full rate card, engagement terms, and availability
         at revanta.agency.

PRIMARY CTA: "Visit revanta.agency" → https://revanta.agency (external, new tab)
SECONDARY CTA: "Start a Conversation" → /contact
```

**Current Client Feature:**
```
Client Spotlight
Prestige Elite Promotions
Full PWA + iOS + Android build. AI-powered event promotion
platform currently in active development.
[No pricing disclosed — tasteful feature only]
```

---

### ABOUT (/about)

**Hero:**
```
EYEBROW: About the Studio
HEADLINE: One founder.
          Eight ventures.
          One system.
```

**Founder section (asymmetric — text left, visual space right):**
```
Joshua Sutton
Founder · Chairman · Designer · Builder

Houston-based venture studio operator building AI-first
platforms across music, civic tech, finance, cultural heritage,
and custom apparel. Former MediaTech Ventures cohort member.
Current Ion Incubator instructor.

The studio model: design and architect each platform,
place operators and CEOs as ventures mature, retain
strategic oversight as chairman across the portfolio.
```

**Studio Philosophy (3 principles):**
```
Patent-First
Intellectual property is the primary asset. Platforms
are proof-of-concept. Licensing is the business model.

AI-Native by Default
Every build is designed for AI augmentation from
the first commit — not bolted on after launch.

Operators Over Founders
The goal is to place the right CEO into each venture,
not to run eight companies simultaneously.
```

**Timeline / Milestones strip (horizontal scroll on mobile):**
```
2024  →  Sutton Ventures LLC formed
2024  →  Revanta Consulting launched
2025  →  Apparel Flow co-founded with Brandon Watson
2025  →  ValidData.io partnership with Paul O'Brien
2025  →  Music Ops Pro enters beta
2026  →  Conference Buddy nearing release
2026  →  Info2Vote team assembled
2026  →  suttonvs.com launched
```

---

### CONTACT (/contact)

**Hero:**
```
EYEBROW: Let's Talk
HEADLINE: Tell us what
          you're building.
SUBHEAD: Whether you're a founder looking for a technical
         co-builder, a business that needs a production-grade
         AI system, or an operator interested in running one
         of our ventures — start here.
```

**Intake Form (Supabase lead capture — Agent 2 owns this):**

Fields:
1. Name (text, required)
2. Email (email, required)
3. Company / Venture (text, optional)
4. Inquiry Type (select, required):
   - "Consulting Engagement"
   - "Co-Founder / Partnership Opportunity"
   - "Operator / CEO Interest"
   - "General Inquiry"
5. Tell us about your project (textarea, required, min 50 chars)
6. Budget Range (select, optional):
   - "Under $10K"
   - "$10K – $25K"
   - "$25K – $75K"
   - "$75K+"
   - "Equity / Partnership"

**Submit behavior:**
- Button label: "Send It"
- On success: inline confirmation (no redirect) — "We'll be in touch within 48 hours."
- On error: inline error message, preserve all field values

**Below form — direct contact strip:**
```
josh@suttonvs.com
Houston, TX
suttonvs.com · revanta.agency
```

---

## AGENT ARCHITECTURE

### AGENT 1 — Site Scaffold + Content
**Scope:** Full site build EXCEPT the contact form backend logic

**Paste this as Agent 1's initial prompt in Antigravity:**

```
You are building a 5-page static website for Sutton Venture Studio (suttonvs.com).

STACK: Vanilla HTML/CSS/JS. No frameworks. One CSS file (styles.css). One JS file (main.js). Five HTML pages: index.html, ventures.html, consulting.html, about.html, contact.html.

DESIGN SYSTEM — use these exact CSS variables:
--black: #0a0a0a
--off-white: #f5f2ee
--warm-white: #faf8f5
--gold: #c8a96e
--gold-light: #e8d5a8
--gold-dark: #9a7c45
--muted: #6b6560
--border: #e2ddd8
--border-dark: #2a2825

FONTS: DM Serif Display (headings) + DM Sans (body). Load from Google Fonts.

DESIGN DIRECTION: Swiss/Editorial. Dark hero sections on warm-white body. Gold as the only accent color. No gradients, no glassmorphism, no decorative blobs. Generous whitespace. Asymmetric layouts.

NAVIGATION: Sticky nav, 64px height. Transparent on load, transitions to --black background with gold logo mark on scroll. Logo: "SuttonVS" in DM Serif Display. Links: Ventures · Consulting · About · Contact. On mobile: hamburger → full-screen overlay menu.

BUILD ORDER:
1. styles.css — full design system, all component styles, responsive breakpoints
2. main.js — nav scroll behavior, mobile menu toggle, form handling placeholder
3. index.html — home page
4. ventures.html — full portfolio grid
5. consulting.html — consulting overview + link to revanta.agency
6. about.html — founder + studio philosophy
7. contact.html — form structure (no backend — leave TODO comments for Agent 2)

VENTURE PORTFOLIO DATA for ventures.html:
[paste the 8-venture table from spec above]

STATUS BADGE COLORS:
- "Live" / "In Testing" / "Active" / "Partnership" → background: rgba(200,169,110,0.15); color: var(--gold-dark); border: 1px solid rgba(200,169,110,0.3)
- "Nearly Complete" → background: rgba(200,169,110,0.08); color: var(--muted)
- "Under Construction" / "Building" → background: transparent; color: var(--muted); border: 1px solid var(--border)
- "On Deck" → background: transparent; color: var(--border); border: 1px solid var(--border-dark)

VENTURE CARD STRUCTURE:
- Left border 3px, color matches status
- Venture name: DM Serif Display, 22px
- Domain (if applicable): 11px tracked uppercase, gold
- Status badge: right-aligned pill
- Two-sentence description: DM Sans 300, 14px, --muted

Leave the contact form's submit handler as:
// TODO: Agent 2 will implement Supabase integration here
// Form fields: name, email, company, inquiry_type, message, budget_range
async function handleFormSubmit(e) {
  e.preventDefault();
  // AGENT 2 SWAP POINT — Supabase insert
}

Do not use any external CSS frameworks. Do not use Tailwind. Write clean, commented CSS using the design tokens defined above.
```

---

### AGENT 2 — Contact Form + Supabase Integration
**Scope:** Supabase client setup, form submission logic, success/error states

**Paste this as Agent 2's initial prompt in Antigravity:**

```
You are implementing the contact form backend for suttonvs.com/contact.html.

Agent 1 has already built the HTML form structure and left a TODO at the handleFormSubmit function in main.js. Your job is to implement that function using Supabase.

SUPABASE SETUP:
- Import Supabase JS client via CDN in contact.html
- Use environment-style constants for SUPABASE_URL and SUPABASE_ANON_KEY (leave as placeholders with clear comments)
- Do NOT hardcode real credentials

DATABASE TABLE — create this schema (provide the SQL as a comment block):
CREATE TABLE leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  inquiry_type text NOT NULL,
  message text NOT NULL,
  budget_range text,
  source text DEFAULT 'suttonvs.com'
);

FORM BEHAVIOR:
- On submit: disable button, show "Sending..." state
- On success: hide form, show inline confirmation div
  Message: "We'll be in touch within 48 hours."
  Sub: "— The Sutton Venture Studio team"
- On error: show inline error, re-enable button, PRESERVE all field values
  Message: "Something went wrong. Try again or email us directly at josh@suttonvs.com"

VALIDATION (client-side before submit):
- Name: required, min 2 chars
- Email: required, valid format
- Inquiry type: required (must select)
- Message: required, min 50 chars
- Show inline validation errors below each field using --gold-dark color

SUCCESS STATE DESIGN (match site design system):
- Dark card (--black background)
- Gold checkmark icon (SVG, inline)
- Confirmation text in DM Serif Display italic
- No page redirect

Deliver:
1. The complete handleFormSubmit() function
2. Supabase client initialization block
3. The CREATE TABLE SQL as a comment
4. Any additional CSS needed for validation states and success/error UI
5. Updated <head> section for contact.html with Supabase CDN import
```

---

## SUPABASE SCHEMA

Run this in your Supabase SQL editor after project creation:

```sql
-- SuttonVS.com lead capture
CREATE TABLE leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  inquiry_type text NOT NULL CHECK (inquiry_type IN (
    'Consulting Engagement',
    'Co-Founder / Partnership Opportunity',
    'Operator / CEO Interest',
    'General Inquiry'
  )),
  message text NOT NULL,
  budget_range text,
  source text DEFAULT 'suttonvs.com'
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (contact form)
CREATE POLICY "Allow public insert" ON leads
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only authenticated users can read
CREATE POLICY "Auth read only" ON leads
  FOR SELECT TO authenticated
  USING (true);
```

---

## VERCEL DEPLOYMENT

1. Push to GitHub repo: `suttonvs-site`
2. Import to Vercel → auto-detect static site
3. Add environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
4. Custom domain: `suttonvs.com` → point A record to Vercel
5. SSL auto-provisions

**Note:** Since this is a static site, env vars need to be injected at build time or referenced directly in JS. For a static site without a build step, embed the Supabase anon key directly in contact.html — the anon key is safe to expose client-side. RLS policies protect the data.

---

## PRE-LAUNCH CHECKLIST

- [ ] `josh@suttonvs.com` Google Workspace email live
- [ ] `revanta.agency` domain acquired and DNS configured
- [ ] Supabase project created, schema deployed
- [ ] All 5 pages render at correct routes
- [ ] Nav scroll behavior working
- [ ] Mobile menu working at 375px, 390px
- [ ] Contact form submits successfully to Supabase
- [ ] Form success/error states rendering correctly
- [ ] Vercel deployment live at suttonvs.com
- [ ] Test lead capture end-to-end before going live
- [ ] Update Revanta rate card footer links (already has suttonvs.com ✅)

---

## COPY NOTES

- Never say "AI-powered" in hero headlines — it's expected, not differentiating
- Lead with the outcome, not the technology
- Studio voice: direct, confident, no buzzwords — reads like a founder talking, not a marketing team
- Gold eyebrow labels carry the category context so headlines can be clean and declarative
- Ventures page descriptions: two sentences max per card — what it does, who it's for

---

*Build spec v1.0 · SuttonVS.com · Sutton Venture Studio · Q1 2026*
