import { useState } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────

const LAST_UPDATED = "March 6, 2026";

// The strategic lead identity for all platforms
const LEAD = "AI Safety Researcher & Computational Humanist who co-founded the world's first human-centered AI curriculum (2016) — PI, NIST AI Safety Institute Consortium · Schmidt Sciences HAVI · Author, Cambridge UP & Oxford UP";

const FRAMING_NOTE = "On identity framing: 'Computational Humanist' is the preferred lead identity because it holds both the traditional philosophy/literary scholarship AND the AI/CSS work — neither erases the other. 'Computational Social Scientist' is more marketable for iSchool/CSS positions and can be foregrounded for those audiences, but shouldn't replace Computational Humanist as the primary identity. The philosophy work is not a liability to hide — it is the epistemological foundation that makes the AI work distinctive.";

// Audiences and what they need
const AUDIENCES = [
  {
    id: "industry",
    label: "Industry / Tech",
    icon: "🏢",
    color: "#0c4a6e",
    bg: "#f0f9ff",
    who: "Anthropic, OpenAI, Google DeepMind, Meta — policy, safety, and research teams",
    question: "Is she technically credible? Does she publish at ML venues? Does she have federal credentialing?",
    theyNeed: ["NIST PI (federal safety trust)", "ICML oral (ML venue credibility)", "ICML/FAccT/NeurIPS papers", "GPT-3 paper — was doing this in 2019", "Schmidt Sciences PI"],
    theyDontNeed: ["Kenyon/SLAC context", "Traditional literary scholarship", "Curriculum details"],
  },
  {
    id: "academic_ai",
    label: "AI/iSchool Academia",
    icon: "🔬",
    color: "#065f46",
    bg: "#f0fdf4",
    who: "iSchool hiring committees, CSS researchers, AI/DH centers",
    question: "Does she have a real research agenda? Publications at the right venues? Is she a methodologist?",
    theyNeed: ["SentimentArcs / Shapes of Stories (CUP)", "ICML oral + FAccT papers", "700+ citations", "Co-founder, Human-Centered AI Lab", "Computational Social Science framing"],
    theyDontNeed: ["Traditional literary publications (mention briefly)", "Administrative record"],
  },
  {
    id: "academic_hum",
    label: "Humanities Academia",
    icon: "📜",
    color: "#2c1654",
    bg: "#f5f0ff",
    who: "Comp Lit / English hiring committees, R1 faculty colleagues",
    question: "Is she a real scholar? Does she have the traditional publication record? Is the AI work serious or is she a techie?",
    theyNeed: ["Cambridge UP & Oxford UP books", "PMLA, MLQ, Philosophy and Literature", "A. Owen Aldridge Prize", "Knowing Otherwise (in progress)", "50-year program directorship"],
    theyDontNeed: ["Citation counts (makes them anxious)", "ICML / ML venue papers", "NIST affiliation as lead"],
  },
  {
    id: "policy",
    label: "Policy / Governance",
    icon: "🌐",
    color: "#1e3a5f",
    bg: "#eff6ff",
    who: "Think tanks (Belfer, Brookings, CSET), federal agencies, UNESCO, foundations",
    question: "Does she have policy-relevant expertise? Federal credentialing? Cross-sector network?",
    theyNeed: ["NIST CAISI PI (MLA rep)", "UNESCO MONDIACULT", "'Interpretive tractability' concept", "Comparative AI regulation paper", "Schmidt Sciences HAVI"],
    theyDontNeed: ["Curriculum details", "Kenyon context", "Literary publications as lead"],
  },
  {
    id: "public",
    label: "Journalists / General Public",
    icon: "📰",
    color: "#7c2d12",
    bg: "#fff7ed",
    who: "Reporters, podcast hosts, event bookers, general readers",
    question: "Who is she in one sentence? Is she interesting? Can she explain things?",
    theyNeed: ["'World's first human-centered AI curriculum, 2016'", "The story: humanist who got to AI first", "CSMonitor, WOSU, Al Jazeera, Forbes", "Keynotes: UNESCO, OpenAI, Yale", "Audible courses (signals accessibility)"],
    theyDontNeed: ["Paper titles", "Citation counts", "Institutional affiliations as lead"],
  },
  {
    id: "students",
    label: "Students / Prospective",
    icon: "🎓",
    color: "#5a4a00",
    bg: "#fefce8",
    who: "Kenyon students, prospective students, parents",
    question: "Is she a good teacher? Is the program legit? What will I learn?",
    theyNeed: ["IPHS Director", "NEH Teaching Professorship", "Curriculum description and outcomes", "Approachable tone", "Student success stories"],
    theyDontNeed: ["External affiliations as lead", "ICML papers", "Grant details"],
  },
];

// Platform strategies
const PLATFORMS = [
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "💼",
    url: "https://linkedin.com/in/kate-elkins",
    color: "#0a66c2",
    bg: "#eff6ff",
    primaryAudience: ["industry","policy","academic_ai"],
    lead: "AI Safety Researcher & Computational Humanist · PI, NIST AI Safety Institute Consortium · Co-Founder, Human-Centered AI Lab",
    purpose: "Professional network, recruiters, industry hiring managers, foundation officers, policy contacts. The place people go when they've heard your name and want to quickly verify credentials and reach out.",
    tone: "Professional but not bureaucratic. Confident. Forward-looking.",
    headline: "AI Safety Researcher · PI, NIST AI Safety Institute Consortium (MLA) · Co-Founder, Human-Centered AI Lab · Schmidt Sciences PI · Kenyon College",
    whatToLead: [
      "NIST CAISI PI — leads the credential hierarchy for industry and policy",
      "Schmidt Sciences HAVI PI",
      "Co-Founder, Human-Centered AI Lab (with founding date: 2016)",
      "ICML 2024 oral — signals ML venue credibility",
      "Cambridge UP and Oxford UP books",
    ],
    whatToDownplay: [
      "Kenyon College — move to the end; SLAC context signals small-scale to industry",
      "Traditional literary publications — mention in About section, not headline",
      "Curriculum details — context, not lead",
    ],
    actions: [
      "Rewrite headline to match above — currently likely too institution-first",
      "Featured section: CSMonitor article, WOSU, ICML paper, CUP book",
      "About section: 3-paragraph version of the AI Safety identity with Computational Humanist as supporting frame",
      "Experience: Human-Centered AI Lab, Inc. as a separate entry (not subsumed under Kenyon)",
      "Skills: add 'AI governance,' 'computational social science,' 'AI safety,' 'NLP,' 'sentiment analysis'",
    ],
    status: "Needs rewrite",
  },
  {
    id: "wikipedia",
    name: "Wikipedia",
    icon: "📖",
    url: "https://en.wikipedia.org/wiki/Katherine_Elkins",
    color: "#2c2c2c",
    bg: "#f8f8f8",
    primaryAudience: ["public","academic_hum","policy"],
    lead: "Neutral, verifiable, encyclopedic — this is the place anyone Googling your name lands first",
    purpose: "Credibility anchor. Journalists, hiring committees, and anyone doing due diligence check Wikipedia. The article's job is not to persuade — it's to establish that you exist at the level of notability that Wikipedia requires, with third-party sources proving it.",
    tone: "Encyclopedic. No puffery. Let the facts do the work.",
    headline: "Katherine Elkins is an American scholar of comparative literature, computational humanities, and AI governance. She is Professor and Director of the Integrated Program in Humane Studies at Kenyon College and co-founder of Human-Centered AI Lab, Inc.",
    whatToLead: [
      "Scholarly identity established first (notability standard)",
      "Traditional publications (CUP, OUP, PMLA) — Wikipedia's notability benchmark",
      "NIST CAISI PI — external credentialing that Wikipedia counts",
      "Schmidt Sciences — external funding as notability signal",
      "The four-domain epistemic reception section — shows who uses the work and why",
    ],
    whatToDownplay: [
      "Self-promotional framing — any claim that can't be sourced to a third party",
      "Curriculum details beyond verifiable facts",
      "Claims about 'world's first' without a citable source",
    ],
    actions: [
      "Jon executing 12-week edit sequence — track progress",
      "Week 2 priority: scholarly reception section (references [29]–[32] still needed)",
      "Ensure CUP and OUP books are properly cited with ISBNs",
      "Add NIST CAISI PI role with verifiable source (NIST website)",
      "Wikidata entity needs linking for Google Knowledge Panel",
    ],
    status: "Jon executing — track sequence",
  },
  {
    id: "homepage",
    name: "katherineelkins.com",
    icon: "🌐",
    url: "https://katherineelkins.com",
    color: "#1a3a5c",
    bg: "#eff6ff",
    primaryAudience: ["public","industry","policy","academic_ai"],
    lead: "Your owned space — the most nuanced version of who you are, for any audience who arrives with real curiosity",
    purpose: "The destination after someone Googles you and wants more than Wikipedia. Event bookers, journalists writing profiles, potential collaborators, foundation officers, and people considering hiring you all arrive here with different questions. It needs to serve all of them without being cluttered.",
    tone: "Authoritative but human. The voice that speaks well on stage. Not the CV; the person.",
    headline: "AI Safety Researcher · Computational Humanist · Author · Speaker",
    whatToLead: [
      "The one-sentence origin story: 'I co-founded the world's first human-centered AI curriculum in 2016 — before ChatGPT — and have been arguing that AI is fundamentally a question of knowledge, not just technology, ever since.'",
      "Above-the-fold: NIST, Schmidt, CUP book, keynote venues",
      "Then: the work (research areas with short descriptions)",
      "Then: books and selected papers",
      "Then: speaking (with booking contact)",
      "Then: Kenyon/institutional context — last",
    ],
    whatToDownplay: [
      "CV-style list of everything — this is not a CV",
      "Academic jargon in the lede — write for a journalist first",
      "Kenyon as the first thing anyone reads",
    ],
    actions: [
      "Rewrite hero section with origin story lede",
      "Add booking/inquiry contact form or email",
      "JSON-LD structured data — already done; verify it reflects current identity lead",
      "Add press page: CSMonitor, WOSU, Forbes, Al Jazeera with excerpts",
      "Speaking page: list of venues with dates; booking info",
      "One photo that looks like someone you'd want to hear speak",
    ],
    status: "GEO/SEO done — content rewrite needed",
  },
  {
    id: "kenyon",
    name: "Kenyon Faculty Bio",
    icon: "🏛️",
    url: "https://www.kenyon.edu/directory/kate-elkins/",
    color: "#6b2d00",
    bg: "#fff7ed",
    primaryAudience: ["students","academic_hum"],
    lead: "Institutional page for students, parents, colleagues, and journalists who find you through Kenyon. Different job from every other platform — but also doing quiet institutional work.",
    purpose: "Two distinct jobs running simultaneously. Primary: students deciding whether to take your courses, parents evaluating the program, faculty colleagues. Secondary and equally important: establishing a public, timestamped record of your priority and long history in the field. The Computing program's narrative (that Jordan introduced serious AI thinking to Kenyon) depends partly on institutional amnesia. The Kenyon bio is one of the few public documents you fully control that can counter that — not combatively, but through factual precision about dates, origins, and external validation.",
    tone: "Warm, scholarly, authoritative. The professor you want to study with — who also happens to have been doing this since before it was a field.",
    headline: "Professor of Comparative Literature & Humanities · Director, Integrated Program in Humane Studies · Co-Founder, Human-Centered AI Lab, Inc.",
    whatToLead: [
      "2016 founding date — explicit and prominent. 'In 2016, Elkins co-founded what is documented as the world's first human-centered AI curriculum.' The date is the record.",
      "IPHS 50-year history + AI curriculum as its newest chapter — establishes that IPHS owns the interdisciplinary humanities + technology tradition at Kenyon, not a new program",
      "External validation that cannot be appropriated: NIST CAISI PI (representing MLA), Schmidt Sciences HAVI PI, OpenAI Higher Education Forum — these are yours, not the institution's",
      "Teaching framed as questions: 'my work asks...' — accessible but establishes intellectual ownership",
      "Cambridge UP and Oxford UP books — traditional scholarly legitimacy for the humanities audience",
      "NEH Teaching Professorship — validates teaching alongside research",
      "Student outcomes: what IPHS students go on to do (the program's proof of concept)",
    ],
    whatToDownplay: [
      "Any framing that situates your AI work as 'experimental' or 'emerging' — that's the appropriation narrative",
      "References to Computing program or collaboration with Computing — document clean separation",
      "ICML/NeurIPS paper titles in the bio text — mention as 'publications at top AI venues' rather than listing them (register mismatch for student/parent audience)",
    ],
    protectiveNotes: [
      "The 2016 date is the most important single fact in this bio. It predates Jordan's hiring, predates ChatGPT, and predates every 'AI initiative' the college has since announced. Get it in the first paragraph.",
      "The alumni magazine piece (Capstone/Erin) attempted to position Kate as an enthusiastic experimenter and Jordan as the serious AI thinker. The Kenyon bio is the institutional counter-record — same institution, your voice, correct dates.",
      "The NIST and Schmidt affiliations appear as IPHS affiliations, not Computing affiliations. This is factually accurate and institutionally important — they were awarded to you as IPHS faculty.",
      "After Computing affiliation withdrawal (planned May 2026 using CRADA rationale), the bio should reflect sole affiliation with IPHS and Human-Centered AI Lab, Inc.",
    ],
    actions: [
      "Add '2016' explicitly in the first paragraph — 'In 2016, Elkins and collaborator Jon Chun co-founded what is recognized as the world's first human-centered AI curriculum'",
      "Rewrite research description as questions rather than credential-lists — accessible but intellectually authoritative",
      "Add sentence about what IPHS students go on to do (graduate placements, careers)",
      "Include CUP book cover image if the platform supports it",
      "NEH Teaching Professorship: validates teaching distinction",
      "NIST and Schmidt: 'federally-affiliated AI safety research' and 'international archival AI project' — brief but on record",
      "After May withdrawal: remove Computing affiliation entirely if currently listed",
      "Ensure bio is timestamped / dated so updates are traceable",
    ],
    status: "Needs rewrite — currently likely too CV-style and missing key dates",
  },
  {
    id: "scholar",
    name: "Google Scholar",
    icon: "🔎",
    url: "https://scholar.google.com/citations?user=bUSgS6IAAAAJ",
    color: "#2d5a27",
    bg: "#f0fdf4",
    primaryAudience: ["academic_ai","academic_hum","industry"],
    lead: "The one platform you don't write — you just keep accurate. Audience is scholars and hiring committees doing due diligence.",
    purpose: "Hiring committees, collaborators, and journalists verifying your publication record. They're not reading your bio here — they're checking whether the papers exist, what venues they're in, and what the citation trajectory looks like.",
    tone: "N/A — this is a database, not a narrative.",
    headline: "N/A",
    whatToLead: [
      "Verify all papers are attributed correctly (Katherine Elkins, K Elkins)",
      "Profile photo and affiliation should be current",
      "Ensure ICML 2024, FAccT/NeurIPS under review papers are listed when published",
      "The Shapes of Stories and Proust OUP volume listed correctly",
    ],
    whatToDownplay: [],
    actions: [
      "Audit for any papers attributed to wrong name variant",
      "Verify author affiliations are current",
      "Add Human-Centered AI Lab, Inc. as secondary affiliation",
      "ORCID integration — still needed; creates verified scholarly identity",
      "Check that in-press papers (Proust's Novel Time, De Gruyter) are listed with correct status",
    ],
    status: "Accurate — keep maintained",
  },
  {
    id: "humancenteredai",
    name: "humancenteredailab.org",
    icon: "🤝",
    url: "https://humancenteredailab.org",
    color: "#065f46",
    bg: "#f0fdf4",
    primaryAudience: ["industry","policy","academic_ai"],
    lead: "The lab's platform — signals that this is a real research organization, not a solo profile. Credentializes the Human-Centered AI Lab, Inc. for funding, partnership, and hiring conversations.",
    purpose: "Foundations, potential industry partners, grant agencies, and collaborators land here when they want to understand what the Lab actually does. The lab's platform is separate from Kate's personal profile — it should read as institutional, not personal.",
    tone: "Research-forward. Collaborative. Mission-driven.",
    headline: "Human-Centered AI Lab — research at the intersection of AI safety, computational humanities, and education",
    whatToLead: [
      "Research mission in one sentence",
      "Current projects: HAVI/Archival Intelligence, SentimentArcs, curriculum research",
      "Team: Kate and Jon prominently",
      "External affiliations: NIST, Schmidt Sciences",
      "Publications and outputs",
    ],
    whatToDownplay: [
      "Kenyon branding — the lab is independent",
      "Personal biographical detail that belongs on katherineelkins.com",
    ],
    actions: [
      "Ensure nonprofit status and EIN are noted (builds funder credibility)",
      "Add a 'Partner with us' or 'Collaborate' contact pathway",
      "Project pages for HAVI and SentimentArcs",
      "Publications list that matches Google Scholar",
    ],
    status: "Functional — may need project pages updated",
  },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────

const Pill = ({ text, color = "#1a3a5c", bg = "#e8f0f8" }) => (
  <span style={{ display:"inline-block", padding:"2px 8px", borderRadius:10, fontSize:10, fontWeight:700, color, background:bg, marginRight:4, marginBottom:3 }}>{text}</span>
);

const AudienceTag = ({ id }) => {
  const a = AUDIENCES.find(x => x.id === id);
  if (!a) return null;
  return <span style={{ display:"inline-block", padding:"2px 8px", borderRadius:10, fontSize:10, fontWeight:600, color:a.color, background:a.bg, marginRight:4, marginBottom:3 }}>{a.icon} {a.label}</span>;
};

// ─── APP ──────────────────────────────────────────────────────────────────

export default function App() {
  const [view, setView] = useState("platforms"); // platforms | audiences | matrix
  const [active, setActive] = useState(null);
  const platform = PLATFORMS.find(p => p.id === active);
  const audience = AUDIENCES.find(a => a.id === active);

  return (
    <div style={{ fontFamily:"'Georgia',serif", maxWidth:900, margin:"0 auto", padding:"16px 18px", background:"#fdfcfa" }}>

      {/* Header */}
      <div style={{ borderBottom:"3px double #1a3a5c", paddingBottom:12, marginBottom:16 }}>
        <div style={{ fontSize:10, letterSpacing:3, textTransform:"uppercase", color:"#888", marginBottom:4 }}>Digital Presence Strategy</div>
        <div style={{ fontSize:22, fontWeight:700, color:"#1a3a5c" }}>Katherine Elkins — Platform Strategy</div>
        <div style={{ fontSize:11, color:"#888", marginTop:2 }}>What each platform should do · for whom · last updated {LAST_UPDATED}</div>
        <div style={{ marginTop:8, padding:"8px 12px", background:"#f0f4fa", borderLeft:"3px solid #1a3a5c", fontSize:12, color:"#333", lineHeight:1.6, fontStyle:"italic" }}>
          Lead identity across all platforms: {LEAD}
        </div>
        <div style={{ marginTop:6, padding:"8px 12px", background:"#fffbeb", borderLeft:"3px solid #d97706", fontSize:11, color:"#555", lineHeight:1.6 }}>
          {FRAMING_NOTE}
        </div>
        <div style={{ marginTop:10, display:"flex", gap:7, flexWrap:"wrap" }}>
          {["platforms","audiences","matrix"].map(v => (
            <button key={v} onClick={() => { setView(v); setActive(null); }} style={{ padding:"4px 12px", borderRadius:3, border:"1px solid", borderColor:view===v?"#1a3a5c":"#ccc", background:view===v?"#1a3a5c":"#fff", color:view===v?"#fff":"#444", fontSize:11, cursor:"pointer", fontFamily:"inherit" }}>
              {v === "platforms" ? "Platforms" : v === "audiences" ? "Audiences" : "Who Goes Where"}
            </button>
          ))}
        </div>
      </div>

      {/* PLATFORMS LIST */}
      {view === "platforms" && !active && (
        <div>
          <div style={{ fontSize:11, color:"#999", marginBottom:12 }}>Click any platform for the full brief — what it should do, who it serves, and the specific actions needed.</div>
          {PLATFORMS.map(p => (
            <div key={p.id} onClick={() => setActive(p.id)}
              style={{ border:`1px solid ${p.color}25`, borderLeft:`5px solid ${p.color}`, borderRadius:5, padding:"12px 14px", marginBottom:9, background:p.bg, cursor:"pointer" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,.08)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              <div style={{ display:"flex", alignItems:"baseline", gap:8, flexWrap:"wrap" }}>
                <span style={{ fontSize:20 }}>{p.icon}</span>
                <span style={{ fontSize:15, fontWeight:700, color:p.color }}>{p.name}</span>
                <span style={{ fontSize:10, color:"#aaa" }}>{p.url}</span>
                <span style={{ marginLeft:"auto", fontSize:10, padding:"2px 8px", borderRadius:10, background:"#f0f0f0", color:"#666" }}>{p.status}</span>
              </div>
              <div style={{ marginTop:7, display:"flex", flexWrap:"wrap", gap:3 }}>
                {p.primaryAudience.map(id => <AudienceTag key={id} id={id} />)}
              </div>
              <div style={{ fontSize:12, color:"#555", marginTop:6, lineHeight:1.6 }}>{p.purpose}</div>
            </div>
          ))}
        </div>
      )}

      {/* PLATFORM DETAIL */}
      {view === "platforms" && active && platform && (
        <div>
          <button onClick={() => setActive(null)} style={{ fontSize:11, color:"#888", background:"none", border:"none", cursor:"pointer", marginBottom:14, padding:0, fontFamily:"inherit" }}>← All platforms</button>

          <div style={{ borderLeft:`5px solid ${platform.color}`, paddingLeft:16, marginBottom:18 }}>
            <div style={{ fontSize:24 }}>{platform.icon}</div>
            <div style={{ fontSize:20, fontWeight:700, color:platform.color }}>{platform.name}</div>
            <a href={platform.url} target="_blank" rel="noopener noreferrer" style={{ fontSize:11, color:"#888" }}>{platform.url} ↗</a>
          </div>

          <div style={{ marginBottom:12 }}>
            {platform.primaryAudience.map(id => <AudienceTag key={id} id={id} />)}
          </div>

          {/* Purpose */}
          <div style={{ padding:"10px 14px", background:platform.bg, border:`1px solid ${platform.color}20`, borderRadius:5, marginBottom:14, fontSize:13, color:"#333", lineHeight:1.7 }}>
            {platform.purpose}
          </div>

          {/* Headline */}
          {platform.headline !== "N/A" && (
            <Block title="Lead / Headline" color={platform.color}>
              <p style={{ fontSize:13, fontWeight:600, color:platform.color, fontStyle:"italic", margin:0, lineHeight:1.65 }}>{platform.headline}</p>
            </Block>
          )}

          {/* Two column */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:14 }}>
            <Block title="Foreground" color={platform.color}>
              <ul style={{ margin:0, paddingLeft:14 }}>
                {platform.whatToLead.map((w,i) => <li key={i} style={{ fontSize:12, color:"#333", marginBottom:5, lineHeight:1.55 }}>{w}</li>)}
              </ul>
            </Block>
            <Block title="Downplay / Omit" color="#999">
              {platform.whatToDownplay.length > 0
                ? <ul style={{ margin:0, paddingLeft:14 }}>
                    {platform.whatToDownplay.map((w,i) => <li key={i} style={{ fontSize:12, color:"#555", marginBottom:5, lineHeight:1.55 }}>{w}</li>)}
                  </ul>
                : <p style={{ fontSize:12, color:"#aaa", margin:0, fontStyle:"italic" }}>N/A — keep accurate and complete</p>
              }
            </Block>
          </div>

          {/* Actions */}
          <Block title="Actions Needed" color={platform.color} highlight>
            <ul style={{ margin:0, paddingLeft:14 }}>
              {platform.actions.map((a,i) => <li key={i} style={{ fontSize:12, color:"#222", marginBottom:6, lineHeight:1.6 }}>{a}</li>)}
            </ul>
          </Block>

          {/* Protective / institutional notes if present */}
          {platform.protectiveNotes && (
            <Block title="⚠ Institutional Record — Handle with Care" color="#c2410c" highlight>
              <ul style={{ margin:0, paddingLeft:14 }}>
                {platform.protectiveNotes.map((n,i) => (
                  <li key={i} style={{ fontSize:12, color:"#7c2d12", marginBottom:6, lineHeight:1.6 }}>{n}</li>
                ))}
              </ul>
            </Block>
          )}

          {/* Navigate */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:20 }}>
            {PLATFORMS.filter(p => p.id !== active).map(p => (
              <button key={p.id} onClick={() => setActive(p.id)} style={{ fontSize:11, padding:"3px 9px", border:`1px solid ${p.color}50`, borderRadius:3, background:p.bg, color:p.color, cursor:"pointer", fontFamily:"inherit" }}>
                {p.icon} {p.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* AUDIENCES */}
      {view === "audiences" && !active && (
        <div>
          <div style={{ fontSize:11, color:"#999", marginBottom:12 }}>Six distinct audiences arrive with different questions. Click any to see what they need — and what to leave out.</div>
          {AUDIENCES.map(a => (
            <div key={a.id} onClick={() => setActive(a.id)}
              style={{ border:`1px solid ${a.color}25`, borderLeft:`5px solid ${a.color}`, borderRadius:5, padding:"12px 14px", marginBottom:9, background:a.bg, cursor:"pointer" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,.08)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              <div style={{ display:"flex", alignItems:"baseline", gap:8 }}>
                <span style={{ fontSize:20 }}>{a.icon}</span>
                <span style={{ fontSize:15, fontWeight:700, color:a.color }}>{a.label}</span>
              </div>
              <div style={{ fontSize:12, color:"#555", marginTop:4 }}>{a.who}</div>
              <div style={{ fontSize:12, color:a.color, marginTop:5, fontStyle:"italic" }}>They're asking: "{a.question}"</div>
            </div>
          ))}
        </div>
      )}

      {/* AUDIENCE DETAIL */}
      {view === "audiences" && active && audience && (
        <div>
          <button onClick={() => setActive(null)} style={{ fontSize:11, color:"#888", background:"none", border:"none", cursor:"pointer", marginBottom:14, padding:0, fontFamily:"inherit" }}>← All audiences</button>
          <div style={{ borderLeft:`5px solid ${audience.color}`, paddingLeft:16, marginBottom:18 }}>
            <div style={{ fontSize:22 }}>{audience.icon}</div>
            <div style={{ fontSize:20, fontWeight:700, color:audience.color }}>{audience.label}</div>
            <div style={{ fontSize:12, color:"#666", marginTop:3 }}>{audience.who}</div>
          </div>
          <div style={{ padding:"10px 14px", background:audience.bg, border:`1px solid ${audience.color}20`, borderRadius:5, marginBottom:14, fontSize:13, fontStyle:"italic", color:audience.color }}>
            They're asking: "{audience.question}"
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <Block title="Give them" color={audience.color}>
              <ul style={{ margin:0, paddingLeft:14 }}>
                {audience.theyNeed.map((n,i) => <li key={i} style={{ fontSize:12, color:"#333", marginBottom:5, lineHeight:1.55 }}>{n}</li>)}
              </ul>
            </Block>
            <Block title="Spare them" color="#999">
              <ul style={{ margin:0, paddingLeft:14 }}>
                {audience.theyDontNeed.map((n,i) => <li key={i} style={{ fontSize:12, color:"#555", marginBottom:5, lineHeight:1.55 }}>{n}</li>)}
              </ul>
            </Block>
          </div>
          <div style={{ marginTop:14 }}>
            <div style={{ fontSize:10, textTransform:"uppercase", letterSpacing:1.5, color:"#aaa", marginBottom:6 }}>Best platforms for this audience</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
              {PLATFORMS.filter(p => p.primaryAudience.includes(audience.id)).map(p => (
                <span key={p.id} onClick={() => { setView("platforms"); setActive(p.id); }} style={{ cursor:"pointer", fontSize:11, padding:"3px 9px", border:`1px solid ${p.color}50`, borderRadius:3, background:p.bg, color:p.color }}>
                  {p.icon} {p.name}
                </span>
              ))}
            </div>
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:16 }}>
            {AUDIENCES.filter(a => a.id !== active).map(a => (
              <button key={a.id} onClick={() => setActive(a.id)} style={{ fontSize:11, padding:"3px 9px", border:`1px solid ${a.color}50`, borderRadius:3, background:a.bg, color:a.color, cursor:"pointer", fontFamily:"inherit" }}>
                {a.icon} {a.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* MATRIX: WHO GOES WHERE */}
      {view === "matrix" && (
        <div>
          <div style={{ fontSize:11, color:"#999", marginBottom:14 }}>Which platforms serve which audiences. 🎯 = primary · · = relevant · — = not this platform.</div>
          <div style={{ overflowX:"auto" }}>
            <table style={{ borderCollapse:"collapse", width:"100%", fontSize:11 }}>
              <thead>
                <tr style={{ borderBottom:"2px solid #1a3a5c" }}>
                  <th style={{ textAlign:"left", padding:"7px 10px", fontSize:11, color:"#1a3a5c", minWidth:140 }}>Audience</th>
                  {PLATFORMS.map(p => (
                    <th key={p.id} style={{ padding:"6px 8px", textAlign:"center", minWidth:80 }}
                      onClick={() => { setView("platforms"); setActive(p.id); }} style={{ cursor:"pointer", padding:"6px 8px", textAlign:"center", minWidth:80 }}>
                      <div style={{ fontSize:16 }}>{p.icon}</div>
                      <div style={{ fontSize:9, color:p.color, fontWeight:700 }}>{p.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {AUDIENCES.map((a, ri) => (
                  <tr key={a.id} style={{ background:ri%2===0?"#f8f8f6":"#fff", borderBottom:"1px solid #eee" }}>
                    <td style={{ padding:"8px 10px", cursor:"pointer" }} onClick={() => { setView("audiences"); setActive(a.id); }}>
                      <span style={{ fontSize:14 }}>{a.icon}</span>
                      <span style={{ fontSize:11, fontWeight:600, color:a.color, marginLeft:6 }}>{a.label}</span>
                    </td>
                    {PLATFORMS.map(p => {
                      const isPrimary = p.primaryAudience.includes(a.id);
                      return (
                        <td key={p.id} style={{ textAlign:"center", padding:"8px 4px" }}>
                          {isPrimary
                            ? <span style={{ fontSize:14 }}>🎯</span>
                            : <span style={{ fontSize:12, color:"#ccc" }}>—</span>
                          }
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop:14, fontSize:11, color:"#aaa" }}>
            Key insight: no single platform serves all audiences. LinkedIn leads for industry/policy. The homepage is the only platform that serves the public and can carry the full argument. Kenyon bio is students-first. The platforms should not all say the same thing.
          </div>
        </div>
      )}

      <div style={{ marginTop:20, fontSize:10, color:"#ccc", borderTop:"1px solid #e8e4dc", paddingTop:8 }}>
        Platform strategy · Katherine Elkins · {LAST_UPDATED} · companion to ke-master.jsx · ke-career-profiles.jsx · ke-nextsteps.jsx
      </div>
    </div>
  );
}

function Block({ title, color = "#1a3a5c", children, highlight = false }) {
  return (
    <div style={{ border:`1px solid ${color}20`, borderRadius:4, overflow:"hidden", marginBottom:0 }}>
      <div style={{ background: highlight ? color+"18" : "#f5f5f3", padding:"5px 12px", borderBottom:`1px solid ${color}20` }}>
        <span style={{ fontSize:10, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", color: highlight ? color : "#888" }}>{title}</span>
      </div>
      <div style={{ padding:"10px 12px" }}>{children}</div>
    </div>
  );
}
