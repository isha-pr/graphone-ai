"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Heart, 
  MessageSquare, 
  ChevronRight, 
  Sparkles, 
  Flame, 
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Award
} from "lucide-react";
import { companiesData } from "@/data/mockData";
import EcosystemGraph from "@/components/EcosystemGraph";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [likesState, setLikesState] = useState<Record<string, { count: number; liked: boolean }>>(() => {
    const initial: Record<string, { count: number; liked: boolean }> = {};
    companiesData.forEach(c => {
      initial[c.id] = { count: c.likes, liked: false };
    });
    return initial;
  });
  
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const categories = [
    { name: "All", emoji: "⚡" },
    { name: "Chat", emoji: "💬" },
    { name: "Code", emoji: "💻" },
    { name: "Agents", emoji: "🤖" },
    { name: "Image", emoji: "🎨" },
    { name: "Video", emoji: "🎬" },
    { name: "Voice", emoji: "🎤" },
    { name: "Productivity", emoji: "📈" }
  ];

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLikesState(prev => {
      const current = prev[id] || { count: 0, liked: false };
      return {
        ...prev,
        [id]: {
          count: current.liked ? current.count - 1 : current.count + 1,
          liked: !current.liked
        }
      };
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  // Filter products based on category name matching tags/category
  const filteredCompanies = companiesData.filter(c => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Agents") return c.tags.some(t => t.toLowerCase().includes("agent") || t.toLowerCase().includes("infrastructure"));
    return c.category === activeCategory || c.tags.some(t => t.toLowerCase() === activeCategory.toLowerCase());
  });

  // Hot search companies filter for center query box
  const hotSearches = [
    { name: "Databricks", id: "databricks", logo: "🧱" },
    { name: "Notion", id: "notion", logo: "Ｎ" },
    { name: "Pinecone", id: "pinecone", logo: "🌲" },
    { name: "Weaviate", id: "weaviate", logo: "💡" },
    { name: "LangChain", id: "langchain", logo: "🦜" }
  ];

  // Ecosystem nodes representing the hero circles
  const heroEcosystemNodes = [
    { id: "openai", label: "OpenAI", type: "company" as const, logo: "🌀", url: "/companies/openai", angle: 0 },
    { id: "cursor", label: "Cursor", type: "company" as const, logo: "💻", url: "/companies/cursor", angle: 60 },
    { id: "perplexity", label: "Perplexity", type: "company" as const, logo: "Perplexity", url: "/companies/perplexity", angle: 120 },
    { id: "midjourney", label: "Midjourney", type: "company" as const, logo: "⛵", url: "/companies/midjourney", angle: 200 },
    { id: "anthropic", label: "Anthropic", type: "company" as const, logo: "▲", url: "/companies/anthropic", angle: 280 }
  ];

  // Products popular right now
  const popularRightNow = [
    { id: "cursor", name: "Cursor", tagline: "AI code editor", logo: "💻" },
    { id: "anthropic", name: "Claude", tagline: "AI assistant", logo: "▲" },
    { id: "lovable", name: "Lovable", tagline: "AI app builder", logo: "⚡" },
    { id: "midjourney", name: "Midjourney", tagline: "Image generator", logo: "⛵" },
    { id: "perplexity", name: "Perplexity", tagline: "AI search", logo: "❄️" },
    { id: "runway", name: "Runway", tagline: "Video gen", logo: "Ｒ" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16">
      {/* LEFT & MIDDLE MAIN ZONE */}
      <div className="lg:col-span-8 space-y-8">
        
        {/* 1. HERO SECTION */}
        <div className="relative overflow-hidden bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center shadow-sm">
          
          {/* Hero Content */}
          <div className="flex-1 space-y-4 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-bold text-[10px] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-brandRed rounded-full animate-ping" />
              Live AI Intelligence
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              The Global Intelligence Layer <span className="text-brandRed">for AI.</span>
            </h1>
            
            <p className="text-slate-400 dark:text-zinc-400 text-xs md:text-sm font-medium max-w-md">
              One graph connecting companies, founders, investors, products, funding and talent.
            </p>

            {/* Inner Search Box */}
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800 rounded-full py-1.5 pl-4 pr-1.5 w-full max-w-md mt-6 shadow-inner">
              <Search size={15} className="text-slate-400 dark:text-zinc-500" />
              <input
                type="text"
                placeholder="Search companies, founders, investors..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full text-xs font-semibold text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-zinc-500 bg-transparent outline-none"
              />
              <Link 
                href={searchVal.trim() ? `/companies?q=${searchVal}` : "/companies"}
                className="w-7 h-7 rounded-full bg-brandRed hover:bg-brandRed-hover flex items-center justify-center text-white transition-colors"
              >
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Most Searched */}
            <div className="pt-2 text-left">
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-500 block mb-2">
                Most searched
              </span>
              <div className="flex flex-wrap gap-2">
                {hotSearches.map((item) => (
                  <Link
                    key={item.id}
                    href={`/companies/${item.id}`}
                    className="flex items-center gap-1.5 bg-white hover:bg-slate-50 dark:bg-zinc-800 dark:hover:bg-zinc-700/80 border border-slate-100 dark:border-zinc-750 px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-700 dark:text-zinc-350 transition-colors shadow-sm"
                  >
                    <span>{item.logo}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Graphic: Ecosystem Circle */}
          <div className="w-full md:w-[320px] flex-shrink-0">
            <EcosystemGraph 
              centerNode={{ name: "GraphOne", logo: "📦" }} 
              nodes={heroEcosystemNodes}
              height={260}
            />
          </div>
        </div>

        {/* 2. COLLECTION OF THE WEEK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 relative overflow-hidden bg-gradient-to-r from-red-50 to-orange-50 dark:from-zinc-900 dark:to-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="inline-flex items-center gap-1 text-[10px] font-bold text-brandRed uppercase tracking-wider">
                <Flame size={12} /> Collection of the Week
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-2">
                🔥 Vibe Coding Tools
              </h2>
              <p className="text-slate-400 dark:text-zinc-400 text-xs font-semibold mt-1.5 max-w-sm">
                The best AI tools for vibe coding, building and shipping faster.
              </p>
            </div>

            <div className="flex items-center justify-between mt-6">
              {/* Overlapping Avatars */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&auto=format&fit=crop&q=80" className="w-7 h-7 rounded-full object-cover border-2 border-white dark:border-zinc-900" alt="avatar" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&auto=format&fit=crop&q=80" className="w-7 h-7 rounded-full object-cover border-2 border-white dark:border-zinc-900" alt="avatar" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&auto=format&fit=crop&q=80" className="w-7 h-7 rounded-full object-cover border-2 border-white dark:border-zinc-900" alt="avatar" />
                  <div className="w-7 h-7 rounded-full bg-slate-900 dark:bg-zinc-850 text-white flex items-center justify-center text-[9px] font-black border-2 border-white dark:border-zinc-900">
                    +2K
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 dark:text-zinc-550 font-bold">2,341 products</span>
              </div>

              <Link 
                href="/products" 
                className="bg-brandRed hover:bg-brandRed-hover text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 transition-all shadow-sm"
              >
                Explore Collection <ArrowRight size={13} />
              </Link>
            </div>

            {/* Float visual backdrop code cards */}
            <div className="absolute right-4 top-4 opacity-10 dark:opacity-20 pointer-events-none select-none hidden sm:block">
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-lg border shadow-sm w-44 font-mono text-[8px] space-y-1">
                <div className="text-blue-500">const runVibe = () =&gt; &#123;</div>
                <div className="pl-2 text-purple-500">buildAppWithoutBugs();</div>
                <div className="pl-2 text-emerald-500">enjoyCoffee();</div>
                <div className="text-blue-500">&#125;;</div>
              </div>
            </div>
          </div>

          {/* 3. PRODUCT OF THE DAY - TOP RIGHT ROW */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shadow-sm">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-500 uppercase tracking-wider">
                <Award size={12} /> Product of the Day
              </span>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center text-xl text-white shadow-sm border border-zinc-850">
                💻
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">Cursor</h3>
                <p className="text-[11px] text-slate-400 dark:text-zinc-500 font-medium truncate">AI-first code editor</p>
              </div>
            </div>

            <Link
              href="/companies/cursor"
              className="mt-6 w-full text-center py-2 bg-brandRed hover:bg-brandRed-hover text-white text-xs font-bold rounded-xl transition-colors shadow-sm inline-block"
            >
              View Product
            </Link>
          </div>
        </div>

        {/* 4. MAIN CATEGORY TABS & CAROUSEL */}
        <div className="space-y-4">
          {/* Tabs header */}
          <div className="flex items-center overflow-x-auto pb-2 scrollbar-none border-b border-slate-100 dark:border-zinc-850/80 gap-1">
            {categories.map((tab) => {
              const isSelected = activeCategory === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveCategory(tab.name)}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full transition-all flex-shrink-0 ${
                    isSelected
                      ? "bg-brandRed-light dark:bg-brandRed/15 text-brandRed border border-brandRed-light dark:border-brandRed/20"
                      : "text-slate-500 dark:text-zinc-450 hover:bg-slate-50 dark:hover:bg-zinc-900"
                  }`}
                >
                  <span>{tab.emoji}</span>
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Popular Right Now Carousel */}
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-zinc-500 flex items-center gap-1 mb-3">
              <Sparkles size={11} className="text-brandRed" /> Popular Right Now
            </span>
            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
              {popularRightNow.map((item) => (
                <Link
                  key={item.id}
                  href={item.id === "lovable" ? "/products" : `/companies/${item.id}`}
                  className="flex items-center gap-2.5 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-2 rounded-xl flex-shrink-0 min-w-[145px] hover:shadow-md transition-shadow duration-150 cursor-pointer shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-zinc-850 flex items-center justify-center text-sm border dark:border-zinc-800">
                    {item.logo}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-800 dark:text-zinc-200 truncate">{item.name}</p>
                    <p className="text-[9px] text-slate-450 dark:text-zinc-500 font-medium truncate mt-0.5">{item.tagline}</p>
                  </div>
                </Link>
              ))}
              <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-900 border flex items-center justify-center text-slate-400 dark:text-zinc-500 cursor-pointer hover:bg-slate-50 flex-shrink-0">
                <ChevronRight size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* 5. MAIN FILTERED PRODUCTS TABLE */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs border-b border-slate-100 dark:border-zinc-850 pb-3">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white border-b-2 border-brandRed pb-3 -mb-3">
                <Flame size={13} className="text-brandRed" /> Most Popular
              </button>
              <button className="flex items-center gap-1.5 font-bold text-slate-400 dark:text-zinc-500 pb-3 -mb-3 hover:text-slate-800">
                <Sparkles size={13} /> Newest
              </button>
            </div>
            
            <div className="flex items-center gap-3 text-slate-400 dark:text-zinc-500">
              <span className="font-semibold">{filteredCompanies.length * 2045} products</span>
              <div className="flex items-center gap-1 cursor-pointer font-bold text-slate-700 dark:text-zinc-350 hover:text-slate-950">
                Sort by: <span className="text-brandRed">Popular</span>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>

          {/* Product Items List */}
          <div className="space-y-3.5">
            <AnimatePresence mode="popLayout">
              {filteredCompanies.map((c, index) => {
                const likeInfo = likesState[c.id] || { count: c.likes, liked: false };
                
                return (
                  <React.Fragment key={c.id}>
                    {/* Inject Sponsored Card after 5 items */}
                    {index === 5 && (
                      <div className="bg-purple-50/70 dark:bg-purple-950/15 border border-purple-100/80 dark:border-purple-900/40 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-brandPurple flex items-center justify-center text-white text-lg">
                            ⬡
                          </div>
                          <div>
                            <span className="text-[8px] uppercase tracking-wider font-extrabold text-brandPurple bg-brandPurple/10 px-1.5 py-0.5 rounded">
                              Sponsored
                            </span>
                            <h3 className="text-sm font-bold text-slate-800 dark:text-white mt-1">
                              Build AI agents in minutes
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-zinc-450 mt-0.5 font-medium">
                              The all-in-one platform to design, deploy and scale AI workflows.
                            </p>
                          </div>
                        </div>
                        <a
                          href="https://graphone.ai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-brandPurple hover:bg-brandPurple/95 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm flex items-center gap-1.5"
                        >
                          Try GraphOne Studio <ArrowRight size={13} />
                        </a>
                      </div>
                    )}

                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="group relative bg-white dark:bg-zinc-900 hover:shadow-md border border-slate-100 dark:border-zinc-800/80 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200"
                    >
                      <Link href={`/companies/${c.id}`} className="flex items-start gap-4 flex-1 cursor-pointer">
                        {/* Company Logo */}
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-inner border dark:border-zinc-800 ${c.logoBg || "bg-slate-100"}`}>
                          {c.logo}
                        </div>
                        
                        {/* Information Details */}
                        <div className="space-y-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brandRed transition-colors duration-150">
                              {c.name}
                            </h4>
                            {c.growthBadge && (
                              <span className="inline-flex items-center gap-0.5 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-450 font-bold text-[9px] px-2 py-0.5 rounded-full border border-emerald-100/50 dark:border-emerald-900/30">
                                {c.growthBadge}
                              </span>
                            )}
                          </div>
                          
                          <p className="text-xs text-slate-400 dark:text-zinc-500 font-semibold line-clamp-1 pr-4">
                            {c.description}
                          </p>

                          {/* Metadata Badges */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            {c.tags.slice(0, 3).map(t => (
                              <span key={t} className="text-[9px] font-bold text-slate-500 dark:text-zinc-400 bg-slate-50 dark:bg-zinc-800/55 px-2 py-0.5 rounded border dark:border-zinc-800">
                                {t}
                              </span>
                            ))}
                            {c.status === "unicorn" && (
                              <span className="text-[9px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/20 dark:text-amber-450 px-2 py-0.5 rounded border border-amber-100 dark:border-amber-900/30">
                                Unicorn 🦄
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>

                      {/* Right Hand Side Actions: Likes & Comments */}
                      <div className="flex items-center gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-50 dark:border-zinc-800/50 justify-end">
                        {/* Like Button */}
                        <button
                          onClick={(e) => handleLike(c.id, e)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${
                            likeInfo.liked
                              ? "bg-brandRed/5 border-brandRed text-brandRed"
                              : "border-slate-100 hover:border-slate-200 dark:border-zinc-850 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-450"
                          }`}
                        >
                          <Heart size={14} className={likeInfo.liked ? "fill-brandRed text-brandRed" : ""} />
                          <span>{(likeInfo.count / 1000).toFixed(1)}K</span>
                        </button>

                        {/* Comments Indicator */}
                        <Link
                          href={`/companies/${c.id}`}
                          className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-zinc-550 hover:text-slate-800 hover:dark:text-zinc-355 px-2 py-1 rounded"
                        >
                          <MessageSquare size={14} />
                          <span>{c.comments}</span>
                        </Link>
                      </div>
                    </motion.div>
                  </React.Fragment>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="pt-6 text-center">
            <button className="inline-flex items-center gap-1 px-4 py-2 border border-slate-200 dark:border-zinc-800 rounded-xl text-xs font-bold text-slate-500 dark:text-zinc-400 bg-white hover:bg-slate-50 dark:bg-zinc-900 dark:hover:bg-zinc-850 transition-colors shadow-sm">
              Load more products <ChevronDown size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* RIGHT SIDEBAR COLUMN */}
      <div className="lg:col-span-4 space-y-6">
        
        {/* 1. TRENDING SEARCHES */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
          <h3 className="text-xs uppercase font-extrabold text-slate-400 dark:text-zinc-500 tracking-wider flex items-center gap-1.5 mb-4">
            <TrendingUp size={13} className="text-brandRed" /> Trending Searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Cursor", id: "cursor" },
              { name: "Claude", id: "anthropic" },
              { name: "Vibe Coding", id: "cursor" },
              { name: "Lovable", id: "products" },
              { name: "Perplexity", id: "perplexity" },
              { name: "Midjourney", id: "midjourney" },
              { name: "Runway", id: "runway" },
              { name: "MCP", id: "companies" },
              { name: "AI Agents", id: "companies" },
              { name: "AI Notetaker", id: "products" }
            ].map((tag, idx) => (
              <Link
                key={idx}
                href={tag.id === "products" ? "/products" : tag.id === "companies" ? "/companies" : `/companies/${tag.id}`}
                className="px-3 py-1.5 bg-slate-50 dark:bg-zinc-850 hover:bg-slate-100 dark:hover:bg-zinc-800 text-[10px] font-bold text-slate-650 dark:text-zinc-400 rounded-lg transition-colors border dark:border-zinc-800 shadow-sm"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </div>

        {/* 2. NEWSLETTER SUBSCRIPTION */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-brandRed-light dark:bg-brandRed/10 text-brandRed flex items-center justify-center mb-4">
            <MessageSquare size={16} />
          </div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Stay ahead in AI
          </h3>
          <p className="text-xs text-slate-450 dark:text-zinc-450 mt-1 font-medium leading-normal">
            Get weekly updates on new tools, emerging startups, and investment velocity.
          </p>

          <form onSubmit={handleSubscribe} className="mt-4 space-y-2">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-xs font-semibold text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-zinc-550 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-850 rounded-xl px-4 py-3 outline-none focus:border-brandRed transition-colors"
            />
            <button
              type="submit"
              className="w-full text-center py-2.5 bg-brandRed hover:bg-brandRed-hover text-white text-xs font-bold rounded-xl transition-all shadow-sm"
            >
              {subscribed ? "Subscribed! ✨" : "Subscribe"}
            </button>
          </form>
        </div>

        {/* 3. SIDEBAR FOOTER LINKS */}
        <div className="px-4 text-[10px] text-slate-400 dark:text-zinc-550 space-y-3 font-semibold">
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            <span className="cursor-pointer hover:text-slate-700">About</span>
            <span className="cursor-pointer hover:text-slate-700">Advertise</span>
            <span className="cursor-pointer hover:text-slate-700">API</span>
            <span className="cursor-pointer hover:text-slate-700">Newsletter</span>
            <span className="cursor-pointer hover:text-slate-700">Blog</span>
            <span className="cursor-pointer hover:text-slate-700">Privacy</span>
            <span className="cursor-pointer hover:text-slate-700">Terms</span>
            <span className="cursor-pointer hover:text-slate-700">Contact</span>
          </div>
          <div>
            <p>© 2026 GraphOne. All rights reserved.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
