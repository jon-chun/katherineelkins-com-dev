# katherineelkins.com — SEO/GEO Optimization Report

**Date**: 2026-03-03 (updated)
**Site**: https://katherineelkins.com
**Architecture**: Static multi-page HTML, Netlify hosting, no build system
**Pages audited**: index, research, books, speaking, policy, blog (6 pages)

---

## 1. Executive Summary

**Overall GEO/SEO Grade: A-** (upgraded from B+ after resolving 8 critiques)

The site now has comprehensive social sharing metadata, full AI crawler coverage, JSON-LD on all 6 pages, HSTS security, and correct caching. Remaining work is primarily favicon creation, accessibility, schema expansion, and content freshness signals.

**Completed since initial audit (2026-03-03)**:
- og:image, Twitter Cards, og:type, og:site_name added to all pages
- 5 modern AI crawlers added to robots.txt
- Blog JSON-LD schema added
- HSTS header added
- Immutable caching fixed
- meta author added site-wide

**Top 3 remaining fixes**:
1. **Create favicon and apple-touch-icon** — blank browser tab icon on every visit
2. **Create custom 404 page** — dead-link visitors hit a brandless dead end
3. **Differentiate sitemap lastmod dates** — bulk-identical timestamps reduce freshness credibility

---

## 2. Full Optimization Checklist

This section is a reusable reference for this site and future static sites. Items marked `[x]` are complete; `[ ]` remain outstanding.

### 2.1 Meta Tags & Social Sharing

- [x] `<meta charset>` and `<meta name="viewport">` on all pages
- [x] Unique `<title>` on each page
- [x] Unique `<meta name="description">` on each page
- [x] `<meta name="keywords">` on homepage (optional on subpages)
- [x] `<meta name="author">` on all pages — *completed 2026-03-03*
- [x] `<link rel="canonical">` on all pages
- [x] `<meta property="og:title">` on all pages
- [x] `<meta property="og:description">` on all pages
- [x] `<meta property="og:url">` on all pages
- [x] `<meta property="og:image">` on all pages — *completed 2026-03-03*
- [x] `<meta property="og:type">` on all pages — *completed 2026-03-03*
- [x] `<meta property="og:site_name">` on all pages — *completed 2026-03-03*
- [x] `<meta name="twitter:card">` on all pages — *completed 2026-03-03*
- [x] `<meta name="twitter:title">` on all pages — *completed 2026-03-03*
- [x] `<meta name="twitter:description">` on all pages — *completed 2026-03-03*
- [x] `<meta name="twitter:image">` on all pages — *completed 2026-03-03*
- [ ] Favicon: `<link rel="icon">` (SVG + ICO) and `<link rel="apple-touch-icon">`
- [ ] Page-specific og:image for high-traffic pages (research, books) — *future enhancement*

### 2.2 JSON-LD Structured Data

- [x] **index.html**: Person (name, image, jobTitle, worksFor, alumniOf, sameAs ×14, knowsAbout, hasCredential, memberOf), Book ×2, ScholarlyArticle, FAQPage (4 Q&A)
- [x] **research.html**: CollectionPage with mainEntity array of 4 ResearchProject objects
- [x] **books.html**: CollectionPage with ItemList of 5 publications (2 books, 3 articles)
- [x] **speaking.html**: WebPage with ItemList of 3 Event objects
- [x] **policy.html**: WebPage with about keywords
- [x] **blog.html**: Blog schema with author — *completed 2026-03-03*
- [ ] Expand speaking.html JSON-LD to 8-10+ events (currently 3 of 15+)
- [ ] Add policy.html mainEntity with Organization/Role entries for each governance role
- [ ] Add BlogPosting schema when actual blog posts are published
- [ ] Add dateModified to JSON-LD blocks for freshness signals

### 2.3 GEO / AI Visibility

- [x] `llms.txt` — comprehensive plain-text AI-readable summary
- [x] `robots.txt` — wildcard allow + 17 named AI crawlers — *5 added 2026-03-03*
- [x] `sitemap.xml` — all 6 pages + llms.txt with priority and changefreq
- [x] Multi-page architecture (not SPA) for independent page indexing
- [x] FAQPage schema on homepage for AI Overview / featured snippet extraction
- [x] High quotable-claim density (specific stats, named institutions)
- [x] Entity disambiguation via Person schema + sameAs to Wikipedia, Wikidata, ORCID, Google Scholar
- [ ] llms.txt: add "last updated" date, preferred citation format, AI usage preferences
- [ ] Differentiate sitemap.xml lastmod dates per page (currently all identical)
- [ ] Add visible "last updated" dates on research and publications pages

### 2.4 Security Headers

- [x] X-Frame-Options: SAMEORIGIN
- [x] X-Content-Type-Options: nosniff
- [x] Referrer-Policy: strict-origin-when-cross-origin
- [x] Permissions-Policy: camera=(), microphone=(), geolocation=()
- [x] Strict-Transport-Security: max-age=31536000; includeSubDomains — *completed 2026-03-03*
- [ ] Content-Security-Policy (CSP)

### 2.5 Performance & Caching

- [x] HTML caching: 1 hour (public, max-age=3600)
- [x] Static assets: 30-day cache (public, max-age=2592000) — *fixed from incorrect immutable 2026-03-03*
- [x] llms.txt: 24-hour cache with correct Content-Type
- [x] Google Fonts loaded via `<link>` with `preconnect` hints
- [ ] Hero image: add explicit width/height attributes to prevent CLS
- [ ] Consider image optimization (WebP/AVIF format, responsive srcset)

### 2.6 Accessibility

- [ ] Wrap page content in `<main>` landmark element (all 6 pages)
- [ ] Add `aria-current="page"` to active nav links (all 6 pages)
- [ ] Add skip navigation link (`<a href="#content" class="skip-link">`)
- [x] Hamburger button has `aria-label="Menu"`
- [x] `prefers-reduced-motion` respected in CSS and JS
- [x] Reveal animations are crawler-safe (content visible by default)

### 2.7 Error Handling

- [ ] Create custom `404.html` with site branding, navigation, and suggested pages

### 2.8 Print & Offline

- [ ] Add `@media print` rules to style.css

### 2.9 Content Quality / E-E-A-T

- [x] Strong Experience signals: first-person NIST PI narrative, curriculum creation, media quotes
- [x] Strong Expertise signals: Ph.D. UC Berkeley, ICML, Cambridge UP, Oxford UP
- [x] Strong Authoritativeness signals: Wikipedia, Wikidata, ORCID, Google Scholar, institutional affiliations
- [x] Strong Trustworthiness signals: .edu affiliation, named funders (NIST, Schmidt Sciences, UNESCO)

---

## 3. Remaining Outstanding Tasks

Ranked by CRITICALITY (descending), with DIFFICULTY estimate and actionable fix.

### #2 — Criticality: 93 | Difficulty: MEDIUM

**No favicon or apple-touch-icon (site-wide)**

Every browser tab, bookmark, and mobile home screen shows a blank icon. One of the most visible polish signals.

**Fix**: Create 3 files from the accent color `#7B2D3B` (e.g. "KE" monogram or abstract mark):
- `public/favicon.svg` — scalable vector
- `public/favicon.ico` — 16x16 + 32x32 bitmap
- `public/apple-touch-icon.png` — 180x180

Add to `<head>` of all 6 pages:
```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

---

### #6 — Criticality: 82 | Difficulty: LOW

**No custom 404 page**

Broken links from academic citations and social shares land on Netlify's default brandless 404.

**Fix**: Create `public/404.html` using the same nav/footer as other pages. Include heading "Page not found", brief text, and links to the 6 main pages. Netlify auto-serves `404.html` for missing routes — no config change needed.

---

### #8 — Criticality: 78 | Difficulty: LOW

**Content freshness — identical lastmod dates in sitemap.xml**

All 7 entries use `<lastmod>2026-03-01</lastmod>`. Identical timestamps reduce freshness credibility with search engines and AI systems.

**Fix**: Update `public/sitemap.xml` with actual per-page last-edit dates. For the current deploy, set index/research/books/speaking/policy to `2026-03-03` (just edited), blog to `2026-03-01`, llms.txt to `2026-03-01`. On future deploys, update only the pages actually changed.

---

### #10 — Criticality: 65 | Difficulty: MEDIUM

**Speaking page JSON-LD covers only 3 of 15+ events**

AI systems extracting structured data only "see" OpenAI, RALLY, and ICML. UNESCO, Weill Cornell, Concordia, Bloomberg, Helix Center, and media appearances are invisible to structured-data extraction.

**Fix**: Expand the `itemListElement` array in `public/speaking.html` JSON-LD to include the top 8-10 events. Add at minimum: UNESCO MONDIACULT, Weill Cornell Medicine-Qatar, Concordia University, Bloomberg AI Strategy, Helix Center roundtables. For media, add as separate entries with `@type: Event` and descriptive names.

---

### #11 — Criticality: 62 | Difficulty: MEDIUM

**Policy page lacks mainEntity schema for governance roles**

The policy JSON-LD has only an `about` keywords array. Queries like "Who is on the NIST AI Safety Institute Consortium?" won't find structured role data.

**Fix**: Add a `mainEntity` array to `public/policy.html` JSON-LD with `@type: Role` or `@type: OrganizationRole` entries for: NIST CAISI (PI), Schmidt Sciences HAVI (PI), UNESCO MONDIACULT (Expert Consultant), Meta (Research Community Member), OpenAI (Education Guild Speaker), Bloomberg (AI Strategy Course Creator). Model after the research page's ResearchProject pattern.

---

### #12 — Criticality: 60 | Difficulty: LOW

**Missing Content-Security-Policy header**

No CSP in netlify.toml. Flagged by security scanners.

**Fix**: Add one line to the `/*` headers block in `public/netlify.toml`:
```toml
Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'"
```

---

### #13 — Criticality: 58 | Difficulty: LOW

**llms.txt missing freshness date, citation format, and AI usage preferences**

The llms.txt standard recommends these for accurate AI attribution.

**Fix**: Add 3 sections to `public/llms.txt`:
```
> Last updated: 2026-03-03

## Preferred Citation
Katherine Elkins, AI safety researcher, Co-Founder of the Human-Centered AI Lab. https://katherineelkins.com

## AI Usage
Content on this site may be quoted, summarized, and cited by AI systems with attribution to Katherine Elkins and a link to https://katherineelkins.com.
```

---

### #14 — Criticality: 55 | Difficulty: LOW

**Hero image missing explicit width/height (CLS risk)**

Browser can't reserve space before load, causing layout shift — a Core Web Vital.

**Fix**: Check image dimensions (`sml-headshot-katherine-elkins.png`), then add `width` and `height` attributes to the `<img>` tag in `public/index.html`:
```html
<img src="sml-headshot-katherine-elkins.png" alt="Katherine Elkins — AI safety researcher" class="hero-photo reveal" width="300" height="[actual]">
```

---

### #16 — Criticality: 40 | Difficulty: LOW

**No `<main>` landmark element on any page**

Screen readers and some AI crawlers use `<main>` to identify primary content boundaries.

**Fix**: On each of the 6 pages, wrap everything between `</nav>` and `<footer>` in `<main id="content">`. Example:
```html
</nav>
<main id="content">
  <header class="page-header">...</header>
  <section>...</section>
</main>
<footer>...</footer>
```

---

### #17 — Criticality: 38 | Difficulty: LOW

**No aria-current="page" on active nav links**

Screen readers can't identify current page in navigation (WCAG 2.1 AA).

**Fix**: On each page, add `aria-current="page"` to the nav link that has `class="active"`:
```html
<a href="/research" class="active" aria-current="page">Research</a>
```

---

### #18 — Criticality: 35 | Difficulty: LOW

**No skip navigation link**

Keyboard users must tab through all nav links before reaching content (WCAG 2.1 A).

**Fix**: Add as first child of `<body>` on all 6 pages:
```html
<a href="#content" class="skip-link">Skip to content</a>
```
Add to `public/style.css`:
```css
.skip-link {
  position: absolute; left: -9999px; top: auto;
  width: 1px; height: 1px; overflow: hidden;
}
.skip-link:focus {
  position: fixed; top: 0; left: 0; right: 0;
  width: auto; height: auto; padding: 1rem; z-index: 1000;
  background: var(--color-bg); color: var(--color-accent);
  text-align: center; font-weight: 600;
}
```
(Requires `<main id="content">` from #16 above.)

---

### #19 — Criticality: 30 | Difficulty: LOW

**No print stylesheet**

Printing includes fixed nav, colored backgrounds, and decorative elements.

**Fix**: Add to the end of `public/style.css`:
```css
@media print {
  .site-nav, .hamburger, .site-footer, .hero-links { display: none; }
  .hero, .section--warm { background: none; }
  body { color: #000; font-size: 12pt; }
  a { color: #000; text-decoration: underline; }
  .page-header { padding-top: 1rem; }
}
```

---

## 4. Platform-Specific GEO Notes

### Google AI Overviews
- **Strengths**: Rich JSON-LD, clean URLs, independent page indexing, high E-E-A-T
- **Now resolved**: Social metadata complete (og:image, Twitter Cards)
- **Still needed**: `dateModified` in JSON-LD for freshness; differentiated sitemap lastmod dates

### ChatGPT (OpenAI)
- **Strengths**: GPTBot allowed, llms.txt available
- **Now resolved**: OAI-SearchBot and ChatGPT-User added to robots.txt
- **Still needed**: llms.txt citation format and freshness date

### Perplexity
- **Strengths**: PerplexityBot allowed, excellent quotable-claim density
- **Now resolved**: Perplexity-User added to robots.txt
- **Still needed**: Expand speaking/policy JSON-LD for richer structured extraction

### Claude (Anthropic)
- **Strengths**: ClaudeBot allowed, llms.txt well-structured for context windows
- **Now resolved**: Claude-SearchBot added to robots.txt
- **Still needed**: llms.txt "last updated" date and citation preferences

### Gemini (Google)
- **Strengths**: Google-Extended allowed, Person schema + sameAs for entity recognition
- **Still needed**: dateModified in JSON-LD, differentiated sitemap lastmod

### Bing Copilot (Microsoft)
- **Strengths**: Bingbot inherits wildcard Allow, standard SEO solid
- **Now resolved**: og:image and Twitter Cards now present on all pages (Bing weights social signals heavily)

### General Academic Researcher GEO Strategy
1. **Entity disambiguation**: Person schema + sameAs to Wikipedia/Wikidata — already strong
2. **Quotable claim density**: Specific findings with numbers — already excellent
3. **Institutional triangulation**: NIST, Schmidt Sciences, UNESCO, media — already strong
4. **llms.txt as first-party authority**: Keep updated with each major development

---

## 5. Sources

- llmstxt.org — llms.txt standard specification
- web.dev/articles/vitals — Core Web Vitals (CLS, LCP, INP)
- schema.org/Person, schema.org/FAQPage, schema.org/Event — JSON-LD type references
- developers.google.com/search/docs/appearance/structured-data — Google structured data docs
- platform.openai.com/docs/bots — OpenAI crawler documentation (GPTBot, OAI-SearchBot, ChatGPT-User)
- Anthropic crawler documentation — ClaudeBot, Claude-SearchBot
- developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security — HSTS
- developer.mozilla.org/en-US/docs/Web/HTTP/CSP — Content Security Policy
- securityheaders.com — Security header scanning and grading
- w3.org/WAI/WCAG21/quickref — WCAG 2.1 accessibility guidelines
