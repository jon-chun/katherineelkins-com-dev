# katherineelkins.com — Rebuild Spec Sheet
*Prepared March 2026 · For use in a new conversation with full context*

---

## 0. HOW TO USE THIS DOCUMENT

Developed across a multi-session strategic planning conversation. Strategic framing in §1 is **fixed** — a new conversation should go straight to implementation. The content inventory in §4 defines what goes where and why.

**Platform:** Netlify (static site)  
**Build approach:** Subpages for all research areas; use Claude Code / AI agents for build  
**llms.txt:** ✅ Live at `https://katherineelkins.com/llms.txt` — comprehensive; minor corrections needed (§3d)  
**Blog:** Formal essays (not informal posts)

---

## 1. STRATEGIC POSITIONING (FIXED)

### Primary identity signal
**AI Safety Researcher · Co-Founder, Human-Centered AI Lab · Author**

### Authority anchors (lead with these)
- PI, NIST AI Safety Institute Consortium (representing MLA)
- PI, Schmidt Sciences HAVI ("Archival Intelligence")
- Co-Founder, Human-Centered AI Lab, Inc. (Ohio nonprofit, est. 2016)

### Kenyon appears **late** — institutional context only, not the frame

### Audience hierarchy
1. AI safety / policy hiring (think tanks, institutes, federal agencies, labs)
2. Trade press / book agents (AI trade book + *Knowing Otherwise* in progress)
3. iSchool / center director searches (R1 Human-Centered AI positions)
4. Academic hiring committees (comp lit, English, digital humanities)
5. Journalists / media
6. Students / general public

### The coherent argument across the whole body of work

**Early work (the philosophical argument itself — purely humanistic):**  
What is the relationship between embodied experience — consciousness, memory, perception, time — and the systems built to represent it? This question runs through Plato, Wordsworth, Baudelaire, Proust, Woolf, Kafka, drawing on neuroscience and cognitive science. *Knowing Otherwise* is this argument's fullest form: mechanistic/juridical models of knowing fail to capture what literature, body, and mind actually enact — knowledge that is embodied, relational, temporal, responsive.

**AI work (the same argument extended to its sharpest contemporary test case):**  
What happens when machines attempt what the early work showed was distinctively human? The AI work doesn't pivot away from the early work — it *uses* that prior account to compare, contrast, and evaluate machine cognition. AI makes those questions newly tractable and newly urgent.

**The rhetorical frame for the site:**  
Not "a humanist who turned to AI." Not "two careers." One continuous inquiry: *a philosopher of knowing who found in AI the most urgent contemporary test case for questions she had been asking throughout her career.*

> **Note on aging language:** Do NOT use phrases like "questions she had been asking for decades" — implies too much elapsed time. Use "throughout her career" or "questions that have always been central to her work."

---

## 2. WHAT THE CURRENT SITE DOES WELL (KEEP)

- Warm off-white palette (`#F5F0EB` range), serif typography — right register
- "AI SAFETY · RESEARCH · AUTHOR" tag pill
- Hero credentials block structure (PI, NIST / PI, Schmidt / Co-Founder)
- Research page timeline (2016 → present) — shows anticipation, not reaction
- Publication list with citation counts
- Nav structure: About, Research, Books, Speaking, Blog
- llms.txt — comprehensive; minor corrections only

---

## 3. WHAT NEEDS TO CHANGE

### 3a. Scroll / density problem (HIGH PRIORITY)
Pages currently too long and dense — attempting to serve easy top-level takeaway AND SEO depth on the same page creates effortful, messy reading.

**Solution: subpages (confirmed)**  
- `/research` = index page with section cards only (title + 2 sentences + key credential)
- `/research/ai-safety`, `/research/archival-intelligence`, etc. = full prose subpages
- Each subpage gets its own URL, `<title>`, meta description, and JSON-LD
- Same treatment for Speaking: `/speaking` = grid; `/speaking/keynotes` = full list
- Build with Claude Code / agents — structure carefully, one subpage at a time

### 3b. Hero refinements
- Opening sentence: state the unifying argument (see §1) — not just "AI researcher"
- Remove "for decades" or any phrasing that ages the work
- Social links: convert from text list to icon links
- Headshot: definitive placement, high contrast

### 3c. Missing or underdeveloped pages
- **CV page** — three versions (see §4e)
- **Books-in-progress section** — *Knowing Otherwise* + AI trade book (see §4c)
- **Media & Podcasts page** — new; press AND audio appearances (see §4f)
- **Speaking page** — booking CTA prominent; topic tiles revised (see §4d)

### 3d. Content corrections needed

**SentimentArcs attribution:**  
llms.txt currently says Kate is "Creator of SentimentArcs" — **incorrect**. Jon Chun created SentimentArcs. Kate's *Shapes of Stories* builds on and uses it. Fix everywhere: "co-developed the SentimentArcs methodology with Jon Chun" or attribute clearly to Jon.

**Student research stat:**  
95K downloads / 4,000+ institutions = **mentored student research projects archived on Digital Kenyon** — NOT SentimentArcs downloads. Currently conflated in llms.txt. Separate these clearly throughout.

***The Shapes of Stories* format:**  
This is a **Cambridge Element** (short-form CUP publication), not a full-length monograph. Label correctly for academic audiences.

***The Shapes of Cinderella* format:**  
This is a **peer-reviewed article** in the journal *Humanities* (2025), not a standalone book. List under publications, not Books page.

**OUP Proust volume:**  
Kate **edited** the volume, **wrote the introduction**, and **contributed one essay**. Not sole author, not merely editor. Formula: "*Proust's In Search of Lost Time: Philosophical Perspectives*, editor and contributor (OUP, 2022)"

***Humanities* special issue:**  
Kate **edited a special issue of *Humanities*** in 2025. Confirm topic. List separately on Books/Publications page as: "Special Issue Editor, *Humanities*, 2025: [topic]"

**Knowing Otherwise framing:**  
The early literary/philosophical work is not background — it IS the argument. Fix all site language that implies "previous career" or "before AI."

### 3e. Contact form (replace bare email)
**Use Netlify Forms** — native, free tier, no backend required.  
Fields: Name · Email · Inquiry type (dropdown: Speaking / Press / Academic / General) · Message  
Bare email gets harvested for spam; form routes properly and signals professionalism to agents/bureaus.

### 3f. Speaking topics — revised
**REMOVE** from topic tiles:
- Higher Education / Curriculum (Kate doesn't want to foreground this)

**KEEP / ADD:**
- Stories and AI: What Machines Reveal About Narrative
- Where AI Is Going: Safety, Governance, and What Comes Next
- AI Safety & Linguistic Vulnerability
- Cultural Heritage and AI
- [Any topic that emerges from Atlantic essay / *Knowing Otherwise* argument]

---

## 4. PAGE-BY-PAGE CONTENT SPEC

### 4a. Homepage / About

**URL:** `https://katherineelkins.com/`

**Hero (above fold):**
```
[TAG PILL]  AI SAFETY · RESEARCH · AUTHOR

Katherine Elkins

[Opening sentence — the unifying argument, ~25 words, NO aging language]
Draft: "Her work asks what happens to knowledge, creativity, and 
authority when machines attempt what only humans were thought to 
do — and uses literature as the measure."

Co-Founder & PI, Human-Centered AI Lab
PI, NIST AI Safety Institute Consortium
PI, Schmidt Sciences HAVI

[Icon links: Wikipedia · Google Scholar · GitHub · LinkedIn · ORCID · Academia · ResearchGate · Contact]
```

**Body paragraphs:**
- Para 1: The continuous inquiry — philosophy of embodied knowing → AI as its sharpest test (not a pivot)
- Para 2: NIST + Schmidt as current anchor work
- Para 3: 2016 founding, what makes it distinctive
- Para 4: Cambridge Element, OUP volume (editor + contributor), Audible courses

**Recent activity feed:** Keep current format; extend to 2026.

---

### 4b. Research (index + subpages)

**Index URL:** `https://katherineelkins.com/research`  
Cards only — title + 2 sentences + key credential/stat. No prose on index.

**Subpages:**

| URL | Title |
|-----|-------|
| `/research/ai-safety` | AI Safety & LLM Evaluation |
| `/research/computational-social-science` | Computational Social Science |
| `/research/language-narrative` | Language, Narrative, and Machine Intelligence |
| `/research/archival-intelligence` | Archival Intelligence |
| `/research/governance` | AI Governance & Comparative Regulation |
| `/research/foundations` | Foundations: Embodied Experience, Memory, and Representation |

**Foundations subpage — critical framing fix:**  
This is not "old work before AI." Explicit framing: *"These essays establish the philosophical position that all the work above extends: mechanistic models of knowing fail to capture what consciousness, literature, and language actually do. AI has made this claim newly urgent and newly testable — but the claim itself is not new to this work."*

**Content fixes across subpages:**
- Fix SentimentArcs attribution (§3d)
- Fix student research stat (§3d)
- Add "Interpretive Tractability" as named concept (AI Safety subpage) once Lawfare/Tech Policy Press essay publishes
- Add NIST CAISI public comment on AI agent security (MLA, 2024) to Governance subpage
- Keep timeline on index or on a dedicated `/research/timeline` page

---

### 4c. Books

**URL:** `https://katherineelkins.com/books`

**Section 1: Published**

*The Shapes of Stories: Sentiment Analysis for Narrative*  
Cambridge University Press, 2022 (**Cambridge Element** — label as such)

*Proust's In Search of Lost Time: Philosophical Perspectives*  
Oxford University Press, 2022  
**Editor and contributor** — wrote introduction and one essay. Formula: "edited volume; introduction and essay by Elkins"

**Special Issue Editor**, *Humanities*, 2025: [topic — confirm]  
List here as an edited scholarly work

**Section 2: Audible / Public Lectures (authored works)**

*The Modern Scholar: The Modern Novel* (Recorded Books / Audible, 2013) — Joyce, Kafka, Proust, Woolf  
*The Modern Scholar: Giants of French Literature* (Recorded Books / Audible, 2010) — Balzac, Flaubert, Proust, Camus  
*Odyssey of the West* — contributor

**Section 3: In Progress**

*Knowing Otherwise* (working title; alt: *What Literature Knows*)  
Philosophical monograph · Target: University of Chicago Press  
~150-word blurb to write. Core argument: mechanistic/juridical knowing is what philosophy endorses AND what AI instantiates; literature enacts an alternative epistemology. Not a crossover — the synthesis the whole body of work has been building toward. Arc: Plato/Sappho → Wordsworth → Baudelaire → Proust/Woolf → Kafka.

*[AI Trade Book — title TBD]*  
General audience · In development · Blurb to add once framing confirmed

**Note on articles:** *The Shapes of Cinderella* (*Humanities*, 2025) is a **journal article**, not a book. Do not list here — list on CV/publications page.

---

### 4d. Speaking

**URL:** `https://katherineelkins.com/speaking`  
**Subpage:** `/speaking/keynotes` (full list)

**Index page (above fold, no scroll):**
- 2-sentence intro
- **BOOK KATE TO SPEAK** → contact form (inquiry: Speaking)
- Topic tiles (revised — remove curriculum/higher ed):
  - Stories and AI: What Machines Reveal About Narrative
  - Where AI Is Going: Safety, Governance, and What Comes Next
  - AI Safety & Linguistic Vulnerability
  - Cultural Heritage and AI

**Recent keynotes grid (index — recent highlights only, link to full list):**
AI and Democracy — Ohio State (April 2026) · OpenAI HE Forum — SF (Dec 2025) · Weill Cornell Medicine–Qatar (Oct 2025) · RALLY Innovation (2025) · UNESCO MONDIACULT · ICML Vienna, oral (2024) · Meta Open Innovation — London (2024) · Helix Center ×4 (2022–23)

**Full keynotes list** at `/speaking/keynotes` (reverse chronological, all engagements)

---

### 4e. CV

**URL:** `https://katherineelkins.com/cv`

**The three-version problem:**

| Version | Lead with | Download |
|---------|-----------|----------|
| Humanities | Literary work (Cambridge Element, OUP, PMLA, MLQ) | `cv-humanities.pdf` |
| AI / iSchool | NIST, ICML, SentimentArcs co-dev, governance | `cv-ai.pdf` |
| Industry / Policy | NIST, Schmidt, governance papers; no full pub list | `cv-policy.pdf` |

Web page = comprehensive record with all three PDFs as downloads.

**CV accuracy notes:**
- *The Shapes of Stories* = Cambridge Element, not monograph
- *The Shapes of Cinderella* = article in *Humanities*, 2025
- OUP Proust = edited volume, introduction, and essay by Elkins
- *Humanities* special issue 2025 = Kate edited (topic to confirm)
- SentimentArcs = co-developed with Jon Chun (he created it)

---

### 4f. Media & Podcasts (NEW PAGE)

**URL:** `https://katherineelkins.com/media`

**Press section:**
- NPR/WOSU (Feb 2026) — Schmidt Sciences Archival Intelligence
- Christian Science Monitor (Feb 2026) — AI safety and humanities in governance
- Engineering / CAE Elsevier (Dec 2025) — translation research
- Forbes (Nov 2025) — human-centered AI at Kenyon
- Al Jazeera "The Stream" — AI and art
- [others to inventory]

**Podcasts & Audio section:**
- Merging Minds — literary translation
- [others to inventory]

**Press kit:**
- Downloadable headshot (print-quality)
- Bio in 3 lengths: 50 words / 150 words / 300 words (to be written — see §6)
- Press contact form

---

### 4g. Blog — Formal Essays

**URL:** `https://katherineelkins.com/blog`  
**Tone:** Formal essays, not informal posts  
**Future content:**
- "Interpretive Tractability" — excerpt + link when Lawfare/Tech Policy Press essay publishes
- Atlantic essay — excerpt + link when published
- Op-eds derived from Atlantic piece

---

## 5. TECHNICAL REQUIREMENTS & JSON-LD IMPLEMENTATION

### Already in place ✅
- Netlify deployment
- llms.txt (needs minor corrections — §3d)
- ORCID: `0000-0001-9887-4854`
- Wikidata: `Q130369935`
- Wikipedia: `https://en.wikipedia.org/wiki/Katherine_Elkins`

### JSON-LD: Full Implementation Guide for Claude Code / Agents

**Why this matters:** The `sameAs` array in JSON-LD tells Google's Knowledge Graph and AI crawlers that all of Kate's profiles (Wikipedia, ORCID, Scholar, LinkedIn, etc.) refer to the same person. Without it, each profile is treated as a separate entity. This is the single highest-leverage technical SEO change.

**Where it must go:** In the `<head>` of every page as a `<script type="application/ld+json">` block. The llms.txt alone is NOT sufficient — structured data must be in the HTML.

**Homepage JSON-LD (full Person schema):**
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Katherine Elkins",
  "alternateName": "Kate Elkins",
  "url": "https://katherineelkins.com",
  "image": "https://katherineelkins.com/[headshot-path]",
  "jobTitle": "AI Safety Researcher",
  "description": "AI safety researcher, co-founder of the Human-Centered AI Lab, and PI at the NIST AI Safety Institute Consortium.",
  "affiliation": [
    {
      "@type": "Organization",
      "name": "NIST AI Safety Institute Consortium",
      "url": "https://www.nist.gov/artificial-intelligence"
    },
    {
      "@type": "Organization",
      "name": "Human-Centered AI Lab",
      "url": "https://humancenteredailab.org"
    },
    {
      "@type": "Organization",
      "name": "Kenyon College",
      "url": "https://www.kenyon.edu"
    }
  ],
  "sameAs": [
    "https://en.wikipedia.org/wiki/Katherine_Elkins",
    "https://www.wikidata.org/wiki/Q130369935",
    "https://orcid.org/0000-0001-9887-4854",
    "https://scholar.google.com/citations?user=bUSgS6IAAAAJ",
    "https://www.linkedin.com/in/kate-elkins",
    "https://github.com/KatherineElkins",
    "https://humancenteredailab.org",
    "https://kenyon.academia.edu/KatherineElkins",
    "https://www.researchgate.net/profile/Katherine-Elkins"
  ],
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "University of California, Berkeley"
    },
    {
      "@type": "CollegeOrUniversity",
      "name": "Yale University"
    }
  ],
  "knowsAbout": ["AI Safety", "Computational Humanities", "AI Governance", "Narrative Theory", "Natural Language Processing"]
}
</script>
```

**Per-subpage JSON-LD additions:**

Research subpages — add `ScholarlyArticle` or `Book` blocks for key works on that page:
```json
{
  "@type": "ScholarlyArticle",
  "name": "Can GPT-3 Pass a Writer's Turing Test?",
  "author": [{"@type": "Person", "name": "Katherine Elkins"}, {"@type": "Person", "name": "Jon Chun"}],
  "datePublished": "2020",
  "publisher": {"@type": "Organization", "name": "Journal of Cultural Analytics"},
  "url": "https://doi.org/[doi]",
  "citation": "382"
}
```

Books page — add `Book` type for each:
```json
{
  "@type": "Book",
  "name": "The Shapes of Stories: Sentiment Analysis for Narrative",
  "author": {"@type": "Person", "name": "Katherine Elkins"},
  "publisher": {"@type": "Organization", "name": "Cambridge University Press"},
  "datePublished": "2022",
  "isbn": "[ISBN]"
}
```

**Netlify implementation:**  
On a static Netlify site, JSON-LD goes directly in the HTML `<head>` of each page template. If using a static site generator (Hugo, Eleventy, Astro), create a partial/component that outputs the JSON-LD block and include it in the base layout. The Person schema on homepage; Article/Book schemas on relevant content pages.

**Validation:** After deployment, test at `https://search.google.com/test/rich-results` and `https://validator.schema.org/`

### Additional technical items
- **Netlify Forms** for contact (native, free, no backend) — see §3e
- **Sitemap.xml** — submit to Google Search Console after build
- **Open Graph tags** — verify title/description/image on all pages and subpages
- **Canonical URLs** — set explicitly on all pages to prevent duplicate content
- **robots.txt** — explicitly allow AI crawlers (given GEO/llms.txt strategy)
- **Per-page meta descriptions** — each subpage needs a distinct, keyword-rich description

---

## 6. CONTENT TO WRITE (PRIORITY ORDER)

1. **Hero opening sentence** (~25 words — unifying argument, no aging language)
2. ***Knowing Otherwise* blurb** (~150 words for Books page)
3. **AI trade book blurb** (~100 words — once framing confirmed)
4. **Speaking page intro** + revised topic tiles (~100 words)
5. **Bio in 3 lengths** for Media page (50 / 150 / 300 words)
6. **Foundations subpage framing paragraph** (the "this IS the argument" reframe)
7. **CV comprehensive version**
8. **Confirm:** *Humanities* special issue 2025 topic
9. **llms.txt corrections** (SentimentArcs attribution; student research stat; Cambridge Element label)

---

## 7. NAMING CONSISTENCY RULES

| Correct | Incorrect |
|---------|-----------|
| Human-Centered AI Lab | AI CoLab (Kenyon's name — don't use on personal site) |
| *Proust's In Search of Lost Time: Philosophical Perspectives*, **ed., intro, essay** | "Marcel Proust in Context"; "authored by Elkins" |
| NIST AI Safety Institute Consortium | "NIST CAISIC" / "NIST AISIC" (spell out first instance) |
| Co-Founder, Human-Centered AI Lab, Inc. | "co-founder of Kenyon's AI Lab" |
| "mentored student research projects" | "SentimentArcs downloads" (different thing) |
| *The Shapes of Stories* = **Cambridge Element** | "book" / "monograph" |
| *The Shapes of Cinderella* = **journal article**, *Humanities* 2025 | "book" |
| SentimentArcs: co-developed with Jon Chun (Jon created it) | "Kate's SentimentArcs" |
| Early work = **the philosophical argument** the AI work tests | "previous career" / "background" |
| "throughout her career" or "questions central to her work" | "for decades" (ages the work) |

---

## 8. OPEN QUESTIONS

- ***Humanities* special issue 2025:** What is the topic / title?
- **AI trade book:** Working title / framing? (Adding to Books next week)
- **Research index page:** Should the timeline (2016→present) live on the index, or on its own `/research/timeline` subpage?
- **JSON-LD:** Is the Person schema currently in the page `<head>` HTML, or only in llms.txt? (Needs to be in `<head>`)
- **Headshot:** Print-quality file available for Media page press kit?
- **Blog / formal essays:** Any existing posts to convert to formal essay format, or start fresh?

---

## 9. BUILD NOTES FOR CLAUDE CODE / AGENTS

When building subpages:
- Build one subpage at a time; validate JSON-LD after each
- Each subpage needs: unique `<title>`, unique meta description, canonical URL, relevant JSON-LD schema (Person on all; ScholarlyArticle or Book where relevant)
- Research subpages: pull prose from current `/research` page; fix SentimentArcs + student research stat as you go
- The Foundations subpage is the most important to get right conceptually — it reframes the whole site
- Contact form: implement with Netlify Forms; test form submission before going live
- After full build: validate all JSON-LD at schema.org/validator; submit sitemap to Search Console; test rich results

---

## 10. RELATED DOCUMENTS

| File | Contents |
|------|----------|
| `ke-career-profiles.jsx` | 10 career tracks with scores, required CV versions |
| `ke-reception.jsx` | 7 research domains, citation analysis |
| `ke-nextsteps.jsx` | 9 active projects, priority/leverage/urgency scores |
| `ke-platforms.jsx` | Platform/audience mapping |
| `ke-master.jsx` | Comprehensive CV artifact |
| `kenyon-bio-corrected.docx` | Corrected bio + JSON-LD for Kenyon directory (for Carla) |

---

*End of spec. In a new conversation: share this document and say "Build [page name]" or "Write the hero copy" or "Implement the contact form." Agent/Claude Code builds should start with §5 (JSON-LD implementation guide) and §9 (build notes).*
