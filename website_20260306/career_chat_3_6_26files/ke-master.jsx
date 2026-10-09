import { useState } from "react";

const URLS = {
  site: "https://katherineelkins.com",
  hcai: "https://humancenteredailab.org",
  scholar: "https://scholar.google.com/citations?user=bUSgS6IAAAAJ",
  linkedin: "https://linkedin.com/in/kate-elkins",
  wikipedia: "https://en.wikipedia.org/wiki/Katherine_Elkins",
  academia: "https://kenyon.academia.edu/KatherineElkins",
  kenyon_bio: "https://www.kenyon.edu/directory/kate-elkins/",
  helix: "https://www.helixcenter.org/participants/katherine-elkins/",
  wpi_talk: "https://global-lab.wpi.edu/katherine-elkins-public-talk-page/",
  shapes_cambridge: "https://www.cambridge.org/core/books/shapes-of-stories/",
  concordia: "https://www.concordiacollege.edu/events/details/symposium-dr-katherine-elkins/2025-09-17/",
  rally: "https://www.rallyinnovation.com/agenda-2025",
  utk: "https://calendar.utk.edu/event/should_we_be_alarmed_chatbots_ai_and_the_humanities",
  baccalaureate: "https://www.linkedin.com/pulse/revisiting-david-foster-wallaces-water-20-years-out-katherine-elkins-pjt3c/",
  csmonitor: "https://www.csmonitor.com/USA/2026/0220/anthropic-pentagon-artificial-intelligence-safety",
  wosu: "https://www.wosu.org/2026-02-09/could-artificial-intelligence-save-endangered-archives-a-kenyon-college-cohort-aims-to-find-out",
  aljazeera: "https://www.aljazeera.com/video/the-stream/2023/5/11/is-ai-better-at-making-art-than-humans",
  humanity_at_scale: "https://humanityatscalepodcast.com/e/p8ll40j8-from-homer-to-gpt-the-collision-of-human-imagination-and-ai-with-katherine-elkins",
  merging_minds: "https://mergingminds.bureauworks.com/episode/ai-experts-from-pages-to-pixels-with-kate-elkins",
  merging_minds_apple: "https://podcasts.apple.com/us/podcast/translating-worlds-ai-experts-adventure-from-pages/id1727352682?i=1000648935735",
  radioai: "https://www.buzzsprout.com/1712071",
  nist: "https://airc.nist.gov/caisi",
  doi_ijhac: "https://doi.org/10.3366/ijhac.2023.0310",
  kenyon_collegian: "https://kenyoncollegian.com/features/2023/03/kenyon-professors-discuss-implications-of-chatgpt-ai-art/",
  helix_emotion: "https://www.helixcenter.org/roundtables/emotion/",
  helix_coding1: "https://www.helixcenter.org/roundtables/coding-and-the-new-human-phenotype/",
  helix_coding2: "https://www.helixcenter.org/roundtables/coding-and-the-new-human-phenotype-are-natural-language-generators-for-real/",
  helix_difficult: "https://www.helixcenter.org/roundtables/living-in-difficult-times/",
  che_webinar: "https://www.chronicle.com/events/virtual/new-academic-programs-for-an-ai-driven-work-force",
  twitter: "https://x.com/katelelkins",
};

const BC = [
  { id: "safety",   label: "AI Safety & Governance",  color: "#1a3a5c", bg: "#e8f0f8" },
  { id: "comp",     label: "Computational Humanist",  color: "#2d5a27", bg: "#e8f4e8" },
  { id: "public",   label: "Public Intellectual",     color: "#6b2d00", bg: "#f8ede8" },
  { id: "educator", label: "Curriculum Pioneer",      color: "#4a1a6b", bg: "#f0e8f8" },
  { id: "author",   label: "Author & Scholar",        color: "#5a4a00", bg: "#f8f4e8" },
];

const IDENTITIES = [
  { id:"safety",   headline:"AI Safety Researcher",       tagline:"PI, NIST AI Safety Institute Consortium (representing MLA)", signals:["NIST CAISI PI","Schmidt Sciences HAVI PI","UNESCO MONDIACULT","Meta Transparency WG","OpenAI HE Forum Oct 2025"], anchor:"interpretive tractability · agent security · AI governance · open-source risk" },
  { id:"comp",     headline:"Computational Humanist",     tagline:"Co-Founder, Human-Centered AI Lab · World's first human-centered AI curriculum (2016)", signals:["SentimentArcs","700+ citations","ICML / FAccT / NeurIPS","90K+ downloads, 4000+ institutions","Computational Social Science"], anchor:"AI DH · narrative AI · sentiment analysis · LLM evaluation · syntactic framing · computational social science" },
  { id:"public",   headline:"Public Intellectual & Speaker", tagline:"20+ keynotes · international forums · press & podcasts", signals:["Al Jazeera · Forbes · CSMonitor · NPR/WOSU · CHE","OpenAI Forum (1 of 7 faculty)","UNESCO · Deloitte · WPI · Yale · Smith · Cornell-Qatar"], anchor:"AI & society · creativity · emotion · democracy · cultural heritage" },
  { id:"educator", headline:"Curriculum Pioneer",         tagline:"Director, IPHS · co-creator human-centered AI curriculum since 2016", signals:["90+ students/faculty FTE","Odyssey sequence (50-yr institution)","300+ student AI projects","NEH Teaching Professorship"], anchor:"interdisciplinary · humanities + AI · undergraduate research · AI literacy" },
  { id:"author",   headline:"Author & Scholar",           tagline:"Cambridge UP · Oxford UP · Audible · Comp Lit & Cognitive Science", signals:["The Shapes of Stories (CUP 2022)","Proust & Philosophical Perspectives ed. (OUP 2022)","Giants of French Literature (Audible)","GPT-3 creativity paper ~378 citations"], anchor:"Proust · Homer · Dante · Woolf · Kafka · narrative · consciousness · cognition" },
];

const TALKS = [
  { theme:"AI Safety & Governance", color:"#1a3a5c", items:[
    { title:"Leveraging AI for Humanities & Social Science Research", venue:"OpenAI Education Guild Forum", loc:"San Francisco", date:"Oct 2025", note:"1 of 7 faculty worldwide" },
    { title:"Artificial Intelligence and Cultural/Creative Industry", venue:"UNESCO MONDIACULT", loc:"Cairo", date:"Apr 2025" },
    { title:"What's Actually Coming with AI (and Why You Need to Help Shape It)", venue:"Concordia College MN · Faith, Reason & World Affairs Symposium", date:"Sep 17, 2025", url:URLS.concordia },
    { title:"AI Ethics, Regulation & Human-Centered AI Research", venue:"RALLY Innovation 2025", loc:"Indianapolis", date:"Sep 2025", url:URLS.rally },
    { title:"Keynote + Public Talk on AI & Global Responsibility", venue:"WPI Global Lab", date:"Feb 2025", url:URLS.wpi_talk },
    { title:"LLM Predictive Policing (Notre Dame-IBM findings)", venue:"Notre Dame", date:"Jan 2025" },
    { title:"Meta Open Innovation AI Research Community Conference", venue:"Meta London Office", date:"Oct 2024" },
    { title:"Can AI Reason Ethically?", venue:"Yale Northrup Lecture", date:"2024" },
    { title:"How AI is Defining the Future of Organizations", venue:"Deloitte HumanCentric Labs", date:"2024" },
    { title:"Human-Centered AI (Keynote)", venue:"Ohio State University", date:"2019", note:"earliest public AI+humanities advocacy" },
  ]},
  { theme:"AI, Emotion & Theory of Mind", color:"#2d5a27", items:[
    { title:"The Power of Connection: Leveraging Technology for Humanistic Medical Education", venue:"Weill Cornell Medicine-Qatar", loc:"Doha", date:"Oct 2025", note:"CME credits" },
    { title:"How Agentic Behavior, Reasoning & Emotional Intelligence Upend Human Exceptionalism", venue:"Smith College / Khan Institute", date:"Feb 2025" },
    { title:"Tomorrow's Agents: Emotional Intelligence and Human Identity", venue:"Smith College / Kahn Liberal Arts Institute", date:"2025" },
    { title:"Affective AI (AI Working Group Keynote)", venue:"Wofford College", date:"2023" },
    { title:"'Emotion' roundtable (w/ Rosalind Picard, Joseph LeDoux, Mabel Berezin, Rob Hopkins)", venue:"Helix Center, NYC", url:"https://www.helixcenter.org/roundtables/emotion/", date:"Sep 23, 2023" },
    { title:"'Coding and the New Human Phenotype: Are Natural Language Generators for Real?' roundtable", venue:"Helix Center, NYC", url:"https://www.helixcenter.org/roundtables/coding-and-the-new-human-phenotype-are-natural-language-generators-for-real/", date:"Oct 16, 2022" },
    { title:"'Coding and the New Human Phenotype' roundtable", venue:"Helix Center, NYC", url:"https://www.helixcenter.org/roundtables/coding-and-the-new-human-phenotype/", date:"Oct 15, 2022" },
    { title:"'Living in Difficult Times' roundtable", venue:"Helix Center, NYC", url:"https://www.helixcenter.org/roundtables/living-in-difficult-times/", date:"Nov 19, 2022" },
  ]},
  { theme:"Computational Narrative & Creativity", color:"#4a1a6b", items:[
    { title:"Computational Approaches to Narrative", venue:"Int'l Society for Narrative (ISSN)", date:"2025" },
    { title:"AI, Narrative, and How We Move Each Other", venue:"RALLY Innovation Conference", url:URLS.rally, date:"2024/2025" },
    { title:"Is AI Better at Making Art Than Humans? (debate w/ Boris Eldagsen, Shane Balkowitsch)", venue:"Al Jazeera The Stream", url:URLS.aljazeera, date:"Apr 2023" },
    { title:"AI Needs the Humanities (and the Humanities Need AI)", venue:"UT Knoxville Humanities Center", url:URLS.utk, date:"Mar 28, 2023" },
    { title:"AI and Creativity", venue:"Yale AI for Social Good", date:"2024" },
    { title:"First Transdisciplinary AI Research", venue:"Modernist Studies Association", date:"Oct 2019" },
    { title:"ISSN Narrative Conference", venue:"Int'l Society for the Study of Narrative", date:"Mar 2020" },
    { title:"MLA Conference", venue:"Modern Language Association", date:"Jan 2021" },
  ]},
  { theme:"Human-Centered AI: Building the Field", color:"#6b2d00", items:[
    { title:"AI Literacy Across the Curriculum", venue:"Lafayette College", date:"2024" },
    { title:"A.J. Carlson Lecture", venue:"Austin College", date:"2024" },
    { title:"Day of Digital Humanities", venue:"Carleton College", date:"2024" },
    { title:"Yale Alumni AI Panel", venue:"Yale University", date:"2024" },
    { title:"New Academic Programs for an AI-Driven Work Force (speaker w/ Antonio Delgado, Youngmoo Kim)", venue:"Chronicle of Higher Education Virtual Forum", url:"https://www.chronicle.com/events/virtual/new-academic-programs-for-an-ai-driven-work-force", date:"Mar 2026", note:"on-demand recording available" },
    { title:"AI Literacy for the Future Workforce (quoted by Beth McMurtrie)", venue:"Chronicle of Higher Education — Teaching newsletter", date:"2024/2025", note:"CHE Teaching coverage" },
    { title:"Stories that Win Symposium", venue:"Washington University, St. Louis", date:"2024" },
    { title:"Meredith-Donovan Lecture", venue:"Mount Saint Mary's University (LA)", date:"2023" },
    { title:"McGill/Pitt/CMU Computational Intelligence Webinar", venue:"McGill/Pitt/CMU", date:"2023" },
  ]},
  { theme:"Cultural Heritage & Archival Intelligence", color:"#5a4a00", items:[
    { title:"December Baccalaureate Address (revisiting DFW 'This is Water')", venue:"Kenyon College", url:URLS.baccalaureate, date:"Dec 2024", note:"nominated by graduating seniors" },
    { title:"The Shape of a Life (Baccalaureate Address)", venue:"Kenyon College", date:"earlier" },
    { title:"HAVI/Archival Intelligence Project Overview", venue:"multiple venues 2024–25", note:"Schmidt Sciences" },
  ]},
];

const PODCASTS = [
  { title:"From Homer to GPT: The Collision of Human Imagination and AI", host:"Humanity at Scale", by:"Bruce Temkin", date:"Jun 2025", url:URLS.humanity_at_scale },
  { title:"Creative Velocity: AI Deep Dive", host:"Creative Velocity Podcast", by:"Leslie Grandy", date:"Feb 2026", url:null, note:"URL TBD" },
  { title:"Public Talk Transcript (AI & Global Responsibility)", host:"WPI Global Lab", date:"Feb 2025", url:URLS.wpi_talk },
  { title:"Translating Worlds: AI Expert's Adventure from Pages to Pixels", host:"Merging Minds / BureauWorks", date:"2024", url:URLS.merging_minds, alt:URLS.merging_minds_apple },
  { title:"AI and Creativity", host:"The Jarmarl Thomas Podcast", date:"Feb 2025", url:null, note:"URL TBD" },
  { title:"ChatGPT and Large Language Models (Ep. 4.4 Season 4)", host:"RadioAI", date:"Mar 2023", url:URLS.radioai },
  { title:"AI Strategy Course", host:"Bloomberg / Emeritus", date:"2024", url:null, note:"course platform, not single episode" },
  { title:"AI, Chatbots, and the Humanities (webinar)", host:"UT Knoxville Humanities Center", date:"Mar 28, 2023", url:URLS.utk },
  { title:"Emotion Roundtable (w/ Rosalind Picard, Joseph LeDoux, Mabel Berezin)", host:"Helix Center", date:"2023", url:URLS.helix },
];

const PRESS = [
  { outlet:"Christian Science Monitor", title:"As AI leaps forward, concern rises that innovation is leaving safety behind", date:"Feb 20, 2026", url:URLS.csmonitor, role:"Quoted as NIST AI Safety Institute PI" },
  { outlet:"WOSU / NPR Ohio Newsroom", title:"Could artificial intelligence save endangered archives?", date:"Feb 9, 2026", url:URLS.wosu, role:"Lead subject — Schmidt Sciences/HAVI project" },
  { outlet:"Forbes", title:"Where AI Meets The Humanities: Inside Kenyon College's Bold Experiment", by:"Paul Baier", date:"Dec 2025", url:null },
  { outlet:"Engineering (AAAS)", title:"AI's Talent for Translation Lowers Language Barriers", by:"Mitch Leslie", note:"Vol. 55: 11–13", date:"2025", url:null },
  { outlet:"Chronicle of Higher Education", title:"Teaching newsletter (Beth McMurtrie)", date:"2024/2025", url:null, role:"Quoted on AI literacy/fluency — exact issue TBD", note:"URL needed" },
  { outlet:"Al Jazeera", title:"Is AI Better at Making Art Than Humans?", date:"Apr 2023", url:URLS.aljazeera, role:"Debate w/ Boris Eldagsen (Sony World Photo Award winner) & Shane Balkowitsch" },
  { outlet:"InForum", title:"AI coverage", date:"2023", url:null },
  { outlet:"Kenyon Collegian", title:"Kenyon professors discuss implications of ChatGPT, AI art", date:"Mar 2023", url:URLS.kenyon_collegian },
];

const BOOKS = [
  { title:"The Shapes of Stories: Sentiment Analysis for Narrative", pub:"Cambridge University Press", date:"2022", url:URLS.shapes_cambridge, note:"SentimentArcs methodology" },
  { title:"Philosophical Approaches to Proust's In Search of Lost Time (ed.)", pub:"Oxford University Press", date:"2022", url:null },
  { title:"Knowing Otherwise: Embodiment, Memory, and the Limits of Philosophy", pub:"In progress — targeting U Chicago Press (Kyle Wagner) / Northwestern (Faith Wilson Stein)", date:"2026–27", url:null, note:"alt title: What Literature Knows · essays on Plato, Wordsworth, Proust, Woolf, Kafka · opens toward AI epistemology" },
  { title:"The Modern Novel", pub:"Audible / The Modern Scholar", date:"2021", url:null },
  { title:"Giants of French Literature", pub:"Audible / The Modern Scholar", date:"2020", url:null },
];

const TRAD_ESSAYS = [
  { title:"Memory, Technology, and Wisdom", venue:"Graduate Faculty Philosophy Journal", date:"2022", note:"Plato · Ong · Baudelaire · Proust · Wordsworth · digital platforms · AI/LLMs" },
  { title:"Memory and Material Significance: Composing Modernist Influence", venue:"Modern Language Quarterly", date:"2008", note:"Proust · Woolf · literary memory · modernist intertextuality" },
  { title:"Middling Memories and Dreams of Oblivion: Configurations of a Non-Archival Memory in Baudelaire and Proust", venue:"Comparative Literature Studies", date:"2002", note:"A. Owen Aldridge Prize (2001) · anti-noetic memory · ars memorativa" },
  { title:"Proust's Consciousness", venue:"Philosophy and Literature / essay for book ms.", date:"2020s", note:"vertical transcendence vs. horizontal connection · consciousness · qualia" },
  { title:"Naming the Lyric", venue:"Essay for book ms.", note:"Sappho · lyric address · embodied knowing" },
  { title:"Wordsworth's Literary Sublime", venue:"Essay for book ms.", note:"Kantian transcendence · dynamic/mathematical sublime · nature" },
  { title:"Kafka: Trial — Picture Lessons", venue:"Essay for book ms.", note:"mechanistic/juridical model of knowing · perspectival realism" },
  { title:"Proust's Novel Time", venue:"De Gruyter", date:"in press", note:"irreversible time · narrative temporality" },
  { title:"Additional essays", venue:"PMLA · Poetics Today · MLN · Discourse · Narrative · MLQ", note:"Plato, Woolf, Kafka, Wordsworth, Baudelaire, Sappho — full list in CV" },
];

const PAPERS = [
  { title:"Can GPT-3 Pass a Writer's Turing Test?", venue:"Journal of Cultural Analytics", date:"Sep 2020", note:"~378 citations · paradigm case · archived gwern.net" },
  { title:"The Crisis of AI: A New Digital Humanities Curriculum for Human-Centred AI", venue:"Int'l Journal of Humanities and Arts Computing", date:"2023", note:"~51 citations", url:URLS.doi_ijhac, doi:true },
  { title:"If Open Source Is to Win, It Must Go Public", venue:"ICML 2024 (oral) + ICML 2025 CodeML Workshop (Spotlight)", note:"~67 citations" },
  { title:"Beyond Plot: How Sentiment Analysis Reshapes Our Understanding of Narrative Structure", venue:"Journal of Cultural Analytics", date:"2025" },
  { title:"The Shapes of Cinderella: Emotional Architecture and the Language of Moral Difference", venue:"Humanities", date:"2025" },
  { title:"Comparative Global AI Regulation", date:"2023/2024", note:"~38 citations" },
  { title:"Explainable AI for Story Analysis", date:"2022", note:"~32 citations" },
  { title:"Ethical Auditing of LLM Chatbots", date:"2023", note:"~18 citations" },
  { title:"A(I) University in Ruins: What Remains in a World with LLMs?", venue:"PMLA" },
  { title:"Syntactic Framing Fragility", venue:"ICML 2026 (under review)", note:"w/ Jon Chun" },
  { title:"Negation Sensitivity in LLMs", venue:"FAccT / NeurIPS (under review)", note:"w/ Jon Chun" },
  { title:"Proust's Novel Time", venue:"De Gruyter (in press)" },
  { title:"NIST CAISI Public Comment on AI Agent Security", note:"Introduces 'interpretive tractability' · MLA representation", date:"2025" },
];

const RECEPTION = [
  {
    cluster: "AI Creativity & the Turing Question",
    anchor: "\"Can GPT-3 Pass a Writer's Turing Test?\" (JCA 2020, w/ Jon Chun)",
    color: "#2d5a27",
    bg: "#e8f4e8",
    stats: "~378 citations · archived gwern.net as landmark · paradigm case",
    summary: "Published before the broader scholarly conversation existed, this paper established the conceptual vocabulary for evaluating AI creative writing. It circulates as a gateway text across AI/ML, literary studies, creativity science, human-computer interaction, and AI safety.",
    impact: [
      "Sets the baseline for what 'creative AI' means — cited to frame every subsequent evaluation of LLM writing quality",
      "Used in AI alignment & safety research on measuring and interpreting model outputs",
      "Humanities scholars cite it as the foundational empirical test of the humanist position",
      "Post-DALL-E/Midjourney/GPT-4 wave cites it retrospectively as the moment the question became urgent",
      "Archived on gwern.net alongside other landmark AI milestones — rare for a humanist-authored paper",
    ]
  },
  {
    cluster: "Computational Narrative & Sentiment Analysis",
    anchor: "SentimentArcs · The Shapes of Stories (CUP 2022) · JCA papers",
    color: "#4a1a6b",
    bg: "#f0e8f8",
    stats: "90K+ downloads · 4,000+ institutions · computational social science reach",
    summary: "The SentimentArcs methodology and The Shapes of Stories established computational narrative analysis as a rigorous field. Work appears in computational linguistics, digital humanities, cultural analytics, CSS pipelines for large-scale cultural corpora, and narrative theory.",
    impact: [
      "First systematic large-scale extension of Vonnegut's narrative arc hypothesis — provides empirical foundation for a long-standing theoretical claim",
      "SentimentArcs adopted in computational social science pipelines analyzing fiction, news, social media",
      "CUP 2022 book is now the standard reference where computational and traditional narrative theory meet",
      "Shapes of Cinderella (2025) extends method to emotional architecture and moral reasoning in narrative",
      "Beyond Plot (JCA 2025) reframes what computational reading actually measures",
    ]
  },
  {
    cluster: "Human-Centered AI Curriculum",
    anchor: "IJHAC 2023 · ~51 citations · 'The Crisis of AI'",
    color: "#1a3a5c",
    bg: "#e8f0f8",
    stats: "51 citations across 4 distinct epistemic communities",
    summary: "The curriculum paper circulates through four distinct scholarly communities, each citing it for a different epistemic purpose — not because the paper is popular, but because the argument is doing different work in each domain.",
    impact: [
      "Higher Ed & Curriculum: cited to argue AI forces reconceptualization of knowledge, evidence, and authorship as negotiated classroom norms",
      "Digital Humanities & Creative Labor: cited to justify treating AI as an interpretive participant requiring humanistic theorization",
      "Humanities Futures & Institutional Design: cited to argue the central issue is redistribution of epistemic authority, not efficient deployment",
      "AI Safety & Governance: cited as framework for understanding how AI transforms questions of interpretation",
      "Trajectory: 189 citations in most recent year — highest single-year total, accelerating",
    ]
  },
  {
    cluster: "AI Safety, Governance & Open Source Risk",
    anchor: "ICML 2024 (oral) · ~67 citations · Comparative Regulation · NIST CAISI",
    color: "#6b2d00",
    bg: "#f8ede8",
    stats: "~67 + ~38 citations in governance/safety literature",
    summary: "The open-source AI risks paper (ICML 2024 oral, rare for a humanist) and comparative regulation work position Kate in the AI safety and governance conversation at the level of empirical argument, not just ethical critique. The NIST CAISI public comment introduces 'interpretive tractability' as a proposed oversight standard.",
    impact: [
      "ICML oral presentation — unusual for a humanities scholar, signals acceptance as technical-policy interlocutor",
      "Open source paper cited in AI policy debates, congressional testimony contexts, and EU AI Act discussions",
      "Comparative regulation paper used by legal scholars and policy analysts across multiple jurisdictions",
      "'Interpretive tractability' (NIST comment) proposes a measurable standard for AI agent oversight grounded in Anthropic's own CoT research",
      "NIST CAISI role (representing MLA) institutionalizes humanist perspective in AI safety standard-setting",
    ]
  },
  {
    cluster: "Computational Social Science",
    anchor: "Cross-disciplinary CSS positioning",
    color: "#5a4a00",
    bg: "#f8f4e8",
    stats: "Citations span CSS, comp linguistics, cultural analytics, sociology of AI",
    summary: "A significant portion of Kate's work is properly classified as computational social science: quantitative and computational methods applied to cultural, social, and textual phenomena at scale. This framing connects her DH and AI work to a larger methodological community.",
    impact: [
      "Sentiment analysis work cited in CSS literature on cultural measurement and emotion at scale",
      "LLM evaluation papers (negation, syntactic framing) address CSS questions about model reliability for social research",
      "GPT-3 creativity paper used in CSS work on AI and creative labor markets",
      "Notre Dame–IBM predictive policing research sits directly in the CSS/fairness/AI justice space",
      "CSS framing opens affiliation pathways: CSS journals, iSchools, computational social science centers",
    ]
  },
];


  { org:"NIST AI Safety Institute Consortium (CAISI)", role:"Principal Investigator (representing MLA)", type:"Independent", url:URLS.nist },
  { org:"Schmidt Sciences HAVI Grant — Archival Intelligence, New Orleans", role:"Principal Investigator", type:"PI-led" },
  { org:"Human-Centered AI Lab, Inc.", role:"Co-Founder · Ohio Nonprofit · EIN obtained", type:"Independent", url:URLS.hcai },
  { org:"UNESCO MONDIACULT", role:"Speaker / Advisory · Cairo 2025", type:"Independent" },
  { org:"Meta Open Innovation AI Research Community", role:"Member since 2023 · London conference Oct 2024", type:"Independent" },
  { org:"OpenAI Higher Education Forum", role:"Featured speaker, Education Guild · Oct 2025", type:"Independent" },
  { org:"Modern Language Association (MLA)", role:"NIST consortium rep · MLA AI Working Group", type:"Independent" },
  { org:"Notre Dame–IBM Tech Ethics Lab", role:"Grant recipient · LLM predictive policing research", type:"Independent" },
  { org:"Helix Center (Edward Nersessian)", role:"Executive Committee member · affiliate / fiscal sponsor", type:"Independent", url:URLS.helix },
  { org:"ADHO CLS / Public AI / Women in AI / AI in Education", role:"Advisory / member", type:"Independent" },
  { org:"Kenyon College", role:"Professor of Comparative Literature & Humanities · Director, IPHS", type:"Institutional", url:URLS.kenyon_bio },
];

const DIGITAL = [
  { label:"Twitter / X (@katelelkins)", url:URLS.twitter, live:true, note:"AI Ethics · NIST · Kenyon · AI/ML research on emotion & ethics" },
  { label:"katherineelkins.com",      url:URLS.site,         live:true },
  { label:"humancenteredailab.org",   url:URLS.hcai,         live:true },
  { label:"Wikipedia",                url:URLS.wikipedia,    live:true, note:"Jon executing 12-week edit sequence" },
  { label:"Google Scholar",           url:URLS.scholar,      live:true },
  { label:"LinkedIn",                 url:URLS.linkedin,     live:true },
  { label:"Helix Center bio",         url:URLS.helix,        live:true },
  { label:"Kenyon faculty page",      url:URLS.kenyon_bio,   live:true },
  { label:"Academia.edu",             url:URLS.academia,     live:true },
  { label:"WPI Global Lab talk page", url:URLS.wpi_talk,     live:true },
  { label:"ORCID",                    url:null,              live:false, note:"Needs setup — important for Knowledge Panel" },
  { label:"Wikidata entity",          url:null,              live:false, note:"Needs linking for Google Knowledge Panel" },
  { label:"GitHub (Jon / SentimentArcs)", url:"https://github.com/jon-chun", live:true },
  { label:"ResearchGate",             url:"https://www.researchgate.net", live:true },
];

const Tag = ({ label, color="#555", bg="#f0f0f0" }) => (
  <span style={{ display:"inline-block", padding:"2px 7px", borderRadius:10, fontSize:11, fontWeight:600, color, background:bg, marginRight:4, marginBottom:3 }}>{label}</span>
);

const AL = ({ url }) => url ? (
  <a href={url} target="_blank" rel="noopener noreferrer" style={{ color:"#1a5cbf", fontSize:11, marginLeft:5 }}>↗</a>
) : null;

const TABS = ["🎯 Identities","🎤 Talks","🎙️ Podcasts","📰 Press","📚 Publications","📊 Reception","🏛️ Affiliations","🌐 Digital"];

export default function App() {
  const [tab, setTab] = useState(0);
  const [exp, setExp] = useState(null);

  return (
    <div style={{ fontFamily:"'Inter',system-ui,sans-serif", maxWidth:860, margin:"0 auto", padding:"14px 16px" }}>
      {/* Header */}
      <div style={{ borderBottom:"2px solid #1a3a5c", paddingBottom:10, marginBottom:14 }}>
        <div style={{ fontSize:20, fontWeight:800, color:"#1a3a5c" }}>Katherine Elkins · Master Reference</div>
        <div style={{ fontSize:11, color:"#888", marginTop:2 }}>Brand audit · website redesign · Wikipedia · AI Safety · Comp Humanist · Speaker · Author</div>
        <div style={{ marginTop:7, display:"flex", flexWrap:"wrap", gap:10 }}>
          {[["katherineelkins.com",URLS.site],["humancenteredailab.org",URLS.hcai],["Google Scholar",URLS.scholar],["Wikipedia",URLS.wikipedia],["Kenyon Bio",URLS.kenyon_bio]].map(([l,u])=>(
            <a key={l} href={u} target="_blank" rel="noopener noreferrer" style={{ color:"#1a5cbf", fontSize:12, textDecoration:"none" }}>{l} ↗</a>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:14 }}>
        {TABS.map((t,i)=>(
          <button key={i} onClick={()=>setTab(i)} style={{ padding:"5px 11px", borderRadius:5, border:"1px solid", borderColor:tab===i?"#1a3a5c":"#ccc", background:tab===i?"#1a3a5c":"#fafafa", color:tab===i?"#fff":"#333", fontSize:12, fontWeight:tab===i?700:400, cursor:"pointer" }}>{t}</button>
        ))}
      </div>

      {/* IDENTITIES */}
      {tab===0 && <div>
        <div style={{ fontSize:11, color:"#999", marginBottom:10 }}>5 distinct brand clusters — each valid as the lead identity depending on audience & platform</div>
        {IDENTITIES.map(c=>{
          const bc=BC.find(b=>b.id===c.id);
          return <div key={c.id} style={{ border:`1px solid ${bc.color}25`, borderLeft:`4px solid ${bc.color}`, borderRadius:6, padding:"11px 14px", marginBottom:10, background:bc.bg+"55" }}>
            <div style={{ display:"flex", alignItems:"baseline", gap:8, flexWrap:"wrap" }}>
              <span style={{ fontSize:15, fontWeight:700, color:bc.color }}>{c.headline}</span>
              <Tag label={bc.label} color={bc.color} bg={bc.bg} />
            </div>
            <div style={{ fontSize:12, color:"#444", margin:"5px 0" }}>{c.tagline}</div>
            <div style={{ display:"flex", flexWrap:"wrap" }}>{c.signals.map(s=><Tag key={s} label={s} />)}</div>
            <div style={{ fontSize:10, color:"#999", fontStyle:"italic", marginTop:4 }}>anchor terms: {c.anchor}</div>
          </div>;
        })}
      </div>}

      {/* TALKS */}
      {tab===1 && <div>
        <div style={{ fontSize:11, color:"#999", marginBottom:10 }}>{TALKS.reduce((a,t)=>a+t.items.length,0)} talks · {TALKS.length} thematic threads · click to expand</div>
        {TALKS.map(thread=>(
          <div key={thread.theme} style={{ marginBottom:8, border:"1px solid #e0e0e0", borderRadius:6, overflow:"hidden" }}>
            <button onClick={()=>setExp(exp===thread.theme?null:thread.theme)} style={{ width:"100%", textAlign:"left", padding:"9px 13px", background:thread.color+"12", border:"none", cursor:"pointer", display:"flex", justifyContent:"space-between" }}>
              <span style={{ fontWeight:700, fontSize:13, color:thread.color }}>{thread.theme}</span>
              <span style={{ fontSize:11, color:"#888" }}>{thread.items.length} {exp===thread.theme?"▲":"▼"}</span>
            </button>
            {exp===thread.theme && <div style={{ padding:"6px 13px 10px" }}>
              {thread.items.map((item,i)=>(
                <div key={i} style={{ padding:"5px 0", borderBottom:"1px solid #f5f5f5" }}>
                  <span style={{ fontWeight:600, fontSize:13 }}>{item.title}</span><AL url={item.url} />
                  <div style={{ fontSize:11, color:"#666" }}>{item.venue}{item.loc?` · ${item.loc}`:""}{item.date?` · ${item.date}`:""}</div>
                  {item.note && <Tag label={item.note} />}
                </div>
              ))}
            </div>}
          </div>
        ))}
      </div>}

      {/* PODCASTS */}
      {tab===2 && <div>
        <div style={{ fontSize:11, color:"#999", marginBottom:10 }}>{PODCASTS.length} podcast / media appearances · 🟢 confirmed URL · 🟡 URL needed</div>
        {PODCASTS.map((p,i)=>(
          <div key={i} style={{ padding:"10px 0", borderBottom:"1px solid #f0f0f0", display:"flex", gap:10, alignItems:"flex-start" }}>
            <div style={{ width:9, height:9, borderRadius:"50%", background:p.url?"#2d7a2d":"#c0a000", flexShrink:0, marginTop:5 }} />
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:700, fontSize:14 }}>
                {p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ color:"#1a3a5c", textDecoration:"none" }}>{p.title} ↗</a> : p.title}
              </div>
              <div style={{ fontSize:12, color:"#555", marginTop:2 }}>
                <b>{p.host}</b>{p.by?` · ${p.by}`:""} · {p.date}
              </div>
              {p.alt && <a href={p.alt} target="_blank" rel="noopener noreferrer" style={{ color:"#888", fontSize:11 }}>Also on Apple Podcasts ↗</a>}
              {p.note && <div style={{ fontSize:11, color:"#aaa", fontStyle:"italic" }}>{p.note}</div>}
              {p.url && <div style={{ fontSize:10, color:"#ccc", wordBreak:"break-all", marginTop:2 }}>{p.url}</div>}
            </div>
          </div>
        ))}
      </div>}

      {/* PRESS */}
      {tab===3 && <div>
        {PRESS.map((p,i)=>(
          <div key={i} style={{ padding:"10px 0", borderBottom:"1px solid #f0f0f0" }}>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap", alignItems:"flex-start" }}>
              <Tag label={p.outlet} color="#1a3a5c" bg="#e8f0f8" />
              <span style={{ fontSize:13, fontWeight:600 }}>
                {p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ color:"#1a3a5c", textDecoration:"none" }}>{p.title} ↗</a> : p.title}
              </span>
            </div>
            <div style={{ fontSize:11, color:"#666", marginTop:3 }}>{p.by?`${p.by} · `:""}{p.date}{p.note?` · ${p.note}`:""}</div>
            {p.role && <div style={{ fontSize:11, color:"#888", fontStyle:"italic" }}>{p.role}</div>}
          </div>
        ))}
      </div>}

      {/* PUBLICATIONS */}
      {tab===4 && <div>
        <div style={{ fontWeight:700, fontSize:13, color:"#1a3a5c", borderBottom:"2px solid #e8f0f8", paddingBottom:4, marginBottom:8 }}>Books</div>
        {BOOKS.map((b,i)=>(
          <div key={i} style={{ padding:"7px 0", borderBottom:"1px solid #f5f5f5" }}>
            <span style={{ fontWeight:600, fontSize:13 }}>{b.title}</span><AL url={b.url} />
            <div style={{ fontSize:11, color:"#666" }}>{b.pub} · {b.date}</div>
            {b.note && <Tag label={b.note} />}
          </div>
        ))}
        <div style={{ fontWeight:700, fontSize:13, color:"#1a3a5c", borderBottom:"2px solid #e8f0f8", paddingBottom:4, marginBottom:8, marginTop:16 }}>Traditional Humanities Essays</div>
        <div style={{ fontSize:11, color:"#888", marginBottom:8 }}>Ongoing scholarly life — cited in modernist memory, classical reception, philosophy of literature. Subjects: Plato, Baudelaire, Proust, Woolf, Wordsworth, Kafka, Sappho.</div>
        {TRAD_ESSAYS.map((p,i)=>(
          <div key={i} style={{ padding:"6px 0", borderBottom:"1px solid #f5f5f5" }}>
            <span style={{ fontWeight:600, fontSize:13 }}>{p.title}</span>
            <div style={{ fontSize:11, color:"#666" }}>{p.venue?`${p.venue}`:""}{p.date?` · ${p.date}`:""}</div>
            {p.note && <Tag label={p.note} />}
          </div>
        ))}
        <div style={{ fontWeight:700, fontSize:13, color:"#1a3a5c", borderBottom:"2px solid #e8f0f8", paddingBottom:4, marginBottom:8, marginTop:16 }}>Selected Papers</div>
        {PAPERS.map((p,i)=>(
          <div key={i} style={{ padding:"6px 0", borderBottom:"1px solid #f5f5f5" }}>
            <span style={{ fontWeight:600, fontSize:13 }}>{p.title}</span>
            {p.doi && p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ color:"#1a5cbf", fontSize:11, marginLeft:5 }}>DOI ↗</a>}
            <div style={{ fontSize:11, color:"#666" }}>{p.venue?`${p.venue}`:""}{p.date?` · ${p.date}`:""}</div>
            {p.note && <Tag label={p.note} />}
          </div>
        ))}
      </div>}

      {/* RECEPTION */}
      {tab===5 && <div>
        <div style={{ fontSize:11, color:"#999", marginBottom:12 }}>Qualitative impact by cluster — who cites this work, and why. Citation counts are field-relative; what matters is the epistemic work each contribution does.</div>
        {RECEPTION.map((r,ri)=>(
          <div key={ri} style={{ border:`1px solid ${r.color}20`, borderLeft:`4px solid ${r.color}`, borderRadius:6, padding:"12px 14px", marginBottom:12, background:r.bg+"44" }}>
            <div style={{ fontWeight:700, fontSize:14, color:r.color, marginBottom:3 }}>{r.cluster}</div>
            <div style={{ fontSize:11, color:"#555", fontStyle:"italic", marginBottom:6 }}>{r.anchor}</div>
            <Tag label={r.stats} color={r.color} bg={r.bg} />
            <div style={{ fontSize:12, color:"#333", margin:"8px 0 6px", lineHeight:1.6 }}>{r.summary}</div>
            <ul style={{ margin:"4px 0 0 16px", padding:0 }}>
              {r.impact.map((pt,i)=>(
                <li key={i} style={{ fontSize:11, color:"#555", marginBottom:3, lineHeight:1.5 }}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
        <div style={{ fontSize:10, color:"#aaa", marginTop:8, fontStyle:"italic" }}>Total citation trajectory: 189 citations in most recent year (highest single-year) · 700+ total · interdisciplinary reach across CSS, AI/ML, DH, governance, lit studies, HCI, cognitive science</div>
      </div>}

      {/* AFFILIATIONS */}
      {tab===6 && <div>
        {["Independent","PI-led","Institutional"].map(type=>(
          <div key={type} style={{ marginBottom:14 }}>
            <div style={{ fontWeight:700, fontSize:11, color:"#999", textTransform:"uppercase", letterSpacing:1, marginBottom:6 }}>{type}</div>
            {AFFILIATIONS.filter(a=>a.type===type).map((a,i)=>(
              <div key={i} style={{ padding:"7px 0", borderBottom:"1px solid #f5f5f5" }}>
                <span style={{ fontWeight:600, fontSize:13 }}>{a.org}</span><AL url={a.url} />
                <div style={{ fontSize:11, color:"#666" }}>{a.role}</div>
              </div>
            ))}
          </div>
        ))}
      </div>}

      {/* DIGITAL */}
      {tab===7 && <div>
        <div style={{ fontSize:11, color:"#999", marginBottom:10 }}>All properties · 🟢 live · 🟡 pending — critical for SEO/GEO & Google Knowledge Panel</div>
        {DIGITAL.map((d,i)=>(
          <div key={i} style={{ display:"flex", gap:10, padding:"8px 0", borderBottom:"1px solid #f0f0f0", alignItems:"flex-start" }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:d.live?"#2d7a2d":"#c0a000", flexShrink:0, marginTop:5 }} />
            <div style={{ flex:1 }}>
              <span style={{ fontWeight:600, fontSize:13 }}>{d.label}</span>
              {d.url
                ? <a href={d.url} target="_blank" rel="noopener noreferrer" style={{ color:"#1a5cbf", fontSize:11, marginLeft:8 }}>{d.url} ↗</a>
                : <span style={{ fontSize:11, color:"#ccc", marginLeft:8 }}>no URL yet</span>}
              {d.note && <div style={{ fontSize:10, color:"#aaa", fontStyle:"italic" }}>{d.note}</div>}
            </div>
          </div>
        ))}
      </div>}

      <div style={{ marginTop:18, fontSize:10, color:"#ccc", borderTop:"1px solid #eee", paddingTop:8 }}>
        Master reference · Updated March 2026 · Still needed: Creative Velocity episode URL · Jarmarl Thomas episode URL · Forbes article URL · Beth McMurtrie CHE article exact URL · Deloitte/Yale Northrup/Smith/Carleton/Lafayette/Austin College direct links · book proposal submission timing
      </div>
    </div>
  );
}
