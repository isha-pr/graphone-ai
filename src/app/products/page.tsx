"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Heart, 
  MessageSquare, 
  ArrowRight, 
  Home, 
  Rocket, 
  Box, 
  Users, 
  PlusCircle, 
  ChevronRight,
  TrendingUp,
  Sparkles
} from "lucide-react";

// Mock local products list
const initialProducts = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "Chat",
    desc: "Conversational AI assistant for writing, coding, and brainstorming.",
    likes: 842,
    comments: 112,
    logo: "🌀",
    badge: "Most Popular"
  },
  {
    id: "midjourney",
    name: "Midjourney",
    category: "Image",
    desc: "State-of-the-art text-to-image generator using natural language.",
    likes: 671,
    comments: 89,
    logo: "🎨",
    badge: "Trending"
  },
  {
    id: "v0-dev",
    name: "v0.dev",
    category: "Code",
    desc: "Generative UI system by Vercel producing production-ready React code.",
    likes: 549,
    comments: 64,
    logo: "▲",
    badge: "Recommended"
  },
  {
    id: "claude",
    name: "Claude",
    category: "Chat",
    desc: "Next-generation AI assistant built with safety and alignment.",
    likes: 498,
    comments: 52,
    logo: "▲",
    badge: null
  },
  {
    id: "runway",
    name: "Runway",
    category: "Video",
    desc: "Generative video tool for editing and producing cinematic frames.",
    likes: 382,
    comments: 41,
    logo: "🎬",
    badge: null
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "Voice",
    desc: "Realistic AI speech generator with voice cloning and conversion.",
    likes: 341,
    comments: 38,
    logo: "〢",
    badge: null
  }
];

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [activeTab, setActiveTab] = useState("All");
  const [likedProducts, setLikedProducts] = useState<string[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = ["All", "Chat", "Code", "Image", "Video", "Voice"];

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (likedProducts.includes(id)) {
      setLikedProducts(likedProducts.filter((p) => p !== id));
      setProducts(products.map((p) => p.id === id ? { ...p, likes: p.likes - 1 } : p));
    } else {
      setLikedProducts([...likedProducts, id]);
      setProducts(products.map((p) => p.id === id ? { ...p, likes: p.likes + 1 } : p));
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

  const filteredProducts = activeTab === "All"
    ? products
    : products.filter((p) => p.category === activeTab);

  return (
    <div className="flex gap-8 max-w-[1400px] mx-auto min-h-screen">
      
      {/* 1. LEFT SIDEBAR PANEL (Rendered locally inside this page) */}
      <aside className="hidden xl:flex flex-col w-60 flex-shrink-0 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-5 h-fit sticky top-24 space-y-6 shadow-sm">
        <div>
          <span className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-zinc-550 uppercase px-3">
            Directory
          </span>
          <ul className="mt-2 space-y-1">
            {[
              { name: "Home", href: "/", icon: Home },
              { name: "AI Startups", href: "/companies", icon: Rocket },
              { name: "AI Products", href: "/products", icon: Box, active: true },
              { name: "Investors", href: "/investors", icon: Users }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-black transition-colors ${
                      item.active
                        ? "bg-brandRed-light dark:bg-brandRed/10 text-brandRed"
                        : "text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-850/50 hover:text-slate-900"
                    }`}
                  >
                    <Icon size={16} className={item.active ? "text-brandRed" : "text-slate-405"} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <span className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-zinc-555 uppercase px-3">
            Contribute
          </span>
          <ul className="mt-2 space-y-1">
            {[
              { name: "Submit Startup", icon: PlusCircle },
              { name: "Submit Product", icon: PlusCircle }
            ].map((item) => (
              <li key={item.name}>
                <div className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-350 dark:text-zinc-650 text-xs opacity-75 cursor-not-allowed">
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* 2. MAIN CENTER CATALOG CONTENT */}
      <div className="flex-1 space-y-8 min-w-0">
        
        {/* Banner: Vibe Coding Tools */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 to-indigo-950 text-white rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
          <div className="space-y-3 z-10">
            <div className="inline-flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded text-[9.5px] font-black uppercase tracking-wider">
              <Sparkles size={10} /> Collection
            </div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight">Vibe Coding Tools</h2>
            <p className="text-xs text-purple-200/90 font-medium max-w-md leading-relaxed">
              Explore the hottest text-to-code builders and software agents empowering a new wave of rapid software prototyping.
            </p>
          </div>
          <div className="flex items-center gap-2.5 z-10 flex-shrink-0">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&auto=format&fit=crop&q=80"
              ].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="user overlapping bubble"
                  className="w-7 h-7 rounded-full border-2 border-indigo-905 object-cover"
                />
              ))}
            </div>
            <span className="text-[10px] text-purple-100 font-bold bg-white/10 px-2.5 py-1 rounded-full">
              +1.2K users liked
            </span>
          </div>
        </div>

        {/* Product of the Day: Cursor */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-start justify-between shadow-sm">
          <div className="flex gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-500 text-white flex items-center justify-center text-3xl flex-shrink-0">
              💎
            </div>
            <div className="space-y-1.5 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-black text-slate-850 dark:text-white">Cursor</h3>
                <span className="text-[8.5px] font-black uppercase text-purple-650 bg-purple-50 dark:bg-purple-950/20 px-2 py-0.5 rounded">Product of the Day</span>
              </div>
              <p className="text-[10.5px] text-slate-400 dark:text-zinc-550 font-bold">AI Coding • cursor.sh</p>
              <p className="text-xs text-slate-500 dark:text-zinc-450 leading-relaxed font-semibold max-w-xl">
                An AI-first code editor built around VS Code, enabling developers to prompt edits, write templates, and review diffs smoothly.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3.5 self-end md:self-start">
            <button className="flex items-center gap-1.5 border dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 hover:bg-slate-100 px-3.5 py-2 rounded-xl text-xs font-black text-slate-700 dark:text-zinc-350 shadow-inner">
              <Heart size={14} className="text-slate-400" />
              <span>4.1K</span>
            </button>
            <button className="flex items-center gap-1.5 bg-brandRed hover:bg-brandRed-hover text-white px-4 py-2 rounded-xl text-xs font-black shadow-sm shadow-brandRed/20">
              Launch <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Category filtering tabs */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-3 mt-4">
          <div className="flex items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-colors ${
                  activeTab === cat
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950"
                    : "text-slate-500 hover:text-slate-800 dark:text-zinc-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-[10.5px] font-bold text-slate-400 dark:text-zinc-550 uppercase">
            {filteredProducts.length} items
          </span>
        </div>

        {/* Products Directory Grid */}
        <div className="space-y-4">
          {filteredProducts.map((p) => {
            const isLiked = likedProducts.includes(p.id);
            return (
              <div 
                key={p.id}
                className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2.5xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-800 flex items-center justify-center text-2xl flex-shrink-0">
                    {p.logo}
                  </div>
                  <div className="min-w-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-black text-slate-850 dark:text-white group-hover:text-brandRed transition-colors truncate">
                        {p.name}
                      </h4>
                      {p.badge && (
                        <span className="text-[8px] font-black uppercase tracking-wider text-brandRed bg-brandRed-light dark:bg-brandRed/10 px-1.5 py-0.5 rounded">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-450 leading-normal font-semibold truncate max-w-md md:max-w-xl">
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                  {/* Likes and Comments stats */}
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={(e) => handleLike(p.id, e)}
                      className={`flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-lg border transition-colors ${
                        isLiked 
                          ? "bg-brandRed-light dark:bg-brandRed/10 text-brandRed border-brandRed/30" 
                          : "text-slate-400 hover:text-slate-600 border-slate-100 dark:border-zinc-800"
                      }`}
                    >
                      <Heart size={11} className={isLiked ? "fill-brandRed text-brandRed" : ""} />
                      <span>{p.likes}</span>
                    </button>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400 px-2 py-1">
                      <MessageSquare size={11} />
                      <span>{p.comments}</span>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* 3. RIGHT SIDEBAR WIDGETS */}
      <aside className="hidden lg:flex flex-col w-72 flex-shrink-0 space-y-6">
        
        {/* Newsletter Signup */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 space-y-4 shadow-sm">
          <div className="space-y-1">
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Stay Ahead</h4>
            <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-semibold leading-relaxed">
              Get the latest directory releases and emerging models sent straight to your inbox weekly.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="space-y-2">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="w-full text-xs font-semibold px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl outline-none"
            />
            <button
              type="submit"
              className="w-full py-2.5 bg-brandRed hover:bg-brandRed-hover text-white text-xs font-black rounded-xl transition-all shadow-sm shadow-brandRed/20"
            >
              {subscribed ? "Subscribed! ✨" : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Trending Searches */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-1.5">
            <TrendingUp size={14} className="text-brandRed" />
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Trending Searches</h4>
          </div>
          <ul className="space-y-2.5">
            {[
              { query: "OpenAI GPT-4o", trend: "+240%" },
              { query: "Cursor software agent", trend: "+180%" },
              { query: "Hebe models", trend: "+120%" },
              { query: "Sam Altman startup fund", trend: "+90%" },
              { query: "YC Vibe coding", trend: "+60%" }
            ].map((search, i) => (
              <li key={i} className="flex items-center justify-between text-xs cursor-pointer hover:text-brandRed transition-colors">
                <span className="font-semibold text-slate-650 dark:text-zinc-350 truncate max-w-[150px]">{search.query}</span>
                <span className="text-[10px] text-emerald-555 font-bold">{search.trend}</span>
              </li>
            ))}
          </ul>
        </div>

      </aside>

    </div>
  );
}
