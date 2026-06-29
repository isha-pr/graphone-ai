"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  Heart, 
  MessageSquare, 
  TrendingUp,
  Folder,
  Bot,
  Globe
} from "lucide-react";
import {
  CursorLogo,
  ClaudeLogo,
  LovableLogo,
  MidjourneyLogo,
  PerplexityLogo,
  OpenAILogo,
  AnthropicLogo,
  RunwayLogo,
  ElevenLabsLogo,
  DescriptLogo,
  CanvaLogo,
  DatabricksLogo,
  NotionLogo,
  PineconeLogo,
  WeaviateLogo,
  LangChainLogo,
  StudioLogo
} from "@/components/Logos";

const getBrandLogo = (nameOrId: string, className = "w-4 h-4") => {
  const normalized = nameOrId.toLowerCase().replace(/\s+/g, "");
  switch (normalized) {
    case "cursor":
    case "cursor-editor":
      return <CursorLogo className={className} />;
    case "claude":
      return <ClaudeLogo className={className} />;
    case "lovable":
      return <LovableLogo className={className} />;
    case "midjourney":
      return <MidjourneyLogo className={className} />;
    case "perplexity":
      return <PerplexityLogo className={className} />;
    case "openai":
    case "chatgpt":
      return <OpenAILogo className={className} />;
    case "anthropic":
      return <AnthropicLogo className={className} />;
    case "runway":
      return <RunwayLogo className={className} />;
    case "elevenlabs":
      return <ElevenLabsLogo className={className} />;
    case "descript":
      return <DescriptLogo className={className} />;
    case "canva":
    case "canva-ai":
    case "canvaai":
      return <CanvaLogo className={className} />;
    case "databricks":
      return <DatabricksLogo className={className} />;
    case "notion":
    case "notion-ai":
    case "notionai":
      return <NotionLogo className={className} />;
    case "pinecone":
      return <PineconeLogo className={className} />;
    case "weaviate":
      return <WeaviateLogo className={className} />;
    case "langchain":
      return <LangChainLogo className={className} />;
    case "studio":
    case "graphonestudio":
      return <StudioLogo className={className} />;
    default:
      return null;
  }
};

interface Product {
  id: string;
  name: string;
  category: string;
  desc: string;
  likes: string;
  comments: number;
  logo: string;
  badges: string[];
  logoBg: string;
  trendingBadge?: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [likedList, setLikedList] = useState<string[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = ["All", "Chat", "Code", "Agents", "Image", "Video", "Voice", "Productivity", "More"];

  const popularCarousel = [
    { name: "Cursor", desc: "AI code editor", icon: "💎", bg: "bg-indigo-50 dark:bg-zinc-800" },
    { name: "Claude", desc: "AI assistant", icon: "🧡", bg: "bg-orange-50 dark:bg-zinc-800" },
    { name: "Lovable", desc: "AI app builder", icon: "⚡", bg: "bg-blue-50 dark:bg-zinc-800" },
    { name: "Midjourney", desc: "Image generator", icon: "⛵", bg: "bg-rose-50 dark:bg-zinc-800" },
    { name: "Perplexity", desc: "AI search", icon: "🌐", bg: "bg-teal-50 dark:bg-zinc-800" },
    { name: "Runway", desc: "Video generator", icon: "🎬", bg: "bg-purple-50 dark:bg-zinc-800" }
  ];

  const initialProducts: Product[] = [
    {
      id: "cursor",
      name: "Cursor",
      category: "Code",
      desc: "The AI-first code editor built for speed and productivity.",
      likes: "8.3K",
      comments: 173,
      logo: "💎",
      logoBg: "bg-indigo-600 text-white",
      badges: ["Code", "Developer Tools"],
      trendingBadge: "Trending in Coding"
    },
    {
      id: "claude",
      name: "Claude",
      category: "Chat",
      desc: "AI assistant for thoughtful work and collaboration.",
      likes: "6.7K",
      comments: 89,
      logo: "🧡",
      logoBg: "bg-orange-500 text-white",
      badges: ["Chat", "Productivity"],
      trendingBadge: "Most used this week"
    },
    {
      id: "midjourney",
      name: "Midjourney",
      category: "Image",
      desc: "AI image generator for creators and designers.",
      likes: "5.5K",
      comments: 386,
      logo: "⛵",
      logoBg: "bg-rose-600 text-white",
      badges: ["Image", "Design"],
      trendingBadge: "Top rated in Image"
    },
    {
      id: "chatgpt",
      name: "ChatGPT",
      category: "Chat",
      desc: "Conversational AI for any question or task.",
      likes: "5.1K",
      comments: 341,
      logo: "🌀",
      logoBg: "bg-emerald-600 text-white",
      badges: ["Chat", "Artificial Intelligence"],
      trendingBadge: "Most used this week"
    },
    {
      id: "runway",
      name: "Runway",
      category: "Video",
      desc: "AI video creation platform for everyone.",
      likes: "3.9K",
      comments: 210,
      logo: "🎬",
      logoBg: "bg-purple-600 text-white",
      badges: ["Video"],
      trendingBadge: "Fastest growing"
    },
    {
      id: "elevenlabs",
      name: "ElevenLabs",
      category: "Voice",
      desc: "AI voice synthesis and audio tools.",
      likes: "3.2K",
      comments: 175,
      logo: "〢",
      logoBg: "bg-slate-700 text-white",
      badges: ["Voice", "Audio"],
      trendingBadge: "Trending in Voice"
    },
    {
      id: "perplexity",
      name: "Perplexity",
      category: "Productivity",
      desc: "AI search engine for real-time answers.",
      likes: "2.9K",
      comments: 144,
      logo: "🌐",
      logoBg: "bg-teal-600 text-white",
      badges: ["Search", "Productivity"],
      trendingBadge: "Most used this week"
    },
    {
      id: "notion-ai",
      name: "Notion AI",
      category: "Productivity",
      desc: "AI notes, docs and knowledge workspace.",
      likes: "2.6K",
      comments: 128,
      logo: "Ｎ",
      logoBg: "bg-zinc-800 text-white dark:bg-white dark:text-zinc-900",
      badges: ["Productivity", "Writing"]
    },
    {
      id: "descript",
      name: "Descript",
      category: "Video",
      desc: "Edit audio & video like a doc.",
      likes: "2.3K",
      comments: 98,
      logo: "Ｄ",
      logoBg: "bg-blue-600 text-white",
      badges: ["Video", "Audio"]
    },
    {
      id: "canva-ai",
      name: "Canva AI",
      category: "Productivity",
      desc: "Design anything with AI, together.",
      likes: "2.1K",
      comments: 86,
      logo: "Ｃ",
      logoBg: "bg-indigo-500 text-white",
      badges: ["Design", "Productivity"]
    }
  ];

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (likedList.includes(id)) {
      setLikedList(likedList.filter(item => item !== id));
    } else {
      setLikedList([...likedList, id]);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const nextCarousel = () => {
    if (carouselIndex < popularCarousel.length - 4) {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  const prevCarousel = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    }
  };

  // Filter products by category tab
  const filteredProducts = activeTab === "All"
    ? initialProducts
    : initialProducts.filter(p => p.category === activeTab || p.badges.includes(activeTab));

  return (
    <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
      
      {/* ========================================================================= */}
      {/* CENTER COLUMN (Hero visual banner & Catalog directory) */}
      {/* ========================================================================= */}
      <div className="flex-1 space-y-8 min-w-0">
        
        {/* Redesigned Hero Banner Row */}
        <div className="relative overflow-hidden bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-center shadow-sm">
          
          <div className="absolute right-0 top-0 w-80 h-80 bg-gradient-to-br from-brandRed/5 to-purple-400/5 blur-3xl pointer-events-none rounded-full animate-pulse" />
          
          <div className="flex-1 space-y-5 text-left z-10">
            <span className="text-[10px] font-black uppercase text-brandRed bg-brandRed-light dark:bg-brandRed/10 px-2.5 py-0.5 rounded">
              • Live AI Intelligence
            </span>
            
            <h1 className="text-3xl lg:text-4.5xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
              The Global Intelligence Layer <span className="text-brandRed">for AI.</span>
            </h1>
            
            <p className="text-xs font-semibold text-slate-400 dark:text-zinc-500 max-w-lg leading-relaxed">
              One graph connecting companies, founders, investors, products, funding and talent.
            </p>

            {/* Input Search Box */}
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-full py-1.5 pl-4 pr-1.5 w-full max-w-md shadow-inner focus-within:border-brandRed transition-colors">
              <Search size={15} className="text-slate-400 dark:text-zinc-550" />
              <input 
                type="text" 
                placeholder="Search companies, founders, investors or funding rounds..."
                className="bg-transparent text-xs font-semibold text-slate-800 dark:text-zinc-200 outline-none w-full placeholder-slate-400 dark:placeholder-zinc-550"
              />
              <button className="w-8 h-8 rounded-full bg-brandRed hover:bg-brandRed-hover flex items-center justify-center text-white shadow-sm transition-all">
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Quick searches */}
            <div className="space-y-1 mt-4">
              <span className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-500 block">Most searched</span>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Databricks", "Notion", "Pinecone", "Weaviate", "LangChain"].map((name, i) => (
                  <span 
                    key={i} 
                    className="flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-750 rounded-full text-[10px] font-bold text-slate-650 dark:text-zinc-350 cursor-pointer shadow-sm transition-colors"
                  >
                    <span className="w-3.5 h-3.5 flex items-center justify-center">{getBrandLogo(name, "w-3.5 h-3.5")}</span> {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right graphic visual network node */}
          <div className="w-64 h-64 relative flex-shrink-0 hidden md:block select-none z-10">
            {/* Fine dotted orbit rings */}
            <div className="absolute inset-0 m-auto w-48 h-48 rounded-full border border-dashed border-red-500/20 animate-[spin_32s_linear_infinite]" />
            <div className="absolute inset-0 m-auto w-36 h-36 rounded-full border border-dashed border-purple-500/20 animate-[spin_24s_linear_infinite_reverse]" />

            {/* Center target node cube */}
            <div className="absolute inset-0 m-auto w-12 h-12 rounded-xl bg-gradient-to-br from-brandRed to-rose-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-brandRed/20 hover:scale-105 transition-transform cursor-pointer">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M4 15l8 4 8-4M4 9l8 4 8-4M12 3l8 4-8 4-8-4 8-4z" />
              </svg>
            </div>

            {/* Orbiting nodes with dynamic layout */}
            {/* Node 1: OpenAI */}
            <div className="absolute top-2 right-4 bg-white dark:bg-zinc-800 border dark:border-zinc-700 px-2.5 py-1 rounded-full shadow-md text-[10px] font-black text-slate-800 dark:text-white flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
              <span className="w-3.5 h-3.5 text-black dark:text-white flex items-center">{getBrandLogo("OpenAI", "w-3.5 h-3.5")}</span> OpenAI
            </div>
            {/* Node 2: Anthropic */}
            <div className="absolute top-20 left-0 bg-white dark:bg-zinc-800 border dark:border-zinc-700 px-2.5 py-1 rounded-full shadow-md text-[10px] font-black text-slate-800 dark:text-white flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
              <span className="w-3.5 h-3.5 text-black dark:text-white flex items-center">{getBrandLogo("Anthropic", "w-3.5 h-3.5")}</span> Anthropic
            </div>
            {/* Node 3: Cursor */}
            <div className="absolute top-20 right-0 bg-white dark:bg-zinc-800 border dark:border-zinc-700 px-2.5 py-1 rounded-full shadow-md text-[10px] font-black text-slate-800 dark:text-white flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
              <span className="w-3.5 h-3.5 text-black dark:text-white flex items-center">{getBrandLogo("Cursor", "w-3.5 h-3.5")}</span> Cursor
            </div>
            {/* Node 4: Midjourney */}
            <div className="absolute bottom-2 left-8 bg-white dark:bg-zinc-800 border dark:border-zinc-700 px-2.5 py-1 rounded-full shadow-md text-[10px] font-black text-slate-800 dark:text-white flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
              <span className="w-3.5 h-3.5 text-black dark:text-white flex items-center">{getBrandLogo("Midjourney", "w-3.5 h-3.5")}</span> Midjourney
            </div>
            {/* Node 5: Perplexity */}
            <div className="absolute bottom-2 right-8 bg-white dark:bg-zinc-800 border dark:border-zinc-700 px-2.5 py-1 rounded-full shadow-md text-[10px] font-black text-slate-800 dark:text-white flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
              <span className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 flex items-center">{getBrandLogo("Perplexity", "w-3.5 h-3.5")}</span> Perplexity
            </div>

            {/* Minor red connecting dot points */}
            <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-brandRed rounded-full animate-ping" />
            <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-brandRed rounded-full animate-ping" />
          </div>

        </div>

        {/* Collection of the Week row */}
        <div className="relative overflow-hidden bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
          <div className="space-y-2 z-10">
            <span className="text-[8.5px] font-black uppercase text-brandRed bg-brandRed-light dark:bg-brandRed/10 px-2 py-0.5 rounded flex items-center gap-1 w-fit">
              🔥 Collection of the Week
            </span>
            <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
              🔥 Vibe Coding Tools
            </h2>
            <p className="text-xs text-slate-500 dark:text-zinc-400 font-semibold max-w-md leading-relaxed">
              The best AI tools for vibe coding, building and shipping faster.
            </p>
            
            <div className="flex items-center gap-2 pt-1">
              <div className="flex -space-x-1.5">
                {["Roelof Botha", "Pat Grady", "Alfred Lin"].map((p, i) => (
                  <div key={i} className="w-5 h-5 rounded-full overflow-hidden border border-white dark:border-zinc-900 shadow-sm bg-slate-100">
                    <img 
                      src={`/images/portrait_${p.toLowerCase().replace(" ", "_")}.png`} 
                      alt="user bubble" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-zinc-800 text-[8px] font-black flex items-center justify-center border border-white dark:border-zinc-900 shadow-sm text-slate-500 dark:text-zinc-400">
                  +2K
                </div>
              </div>
              <span className="text-[10px] text-slate-400 dark:text-zinc-550 font-extrabold">
                2,341 products
              </span>
            </div>
          </div>

          <button className="bg-brandRed hover:bg-brandRed-hover text-white text-xs font-black px-5 py-2.5 rounded-full shadow-sm shadow-brandRed/20 flex items-center gap-1.5 z-10 flex-shrink-0">
            Explore Collection <ArrowRight size={13} />
          </button>
        </div>

        {/* Tab Selection Filter Row */}
        <div className="flex items-center justify-between border-b border-slate-150/80 dark:border-zinc-800 pb-3 mt-4">
          <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none flex-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-colors ${
                  activeTab === cat
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950"
                    : "text-slate-550 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-[10.5px] font-bold text-slate-400 dark:text-zinc-550 uppercase hidden md:inline ml-3 flex-shrink-0">
            {filteredProducts.length} items
          </span>
        </div>

        {/* Popular Right Now Carousel */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 dark:text-zinc-550 flex items-center gap-1.5">
              ⚡ Popular Right Now
            </h3>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={prevCarousel}
                disabled={carouselIndex === 0}
                className="w-7 h-7 rounded-full border dark:border-zinc-800 flex items-center justify-center text-slate-400 hover:text-slate-650 bg-white dark:bg-zinc-900 shadow-sm disabled:opacity-40 transition-opacity"
              >
                <ChevronLeft size={14} />
              </button>
              <button 
                onClick={nextCarousel}
                disabled={carouselIndex >= popularCarousel.length - 4}
                className="w-7 h-7 rounded-full border dark:border-zinc-800 flex items-center justify-center text-slate-400 hover:text-slate-650 bg-white dark:bg-zinc-900 shadow-sm disabled:opacity-40 transition-opacity"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularCarousel.slice(carouselIndex, carouselIndex + 4).map((item, i) => (
              <div key={i} className={`p-4 rounded-2xl border dark:border-zinc-800 flex items-center gap-3 hover:shadow-sm cursor-pointer shadow-inner bg-slate-50 dark:bg-zinc-900 group`}>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-850 flex items-center justify-center shadow-sm border dark:border-zinc-800 flex-shrink-0">
                  {getBrandLogo(item.name, "w-5 h-5")}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-black text-slate-850 dark:text-white truncate group-hover:text-brandRed transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[9px] text-slate-400 dark:text-zinc-550 font-bold truncate">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Catalog Listing List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-black text-slate-400 dark:text-zinc-550">
            <div className="flex items-center gap-4">
              <span className="text-slate-900 dark:text-white cursor-pointer border-b-2 border-brandRed pb-1">Most Popular</span>
              <span className="cursor-pointer hover:text-slate-700">Newest</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span>20,458 products</span>
              <span>•</span>
              <div className="flex items-center gap-1 cursor-pointer hover:text-slate-750">
                Sort by: <span className="text-slate-700 dark:text-zinc-350">Popular ▾</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {filteredProducts.map((p, idx) => {
              const isLiked = likedList.includes(p.id);

              return (
                <React.Fragment key={p.id}>
                  {/* Sponsored Ad Banner positioned after the 5th product */}
                  {idx === 5 && (
                    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-[#1C143B] to-[#0A061C] text-white p-6 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-md border border-indigo-950/20">
                      <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/10 blur-3xl pointer-events-none rounded-full" />
                      <div className="flex items-center gap-4 z-10">
                        <StudioLogo className="w-12 h-12 flex-shrink-0" />
                        <div className="space-y-1">
                          <span className="text-[7.5px] uppercase tracking-wider font-extrabold text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded">Sponsored</span>
                          <h4 className="text-xs font-black tracking-tight leading-snug">
                            Build AI agents in minutes
                          </h4>
                          <p className="text-[10px] text-zinc-450 font-semibold leading-normal max-w-sm">
                            The all-in-one platform to design, deploy and scale AI workflows.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 z-10 flex-shrink-0 w-full md:w-auto justify-between md:justify-start">
                        {/* Floating circles mockup design */}
                        <div className="flex -space-x-1.5 opacity-80">
                          {[
                            <Folder size={11} key="folder" className="text-purple-300" />,
                            <Bot size={11} key="bot" className="text-purple-300" />,
                            <Globe size={11} key="globe" className="text-purple-300" />
                          ].map((icon, idx) => (
                            <div key={idx} className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-white/5 shadow-sm">
                              {icon}
                            </div>
                          ))}
                        </div>

                        <button className="bg-purple-600 hover:bg-purple-550 text-white text-[10.5px] font-black px-4.5 py-2.5 rounded-full flex items-center gap-1 shadow-md shadow-purple-500/25 transition-colors">
                          Try GraphOne Studio <ArrowRight size={12} />
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border bg-white dark:bg-zinc-800 dark:border-zinc-800 shadow-sm">
                        {getBrandLogo(p.id, "w-6 h-6")}
                      </div>

                      <div className="min-w-0 space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-sm font-black text-slate-850 dark:text-white truncate group-hover:text-brandRed transition-colors">
                            {p.name}
                          </h4>
                          {p.trendingBadge && (
                            <span className="text-[8.5px] font-black uppercase text-brandRed bg-brandRed-light dark:bg-brandRed/10 px-2 py-0.5 rounded flex items-center gap-0.5">
                              • {p.trendingBadge}
                            </span>
                          )}
                        </div>

                        <p className="text-[11px] text-slate-500 dark:text-zinc-450 leading-normal font-semibold truncate max-w-md md:max-w-xl">
                          {p.desc}
                        </p>

                        <div className="flex items-center gap-1.5 pt-0.5">
                          {p.badges.map((b, i) => (
                            <span key={i} className="px-2 py-0.5 bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 text-[9px] font-bold text-slate-400 dark:text-zinc-500 rounded">
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                      {/* Interactive Heart Likes & Message Counts */}
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={(e) => handleLike(p.id, e)}
                          className={`flex items-center gap-1 text-[10.5px] font-black px-2.5 py-1 rounded-lg border transition-colors ${
                            isLiked 
                              ? "bg-brandRed-light dark:bg-brandRed/10 text-brandRed border-brandRed/30" 
                              : "text-slate-450 hover:text-slate-700 border-slate-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950"
                          }`}
                        >
                          <Heart size={12} className={isLiked ? "fill-brandRed text-brandRed" : "text-slate-400"} />
                          <span>{p.likes}</span>
                        </button>

                        <div className="flex items-center gap-1 text-[10.5px] font-black text-slate-400 px-2.5 py-1">
                          <MessageSquare size={12} className="text-slate-400" />
                          <span>{p.comments}</span>
                        </div>
                      </div>

                      <ChevronRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          <button className="w-full py-3 border dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-850 rounded-2xl text-xs font-black text-slate-550 dark:text-zinc-300 transition-colors shadow-sm text-center">
            Load more products
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* RIGHT SIDEBAR (Widgets) */}
      {/* ========================================================================= */}
      <div className="w-full lg:w-72 flex-shrink-0 space-y-6">
        
        {/* Product of the Day */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="text-sm">🏆</span>
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
              Product of the Day
            </h4>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center border dark:border-zinc-800 shadow-sm flex-shrink-0">
              {getBrandLogo("Cursor", "w-5 h-5")}
            </div>
            <div className="min-w-0">
              <h5 className="text-xs font-black text-slate-850 dark:text-white truncate">
                Cursor
              </h5>
              <p className="text-[9.5px] font-bold text-slate-400 dark:text-zinc-550 truncate">
                AI-first code editor
              </p>
            </div>
          </div>

          <Link 
            href="/companies/cursor"
            className="w-full py-2.5 bg-brandRed hover:bg-brandRed-hover text-white text-xs font-black rounded-full flex items-center justify-center shadow-sm shadow-brandRed/20 transition-colors"
          >
            View Product
          </Link>
        </div>

        {/* Trending Searches tag cloud */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-1.5">
            <TrendingUp size={14} className="text-brandRed" />
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
              Trending Searches
            </h4>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[
              "Cursor",
              "Claude",
              "Vibe Coding",
              "Lovable",
              "Perplexity",
              "Midjourney",
              "Runway",
              "MCP",
              "AI Agents",
              "AI Notetaker"
            ].map((query, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 text-[10px] font-bold text-slate-500 dark:text-zinc-400 border border-slate-100 dark:border-zinc-800 hover:border-brandRed/30 hover:text-brandRed bg-slate-50 dark:bg-zinc-950 rounded-full cursor-pointer transition-colors"
              >
                {query}
              </span>
            ))}
          </div>
        </div>

        {/* Stay ahead in AI newsletter */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 space-y-4 shadow-sm">
          <div className="space-y-1">
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1">
              📬 Stay ahead in AI
            </h4>
            <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-semibold leading-relaxed">
              Get weekly updates on new tools and trends.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="space-y-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="w-full text-xs font-semibold px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl outline-none"
            />
            <button 
              type="submit"
              className="w-full py-2.5 bg-brandRed hover:bg-brandRed-hover text-white text-xs font-black rounded-full shadow-sm shadow-brandRed/20 transition-all"
            >
              {subscribed ? "Subscribed! ✨" : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Small footer links */}
        <div className="text-[10.5px] text-slate-400 dark:text-zinc-550 leading-relaxed font-semibold pl-1">
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            <span className="hover:text-slate-700 cursor-pointer">About</span>
            <span>•</span>
            <span className="hover:text-slate-700 cursor-pointer">Advertise</span>
            <span>•</span>
            <span className="hover:text-slate-700 cursor-pointer">API</span>
            <span>•</span>
            <span className="hover:text-slate-700 cursor-pointer">Newsletter</span>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
            <span className="hover:text-slate-700 cursor-pointer">Blog</span>
            <span>•</span>
            <span className="hover:text-slate-700 cursor-pointer">Privacy</span>
            <span>•</span>
            <span className="hover:text-slate-700 cursor-pointer">Terms</span>
            <span>•</span>
            <span className="hover:text-slate-700 cursor-pointer">Contact</span>
          </div>
          <p className="mt-3">© 2024 GraphOne. All rights reserved.</p>
        </div>

      </div>

    </div>
  );
}
