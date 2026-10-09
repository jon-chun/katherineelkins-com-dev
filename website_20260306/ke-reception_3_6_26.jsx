import { useState } from "react";

// ─── DATA ──────────────────────────────────────────────────────────────────

const OVERVIEW = {
  trajectory: "189 citations in the most recent tracked year — the highest single-year total, accelerating",
  disciplines: ["Computational linguistics","AI/ML research","Digital humanities","Literary studies","Philosophy of AI","Education technology","Cognitive science","Sustainability science","Media studies","Legal/policy studies","Computational social science","Translation studies"],
  principle: "Citation counts are field-relative and date quickly. What matters is the epistemic work each contribution does — who takes it up, and why.",
};

const DOMAINS = [
  {
    id: "gpt3",
    icon: "✍️",
    title: "AI Creativity & the Writer's Turing Test",
    anchor: "\"Can GPT-3 Pass a Writer's Turing Test?\" · Journal of Cultural Analytics, 2020 · with Jon Chun",
    color: "#1a3a5c",
    bg: "#eff6ff",
    role: "Paradigm Case",
    roleDesc: "The paper supplies the canonical demonstration whenever a scholar needs to establish that LLMs can already produce human-level creative prose. Published before the mainstream conversation existed, it set the terms of debate.",
    venues: "Journal of Cultural Analytics · archived on gwern.net alongside landmark AI milestones · rare for a humanist-authored paper",
    howCited: [
      {
        use: "Establishing GPT-3 as a creative agent",
        who: "Floridi & Chiriatti (\"GPT-3: Its Nature, Scope, Limits and Consequences,\" Minds and Machines); Korngiebel & Mooney on GPT-3 in medicine; Spitale et al. on GPT-3 and misinformation",
        what: "High-level overviews of GPT-3 invoke the experiment as concrete proof that GPT-3 produces 'impressive prose' and passes as a writer — not merely completes cloze tasks. The paper is the empirical anchor for characterizing what GPT-3 can do."
      },
      {
        use: "Framing AI authorship and ghostwriting ethics",
        who: "Porsdam Mann, Earp & Müller on LLM-assisted academic writing; Ingley & Pack on AI-supported scientific writing; Teixeira da Silva & Tsigaris on AI authorship ethics",
        what: "Cite the Turing-test design as evidence that readers can be fooled — making debates about AI authorship attribution urgent. Draxler et al. coin 'the AI ghostwriter effect,' a concept that directly resonates with the paper's findings about invisible AI contributions to text."
      },
      {
        use: "Motivating human–AI co-writing research",
        who: "HCI studies on authorship perception; education papers on student AI use",
        what: "Use the GPT-3 findings to justify experiments where humans and AI co-produce text and readers judge authorship. The 'passing' result motivates the whole experimental paradigm."
      },
      {
        use: "Providing behavioral evidence in philosophy of AI",
        who: "Hagendorff et al. on 'machine psychology'; Gubelmann on LLM agency and speech acts",
        what: "Pair the paper with Floridi & Chiriatti to argue that LLMs meet human-level stylistic standards behaviourally, even if philosophically we may deny them 'real' authorship. Frames the empirical side of agency debates."
      },
      {
        use: "AI-generated art and creative responsibility",
        who: "Vyas on ethical implications of generative AI in art and media; Illia & Colleoni on AI and business ethics",
        what: "Invoke the passing result to argue AI is a new kind of creative actor, not just a tool — shifting discussions of creative responsibility, the status of AI-generated artworks, and the role of human creators."
      },
    ],
    related: [
      "\"AI Comes for the Author\" (Poetics Today, 2024) — cited when scholars seek humanistic interpretation of what LLM capabilities mean for the author function",
      "\"What the Rise of AI Means for Narrative Studies\" (Narrative, 2022) — cited in literary studies grappling with how AI authorship changes disciplinary assumptions",
      "\"In Search of a Translator: Using AI to Evaluate What's Lost in Translation\" (Frontiers in Computer Science, 2024) — translation scholars and cross-lingual NLP researchers cite this for richer evaluation metrics incorporating humanistic criteria beyond lexical overlap",
    ]
  },
  {
    id: "narrative",
    icon: "📈",
    title: "Computational Narrative & SentimentArcs",
    anchor: "The Shapes of Stories (Cambridge UP, 2022) · SentimentArcs methodology · JCA papers",
    color: "#2d5a27",
    bg: "#f0fdf4",
    role: "Methodology Template",
    roleDesc: "SentimentArcs is adopted as a pipeline that can be taken up, adapted, and extended. The methodology's emphasis on affective structure over plot events reframes what computational reading actually measures.",
    venues: "Cambridge University Press · Journal of Cultural Analytics · 90K+ downloads · 4,000+ institutions",
    howCited: [
      {
        use: "Adopting and extending the pipeline",
        who: "Literary scholars across multiple national traditions and genres",
        what: "Adapt the SentimentArcs pipeline to new corpora — novels, fan fiction, film, games, medical narratives, social media. The methodology travels because it is genre-agnostic and the codebase is documented and accessible."
      },
      {
        use: "Reframing narrative structure",
        who: "Computational humanities researchers and narratologists",
        what: "Use the argument that emotional arc is more foundational than plot as a rationale for organizing and clustering narrative corpora computationally. Stories understood through emotional 'shapes' rather than through events alone — this conceptual shift is what gets cited."
      },
      {
        use: "Bridging XAI and narratology",
        who: "Explainable AI researchers",
        what: "Cite the Explainable AI for Story Analysis paper as demonstrating that humanistic concerns about explanation and computational concerns about transparency are the same problem approached from different directions."
      },
      {
        use: "Connecting formal method to cultural theory",
        who: "Scholars working on cultural sociology, risk discourse, genre theory (e.g., Phil Smith's British heatwave discourse study applying Frye's genre model to big-data newspaper corpora)",
        what: "Use SentimentArcs as precedent for applying quantitative methods to literary/cultural pattern analysis — connecting computational method to humanistic conceptual frameworks."
      },
      {
        use: "Cognitive science and LLM evaluation",
        who: "Researchers comparing conceptual structure in humans vs. LLMs (e.g., Suresh et al.)",
        what: "Use narrative arc findings to test whether LLMs reproduce the emotional shapes of human-authored stories — making the methodology a benchmark for AI evaluation from a humanistic angle."
      },
    ],
    related: [
      "\"Beyond Plot: How Sentiment Analysis Reshapes Our Understanding of Narrative Structure\" (JCA, 2025) — extends the conceptual shift from events to affect as the organizing principle",
      "\"The Shapes of Cinderella: Emotional Architecture and the Language of Moral Difference\" (Humanities, 2025) — cross-cultural narrative portability; emotional arc as predictor of which stories travel",
      "\"Can Sentiment Analysis Reveal Structure in a Plotless Novel?\" (arXiv, 2019) — cited by computational scholars working on modernist/experimental literature",
    ]
  },
  {
    id: "curriculum",
    icon: "🎓",
    title: "Human-Centered AI Curriculum",
    anchor: "\"The Crisis of AI: A New Digital Humanities Curriculum for Human-Centred AI\" · IJHAC, 2023 · with Jon Chun",
    color: "#7c2d12",
    bg: "#fff7ed",
    role: "Epistemological Framework",
    roleDesc: "The paper is taken up across four distinct scholarly communities, each citing it for a different purpose — not because it is popular, but because its argument that AI transforms epistemic authority travels across disciplinary lines.",
    venues: "International Journal of Humanities and Arts Computing · DOI: 10.3366/ijhac.2023.0310",
    howCited: [
      {
        use: "Higher Education & Curriculum (Domain 1)",
        who: "Scholars in education research, learning sciences, instructional design",
        what: "Cited to argue that AI forces a reconceptualization of what counts as knowledge, evidence, and authorship in university classrooms — treating curricula as sites where epistemic norms are negotiated under conditions of pervasive AI."
      },
      {
        use: "Digital Humanities & Creative Labor (Domain 2)",
        who: "DH researchers experimenting with AI-generated historical narratives, hybrid human-AI methods, digital editing",
        what: "Cited to justify treating AI as a participant in interpretive practices whose epistemic roles must be theorized — not as a black-box service. The integrated curriculum model provides a vocabulary for this theorization."
      },
      {
        use: "Humanities Futures & Institutional Design (Domain 3)",
        who: "Scholars on university futures, reskilling, knowledge infrastructure",
        what: "Cited to argue that the central issue is not how to deploy AI efficiently but how AI redistributes epistemic authority within universities and knowledge infrastructures."
      },
      {
        use: "AI Safety & Governance (Domain 4)",
        who: "Ethics and trustworthiness researchers, AI policy scholars",
        what: "Cited to emphasize that the stakes of AI are epistemic before they are technical — that what matters is how AI systems participate in, mediate, or displace human acts of knowing."
      },
    ],
    related: [
      "\"A(I) University in Ruins: What Remains in a World with LLMs?\" (PMLA) — cited alongside the curriculum paper in discussions of how AI challenges institutional knowledge structures",
      "Citation trajectory: accelerating — 189 in most recent year, the highest single-year total in the profile's history",
    ]
  },
  {
    id: "opensource",
    icon: "⚖️",
    title: "Open-Source AI Risk & Governance",
    anchor: "\"Risks and Opportunities of Open-Source Generative AI\" · ICML 2024 (oral) + ICML 2025 CodeML Workshop (Spotlight) · with Jon Chun",
    color: "#4c1d95",
    bg: "#faf5ff",
    role: "Taxonomy-Builder",
    roleDesc: "The paper moved the open-source AI conversation from a vague sense that 'open-source might be dangerous' to a structured, articulated field. Citing scholars do not re-argue the categories — they build on them.",
    venues: "ICML 2024 oral presentation (top 2%) · ICML 2025 Workshop Spotlight · unusual for a humanities-trained scholar",
    howCited: [
      {
        use: "Defining what 'open' actually means",
        who: "AI policy researchers, ML engineers, governance scholars",
        what: "Use the paper's taxonomy to distinguish weights, data, documentation, and governance as separable dimensions of 'openness' — a distinction without which risk analysis is impossible."
      },
      {
        use: "Building risk taxonomies",
        who: "AI safety researchers, policy analysts",
        what: "Adopt the paper's categories to differentiate risks specific to open-source deployment: model theft, fine-tuning for misuse, proliferation of unsafe variants, agentic ecosystem propagation."
      },
      {
        use: "Arguing that model access is a governance lever",
        who: "AI governance scholars and policymakers",
        what: "Use the framework to position access-tiering and documentation requirements as first-order governance questions, not technical afterthoughts."
      },
      {
        use: "Red-teaming and security practices",
        who: "Security researchers working on locally deployable models",
        what: "Adapt the paper's risk framework for models that can be run locally — a different threat surface from API-only models that prior governance work had not systematically addressed."
      },
    ],
    related: [
      "\"Comparative Global AI Regulation\" (2023) — these two papers are co-cited by scholars who want both a risk taxonomy and a regulatory framework",
      "NIST CAISI public comment introducing 'interpretive tractability' — extends the governance framing to AI agent oversight",
    ]
  },
  {
    id: "regulation",
    icon: "🌐",
    title: "Comparative Global AI Regulation",
    anchor: "\"Comparative Global AI Regulation: Policy Perspectives from the EU, China, and the US\" · 2023 · with Jon Chun",
    color: "#065f46",
    bg: "#f0fdf4",
    role: "Canonical Map",
    roleDesc: "Researchers across sectors treat the tripartite EU/China/US framework as settled geography. They assume the map and build sector-specific analyses on top of it.",
    venues: "Widely cited in legal, policy, and governance scholarship across jurisdictions",
    howCited: [
      {
        use: "Establishing the three-pole framework",
        who: "Legal scholars, policy analysts, governance researchers globally",
        what: "The EU risk-regulation model, Chinese state-led developmental model, and US innovation-driven approach are now a standard taxonomy — authors invoke all three without re-arguing the categories."
      },
      {
        use: "Sector-specific regulatory analysis",
        who: "EU company law scholars; Brazilian legal practice researchers; banking regulation scholars; law enforcement AI researchers",
        what: "Build sector-specific analyses on top of the three-pole framework — applying it to financial systems, police AI, labor law, healthcare regulation, and digital sovereignty."
      },
      {
        use: "US-China diplomatic and technological competition",
        who: "International relations and technology diplomacy scholars",
        what: "Use the framework to analyze regulatory divergence as a dimension of geopolitical competition — the three models are also three visions of the relationship between state, market, and technology."
      },
    ],
    related: [
      "Frequently co-cited with the open-source AI paper by scholars who want both risk taxonomy and regulatory context",
      "Informs Kate's NIST CAISI representation: comparative regulatory expertise underlies the MLA's institutional positioning in federal AI safety work",
    ]
  },
  {
    id: "audit",
    icon: "🔍",
    title: "AI Ethics Auditing",
    anchor: "\"Ethical Auditing of LLM Chatbots\" · 2023 · with Jon Chun",
    color: "#1c1917",
    bg: "#fafaf9",
    role: "Genre-Defining",
    roleDesc: "The paper helped define scenario-driven, comparative ethics auditing as a genre of AI research — a methodology that others now pursue, refine, and cite as evidence in policy and guideline documents.",
    venues: "AI ethics and responsible AI research venues",
    howCited: [
      {
        use: "Establishing scenario-driven audit methodology",
        who: "AI ethics researchers and responsible AI practitioners",
        what: "Adopt the multi-scenario, multi-model comparative design as a template — auditing chatbots across a range of ethical dimensions rather than a single use case."
      },
      {
        use: "Connecting audits to humanities and pedagogy",
        who: "Scholars on AI and authorship, AI and university life (drawing on 'AI Comes for the Author,' 'A(I) University in Ruins,' Nelson et al. on Collaborative Intelligence)",
        what: "Situate ethics audit findings within broader questions about LLM agency and authorship — the same models whose writerly powers the GPT-3 paper demonstrated are shown here to embody specific, sometimes inconsistent, ethical frameworks."
      },
      {
        use: "Informing policy and guidelines",
        who: "Policy document authors and AI governance bodies",
        what: "Cite the audit findings as evidence in policy recommendations about chatbot deployment standards — bridging empirical findings and normative guidance."
      },
    ],
    related: [
      "The ethics audit domain interlocks with the creativity domain: the same models whose creative powers the GPT-3 paper established are here shown to have ethical profiles that must be understood before deployment",
      "Builds toward the 'interpretive tractability' concept in the NIST CAISI comment — the question of whether we can actually interpret what AI systems are doing",
    ]
  },
  {
    id: "philosophy",
    icon: "📜",
    title: "Philosophy of Literature & Modernist Studies",
    anchor: "Essays in PMLA · MLQ · Philosophy and Literature · Comparative Literature Studies · Narrative · Poetics Today · MLN",
    color: "#3b1f0a",
    bg: "#fffbeb",
    role: "Sustained Scholarly Life",
    roleDesc: "Traditional humanities scholarship on memory, consciousness, and narrative (Proust, Woolf, Kafka, Wordsworth, Baudelaire, Plato, Sappho) continues to circulate in philosophy-of-literature and modernist studies. These essays are not early work superseded by AI interests — they are the epistemological foundation on which the AI arguments rest.",
    venues: "PMLA · Modern Language Quarterly · Philosophy and Literature · Comparative Literature Studies · Narrative · Poetics Today · MLN · Graduate Faculty Philosophy Journal",
    howCited: [
      {
        use: "Proust studies and philosophy of memory",
        who: "Scholars in modernist memory, phenomenology, philosophy of literature",
        what: "Essays on Proust's consciousness, novel time, and the relationship between memory and material significance (MLQ 2008) continue to be cited in Proust studies and in the philosophy of mind / literature intersection. The OUP edited volume (2022) is a sustained reference point in this community."
      },
      {
        use: "Cultural transmission and anti-archival memory",
        who: "Scholars working on Baudelaire, cultural transmission, ars memorativa",
        what: "'Middling Memories and Dreams of Oblivion' (CLS, 2002; A. Owen Aldridge Prize 2001) is cited in scholarship on how cultural forms transmit beyond institutional archives — an argument that connects to questions about AI and cultural memory."
      },
      {
        use: "Modernist influence and intertextuality",
        who: "Modernist studies scholars",
        what: "'Memory and Material Significance: Composing Modernist Influence' (MLQ, 2008) is cited in work on Proust-Woolf intertextual relationships and on how modernist writers compose influence as a material practice."
      },
      {
        use: "Lyric address and embodied knowing",
        who: "Classical reception scholars and lyric theory",
        what: "'Naming the Lyric' (Plato/Sappho) is cited in work on the lyric address relationship and on what embodied knowing looks like in ancient poetic form."
      },
    ],
    related: [
      "Knowing Otherwise (in progress, U Chicago / Northwestern target) — book manuscript drawing these essays into a unified epistemological argument",
      "The continuity of this traditional scholarship is a credential: it establishes that the AI work isn't a pivot but a deepening",
      "The argument of the book — that mechanistic/juridical models of knowing fail, and literature enacts an alternative epistemology — is the same argument as the AI work, at a different scale",
    ]
  },
];

const SYNTHESIS = [
  {
    label: "You are a framework-provider, not a topic-follower",
    text: "Across every domain, citing scholars treat Kate's work as providing the framework, taxonomy, paradigm case, or methodology that structures how they conduct their conversation. This is field-defining influence — distinct from being highly cited because you work on a hot topic."
  },
  {
    label: "The domains are a single coherent argument",
    text: "The GPT-3 paper asks: can AI produce human-level creative work? SentimentArcs asks: what formal properties structure that work? The curriculum paper asks: what happens to knowledge when AI can do this? The governance papers ask: how should we regulate a technology with these capabilities? The philosophy essays ask: what kind of knowing does this displace? These are not separate interests — they are the same question at different scales."
  },
  {
    label: "Interdisciplinary reach is structural, not accidental",
    text: "The work reaches computational linguistics, legal studies, medical education, XAI, literary theory, and international relations because the core argument (that AI transforms epistemic authority, not just task efficiency) is relevant wherever knowledge is produced. Scholars in otherwise unconnected fields are independently finding the same frameworks useful."
  },
  {
    label: "The AI work extends, rather than breaks from, the literary work",
    text: "Knowing Otherwise makes this argument explicitly: the mechanistic/juridical model of knowing that philosophy endorses is exactly what AI instantiates. The book is not a 'crossover' between two careers — it is the synthesis that the whole body of work has been building toward."
  },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────

const Pill = ({ text, color = "#1a3a5c", bg = "#e8f0f8" }) => (
  <span style={{ display:"inline-block", padding:"2px 8px", borderRadius:10, fontSize:10, fontWeight:700, color, background:bg, marginRight:4, marginBottom:3 }}>{text}</span>
);

// ─── APP ──────────────────────────────────────────────────────────────────

export default function App() {
  const [active, setActive] = useState(null);
  const domain = DOMAINS.find(d => d.id === active);

  return (
    <div style={{ fontFamily:"'Palatino Linotype','Book Antiqua',Palatino,Georgia,serif", maxWidth:900, margin:"0 auto", padding:"16px 18px", background:"#fdfcfa", minHeight:"100vh" }}>

      {/* Header */}
      <div style={{ borderBottom:"3px double #1a3a5c", paddingBottom:14, marginBottom:18 }}>
        <div style={{ fontSize:10, letterSpacing:3, textTransform:"uppercase", color:"#888", marginBottom:5 }}>Research Reception & Impact</div>
        <div style={{ fontSize:23, fontWeight:700, color:"#1a3a5c" }}>Katherine Elkins — How the Work Is Used</div>
        <div style={{ fontSize:12, color:"#666", marginTop:4, lineHeight:1.6 }}>
          A qualitative map of scholarly reception across 7 domains · {DOMAINS.length} contribution clusters · trajectory accelerating
        </div>
        <div style={{ marginTop:10, padding:"9px 12px", background:"#f0f4fa", borderLeft:"3px solid #1a3a5c", borderRadius:"0 4px 4px 0", fontSize:12, color:"#333", fontStyle:"italic", lineHeight:1.65 }}>
          "{OVERVIEW.principle}"
        </div>
        <div style={{ marginTop:10, display:"flex", flexWrap:"wrap", gap:4 }}>
          {OVERVIEW.disciplines.map(d => <Pill key={d} text={d} />)}
        </div>
      </div>

      {/* Domain list */}
      {!active && (
        <div>
          <div style={{ fontSize:11, color:"#999", marginBottom:14 }}>Click any domain to see who cites it and why.</div>
          {DOMAINS.map(d => (
            <div key={d.id} onClick={() => setActive(d.id)}
              style={{ border:`1px solid ${d.color}25`, borderLeft:`5px solid ${d.color}`, borderRadius:5, padding:"13px 16px", marginBottom:10, background:d.bg, cursor:"pointer" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,.09)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              <div style={{ display:"flex", alignItems:"baseline", gap:10, flexWrap:"wrap" }}>
                <span style={{ fontSize:20 }}>{d.icon}</span>
                <span style={{ fontSize:15, fontWeight:700, color:d.color }}>{d.title}</span>
                <Pill text={d.role} color={d.color} bg={d.bg} />
              </div>
              <div style={{ fontSize:11, color:"#555", marginTop:5, fontStyle:"italic" }}>{d.anchor}</div>
              <div style={{ fontSize:12, color:"#444", marginTop:6, lineHeight:1.6 }}>{d.roleDesc}</div>
              <div style={{ fontSize:10, color:"#888", marginTop:6 }}>{d.venues}</div>
            </div>
          ))}

          {/* Synthesis */}
          <div style={{ marginTop:24, borderTop:"2px solid #e8e0d0", paddingTop:18 }}>
            <div style={{ fontSize:11, letterSpacing:2, textTransform:"uppercase", color:"#888", marginBottom:12 }}>Cross-Domain Synthesis</div>
            {SYNTHESIS.map((s, i) => (
              <div key={i} style={{ marginBottom:14, paddingLeft:14, borderLeft:"2px solid #c8b89a" }}>
                <div style={{ fontSize:12, fontWeight:700, color:"#3b2a1a", marginBottom:4 }}>{s.label}</div>
                <div style={{ fontSize:12, color:"#444", lineHeight:1.7 }}>{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Domain detail */}
      {active && domain && (
        <div>
          <button onClick={() => setActive(null)} style={{ fontSize:11, color:"#888", background:"none", border:"none", cursor:"pointer", marginBottom:14, padding:0, fontFamily:"inherit" }}>← All domains</button>

          <div style={{ borderLeft:`6px solid ${domain.color}`, paddingLeft:16, marginBottom:18 }}>
            <div style={{ fontSize:24 }}>{domain.icon}</div>
            <div style={{ fontSize:20, fontWeight:700, color:domain.color }}>{domain.title}</div>
            <Pill text={domain.role} color={domain.color} bg={domain.bg} />
            <div style={{ fontSize:12, color:"#555", marginTop:6, fontStyle:"italic" }}>{domain.anchor}</div>
            <div style={{ fontSize:11, color:"#777", marginTop:4 }}>Venues: {domain.venues}</div>
          </div>

          {/* Role description */}
          <div style={{ padding:"10px 14px", background:domain.bg, border:`1px solid ${domain.color}20`, borderRadius:5, marginBottom:16, fontSize:13, color:"#333", lineHeight:1.7 }}>
            {domain.roleDesc}
          </div>

          {/* How cited */}
          <div style={{ fontSize:11, letterSpacing:2, textTransform:"uppercase", color:"#888", marginBottom:10 }}>How Scholars Use This Work</div>
          {domain.howCited.map((h, i) => (
            <div key={i} style={{ marginBottom:14, border:"1px solid #e8e4dc", borderRadius:5, overflow:"hidden" }}>
              <div style={{ background:`${domain.color}10`, padding:"7px 12px", borderBottom:"1px solid #e8e4dc" }}>
                <span style={{ fontSize:12, fontWeight:700, color:domain.color }}>{h.use}</span>
              </div>
              <div style={{ padding:"9px 12px" }}>
                <div style={{ fontSize:11, color:"#888", marginBottom:5 }}><em>Citing scholars:</em> {h.who}</div>
                <div style={{ fontSize:12, color:"#333", lineHeight:1.7 }}>{h.what}</div>
              </div>
            </div>
          ))}

          {/* Related */}
          {domain.related.length > 0 && (
            <div style={{ marginTop:16 }}>
              <div style={{ fontSize:11, letterSpacing:2, textTransform:"uppercase", color:"#888", marginBottom:8 }}>Related Work in This Domain</div>
              {domain.related.map((r, i) => (
                <div key={i} style={{ fontSize:12, color:"#444", padding:"5px 0 5px 12px", borderLeft:"2px solid #c8c0b0", marginBottom:6, lineHeight:1.6 }}>{r}</div>
              ))}
            </div>
          )}

          {/* Navigate */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:20 }}>
            {DOMAINS.filter(d => d.id !== active).map(d => (
              <button key={d.id} onClick={() => setActive(d.id)} style={{ fontSize:11, padding:"4px 10px", border:`1px solid ${d.color}50`, borderRadius:3, background:d.bg, color:d.color, cursor:"pointer", fontFamily:"inherit" }}>
                {d.icon} {d.title}
              </button>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop:22, fontSize:10, color:"#ccc", borderTop:"1px solid #e8e4dc", paddingTop:8 }}>
        Research reception map · Katherine Elkins · March 2026 · companion to ke-master.jsx and ke-career-profiles.jsx
      </div>
    </div>
  );
}
