# GEO Audit Report: Katherine Elkins

**Audit Date:** 2026-03-03
**URL:** https://katherineelkins.com
**Business Type:** Academic / Personal (AI Safety Researcher)
**Pages Analyzed:** 7 (index, research, books, speaking, policy, blog, 404)

---

## Executive Summary

**Overall GEO Score: 80/100 (Good)** *(source code — see critical deployment issue below)*
**Live Site Score: ~40/100 (Poor)** *(deployment broken — netlify.toml misconfigured)*

katherineelkins.com has an exceptionally strong foundation for AI search visibility. The site features comprehensive JSON-LD structured data (Person, Book, ScholarlyArticle, FAQPage, CollectionPage, Blog, Event, ResearchProject), a near-perfect robots.txt welcoming 17 named AI crawlers, a high-quality llms.txt file with citation preferences and AI usage permissions, and dense, statistic-laden prose with original research findings that are highly citable by AI systems.

The strongest asset is the entity recognition layer: a 35K-byte Wikipedia article, Wikidata entry, Google Scholar profile (693+ citations), ORCID, and a Person schema with 14 `sameAs` identifiers. This puts the site well ahead of most academic personal sites for AI entity resolution.

**However, a critical deployment configuration error is blocking everything.** The `netlify.toml` is inside `public/` instead of at the repo root, causing Netlify to serve a stale older version of the site. All subpages, robots.txt, sitemap.xml, and llms.txt return HTTP 404 on the live site. Fixing this single file location will restore the full 80/100 score immediately.

### Top 3 Most Impactful Fixes

1. **Move `netlify.toml` to repo root** (fixes deployment — restores all scores)
2. **Expand schema on speaking.html and policy.html** (raises Schema score from 62 to ~85)
3. **Add DOI/URL links to all publications** (raises Content E-E-A-T and Citability)

---

## Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 79/100 | 25% | 19.75 |
| Brand Authority | 82/100 | 20% | 16.40 |
| Content E-E-A-T | 79/100 | 20% | 15.80 |
| Technical GEO | 92/100* | 15% | 13.80 |
| Schema & Structured Data | 62/100 | 10% | 6.20 |
| Platform Optimization | 76/100 | 10% | 7.60 |
| **Overall GEO Score** | | | **79.55 → 80/100** |

*Technical GEO scored on source code quality. Live site scores 38/100 due to deployment misconfiguration.*

### Platform Readiness Sub-Scores

| Platform | Score | Status |
|---|---|---|
| ChatGPT Web Search | 88/100 | Excellent |
| Google AI Overviews | 82/100 | Good |
| Google Gemini | 78/100 | Good |
| Perplexity AI | 68/100 | Fair |
| Bing Copilot | 64/100 | Fair |

---

## Critical Issues (Fix Immediately)

### 1. [CRITICAL] netlify.toml Deployment Misconfiguration

**Impact:** ALL subpages, robots.txt, sitemap.xml, llms.txt return 404 on the live site. Security headers not applied. Clean URL redirects not active. The live site is serving a stale older version.

**Root Cause:** `netlify.toml` is at `public/netlify.toml` — Netlify expects it at the repository root.

**Fix (2 changes):**
1. Move `public/netlify.toml` → repo root (`netlify.toml`)
2. Change `publish = "."` to `publish = "public"`

**Files:** `/Users/jonc/code/katherineelkins-com/public/netlify.toml` → `/Users/jonc/code/katherineelkins-com/netlify.toml`

### 2. [CRITICAL] Empty `_redirects` fallback file

**Impact:** No fallback redirect mechanism if netlify.toml fails.

**Fix:** Populate `public/_redirects` with:
```
/research  /research.html  200
/books     /books.html     200
/speaking  /speaking.html  200
/policy    /policy.html    200
/blog      /blog.html      200
```

**File:** `/Users/jonc/code/katherineelkins-com/public/_redirects`

---

## High Priority Issues

### 3. [HIGH] Speaking page JSON-LD — only 3 of 15+ events have schema (Score impact: +8)

**Current:** 3 Event entities in schema (OpenAI, RALLY, ICML)
**Target:** 7-10 Event entities with full required properties

**Missing high-value events:** Weill Cornell Medicine-Qatar, UNESCO MONDIACULT, Helix Center Roundtables, Concordia University

**All events also need:** `eventAttendanceMode` and `eventStatus` properties (required by Google for Event rich results)

**File:** `public/speaking.html`

### 4. [HIGH] Policy page missing mainEntity schema (Score impact: +8)

**Current:** Simple WebPage schema with no mainEntity
**Target:** WebPage with ItemList of 6 Role entities (NIST, Schmidt Sciences, UNESCO, Meta, OpenAI, Bloomberg)

**File:** `public/policy.html`

### 5. [HIGH] No Organization schema for Human-Centered AI Lab (Score impact: +5)

**Current:** Zero standalone Organization schema anywhere on the site
**Target:** ResearchOrganization schema on index.html for the Human-Centered AI Lab

**File:** `public/index.html`

### 6. [HIGH] 3 incorrect sameAs entries in Person schema (Score impact: entity confusion prevention)

**Current:** `sameAs` includes `humancenteredailab.org`, `archivalintelligenceai.org`, `jonachun.com`
**Problem:** These are not "same as" Katherine Elkins — they are organizations, a project, and a different person
**Fix:** Remove from `sameAs`, add as `affiliation` (labs/projects) and `colleague` (Jon Chun)

**File:** `public/index.html`

### 7. [HIGH] No speakable markup on any page (Score impact: +5)

**Current:** Zero `SpeakableSpecification` properties
**Target:** Add `speakable` with CSS selectors targeting headings and lead paragraphs on research.html, books.html, policy.html, speaking.html

**Files:** `public/research.html`, `public/books.html`, `public/policy.html`, `public/speaking.html`

### 8. [HIGH] Publications lack DOI/URL links (Score impact: +4 citability, +3 trust)

**Current:** 14 publications listed on books.html with zero DOI, arXiv, or direct paper links
**Impact:** AI systems cannot verify or link to actual publications; trust signal gap

**File:** `public/books.html` (HTML links + `url` properties in ScholarlyArticle schemas)

### 9. [HIGH] Homepage meta description too long (283 chars)

**Current:** 283 characters (search engines truncate at ~160)
**Suggested:** "AI safety researcher. Co-Founder, Human-Centered AI Lab. PI, NIST AI Safety Institute Consortium. Author, The Shapes of Stories (Cambridge UP, 2022)." (151 chars)

**File:** `public/index.html`

### 10. [HIGH] No `@id` entity linking across pages

**Current:** Each page creates thin, separate author Person objects
**Target:** Add `"@id": "https://katherineelkins.com/#person"` to Person schema on index.html; reference `{"@id": "https://katherineelkins.com/#person"}` as author on all subpages

**Files:** All 6 HTML pages

---

## Medium Priority Issues

### 11. [MEDIUM] No BreadcrumbList schema on any subpage (Score impact: +3)

Add simple 2-level breadcrumbs (Home → Page Name) to research, books, speaking, policy, blog.

### 12. [MEDIUM] No WebSite schema on homepage

Add WebSite schema with name, url, description, author. Omit SearchAction (no search functionality).

### 13. [MEDIUM] Books.html ItemList covers only 5 of ~14 publications

Expand schema to cover all publications visible on the page. Each needs `url`, `isPartOf` (venue), `datePublished`.

### 14. [MEDIUM] No `datePublished`/`dateModified` in page-level schemas

Add to all page schemas (CollectionPage, WebPage, Blog). Use ISO 8601 format.

### 15. [MEDIUM] No visible "last updated" dates on HTML pages

Only sitemap and llms.txt carry dates. Add visible `<time datetime="2026-03-03">` to each page.

### 16. [MEDIUM] Hero image missing `fetchpriority="high"` (LCP optimization)

Add `fetchpriority="high"` to the hero `<img>` on index.html for faster Largest Contentful Paint.

### 17. [MEDIUM] No RSS/Atom feed for content freshness detection

Create `/feed.xml` listing recent highlights, publications, media. Add `<link rel="alternate" type="application/rss+xml">` to all pages.

### 18. [MEDIUM] No `llms-full.txt` companion file

Create a full-text version of all page content in plain text. Current llms.txt is an excellent summary; the full-text version gives AI models complete content without HTML parsing.

### 19. [MEDIUM] Blog page is thin content (50 words, 8/100 citability)

The "coming soon" placeholder actively hurts content quality. Publishing even one 1,500-word post would transform this from a liability into an asset.

### 20. [MEDIUM] No privacy policy page

No privacy policy visible or linked. The site loads Google Fonts (sends user data to Google). Add `/privacy.html` and link from footer.

### 21. [MEDIUM] Content overlap between research.html and policy.html

NIST, Schmidt Sciences, and Bloomberg described on both pages. Differentiate: policy = governance impact; research = methodology and findings.

---

## Low Priority Issues

### 22. [LOW] No IndexNow protocol for Bing (Score impact: +5 on Bing Copilot)

Implement IndexNow API key and deploy webhook for Bing index freshness.

### 23. [LOW] No Bing Webmaster Tools verification

Add `<meta name="msvalidate.01" content="[CODE]">` and verify site.

### 24. [LOW] No `<time datetime="">` HTML elements for dates

Highlight cards, publication dates, speaking events should use `<time>` elements for machine-readable dates.

### 25. [LOW] og:image aspect ratio non-standard

Current headshot is 627x740px. OG recommended is 1200x630px. Consider creating a dedicated OG image.

### 26. [LOW] Book schemas missing `image` property (book covers)

### 27. [LOW] Missing 3 research areas from research.html schema

Only 4 of 7 research areas have ResearchProject entities. Missing: AI Governance, Translation & Affective AI, Human-Centered AI Education.

### 28. [LOW] No `rel="noopener"` on external links

External links in nav/footer should include `rel="noopener"`.

### 29. [LOW] Hero image could use WebP/AVIF format + `<picture>` element

65KB PNG → ~30KB WebP. Add `<picture>` with srcset for responsive sizing.

### 30. [LOW] No `<article>` tags wrapping individual content items

### 31. [LOW] Books.html heading hierarchy — group titles use H3 instead of H2

---

## Category Deep Dives

### AI Citability (79/100)

**Strengths:**
- Exceptional top-line finding: "77% of open-source models endorse prohibited actions under negation framing" — this is the single most citable passage on the site (89/100 citability score)
- SentimentArcs methodology definition is self-contained and quotable (82/100)
- Curriculum demographics with specific stats (61% women, 13% Black, 11% Latinx) score 82/100
- FAQPage schema provides directly extractable Q&A pairs (81/100)
- Dense specific statistics throughout: 95,000+ downloads, 198 countries, 300+ projects, $330K grant, 16 models, 14 scenarios

**Weaknesses:**
- Blog page scores 8/100 (no content)
- Speaking page entries are descriptive rather than data-rich (52/100)
- Policy page UNESCO and Bloomberg sections lack quantified outcomes (62/100)
- Statistics scattered across prose — no consolidated "by the numbers" block

**Per-Page Citability:**

| Page | Score | Notes |
|---|---|---|
| research.html | 83 | Highest density of citable findings |
| index.html | 81 | Strong bio, FAQPage schema |
| books.html | 72 | Good publication data, lacks quantified claims |
| policy.html | 62 | Strong NIST section; weaker others |
| speaking.html | 52 | Descriptive but thin on extractable facts |
| blog.html | 8 | No substantive content |

### Brand Authority (82/100)

**Strengths:**
- Wikipedia article: 35,533 bytes, 50+ internal links, 50+ external references, updated Feb 2026 — **30/30**
- Wikidata entry: Q130369935 with structured properties
- Google Scholar: 693+ citations, active profile
- Industry/niche presence across 20+ authoritative sources — **25/25**
- Media coverage: Forbes (Nov 2025), NPR/WOSU (Feb 2026), Christian Science Monitor (Feb 2026), Al Jazeera
- Academic presence: Cambridge UP, Oxford UP, ICML proceedings, Helix Center, WPI Global Lab, Digital Kenyon (95,000+ downloads)
- LinkedIn: Active professional profile — **9/10**

**Weaknesses:**
- Reddit: Absent (3/20) — critical gap for Perplexity/ChatGPT citation
- YouTube: No channel, no videos (3/15) — critical gap for Gemini
- GitHub: Profile exists but minimal visible activity

### Content E-E-A-T (79/100)

| Dimension | Score | Key Evidence |
|---|---|---|
| **Experience** | 19/25 | Original research data (77% finding), SentimentArcs methodology, 300+ student projects. Missing: first-person voice, failure/challenge discussion |
| **Expertise** | 22/25 | Ph.D. UC Berkeley, B.A. Yale, Cambridge UP + Oxford UP books, ICML oral (top 2%), publications in PMLA/Narrative/Frontiers. Wikipedia, ORCID, Scholar linked |
| **Authoritativeness** | 20/25 | NIST PI, Schmidt Sciences PI, UNESCO consultant, Meta AI member, OpenAI forum speaker, Forbes/NPR/CSM coverage. Exceptional institutional breadth |
| **Trustworthiness** | 16/25 | HTTPS+HSTS, clear ownership, contact email, institutional affiliation. Missing: privacy policy, inline source citation links, no publication DOIs/URLs |

**Content Metrics:**
- Total body content: ~3,950 words across 6 pages
- Readability: ~42 Flesch (College-level — appropriate for academic audience)
- Images: 1 (headshot only — critically under-imaged)
- AI content assessment: Highly Likely Human (dense with specifics, assertive voice, domain-crossing connections)

### Technical GEO (92/100 source; 38/100 live)

**Strengths (source code):**
- Static HTML — zero JavaScript rendering risk for AI crawlers
- CSS animation `.reveal` pattern is crawler-safe (defaults to `opacity: 1`)
- Comprehensive security headers: HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- Well-configured caching: HTML 1hr, CSS/JS/images 30 days, llms.txt 1 day
- Responsive design with 3 breakpoints (900px, 640px) + `prefers-reduced-motion`
- Print stylesheet included
- All viewport, lang, canonical tags correct
- Hero image has explicit `width="627" height="740"` (CLS prevention)
- Favicon: SVG + ICO + Apple Touch Icon

**Live deployment failures (38/100):**
- netlify.toml not read → all redirects, headers, caching rules not applied
- 5 of 6 critical URLs return 404 (research, books, speaking, policy, blog)
- robots.txt → 404
- sitemap.xml → 404
- llms.txt → 404
- Homepage serves stale older version with different fonts/colors

### Schema & Structured Data (62/100)

**Strengths:**
- Exceptional Person schema on index.html: 14 sameAs links (Wikipedia, Wikidata, ORCID, Google Scholar, LinkedIn, ResearchGate, etc.), hasCredential, memberOf, knowsAbout (15 topics) — best-in-class for academic sites
- FAQPage with 4 structured Q&A pairs — strong GEO signal
- JSON-LD exclusively (correct format), static HTML delivery (zero rendering risk)
- 11 schema blocks across 6 pages covering Person, Book (x2), ScholarlyArticle, FAQPage, CollectionPage (x2), WebPage (x2), Blog, Event (x3), ResearchProject (x4), ItemList (x2)

**Weaknesses:**
- No Organization schema anywhere (Human-Centered AI Lab has zero structured data)
- No speakable markup on any page
- speaking.html: only 3 of 15+ events have schema, events missing required properties
- policy.html: no mainEntity for 6 governance roles (enormous content-schema gap)
- books.html: only 5 of ~14 publications have schema
- 3 semantically incorrect sameAs entries (org URLs ≠ identity URLs)
- No BreadcrumbList, no WebSite schema, no dateModified on any page schema
- Subpage author objects are thin (no @id cross-reference to primary Person)

**Per-Page Schema Scores:**

| Page | Score | Key Issue |
|---|---|---|
| index.html | 78 | 3 wrong sameAs, no Organization, no speakable |
| books.html | 68 | Only 5/14 publications in schema |
| research.html | 65 | 3 missing research areas, ResearchProject is pending type |
| blog.html | 55 | Minimal (appropriate for "coming soon") |
| speaking.html | 42 | Only 3/15+ events, missing required Event properties |
| policy.html | 38 | No mainEntity, enormous content-schema gap |

### Platform Optimization (76/100)

**ChatGPT Web Search (88/100) — Strongest:**
- All 3 OpenAI crawlers explicitly allowed (GPTBot, OAI-SearchBot, ChatGPT-User)
- Wikipedia + Wikidata entity presence enables strong entity recognition
- llms.txt with explicit AI citation permission
- Dense factual content with quotable statistics
- Gap: some prose paragraphs too long (80-120 words vs. 40-60 ideal for extraction)

**Google AI Overviews (82/100):**
- Strong E-E-A-T signals across all dimensions
- FAQPage schema provides extractable Q&A
- Rich heading hierarchy (H1 > H2 > H3)
- Gap: no question-based headings, no comparison tables, no `<time>` elements

**Google Gemini (78/100):**
- Google Scholar profile (693+ citations) linked in schema
- Wikipedia presence feeds Knowledge Graph
- Gap: no YouTube presence, no `@id` for entity graph unification, no datePublished/dateModified

**Perplexity AI (68/100):**
- Both Perplexity crawlers allowed
- Strong primary source material
- Gap: zero Reddit presence (Perplexity's most-cited community source), no RSS feed, no downloadable research artifacts

**Bing Copilot (64/100):**
- LinkedIn and GitHub linked
- Clean HTML5 semantics
- Gap: no IndexNow protocol, no Bing Webmaster Tools verification, no speakable markup, no video content

---

## Quick Wins (Implement This Week)

1. **Move `netlify.toml` to repo root, change `publish = "."` to `publish = "public"`** — Fixes ALL deployment issues, restores full site. (5 min)
2. **Populate `_redirects` with clean URL rules** — Fallback redirect mechanism. (2 min)
3. **Fix 3 incorrect `sameAs` entries** — Move org/project/person URLs to `affiliation` and `colleague`. (10 min)
4. **Shorten homepage meta description** to 151 characters. (5 min)
5. **Add `fetchpriority="high"` to hero image** — LCP improvement. (1 min)

## 30-Day Action Plan

### Week 1: Fix Deployment + Schema Foundation
- [ ] Move `netlify.toml` to repo root and update publish path
- [ ] Populate `_redirects` as fallback
- [ ] Verify live site serves all 6 pages + robots.txt + sitemap.xml + llms.txt
- [ ] Fix 3 incorrect `sameAs` entries on Person schema
- [ ] Add `@id` to Person schema, reference across all pages
- [ ] Add Organization schema for Human-Centered AI Lab
- [ ] Add WebSite schema to homepage
- [ ] Add BreadcrumbList to all 5 subpages
- [ ] Shorten homepage meta description

### Week 2: Schema Expansion + Content
- [ ] Expand speaking.html events from 3 to 7-10 with full required properties
- [ ] Add mainEntity to policy.html with 6 governance Role entities
- [ ] Expand books.html ItemList to cover all ~14 publications
- [ ] Add DOI/URL links to all publications (HTML + schema)
- [ ] Add `speakable` property to research, books, policy, speaking schemas
- [ ] Add `datePublished`/`dateModified` to all page schemas
- [ ] Add visible "last updated" dates to each page using `<time>` elements

### Week 3: Technical + Platform Optimization
- [ ] Add `fetchpriority="high"` to hero image
- [ ] Add `<link rel="preload">` for hero image
- [ ] Create `/llms-full.txt` companion file
- [ ] Implement IndexNow protocol for Bing
- [ ] Verify site in Bing Webmaster Tools, add `msvalidate.01` meta tag
- [ ] Create RSS/Atom feed at `/feed.xml`
- [ ] Add question-based H2 headings to research.html for AIO extraction
- [ ] Add privacy policy page

### Week 4: Content + Off-Site Authority
- [ ] Publish first blog post (priority: "What I Learned as a NIST AI Safety PI")
- [ ] Add images/charts to research.html and speaking.html
- [ ] Add "By the Numbers" consolidated stats block to homepage or research page
- [ ] Create dedicated OG image (1200x630px) for social sharing
- [ ] Begin Reddit presence (post findings to r/MachineLearning, r/AISafety)
- [ ] Upload conference talks or short research videos to YouTube
- [ ] Add first-person perspective section to at least one page

---

## Appendix A: Pages Analyzed

| URL | Title | Schema Types | Citability | Schema Score | GEO Issues |
|---|---|---|---|---|---|
| / | Katherine Elkins — AI Researcher | Person, Book(x2), ScholarlyArticle, FAQPage | 81 | 78 | 3 wrong sameAs, no Org, meta desc too long |
| /research | Research — Katherine Elkins | CollectionPage, ResearchProject(x4) | 83 | 65 | 3 areas missing from schema |
| /books | Books & Publications | CollectionPage, ItemList, Book(x2), ScholarlyArticle(x3) | 72 | 68 | Only 5/14 pubs in schema, no DOI links |
| /speaking | Speaking — Katherine Elkins | WebPage, ItemList, Event(x3) | 52 | 42 | Only 3/15+ events, missing required props |
| /policy | Policy & Governance | WebPage | 62 | 38 | No mainEntity, huge content-schema gap |
| /blog | Blog — Katherine Elkins | Blog | 8 | 55 | No content (coming soon placeholder) |
| /404 | Page Not Found | (none) | N/A | N/A | Correct noindex, no schema needed |

## Appendix B: AI Crawler Coverage

| Crawler | User-Agent | Status |
|---|---|---|
| GPTBot | GPTBot | Allowed |
| OAI-SearchBot | OAI-SearchBot | Allowed |
| ChatGPT-User | ChatGPT-User | Allowed |
| ClaudeBot | ClaudeBot | Allowed |
| Claude-SearchBot | Claude-SearchBot | Allowed |
| PerplexityBot | PerplexityBot | Allowed |
| Perplexity-User | Perplexity-User | Allowed |
| Google-Extended | Google-Extended | Allowed |
| Applebot-Extended | Applebot-Extended | Allowed |
| Amazonbot | Amazonbot | Allowed |
| Bytespider | Bytespider | Allowed |
| CCBot | CCBot | Allowed |
| Meta-ExternalAgent | Meta-ExternalAgent | Allowed |
| Cohere-ai | Cohere-ai | Allowed |
| Diffbot | Diffbot | Allowed |
| YouBot | YouBot | Allowed |
| DuckAssistBot | DuckAssistBot | Allowed |
| Default (*) | * | Allowed |

## Appendix C: Brand Mention Map

| Platform | Status | Score |
|---|---|---|
| Wikipedia | 35K article, 50+ refs, updated Feb 2026 | 30/30 |
| Google Scholar | 693+ citations, active profile | Included |
| LinkedIn | Active professional profile | 9/10 |
| Industry/Niche (20+ sources) | CUP, OUP, ICML, Forbes, NPR, CSM, Al Jazeera, Digital Kenyon, gwern.net | 25/25 |
| Reddit | Absent | 3/20 |
| YouTube | Absent | 3/15 |
| **Total** | | **82/100** |

## Appendix D: E-E-A-T Signal Inventory

| Signal Type | Present | Details |
|---|---|---|
| Ph.D. credentials | Yes | UC Berkeley, Comparative Literature |
| Institutional affiliation | Yes | Kenyon College (Professor) |
| Federal government role | Yes | NIST AI Safety Institute Consortium PI |
| International organization role | Yes | UNESCO MONDIACULT consultant |
| Major philanthropy grant | Yes | Schmidt Sciences HAVI ($330K PI) |
| Industry engagement | Yes | Meta AI, OpenAI, Bloomberg, Notre Dame-IBM |
| Peer-reviewed publications | Yes | ICML (top 2%), PMLA, Narrative, Frontiers |
| Books with major publishers | Yes | Cambridge UP, Oxford UP |
| Wikipedia article | Yes | 35K bytes, actively maintained |
| ORCID identifier | Yes | 0000-0001-9887-4854 |
| Google Scholar profile | Yes | 693+ citations |
| Media coverage | Yes | Forbes, NPR, Christian Science Monitor |
| Original research findings | Yes | 77% negation failure rate, SentimentArcs |
| Contact information | Yes | info@katherineelkins.com |
| HTTPS + security headers | Yes | HSTS, CSP, full header suite |
| Privacy policy | No | Missing |
| Physical address | No | Missing (expected for academic) |
| First-person testimony | No | Third-person academic voice throughout |
| Inline source citations | Partial | Claims made without DOI/URL links |

---

*Report generated by GEO Audit Orchestration (5 parallel subagent analysis). Scores assessed on source code at `/Users/jonc/code/katherineelkins-com/public/`.*
