"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  ArrowRight, 
  ChevronRight 
} from "lucide-react";

// Inline SVG Brand Logos for high-fidelity presentation
const LogoA16z = () => (
  <div className="bg-[#FF4F00] text-white px-2.5 py-1 rounded font-black text-xs tracking-tighter flex items-center justify-center select-none font-mono">
    a16z
  </div>
);

const LogoSequoia = () => (
  <div className="flex items-center gap-1 font-black text-xs text-[#0F3223] dark:text-emerald-400 select-none">
    <span className="text-[14px]">🌲</span>
    <span>SEQUOIA</span>
  </div>
);

const LogoLightspeed = () => (
  <div className="flex items-center gap-1 font-black text-xs text-[#002B49] dark:text-blue-300 select-none">
    <span className="text-amber-500 text-sm">⚡</span>
    <span>Lightspeed</span>
  </div>
);

const LogoKhosla = () => (
  <span className="font-serif font-bold text-xs text-slate-800 dark:text-white select-none">
    Khosla Ventures
  </span>
);

const LogoAccel = () => (
  <span className="font-sans font-black text-xs tracking-tight text-slate-900 dark:text-white select-none">
    Accel
  </span>
);

const LogoGC = () => (
  <div className="flex items-center gap-1 font-black text-xs text-[#3D2963] dark:text-purple-300 select-none">
    <span className="w-3.5 h-3.5 rounded-full bg-[#3D2963] dark:bg-purple-400 flex items-center justify-center text-[8px] text-white font-mono">G</span>
    <span>General Catalyst</span>
  </div>
);

const LogoMicrosoft = () => (
  <div className="flex items-center gap-1">
    <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
      <div className="bg-[#F25022] w-1.5 h-1.5" />
      <div className="bg-[#7FBA00] w-1.5 h-1.5" />
      <div className="bg-[#00A4EF] w-1.5 h-1.5" />
      <div className="bg-[#FFB900] w-1.5 h-1.5" />
    </div>
    <span className="text-[9.5px] font-bold text-slate-700 dark:text-zinc-300">Microsoft</span>
  </div>
);

const LogoGoogle = () => (
  <div className="flex items-center gap-1 select-none">
    <svg className="w-3 h-3" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
    <span className="text-[9.5px] font-bold text-slate-700 dark:text-zinc-300">Google Ventures</span>
  </div>
);

const LogoThrive = () => (
  <div className="flex items-center gap-1 text-[9.5px] font-bold text-slate-800 dark:text-white select-none font-sans">
    <span className="text-[10px]">☘️</span> Thrive Capital
  </div>
);

const LogoFoundersFund = () => (
  <div className="flex items-center gap-1 text-[9.5px] font-bold text-slate-800 dark:text-white select-none font-mono">
    <span>[f]</span> Founders Fund
  </div>
);

const LogoSpark = () => (
  <div className="flex items-center gap-1 text-[9.5px] font-bold text-slate-800 dark:text-white select-none">
    <span className="text-[#FF5A5F]">✦</span> Spark Capital
  </div>
);

const LogoMenlo = () => (
  <div className="flex items-center gap-1 text-[9.5px] font-bold text-slate-800 dark:text-white select-none font-serif">
    <span>M</span> Menlo Ventures
  </div>
);

const LogoDatabricks = () => (
  <div className="flex items-center gap-1 text-[9.5px] font-bold text-slate-800 dark:text-white select-none">
    <span>🧱</span> Databricks Ventures
  </div>
);

const LogoNEA = () => (
  <div className="flex items-center gap-1 text-[9.5px] font-bold text-[#0066B2] dark:text-blue-400 select-none font-mono font-black">
    NEA
  </div>
);

const LogoIVP = () => (
  <div className="flex items-center gap-1 text-[9.5px] font-bold text-slate-800 dark:text-white select-none font-black font-sans">
    IVP
  </div>
);

export default function InvestorsListingPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const popularSearches = [
    "All Agents",
    "Seed Investors",
    "Series A",
    "YC Backed",
    "India",
    "OpenAI Portfolio"
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* ========================================================================= */}
      {/* 1. HERO BANNER & FLOATING LOGOS CLOUD */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-center shadow-sm">
        
        {/* Visual gradient backdrop */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-gradient-to-br from-pink-300/10 to-indigo-300/10 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute left-1/3 bottom-0 w-64 h-64 bg-gradient-to-tr from-teal-300/10 to-purple-300/10 blur-3xl pointer-events-none rounded-full" />

        <div className="flex-1 space-y-6 text-center lg:text-left z-10">
          <h1 className="text-3.5xl md:text-4.5xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight max-w-xl">
            Discover Investors <br />
            Building the <span className="text-brandRed">AI Economy</span>
          </h1>
          
          <p className="text-slate-500 dark:text-zinc-450 text-sm font-medium max-w-lg leading-relaxed">
            Find VCs, angels, operators, corporate funds and emerging managers backing the next generation of AI companies.
          </p>

          {/* Search bar inside hero section */}
          <div className="flex items-center gap-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-850 rounded-full px-4.5 py-3.5 shadow-sm max-w-md mx-auto lg:mx-0">
            <Search size={16} className="text-slate-400 dark:text-zinc-500" />
            <input
              type="text"
              placeholder="Search investors, funds, firms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs font-semibold text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-zinc-655 bg-transparent outline-none"
            />
            <button className="bg-brandRed hover:bg-brandRed-hover text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors">
              <Search size={14} />
            </button>
          </div>

          {/* Popular searches tag labels */}
          <div className="pt-2">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-500 block mb-2">
              Popular searches
            </span>
            <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
              {popularSearches.map((term, i) => (
                <button
                  key={i}
                  onClick={() => setSearchQuery(term)}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 text-[10.5px] font-bold text-slate-600 dark:text-zinc-300 rounded-full transition-colors border dark:border-zinc-850"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic floating logo cloud visualization */}
        <div className="flex-1 w-full max-w-[420px] h-[300px] relative select-none z-10 lg:flex items-center justify-center hidden">
          {/* Connecting vector SVG web lines */}
          <svg className="absolute inset-0 w-full h-full stroke-slate-200/60 dark:stroke-zinc-800/50 stroke-[1]" viewBox="0 0 400 300">
            {/* Line mapping */}
            <line x1="200" y1="50" x2="100" y2="120" />
            <line x1="200" y1="50" x2="310" y2="100" />
            <line x1="100" y1="120" x2="150" y2="220" />
            <line x1="310" y1="100" x2="280" y2="210" />
            <line x1="150" y1="220" x2="280" y2="210" />
            <line x1="100" y1="120" x2="280" y2="210" />
            {/* Little nodes */}
            <circle cx="200" cy="50" r="3" className="fill-brandRed" />
            <circle cx="100" cy="120" r="3" className="fill-blue-500" />
            <circle cx="310" cy="100" r="3" className="fill-teal-500" />
            <circle cx="150" cy="220" r="3" className="fill-purple-500" />
            <circle cx="280" cy="210" r="3" className="fill-amber-500" />
          </svg>

          {/* Floating cards */}
          <div className="absolute top-[20px] left-[150px] bg-white dark:bg-zinc-950 border dark:border-zinc-800 px-3.5 py-2.5 rounded-xl shadow-md transform rotate-2 hover:-rotate-1 transition-all duration-200">
            <span className="text-[8px] text-zinc-400 block font-bold">a16z</span>
            <span className="font-extrabold text-[10px] text-slate-800 dark:text-zinc-200">Andreessen Horowitz</span>
          </div>

          <div className="absolute top-[80px] left-[10px] bg-white dark:bg-zinc-950 border dark:border-zinc-800 px-3.5 py-2.5 rounded-xl shadow-md transform -rotate-3 hover:-rotate-1 transition-all duration-200 flex items-center gap-1.5">
            <span className="text-emerald-600">🌲</span>
            <div>
              <span className="text-[8px] text-zinc-400 block font-bold">SEQUOIA</span>
              <span className="font-extrabold text-[10px] text-slate-800 dark:text-zinc-200">Sequoia Capital</span>
            </div>
          </div>

          <div className="absolute top-[70px] right-[10px] bg-white dark:bg-zinc-950 border dark:border-zinc-800 px-3.5 py-2.5 rounded-xl shadow-md transform rotate-6 hover:rotate-1 transition-all duration-200">
            <span className="text-[8px] text-zinc-400 block font-bold">Lightspeed</span>
            <span className="font-extrabold text-[10px] text-slate-800 dark:text-zinc-200">Lightspeed Venture</span>
          </div>

          <div className="absolute bottom-[80px] left-[70px] bg-white dark:bg-zinc-950 border dark:border-zinc-800 px-3.5 py-2.5 rounded-xl shadow-md transform rotate-1 hover:-rotate-3 transition-all duration-200">
            <span className="text-[8px] text-zinc-400 block font-bold">General Catalyst</span>
            <span className="font-extrabold text-[10px] text-slate-800 dark:text-zinc-200">General Catalyst</span>
          </div>

          <div className="absolute bottom-[60px] right-[80px] bg-white dark:bg-zinc-950 border dark:border-zinc-800 px-3.5 py-2.5 rounded-xl shadow-md transform -rotate-2 hover:rotate-1 transition-all duration-200 flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-black dark:bg-white rounded" />
            <div>
              <span className="text-[8px] text-zinc-400 block font-bold">Accel</span>
              <span className="font-extrabold text-[10px] text-slate-800 dark:text-zinc-200">Accel Partners</span>
            </div>
          </div>

          <div className="absolute bottom-[10px] left-[170px] bg-white dark:bg-zinc-950 border dark:border-zinc-800 px-3.5 py-2.5 rounded-xl shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <span className="text-[8px] text-zinc-400 block font-bold">Khosla Ventures</span>
            <span className="font-extrabold text-[10px] text-slate-800 dark:text-zinc-200">Khosla Ventures</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. 01 TRENDING INVESTORS */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
              01
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Trending Investors</h2>
              <p className="text-[11px] text-slate-405 dark:text-zinc-500 font-semibold">Active backers showing the highest deal flow velocity this quarter.</p>
            </div>
          </div>
          <Link href="/investors" className="text-xs font-bold text-slate-500 dark:text-zinc-400 hover:text-brandRed flex items-center gap-1">
            View all <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          
          {/* Card 1: a16z */}
          <Link href="/investors/a16z" className="group bg-gradient-to-br from-rose-500 to-amber-500 text-white p-5 rounded-2xl shadow-sm hover:shadow-md hover:shadow-rose-900/10 flex flex-col justify-between h-56 relative overflow-hidden transition-all duration-200 cursor-pointer">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 blur-xl pointer-events-none rounded-full" />
            <div>
              <LogoA16z />
              <div className="space-y-1.5 mt-5">
                {["AI Infrastructure", "AI Agents", "Developer Tools"].map((tag, idx) => (
                  <span key={idx} className="block text-[10px] font-extrabold text-white/90">
                    • {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-[10px] font-extrabold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              View portfolio <ArrowRight size={11} />
            </span>
          </Link>

          {/* Card 2: Sequoia */}
          <Link href="/investors/sequoia-capital" className="group bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 text-white p-5 rounded-2xl shadow-sm hover:shadow-md hover:shadow-emerald-950/10 flex flex-col justify-between h-56 relative overflow-hidden transition-all duration-200 cursor-pointer border border-emerald-900/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 blur-xl pointer-events-none rounded-full" />
            <div>
              <div className="bg-white/90 px-2 py-1 rounded inline-block">
                <LogoSequoia />
              </div>
              <div className="space-y-1.5 mt-5">
                {["AI Infra", "Enterprise AI", "Global Scale"].map((tag, idx) => (
                  <span key={idx} className="block text-[10px] font-extrabold text-emerald-300">
                    • {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-[10px] font-extrabold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              View portfolio <ArrowRight size={11} />
            </span>
          </Link>

          {/* Card 3: Lightspeed */}
          <Link href="/investors/lightspeed" className="group bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-5 rounded-2xl shadow-sm hover:shadow-md hover:shadow-blue-950/10 flex flex-col justify-between h-56 relative overflow-hidden transition-all duration-200 cursor-pointer border border-blue-900/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-xl pointer-events-none rounded-full" />
            <div>
              <div className="bg-white px-2.5 py-1 rounded inline-block">
                <LogoLightspeed />
              </div>
              <div className="space-y-1.5 mt-5">
                {["Early Stage", "AI/ML", "Enterprise"].map((tag, idx) => (
                  <span key={idx} className="block text-[10px] font-extrabold text-blue-300">
                    • {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-[10px] font-extrabold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              View portfolio <ArrowRight size={11} />
            </span>
          </Link>

          {/* Card 4: Khosla Ventures */}
          <Link href="/investors/khosla-ventures" className="group bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-5 rounded-2xl shadow-sm hover:shadow-md hover:shadow-indigo-950/10 flex flex-col justify-between h-56 relative overflow-hidden transition-all duration-200 cursor-pointer border border-zinc-805">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-xl pointer-events-none rounded-full" />
            <div>
              <div className="bg-white/95 px-2.5 py-1 rounded inline-block">
                <LogoKhosla />
              </div>
              <div className="space-y-1.5 mt-5">
                {["Deep Tech", "AI", "Frontier"].map((tag, idx) => (
                  <span key={idx} className="block text-[10px] font-extrabold text-indigo-300">
                    • {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-[10px] font-extrabold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              View portfolio <ArrowRight size={11} />
            </span>
          </Link>

          {/* Card 5: Accel */}
          <Link href="/investors/accel" className="group bg-gradient-to-br from-pink-600 to-rose-500 text-white p-5 rounded-2xl shadow-sm hover:shadow-md hover:shadow-pink-900/10 flex flex-col justify-between h-56 relative overflow-hidden transition-all duration-200 cursor-pointer">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 blur-xl pointer-events-none rounded-full" />
            <div>
              <div className="bg-white px-2.5 py-1 rounded inline-block">
                <LogoAccel />
              </div>
              <div className="space-y-1.5 mt-5">
                {["Early Stage", "Consumer AI", "Enterprise"].map((tag, idx) => (
                  <span key={idx} className="block text-[10px] font-extrabold text-pink-100">
                    • {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-[10px] font-extrabold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              View portfolio <ArrowRight size={11} />
            </span>
          </Link>

          {/* Card 6: General Catalyst */}
          <Link href="/investors/general-catalyst" className="group bg-gradient-to-br from-[#3D2963] via-zinc-900 to-[#1F103A] text-white p-5 rounded-2xl shadow-sm hover:shadow-md hover:shadow-purple-955/10 flex flex-col justify-between h-56 relative overflow-hidden transition-all duration-200 cursor-pointer border border-[#3D2963]/30">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-xl pointer-events-none rounded-full" />
            <div>
              <div className="bg-white px-2.5 py-1 rounded inline-block">
                <LogoGC />
              </div>
              <div className="space-y-1.5 mt-5">
                {["Seed to Growth", "AI-First", "Platform"].map((tag, idx) => (
                  <span key={idx} className="block text-[10px] font-extrabold text-purple-300">
                    • {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-[10px] font-extrabold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              View portfolio <ArrowRight size={11} />
            </span>
          </Link>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. 02 INVESTOR COLLECTIONS */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
              02
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Investor Collections</h2>
              <p className="text-[11px] text-slate-405 dark:text-zinc-500 font-semibold">Curated files of backers specialized in core sectors, geographies, and stages.</p>
            </div>
          </div>
          <Link href="/investors" className="text-xs font-bold text-slate-500 dark:text-zinc-400 hover:text-brandRed flex items-center gap-1">
            View all <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Collection 1: AI Agents */}
          <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-44 cursor-pointer bg-slate-900">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: "url('/images/investor_collections_agents.png')" }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between z-20 text-white">
              <div>
                <h3 className="font-black text-sm tracking-tight leading-snug max-w-[150px]">
                  Investors Backing <br /> AI Agents
                </h3>
                <span className="text-[8.5px] uppercase font-extrabold tracking-wider text-slate-300 mt-1.5 flex items-center gap-1">
                  👥 128 Investors
                </span>
              </div>
              <button className="w-7 h-7 rounded-full bg-white/95 text-slate-800 flex items-center justify-center shadow-sm absolute bottom-5 left-5 z-20 hover:scale-105 transition-transform">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Collection 2: Indian Startups */}
          <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-44 cursor-pointer bg-orange-950">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: "url('/images/investor_collections_india.png')" }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between z-20 text-white">
              <div>
                <h3 className="font-black text-sm tracking-tight leading-snug max-w-[150px]">
                  Investors Backing <br /> Indian AI Startups
                </h3>
                <span className="text-[8.5px] uppercase font-extrabold tracking-wider text-slate-300 mt-1.5 flex items-center gap-1">
                  👥 96 Investors
                </span>
              </div>
              <button className="w-7 h-7 rounded-full bg-white/95 text-slate-800 flex items-center justify-center shadow-sm absolute bottom-5 left-5 z-20 hover:scale-105 transition-transform">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Collection 3: Seed Investors */}
          <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-44 cursor-pointer bg-teal-950">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: "url('/images/investor_collections_seed.png')" }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between z-20 text-white">
              <div>
                <h3 className="font-black text-sm tracking-tight leading-snug max-w-[150px]">
                  Top Seed <br /> Investors
                </h3>
                <span className="text-[8.5px] uppercase font-extrabold tracking-wider text-slate-300 mt-1.5 flex items-center gap-1">
                  👥 214 Investors
                </span>
              </div>
              <button className="w-7 h-7 rounded-full bg-white/95 text-slate-800 flex items-center justify-center shadow-sm absolute bottom-5 right-5 z-20 hover:scale-105 transition-transform">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Collection 4: Operator Angels */}
          <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-44 cursor-pointer bg-zinc-900">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: "url('/images/investor_collections_operator.png')" }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between z-20 text-white">
              <div>
                <h3 className="font-black text-sm tracking-tight leading-snug max-w-[150px]">
                  Operator <br /> Angels
                </h3>
                <span className="text-[8.5px] uppercase font-extrabold tracking-wider text-slate-300 mt-1.5 flex items-center gap-1">
                  👥 178 Investors
                </span>
              </div>
              <button className="w-7 h-7 rounded-full bg-white/95 text-slate-800 flex items-center justify-center shadow-sm absolute bottom-5 right-5 z-20 hover:scale-105 transition-transform">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Collection 5: OpenAI Alumni */}
          <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-44 cursor-pointer bg-[#0C1E1B] border border-[#0F352E]/30">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: "url('/images/investor_collections_openai.png')" }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between z-20 text-white">
              <div>
                <h3 className="font-black text-sm tracking-tight leading-snug max-w-[150px]">
                  OpenAI Alumni <br /> Investors
                </h3>
                <span className="text-[8.5px] uppercase font-extrabold tracking-wider text-emerald-400 mt-1.5 flex items-center gap-1">
                  👥 81 Investors
                </span>
              </div>
              <button className="w-7 h-7 rounded-full bg-white/95 text-slate-800 flex items-center justify-center shadow-sm absolute bottom-5 right-5 z-20 hover:scale-105 transition-transform">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Collection 6: Enterprise AI */}
          <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-44 cursor-pointer bg-slate-900 border border-slate-800">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: "url('/images/investor_collections_enterprise.png')" }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between z-20 text-white">
              <div>
                <h3 className="font-black text-sm tracking-tight leading-snug max-w-[150px]">
                  Enterprise AI <br /> Investors
                </h3>
                <span className="text-[8.5px] uppercase font-extrabold tracking-wider text-slate-300 mt-1.5 flex items-center gap-1">
                  👥 64 Investors
                </span>
              </div>
              <button className="w-7 h-7 rounded-full bg-white/95 text-slate-800 flex items-center justify-center shadow-sm absolute bottom-5 right-5 z-20 hover:scale-105 transition-transform">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Collection 7: Developer Tools */}
          <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-44 cursor-pointer bg-zinc-900 border border-zinc-800/80">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: "url('/images/investor_collections_devtool.png')" }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between z-20 text-white">
              <div>
                <h3 className="font-black text-sm tracking-tight leading-snug max-w-[150px]">
                  Developer Tool <br /> Specialists
                </h3>
                <span className="text-[8.5px] uppercase font-extrabold tracking-wider text-purple-300 mt-1.5 flex items-center gap-1">
                  👥 82 Investors
                </span>
              </div>
              <button className="w-7 h-7 rounded-full bg-white/95 text-slate-800 flex items-center justify-center shadow-sm absolute bottom-5 right-5 z-20 hover:scale-105 transition-transform">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Collection 8: Healthcare AI */}
          <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-44 cursor-pointer bg-teal-950 border border-teal-900/40">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: "url('/images/investor_collections_health.png')" }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent z-10" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between z-20 text-white">
              <div>
                <h3 className="font-black text-sm tracking-tight leading-snug max-w-[150px]">
                  Healthcare AI <br /> Investors
                </h3>
                <span className="text-[8.5px] uppercase font-extrabold tracking-wider text-cyan-400 mt-1.5 flex items-center gap-1">
                  👥 58 Investors
                </span>
              </div>
              <button className="w-7 h-7 rounded-full bg-white/95 text-slate-800 flex items-center justify-center shadow-sm absolute bottom-5 right-5 z-20 hover:scale-105 transition-transform">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. 02 BROWSE BY INVESTOR TYPE */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
              02
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Browse by Investor Type</h2>
              <p className="text-[11px] text-slate-405 dark:text-zinc-500 font-semibold">Filter the capital stack by entity structures and core funding strategies.</p>
            </div>
          </div>
          <button className="w-8 h-8 rounded-full border dark:border-zinc-800 flex items-center justify-center text-slate-400 hover:text-slate-650 bg-white dark:bg-zinc-900 shadow-sm transition-colors">
            <ChevronRight size={15} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          
          {/* Seed Investors */}
          <div className="bg-gradient-to-b from-[#EBF9F1] to-[#D5F3DF]/60 dark:from-zinc-900 dark:to-emerald-950/20 border border-[#D5F3DF] dark:border-zinc-800 p-5 rounded-2xl shadow-sm flex flex-col justify-between h-32 cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-sm">🌱</div>
            <div>
              <h4 className="text-xs font-black text-slate-850 dark:text-white leading-tight">Seed Investors</h4>
              <p className="text-[9px] text-slate-405 dark:text-zinc-500 font-semibold mt-0.5">1,248 Investors</p>
            </div>
          </div>

          {/* Series A */}
          <div className="bg-gradient-to-b from-[#F3EBF9] to-[#E5D5F3]/60 dark:from-zinc-900 dark:to-purple-950/20 border border-[#E5D5F3] dark:border-zinc-800 p-5 rounded-2xl shadow-sm flex flex-col justify-between h-32 cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center text-xs font-bold">↗</div>
            <div>
              <h4 className="text-xs font-black text-slate-850 dark:text-white leading-tight">Series A Investors</h4>
              <p className="text-[9px] text-slate-405 dark:text-zinc-500 font-semibold mt-0.5">890 Investors</p>
            </div>
          </div>

          {/* Angel Investors */}
          <div className="bg-gradient-to-b from-[#EBF0F9] to-[#D5E1F3]/60 dark:from-zinc-900 dark:to-blue-950/20 border border-[#D5E1F3] dark:border-zinc-800 p-5 rounded-2xl shadow-sm flex flex-col justify-between h-32 cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center text-sm">👼</div>
            <div>
              <h4 className="text-xs font-black text-slate-850 dark:text-white leading-tight">Angel Investors</h4>
              <p className="text-[9px] text-slate-405 dark:text-zinc-500 font-semibold mt-0.5">2,754 Investors</p>
            </div>
          </div>

          {/* Corporate Ventures */}
          <div className="bg-gradient-to-b from-[#EBF7F9] to-[#D5EDF3]/60 dark:from-zinc-900 dark:to-cyan-950/20 border border-[#D5EDF3] dark:border-zinc-800 p-5 rounded-2xl shadow-sm flex flex-col justify-between h-32 cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-600 flex items-center justify-center text-sm">🏢</div>
            <div>
              <h4 className="text-xs font-black text-slate-850 dark:text-white leading-tight">Corporate Venture Funds</h4>
              <p className="text-[9px] text-slate-405 dark:text-zinc-500 font-semibold mt-0.5">612 Investors</p>
            </div>
          </div>

          {/* Late Stage */}
          <div className="bg-gradient-to-b from-[#F9EBEB] to-[#F3D5D5]/60 dark:from-zinc-900 dark:to-red-950/20 border border-[#F3D5D5] dark:border-zinc-800 p-5 rounded-2xl shadow-sm flex flex-col justify-between h-32 cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-7 h-7 rounded-lg bg-red-500/10 text-red-600 flex items-center justify-center text-xs font-bold">📊</div>
            <div>
              <h4 className="text-xs font-black text-slate-850 dark:text-white leading-tight">Late Stage Investors</h4>
              <p className="text-[9px] text-slate-405 dark:text-zinc-500 font-semibold mt-0.5">432 Investors</p>
            </div>
          </div>

          {/* Family Offices */}
          <div className="bg-gradient-to-b from-[#F9F4EB] to-[#F3E5D5]/60 dark:from-zinc-900 dark:to-amber-950/20 border border-[#F3E5D5] dark:border-zinc-800 p-5 rounded-2xl shadow-sm flex flex-col justify-between h-32 cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center text-sm">💼</div>
            <div>
              <h4 className="text-xs font-black text-slate-850 dark:text-white leading-tight">Family Offices</h4>
              <p className="text-[9px] text-slate-405 dark:text-zinc-500 font-semibold mt-0.5">218 Investors</p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. 04 MOST ACTIVE INVESTORS */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
              04
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Most Active Investors</h2>
              <p className="text-[11px] text-slate-405 dark:text-zinc-500 font-semibold">Funds with the highest volume of AI investments completed in the last 12 months.</p>
            </div>
          </div>
          <Link href="/investors" className="text-xs font-bold text-slate-500 dark:text-zinc-400 hover:text-brandRed flex items-center gap-1">
            View all <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Active 1: a16z */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-6 rounded-2xl flex flex-col justify-between min-h-[260px] shadow-sm relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between">
                <LogoA16z />
                <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500">
                  120 portfolio companies
                </span>
              </div>
              
              {/* Backed Cos logos Row grid */}
              <div className="mt-8 space-y-2.5">
                <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-550 block">Key Portfolios</span>
                <div className="grid grid-cols-2 gap-2">
                  {["OpenAI", "Cursor", "Perplexity", "Harvey", "Anyscale"].map((name, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-slate-550/5 dark:bg-zinc-950 border dark:border-zinc-850 px-2 py-1 rounded-lg text-[9.5px] font-black text-slate-800 dark:text-zinc-300">
                      <span className="text-slate-400 dark:text-zinc-600">•</span> {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/investors/a16z" className="mt-6 text-[10px] font-black text-brandRed hover:text-brandRed-hover flex items-center gap-1">
              View portfolio <ArrowRight size={11} />
            </Link>
          </div>

          {/* Active 2: Sequoia */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-6 rounded-2xl flex flex-col justify-between min-h-[260px] shadow-sm relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between">
                <LogoSequoia />
                <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500">
                  98 portfolio companies
                </span>
              </div>
              
              <div className="mt-8 space-y-2.5">
                <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-550 block">Key Portfolios</span>
                <div className="grid grid-cols-2 gap-2">
                  {["Anthropic", "Glean", "Decagon", "Mentor", "Pika"].map((name, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-slate-550/5 dark:bg-zinc-950 border dark:border-zinc-850 px-2 py-1 rounded-lg text-[9.5px] font-black text-slate-800 dark:text-zinc-300">
                      <span className="text-slate-400 dark:text-zinc-600">•</span> {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/investors/sequoia-capital" className="mt-6 text-[10px] font-black text-brandRed hover:text-brandRed-hover flex items-center gap-1">
              View portfolio <ArrowRight size={11} />
            </Link>
          </div>

          {/* Active 3: Lightspeed */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-6 rounded-2xl flex flex-col justify-between min-h-[260px] shadow-sm relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between">
                <LogoLightspeed />
                <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500">
                  86 portfolio companies
                </span>
              </div>
              
              <div className="mt-8 space-y-2.5">
                <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-550 block">Key Portfolios</span>
                <div className="grid grid-cols-2 gap-2">
                  {["Mistral AI", "Cohere", "Gemma", "Replicate", "Browserbase"].map((name, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-slate-550/5 dark:bg-zinc-950 border dark:border-zinc-850 px-2 py-1 rounded-lg text-[9.5px] font-black text-slate-800 dark:text-zinc-300">
                      <span className="text-slate-400 dark:text-zinc-600">•</span> {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/investors/lightspeed" className="mt-6 text-[10px] font-black text-brandRed hover:text-brandRed-hover flex items-center gap-1">
              View portfolio <ArrowRight size={11} />
            </Link>
          </div>

          {/* Active 4: Accel */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-6 rounded-2xl flex flex-col justify-between min-h-[260px] shadow-sm relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between">
                <LogoAccel />
                <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500">
                  72 portfolio companies
                </span>
              </div>
              
              <div className="mt-8 space-y-2.5">
                <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-550 block">Key Portfolios</span>
                <div className="grid grid-cols-2 gap-2">
                  {["Scale AI", "AssemblyAI", "Shiprocket", "Kindo", "Metaphysic"].map((name, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-slate-550/5 dark:bg-zinc-950 border dark:border-zinc-850 px-2 py-1 rounded-lg text-[9.5px] font-black text-slate-800 dark:text-zinc-300">
                      <span className="text-slate-400 dark:text-zinc-600">•</span> {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/investors/accel" className="mt-6 text-[10px] font-black text-brandRed hover:text-brandRed-hover flex items-center gap-1">
              View portfolio <ArrowRight size={11} />
            </Link>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. 05 INVESTORS BACKING WINNERS */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
              05
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Investors Backing Winners</h2>
              <p className="text-[11px] text-slate-405 dark:text-zinc-500 font-semibold">Breakdown of cap table structures for the three most valued artificial intelligence labs.</p>
            </div>
          </div>
          <Link href="/investors" className="text-xs font-bold text-slate-500 dark:text-zinc-400 hover:text-brandRed flex items-center gap-1">
            View all <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* OpenAI */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-6 rounded-2xl shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-850 dark:text-white flex items-center gap-1.5">
                <span className="text-emerald-600">🌀</span> OpenAI
              </h3>
              <span className="text-[9.5px] text-slate-400 dark:text-zinc-500 font-semibold">Valuation $86B</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-450 dark:text-zinc-550 block">Backed by</span>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 p-2 rounded-lg">
                  <LogoMicrosoft />
                  <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500">Lead Corp</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 p-2 rounded-lg">
                  <LogoThrive />
                  <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500">Lead VC</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 p-2 rounded-lg">
                  <LogoKhosla />
                  <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500">Early Seed</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 p-2 rounded-lg">
                  <LogoFoundersFund />
                  <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500">Series B</span>
                </div>
              </div>
            </div>
          </div>

          {/* Anthropic */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-6 rounded-2xl shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-850 dark:text-white flex items-center gap-1.5">
                <span className="text-orange-705 font-black">▲</span> Anthropic
              </h3>
              <span className="text-[9.5px] text-slate-400 dark:text-zinc-500 font-semibold">Valuation $18.4B</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-450 dark:text-zinc-550 block">Backed by</span>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 p-2 rounded-lg">
                  <LogoGoogle />
                  <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500">Strategic</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 p-2 rounded-lg">
                  <LogoSpark />
                  <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500">Series B</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 p-2 rounded-lg">
                  <LogoMenlo />
                  <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500">Early Stage</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 p-2 rounded-lg">
                  <LogoLightspeed />
                  <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-550 flex items-center gap-1">Series A</span>
                </div>
              </div>
            </div>
          </div>

          {/* Perplexity */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-6 rounded-2xl shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-850 dark:text-white flex items-center gap-1.5">
                <span className="text-teal-655 font-black">❄️</span> Perplexity
              </h3>
              <span className="text-[9.5px] text-slate-400 dark:text-zinc-500 font-semibold">Valuation $1.0B</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-450 dark:text-zinc-550 block">Backed by</span>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 p-2 rounded-lg">
                  <LogoA16z />
                  <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500">Lead VC</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 p-2 rounded-lg">
                  <LogoDatabricks />
                  <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500">Corporate</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 p-2 rounded-lg">
                  <LogoNEA />
                  <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500">Series A</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 p-2 rounded-lg">
                  <LogoIVP />
                  <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-500">Series B</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 7. 06 CAPITAL THEMES */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
              06
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Capital Themes</h2>
              <p className="text-[11px] text-slate-405 dark:text-zinc-500 font-semibold">Hot themes attracting concentrated check placements and syndicates.</p>
            </div>
          </div>
          <Link href="/investors" className="text-xs font-bold text-slate-500 dark:text-zinc-400 hover:text-brandRed flex items-center gap-1">
            View all <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "AI Agents", count: "1,114 Investors", color: "text-pink-650 bg-pink-500/10 border-pink-250 dark:text-pink-300 dark:bg-pink-950/20" },
            { label: "AI Coding", count: "856 Investors", color: "text-purple-650 bg-purple-500/10 border-purple-250 dark:text-purple-300 dark:bg-purple-950/20" },
            { label: "AI Infrastructure", count: "988 Investors", color: "text-blue-650 bg-blue-500/10 border-blue-250 dark:text-blue-300 dark:bg-blue-950/20" },
            { label: "Developer Tools", count: "745 Investors", color: "text-indigo-650 bg-indigo-500/10 border-indigo-250 dark:text-indigo-300 dark:bg-indigo-950/20" },
            { label: "Robotics", count: "521 Investors", color: "text-teal-650 bg-teal-500/10 border-teal-250 dark:text-teal-300 dark:bg-teal-950/20" },
            { label: "Healthcare AI", count: "412 Investors", color: "text-emerald-650 bg-emerald-500/10 border-emerald-250 dark:text-emerald-300 dark:bg-emerald-950/20" },
            { label: "Defense AI", count: "124 Investors", color: "text-rose-650 bg-rose-500/10 border-rose-250 dark:text-rose-300 dark:bg-rose-950/20" },
            { label: "Video AI", count: "381 Investors", color: "text-fuchsia-650 bg-fuchsia-500/10 border-fuchsia-250 dark:text-fuchsia-300 dark:bg-fuchsia-950/20" }
          ].map((theme, i) => (
            <div 
              key={i} 
              className={`p-4 rounded-xl border flex items-center justify-between transition-transform hover:-translate-y-0.5 cursor-pointer shadow-sm ${theme.color}`}
            >
              <div>
                <h4 className="text-xs font-black leading-snug">{theme.label}</h4>
                <span className="text-[9px] font-bold block mt-0.5 opacity-80">{theme.count}</span>
              </div>
              <ChevronRight size={14} className="opacity-70" />
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 8. 07 EMERGING INVESTORS */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
              07
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Emerging Investors</h2>
              <p className="text-[11px] text-slate-405 dark:text-zinc-500 font-semibold">New funds and boutique managers entering high-growth AI cap tables.</p>
            </div>
          </div>
          <Link href="/investors" className="text-xs font-bold text-slate-500 dark:text-zinc-400 hover:text-brandRed flex items-center gap-1">
            View all <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { name: "Theory", type: "Ventures", desc: "Early stage AI-first check syndicate.", logo: "Ｔ" },
            { name: "Conviction", type: "Partners", desc: "Seed to Series A specialist backing model architecture.", logo: "Ｃ" },
            { name: "Radical", type: "Ventures", desc: "Pre-seed to Seed. Focusing on AI + Frontier science.", logo: "Ｒ" },
            { name: "NFDG", type: "AI Fund", desc: "Global operator-led boutique seeding generative solutions.", logo: "Ｎ" },
            { name: "South Park", type: "Commons", desc: "Co-investing sandbox community for operator angels.", logo: "Ｓ" }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-5 rounded-2xl flex flex-col justify-between min-h-[160px] shadow-sm relative overflow-hidden group">
              <div>
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-white dark:bg-zinc-950 font-black text-sm flex items-center justify-center border dark:border-zinc-800">
                  {item.logo}
                </div>
                <h4 className="text-xs font-black text-slate-850 dark:text-white mt-4">{item.name}</h4>
                <p className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-500 mt-0.5">{item.type}</p>
                <p className="text-[10px] text-slate-450 dark:text-zinc-450 font-medium leading-relaxed mt-2 line-clamp-3">
                  {item.desc}
                </p>
              </div>
              <ChevronRight size={14} className="text-slate-400 dark:text-zinc-550 group-hover:translate-x-0.5 transition-transform mt-4 self-end" />
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 9. 08 INVESTOR RESEARCH */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
              08
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Investor Research</h2>
              <p className="text-[11px] text-slate-405 dark:text-zinc-500 font-semibold">Latest reports, market insights, and capital analytics from the GraphOne network.</p>
            </div>
          </div>
          <Link href="/investors" className="text-xs font-bold text-slate-500 dark:text-zinc-400 hover:text-brandRed flex items-center gap-1">
            View all <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          {/* Article 1 */}
          <div className="group bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-[280px] cursor-pointer">
            <div 
              className="h-32 bg-cover bg-center border-b border-slate-100 dark:border-zinc-800" 
              style={{ backgroundImage: "url('/images/investor_research_top.png')" }}
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black text-slate-850 dark:text-white leading-snug line-clamp-2">
                  Top AI Investors
                </h4>
                <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-550 block mt-1">2026</span>
              </div>
              <span className="text-[9px] font-black uppercase text-brandRed flex items-center gap-1 group-hover:translate-x-0.5 transition-transform mt-2">
                Read Report <ArrowRight size={11} />
              </span>
            </div>
          </div>

          {/* Article 2 */}
          <div className="group bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-[280px] cursor-pointer">
            <div 
              className="h-32 bg-cover bg-center border-b border-slate-100 dark:border-zinc-800" 
              style={{ backgroundImage: "url('/images/investor_research_seed.png')" }}
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black text-slate-850 dark:text-white leading-snug line-clamp-2">
                  Who Leads Most Seed Rounds?
                </h4>
                <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-550 block mt-1">2026</span>
              </div>
              <span className="text-[9px] font-black uppercase text-brandRed flex items-center gap-1 group-hover:translate-x-0.5 transition-transform mt-2">
                Read Report <ArrowRight size={11} />
              </span>
            </div>
          </div>

          {/* Article 3 */}
          <div className="group bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-[280px] cursor-pointer">
            <div 
              className="h-32 bg-cover bg-center border-b border-slate-100 dark:border-zinc-800" 
              style={{ backgroundImage: "url('/images/investor_research_operator.png')" }}
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black text-slate-850 dark:text-white leading-snug line-clamp-2">
                  The Rise of Operator Angels
                </h4>
                <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-550 block mt-1">2026</span>
              </div>
              <span className="text-[9px] font-black uppercase text-brandRed flex items-center gap-1 group-hover:translate-x-0.5 transition-transform mt-2">
                Read Report <ArrowRight size={11} />
              </span>
            </div>
          </div>

          {/* Article 4 */}
          <div className="group bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-[280px] cursor-pointer">
            <div 
              className="h-32 bg-cover bg-center border-b border-slate-100 dark:border-zinc-800" 
              style={{ backgroundImage: "url('/images/investor_research_state.png')" }}
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black text-slate-850 dark:text-white leading-snug line-clamp-2">
                  State of AI Venture Capital
                </h4>
                <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-550 block mt-1">2026</span>
              </div>
              <span className="text-[9px] font-black uppercase text-brandRed flex items-center gap-1 group-hover:translate-x-0.5 transition-transform mt-2">
                Read Report <ArrowRight size={11} />
              </span>
            </div>
          </div>

          {/* Article 5 */}
          <div className="group bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-[280px] cursor-pointer">
            <div 
              className="h-32 bg-cover bg-center border-b border-slate-100 dark:border-zinc-800" 
              style={{ backgroundImage: "url('/images/investor_research_flows.png')" }}
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black text-slate-850 dark:text-white leading-snug line-clamp-2">
                  AI Capital Flows Report
                </h4>
                <span className="text-[9px] font-bold text-slate-400 dark:text-zinc-550 block mt-1">2026</span>
              </div>
              <span className="text-[9px] font-black uppercase text-brandRed flex items-center gap-1 group-hover:translate-x-0.5 transition-transform mt-2">
                Read Report <ArrowRight size={11} />
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 10. CAPITAL GRAPH CTA WIDGET BANNER */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden bg-slate-955 dark:bg-zinc-950 text-white border border-slate-900 dark:border-zinc-850 rounded-3xl p-8 lg:p-10 shadow-lg text-center lg:text-left">
        
        {/* Colorful background radial glows */}
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,79,0,0.08)_0,transparent_60%)] pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0,transparent_60%)] pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 z-10 relative">
          <div className="space-y-4 max-w-xl">
            <span className="text-[10px] font-black uppercase text-pink-400 tracking-wider block bg-pink-500/10 px-3 py-1 rounded-full w-max mx-auto lg:mx-0">
              Explore the Capital Graph
            </span>
            <h2 className="text-2.5xl md:text-3.5xl font-black tracking-tight leading-tight">
              Visualize How Capital <br /> Moves in the AI Economy
            </h2>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              Explore the relationships between investors, founders, companies, funding rounds and products.
            </p>
          </div>

          {/* Interactive process sequence flow */}
          <div className="flex items-center gap-3 md:gap-5 overflow-x-auto w-full lg:w-auto pb-4 justify-center">
            {/* Investor */}
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-lg shadow-rose-500/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879-.659c1.546-1.16 3.696-1.16 5.242 0a4 4 0 000 6.364M9.5 9.5a4 4 0 015.656 0c1.547 1.16 1.547 3.033 0 4.192" />
                </svg>
              </div>
              <span className="text-[10px] font-black text-slate-300">Investor</span>
            </div>
            <span className="text-slate-600 font-black text-lg">→</span>

            {/* Founder */}
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="text-[10px] font-black text-slate-300">Founder</span>
            </div>
            <span className="text-slate-600 font-black text-lg">→</span>

            {/* Company */}
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                  <circle cx="12" cy="14" r="2.5" />
                  <circle cx="12" cy="14" r="0.8" fill="currentColor" />
                </svg>
              </div>
              <span className="text-[10px] font-black text-slate-300">Company</span>
            </div>
            <span className="text-slate-600 font-black text-lg">→</span>

            {/* Funding Round */}
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polygon points="12,2 22,8.5 22,17.5 12,22 2,17.5 2,8.5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <span className="text-[10px] font-black text-slate-300">Funding Round</span>
            </div>
            <span className="text-slate-600 font-black text-lg">→</span>

            {/* Product */}
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="5" y="6" width="14" height="12" rx="3" />
                  <path d="M9 12h.01M15 12h.01" strokeLinecap="round" strokeWidth="3" />
                  <path d="M5 12H3M21 12h-2M12 6V3" />
                </svg>
              </div>
              <span className="text-[10px] font-black text-slate-300">Product</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <button className="bg-brandRed hover:bg-brandRed-hover text-white text-[11px] font-black px-6 py-3.5 rounded-full transition-all duration-150 flex items-center gap-1.5 shadow-md shadow-brandRed/20">
              Explore Capital Graph <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 11. JOIN THE NETWORK AUTH BLOCK */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <span className="text-[9px] font-black uppercase text-brandRed bg-brandRed-light dark:bg-brandRed/10 px-2 py-0.5 rounded">
            10 Join the GraphOne Investor Network
          </span>
          <h3 className="text-lg font-black text-slate-850 dark:text-white mt-3">
            Unlock better opportunities. Build what&apos;s next.
          </h3>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="text-[12.5px] font-bold text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200 px-4 py-2 transition-colors">
            Log In
          </button>
          <button className="bg-brandRed hover:bg-brandRed-hover text-white text-[12px] font-black px-5 py-2.5 rounded-full transition-all shadow-sm shadow-brandRed/20">
            Sign up for free
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 12. BRANDS FOOTER */}
      {/* ========================================================================= */}
      <div className="border-t border-slate-100 dark:border-zinc-850 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-400 text-xs font-semibold gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-brandRed flex items-center justify-center text-white font-black text-sm">
            g
          </div>
          <span className="text-slate-700 dark:text-zinc-300 font-extrabold text-sm tracking-tight">GraphOne Investors</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-slate-450 dark:text-zinc-500">
          <span>© 2026 GraphOne. All rights reserved.</span>
          <span>•</span>
          <span className="hover:text-slate-700 cursor-pointer">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-slate-700 cursor-pointer">Terms of Service</span>
        </div>
      </div>

    </div>
  );
}
