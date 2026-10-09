import { useState } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────
// Edit this section to update priorities, status, notes, deadlines

const LAST_UPDATED = "March 6, 2026";

const PERSONAL = {
  strengths: ["Public speaking & communicating complex ideas", "Seeing what others don't — deeper, wider, future", "Startup-style problem-solving", "Writing (academic; general audience = practice gap, not skill gap)"],
  drains: ["Office politics / institutional pettiness", "Managing difficult people without carrot or stick", "Navigating gender dynamics in hierarchies", "Lower-rung roles that require years before real authority"],
  lifeStage: "Child heading to college soon — schedule flexibility, travel during breaks, and family geography matter. Large salary + real boundaries appealing, but intellectual autonomy must not be sacrificed.",
  coreInsight: "The profile points to influence through ideas in public, not authority through position. The roles that play to strengths are about communicating and shaping thinking at scale — not managing institutions.",
  commitmentNote: "The commitment problem is structural (Kenyon didn't reward it), not character. Question isn't 'can I commit' but 'which thing would I most regret not having tried.' The forcing function arrives once three specific things are in motion.",
  threeActions: [
    "Write the Atlantic piece — lowest-cost test of general audience writing; key to trade book conversation",
    "Have the 'what would the right role look like' conversation with Anthropic/OpenAI/Meta contacts — peer exploration, not job inquiry",
    "Submit Knowing Otherwise proposal to U Chicago — keeps scholarly track alive, not a commitment to stay",
  ]
};

const ANCHORS = [
  { label: "Schmidt deadline", value: "TBD — anchors everything else", urgent: true },
  { label: "NeurIPS submission deadline", value: "~May 2026 (confirm)", urgent: true },
  { label: "Book proposal window", value: "Spring 2026 target (U Chicago / Northwestern)", urgent: false },
  { label: "Atlantic pitch", value: "ASAP — precedes trade book conversation", urgent: false },
  { label: "Industry conversations", value: "Anthropic / OpenAI / Meta — peer exploration, not applications", urgent: false },
];

const PROJECTS = [
  {
    id: "schmidt",
    title: "Schmidt Sciences HAVI Grant",
    type: "Grant Deliverable",
    color: "#1a3a5c",
    bg: "#eff6ff",
    icon: "🏛️",
    priority: 1,
    leverage: 5,
    urgency: 5,
    effort: 3,
    status: "In progress",
    statusColor: "#d97706",
    deadline: "TBD — confirm with Schmidt",
    why: "Non-negotiable. External funder, reputational stakes, PI responsibility. Anchors everything else in the schedule.",
    whatNeeded: [
      "Confirm exact deliverable deadlines with Schmidt program officer",
      "Identify what's outstanding vs. what Jon can advance independently",
      "Block dedicated time — this cannot slip to 'background'",
    ],
    notes: "",
    track: ["safety", "center", "ischool"],
  },
  {
    id: "neurips_safety",
    title: "Safety/LLM Papers → NeurIPS / FAccT",
    type: "Peer-Reviewed AI Papers",
    color: "#4c1d95",
    bg: "#faf5ff",
    icon: "🛡️",
    priority: 2,
    leverage: 5,
    urgency: 4,
    effort: 3,
    status: "Near complete — needs final push",
    statusColor: "#d97706",
    deadline: "NeurIPS ~May 2026; FAccT rolling",
    why: "Each accepted NeurIPS or FAccT paper does more for the iSchool/center/industry/safety career tracks than almost anything else. These are the unlock for non-humanities positions. Syntactic Framing Fragility and Negation Sensitivity are the two papers.",
    whatNeeded: [
      "Syntactic Framing Fragility (ICML 2026 under review — track status)",
      "Negation Sensitivity in LLMs → FAccT or NeurIPS (under review — track status)",
      "Confirm NeurIPS 2026 submission deadline",
      "Jon's role on final revisions",
    ],
    notes: "",
    track: ["safety", "ischool", "center", "industry"],
  },
  {
    id: "atlantic",
    title: "Atlantic Essay",
    type: "Public Writing",
    color: "#7c2d12",
    bg: "#fff7ed",
    icon: "✍️",
    priority: 3,
    leverage: 5,
    urgency: 4,
    effort: 2,
    status: "Not started",
    statusColor: "#dc2626",
    deadline: "ASAP — precedes trade book pitch",
    why: "A single well-placed public essay does more for the trade book conversation than a year of academic publishing. It proves to a trade agent/editor that you can write for a general audience. It also establishes the Knowing Otherwise argument publicly before the book arrives. Frame: what AI can't do, and why that matters now — the 'otherwise' of knowing.",
    whatNeeded: [
      "Identify Atlantic editor or agent to pitch through",
      "Draft 300-word pitch before writing the piece",
      "Angle: Knowing Otherwise's central argument, made accessible and urgent",
      "Can spin off CHE and Times op-eds from this with minimal additional effort",
    ],
    notes: "",
    track: ["speaker", "dept_chair", "foundation"],
  },
  {
    id: "trade_book",
    title: "Trade Book Contract",
    type: "Book Project",
    color: "#065f46",
    bg: "#f0fdf4",
    icon: "📗",
    priority: 4,
    leverage: 5,
    urgency: 3,
    effort: 4,
    status: "Atlantic piece is the precursor",
    statusColor: "#d97706",
    deadline: "Agent conversation: Spring/Summer 2026",
    why: "The trade book is a different project from Knowing Otherwise — or possibly the same project repositioned. Either way the contract conversation happens before the manuscript is finished. The Atlantic piece is proof of concept. Start agent research in parallel with the essay.",
    whatNeeded: [
      "Identify 3–5 literary agents who handle crossover academic-trade (see: Kate Crawford, Cathy O'Neil, Emily Bender)",
      "Determine: is the trade book Knowing Otherwise repositioned, or a separate AI+humanities book?",
      "Prepare 1-page book concept once Atlantic piece is drafted",
      "Atlantic publication (or even acceptance) opens the agent conversation",
    ],
    notes: "",
    track: ["speaker", "chair", "dept_chair"],
  },
  {
    id: "knowing_otherwise",
    title: "Knowing Otherwise (Philosophy Book)",
    type: "Academic Monograph",
    color: "#2c1654",
    bg: "#f5f0ff",
    icon: "📘",
    priority: 5,
    leverage: 4,
    urgency: 2,
    effort: 5,
    status: "Proposal ready — submit Spring 2026",
    statusColor: "#16a34a",
    deadline: "Proposal to U Chicago: Spring 2026 · MS: Winter 2026/27",
    why: "This is a 2027 project, not 2026. The proposal goes out now; the manuscript follows. Primary target: U Chicago Press (Kyle Wagner, acquired Pippin's The Culmination). Secondary: Northwestern (Faith Wilson Stein). Don't let manuscript anxiety block submitting the proposal.",
    whatNeeded: [
      "Submit proposal letter + appendix to Kyle Wagner, U Chicago",
      "Secondary submission to Northwestern",
      "Outstanding essay: Proust's Novel Time (De Gruyter, in press) — incorporate",
      "Introduction outline exists — does not need to be written before proposal goes out",
    ],
    notes: "Alt title: What Literature Knows. Core argument: mechanistic/juridical model of knowing fails; literature enacts alternative epistemology through embodied, relational, temporal, responsive knowing. Chapters: Plato/Sappho · Wordsworth · Baudelaire · Proust/Woolf · Kafka.",
    track: ["chair", "dept_chair", "speaker"],
  },
  {
    id: "narrative_neurips",
    title: "Narrative/MFS Pivot → NeurIPS",
    type: "Peer-Reviewed Paper",
    color: "#1e3a5f",
    bg: "#eff6ff",
    icon: "📊",
    priority: 6,
    leverage: 3,
    urgency: 3,
    effort: 3,
    status: "Framing needed",
    statusColor: "#d97706",
    deadline: "NeurIPS ~May 2026 (if this cycle); else 2027",
    why: "The Narrative Inquiry rejection becomes a NeurIPS submission by reframing: the computational narrative argument as an empirical claim about LLM behavior or evaluation. Lower urgency than safety papers because the safety/LLM track is already moving. Don't let this block the safety papers.",
    whatNeeded: [
      "Identify exactly which paper: MFS piece? Narrative Inquiry rejected piece?",
      "Determine what the NeurIPS reframe would be — what's the empirical/ML claim?",
      "Sequence after safety papers are submitted, not before",
    ],
    notes: "",
    track: ["ischool", "comp"],
  },
  {
    id: "opeds",
    title: "Op-Eds: Times / Chronicle",
    type: "Public Writing",
    color: "#5a4a00",
    bg: "#fefce8",
    icon: "📰",
    priority: 7,
    leverage: 3,
    urgency: 2,
    effort: 1,
    status: "Spin-offs from Atlantic — do not build from scratch",
    statusColor: "#94a3b8",
    deadline: "After Atlantic piece drafted",
    why: "High-visibility but low-additional-effort if spun from the Atlantic essay. Do not start these independently — they are derivatives, not originals.",
    whatNeeded: [
      "Write Atlantic piece first",
      "Identify CHE op-ed angle (AI literacy / curriculum — natural for your audience)",
      "Times: needs a sharper news hook than CHE; wait for the right moment",
    ],
    notes: "",
    track: ["speaker", "governance", "dept_chair"],
  },
  {
    id: "interpretive_tractability",
    title: "'Interpretive Tractability' Essay",
    type: "Policy / Public Essay",
    color: "#1c1917",
    bg: "#fafaf9",
    icon: "🛡️",
    priority: 3,
    leverage: 5,
    urgency: 3,
    effort: 2,
    status: "Concept exists (NIST comment) — needs development",
    statusColor: "#d97706",
    deadline: "Spring/Summer 2026 — before it gets scooped",
    why: "A 2,500-word accessible piece in Lawfare, Tech Policy Press, or a Nature/Science comment turning 'interpretive tractability' into a public concept. This single piece unlocks: think tank hiring currency, industry credibility, center director applications, and gives the book a fresh concept to develop. Highest leverage per word of any writing project.",
    whatNeeded: [
      "Draft 2,500 words from the NIST comment material",
      "Target venue: Lawfare (fastest), Tech Policy Press, or Nature comment (highest prestige)",
      "Frame: the gap between what AI systems do and what we can verify they're doing — why oversight requires interpretability, not just compliance",
    ],
    notes: "Introduced in MLA/NIST CAISI public comment. Grounded in Anthropic's own chain-of-thought unfaithfulness research.",
    track: ["safety", "governance", "center", "industry"],
  },
];

// Sort by priority
const sorted = [...PROJECTS].sort((a, b) => a.priority - b.priority);

const MODES = [
  { id: "deep", label: "Deep scholarly writing", color: "#2c1654", projects: ["knowing_otherwise","neurips_safety","narrative_neurips"] },
  { id: "fast", label: "Fast public writing", color: "#7c2d12", projects: ["atlantic","opeds","interpretive_tractability"] },
  { id: "grant", label: "Grant deliverables", color: "#1a3a5c", projects: ["schmidt"] },
  { id: "book", label: "Book/agent development", color: "#065f46", projects: ["trade_book","knowing_otherwise"] },
];

const DOT5 = ({ n, color }) => (
  <span style={{ display:"inline-flex", gap:2 }}>
    {[1,2,3,4,5].map(i => (
      <span key={i} style={{ width:7, height:7, borderRadius:"50%", background: i<=n ? color : "#dde", display:"inline-block" }} />
    ))}
  </span>
);

export default function App() {
  const [active, setActive] = useState(null);
  const [view, setView] = useState("list"); // list | modes | anchors
  const project = PROJECTS.find(p => p.id === active);

  return (
    <div style={{ fontFamily:"'Georgia',serif", maxWidth:880, margin:"0 auto", padding:"16px 18px", background:"#fdfcfa" }}>

      {/* Header */}
      <div style={{ borderBottom:"3px double #1a3a5c", paddingBottom:12, marginBottom:16 }}>
        <div style={{ fontSize:10, letterSpacing:3, textTransform:"uppercase", color:"#888", marginBottom:4 }}>Strategic Planning</div>
        <div style={{ fontSize:22, fontWeight:700, color:"#1a3a5c" }}>Katherine Elkins — Next Steps</div>
        <div style={{ fontSize:11, color:"#888", marginTop:2 }}>Last updated: {LAST_UPDATED} · {PROJECTS.length} active projects · edit PROJECTS array to update</div>
        <div style={{ marginTop:10, display:"flex", gap:7 }}>
          {["list","modes","anchors","personal"].map(v => (
            <button key={v} onClick={() => { setView(v); setActive(null); }} style={{ padding:"4px 12px", borderRadius:3, border:"1px solid", borderColor:view===v?"#1a3a5c":"#ccc", background:view===v?"#1a3a5c":"#fff", color:view===v?"#fff":"#444", fontSize:11, cursor:"pointer", fontFamily:"inherit" }}>
              {v === "list" ? "All Projects" : v === "modes" ? "Cognitive Modes" : v === "anchors" ? "Key Anchors" : "The Real Plan"}
            </button>
          ))}
        </div>
      </div>

      {/* ANCHORS */}
      {view === "anchors" && (
        <div>
          <div style={{ fontSize:11, color:"#999", marginBottom:12 }}>Deadlines and fixed points that sequence everything else.</div>
          {ANCHORS.map((a, i) => (
            <div key={i} style={{ display:"flex", gap:14, padding:"10px 14px", marginBottom:8, border:`1px solid ${a.urgent ? "#dc2626" : "#e0d8cc"}`, borderLeft:`4px solid ${a.urgent ? "#dc2626" : "#888"}`, borderRadius:4, background: a.urgent ? "#fff5f5" : "#fdfcf8" }}>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight:700, color: a.urgent ? "#dc2626" : "#333" }}>{a.label}</div>
                <div style={{ fontSize:12, color:"#555", marginTop:2 }}>{a.value}</div>
              </div>
              {a.urgent && <span style={{ fontSize:10, fontWeight:700, color:"#dc2626", alignSelf:"center" }}>CONFIRM</span>}
            </div>
          ))}
          <div style={{ marginTop:16, padding:"10px 14px", background:"#f0f4fa", borderRadius:4, fontSize:12, color:"#444", lineHeight:1.7 }}>
            <strong>Sequencing principle:</strong> Schmidt deadline anchors everything. NeurIPS submission window (~May) is the second fixed point. Atlantic pitch starts now and runs in parallel. Book proposal to U Chicago goes out Spring 2026 regardless of manuscript state.
          </div>
        </div>
      )}

      {/* COGNITIVE MODES */}
      {view === "modes" && (
        <div>
          <div style={{ fontSize:11, color:"#999", marginBottom:12 }}>The core problem: these projects require four distinct cognitive modes that don't stack well. Schedule them in blocks, not in parallel.</div>
          {MODES.map(m => {
            const ps = PROJECTS.filter(p => m.projects.includes(p.id));
            return (
              <div key={m.id} style={{ marginBottom:14, border:`1px solid ${m.color}25`, borderLeft:`4px solid ${m.color}`, borderRadius:5, padding:"12px 14px" }}>
                <div style={{ fontSize:13, fontWeight:700, color:m.color, marginBottom:8 }}>{m.label}</div>
                {ps.map(p => (
                  <div key={p.id} onClick={() => { setActive(p.id); setView("list"); }} style={{ padding:"6px 0", borderBottom:"1px solid #f0ede8", cursor:"pointer", display:"flex", gap:10, alignItems:"baseline" }}>
                    <span style={{ fontSize:14 }}>{p.icon}</span>
                    <span style={{ fontSize:12, fontWeight:600, color:"#333" }}>{p.title}</span>
                    <span style={{ fontSize:10, color:"#aaa", marginLeft:"auto" }}>priority {p.priority}</span>
                  </div>
                ))}
              </div>
            );
          })}
          <div style={{ marginTop:12, padding:"10px 14px", background:"#fef9ec", border:"1px solid #d97706", borderRadius:4, fontSize:12, color:"#444", lineHeight:1.7 }}>
            <strong>Recommendation:</strong> Batch by mode, not by project. One week of deep scholarly writing (NeurIPS papers). One day of fast public writing (Atlantic pitch). Grant work has its own rhythm — don't mix with the writing modes. Book development is evenings and margins.
          </div>
        </div>
      )}

      {/* PERSONAL / THE REAL PLAN */}
      {view === "personal" && (
        <div>
          <div style={{ marginBottom:16, padding:"12px 14px", background:"#f0f4fa", borderLeft:"4px solid #1a3a5c", borderRadius:"0 5px 5px 0", fontSize:13, color:"#333", lineHeight:1.75, fontStyle:"italic" }}>
            "{PERSONAL.coreInsight}"
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 }}>
            <div style={{ border:"1px solid #16a34a30", borderRadius:5, padding:"10px 12px" }}>
              <div style={{ fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:1.5, color:"#16a34a", marginBottom:8 }}>Strengths — lean in</div>
              {PERSONAL.strengths.map((s,i) => <div key={i} style={{ fontSize:12, color:"#333", marginBottom:5, paddingLeft:10, borderLeft:"2px solid #16a34a" }}>{s}</div>)}
            </div>
            <div style={{ border:"1px solid #dc262630", borderRadius:5, padding:"10px 12px" }}>
              <div style={{ fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:1.5, color:"#dc2626", marginBottom:8 }}>Drains — minimize</div>
              {PERSONAL.drains.map((d,i) => <div key={i} style={{ fontSize:12, color:"#333", marginBottom:5, paddingLeft:10, borderLeft:"2px solid #dc2626" }}>{d}</div>)}
            </div>
          </div>

          <div style={{ marginBottom:14, padding:"10px 12px", background:"#fffbeb", border:"1px solid #d97706", borderRadius:5 }}>
            <div style={{ fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:1.5, color:"#d97706", marginBottom:5 }}>Life stage</div>
            <div style={{ fontSize:12, color:"#444", lineHeight:1.7 }}>{PERSONAL.lifeStage}</div>
          </div>

          <div style={{ marginBottom:16, padding:"10px 12px", background:"#f5f0ff", border:"1px solid #7c3aed", borderRadius:5 }}>
            <div style={{ fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:1.5, color:"#7c3aed", marginBottom:5 }}>On commitment</div>
            <div style={{ fontSize:12, color:"#444", lineHeight:1.7 }}>{PERSONAL.commitmentNote}</div>
          </div>

          <div style={{ borderTop:"2px solid #1a3a5c", paddingTop:14 }}>
            <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:1.5, color:"#1a3a5c", marginBottom:10 }}>The Three Actions — next 90 days</div>
            {PERSONAL.threeActions.map((a, i) => (
              <div key={i} style={{ display:"flex", gap:12, marginBottom:12, padding:"10px 14px", background:"#f0f4fa", borderRadius:5, border:"1px solid #1a3a5c20" }}>
                <div style={{ width:24, height:24, borderRadius:"50%", background:"#1a3a5c", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, flexShrink:0 }}>{i+1}</div>
                <div style={{ fontSize:13, color:"#1a3a5c", lineHeight:1.6, fontWeight: i===0 ? 600 : 400 }}>{a}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PROJECT LIST */}
      {view === "list" && !active && (
        <div>
          <div style={{ fontSize:11, color:"#999", marginBottom:12 }}>Sorted by priority · leverage = bang for buck · click to open full brief</div>
          {sorted.map(p => (
            <div key={p.id} onClick={() => setActive(p.id)}
              style={{ border:`1px solid ${p.color}20`, borderLeft:`4px solid ${p.color}`, borderRadius:5, padding:"11px 14px", marginBottom:9, background:p.bg, cursor:"pointer" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,.08)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              <div style={{ display:"flex", alignItems:"baseline", gap:8, flexWrap:"wrap" }}>
                <span style={{ fontSize:18 }}>{p.icon}</span>
                <span style={{ fontSize:14, fontWeight:700, color:p.color }}>{p.title}</span>
                <span style={{ fontSize:10, padding:"2px 7px", borderRadius:10, background:`${p.color}15`, color:p.color, fontWeight:600 }}>{p.type}</span>
                <span style={{ marginLeft:"auto", fontSize:10, padding:"2px 8px", borderRadius:10, background:p.statusColor+"20", color:p.statusColor, fontWeight:700 }}>{p.status}</span>
              </div>
              <div style={{ display:"flex", gap:20, marginTop:8, flexWrap:"wrap" }}>
                <div style={{ fontSize:11, color:"#555" }}>
                  <span style={{ color:"#888" }}>leverage </span><DOT5 n={p.leverage} color={p.color} />
                </div>
                <div style={{ fontSize:11, color:"#555" }}>
                  <span style={{ color:"#888" }}>urgency </span><DOT5 n={p.urgency} color={p.color} />
                </div>
                <div style={{ fontSize:11, color:"#555" }}>
                  <span style={{ color:"#888" }}>effort </span><DOT5 n={p.effort} color="#888" />
                </div>
                <div style={{ fontSize:11, color:"#888", fontStyle:"italic" }}>📅 {p.deadline}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PROJECT DETAIL */}
      {view === "list" && active && project && (
        <div>
          <button onClick={() => setActive(null)} style={{ fontSize:11, color:"#888", background:"none", border:"none", cursor:"pointer", marginBottom:14, padding:0, fontFamily:"inherit" }}>← All projects</button>

          <div style={{ borderLeft:`5px solid ${project.color}`, paddingLeft:16, marginBottom:18 }}>
            <div style={{ fontSize:22 }}>{project.icon}</div>
            <div style={{ fontSize:20, fontWeight:700, color:project.color }}>{project.title}</div>
            <div style={{ fontSize:12, color:"#666" }}>{project.type}</div>
            <div style={{ marginTop:4 }}>
              <span style={{ fontSize:11, padding:"2px 9px", borderRadius:10, background:project.statusColor+"20", color:project.statusColor, fontWeight:700 }}>{project.status}</span>
            </div>
          </div>

          {/* Scores */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginBottom:16 }}>
            {[["Leverage / Bang for Buck", project.leverage, project.color],["Urgency", project.urgency, project.color],["Effort Required", project.effort, "#888"]].map(([label,n,c]) => (
              <div key={label} style={{ border:`1px solid ${c}30`, borderRadius:4, padding:"8px 10px" }}>
                <div style={{ fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:1, color:"#888", marginBottom:4 }}>{label}</div>
                <DOT5 n={n} color={c} />
              </div>
            ))}
          </div>

          {/* Deadline */}
          <div style={{ padding:"8px 12px", background:"#fef9ec", border:"1px solid #d97706", borderRadius:4, fontSize:12, marginBottom:14 }}>
            <strong style={{ color:"#d97706" }}>📅 Deadline: </strong>{project.deadline}
          </div>

          {/* Why */}
          <Section title="Why This Matters" color={project.color}>
            <p style={{ fontSize:12, lineHeight:1.75, margin:0, color:"#333" }}>{project.why}</p>
          </Section>

          {/* What's needed */}
          <Section title="Immediate Next Steps" color={project.color} highlight>
            <ul style={{ margin:0, paddingLeft:16 }}>
              {project.whatNeeded.map((w,i) => (
                <li key={i} style={{ fontSize:12, color:"#222", marginBottom:5, lineHeight:1.55 }}>{w}</li>
              ))}
            </ul>
          </Section>

          {/* Notes */}
          {project.notes && (
            <Section title="Notes" color="#888">
              <p style={{ fontSize:12, lineHeight:1.7, margin:0, color:"#555", fontStyle:"italic" }}>{project.notes}</p>
            </Section>
          )}

          {/* Career tracks */}
          <div style={{ marginTop:12 }}>
            <div style={{ fontSize:10, textTransform:"uppercase", letterSpacing:1.5, color:"#aaa", marginBottom:5 }}>Advances career tracks</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
              {project.track.map(t => <span key={t} style={{ fontSize:10, padding:"2px 8px", borderRadius:10, background:`${project.color}15`, color:project.color, fontWeight:600 }}>{t}</span>)}
            </div>
          </div>

          {/* Navigate */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:20 }}>
            {sorted.filter(p => p.id !== active).map(p => (
              <button key={p.id} onClick={() => setActive(p.id)} style={{ fontSize:10, padding:"3px 9px", border:`1px solid ${p.color}50`, borderRadius:3, background:p.bg, color:p.color, cursor:"pointer", fontFamily:"inherit" }}>
                {p.icon} {p.title.split(" ").slice(0,3).join(" ")}
              </button>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop:20, fontSize:10, color:"#ccc", borderTop:"1px solid #e8e4dc", paddingTop:8 }}>
        Next steps planner · Katherine Elkins · {LAST_UPDATED} · companion to ke-master.jsx · ke-career-profiles.jsx · ke-reception.jsx
      </div>
    </div>
  );
}

function Section({ title, color = "#1a3a5c", children, highlight = false }) {
  return (
    <div style={{ marginBottom:12, border:`1px solid ${color}20`, borderRadius:4, overflow:"hidden" }}>
      <div style={{ background: highlight ? color+"15" : "#f5f5f3", padding:"5px 12px", borderBottom:`1px solid ${color}20` }}>
        <span style={{ fontSize:10, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", color: highlight ? color : "#888" }}>{title}</span>
      </div>
      <div style={{ padding:"10px 12px" }}>{children}</div>
    </div>
  );
}
