export interface Founder {
  name: string;
  role: string;
  avatar: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface FundingRound {
  round: string;
  date: string;
  amount: string;
  valuation: string;
  leadInvestor: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  logoBg?: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  status: 'unicorn' | 'emerging' | 'established';
  growthBadge?: string;
  likes: number;
  comments: number;
  fundingTotal: string;
  valuation: string;
  employeeCount: number;
  employeeGrowth: number;
  foundingYear: number;
  website: string;
  founders: Founder[];
  timeline: TimelineEvent[];
  fundingHistory: FundingRound[];
  investors: string[]; // Investor IDs
  products: string[]; // Product names
  similarCompanies: string[]; // Company IDs
}

export interface Investor {
  id: string;
  name: string;
  logo: string;
  type: 'VC' | 'Corporate' | 'Angel' | 'Sovereign';
  thesis: string;
  managedAssets: string;
  velocity: string;
  portfolioCount: number;
  avgCheckSize: string;
  portfolioConcentration: { sector: string; percentage: number }[];
  recentInvestments: { companyId: string; round: string; amount: string; date: string }[];
  velocityData: { quarter: string; count: number }[];
  coInvestors: string[];
  featured?: boolean;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'Chat' | 'Code' | 'Image' | 'Video' | 'Voice' | 'Productivity';
  companyId: string;
  likes: number;
  users: string;
  launchDate: string;
  logo: string;
  website: string;
}

export const companiesData: Company[] = [
  {
    id: "cursor",
    name: "Cursor",
    logo: "💻",
    logoBg: "bg-zinc-950 text-white",
    description: "The AI-first code editor built for speed and productivity.",
    longDescription: "Cursor is an AI-powered code editor built as a fork of VS Code. It features seamless integration of large language models to help developers write, edit, and navigate code at lightning speeds. Designed to act as a proactive pair programmer, Cursor understands codebases deeply and assists with refactoring, bug-squashing, and direct code generation.",
    category: "Code",
    tags: ["Code", "Developer Tools"],
    status: "emerging",
    growthBadge: "Trending in Coding",
    likes: 8300,
    comments: 173,
    fundingTotal: "$12.5M",
    valuation: "$150M",
    employeeCount: 24,
    employeeGrowth: 85,
    foundingYear: 2023,
    website: "https://cursor.com",
    founders: [
      { name: "Arvid Lunnemark", role: "Co-Founder & CEO", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Michael Truell", role: "Co-Founder & CTO", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" }
    ],
    timeline: [
      { year: "2023", title: "Company Founded", description: "Anysphere (the company behind Cursor) was founded by a team of MIT and Harvard graduates." },
      { year: "2023", title: "Seed Round Raised", description: "Secured $8M in seed funding led by OpenAI Startup Fund." },
      { year: "2024", title: "Viral Adoption", description: "Passed 100,000 monthly active developers and released codebase indexing." }
    ],
    fundingHistory: [
      { round: "Seed", date: "Oct 2023", amount: "$8.0M", valuation: "$60M", leadInvestor: "OpenAI Startup Fund" },
      { round: "Series A", date: "May 2024", amount: "$4.5M", valuation: "$150M", leadInvestor: "Andreessen Horowitz" }
    ],
    investors: ["openai-startup-fund", "a16z"],
    products: ["Cursor Editor", "Cursor Copilot"],
    similarCompanies: ["openai", "anthropic", "perplexity"]
  },
  {
    id: "openai",
    name: "OpenAI",
    logo: "🌀",
    logoBg: "bg-emerald-600 text-white",
    description: "AI research and deployment company behind ChatGPT.",
    longDescription: "OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity. OpenAI is known for pioneering GPT-based language models, DALL-E for image creation, Sora for video production, and ChatGPT, which sparked the global generative AI revolution.",
    category: "Chat",
    tags: ["Chat", "Artificial Intelligence"],
    status: "unicorn",
    growthBadge: "Most used this week",
    likes: 5100,
    comments: 341,
    fundingTotal: "$13.0B",
    valuation: "$86.0B",
    employeeCount: 1200,
    employeeGrowth: 45,
    foundingYear: 2015,
    website: "https://openai.com",
    founders: [
      { name: "Sam Altman", role: "CEO", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80" },
      { name: "Greg Brockman", role: "President", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" }
    ],
    timeline: [
      { year: "2015", title: "Founded as Non-profit", description: "Launched with a $1B funding commitment from Sam Altman, Elon Musk, Reid Hoffman, and others." },
      { year: "2019", title: "Shift to Capped-Profit", description: "Transitioned to a capped-profit structure and announced a $1B partnership with Microsoft." },
      { year: "2022", title: "ChatGPT Launch", description: "Released ChatGPT, reaching 100M users in just two months." },
      { year: "2024", title: "GPT-4o & Sora Unveiled", description: "Released real-time omni model and ultra-realistic text-to-video generator." }
    ],
    fundingHistory: [
      { round: "Partner Commit", date: "Dec 2015", amount: "$1.0B", valuation: "N/A", leadInvestor: "Elon Musk & Reid Hoffman" },
      { round: "Corporate Round", date: "Jul 2019", amount: "$1.0B", valuation: "$20B", leadInvestor: "Microsoft" },
      { round: "Secondary Sale", date: "Apr 2023", amount: "$300M", valuation: "$29B", leadInvestor: "Sequoia Capital" },
      { round: "Strategic Partnership", date: "Jan 2024", amount: "$10.0B", valuation: "$86B", leadInvestor: "Microsoft" }
    ],
    investors: ["sequoia-capital", "microsoft", "founders-fund"],
    products: ["ChatGPT", "GPT-4o API", "DALL-E 3", "Sora"],
    similarCompanies: ["anthropic", "perplexity", "cursor"]
  },
  {
    id: "anthropic",
    name: "Anthropic",
    logo: "▲",
    logoBg: "bg-orange-800 text-white",
    description: "AI safety and research company, creator of Claude.",
    longDescription: "Anthropic is an AI safety and research company that builds reliable, beneficial, and controllable AI systems. Founded by former members of OpenAI, Anthropic focuses on constitutional AI principles to construct models that are helpful, honest, and harmless. Their flagship AI assistant, Claude, is recognized for its high context window and advanced logical reasoning.",
    category: "Chat",
    tags: ["Chat", "Productivity"],
    status: "unicorn",
    growthBadge: "Most used this week",
    likes: 6700,
    comments: 89,
    fundingTotal: "$7.3B",
    valuation: "$18.4B",
    employeeCount: 500,
    employeeGrowth: 110,
    foundingYear: 2021,
    website: "https://anthropic.com",
    founders: [
      { name: "Dario Amodei", role: "CEO & Co-Founder", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80" },
      { name: "Daniela Amodei", role: "President & Co-Founder", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" }
    ],
    timeline: [
      { year: "2021", title: "Company Founded", description: "Created by former OpenAI VP of Research Dario Amodei and his sister Daniela Amodei." },
      { year: "2023", title: "Claude Launch & Mega Rounds", description: "Launched Claude AI and secured multi-billion investments from Google and Amazon." },
      { year: "2024", title: "Claude 3.5 Sonnet Release", description: "Released Claude 3.5 Sonnet, setting new benchmarks in code generation and reasoning." }
    ],
    fundingHistory: [
      { round: "Series A", date: "May 2021", amount: "$124M", valuation: "$800M", leadInvestor: "Jaan Tallinn" },
      { round: "Series B", date: "May 2022", amount: "$580M", valuation: "$4.0B", leadInvestor: "FTX (settled)" },
      { round: "Strategic Partnership", date: "Sep 2023", amount: "$4.0B", valuation: "$15B", leadInvestor: "Amazon" },
      { round: "Series C", date: "Feb 2024", amount: "$2.0B", valuation: "$18.4B", leadInvestor: "Google" }
    ],
    investors: ["google", "amazon", "index-ventures"],
    products: ["Claude AI", "Claude API", "Constitutional AI Engine"],
    similarCompanies: ["openai", "perplexity", "cursor"]
  },
  {
    id: "midjourney",
    name: "Midjourney",
    logo: "⛵",
    logoBg: "bg-sky-900 text-white",
    description: "AI image generator for creators and designers.",
    longDescription: "Midjourney is an independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species. Their text-to-image generator, hosted entirely via Discord, has taken the creative industry by storm, generating highly stylistic, cinematic, and beautiful visual assets without any traditional venture capital.",
    category: "Image",
    tags: ["Image", "Design"],
    status: "established",
    growthBadge: "Top rated in Image",
    likes: 5500,
    comments: 386,
    fundingTotal: "$0 (Self-funded)",
    valuation: "$1.0B (est)",
    employeeCount: 40,
    employeeGrowth: 20,
    foundingYear: 2021,
    website: "https://midjourney.com",
    founders: [
      { name: "David Holz", role: "Founder & CEO", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80" }
    ],
    timeline: [
      { year: "2021", title: "Lab Created", description: "David Holz (co-founder of Leap Motion) established Midjourney in San Francisco." },
      { year: "2022", title: "Discord Open Beta", description: "Launched the Discord bot-based image generator, which grew virally to millions of users." },
      { year: "2024", title: "V6 Model Release", description: "Released Midjourney V6 with photo-realism improvements and in-painting features." }
    ],
    fundingHistory: [
      { round: "Bootstrap", date: "Jul 2021", amount: "$0", valuation: "N/A", leadInvestor: "Self-funded / David Holz" }
    ],
    investors: [],
    products: ["Midjourney Generator", "Midjourney Alpha Web Portal"],
    similarCompanies: ["runway", "openai"]
  },
  {
    id: "runway",
    name: "Runway",
    logo: "Ｒ",
    logoBg: "bg-black text-white",
    description: "AI video creation platform for everyone.",
    longDescription: "Runway is an applied AI research company shaping the next era of art, entertainment, and human creativity. By building multi-modal AI models for video, audio, and image manipulation, Runway provides filmmakers, artists, and creators with superpowers like text-to-video generation (Gen-1, Gen-2, and Gen-3 Alpha), video-to-video stylization, and advanced motion brush controls.",
    category: "Video",
    tags: ["Video"],
    status: "unicorn",
    growthBadge: "Fastest growing",
    likes: 3900,
    comments: 210,
    fundingTotal: "$237M",
    valuation: "$1.5B",
    employeeCount: 80,
    employeeGrowth: 60,
    foundingYear: 2018,
    website: "https://runwayml.com",
    founders: [
      { name: "Cristóbal Valenzuela", role: "Co-Founder & CEO", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80" },
      { name: "Anastasis Germanidis", role: "Co-Founder & CTO", avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=100&auto=format&fit=crop&q=80" }
    ],
    timeline: [
      { year: "2018", title: "Inception", description: "Founded in New York City to build AI tools for visual artists." },
      { year: "2021", title: "Stable Diffusion Contribution", description: "Co-created the original Stable Diffusion model in partnership with LMU Munich." },
      { year: "2023", title: "Gen-2 Release", description: "Unveiled Gen-2, the first widely accessible high-quality text-to-video commercial model." }
    ],
    fundingHistory: [
      { round: "Seed", date: "Dec 2018", amount: "$2.0M", valuation: "$10M", leadInvestor: "Lux Capital" },
      { round: "Series B", date: "Dec 2021", amount: "$35M", valuation: "$200M", leadInvestor: "Amplify Partners" },
      { round: "Series C", date: "Jun 2023", amount: "$141M", valuation: "$1.5B", leadInvestor: "Google & NVIDIA" }
    ],
    investors: ["google", "nvidia", "lux-capital"],
    products: ["Runway Gen-2", "Runway Gen-3 Alpha", "AI Magic Tools"],
    similarCompanies: ["midjourney", "openai"]
  },
  {
    id: "perplexity",
    name: "Perplexity",
    logo: "❄️",
    logoBg: "bg-teal-900 text-white",
    description: "AI search engine for real-time answers.",
    longDescription: "Perplexity is an AI conversational search engine designed to replace traditional search queries with direct, annotated, and conversational answers. Pulling from real-time web sources, Perplexity generates natural language summaries with detailed citations, enabling users to verify information instantly.",
    category: "Productivity",
    tags: ["Search", "Productivity"],
    status: "unicorn",
    growthBadge: "Most used this week",
    likes: 2900,
    comments: 144,
    fundingTotal: "$165M",
    valuation: "$1.0B",
    employeeCount: 65,
    employeeGrowth: 150,
    foundingYear: 2022,
    website: "https://perplexity.ai",
    founders: [
      { name: "Aravind Srinivas", role: "Co-Founder & CEO", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop&q=80" },
      { name: "Denis Yarats", role: "Co-Founder & CTO", avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&auto=format&fit=crop&q=80" }
    ],
    timeline: [
      { year: "2022", title: "Founded", description: "Created by former researchers from OpenAI, Meta, and Quora." },
      { year: "2023", title: "Copilot Released", description: "Launched GPT-4 powered Search Copilot for guided, interactive web research." },
      { year: "2024", title: "Series B & Unicorn Status", description: "Raised funding from Jeff Bezos and NVIDIA, valuation hitting $1B." }
    ],
    fundingHistory: [
      { round: "Seed", date: "Sep 2022", amount: "$3.1M", valuation: "$15M", leadInvestor: "Elad Gil" },
      { round: "Series A", date: "Mar 2023", amount: "$25.6M", valuation: "$150M", leadInvestor: "New Enterprise Associates" },
      { round: "Series B", date: "Jan 2024", amount: "$73.6M", valuation: "$520M", leadInvestor: "IVP" },
      { round: "Series B-2", date: "Apr 2024", amount: "$63.0M", valuation: "$1.0B", leadInvestor: "Daniel Gross & Stan Druckenmiller" }
    ],
    investors: ["sequoia-capital", "nvidia", "ivp", "nea"],
    products: ["Perplexity Search", "Perplexity Pro", "Perplexity API"],
    similarCompanies: ["openai", "anthropic", "google-ai"]
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    logo: "〢",
    logoBg: "bg-zinc-800 text-white",
    description: "AI voice synthesis and audio tools.",
    longDescription: "ElevenLabs is a voice technology research company developing natural text-to-speech and voice-cloning software. Utilizing deep learning, their models produce human-like intonation, pacing, and emotional expression, making high-quality synthetic audio accessible for authors, developers, and game creators.",
    category: "Voice",
    tags: ["Voice", "Audio"],
    status: "unicorn",
    growthBadge: "Trending in Voice",
    likes: 3200,
    comments: 175,
    fundingTotal: "$101M",
    valuation: "$1.1B",
    employeeCount: 50,
    employeeGrowth: 130,
    foundingYear: 2022,
    website: "https://elevenlabs.io",
    founders: [
      { name: "Mati Staniszewski", role: "Co-Founder & CEO", avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=100&auto=format&fit=crop&q=80" },
      { name: "Piotr Dabkowski", role: "Co-Founder & CTO", avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&auto=format&fit=crop&q=80" }
    ],
    timeline: [
      { year: "2022", title: "Founded", description: "Created by childhood friends from Poland inspired by poorly dubbed Hollywood movies." },
      { year: "2023", title: "Viral Beta Launch", description: "Released high-fidelity voice generator that reached 1M users in months." },
      { year: "2024", title: "Series B Unicorn", description: "Raised $80M co-led by a16z and Sequoia, boosting valuation to $1.1B." }
    ],
    fundingHistory: [
      { round: "Pre-seed", date: "Jun 2022", amount: "$2.0M", valuation: "$10M", leadInvestor: "Credo Ventures" },
      { round: "Series A", date: "Jan 2023", amount: "$19.0M", valuation: "$100M", leadInvestor: "Index Ventures" },
      { round: "Series B", date: "Jan 2024", amount: "$80.0M", valuation: "$1.1B", leadInvestor: "Andreessen Horowitz" }
    ],
    investors: ["a16z", "sequoia-capital", "index-ventures"],
    products: ["Speech Synthesis", "Voice Lab (Cloning)", "Reader App"],
    similarCompanies: ["descript", "runway"]
  },
  {
    id: "notion",
    name: "Notion",
    logo: "Ｎ",
    logoBg: "bg-white border text-black",
    description: "AI notes, docs and knowledge workspace.",
    longDescription: "Notion is a single-space workspace for wiki-documentation, task management, and documentation. Notion AI incorporates artificial intelligence directly into pages, summarizing notes, generating ideas, editing tone, and surfacing insights across databases.",
    category: "Productivity",
    tags: ["Productivity", "Writing"],
    status: "established",
    likes: 2600,
    comments: 128,
    fundingTotal: "$343M",
    valuation: "$10.0B",
    employeeCount: 650,
    employeeGrowth: 25,
    foundingYear: 2013,
    website: "https://notion.so",
    founders: [
      { name: "Ivan Zhao", role: "Co-Founder & CEO", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80" },
      { name: "Simon Last", role: "Co-Founder", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80" }
    ],
    timeline: [
      { year: "2013", title: "Founded", description: "Ivan Zhao and Simon Last founded Notion in San Francisco." },
      { year: "2018", title: "Notion 2.0 Launch", description: "Re-architected the app to add databases, sparking mainstream viral growth." },
      { year: "2023", title: "Notion AI Release", description: "Rolled out native write-assistant Q&A tools to search workspace docs." }
    ],
    fundingHistory: [
      { round: "Seed", date: "Jan 2013", amount: "$2.0M", valuation: "N/A", leadInvestor: "Angels" },
      { round: "Series A", date: "Jan 2020", amount: "$50.0M", valuation: "$2.0B", leadInvestor: "Index Ventures" },
      { round: "Series B", date: "Oct 2021", amount: "$275.0M", valuation: "$10.0B", leadInvestor: "Coatue & Sequoia Capital" }
    ],
    investors: ["sequoia-capital", "index-ventures", "coatue"],
    products: ["Notion Docs", "Notion Databases", "Notion AI Q&A"],
    similarCompanies: ["descript", "canva"]
  },
  {
    id: "descript",
    name: "Descript",
    logo: "Ｄ",
    logoBg: "bg-blue-600 text-white",
    description: "Edit audio & video like a doc.",
    longDescription: "Descript is a collaborative audio/video editor that transcribes audio to text, allowing creators to edit media simply by editing the text. With AI features like Overdub (voice generation), Eye Contact correction, and filler word removal, Descript simplifies complex production workflows.",
    category: "Video",
    tags: ["Video", "Audio"],
    status: "established",
    likes: 2300,
    comments: 98,
    fundingTotal: "$100M",
    valuation: "$500M",
    employeeCount: 120,
    employeeGrowth: 15,
    foundingYear: 2017,
    website: "https://descript.com",
    founders: [
      { name: "Andrew Mason", role: "Founder & CEO", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" }
    ],
    timeline: [
      { year: "2017", title: "Spun Out of Detour", description: "Andrew Mason (former Groupon CEO) launched Descript after spinning it out of Detour." },
      { year: "2020", title: "Lyrebird Acquisition", description: "Acquired Lyrebird to integrate synthetic voice generation directly into the editor." },
      { year: "2022", title: "Series C", description: "Raised $50M from OpenAI Startup Fund and others to integrate generative video tools." }
    ],
    fundingHistory: [
      { round: "Seed", date: "Oct 2017", amount: "$5.0M", valuation: "$20M", leadInvestor: "Andreessen Horowitz" },
      { round: "Series A", date: "Sep 2019", amount: "$15.0M", valuation: "$70M", leadInvestor: "Andreessen Horowitz" },
      { round: "Series B", date: "Feb 2021", amount: "$30.0M", valuation: "$260M", leadInvestor: "Redpoint Ventures" },
      { round: "Series C", date: "Nov 2022", amount: "$50.0M", valuation: "$500M", leadInvestor: "OpenAI Startup Fund" }
    ],
    investors: ["openai-startup-fund", "a16z", "redpoint"],
    products: ["Descript Classic", "Descript Storyboard", "Overdub"],
    similarCompanies: ["elevenlabs", "runway"]
  },
  {
    id: "canva",
    name: "Canva AI",
    logo: "Ｃ",
    logoBg: "bg-teal-500 text-white",
    description: "Design anything with AI, together.",
    longDescription: "Canva is a global graphic design platform that makes creative design accessible. Their Magic Studio suite infuses generative AI to let users generate images, write copy, rewrite layouts, translate text, and animate designs inside a collaborative workspace.",
    category: "Productivity",
    tags: ["Design", "Productivity"],
    status: "established",
    likes: 2100,
    comments: 86,
    fundingTotal: "$560M",
    valuation: "$26.0B",
    employeeCount: 4000,
    employeeGrowth: 10,
    foundingYear: 2013,
    website: "https://canva.com",
    founders: [
      { name: "Melanie Perkins", role: "Co-Founder & CEO", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80" },
      { name: "Cliff Obrecht", role: "Co-Founder & COO", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" }
    ],
    timeline: [
      { year: "2013", title: "Founded in Sydney", description: "Melanie Perkins, Cliff Obrecht, and Cameron Adams founded Canva." },
      { year: "2019", title: "Unicorn Status & Global Reach", description: "Reached a $3.2B valuation and over 20M monthly active users." },
      { year: "2023", title: "Magic Studio Launch", description: "Released 10+ native AI design automation tools for drag-and-drop assets." }
    ],
    fundingHistory: [
      { round: "Seed", date: "Mar 2013", amount: "$3.0M", valuation: "$10M", leadInvestor: "Matrix Partners" },
      { round: "Series A", date: "Oct 2015", amount: "$15.0M", valuation: "$165M", leadInvestor: "Felicis Ventures" },
      { round: "Series C", date: "Sep 2021", amount: "$200.0M", valuation: "$40.0B", leadInvestor: "T. Rowe Price" },
      { round: "Secondary Trans", date: "Mar 2024", amount: "$300.0M", valuation: "$26.0B", leadInvestor: "BlackRock & Coatue" }
    ],
    investors: ["coatue", "matrix-partners", "felicis"],
    products: ["Canva Graphic Suites", "Canva Magic Studio", "Canva Presentations"],
    similarCompanies: ["notion", "midjourney"]
  },
  {
    id: "databricks",
    name: "Databricks",
    logo: "🧱",
    logoBg: "bg-blue-700 text-white",
    description: "Data intelligence platform for enterprise AI.",
    longDescription: "Databricks provides a unified open platform for data engineering, machine learning, and collaborative data science. Their Data Lakehouse architecture powers modern enterprise analytics, housing tools for generative AI development and vector databases.",
    category: "Productivity",
    tags: ["Data", "Infrastructure"],
    status: "established",
    likes: 1200,
    comments: 42,
    fundingTotal: "$4.0B",
    valuation: "$43.0B",
    employeeCount: 6000,
    employeeGrowth: 30,
    foundingYear: 2013,
    website: "https://databricks.com",
    founders: [
      { name: "Ali Ghodsi", role: "Co-Founder & CEO", avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=100&auto=format&fit=crop&q=80" }
    ],
    timeline: [
      { year: "2013", title: "Founded by Spark Creators", description: "Created by the original creators of Apache Spark at UC Berkeley." },
      { year: "2023", title: "MosaicML Acquisition", description: "Acquired MosaicML for $1.3B to offer custom LLM pre-training environments." }
    ],
    fundingHistory: [
      { round: "Series A", date: "Sep 2013", amount: "$13.9M", valuation: "$50M", leadInvestor: "Andreessen Horowitz" },
      { round: "Series I", date: "Sep 2023", amount: "$500M", valuation: "$43B", leadInvestor: "T. Rowe Price" }
    ],
    investors: ["a16z", "t-rowe-price"],
    products: ["Lakehouse Platform", "Mosaic AI", "Delta Lake"],
    similarCompanies: ["openai", "pinecone"]
  },
  {
    id: "pinecone",
    name: "Pinecone",
    logo: "🌲",
    logoBg: "bg-green-700 text-white",
    description: "Vector database for semantic AI search.",
    longDescription: "Pinecone is a managed, cloud-native vector database designed to support large-scale AI applications. By storing high-dimensional vector embeddings, Pinecone speeds up semantic similarity search, retrieval-augmented generation (RAG), and recommendation engines.",
    category: "Productivity",
    tags: ["Data", "Infrastructure"],
    status: "unicorn",
    likes: 950,
    comments: 31,
    fundingTotal: "$138M",
    valuation: "$750M",
    employeeCount: 150,
    employeeGrowth: 40,
    foundingYear: 2019,
    website: "https://pinecone.io",
    founders: [
      { name: "Edo Liberty", role: "Founder & CEO", avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&auto=format&fit=crop&q=80" }
    ],
    timeline: [
      { year: "2019", title: "Founded", description: "Established by Edo Liberty, former Director of Research at AWS." },
      { year: "2023", title: "Series B funding", description: "Raised $100M at a $750M valuation led by Andreessen Horowitz." }
    ],
    fundingHistory: [
      { round: "Seed", date: "Jan 2021", amount: "$10M", valuation: "$35M", leadInvestor: "Wing Venture Capital" },
      { round: "Series A", date: "Mar 2022", amount: "$28M", valuation: "$180M", leadInvestor: "Menlo Ventures" },
      { round: "Series B", date: "Apr 2023", amount: "$100M", valuation: "$750M", leadInvestor: "Andreessen Horowitz" }
    ],
    investors: ["a16z", "menlo-ventures"],
    products: ["Pinecone Vector DB", "Pinecone Serverless"],
    similarCompanies: ["weaviate", "databricks"]
  },
  {
    id: "weaviate",
    name: "Weaviate",
    logo: "💡",
    logoBg: "bg-green-600 text-white",
    description: "Open-source vector search database.",
    longDescription: "Weaviate is an open-source vector search engine. It allows developers to store data objects and vector embeddings and query them semantically. Built for sub-second retrieval, Weaviate supports RAG architectures and deep text/image searching.",
    category: "Productivity",
    tags: ["Data", "Developer Tools"],
    status: "emerging",
    likes: 680,
    comments: 19,
    fundingTotal: "$65M",
    valuation: "$200M",
    employeeCount: 60,
    employeeGrowth: 80,
    foundingYear: 2019,
    website: "https://weaviate.io",
    founders: [
      { name: "Bob van Luijt", role: "Co-Founder & CEO", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80" }
    ],
    timeline: [
      { year: "2019", title: "Founded", description: "Founded in Amsterdam to build semantic search engines." },
      { year: "2023", title: "Series B Raised", description: "Raised $50M led by Index Ventures to expand commercial database tools." }
    ],
    fundingHistory: [
      { round: "Seed", date: "Dec 2020", amount: "$1.6M", valuation: "$8M", leadInvestor: "Peak Capital" },
      { round: "Series A", date: "Feb 2022", amount: "$16.0M", valuation: "$75M", leadInvestor: "New Enterprise Associates" },
      { round: "Series B", date: "Apr 2023", amount: "$50.0M", valuation: "$200M", leadInvestor: "Index Ventures" }
    ],
    investors: ["index-ventures", "nea"],
    products: ["Weaviate Core", "Weaviate Cloud Service"],
    similarCompanies: ["pinecone", "databricks"]
  },
  {
    id: "langchain",
    name: "LangChain",
    logo: "🦜",
    logoBg: "bg-zinc-100 text-black",
    description: "Framework for building applications with LLMs.",
    longDescription: "LangChain is a developer framework designed to simplify the creation of applications using large language models. By providing standardized modules for agents, memory, retrieval pipelines, and model chaining, LangChain abstracts away structural boilerplate.",
    category: "Code",
    tags: ["Code", "Developer Tools"],
    status: "emerging",
    likes: 1100,
    comments: 48,
    fundingTotal: "$30M",
    valuation: "$200M",
    employeeCount: 30,
    employeeGrowth: 200,
    foundingYear: 2022,
    website: "https://langchain.com",
    founders: [
      { name: "Harrison Chase", role: "Founder & CEO", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80" }
    ],
    timeline: [
      { year: "2022", title: "Open Source Project", description: "Started as a GitHub project by Harrison Chase, quickly gaining massive developer stars." },
      { year: "2023", title: "Company Formation & Funding", description: "Incorporated and raised seed rounds from Sequoia Capital and Benchmark." }
    ],
    fundingHistory: [
      { round: "Seed", date: "Feb 2023", amount: "$10.0M", valuation: "$50M", leadInvestor: "Benchmark" },
      { round: "Series A", date: "Apr 2023", amount: "$20.0M", valuation: "$200M", leadInvestor: "Sequoia Capital" }
    ],
    investors: ["sequoia-capital", "benchmark"],
    products: ["LangChain Python/JS Library", "LangSmith", "LangServe"],
    similarCompanies: ["cursor", "openai"]
  }
];

export const investorsData: Investor[] = [
  {
    id: "sequoia-capital",
    name: "Sequoia Capital",
    logo: "🌲",
    type: "VC",
    thesis: "We partner early with builders who wish to create enduring, revolutionary platforms. In AI, our focus rests on founders redefining the hardware interface, data retrieval architectures, and vertically-integrated generative pipelines. We seek teams looking to compound structural advantages over decades.",
    managedAssets: "$85.0B",
    velocity: "12.4 deals/yr",
    portfolioCount: 382,
    avgCheckSize: "$15.0M",
    portfolioConcentration: [
      { sector: "AI Infrastructure", percentage: 35 },
      { sector: "Generative Apps", percentage: 30 },
      { sector: "Enterprise SaaS", percentage: 20 },
      { sector: "Developer Tools", percentage: 15 }
    ],
    recentInvestments: [
      { companyId: "openai", round: "Secondary", amount: "$300M", date: "Apr 2023" },
      { companyId: "elevenlabs", round: "Series B", amount: "$80M", date: "Jan 2024" },
      { companyId: "perplexity", round: "Series B-2", amount: "$63M", date: "Apr 2024" },
      { companyId: "langchain", round: "Series A", amount: "$20M", date: "Apr 2023" }
    ],
    velocityData: [
      { quarter: "Q1 23", count: 2 },
      { quarter: "Q2 23", count: 4 },
      { quarter: "Q3 23", count: 3 },
      { quarter: "Q4 23", count: 6 },
      { quarter: "Q1 24", count: 5 },
      { quarter: "Q2 24", count: 8 }
    ],
    coInvestors: ["a16z", "founders-fund", "index-ventures", "y-combinator"],
    featured: true
  },
  {
    id: "a16z",
    name: "Andreessen Horowitz",
    logo: "a",
    type: "VC",
    thesis: "Software continues to eat the world, and AI is eating software. We invest across the entire technology stack—from underlying compute infrastructures to consumer applications. We support bold founders with our massive operating network to scale software companies to global dominance.",
    managedAssets: "$43.0B",
    velocity: "18.2 deals/yr",
    portfolioCount: 450,
    avgCheckSize: "$12.0M",
    portfolioConcentration: [
      { sector: "AI Infrastructure", percentage: 40 },
      { sector: "Generative Apps", percentage: 25 },
      { sector: "Web3/Crypto", percentage: 15 },
      { sector: "Consumer AI", percentage: 20 }
    ],
    recentInvestments: [
      { companyId: "cursor", round: "Series A", amount: "$4.5M", date: "May 2024" },
      { companyId: "elevenlabs", round: "Series B", amount: "$80M", date: "Jan 2024" },
      { companyId: "databricks", round: "Series A", amount: "$13.9M", date: "Sep 2013" },
      { companyId: "pinecone", round: "Series B", amount: "$100M", date: "Apr 2023" }
    ],
    velocityData: [
      { quarter: "Q1 23", count: 4 },
      { quarter: "Q2 23", count: 5 },
      { quarter: "Q3 23", count: 4 },
      { quarter: "Q4 23", count: 7 },
      { quarter: "Q1 24", count: 9 },
      { quarter: "Q2 24", count: 11 }
    ],
    coInvestors: ["sequoia-capital", "founders-fund", "index-ventures"],
    featured: true
  },
  {
    id: "founders-fund",
    name: "Founders Fund",
    logo: "f",
    type: "VC",
    thesis: "We invest in companies that resolve hard technical challenges. We look past shallow consumer wrappers, seeking fundamental innovations in defense AI, neural interfaces, autonomous vehicle structures, and physical scale systems. We are comfortable taking early-stage contrarian positions.",
    managedAssets: "$11.0B",
    velocity: "8.5 deals/yr",
    portfolioCount: 220,
    avgCheckSize: "$10.0M",
    portfolioConcentration: [
      { sector: "Hard Tech & Space", percentage: 30 },
      { sector: "Defense AI", percentage: 25 },
      { sector: "Generative Systems", percentage: 25 },
      { sector: "Bio/Healthcare", percentage: 20 }
    ],
    recentInvestments: [
      { companyId: "openai", round: "Secondary", amount: "$300M", date: "Apr 2023" }
    ],
    velocityData: [
      { quarter: "Q1 23", count: 1 },
      { quarter: "Q2 23", count: 2 },
      { quarter: "Q3 23", count: 1 },
      { quarter: "Q4 23", count: 4 },
      { quarter: "Q1 24", count: 3 },
      { quarter: "Q2 24", count: 4 }
    ],
    coInvestors: ["sequoia-capital", "a16z", "sv-angel"],
    featured: true
  },
  {
    id: "index-ventures",
    name: "Index Ventures",
    logo: "i",
    type: "VC",
    thesis: "We are a global venture capital firm helping entrepreneurs turn bold ideas into transformative businesses. Based in London, Geneva, and San Francisco, we specialize in scaling enterprise collaboration software, Developer Tools, and open-source models globally.",
    managedAssets: "$15.0B",
    velocity: "10.1 deals/yr",
    portfolioCount: 310,
    avgCheckSize: "$8.0M",
    portfolioConcentration: [
      { sector: "Enterprise Collaboration", percentage: 35 },
      { sector: "Developer Tools", percentage: 30 },
      { sector: "Open Source AI", percentage: 20 },
      { sector: "Fintech", percentage: 15 }
    ],
    recentInvestments: [
      { companyId: "anthropic", round: "Series C", amount: "$2.0B", date: "Feb 2024" },
      { companyId: "elevenlabs", round: "Series B", amount: "$80M", date: "Jan 2024" },
      { companyId: "weaviate", round: "Series B", amount: "$50M", date: "Apr 2023" },
      { companyId: "notion", round: "Series B", amount: "$275M", date: "Oct 2021" }
    ],
    velocityData: [
      { quarter: "Q1 23", count: 2 },
      { quarter: "Q2 23", count: 3 },
      { quarter: "Q3 23", count: 3 },
      { quarter: "Q4 23", count: 4 },
      { quarter: "Q1 24", count: 5 },
      { quarter: "Q2 24", count: 6 }
    ],
    coInvestors: ["sequoia-capital", "a16z", "y-combinator"],
    featured: false
  },
  {
    id: "openai-startup-fund",
    name: "OpenAI Startup Fund",
    logo: "🌀",
    type: "Corporate",
    thesis: "We support early-stage startups that are pushing the boundaries of what is possible with artificial general intelligence. We invest in applications across education, healthcare, developer utilities, and engineering systems that benefit from deep integrations with cognitive models.",
    managedAssets: "$175M",
    velocity: "5.0 deals/yr",
    portfolioCount: 15,
    avgCheckSize: "$5.0M",
    portfolioConcentration: [
      { sector: "Developer Productivity", percentage: 45 },
      { sector: "Creative tools", percentage: 30 },
      { sector: "Agentic Apps", percentage: 25 }
    ],
    recentInvestments: [
      { companyId: "cursor", round: "Seed", amount: "$8.0M", date: "Oct 2023" },
      { companyId: "descript", round: "Series C", amount: "$50M", date: "Nov 2022" }
    ],
    velocityData: [
      { quarter: "Q1 23", count: 1 },
      { quarter: "Q2 23", count: 1 },
      { quarter: "Q3 23", count: 2 },
      { quarter: "Q4 23", count: 3 },
      { quarter: "Q1 24", count: 2 },
      { quarter: "Q2 24", count: 4 }
    ],
    coInvestors: ["a16z", "sequoia-capital", "founders-fund"],
    featured: false
  },
  {
    id: "y-combinator",
    name: "Y Combinator",
    logo: "Y",
    type: "VC",
    thesis: "We help founders bootstrap from ideas to viable companies. As the leading startup accelerator, we invest a standard check size at the earliest stage and build an intense peer support community. We foster the next generation of AI builders, agents, and tools.",
    managedAssets: "$2.0B",
    velocity: "120 deals/yr",
    portfolioCount: 4000,
    avgCheckSize: "$500K",
    portfolioConcentration: [
      { sector: "AI Software & Agents", percentage: 50 },
      { sector: "DevTools", percentage: 25 },
      { sector: "SaaS", percentage: 15 },
      { sector: "Consumer", percentage: 10 }
    ],
    recentInvestments: [
      { companyId: "openai", round: "Pre-seed", amount: "$120K", date: "Dec 2015" }
    ],
    velocityData: [
      { quarter: "Q1 23", count: 35 },
      { quarter: "Q2 23", count: 40 },
      { quarter: "Q3 23", count: 38 },
      { quarter: "Q4 23", count: 42 },
      { quarter: "Q1 24", count: 55 },
      { quarter: "Q2 24", count: 68 }
    ],
    coInvestors: ["sequoia-capital", "a16z", "sv-angel"],
    featured: false
  }
];

export const productsData: Product[] = [
  {
    id: "cursor-editor",
    name: "Cursor",
    tagline: "The AI-first code editor",
    description: "An AI-powered fork of VS Code that allows developers to write code, ask queries about codebases, and refactor code directly inside their IDE.",
    category: "Code",
    companyId: "cursor",
    likes: 8300,
    users: "150K monthly active",
    launchDate: "Nov 2023",
    logo: "💻",
    website: "https://cursor.com"
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    tagline: "Conversational AI for everyone",
    description: "A free-to-use conversational assistant that replies to prompts using OpenAI's latest GPT models, capable of drafting docs, reasoning, and programming.",
    category: "Chat",
    companyId: "openai",
    likes: 5100,
    users: "180M active users",
    launchDate: "Nov 2022",
    logo: "🌀",
    website: "https://chatgpt.com"
  },
  {
    id: "claude-ai",
    name: "Claude",
    tagline: "Thoughtful AI assistant",
    description: "Anthropic's conversational chatbot focusing on steerability, high reasoning capabilities, large document reading, and writing safety.",
    category: "Chat",
    companyId: "anthropic",
    likes: 6700,
    users: "25M users",
    launchDate: "Mar 2023",
    logo: "▲",
    website: "https://claude.ai"
  },
  {
    id: "midjourney-gen",
    name: "Midjourney",
    tagline: "Creative image generator",
    description: "Generate highly aesthetic, cinematic image assets using natural language prompts inside Discord or on the Midjourney web portal.",
    category: "Image",
    companyId: "midjourney",
    likes: 5500,
    users: "15M community members",
    launchDate: "Jul 2022",
    logo: "⛵",
    website: "https://midjourney.com"
  },
  {
    id: "runway-gen",
    name: "Runway",
    tagline: "Text-to-Video production",
    description: "Create video sequences, animate layers, and edit scenes using generative AI models including Gen-2 and Gen-3 Alpha.",
    category: "Video",
    companyId: "runway",
    likes: 3900,
    users: "5M creators",
    launchDate: "Feb 2023",
    logo: "Ｒ",
    website: "https://runwayml.com"
  },
  {
    id: "perplexity-search",
    name: "Perplexity",
    tagline: "Conversational search engine",
    description: "Ask any question and get structured, direct, conversational summaries pulling from real-time internet sources complete with citations.",
    category: "Productivity",
    companyId: "perplexity",
    likes: 2900,
    users: "10M active researchers",
    launchDate: "Dec 2022",
    logo: "❄️",
    website: "https://perplexity.ai"
  },
  {
    id: "elevenlabs-voice",
    name: "ElevenLabs",
    tagline: "High fidelity voice synthesis",
    description: "Generate realistic text-to-speech voicing in 29+ languages, customize synthetic voices, or clone your own voice instantly.",
    category: "Voice",
    companyId: "elevenlabs",
    likes: 3200,
    users: "2.5M voice builders",
    launchDate: "Jan 2023",
    logo: "〢",
    website: "https://elevenlabs.io"
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    tagline: "Workspace copilot",
    description: "Notion's embedded writer tool that lets you summarize documentation, fix typos, alter document tones, and run conversational Q&A.",
    category: "Productivity",
    companyId: "notion",
    likes: 2600,
    users: "30M users workspace wide",
    launchDate: "Feb 2023",
    logo: "Ｎ",
    website: "https://notion.so"
  },
  {
    id: "descript-edit",
    name: "Descript",
    tagline: "Doc-like video editor",
    description: "Edit audio and video files as simple as editing text, including multi-speaker transcription, voice synthesis, and sound leveling.",
    category: "Video",
    companyId: "descript",
    likes: 2300,
    users: "1M editors",
    launchDate: "Oct 2017",
    logo: "Ｄ",
    website: "https://descript.com"
  },
  {
    id: "canva-magic",
    name: "Canva AI",
    tagline: "Design automation suite",
    description: "Create graphic slides, templates, banners, and copy instantly using integrated Magic Design, Magic Write, and Magic Animate.",
    category: "Productivity",
    companyId: "canva",
    likes: 2100,
    users: "150M designers worldwide",
    launchDate: "Oct 2023",
    logo: "Ｃ",
    website: "https://canva.com"
  }
];

export const getCompanyById = (id: string): Company | undefined => {
  return companiesData.find(c => c.id === id);
};

export const getInvestorById = (id: string): Investor | undefined => {
  return investorsData.find(i => i.id === id);
};

export const getProductById = (id: string): Product | undefined => {
  return productsData.find(p => p.id === id);
};
