"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  ArrowRight, 
  ChevronRight, 
  Eye, 
  Star, 
  Grid, 
  List 
} from "lucide-react";

export default function Home() {
  const [exploreCategory, setExploreCategory] = useState("Category");
  const [exploreStage, setExploreStage] = useState("Funding Stage");
  const [exploreCountry, setExploreCountry] = useState("Country");
  const [exploreTeam, setExploreTeam] = useState("Team Size");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION & SEARCH */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-center shadow-sm">
        
        {/* Floating gradient visuals for hero background */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-orange-400/10 dark:from-purple-650/5 dark:to-orange-650/5 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute left-1/3 bottom-0 w-64 h-64 bg-gradient-to-tr from-blue-300/10 to-pink-300/10 dark:from-blue-650/5 dark:to-pink-650/5 blur-3xl pointer-events-none rounded-full" />

        <div className="flex-1 space-y-6 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-[10px] uppercase tracking-wider">
            AI Companies
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5.5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight max-w-xl">
            Discover the world&apos;s most innovative <span className="text-brandRed">AI companies</span>
          </h1>
          
          <p className="text-slate-500 dark:text-zinc-450 text-sm font-medium max-w-lg leading-relaxed">
            Explore AI startups, unicorns, frontier labs, and emerging companies shaping the future of artificial intelligence.
          </p>

          {/* Central search bar */}
          <div className="flex items-center gap-2 bg-slate-50 dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800 rounded-full py-2 pl-4 pr-2 w-full max-w-lg mt-6 shadow-inner focus-within:border-brandRed transition-colors">
            <Search size={16} className="text-slate-400 dark:text-zinc-500" />
            <input
              type="text"
              placeholder="Search companies, categories, founders, investors..."
              className="w-full text-xs font-semibold text-slate-800 dark:text-slate-100 placeholder-slate-405 dark:placeholder-zinc-550 bg-transparent outline-none"
            />
            <button className="w-8 h-8 rounded-full bg-brandRed hover:bg-brandRed-hover flex items-center justify-center text-white transition-colors">
              <Search size={14} />
            </button>
          </div>

          {/* Quick tags */}
          <div className="flex flex-wrap gap-2 pt-2 justify-center lg:justify-start">
            {["AI Agents", "AI Coding", "AI Search", "AI Video", "AI Voice", "AI Infrastructure"].map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-white hover:bg-slate-50 dark:bg-zinc-800 dark:hover:bg-zinc-700/80 border border-slate-100 dark:border-zinc-750 rounded-full text-[10px] font-bold text-slate-700 dark:text-zinc-350 cursor-pointer shadow-sm transition-colors"
              >
                ⊙ {tag}
              </span>
            ))}
            <span className="px-3 py-1 bg-slate-150 dark:bg-zinc-850 rounded-full text-[10px] font-bold text-slate-550 dark:text-zinc-400 cursor-pointer">
              More ▾
            </span>
          </div>
        </div>

        {/* Right Graphic circle of features */}
        <div className="w-full lg:w-[350px] flex-shrink-0 flex items-center justify-center select-none z-10">
          <div className="relative w-72 h-72">
            {/* Center target circle */}
            <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gradient-to-br from-brandRed to-purple-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-brandRed/30">
              g
            </div>
            
            {/* Fine dotted orbit rings */}
            <div className="absolute inset-0 m-auto w-52 h-52 rounded-full border border-dashed border-purple-500/25 animate-[spin_24s_linear_infinite]" />
            <div className="absolute inset-0 m-auto w-64 h-64 rounded-full border border-dashed border-red-500/15 animate-[spin_38s_linear_infinite_reverse]" />

            {/* Orbiting node icon badges */}
            {/* Icon 1: Code */}
            <div className="absolute top-2 right-12 w-11 h-11 bg-white dark:bg-zinc-800 rounded-2xl border border-slate-100 dark:border-zinc-750 flex items-center justify-center shadow-md text-amber-500 text-lg">
              💻
            </div>
            {/* Icon 2: Brain */}
            <div className="absolute top-12 left-2 w-11 h-11 bg-white dark:bg-zinc-800 rounded-2xl border border-slate-100 dark:border-zinc-750 flex items-center justify-center shadow-md text-purple-500 text-lg">
              🧠
            </div>
            {/* Icon 3: Voice */}
            <div className="absolute bottom-12 right-2 w-11 h-11 bg-white dark:bg-zinc-800 rounded-2xl border border-slate-100 dark:border-zinc-750 flex items-center justify-center shadow-md text-green-500 text-lg">
              🎤
            </div>
            {/* Icon 4: Search */}
            <div className="absolute bottom-6 left-12 w-11 h-11 bg-white dark:bg-zinc-800 rounded-2xl border border-slate-100 dark:border-zinc-750 flex items-center justify-center shadow-md text-blue-500 text-lg">
              🔍
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. TRENDING AI COMPANIES (ROW 1) */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
              01
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Trending AI Companies</h2>
              <p className="text-[11px] text-slate-400 dark:text-zinc-500 font-semibold">The most searched, viewed and discussed AI companies right now.</p>
            </div>
          </div>
          <Link href="/companies" className="text-xs font-bold text-slate-500 dark:text-zinc-400 hover:text-brandRed border dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3.5 py-1.5 rounded-lg shadow-sm">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card 1: Cursor */}
          <Link href="/companies/cursor" className="group bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer shadow-sm relative overflow-hidden">
            <div>
              <span className="text-[9px] font-black uppercase text-purple-650 bg-purple-550/10 px-2 py-0.5 rounded">01</span>
              <h3 className="text-base font-black text-slate-850 dark:text-white mt-4 group-hover:text-brandRed transition-colors">Cursor</h3>
              <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-bold">AI Coding</p>
              <p className="text-[11px] text-slate-500 dark:text-zinc-400 font-semibold mt-2 leading-relaxed">
                The AI-first code editor built for developers.
              </p>
            </div>
            
            {/* Visual polyhedrons vector box */}
            <div className="h-28 flex items-center justify-center my-4">
              <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-purple-500 fill-purple-500/10 stroke-[1.5]">
                <polygon points="50,10 90,32 90,78 50,95 10,78 10,32" />
                <line x1="50" y1="10" x2="50" y2="95" />
                <line x1="50" y1="52" x2="90" y2="32" />
                <line x1="50" y1="52" x2="10" y2="32" />
                <line x1="50" y1="52" x2="90" y2="78" />
                <line x1="50" y1="52" x2="10" y2="78" />
              </svg>
            </div>

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-50 dark:border-zinc-850">
              <span className="text-[9px] font-bold text-brandRed bg-brandRed-light dark:bg-brandRed/10 px-2 py-0.5 rounded">🔥 Trending #1</span>
              <span className="text-[9.5px] text-slate-400 font-bold flex items-center gap-1"><Eye size={12} /> 16.2K (7d)</span>
            </div>
          </Link>

          {/* Card 2: Perplexity */}
          <Link href="/companies/perplexity" className="group bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer shadow-sm relative overflow-hidden">
            <div>
              <span className="text-[9px] font-black uppercase text-blue-650 bg-blue-550/10 px-2 py-0.5 rounded">02</span>
              <h3 className="text-base font-black text-slate-850 dark:text-white mt-4 group-hover:text-brandRed transition-colors">Perplexity</h3>
              <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-bold">AI Search</p>
              <p className="text-[11px] text-slate-500 dark:text-zinc-400 font-semibold mt-2 leading-relaxed">
                AI search engine for real-time answers.
              </p>
            </div>

            {/* Visual grid network sphere */}
            <div className="h-28 flex items-center justify-center my-4">
              <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-teal-500 fill-none stroke-[1]">
                <circle cx="50" cy="50" r="35" />
                <ellipse cx="50" cy="50" rx="35" ry="12" />
                <ellipse cx="50" cy="50" rx="12" ry="35" />
                <line x1="50" y1="15" x2="50" y2="85" />
                <line x1="15" y1="50" x2="85" y2="50" />
              </svg>
            </div>

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-50 dark:border-zinc-850">
              <span className="text-[9px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/20 px-2 py-0.5 rounded">🔥 Trending #2</span>
              <span className="text-[9.5px] text-slate-400 font-bold flex items-center gap-1"><Eye size={12} /> 12.3K (7d)</span>
            </div>
          </Link>

          {/* Card 3: Midjourney */}
          <Link href="/companies/midjourney" className="group bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer shadow-sm relative overflow-hidden">
            <div>
              <span className="text-[9px] font-black uppercase text-red-650 bg-red-550/10 px-2 py-0.5 rounded">03</span>
              <h3 className="text-base font-black text-slate-850 dark:text-white mt-4 group-hover:text-brandRed transition-colors">Midjourney</h3>
              <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-bold">AI Image</p>
              <p className="text-[11px] text-slate-500 dark:text-zinc-400 font-semibold mt-2 leading-relaxed">
                Create stunning images from natural language.
              </p>
            </div>

            {/* Visual waves nebula */}
            <div className="h-28 flex items-center justify-center my-4">
              <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-rose-500 fill-none stroke-[1.5]">
                <path d="M10,50 Q30,20 50,50 T90,50" />
                <path d="M10,60 Q30,30 50,60 T90,60" className="opacity-60" />
                <path d="M10,40 Q30,10 50,40 T90,40" className="opacity-30" />
              </svg>
            </div>

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-50 dark:border-zinc-850">
              <span className="text-[9px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/20 px-2 py-0.5 rounded">🔥 Trending #3</span>
              <span className="text-[9.5px] text-slate-400 font-bold flex items-center gap-1"><Eye size={12} /> 9.7K (7d)</span>
            </div>
          </Link>

          {/* Right Column Stack: Runway & Synthesia */}
          <div className="flex flex-col gap-4">
            {/* Runway */}
            <Link href="/companies/runway" className="group bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-5 rounded-2xl hover:shadow-md transition-shadow flex items-center justify-between shadow-sm cursor-pointer">
              <div className="min-w-0">
                <span className="text-[8px] font-black uppercase text-zinc-500 bg-zinc-150 px-1.5 py-0.5 rounded">04</span>
                <h4 className="text-xs font-black text-slate-800 dark:text-white mt-1 group-hover:text-brandRed transition-colors">Runway</h4>
                <p className="text-[9px] text-slate-400 dark:text-zinc-550 font-bold">AI Video</p>
                <span className="text-[9px] text-slate-400 font-bold flex items-center gap-0.5 mt-1.5"><Eye size={10} /> 7.3K (7d)</span>
              </div>
              <ChevronRight size={16} className="text-slate-400 dark:text-zinc-500" />
            </Link>

            {/* Synthesia */}
            <div className="group bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-5 rounded-2xl hover:shadow-md transition-shadow flex items-center justify-between shadow-sm cursor-pointer">
              <div className="min-w-0">
                <span className="text-[8px] font-black uppercase text-zinc-500 bg-zinc-150 px-1.5 py-0.5 rounded">05</span>
                <h4 className="text-xs font-black text-slate-800 dark:text-white mt-1 group-hover:text-brandRed transition-colors">Synthesia</h4>
                <p className="text-[9px] text-slate-400 dark:text-zinc-550 font-bold">AI Video</p>
                <span className="text-[9px] text-slate-400 font-bold flex items-center gap-0.5 mt-1.5"><Eye size={10} /> 6.1K (7d)</span>
              </div>
              <ChevronRight size={16} className="text-slate-400 dark:text-zinc-500" />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. FASTEST GROWING AI COMPANIES (ROW 2) */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
              02
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Fastest Growing AI Companies</h2>
              <p className="text-[11px] text-slate-400 dark:text-zinc-500 font-semibold">Companies showing strong momentum across key growth signals.</p>
            </div>
          </div>
          <Link href="/companies" className="text-xs font-bold text-slate-500 dark:text-zinc-400 hover:text-brandRed border dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3.5 py-1.5 rounded-lg shadow-sm">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Card 1: Lovable */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-5 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden h-40">
            <div>
              <span className="text-[15px]">⚡</span>
              <h4 className="text-xs font-black text-slate-850 dark:text-white mt-2">Lovable</h4>
              <p className="text-[9px] text-slate-400 dark:text-zinc-500 font-bold">AI App Builder</p>
            </div>
            <div className="h-10 mt-4">
              <svg viewBox="0 0 100 40" className="w-full h-full stroke-blue-500 fill-none stroke-[2]">
                <path d="M0,35 Q20,10 40,25 T80,5 T100,20" />
              </svg>
            </div>
          </div>

          {/* Card 2: Caltera */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-5 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden h-40">
            <div>
              <span className="text-[15px]">🪐</span>
              <h4 className="text-xs font-black text-slate-850 dark:text-white mt-2">Caltera</h4>
              <p className="text-[9px] text-slate-400 dark:text-zinc-500 font-bold">AI Infrastructure</p>
            </div>
            <div className="h-10 mt-4">
              <svg viewBox="0 0 100 40" className="w-full h-full stroke-rose-500 fill-none stroke-[2]">
                <path d="M0,38 Q20,20 45,30 T80,8 T100,5" />
              </svg>
            </div>
          </div>

          {/* Card 3: ElevenLabs */}
          <Link href="/companies/elevenlabs" className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-5 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden h-40 cursor-pointer hover:shadow-md transition-shadow">
            <div>
              <span className="text-[15px]">〢</span>
              <h4 className="text-xs font-black text-slate-850 dark:text-white mt-2">ElevenLabs</h4>
              <p className="text-[9px] text-slate-400 dark:text-zinc-500 font-bold">AI Voice</p>
            </div>
            <div className="h-10 mt-4">
              <svg viewBox="0 0 100 40" className="w-full h-full stroke-emerald-500 fill-none stroke-[2]">
                <path d="M0,35 Q15,30 35,15 T70,30 T100,5" />
              </svg>
            </div>
          </Link>

          {/* Card 4: Pika */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-5 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden h-40">
            <div>
              <span className="text-[15px]">🐇</span>
              <h4 className="text-xs font-black text-slate-850 dark:text-white mt-2">Pika</h4>
              <p className="text-[9px] text-slate-400 dark:text-zinc-500 font-bold">AI Video</p>
            </div>
            <div className="h-10 mt-4">
              <svg viewBox="0 0 100 40" className="w-full h-full stroke-orange-500 fill-none stroke-[2]">
                <path d="M0,35 Q20,38 40,20 T80,10 T100,3" />
              </svg>
            </div>
          </div>

          {/* Right CTA Card: Explore Leaders */}
          <div className="bg-slate-900 dark:bg-zinc-950 text-white border border-slate-800 p-5 rounded-2xl shadow-sm flex flex-col justify-between h-40">
            <div>
              <h4 className="text-xs font-bold tracking-tight">Explore tomorrow&apos;s market leaders.</h4>
              <p className="text-[8.5px] text-zinc-400 font-semibold leading-relaxed mt-1">
                Discover companies with the highest growth potential across the AI landscape.
              </p>
            </div>
            <Link 
              href="/companies"
              className="w-full text-center py-2 bg-white hover:bg-zinc-100 text-slate-950 text-[10px] font-black rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              Explore Growth Leaders <ArrowRight size={11} />
            </Link>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. EMERGING AI STARTUPS TO WATCH (ROW 3) */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
              03
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Emerging AI Startups to Watch</h2>
              <p className="text-[11px] text-slate-400 dark:text-zinc-500 font-semibold">Promising early-stage companies gaining real traction.</p>
            </div>
          </div>
          <Link href="/companies" className="text-xs font-bold text-slate-500 dark:text-zinc-400 hover:text-brandRed border dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3.5 py-1.5 rounded-lg shadow-sm">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Glean */}
          <Link href="/companies/perplexity" className="group bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow shadow-sm min-h-[175px]">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
                  G
                </div>
                <span className="text-[28px] text-blue-500/10 font-black">g</span>
              </div>
              <h3 className="text-sm font-black text-slate-850 dark:text-white mt-4 group-hover:text-brandRed transition-colors">Glean</h3>
              <p className="text-[9px] text-slate-400 font-bold uppercase mt-0.5">AI Search</p>
              <p className="text-[10px] text-slate-500 dark:text-zinc-450 font-semibold mt-1.5 leading-relaxed">
                Enterprise AI search across all your data.
              </p>
            </div>
            <div className="text-[9px] text-slate-400 font-bold mt-4">
              2022 • 51-200 employees
            </div>
          </Link>

          {/* Hebe */}
          <div className="group bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow shadow-sm min-h-[175px]">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center text-xl font-bold font-mono">
                  ⌘
                </div>
                <span className="text-[28px] text-slate-100 dark:text-zinc-800 font-black">h</span>
              </div>
              <h3 className="text-sm font-black text-slate-850 dark:text-white mt-4">Hebe</h3>
              <p className="text-[9px] text-slate-400 font-bold uppercase mt-0.5">AI Research</p>
              <p className="text-[10px] text-slate-500 dark:text-zinc-450 font-semibold mt-1.5 leading-relaxed">
                Building multimodal AI models.
              </p>
            </div>
            <div className="text-[9px] text-slate-400 font-bold mt-4">
              2023 • 11-50 employees
            </div>
          </div>

          {/* Hugging Face */}
          <div className="group bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow shadow-sm min-h-[175px]">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/20 flex items-center justify-center text-xl font-bold">
                  🤗
                </div>
                <span className="text-[28px] text-amber-500/10 font-black">hf</span>
              </div>
              <h3 className="text-sm font-black text-slate-850 dark:text-white mt-4">Hugging Face</h3>
              <p className="text-[9px] text-slate-400 font-bold uppercase mt-0.5">AI Infrastructure</p>
              <p className="text-[10px] text-slate-500 dark:text-zinc-450 font-semibold mt-1.5 leading-relaxed">
                The AI community building the future.
              </p>
            </div>
            <div className="text-[9px] text-slate-400 font-bold mt-4">
              2016 • 201-500 employees
            </div>
          </div>

          {/* Mistral AI */}
          <div className="group bg-gradient-to-br from-amber-50 to-orange-100 dark:from-zinc-900 dark:to-zinc-900/50 border border-amber-100/50 dark:border-zinc-800 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow shadow-sm min-h-[175px]">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center text-base font-extrabold">
                  Ｍ
                </div>
                <span className="text-[28px] text-orange-500/10 font-black">m</span>
              </div>
              <h3 className="text-sm font-black text-slate-850 dark:text-white mt-4">Mistral AI</h3>
              <p className="text-[9px] text-slate-400 font-bold uppercase mt-0.5">AI Models</p>
              <p className="text-[10px] text-slate-500 dark:text-zinc-450 font-semibold mt-1.5 leading-relaxed">
                Frontier AI models for every builder.
              </p>
            </div>
            <div className="text-[9px] text-slate-400 font-bold mt-4">
              2023 • 51-200 employees
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. BROWSE BY CATEGORY (ROW 4) */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
            04
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Browse by Category</h2>
            <p className="text-[11px] text-slate-400 dark:text-zinc-500 font-semibold">Explore companies by what they&apos;re building.</p>
          </div>
        </div>

        <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
          {[
            { name: "AI Agents", count: "1,245 companies", icon: "🤖", color: "text-purple-500 bg-purple-50 dark:bg-purple-950/20" },
            { name: "AI Coding", count: "863 companies", icon: "💻", color: "text-blue-500 bg-blue-50 dark:bg-blue-950/20" },
            { name: "AI Search", count: "324 companies", icon: "🔍", color: "text-teal-500 bg-teal-50 dark:bg-teal-950/20" },
            { name: "AI Video", count: "652 companies", icon: "🎬", color: "text-pink-500 bg-pink-50 dark:bg-pink-950/20" },
            { name: "AI Voice", count: "412 companies", icon: "🎤", color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20" },
            { name: "AI Infrastructure", count: "972 companies", icon: "⚙️", color: "text-orange-500 bg-orange-50 dark:bg-orange-950/20" },
            { name: "Healthcare AI", count: "587 companies", icon: "🏥", color: "text-red-500 bg-red-50 dark:bg-red-950/20" },
            { name: "Robotics", count: "395 companies", icon: "⚙️", color: "text-slate-500 bg-slate-50 dark:bg-slate-950/20" }
          ].map((cat, idx) => (
            <Link
              key={idx}
              href="/companies"
              className="flex flex-col justify-between bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-5 rounded-2xl w-40 h-32 flex-shrink-0 hover:shadow-md transition-shadow shadow-sm cursor-pointer"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${cat.color}`}>
                {cat.icon}
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-850 dark:text-white truncate">{cat.name}</h4>
                <p className="text-[9px] text-slate-400 font-bold mt-0.5">{cat.count}</p>
              </div>
            </Link>
          ))}
          <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-900 border flex items-center justify-center text-slate-450 dark:text-zinc-500 cursor-pointer flex-shrink-0 shadow-sm">
            <ChevronRight size={14} />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. TRIPLE COLUMN GRIDS (ROW 5) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 5: Breakout Companies */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-5.5 h-5.5 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-[10px] flex items-center justify-center">
              05
            </div>
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Breakout Companies</h3>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-slate-105/70 dark:border-zinc-800/80 rounded-2xl divide-y divide-slate-50 dark:divide-zinc-850 overflow-hidden shadow-sm">
            {[
              { name: "Pika", desc: "Launched new 1.0 video model.", logo: "🐇" },
              { name: "Cognition", desc: "Closed $175M Series B.", logo: "💻" },
              { name: "Adept", desc: "Enterprise adoption surged 200%.", logo: "🤖" }
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3 p-4 hover:bg-slate-50/50 dark:hover:bg-zinc-850/10 cursor-pointer">
                <span className="text-xl">{c.logo}</span>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white truncate">{c.name}</h4>
                  <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-semibold truncate">{c.desc}</p>
                </div>
                <ChevronRight size={14} className="text-slate-405" />
              </div>
            ))}
          </div>
        </div>

        {/* Column 6: Recently Funded AI Startups */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-5.5 h-5.5 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-[10px] flex items-center justify-center">
              06
            </div>
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Recently Funded</h3>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-slate-105/70 dark:border-zinc-800/80 rounded-2xl divide-y divide-slate-50 dark:divide-zinc-850 overflow-hidden shadow-sm">
            {[
              { name: "xAI", desc: "$6B Series B • May 26, 2026", logo: "x" },
              { name: "Databricks", desc: "$100M Series J • May 21, 2026", logo: "🧱" },
              { name: "Mistral AI", desc: "$640M Series B • May 20, 2026", logo: "Ｍ" }
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3 p-4 hover:bg-slate-50/50 dark:hover:bg-zinc-850/10 cursor-pointer">
                <span className="text-base font-extrabold flex-shrink-0 w-6.5 h-6.5 rounded bg-slate-50 dark:bg-zinc-850 border dark:border-zinc-800 flex items-center justify-center">{c.logo}</span>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white truncate">{c.name}</h4>
                  <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-semibold truncate">{c.desc}</p>
                </div>
                <ChevronRight size={14} className="text-slate-405" />
              </div>
            ))}
          </div>
        </div>

        {/* Column 7: Startups to Watch */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-5.5 h-5.5 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-[10px] flex items-center justify-center">
              07
            </div>
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Startups to Watch</h3>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-slate-105/70 dark:border-zinc-800/80 rounded-2xl divide-y divide-slate-50 dark:divide-zinc-850 overflow-hidden shadow-sm">
            {[
              { name: "Deci", desc: "AI inference platform. High performance.", logo: "♾️" },
              { name: "Typeface", desc: "AI marketing platform. Generative content.", logo: "Ｔ" },
              { name: "Granola", desc: "AI Notetaker for teams.", logo: "🟢" }
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3 p-4 hover:bg-slate-50/50 dark:hover:bg-zinc-850/10 cursor-pointer">
                <span className="text-xl">{c.logo}</span>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white truncate">{c.name}</h4>
                  <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-semibold truncate">{c.desc}</p>
                </div>
                <ChevronRight size={14} className="text-slate-405" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 7. AI UNICORNS (ROW 6) */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
            08
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">AI Unicorns</h2>
            <p className="text-[11px] text-slate-400 dark:text-zinc-500 font-semibold">Private companies valued at $1B+.</p>
          </div>
        </div>

        <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
          {[
            { name: "OpenAI", valuation: "$80B+", logo: "🌀", bg: "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600" },
            { name: "Anthropic", valuation: "$18.4B", logo: "▲", bg: "bg-orange-55 to-orange-100 dark:bg-orange-950/20 text-orange-700" },
            { name: "Databricks", valuation: "$43B", logo: "🧱", bg: "bg-blue-50 dark:bg-blue-950/20 text-blue-700" },
            { name: "Perplexity", valuation: "$1B", logo: "❄️", bg: "bg-teal-50 dark:bg-teal-950/20 text-teal-700" },
            { name: "xAI", valuation: "$24B", logo: "x", bg: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white" }
          ].map((u, i) => (
            <Link
              key={i}
              href={u.name === "xAI" ? "/companies" : `/companies/${u.name.toLowerCase()}`}
              className="flex items-center gap-3 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-4 rounded-xl flex-shrink-0 w-52 hover:shadow-md transition-shadow shadow-sm cursor-pointer"
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg border dark:border-zinc-800 ${u.bg}`}>
                {u.logo}
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-800 dark:text-white truncate">{u.name}</h4>
                <p className="text-[9px] text-slate-400 font-bold">{u.valuation}</p>
              </div>
            </Link>
          ))}
          <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-900 border flex items-center justify-center text-slate-450 dark:text-zinc-500 cursor-pointer flex-shrink-0 shadow-sm">
            <ChevronRight size={14} />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 8. FRONTIER AI LABS (ROW 7) */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
            09
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Frontier AI Labs</h2>
            <p className="text-[11px] text-slate-400 dark:text-zinc-500 font-semibold">Organizations advancing the state of the art.</p>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-zinc-950 p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-around gap-6 relative group">
          {[
            { name: "OpenAI", logo: "🌀" },
            { name: "Anthropic", logo: "▲" },
            { name: "Google DeepMind", logo: "🧠" },
            { name: "xAI", logo: "x" },
            { name: "Meta AI", logo: "∞" },
            { name: "SSI", logo: "⬡" }
          ].map((lab, i) => (
            <div key={i} className="flex items-center gap-2 cursor-pointer opacity-85 hover:opacity-100 transition-opacity">
              <span className="text-xl text-white">{lab.logo}</span>
              <span className="text-xs font-black text-white/90">{lab.name}</span>
            </div>
          ))}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer">
            <ChevronRight size={15} />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 9. OPEN SOURCE AI LEADERS (ROW 8) */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
            10
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Open Source AI Leaders</h2>
            <p className="text-[11px] text-slate-400 dark:text-zinc-500 font-semibold">Leading the open source movement.</p>
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-zinc-950 p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-around gap-6 relative group">
          {[
            { name: "Hugging Face", logo: "🤗", stats: "160K ★" },
            { name: "Mistral AI", logo: "Ｍ", stats: "28K ★" },
            { name: "Ollama", logo: "🦙", stats: "18K ★" },
            { name: "Together AI", logo: "torr", stats: "9K ★" },
            { name: "Databricks", logo: "🧱", stats: "6K ★" }
          ].map((os, i) => (
            <div key={i} className="flex items-center gap-2.5 cursor-pointer opacity-85 hover:opacity-100 transition-opacity">
              <span className="text-xl text-white">{os.logo}</span>
              <div className="text-left text-white/90">
                <p className="text-xs font-black leading-none">{os.name}</p>
                <span className="text-[9px] text-amber-500 font-bold mt-1 flex items-center gap-0.5"><Star size={8} className="fill-amber-500" /> {os.stats}</span>
              </div>
            </div>
          ))}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer">
            <ChevronRight size={15} />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 10. CURATED COLLECTIONS (ROW 9) */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-xs flex items-center justify-center">
            11
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Curated Collections</h2>
            <p className="text-[11px] text-slate-400 dark:text-zinc-500 font-semibold">Handpicked lists for faster discovery.</p>
          </div>
        </div>

        <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
          {[
            { name: "OpenAI Alumni Startups", count: "42 companies", bg: "from-purple-900 to-indigo-950 text-white" },
            { name: "YC AI Startups", count: "253 companies", bg: "from-orange-800 to-red-950 text-white" },
            { name: "AI Agent Leaders", count: "121 companies", bg: "from-emerald-900 to-teal-950 text-white" },
            { name: "AI Infrastructure Leaders", count: "156 companies", bg: "from-blue-900 to-cyan-950 text-white" },
            { name: "Most Funded AI Startups", count: "184 companies", bg: "from-zinc-800 to-slate-950 text-white" }
          ].map((col, i) => (
            <Link
              key={i}
              href="/companies"
              className={`flex flex-col justify-between p-5 rounded-2xl w-48 h-32 flex-shrink-0 hover:shadow-md transition-shadow shadow-sm cursor-pointer bg-gradient-to-br ${col.bg}`}
            >
              <div>
                <span className="text-[10px] tracking-wider uppercase font-black opacity-75">List</span>
                <h4 className="text-xs font-black leading-snug mt-1.5">{col.name}</h4>
              </div>
              <span className="text-[9px] font-bold opacity-80">{col.count}</span>
            </Link>
          ))}
          <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-900 border flex items-center justify-center text-slate-450 dark:text-zinc-555 cursor-pointer flex-shrink-0 shadow-sm">
            <ChevronRight size={14} />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 11. NEW & EXPLORE SECTION (ROW 10) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* 12. New on GraphOne */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5.5 h-5.5 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-[10px] flex items-center justify-center">
                12
              </div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">New on GraphOne</h3>
            </div>
            <Link href="/companies" className="text-[10px] font-bold text-slate-500 dark:text-zinc-450 hover:underline">
              View all
            </Link>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-slate-105/70 dark:border-zinc-800/80 rounded-2xl p-4 divide-y divide-slate-50 dark:divide-zinc-850 shadow-sm">
            {[
              { name: "MemGPT", desc: "AI Memory", logo: "🧠" },
              { name: "Bria AI", desc: "AI Video", logo: "🖼️" },
              { name: "Character.AI", desc: "AI Chat", logo: "💬" },
              { name: "Lindy", desc: "AI Infra", logo: "🔌" },
              { name: "Palette", desc: "AI Design", logo: "🎨" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.logo}</span>
                  <div>
                    <h4 className="text-[11.5px] font-bold text-slate-800 dark:text-white">{item.name}</h4>
                    <p className="text-[9px] text-slate-400 dark:text-zinc-550 font-bold uppercase">{item.desc}</p>
                  </div>
                </div>
                <ChevronRight size={12} className="text-slate-400" />
              </div>
            ))}
          </div>
        </div>

        {/* 13. Explore All Companies */}
        <div className="md:col-span-7 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-5.5 h-5.5 rounded-full bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-[10px] flex items-center justify-center">
              13
            </div>
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Explore All Companies</h3>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-slate-105/70 dark:border-zinc-800/80 rounded-2xl p-6 space-y-6 shadow-sm">
            
            {/* Filters Selection fields */}
            <div className="grid grid-cols-2 gap-4">
              {/* Category */}
              <div className="relative">
                <select 
                  value={exploreCategory}
                  onChange={(e) => setExploreCategory(e.target.value)}
                  className="w-full text-xs font-bold text-slate-700 dark:text-zinc-350 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-850 rounded-xl px-4 py-3 outline-none appearance-none cursor-pointer focus:border-brandRed"
                >
                  <option>Category</option>
                  <option>AI Agents</option>
                  <option>AI Coding</option>
                  <option>AI Search</option>
                  <option>AI Video</option>
                  <option>AI Voice</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[10px]">▼</div>
              </div>

              {/* Stage */}
              <div className="relative">
                <select 
                  value={exploreStage}
                  onChange={(e) => setExploreStage(e.target.value)}
                  className="w-full text-xs font-bold text-slate-700 dark:text-zinc-350 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-850 rounded-xl px-4 py-3 outline-none appearance-none cursor-pointer focus:border-brandRed"
                >
                  <option>Funding Stage</option>
                  <option>Seed</option>
                  <option>Series A</option>
                  <option>Series B</option>
                  <option>Unicorn</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[10px]">▼</div>
              </div>

              {/* Country */}
              <div className="relative">
                <select 
                  value={exploreCountry}
                  onChange={(e) => setExploreCountry(e.target.value)}
                  className="w-full text-xs font-bold text-slate-700 dark:text-zinc-350 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-850 rounded-xl px-4 py-3 outline-none appearance-none cursor-pointer focus:border-brandRed"
                >
                  <option>Country</option>
                  <option>United States</option>
                  <option>France</option>
                  <option>Netherlands</option>
                  <option>United Kingdom</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[10px]">▼</div>
              </div>

              {/* Team Size */}
              <div className="relative">
                <select 
                  value={exploreTeam}
                  onChange={(e) => setExploreTeam(e.target.value)}
                  className="w-full text-xs font-bold text-slate-700 dark:text-zinc-350 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-850 rounded-xl px-4 py-3 outline-none appearance-none cursor-pointer focus:border-brandRed"
                >
                  <option>Team Size</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>201-500</option>
                  <option>500+</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[10px]">▼</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] font-bold text-slate-400 hover:text-slate-650 cursor-pointer">
                More filters ▾
              </span>
              
              <div className="flex items-center gap-3">
                <span className="text-[11.5px] font-semibold text-slate-400">Sort by:</span>
                <select className="text-xs font-bold text-slate-700 dark:text-zinc-350 bg-transparent border-b outline-none cursor-pointer">
                  <option>Trending</option>
                  <option>Valuation</option>
                  <option>Growth rate</option>
                </select>
                
                {/* View togglers layout */}
                <div className="flex items-center gap-1 border dark:border-zinc-800 rounded-lg p-0.5">
                  <button className="p-1 rounded bg-slate-50 dark:bg-zinc-805 text-slate-600"><Grid size={12} /></button>
                  <button className="p-1 rounded text-slate-400"><List size={12} /></button>
                </div>
              </div>
            </div>

            {/* Red action explore button */}
            <Link
              href="/companies"
              className="flex items-center justify-center gap-2 w-full py-3 bg-brandRed hover:bg-brandRed-hover text-white text-xs font-black rounded-xl transition-all shadow-md shadow-brandRed/20"
            >
              Explore Companies <span className="text-[10px] opacity-75 font-semibold">(82,000+ companies)</span>
            </Link>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 12. BOTTOM NEWSLETTER BANNER */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden bg-slate-900 dark:bg-zinc-950 border border-slate-800 rounded-3xl p-8 lg:p-12 text-center text-white space-y-6 shadow-xl">
        <div className="absolute right-0 top-0 w-72 h-72 bg-gradient-to-br from-brandRed/15 to-purple-600/10 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute left-0 bottom-0 w-72 h-72 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="space-y-2 z-10 relative">
          <h2 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
            Be the first to discover what&apos;s next in AI
          </h2>
          <p className="text-xs text-zinc-400 font-semibold max-w-sm mx-auto leading-normal">
            Join thousands of builders, investors and researchers.
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto z-10 relative">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-xs font-semibold text-slate-800 dark:text-white placeholder-slate-405 dark:placeholder-zinc-550 bg-white dark:bg-zinc-900 border dark:border-zinc-800 rounded-xl px-4 py-3 outline-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto text-center px-6 py-3 bg-brandRed hover:bg-brandRed-hover text-white text-xs font-black rounded-xl transition-all shadow-sm flex-shrink-0"
          >
            {subscribed ? "Subscribed! ✨" : "Get updates"}
          </button>
        </form>
      </div>

    </div>
  );
}
