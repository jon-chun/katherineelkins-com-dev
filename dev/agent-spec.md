# Agent Spec — katherineelkins.com
*Exact find-and-replace and code edits. Run after H-1 deployment check.*
*March 6, 2026*

---

## A-1 · `llms.txt` — Run FIRST (AI crawlers read this directly)

**Fix 1 — SentimentArcs attribution:**
Find: `Creator of SentimentArcs, the first large-ensemble computational methodology`
Replace: `Co-developed the SentimentArcs methodology with Jon Chun — the first large-ensemble`

**Fix 2 — Downloads stat:**
Find: `The methodology has been adopted globally; student and faculty research applying it has been downloaded 95,000+ times from 4,000+ institutions in 198 countries via Digital Kenyon.`
Replace: `Student and faculty research has been downloaded 95,000+ times from 4,000+ institutions in 198 countries via Digital Kenyon.`

**Fix 3 — Contact email (two locations):**
Find: `Contact: info@katherineelkins.com`
Replace: `Contact: kateelkins2000@gmail.com`
Also find and replace the same address in the Links section at the bottom.

**Fix 4 — Meta in Current Roles:**
Find: `Member, Meta Open Innovation AI Research Community`
Replace: `Meta Open Innovation AI Research Community · Transparency Working Group · 2022–2024 (program now defunct)`

**Fix 5 — "Paradox of Robustness" — remove ICML claim and arXiv number:**
Find: `"The Paradox of Robustness: Decoupling Rule-Based Logic from Affective Noise in High-Stakes Decision-Making" (arXiv:2601.21439, 2026). With Jon Chun. Multi-agent judicial simulation. Accepted at ICML 2025.`
Replace: `"The Paradox of Robustness." With Jon Chun. Manuscript under review.`

**Fix 6 — "When Prohibitions Become Permissions" — remove arXiv number:**
Find: `"When Prohibitions Become Permissions: Auditing Negation Sensitivity in Language Models" (arXiv:2601.21433, 2026). With Jon Chun. Audited 16 models; open-source models endorse prohibited actions 77%.`
Replace: `"When Prohibitions Become Permissions: Auditing Negation Sensitivity in Language Models." With Jon Chun. Manuscript under review.`

---

## A-2 · `index.html` — Hero tagline + fourth credential + delete body paragraphs

**Tagline — Find (check which version is live — two possibilities):**

Version A (with literature clause, may still be live):
```
Her work asks what happens to knowledge, creativity, and authority when machines attempt what only humans were thought to do — and uses literature as the measure.
```
Version B (literature clause already removed):
```
Her work asks what happens to knowledge, creativity, and authority when machines attempt what only humans were thought to do.
```
**Replace whichever is present with:**
```
What happens to human knowing when machines can do what only humans could?
```

**Fourth credential — add a fourth `<li>` to the hero credentials `<ul>`, after the existing third item:**
```html
<li>Working on a series of essays on AI and what the dominant frameworks miss</li>
```
The block should then read:
1. Co-Founder & PI, Human-Centered AI Lab
2. PI, NIST AI Safety Institute Consortium (representing MLA)
3. PI, Schmidt Sciences HAVI ("Archival Intelligence")
4. Working on a series of essays on AI and what the dominant frameworks miss

**Delete body paragraphs — Find start:**
```
Katherine Elkins is a philosopher of knowing who found in AI the most urgent
```
**Find end:**
```
Her Audible courses include The Modern Novel and Giants of French Literature.
```
Delete everything between and including those two lines. Replace with nothing.

---

## A-3 · `index.html` — CHE date fix
Find: `Mar 2026` in the line referencing `Chronicle of Higher Education Virtual Forum`
Replace: `Jun 2025`
Move the CHE line to appear after the two Feb 2026 entries (chronological order).

---

## A-4 · `index.html` — JSON-LD alumniOf correction
Find:
```json
"alumniOf": {
  "@type": "EducationalOrganization",
  "name": "Kenyon College"
}
```
Replace:
```json
"alumniOf": [
  { "@type": "CollegeOrUniversity", "name": "University of California, Berkeley" },
  { "@type": "CollegeOrUniversity", "name": "Yale University" }
]
```

---

## A-5 · `research/index.html` — Delete CSS card + SentimentArcs fix

**Delete Computational Social Science card:**
Delete the entire card identified by: label `COMPUTATIONAL SOCIAL SCIENCE` / credential `ICML 2025 accepted · Notre Dame-IBM Technology Ethics Lab`
Result: 5 cards remain.

**SentimentArcs fix:**
Find: `Creator of the SentimentArcs methodology (co-developed with Jon Chun):`
Replace: `Co-developed the SentimentArcs methodology with Jon Chun:`

---

## A-6 · `speaking/index.html` — Four fixes

**Fix 1 — CHE date (same as A-3 but in Full Engagements section):**
Find: `Mar 2026` referencing Chronicle of Higher Education Virtual Forum
Replace: `Jun 2025`
Move entry from 2026 section to 2025 section.

**Fix 2 — Book button + contact email (two instances):**
Find both: `href="mailto:info@katherineelkins.com"`
Replace both: `href="mailto:kateelkins2000@gmail.com?subject=Speaking%20Inquiry"`

**Fix 3 — Add fifth topic tile to the existing 4-tile grid:**
```
Humanities in the Age of AI: From Fairy Tales to Large Language Models
```

**Fix 4 — Concordia event link:**
The Concordia entry currently has a video embed or no link.
Replace with plain event page link:
```
https://www.concordiacollege.edu/events/details/symposium-dr-katherine-elkins/2025-09-17/
```
Label: `[View event page]`

---

## A-7 · `media/index.html` — Bio rewrites + press contact

**Fix 1 — 50-word bio:**
Find: `PI in the NIST AI Safety Institute Consortium`
Replace: `the MLA's PI in the NIST AI Safety Institute Consortium`

Find: `archival intelligence project`
Replace: `Archival Intelligence project`

**Fix 2 — 150-word bio — paste verbatim, do not paraphrase:**
Replace entire block between "Medium bio (150 words)" heading and "Press contact" section with:

Katherine Elkins writes about AI as a genuinely new kind of intelligence — what it actually does to human creativity, authority, and knowing, and why the dominant frameworks for understanding it keep getting the answer wrong. She has been working at this question since 2016, when she co-founded what is documented as the world's first human-centered AI curriculum.

She serves as the MLA's Principal Investigator in the NIST AI Safety Institute Consortium and leads a Schmidt Sciences HAVI grant for the Archival Intelligence project. She is working on a series of essays arguing that the economists, computer scientists, and policy experts now weighing in on AI are each missing the same thing. Her research has been presented at ICML and covered in Forbes, the Christian Science Monitor, and NPR.

She is the author of The Shapes of Stories (Cambridge University Press, 2022) and a professor at Kenyon College.

**Fix 3 — Press contact email:**
Find: `info@katherineelkins.com` (in the Press contact section)
Replace: `kateelkins2000@gmail.com`

---

## A-8 · `media/index.html` — Add CV download to press kit
Add below the headshot download line (requires H-3 file upload to be complete first):
```html
<p><a href="/assets/katherine-elkins-cv.pdf" download>Download CV (PDF)</a></p>
```

---

## A-9 · `books/index.html` — Purchase buttons + special issue + downloads stat

**Add purchase links:**

*The Shapes of Stories:*
`Buy at Cambridge University Press` → `https://www.cambridge.org/core/books/shapes-of-stories/`

*Proust's In Search of Lost Time:*
`Buy at Oxford University Press` → `https://global.oup.com/academic/product/prousts-in-search-of-lost-time-9780190921583`

*The Modern Novel:*
`Listen on Audible` → `https://www.audible.com/pd/The-Modern-Scholar-The-Modern-Novel-Audiobook/B00BQHE37C`

*Giants of French Literature:*
`Listen on Audible` → `https://www.audible.com/pd/The-Modern-Scholar-Giants-of-French-Literature-Audiobook/B003D8WGF8`

**Update special issue entry:**
Find: `Special Issue Editor, Humanities, 2025`
Replace:
```
Guest Editor, "Depiction of Good and Evil in Fairytales"
Humanities (MDPI), 2024–2025
https://www.mdpi.com/journal/humanities/special_issues/8MA943MOD6
```

**Fix downloads stat:**
Find: `The open-source framework has been downloaded over 95,000 times from more than 4,000 institutions across 198 countries`
Replace: `Student and faculty research applying this methodology has been downloaded over 95,000 times from more than 4,000 institutions across 198 countries via Digital Kenyon`

---

## A-10 · Affiliations — Remove Meta from site
Find and delete the Meta AI Research Community / Transparency Working Group entry from any affiliations section visible on the site.
Check research page and any JSON-LD `memberOf` fields.
Do NOT remove from the CV — it stays there with dates "2022–2024."

---

## VERIFICATION
Hard refresh (`Ctrl+Shift+R`) after each item before moving to next.
