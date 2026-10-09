import { useState } from "react";

const PROFILES = [
  {
    id: "chair",
    icon: "📜",
    title: "Endowed Chair / Distinguished Professor",
    subtitle: "Comp Lit · English · Humanities at an R1",
    color: "#2c1654",
    accent: "#7c3aed",
    bg: "#f5f0ff",
    lead: "Katherine Elkins is a comparatist and literary theorist whose scholarship on memory, consciousness, and narrative (Proust, Woolf, Kafka, Wordsworth, Baudelaire) has appeared in PMLA, MLQ, Philosophy and Literature, and Cambridge UP. Her AI work extends her longstanding inquiry into how minds — human and artificial — process time, emotion, and meaning.",
    foreground: [
      "Traditional scholarly monograph in progress: Knowing Otherwise (U Chicago / Northwestern target)",
      "Oxford UP and Cambridge UP books; A. Owen Aldridge Prize (ACLA)",
      "PMLA essay; MLQ, Philosophy and Literature, Comparative Literature Studies publications",
      "Edited Proust volume (OUP 2022) showing field leadership",
      "50-year program directorship at Kenyon — administrative and curricular record",
    ],
    downplay: [
      "NIST / Schmidt Sciences / governance credentials (signal tech-bro adjacency to traditional lit faculty)",
      "Citation counts (DH metrics make comp lit colleagues anxious)",
      "Co-authored computational papers (can read as not independently 'literary')",
    ],
    pitch: "The literary theorist who actually understands AI — not as a tool or a threat, but as a philosophical problem continuous with modernist questions about consciousness, time, and what it means to know.",
    pathway: "Submit Knowing Otherwise to U Chicago Press Spring 2026. Leverage OUP and CUP books as proof of scholarly standing. Apply to R1 jobs with language about 'Literature and Technology' or '20th/21st-century humanities + digital' — not 'AI.' Target: Columbia, Penn, Michigan, Duke, UNC.",
    timeline: "2–3 years (book manuscript is the unlock)",
    upside: "Full institutional legitimacy, endowed salary, graduate students, research budget, stability",
    risk: "Competitive market; comp lit hiring is scarce; requires downplaying the most distinctive parts of your profile",
    move: "Finish Knowing Otherwise manuscript or substantial sample. Identify 3–5 R1 searches with 'theory + digital' framing. Get Kenyon colleagues to write letters emphasizing scholarly output, not just program-building.",
  },
  {
    id: "center",
    icon: "🏛️",
    title: "AI Center Director",
    subtitle: "Research University · Human-Centered AI / Responsible AI",
    color: "#1a3a5c",
    accent: "#2563eb",
    bg: "#eff6ff",
    lead: "Katherine Elkins co-founded what is documented as the world's first human-centered AI curriculum in 2016. As PI for the NIST AI Safety Institute Consortium (representing MLA), Schmidt Sciences HAVI grant, and co-founder of Human-Centered AI Lab, Inc., she has built the institutional infrastructure, external partnerships, and research agenda for a human-centered AI center from the ground up.",
    foreground: [
      "NIST CAISI PI (representing MLA) — federal AI safety credentialing",
      "Schmidt Sciences HAVI grant — 7-figure external research PI experience",
      "Human-Centered AI Lab, Inc. — nonprofit co-founded, full governance, EIN",
      "2016 curriculum founding — documented 'first' in the field",
      "700+ citations, ICML oral, FAccT — peer-reviewed AI research record",
      "Interdisciplinary network: UNESCO, Meta, OpenAI, Notre Dame–IBM, Helix Center",
    ],
    downplay: [
      "Kenyon institutional friction (not relevant — center hire is about what you'd build)",
      "Literary scholarship in cover letter (supportive credential, not lead)",
    ],
    pitch: "The scholar who built the field before the field existed — and has the external funding, federal affiliations, and interdisciplinary network to build a center that isn't just a seminar series.",
    pathway: "Target R1 universities with new or nascent AI centers seeking a founding director: look for vice provost for AI positions, center director searches, endowed directorship positions. Purdue is a live possibility. Also Michigan, Carnegie Mellon, Penn State, Ohio State. The NIST and Schmidt affiliations are the opening credentials here.",
    timeline: "1–2 years; pipeline already active (Purdue)",
    upside: "High salary, external visibility, real resources, the job that matches what you've already been doing",
    risk: "Most 'center director' hires want CS or ML credentials as primary; humanities-first AI directors still a hard sell at some institutions; depends on provost-level vision",
    move: "Clarify the Purdue situation — why did the targeted hire stall? Was it scope, comp lit home dept resistance, or provost-level budget? Pitch yourself as the founding director, not the token humanist. Prepare a 2-page 'What I Would Build' vision document for any center-director conversation.",
  },
  {
    id: "ischool",
    icon: "🔬",
    title: "iSchool / Information Science",
    subtitle: "CSS · AI Ethics · Human-AI Interaction",
    color: "#064e3b",
    accent: "#059669",
    bg: "#ecfdf5",
    lead: "Katherine Elkins is a computational social scientist whose work spans sentiment analysis at scale (90K+ downloads, 4,000+ institutions), LLM evaluation (syntactic framing fragility, negation sensitivity), and AI governance. Her SentimentArcs methodology provides a rigorous pipeline for analyzing large textual corpora, and her work on AI creativity, emotion, and theory of mind bridges HCI, CSS, and AI safety.",
    foreground: [
      "SentimentArcs: quantitative methodology with documented adoption at scale",
      "ICML 2024 oral + 2025 Spotlight — peer-reviewed ML venue credentials",
      "GPT-3 paper (~378 citations) — landmark CSS/HCI study on AI and human judgment",
      "NIST CAISI PI — AI safety standards credential",
      "Notre Dame–IBM predictive policing research — applied AI fairness/justice",
      "FAccT and NeurIPS papers under review — top CSS/AI venues",
      "'Computational social science' framing throughout",
    ],
    downplay: [
      "Traditional literary scholarship (mention briefly as methodological origin story, not primary identity)",
      "Kenyon / SLAC context (implies small-scale; iSchools want research infrastructure)",
    ],
    pitch: "A computational social scientist who uses literature as a methodological laboratory — producing both rigorous large-scale methods and the interpretive depth that CSS alone often lacks.",
    pathway: "Michigan iSchool was a live consideration (campus visit completed). Target other top iSchools: UC Berkeley I School, UW iSchool, UT Austin, Drexel, Syracuse. Frame application around CSS + AI governance + human-AI interaction. The ICML oral and FAccT work are the anchors; SentimentArcs is the proof of method.",
    timeline: "Active now — Michigan was recent; reframe and apply to others in 2025–26 cycle",
    upside: "Strong fit for what you actually do; cross-disciplinary legitimacy; research resources; CSS community is growing",
    risk: "Michigan visit revealed misalignment — worth diagnosing what was off before applying to others in the same mold. May require more CS-adjacent co-authorship to be fully competitive at top iSchools.",
    move: "Honestly evaluate the Michigan visit: was the misalignment about the position's expectations, or about how you presented yourself? If presentation, reframe with CSS/methods-first identity. If structural, identify which iSchools have more humanistic AI programs.",
  },
  {
    id: "speaker",
    icon: "🎤",
    title: "Author, Speaker & Public Intellectual",
    subtitle: "Books · Keynotes · Substack · Media",
    color: "#7c2d12",
    accent: "#ea580c",
    bg: "#fff7ed",
    lead: "Katherine Elkins is the author of The Shapes of Stories (Cambridge UP, 2022) and the forthcoming Knowing Otherwise, a theorist of AI creativity and human cognition, and one of the few voices in the public conversation on AI with genuine depth in both computational methods and literary theory. She has spoken at UNESCO, OpenAI, Yale, WPI, Deloitte, and Al Jazeera.",
    foreground: [
      "Two Cambridge / Oxford UP books + two Audible courses = proven popular AND scholarly voice",
      "20+ keynotes including UNESCO, OpenAI, Yale, Al Jazeera",
      "Compelling origin story: built world's first human-centered AI curriculum in 2016 — before ChatGPT",
      "Knowing Otherwise as crossover book: literary theory that speaks directly to the AI moment",
      "SentimentArcs as 'the shapes of stories' — a concept that translates for general audiences",
      "NIST affiliation gives authority without requiring technical jargon",
    ],
    downplay: [
      "Governance bureaucracy",
      "Institutional politics",
      "Academic citation counts",
    ],
    pitch: "The humanist who got to AI first — and whose decade of thinking about machine creativity, narrative, and consciousness gives her something to say that technologists can't.",
    pathway: "Publish Knowing Otherwise with a crossover-friendly press or with a trade imprint (Norton, Penguin) rather than strictly academic. Build Substack or newsletter on AI + humanities. License SentimentArcs story as a podcast or documentary pitch. Hire a speaker's bureau agent (mid-six-figure keynote market). Audible course on AI and human creativity as next project.",
    timeline: "2–3 years to build (book is anchor)",
    upside: "Financial independence, brand ownership, no institutional ceiling, maximum creative freedom",
    risk: "Income is volatile without institutional base; requires aggressive self-promotion; academic credibility can erode without ongoing peer-reviewed output",
    move: "Identify a literary agent who handles crossover academic-trade books (see: Kate Crawford, Cathy O'Neil, Emily Bender). Knowing Otherwise needs to be evaluated for whether it works as a trade pitch or whether it's a gateway book that earns the trade deal.",
  },
  {
    id: "safety",
    icon: "🛡️",
    title: "AI Safety & Policy Institute",
    subtitle: "Think Tank · Governance · Federal Advisory",
    color: "#1c1917",
    accent: "#78716c",
    bg: "#fafaf9",
    lead: "Katherine Elkins is PI for the NIST AI Safety Institute Consortium (representing MLA) and author of a public comment introducing 'interpretive tractability' as a proposed standard for AI agent oversight. Her governance work spans comparative global AI regulation, open-source risk (ICML 2024 oral), and the epistemic dimensions of AI accountability — the questions of whether and how we can interpret what AI systems are actually doing.",
    foreground: [
      "NIST CAISI PI — federal AI safety credentialing, rare for a humanist",
      "'Interpretive tractability' concept — novel oversight standard grounded in empirical AI research",
      "ICML 2024 oral on open-source risk (~67 citations) — accepted in technical policy venues",
      "Comparative global AI regulation paper — legal/policy scholars cite this",
      "UNESCO MONDIACULT, Meta Transparency WG, OpenAI HE Forum — multi-stakeholder network",
      "Schmidt Sciences HAVI grant — demonstrates ability to run federally-relevant research",
    ],
    downplay: [
      "Literary theory (mention as epistemological background, not primary credential)",
      "SLAC context",
    ],
    pitch: "An AI safety researcher who understands that the hardest safety problems are interpretive, not just technical — and who has the institutional affiliations and peer-reviewed record to argue that at the policy table.",
    pathway: "Target: Belfer Center (Harvard Kennedy School — application already submitted), RAND, Brookings, CSET (Georgetown), Center for AI Safety, Future of Life Institute, AI Now Institute. Also: OSTP fellow, NSF program officer, Senate AI staff. The NIST affiliation is the key — it connects you to federal infrastructure. The 'interpretive tractability' concept needs a high-visibility publication (Foreign Affairs, Science, Nature, or a major policy journal).",
    timeline: "Active now — Belfer already applied; 1–2 years to land",
    upside: "Highest-impact policy work; national/international visibility; no teaching load; well-funded; connects to government and industry simultaneously",
    risk: "Competitive; requires sustained technical credibility — policy institutes want to cite peer-reviewed work, not just governance networks. A Nature or Science Policy Forum paper would be transformative here.",
    move: "Write the 'interpretive tractability' concept up as a 2,500-word accessible piece for a high-visibility venue (Lawfare, Tech Policy Press, or a Nature/Science comment). This is the move that converts NIST affiliation into think tank hiring currency.",
  },
  {
    id: "industry",
    icon: "🏢",
    title: "AI Company: Policy, Safety & Research",
    subtitle: "Anthropic · OpenAI · Google DeepMind · Meta AI",
    color: "#0c4a6e",
    accent: "#0284c7",
    bg: "#f0f9ff",
    lead: "Katherine Elkins brings a rare combination of credentials to AI company policy and safety work: NIST AI Safety Institute PI, ICML-published researcher on open-source risk, and the humanist perspective that AI companies increasingly recognize they need — not as PR, but as substantive epistemological input into alignment, interpretability, and governance.",
    foreground: [
      "NIST CAISI PI — direct federal safety credentialing that AI companies respect and need",
      "ICML oral + FAccT/NeurIPS papers — peer-reviewed technical credibility",
      "'Interpretive tractability' — demonstrates ability to generate novel frameworks, not just critique",
      "Meta Transparency WG, OpenAI HE Forum — already inside these organizations' networks",
      "GPT-3 paper (2020) — you were doing this before it was a career",
      "Schmidt Sciences HAVI — demonstrates ability to run externally-funded research programs",
    ],
    downplay: [
      "Traditional literary scholarship in initial outreach",
      "Institutional affiliation (Kenyon signals small-scale; lead with external affiliations)",
    ],
    pitch: "An AI safety researcher who has been inside the technical conversation since 2019, holds federal credentialing, publishes at ICML and FAccT, and brings the interpretive depth that alignment and interpretability research increasingly needs.",
    pathway: "Target roles: Policy Research Scientist (Anthropic), Responsible AI Research Scientist (Google DeepMind), Safety & Alignment Research (OpenAI), AI Governance Lead (Meta). The existing relationships with Meta Transparency WG and OpenAI HE Forum are warm contacts, not cold applications. The NIST affiliation is the credential that signals you're already trusted by the federal government.",
    timeline: "1–2 years; depends on whether you want to leave academia permanently",
    upside: "Highest compensation; resources; direct impact on deployed systems; works at the speed of the field",
    risk: "Loss of academic independence and scholarly identity; corporate constraints on publication and speech; may not want to publish critical AI research from inside an AI company",
    move: "Have a direct conversation with your Meta and OpenAI contacts about what roles would look like. Not a job inquiry — a 'what would the right role even be' conversation. That reframes you as a peer, not a supplicant.",
  },
  {
    id: "startup",
    icon: "🚀",
    title: "Startup Founder / EdTech Entrepreneur",
    subtitle: "Human-Centered AI Lab · WorkWiser · SentimentArcs",
    color: "#065f46",
    accent: "#10b981",
    bg: "#ecfdf5",
    lead: "Katherine Elkins co-founded Human-Centered AI Lab, Inc. (Ohio nonprofit, full governance, EIN), developed SentimentArcs as a deployable methodology adopted at 4,000+ institutions, and proposed WorkWiser as a workplace communication tool built on SentimentArcs methodology. She has demonstrated the ability to build institutional infrastructure, secure external funding, and translate scholarly research into scalable tools.",
    foreground: [
      "Human-Centered AI Lab, Inc. — incorporated nonprofit with full governance; can pivot to for-profit",
      "SentimentArcs — proven adoption at scale; potential API/licensing product",
      "WorkWiser — workplace communication tool concept (WIN Challenge application)",
      "NIST CAISI — federal credentialing that de-risks investor conversations",
      "Schmidt Sciences HAVI — demonstrates ability to attract significant external funding",
      "10-year curriculum track record — proof that the pedagogy-to-product pipeline is real",
    ],
    downplay: [
      "Academic publishing and traditional scholarly credentials",
      "Kenyon affiliation",
    ],
    pitch: "A researcher who built the methodology, proved adoption at scale, and is now ready to productize — backed by federal safety credentialing and a decade of curriculum development that serves as the R&D pipeline.",
    pathway: "Three potential product directions: (1) SentimentArcs as an API / analytics service for publishers, studios, or social media platforms. (2) WorkWiser as an enterprise communication intelligence tool — AI + emotion + professional writing. (3) IPHS curriculum as a licensable AI literacy product for universities. Funding path: SBIR/STTR grants (given NIST affiliation, excellent eligibility), angel/seed round, or Helix Center as fiscal sponsor for a nonprofit vehicle.",
    timeline: "2–5 years to meaningful revenue; can run parallel to academic position initially",
    upside: "Financial upside; ownership; builds on existing infrastructure; most creative freedom",
    risk: "Requires co-founder with technical product skills (Jon is research-technical, not product); startup failure rate; identity shift from scholar to entrepreneur is significant",
    move: "Decide whether SentimentArcs or WorkWiser is the right product vehicle. Consult with a startup advisor or SBIR grant specialist. The nonprofit structure can be retained for the research mission while a separate for-profit entity handles product.",
  },
  {
    id: "governance",
    icon: "🌐",
    title: "International AI Governance",
    subtitle: "UNESCO · OECD · EU AI Act · National Advisory",
    color: "#1e3a5f",
    accent: "#3b82f6",
    bg: "#eff6ff",
    lead: "Katherine Elkins has represented the humanities at UNESCO MONDIACULT, contributed to MLA's NIST consortium representation, and built a governance research record spanning comparative global AI regulation and AI agent security. She brings a cross-cultural, humanistic perspective to AI governance that neither technical nor legal scholars typically offer.",
    foreground: [
      "UNESCO MONDIACULT — international cultural AI governance; Cairo 2025",
      "NIST CAISI PI — US federal AI safety; bridges to international equivalents",
      "Comparative Global AI Regulation paper — cited across jurisdictions",
      "MLA representation — cultural/humanistic legitimacy in policy spaces dominated by tech and law",
      "International speaking: Cornell-Qatar, WPI, Concordia",
      "AI agent security NIST comment — concrete policy proposal, not just critique",
    ],
    downplay: [
      "Kenyon institutional context",
      "Granular DH methodology",
    ],
    pitch: "The governance voice that neither technologists nor lawyers can be: someone who understands what cultural heritage, narrative, consciousness, and epistemic authority mean — and can translate those concerns into policy language.",
    pathway: "Target: UNESCO permanent advisory roles, OECD AI Policy Observatory, EU AI Office researcher roles, national AI advisory boards (NIST AISIC steering, etc.), State Department AI diplomat track, Council of Europe AI governance. The existing UNESCO and NIST affiliations are the entry points. A Nature or Foreign Affairs governance paper is the visibility move.",
    timeline: "3–5 years to full transition; can run parallel to academic career",
    upside: "Highest international impact; unique position at the intersection of culture and governance; travel, networks, institutional prestige",
    risk: "Slower-moving than academic or industry; requires sustained presence in policy spaces (Brussels, Geneva, DC); compensation varies widely",
    move: "Request a more formal advisory role at UNESCO following MONDIACULT. Identify which OECD or Council of Europe working groups are currently recruiting expert members — the NIST affiliation makes US-side nomination straightforward.",
  },
  {
    id: "dept_chair",
    icon: "🗝️",
    title: "Department Chair",
    subtitle: "Comp Lit · English · Humanities · Liberal Arts R1/SLAC",
    color: "#3b1f0a",
    accent: "#92400e",
    bg: "#fffbeb",
    lead: "Katherine Elkins has directed IPHS for a decade, built a curriculum from the ground up, navigated complex institutional politics, secured external funding, managed faculty relationships, and maintained scholarly productivity throughout. She has the administrative record of a department chair without the title.",
    foreground: [
      "10-year directorship of IPHS: curriculum design, hiring advocacy, enrollment growth, external funding",
      "Schmidt Sciences grant — demonstrates ability to bring research dollars to a department",
      "Interdisciplinary program management with 90+ students/faculty FTE",
      "Navigated faculty governance, VSIP analysis, AAUP documentation — institutional knowledge",
      "Traditional scholarly record (books, prizes, publications) — department chair needs faculty respect",
      "NEH Teaching Professorship — demonstrates teaching distinction alongside research",
    ],
    downplay: [
      "External AI affiliations in initial conversations (can seem like you'd be absent from departmental work)",
      "Computational methods (may alienate traditional faculty you'd be leading)",
    ],
    pitch: "A scholar-administrator who has actually done the work of building a program — and who brings the external credibility and funding network to elevate a department, not just manage it.",
    pathway: "This is actually the most underrated path. The Kenyon experience, frustrating as it's been, is proof of administrative capacity. Target: Comp Lit or English chair searches at R1s and well-resourced SLACs. These positions are often undersubscribed because few strong scholars want the administrative burden. The AI dimension is an asset here — you'd be the chair who actually knows how to navigate the AI curriculum moment.",
    timeline: "1–2 years; can move quickly if the right search opens",
    upside: "Institutional legitimacy, salary, authority to actually change things, stability; potentially a pathway to Dean",
    risk: "Administrative burden consumes scholarship; requires finding a department whose culture isn't already toxic; real risk of repeating Kenyon dynamics in a new setting",
    move: "Identify 3–5 Comp Lit / English chair searches in the 2025–26 cycle. Approach this as a distinct track from the faculty/center searches — the application is different, the letters are different, and the fit criteria are different.",
  },
  {
    id: "foundation",
    icon: "💡",
    title: "Foundation Program Officer",
    subtitle: "Mellon · NEH · Schmidt · Rockefeller",
    color: "#4c1d95",
    accent: "#7c3aed",
    bg: "#faf5ff",
    lead: "Katherine Elkins has been both a grant recipient (Schmidt Sciences, NEH, Notre Dame–IBM) and a grant evaluator, and has built the external network — across humanities, AI, governance, and education — that foundations need in a program officer who can identify, fund, and connect transformative work.",
    foreground: [
      "Schmidt Sciences HAVI PI — knows how major science philanthropy works from the inside",
      "NEH Teaching Professorship recipient — understands humanities funding landscape",
      "Mellon 'Unruly Intelligence' grant application — demonstrates ability to frame humanities AI work for foundations",
      "WIN Challenge (Helix Center) — demonstrates ability to work across philanthropic vehicles",
      "NIST affiliation — bridges humanities and federal science funding cultures",
      "Broad interdisciplinary network: UNESCO, MLA, iSchools, AI safety, DH",
    ],
    downplay: [
      "Scholarly publication record (not primary criterion for program officers)",
      "Kenyon institutional dynamics",
    ],
    pitch: "A grantee who understands what makes a research program transformative — and has the network to identify and connect scholars doing work foundations haven't yet discovered.",
    pathway: "Target: Mellon Foundation (Humanities and Technology program), NEH program officer (AI and digital humanities), Schmidt Sciences program staff, Rockefeller (AI and society), MacArthur (technology and democracy). These roles are rarely advertised — they're filled through network. The NIST and Mellon application relationships are the warm contacts.",
    timeline: "2–4 years; depends on internal transitions at foundations",
    upside: "High impact without managing students or teaching; excellent salary; intellectual breadth; no publish-or-perish; New York or DC-based",
    risk: "Moves you fully out of scholarship; hard to return to faculty track; culture of some foundations is quite bureaucratic",
    move: "Have a direct conversation with your Mellon program officer contact about what a transition to that side of the table would look like. Identify who the relevant program staff are at Schmidt Sciences and whether there are advisory roles that could lead to a program staff position.",
  },
];

const MATRIX = [
  { dim: "Scholarly identity", vals: { chair:5, center:3, ischool:3, speaker:4, safety:2, industry:1, startup:1, governance:2, dept_chair:4, foundation:3 } },
  { dim: "Financial upside", vals: { chair:3, center:4, ischool:3, speaker:5, safety:3, industry:5, startup:5, governance:3, dept_chair:3, foundation:4 } },
  { dim: "Institutional stability", vals: { chair:5, center:4, ischool:4, speaker:2, safety:3, industry:3, startup:1, governance:3, dept_chair:5, foundation:4 } },
  { dim: "AI field impact", vals: { chair:2, center:5, ischool:4, speaker:3, safety:5, industry:5, startup:3, governance:4, dept_chair:2, foundation:3 } },
  { dim: "Builds on existing network", vals: { chair:3, center:5, ischool:4, speaker:4, safety:5, industry:4, startup:4, governance:4, dept_chair:3, foundation:4 } },
  { dim: "Speed to transition", vals: { chair:2, center:4, ischool:3, speaker:3, safety:4, industry:4, startup:3, governance:2, dept_chair:3, foundation:2 } },
  { dim: "Creative/intellectual freedom", vals: { chair:3, center:4, ischool:3, speaker:5, safety:3, industry:2, startup:5, governance:3, dept_chair:2, foundation:3 } },
];

const DOT = ({n}) => (
  <span style={{display:"inline-flex",gap:2,alignItems:"center"}}>
    {[1,2,3,4,5].map(i=>(
      <span key={i} style={{width:7,height:7,borderRadius:"50%",background:i<=n?"#1a3a5c":"#dde",display:"inline-block"}}/>
    ))}
  </span>
);

export default function App() {
  const [active, setActive] = useState(null);
  const [view, setView] = useState("profiles"); // profiles | matrix
  const profile = PROFILES.find(p => p.id === active);

  return (
    <div style={{fontFamily:"'Georgia',serif",maxWidth:920,margin:"0 auto",padding:"16px 18px",background:"#fafaf8"}}>
      {/* Header */}
      <div style={{borderBottom:"3px double #1a3a5c",paddingBottom:12,marginBottom:16}}>
        <div style={{fontSize:11,letterSpacing:3,textTransform:"uppercase",color:"#888",marginBottom:4}}>Strategic Career Mapping</div>
        <div style={{fontSize:22,fontWeight:700,color:"#1a3a5c",fontFamily:"'Georgia',serif"}}>Katherine Elkins — Career Profile Matrix</div>
        <div style={{fontSize:12,color:"#666",marginTop:3}}>10 distinct career trajectories · each requiring a different primary identity · updated March 2026</div>
        <div style={{marginTop:10,display:"flex",gap:8}}>
          {["profiles","matrix"].map(v=>(
            <button key={v} onClick={()=>setView(v)} style={{padding:"5px 14px",borderRadius:3,border:"1px solid",borderColor:view===v?"#1a3a5c":"#ccc",background:view===v?"#1a3a5c":"#fff",color:view===v?"#fff":"#444",fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>
              {v==="profiles"?"All Profiles":"Comparison Matrix"}
            </button>
          ))}
        </div>
      </div>

      {view === "profiles" && !active && (
        <div>
          <div style={{fontSize:11,color:"#999",marginBottom:14}}>Click any profile to expand the full strategic brief.</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:12}}>
            {PROFILES.map(p=>(
              <div key={p.id} onClick={()=>setActive(p.id)} style={{border:`1px solid ${p.accent}40`,borderLeft:`4px solid ${p.accent}`,borderRadius:5,padding:"12px 14px",background:p.bg,cursor:"pointer",transition:"box-shadow .15s"}}
                onMouseEnter={e=>e.currentTarget.style.boxShadow="0 2px 10px rgba(0,0,0,.1)"}
                onMouseLeave={e=>e.currentTarget.style.boxShadow="none"}
              >
                <div style={{fontSize:22,marginBottom:4}}>{p.icon}</div>
                <div style={{fontWeight:700,fontSize:14,color:p.color}}>{p.title}</div>
                <div style={{fontSize:11,color:"#666",marginBottom:8}}>{p.subtitle}</div>
                <div style={{fontSize:11,color:p.accent,fontStyle:"italic",lineHeight:1.5}}>"{p.pitch}"</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {view === "profiles" && active && profile && (
        <div>
          <button onClick={()=>setActive(null)} style={{fontSize:11,color:"#888",background:"none",border:"none",cursor:"pointer",marginBottom:14,padding:0,fontFamily:"inherit"}}>← All profiles</button>
          <div style={{borderLeft:`5px solid ${profile.accent}`,paddingLeft:16,marginBottom:20}}>
            <div style={{fontSize:26}}>{profile.icon}</div>
            <div style={{fontSize:20,fontWeight:700,color:profile.color}}>{profile.title}</div>
            <div style={{fontSize:13,color:"#666"}}>{profile.subtitle}</div>
          </div>

          {/* Lead identity */}
          <Section title="Lead Identity Statement" color={profile.accent}>
            <p style={{fontSize:13,lineHeight:1.75,color:"#333",fontStyle:"italic",margin:0}}>{profile.lead}</p>
          </Section>

          {/* Two column */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,margin:"14px 0"}}>
            <Section title="Foreground" color={profile.accent}>
              <ul style={{margin:0,paddingLeft:16}}>
                {profile.foreground.map((f,i)=><li key={i} style={{fontSize:12,color:"#333",marginBottom:5,lineHeight:1.55}}>{f}</li>)}
              </ul>
            </Section>
            <Section title="Downplay / Reframe" color="#999">
              <ul style={{margin:0,paddingLeft:16}}>
                {profile.downplay.map((d,i)=><li key={i} style={{fontSize:12,color:"#555",marginBottom:5,lineHeight:1.55}}>{d}</li>)}
              </ul>
            </Section>
          </div>

          <Section title="Pathway" color={profile.accent}>
            <p style={{fontSize:12,lineHeight:1.7,margin:0,color:"#333"}}>{profile.pathway}</p>
          </Section>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,margin:"14px 0"}}>
            <MiniCard label="Timeline" value={profile.timeline} color={profile.accent}/>
            <MiniCard label="Upside" value={profile.upside} color="#2d7a2d"/>
            <MiniCard label="Risk / Gap" value={profile.risk} color="#c0392b"/>
          </div>

          <Section title="Move to Make Now" color={profile.accent} highlight>
            <p style={{fontSize:13,lineHeight:1.7,margin:0,color:"#1a1a1a",fontWeight:500}}>{profile.move}</p>
          </Section>

          {/* Mini matrix for this profile */}
          <Section title="Profile Scores" color="#888">
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              {MATRIX.map(row=>(
                <div key={row.dim} style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{width:200,fontSize:11,color:"#555",flexShrink:0}}>{row.dim}</div>
                  <DOT n={row.vals[active]}/>
                  <div style={{fontSize:11,color:"#aaa",marginLeft:4}}>{row.vals[active]}/5</div>
                </div>
              ))}
            </div>
          </Section>

          {/* Navigate between profiles */}
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:16}}>
            {PROFILES.filter(p=>p.id!==active).map(p=>(
              <button key={p.id} onClick={()=>setActive(p.id)} style={{fontSize:11,padding:"4px 10px",border:`1px solid ${p.accent}60`,borderRadius:3,background:p.bg,color:p.color,cursor:"pointer",fontFamily:"inherit"}}>
                {p.icon} {p.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {view === "matrix" && (
        <div>
          <div style={{fontSize:11,color:"#999",marginBottom:14}}>Scores 1–5 across 7 dimensions. Click a profile name to open its brief.</div>
          <div style={{overflowX:"auto"}}>
            <table style={{borderCollapse:"collapse",width:"100%",fontSize:11}}>
              <thead>
                <tr style={{borderBottom:"2px solid #1a3a5c"}}>
                  <th style={{textAlign:"left",padding:"8px 10px",fontWeight:700,fontSize:11,color:"#1a3a5c",minWidth:160}}>Dimension</th>
                  {PROFILES.map(p=>(
                    <th key={p.id} style={{padding:"6px 8px",textAlign:"center",cursor:"pointer",minWidth:72}} onClick={()=>{setActive(p.id);setView("profiles")}}>
                      <div style={{fontSize:16}}>{p.icon}</div>
                      <div style={{fontSize:9,color:p.accent,fontWeight:700,lineHeight:1.3}}>{p.title.split(" ").slice(0,3).join(" ")}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATRIX.map((row,ri)=>(
                  <tr key={row.dim} style={{background:ri%2===0?"#f8f8f6":"#fff",borderBottom:"1px solid #eee"}}>
                    <td style={{padding:"7px 10px",fontWeight:600,color:"#333",fontSize:11}}>{row.dim}</td>
                    {PROFILES.map(p=>{
                      const v=row.vals[p.id];
                      return <td key={p.id} style={{textAlign:"center",padding:"7px 4px"}}>
                        <div style={{width:24,height:24,borderRadius:"50%",background:v>=4?"#1a3a5c":v===3?"#7c9bbf":"#dde",color:v>=4?"#fff":v===3?"#fff":"#888",fontSize:10,fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center"}}>{v}</div>
                      </td>;
                    })}
                  </tr>
                ))}
                <tr style={{borderTop:"2px solid #1a3a5c",background:"#f0f4fa"}}>
                  <td style={{padding:"7px 10px",fontWeight:700,fontSize:11,color:"#1a3a5c"}}>TOTAL</td>
                  {PROFILES.map(p=>{
                    const total=MATRIX.reduce((s,r)=>s+r.vals[p.id],0);
                    return <td key={p.id} style={{textAlign:"center",padding:"7px 4px",fontWeight:700,fontSize:13,color:"#1a3a5c"}}>{total}</td>;
                  })}
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{marginTop:16,fontSize:11,color:"#aaa"}}>Note: scores reflect fit with your existing credentials and network, not absolute career desirability. The right path depends on what you want from work, not just what you can access.</div>
        </div>
      )}

      <div style={{marginTop:20,fontSize:10,color:"#ccc",borderTop:"1px solid #eee",paddingTop:8}}>
        Career profiles · Katherine Elkins · March 2026 · 10 tracks · companion to ke-master.jsx
      </div>
    </div>
  );
}

function Section({title, color="#1a3a5c", children, highlight=false}) {
  return (
    <div style={{marginBottom:14,border:`1px solid ${color}20`,borderRadius:4,overflow:"hidden"}}>
      <div style={{background:highlight?color+"15":"#f5f5f3",padding:"5px 12px",borderBottom:`1px solid ${color}20`}}>
        <span style={{fontSize:10,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:highlight?color:"#888"}}>{title}</span>
      </div>
      <div style={{padding:"10px 12px"}}>{children}</div>
    </div>
  );
}

function MiniCard({label, value, color}) {
  return (
    <div style={{border:`1px solid ${color}30`,borderRadius:4,padding:"8px 10px",background:`${color}08`}}>
      <div style={{fontSize:9,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color,marginBottom:4}}>{label}</div>
      <div style={{fontSize:11,color:"#333",lineHeight:1.5}}>{value}</div>
    </div>
  );
}
