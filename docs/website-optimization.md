# katherineelkins.com — SEO/GEO Optimization Report

**Date**: 2026-03-03
**Site**: https://katherineelkins.com
**Architecture**: Static multi-page HTML, Netlify hosting, no build system
**Pages audited**: index, research, books, speaking, policy, blog (6 pages)

---

## 1. Executive Summary

**Overall GEO/SEO Grade: B+** (strong foundation, meaningful gaps in social/sharing metadata and AI crawler coverage)

The site has unusually strong GEO fundamentals for a personal academic site: comprehensive JSON-LD schema on 5 of 6 pages, an excellent llms.txt file, explicit AI crawler allowances in robots.txt, rich long-form content with high E-E-A-T signals, and a multi-page architecture optimized for independent indexing. The homepage is the best-optimized page, with full Open Graph, Twitter Card, and multiple JSON-LD blocks.

**Top 3 most impactful fixes:**

1. **Add og:image and Twitter Cards to 5 pages** — Social sharing and AI platform previews currently fall back to generic defaults on every page except the homepage.
2. **Add favicon and apple-touch-icon** — Every browser tab, bookmark, and mobile home screen currently shows a blank icon, undermining perceived professionalism.
3. **Add missing 2025-2026 AI crawler user-agents to robots.txt** — Several new AI search crawlers (OAI-SearchBot, ChatGPT-User, DuckAssistBot) are not explicitly welcomed, which may reduce citation priority on those platforms.

---

## 2. Ranked Critiques (Descending Criticality)

### CRITICAL (90-100)

#### #1 — [95] Missing og:image on 5 of 6 pages

**Current state**: Only `index.html` has `og:image` (pointing to `sml-headshot-katherine-elkins.png`). The research, books, speaking, policy, and blog pages have no og:image tag.

**Impact**: When any non-homepage URL is shared on social media, messaging apps, LinkedIn, Slack, or AI platforms that generate preview cards, the preview will either show no image or a random fallback. For an academic researcher whose pages are frequently shared by colleagues and journalists, this is a significant visibility loss.

**Affected pages**: research.html, books.html, speaking.html, policy.html, blog.html

**Remediation**:
- [ ] Add `<meta property="og:image" content="https://katherineelkins.com/sml-headshot-katherine-elkins.png">` to all 5 pages
- [ ] Consider creating page-specific images for higher-traffic pages (research, books) in the future

---

#### #2 — [93] No favicon or apple-touch-icon (site-wide)

**Current state**: No `<link rel="icon">`, `<link rel="shortcut icon">`, or `<link rel="apple-touch-icon">` in any page's `<head>`. No `.ico`, `.png`, or `.svg` favicon files in `public/`.

**Impact**: Every browser tab shows the default blank/globe icon. Bookmarks are unidentifiable. Mobile home screen shortcuts show a generic icon. This is one of the most visible signals of site polish — its absence is noticed subconsciously by every visitor.

**Remediation**:
- [ ] Create favicon files: `favicon.ico` (16x16, 32x32), `favicon.svg` (scalable), `apple-touch-icon.png` (180x180)
- [ ] Add to all pages: `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`, `<link rel="icon" href="/favicon.ico" sizes="32x32">`, `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`
- [ ] Consider a monogram or simple mark from the site's accent color (#7B2D3B)

---

#### #3 — [90] Missing or incomplete Twitter Card metadata on 5 pages

**Current state**: Only `index.html` has full Twitter Card metadata (card, title, description, image). `research.html` has `twitter:card` but no title/description/image. The remaining 4 pages have no Twitter Card tags at all.

**Impact**: Links shared on X/Twitter and platforms that consume Twitter Card metadata generate poor previews. For an academic researcher who is cited in media coverage and shared by colleagues, this reduces click-through and professional impression.

**Affected pages**: research (partial), books (none), speaking (none), policy (none), blog (none)

**Remediation**:
- [ ] Add to all 5 pages: `<meta name="twitter:card" content="summary">`, `<meta name="twitter:title">`, `<meta name="twitter:description">`, `<meta name="twitter:image">`
- [ ] Match values to each page's og:title, og:description, and og:image for consistency

---

#### #4 — [90] Blog page has zero JSON-LD schema

**Current state**: `blog.html` is the only page with no `<script type="application/ld+json">` block. Every other page has at least one JSON-LD schema.

**Impact**: AI systems and search engines get no structured data signal from the blog page. While the page is currently a "coming soon" placeholder, it is live, linked from navigation, and indexed in sitemap.xml. The absence of any schema makes it invisible to structured-data-driven AI extraction.

**Remediation**:
- [ ] Add a minimal WebPage or Blog schema with author, description, and url properties
- [ ] When actual blog posts are added, use BlogPosting schema for each entry

---

### HIGH (70-89)

#### #5 — [85] Missing modern AI crawler user-agents in robots.txt

**Current state**: robots.txt explicitly welcomes 12 AI crawlers: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Cohere-ai, Amazonbot, Meta-ExternalAgent, Bytespider, CCBot, Diffbot, YouBot. This is a strong foundation.

However, several crawlers active in 2025-2026 are missing:
- **OAI-SearchBot** — OpenAI's web search crawler (distinct from GPTBot, used for real-time search in ChatGPT)
- **ChatGPT-User** — ChatGPT browsing mode
- **Claude-SearchBot** — Anthropic's search crawler (distinct from ClaudeBot training crawler)
- **Perplexity-User** — Perplexity's real-time search agent
- **DuckAssistBot** — DuckDuckGo's AI answer crawler
- **Timpibot** — Timpi decentralized search
- **Scrapy** — Common framework used by some AI indexing services
- **ImagesiftBot** — AI image search

**Impact**: While the wildcard `User-agent: *` / `Allow: /` technically covers all unlisted agents, explicit allowance serves as a signal to AI platforms that the site actively welcomes AI crawling. Some platforms may prioritize explicitly-welcomed sources.

**Remediation**:
- [ ] Add explicit `User-agent` / `Allow: /` blocks for: OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Perplexity-User, DuckAssistBot

---

#### #6 — [82] No custom 404 page

**Current state**: No `404.html` in the publish directory. Users who hit a broken link see Netlify's default 404 page, which has no site branding, navigation, or helpful links.

**Impact**: Dead links from external sites (academic citations, social shares) deposit visitors into a dead end with no way to reach content. A branded 404 with navigation and suggested pages recovers these visitors. AI crawlers that encounter 404s also benefit from structured content on the error page.

**Remediation**:
- [ ] Create `public/404.html` with site nav, a helpful message, and links to key pages
- [ ] Netlify automatically serves `404.html` for missing routes — no config change needed

---

#### #7 — [80] Missing HSTS (Strict-Transport-Security) header

**Current state**: `netlify.toml` sets `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy` — but no `Strict-Transport-Security` header.

**Impact**: Without HSTS, browsers don't know to always use HTTPS, leaving a window for protocol downgrade attacks. While Netlify enforces HTTPS at the CDN level, the missing header is flagged by security scanners (Mozilla Observatory, securityheaders.com) and can lower trust scores that affect search ranking.

**Remediation**:
- [ ] Add to netlify.toml `[[headers]]` for `/*`: `Strict-Transport-Security = "max-age=31536000; includeSubDomains"`

---

#### #8 — [78] Content freshness — identical lastmod dates, no visible update signals

**Current state**: All 6 pages and llms.txt in `sitemap.xml` share the same `<lastmod>2026-03-01</lastmod>`. No visible "last updated" date on any page.

**Impact**: Search engines and AI systems use lastmod as a freshness signal. Identical dates across all pages suggest bulk timestamps rather than actual modification tracking, which reduces the signal's credibility. For an actively publishing researcher, freshness signals are important for discovery in AI search results.

**Remediation**:
- [ ] Update sitemap.xml lastmod dates to reflect actual last-edit dates for each page
- [ ] Consider adding a subtle "Last updated: [date]" line to research and publications pages
- [ ] Use a deployment script or git hook to auto-update sitemap lastmod on each deploy

---

#### #9 — [75] Incomplete og:type and og:site_name on 4-5 pages

**Current state**:
| Page     | og:type     | og:site_name          |
|----------|-------------|-----------------------|
| index    | profile     | Katherine Elkins      |
| research | website     | (missing)             |
| books    | (missing)   | (missing)             |
| speaking | (missing)   | (missing)             |
| policy   | (missing)   | (missing)             |
| blog     | (missing)   | (missing)             |

**Impact**: `og:type` helps social platforms and AI systems categorize the page. `og:site_name` provides entity association. Missing values lead to generic "website" fallback categorization and lose the "Katherine Elkins" brand association in preview cards.

**Remediation**:
- [ ] Add `<meta property="og:type" content="website">` to books, speaking, policy, blog
- [ ] Add `<meta property="og:site_name" content="Katherine Elkins">` to all 5 non-index pages

---

### MEDIUM (50-69)

#### #10 — [65] Speaking page JSON-LD covers only 3 of 15+ events

**Current state**: The speaking page JSON-LD lists 3 Event objects (OpenAI, RALLY, ICML). The HTML content describes 15+ events across 4 groups (keynotes, conferences, industry, media).

**Impact**: AI systems extracting structured data only "see" 3 speaking engagements. The rich detail of UNESCO, Weill Cornell, Concordia, Bloomberg, Helix Center, and media appearances exists only as unstructured HTML.

**Remediation**:
- [ ] Expand the Event list in JSON-LD to cover at least the top 8-10 engagements
- [ ] Include media appearances as distinct Event or MediaObject entries

---

#### #11 — [62] Policy page lacks mainEntity schema for individual governance roles

**Current state**: The policy page JSON-LD is a WebPage with an "about" keywords array but no `mainEntity` listing the individual organizations and roles. Compare to the research page, which has a detailed `mainEntity` array of ResearchProject objects.

**Impact**: AI systems extracting Katherine Elkins' governance credentials from this page get keywords but not structured role-organization relationships. This page is directly relevant for queries like "Who is on the NIST AI Safety Institute Consortium?" where structured data drives citation.

**Remediation**:
- [ ] Add a `mainEntity` with Organization/Role entries for: NIST CAISI, Schmidt Sciences HAVI, UNESCO, Meta, OpenAI, Bloomberg
- [ ] Model after the research page's ResearchProject pattern

---

#### #12 — [60] Missing Content-Security-Policy header

**Current state**: No CSP header in netlify.toml. The site loads external resources from fonts.googleapis.com and fonts.gstatic.com only.

**Impact**: CSP prevents XSS and injection attacks. While the risk is low for a static site, the missing header is flagged by security scanners. A basic CSP appropriate for this site would be straightforward.

**Remediation**:
- [ ] Add CSP header: `Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'"`

---

#### #13 — [58] llms.txt missing "last updated" date, citation format, AI usage preferences

**Current state**: The llms.txt file is comprehensive and well-structured with identity, roles, research areas, publications, speaking, links, and press. However, it lacks:
- A "last updated" date
- A preferred citation format (how AI should cite Katherine Elkins)
- AI usage preferences (whether AI systems may quote, summarize, etc.)

**Impact**: The llms.txt standard (llmstxt.org) recommends including update dates for freshness and citation preferences for accurate attribution. For a researcher where precise citation matters, this is a meaningful gap.

**Remediation**:
- [ ] Add `> Last updated: 2026-03-03` after the opening summary block
- [ ] Add a `## Preferred Citation` section with formatted citation
- [ ] Add a `## AI Usage` section indicating content may be quoted/summarized with attribution

---

#### #14 — [55] Hero image missing explicit width/height attributes (CLS risk)

**Current state**: `index.html` line 296: `<img src="sml-headshot-katherine-elkins.png" alt="..." class="hero-photo reveal">` — no `width` or `height` attributes.

**Impact**: Without intrinsic dimensions, the browser cannot reserve space for the image before it loads, causing Cumulative Layout Shift (CLS). CLS is a Core Web Vital that affects search ranking. CSS sets `width: 300px` but the browser doesn't know the aspect ratio until the image loads.

**Remediation**:
- [ ] Add `width="300" height="[actual height]"` to the `<img>` tag
- [ ] Check actual image dimensions and set accordingly

---

#### #15 — [52] Static asset caching uses "immutable" without versioned filenames

**Current state**: `netlify.toml` sets `Cache-Control: public, max-age=31536000, immutable` for `*.css`, `*.png`, `*.jpg`, `*.js`. But filenames like `style.css` and `sml-headshot-katherine-elkins.png` are not content-hashed or versioned.

**Impact**: The `immutable` directive tells browsers to never revalidate. If `style.css` is updated, returning visitors may see stale styles for up to a year. Without a build system to hash filenames, `immutable` is incorrect.

**Remediation**:
- [ ] Change static asset caching to `Cache-Control = "public, max-age=2592000"` (30 days, no immutable)
- [ ] OR add query-string versioning in HTML: `style.css?v=20260303` (but this requires manual updates)

---

### LOW (20-49)

#### #16 — [40] No `<main>` landmark element on any page

**Current state**: No page uses `<main>` or `role="main"`. Content goes directly from `<nav>` into `<header>` and `<section>` elements.

**Impact**: Screen readers and accessibility tools use landmark elements to navigate page structure. `<main>` is the primary landmark that indicates where the main content begins. Its absence makes the site harder to navigate for assistive technology users. Some AI crawlers also use landmark elements as content-boundary signals.

**Remediation**:
- [ ] Wrap the primary content area of each page (between nav and footer) in `<main>`

---

#### #17 — [38] No aria-current="page" on active nav links

**Current state**: Active nav links use `class="active"` for visual styling but lack `aria-current="page"`, which communicates the current page to screen readers.

**Impact**: Screen reader users cannot distinguish the current page in navigation. This is a WCAG 2.1 Level AA concern.

**Remediation**:
- [ ] Add `aria-current="page"` to the active nav `<a>` element on each page (alongside the existing `class="active"`)

---

#### #18 — [35] No skip navigation link

**Current state**: No skip-to-content link at the top of any page.

**Impact**: Keyboard and screen reader users must tab through the entire navigation on every page load before reaching content. A skip link is a basic accessibility expectation (WCAG 2.1 Level A).

**Remediation**:
- [ ] Add `<a href="#content" class="skip-link">Skip to content</a>` as the first element in `<body>`
- [ ] Add `id="content"` to the main content area
- [ ] Style the skip link as visually hidden until focused

---

#### #19 — [30] No print stylesheet

**Current state**: `style.css` has no `@media print` rules.

**Impact**: Printing any page includes the fixed nav, full-color backgrounds, and decorative elements. Academics and journalists who print or PDF research pages get poor output. Low priority but straightforward to add.

**Remediation**:
- [ ] Add `@media print` rules to style.css: hide nav, footer, decorative elements; use black text; remove backgrounds

---

#### #20 — [25] No `<meta name="author">` tags

**Current state**: No page includes `<meta name="author" content="Katherine Elkins">`.

**Impact**: Minor. Most modern search engines and AI systems extract authorship from JSON-LD Person schema (which is present). However, some legacy systems and simpler AI parsers look for the meta author tag as a quick signal.

**Remediation**:
- [ ] Add `<meta name="author" content="Katherine Elkins">` to all 6 pages

---

## 3. Completed Optimizations (Prior Work)

The following optimizations are already in place as of 2026-03-03:

### Site Architecture
- [x] Multi-page architecture with independent URLs, canonical links, and JSON-LD per page
- [x] Clean URLs via Netlify redirects (`/research` serves `research.html`)
- [x] Shared CSS in `style.css` with page-specific inline `<style>` blocks where needed
- [x] Mobile-responsive design with hamburger nav and responsive grid layouts
- [x] Google Fonts loaded via `<link>` with `preconnect` hints for performance

### JSON-LD Structured Data
- [x] **index.html**: Person schema (comprehensive: name, image, description, jobTitle, worksFor, alumniOf, sameAs with 14 URLs, knowsAbout, hasCredential, memberOf), Book schema (2 books), ScholarlyArticle schema, FAQPage schema (4 Q&A pairs)
- [x] **research.html**: CollectionPage schema with mainEntity array of 4 ResearchProject objects (NIST, Archival Intelligence, Multi-Agent Simulation, SentimentArcs)
- [x] **books.html**: CollectionPage schema with ItemList of 5 publications (2 books, 3 articles)
- [x] **speaking.html**: WebPage schema with ItemList of 3 Event objects
- [x] **policy.html**: WebPage schema with about keywords
- [x] **blog.html**: (none — identified as gap above)

### Open Graph / Social
- [x] **index.html**: Full OG (title, description, type, url, image, site_name) + full Twitter Card (card, title, description, image)
- [x] All 6 pages: og:title, og:description, og:url present
- [x] All 6 pages: canonical link present

### GEO-Specific Assets
- [x] `llms.txt` — comprehensive plain-text summary with identity, roles, research areas, publications, speaking, collaborator, links, and press sections
- [x] `robots.txt` — wildcard allow + 12 named AI crawlers explicitly welcomed
- [x] `sitemap.xml` — all 6 pages + llms.txt with priority and changefreq
- [x] `netlify.toml` — security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy), HTML caching (1 hour), llms.txt caching with correct Content-Type

### Content Quality / E-E-A-T
- [x] Strong Experience signals: first-person narrative of NIST PI work, curriculum creation, media coverage
- [x] Strong Expertise signals: Ph.D. UC Berkeley, publications in Nature-tier venues (ICML), Cambridge UP, Oxford UP
- [x] Strong Authoritativeness signals: Wikipedia page, Wikidata entry, ORCID, Google Scholar, institutional affiliations
- [x] Strong Trustworthiness signals: institutional .edu affiliation, named funders (NIST, Schmidt Sciences, UNESCO)
- [x] Reveal animations are crawler-safe (content visible by default, animation added via JS)
- [x] `prefers-reduced-motion` respected in CSS and JS

---

## 4. Platform-Specific GEO Notes

### Google AI Overviews
- **Strengths**: Rich JSON-LD schema, clean URL structure, independent page indexing, high E-E-A-T signals
- **Recommendation**: Ensure `dateModified` appears in JSON-LD for freshness signals. Google AI Overviews heavily weight recency for trending topics like AI safety.
- **FAQ schema**: The homepage FAQPage is well-positioned for featured snippet / AI Overview extraction.

### ChatGPT (OpenAI)
- **Strengths**: GPTBot allowed in robots.txt, llms.txt available for context
- **Gap**: OAI-SearchBot and ChatGPT-User not explicitly listed. These are the crawlers used for ChatGPT's real-time web search (distinct from GPTBot, which is used for training data).
- **Recommendation**: Add both to robots.txt. Ensure all pages have complete meta descriptions, as ChatGPT web search relies heavily on meta description content for generating answer snippets.

### Perplexity
- **Strengths**: PerplexityBot allowed, rich long-form content with inline citations (e.g., "77% of the time"), named sources
- **Gap**: Perplexity-User not listed (the real-time search agent)
- **Recommendation**: Perplexity heavily rewards content that includes specific numbers, named studies, and direct quotable statements. The site excels here. Add Perplexity-User to robots.txt.

### Claude (Anthropic)
- **Strengths**: ClaudeBot allowed, llms.txt is the ideal format for Claude's context window
- **Gap**: Claude-SearchBot not listed
- **Recommendation**: The llms.txt file is unusually well-structured for Claude consumption. Adding a "last updated" date and citation format would further improve accuracy of Claude-generated citations.

### Gemini (Google)
- **Strengths**: Standard Google indexing + structured data. Google-Extended allowed.
- **Recommendation**: Gemini uses Google's full web index. The JSON-LD Person schema with sameAs links to Wikipedia and Wikidata is the strongest signal for entity recognition in Gemini. Ensure the sameAs URLs remain valid.

### Bing Copilot (Microsoft)
- **Strengths**: Bingbot inherits wildcard Allow. Standard SEO fundamentals are solid.
- **Recommendation**: Bing Copilot relies on Bing's index. Social proof signals (og:image, Twitter Cards) influence Bing ranking more than Google. Fixing the missing social metadata (#1, #3, #9) disproportionately benefits Bing Copilot visibility.

### General Academic Researcher GEO Strategy
For a site like katherineelkins.com — representing an individual researcher with institutional affiliations — the highest-ROI GEO investments are:
1. **Entity disambiguation**: The Person schema + sameAs links to Wikipedia/Wikidata are the single most important GEO signals. Already strong.
2. **Quotable claim density**: Specific findings ("77% of open-source models endorse prohibited actions") are the most citeable units. The site has excellent quotable density.
3. **Institutional triangulation**: Being named in NIST, Schmidt Sciences, UNESCO, and media creates cross-source validation that AI systems use for confidence scoring.
4. **llms.txt as first-party authority**: AI systems increasingly treat llms.txt as a canonical self-description. This file should be updated with each significant development.

---

## 5. Remediation Priority Order

For maximum impact with minimum effort, implement in this order:

| Priority | Critique # | Task | Effort |
|----------|-----------|------|--------|
| 1 | #1, #3, #9 | Add og:image, twitter cards, og:type, og:site_name to 5 pages | 30 min |
| 2 | #2 | Create and add favicon files | 45 min |
| 3 | #5 | Add missing AI crawler user-agents to robots.txt | 5 min |
| 4 | #4 | Add JSON-LD to blog page | 10 min |
| 5 | #7 | Add HSTS header to netlify.toml | 2 min |
| 6 | #13 | Add last-updated, citation, AI usage sections to llms.txt | 15 min |
| 7 | #6 | Create 404.html with navigation | 30 min |
| 8 | #15 | Fix immutable caching to use reasonable max-age | 2 min |
| 9 | #14 | Add width/height to hero image | 5 min |
| 10 | #16-18 | Accessibility: main element, aria-current, skip nav | 30 min |
| 11 | #8 | Differentiate sitemap lastmod dates | 10 min |
| 12 | #10-11 | Expand speaking and policy page JSON-LD | 45 min |
| 13 | #12 | Add Content-Security-Policy header | 15 min |
| 14 | #20 | Add meta author tags | 5 min |
| 15 | #19 | Add print stylesheet | 15 min |

---

## 6. Sources

- llmstxt.org — llms.txt standard specification
- web.dev/articles/vitals — Core Web Vitals (CLS, LCP, INP)
- schema.org/Person, schema.org/FAQPage, schema.org/Event — JSON-LD type references
- developers.google.com/search/docs/appearance/structured-data — Google structured data documentation
- OpenAI crawler documentation (platform.openai.com/docs/bots) — GPTBot, OAI-SearchBot, ChatGPT-User
- Anthropic crawler documentation — ClaudeBot, Claude-SearchBot
- developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security — HSTS specification
- developer.mozilla.org/en-US/docs/Web/HTTP/CSP — Content Security Policy reference
- securityheaders.com — Security header scanning and grading
