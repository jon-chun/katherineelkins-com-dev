# katherineelkins.com — SEO/GEO Optimization Report

**Date**: 2026-03-03 (updated, round 3)
**Site**: https://katherineelkins.com
**Architecture**: Static multi-page HTML, Netlify hosting, no build system
**Pages audited**: index, research, books, speaking, policy, blog (6 pages)

---

## 1. Executive Summary

**Overall GEO/SEO Grade: A** (upgraded from B+ after resolving 17 of 20 critiques)

The site is now comprehensively optimized: full social metadata, all AI crawlers welcomed, JSON-LD on every page, complete security headers (HSTS + CSP), correct caching, accessibility landmarks, skip navigation, print stylesheet, custom 404 page, CLS-safe hero image, differentiated sitemap dates, and enhanced llms.txt with citation/AI-usage preferences.

**Three tasks remain**, all requiring manual content creation or domain-expert authoring:
1. **Favicon and apple-touch-icon** — needs image asset creation (design decision)
2. **Speaking page JSON-LD expansion** — needs editorial judgment on which 8-10 events to feature
3. **Policy page mainEntity schema** — needs structured role/organization data authored

**Completed across three rounds (2026-03-03)**:

Round 1: og:image, Twitter Cards, og:type, og:site_name (5 pages), AI crawlers (5 added to robots.txt), blog JSON-LD, HSTS header, caching fix, meta author (all pages)

Round 2: Custom 404 page, sitemap lastmod differentiation, CSP header, llms.txt enhancements (last-updated, citation format, AI usage), hero image width/height, `<main>` landmark (all pages), aria-current (all pages), skip navigation (all pages + CSS), print stylesheet

---

## 2. Full Optimization Checklist

Reusable reference for this site and future static sites. `[x]` = complete, `[ ]` = outstanding.

### 2.1 Meta Tags & Social Sharing

- [x] `<meta charset>` and `<meta name="viewport">` on all pages
- [x] Unique `<title>` on each page
- [x] Unique `<meta name="description">` on each page
- [x] `<meta name="keywords">` on homepage (optional on subpages)
- [x] `<meta name="author">` on all pages — *round 1*
- [x] `<link rel="canonical">` on all pages
- [x] `<meta property="og:title">` on all pages
- [x] `<meta property="og:description">` on all pages
- [x] `<meta property="og:url">` on all pages
- [x] `<meta property="og:image">` on all pages — *round 1*
- [x] `<meta property="og:type">` on all pages — *round 1*
- [x] `<meta property="og:site_name">` on all pages — *round 1*
- [x] `<meta name="twitter:card">` on all pages — *round 1*
- [x] `<meta name="twitter:title">` on all pages — *round 1*
- [x] `<meta name="twitter:description">` on all pages — *round 1*
- [x] `<meta name="twitter:image">` on all pages — *round 1*
- [ ] **Favicon**: `<link rel="icon">` (SVG + ICO) and `<link rel="apple-touch-icon">` — see detailed instructions below
- [ ] Page-specific og:image for high-traffic pages (research, books) — *future enhancement*

### 2.2 JSON-LD Structured Data

- [x] **index.html**: Person (name, image, jobTitle, worksFor, alumniOf, sameAs x14, knowsAbout, hasCredential, memberOf), Book x2, ScholarlyArticle, FAQPage (4 Q&A)
- [x] **research.html**: CollectionPage with mainEntity array of 4 ResearchProject objects
- [x] **books.html**: CollectionPage with ItemList of 5 publications (2 books, 3 articles)
- [x] **speaking.html**: WebPage with ItemList of 3 Event objects
- [x] **policy.html**: WebPage with about keywords
- [x] **blog.html**: Blog schema with author — *round 1*
- [ ] **Expand speaking.html JSON-LD** to 8-10+ events (currently 3 of 15+) — see detailed instructions below
- [ ] **Add policy.html mainEntity** with Organization/Role entries for each governance role — see detailed instructions below
- [ ] Add BlogPosting schema when actual blog posts are published — *future, when blog launches*
- [ ] Add dateModified to JSON-LD blocks for freshness signals — *future enhancement*

### 2.3 GEO / AI Visibility

- [x] `llms.txt` — comprehensive plain-text AI-readable summary with last-updated date, citation format, AI usage preferences — *enhanced round 2*
- [x] `robots.txt` — wildcard allow + 17 named AI crawlers — *5 added round 1*
- [x] `sitemap.xml` — all 6 pages + llms.txt with differentiated per-page lastmod dates — *fixed round 2*
- [x] Multi-page architecture (not SPA) for independent page indexing
- [x] FAQPage schema on homepage for AI Overview / featured snippet extraction
- [x] High quotable-claim density (specific stats, named institutions)
- [x] Entity disambiguation via Person schema + sameAs to Wikipedia, Wikidata, ORCID, Google Scholar
- [ ] Add visible "last updated" dates on research and publications pages — *future enhancement*

### 2.4 Security Headers

- [x] X-Frame-Options: SAMEORIGIN
- [x] X-Content-Type-Options: nosniff
- [x] Referrer-Policy: strict-origin-when-cross-origin
- [x] Permissions-Policy: camera=(), microphone=(), geolocation=()
- [x] Strict-Transport-Security: max-age=31536000; includeSubDomains — *round 1*
- [x] Content-Security-Policy — *round 2*

### 2.5 Performance & Caching

- [x] HTML caching: 1 hour (public, max-age=3600)
- [x] Static assets: 30-day cache (public, max-age=2592000) — *fixed from incorrect immutable, round 1*
- [x] llms.txt: 24-hour cache with correct Content-Type
- [x] Google Fonts loaded via `<link>` with `preconnect` hints
- [x] Hero image: explicit width/height attributes (627x740) to prevent CLS — *round 2*
- [ ] Consider image optimization (WebP/AVIF format, responsive srcset) — *future enhancement*

### 2.6 Accessibility

- [x] Wrap page content in `<main id="content">` landmark element (all 6 pages + 404) — *round 2*
- [x] Add `aria-current="page"` to active nav links (all 6 pages) — *round 2*
- [x] Skip navigation link on all pages with CSS — *round 2*
- [x] Hamburger button has `aria-label="Menu"`
- [x] `prefers-reduced-motion` respected in CSS and JS
- [x] Reveal animations are crawler-safe (content visible by default)

### 2.7 Error Handling

- [x] Custom `404.html` with site branding, navigation, and page links — *round 2*

### 2.8 Print & Offline

- [x] `@media print` rules in style.css — *round 2*

### 2.9 Content Quality / E-E-A-T

- [x] Strong Experience signals: first-person NIST PI narrative, curriculum creation, media quotes
- [x] Strong Expertise signals: Ph.D. UC Berkeley, ICML, Cambridge UP, Oxford UP
- [x] Strong Authoritativeness signals: Wikipedia, Wikidata, ORCID, Google Scholar, institutional affiliations
- [x] Strong Trustworthiness signals: .edu affiliation, named funders (NIST, Schmidt Sciences, UNESCO)

---

## 3. Remaining Tasks — Detailed Instructions

Three tasks remain. Each requires manual content creation or editorial judgment beyond automated text edits.

---

### TASK A: Favicon & Apple-Touch-Icon (Critique #2, Criticality 93)

**What's needed**: Three image files + three `<link>` tags added to all 7 HTML pages (6 pages + 404.html).

#### Files to create

| File | Format | Size | Purpose |
|------|--------|------|---------|
| `public/favicon.svg` | SVG | scalable | Modern browsers, crisp at any size |
| `public/favicon.ico` | ICO | 16x16 + 32x32 | Legacy browsers, bookmarks |
| `public/apple-touch-icon.png` | PNG | 180x180 | iOS home screen, Safari |

#### Design direction

The site's accent color is `#7B2D3B` (deep rose). Options:
- **"KE" monogram** in Cormorant Garamond (the site's heading font) on a transparent or `#7B2D3B` background
- **Abstract mark**: a simple geometric shape (circle, diamond) in `#7B2D3B`
- **Initial "K"** in Cormorant Garamond, bold, white on `#7B2D3B` background

The favicon should read clearly at 16x16 pixels. Script or serif initials often work well. Avoid detail that disappears at small sizes.

#### How to create the files

**Option 1: Figma / design tool**
1. Create a 180x180 artboard
2. Design the mark (e.g., "KE" in Cormorant Garamond Bold, white, centered on `#7B2D3B` circle)
3. Export as `apple-touch-icon.png` (180x180 PNG)
4. Export as `favicon.svg` (SVG, resize artboard to square)
5. Use realfavicongenerator.net or a CLI tool to generate `favicon.ico` from the PNG

**Option 2: CLI (ImageMagick)**
```bash
# Create a simple "K" favicon — adjust font path as needed
convert -size 180x180 xc:'#7B2D3B' \
  -font 'Cormorant-Garamond-Bold' -pointsize 120 \
  -fill white -gravity center -annotate +0+0 'K' \
  public/apple-touch-icon.png

# Create ICO from PNG
convert public/apple-touch-icon.png -resize 32x32 public/favicon.ico

# Create SVG (hand-write or export from design tool)
```

**Option 3: Online generator**
1. Go to favicon.io/favicon-generator
2. Choose "Text" tab, enter "KE", select font "Cormorant Garamond" or similar serif
3. Set background to `#7B2D3B`, text color to `#FFFFFF`
4. Download the pack — extract `favicon.ico`, `apple-touch-icon.png`
5. Manually create or save the SVG version

#### HTML to add

Add these 3 lines to the `<head>` of all 7 pages (`index.html`, `research.html`, `books.html`, `speaking.html`, `policy.html`, `blog.html`, `404.html`), after the `<meta>` tags and before the `<script type="application/ld+json">` block:

```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

#### Verification

After deploying:
- Check browser tab shows the icon (not blank)
- Check `https://katherineelkins.com/favicon.ico` loads
- Check `https://katherineelkins.com/apple-touch-icon.png` loads
- Test on iOS: add to home screen, verify icon appears
- Run realfavicongenerator.net/favicon_checker on the live URL

---

### TASK B: Expand Speaking Page JSON-LD (Critique #10, Criticality 65)

**What's needed**: Replace the current 3-event `itemListElement` array in `public/speaking.html` JSON-LD with 10 events covering the full speaking portfolio.

#### Current state

The existing JSON-LD in `speaking.html` lists only 3 events:
1. OpenAI Higher Education Forum (Oct 2025)
2. RALLY Innovation Conference (2025)
3. ICML 2024 Oral Presentation

#### Events to add (from page HTML content)

Add these 7 events to the `itemListElement` array, after the existing 3:

```json
{
  "@type": "Event",
  "position": 4,
  "name": "UNESCO MONDIACULT Expert Consultation",
  "description": "Expert consultation on AI frameworks for multilingual cultural preservation and digital heritage.",
  "startDate": "2024",
  "location": { "@type": "Place", "name": "Cairo, Egypt" },
  "organizer": { "@type": "Organization", "name": "UNESCO" }
},
{
  "@type": "Event",
  "position": 5,
  "name": "Weill Cornell Medicine-Qatar Keynote",
  "description": "Keynote on AI and the humanities, addressing computational methods in medical humanities and narrative medicine.",
  "startDate": "2024",
  "location": { "@type": "Place", "name": "Doha, Qatar" },
  "organizer": { "@type": "Organization", "name": "Weill Cornell Medicine-Qatar" }
},
{
  "@type": "Event",
  "position": 6,
  "name": "Concordia University Invited Lecture",
  "description": "Invited lecture on computational humanities and the SentimentArcs methodology for narrative analysis.",
  "startDate": "2023",
  "location": { "@type": "Place", "name": "Montreal, Canada" },
  "organizer": { "@type": "Organization", "name": "Concordia University" }
},
{
  "@type": "Event",
  "position": 7,
  "name": "Helix Center Roundtables on AI, Emotion, and Consciousness",
  "description": "Panelist alongside Ned Block (NYU), Kyunghyun Cho (NYU), Francesca Rossi (IBM), Joseph LeDoux, and Rosalind Picard (MIT).",
  "location": { "@type": "Place", "name": "New York, NY" },
  "organizer": { "@type": "Organization", "name": "The Helix Center for Interdisciplinary Investigation" }
},
{
  "@type": "Event",
  "position": 8,
  "name": "Bloomberg AI Strategy Course",
  "description": "Created and delivered AI Strategy course for Bloomberg's professional education platform.",
  "startDate": "2024",
  "organizer": { "@type": "Organization", "name": "Bloomberg" }
},
{
  "@type": "Event",
  "position": 9,
  "name": "Christian Science Monitor — AI Safety Expert Commentary",
  "description": "Quoted on AI safety research and the role of humanities expertise in AI governance and evaluation.",
  "startDate": "2026-02"
},
{
  "@type": "Event",
  "position": 10,
  "name": "NPR/WOSU — Could AI Save Endangered Archives?",
  "description": "Radio coverage of the Schmidt Sciences archival intelligence project in New Orleans.",
  "startDate": "2026-02",
  "url": "https://www.wosu.org/2026-02-09/could-artificial-intelligence-save-endangered-archives-a-kenyon-college-cohort-aims-to-find-out"
}
```

#### Where to insert

In `public/speaking.html`, find the existing `</script>` closing the JSON-LD block. The 3 existing events end with the ICML entry. Add a comma after the ICML closing `}`, then paste the 7 new entries before the closing `]`.

#### Verification

Paste the complete JSON-LD into the Google Rich Results Test (search.google.com/test/rich-results) to validate syntax.

---

### TASK C: Add Policy Page mainEntity Schema (Critique #11, Criticality 62)

**What's needed**: Add a `mainEntity` array to the existing JSON-LD in `public/policy.html`, listing each governance role as a structured Organization membership.

#### Current state

The existing JSON-LD is:
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Policy & Governance — Katherine Elkins",
  "url": "https://katherineelkins.com/policy",
  "description": "...",
  "author": { ... },
  "about": ["AI governance", "AI safety policy", "NIST AI Safety Institute", "UNESCO AI", "AI regulation"]
}
```

#### Replace with

Replace the entire `<script type="application/ld+json">` block with:

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Policy & Governance — Katherine Elkins",
  "url": "https://katherineelkins.com/policy",
  "description": "Katherine Elkins contributes to AI safety and governance at the federal, international, and industry levels, including as PI in the NIST AI Safety Institute Consortium (CAISI), PI for Schmidt Sciences HAVI, UNESCO MONDIACULT expert consultant, Meta Open Innovation AI Research Community member, OpenAI Education Guild speaker, and Bloomberg AI Strategy course creator.",
  "author": {
    "@type": "Person",
    "name": "Katherine Elkins",
    "url": "https://katherineelkins.com",
    "sameAs": ["https://en.wikipedia.org/wiki/Katherine_Elkins"]
  },
  "about": ["AI governance", "AI safety policy", "NIST AI Safety Institute", "UNESCO AI", "AI regulation"],
  "mainEntity": [
    {
      "@type": "OrganizationRole",
      "roleName": "Principal Investigator",
      "description": "PI in the NIST US AI Safety Institute Consortium (CAISI), representing the 25,000-member Modern Language Association. Focus: LLM evaluation — how language models process negation, prohibition, and persuasion.",
      "memberOf": {
        "@type": "Organization",
        "name": "NIST AI Safety Institute Consortium",
        "url": "https://www.nist.gov/artificial-intelligence/ai-safety-institute"
      }
    },
    {
      "@type": "OrganizationRole",
      "roleName": "Principal Investigator",
      "description": "PI for $330K Schmidt Sciences Humanities and AI Virtual Institute grant. One of 23 teams worldwide. Project: Archival Intelligence — AI tools for endangered cultural archives in New Orleans.",
      "memberOf": {
        "@type": "Organization",
        "name": "Schmidt Sciences HAVI",
        "url": "https://archivalintelligenceai.org"
      }
    },
    {
      "@type": "OrganizationRole",
      "roleName": "Expert Consultant",
      "description": "Expert consultant for UNESCO's MONDIACULT initiative on AI frameworks for multilingual cultural preservation and digital heritage.",
      "memberOf": {
        "@type": "Organization",
        "name": "UNESCO"
      }
    },
    {
      "@type": "OrganizationRole",
      "roleName": "Research Community Member",
      "description": "Member of Meta's Open Innovation AI Research Community, contributing to discussions on open-source AI development, transparency, and responsible deployment.",
      "memberOf": {
        "@type": "Organization",
        "name": "Meta Open Innovation AI Research Community"
      }
    },
    {
      "@type": "OrganizationRole",
      "roleName": "Education Guild Speaker",
      "description": "Selected speaker at OpenAI's Education Guild Higher Education Forum (October 2025), presenting computational humanities research and human-centered AI curriculum model.",
      "memberOf": {
        "@type": "Organization",
        "name": "OpenAI"
      }
    },
    {
      "@type": "OrganizationRole",
      "roleName": "AI Strategy Course Creator",
      "description": "Created AI Strategy course for Bloomberg's professional education platform, designed to help professionals integrate AI into organizational workflows and decision-making.",
      "memberOf": {
        "@type": "Organization",
        "name": "Bloomberg"
      }
    }
  ]
}
```

#### Verification

1. Paste into the Google Rich Results Test to validate syntax
2. Verify all 6 organizations appear in the structured data
3. Cross-check role titles against the page HTML content

---

## 4. Platform-Specific GEO Notes

### Google AI Overviews
- **Strengths**: Rich JSON-LD, clean URLs, independent page indexing, high E-E-A-T, complete social metadata, CSP + HSTS
- **Now resolved**: Social metadata, sitemap freshness, security headers, accessibility landmarks
- **Still needed**: dateModified in JSON-LD (future enhancement)

### ChatGPT (OpenAI)
- **Strengths**: GPTBot + OAI-SearchBot + ChatGPT-User allowed, llms.txt with citation format
- **Now resolved**: All crawlers, llms.txt citation/AI-usage preferences

### Perplexity
- **Strengths**: PerplexityBot + Perplexity-User allowed, excellent quotable-claim density
- **Still needed**: Expanded speaking/policy JSON-LD (Tasks B, C above)

### Claude (Anthropic)
- **Strengths**: ClaudeBot + Claude-SearchBot allowed, llms.txt with last-updated date and citation preferences
- **Now resolved**: All crawlers, llms.txt enhancements

### Gemini (Google)
- **Strengths**: Google-Extended allowed, Person schema + sameAs for entity recognition, differentiated sitemap dates
- **Now resolved**: Sitemap freshness signals

### Bing Copilot (Microsoft)
- **Strengths**: Bingbot inherits wildcard Allow, complete og:image and Twitter Cards on all pages
- **Now resolved**: All social metadata (Bing weights social signals heavily)

### General Academic Researcher GEO Strategy
1. **Entity disambiguation**: Person schema + sameAs to Wikipedia/Wikidata — strong
2. **Quotable claim density**: Specific findings with numbers — excellent
3. **Institutional triangulation**: NIST, Schmidt Sciences, UNESCO, media — strong
4. **llms.txt as first-party authority**: Now includes citation preferences and AI usage policy

---

## 5. Sources

- llmstxt.org — llms.txt standard specification
- web.dev/articles/vitals — Core Web Vitals (CLS, LCP, INP)
- schema.org/Person, schema.org/FAQPage, schema.org/Event, schema.org/OrganizationRole — JSON-LD type references
- developers.google.com/search/docs/appearance/structured-data — Google structured data docs
- platform.openai.com/docs/bots — OpenAI crawler documentation (GPTBot, OAI-SearchBot, ChatGPT-User)
- Anthropic crawler documentation — ClaudeBot, Claude-SearchBot
- developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security — HSTS
- developer.mozilla.org/en-US/docs/Web/HTTP/CSP — Content Security Policy
- securityheaders.com — Security header scanning and grading
- w3.org/WAI/WCAG21/quickref — WCAG 2.1 accessibility guidelines
- realfavicongenerator.net — Favicon generation and validation
- search.google.com/test/rich-results — Google Rich Results Test for JSON-LD validation
