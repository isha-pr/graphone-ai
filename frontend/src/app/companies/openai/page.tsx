"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Globe, 
  MapPin, 
  Users, 
  TrendingUp, 
  Building, 
  Search, 
  Check, 
  ChevronRight,
  ArrowRight
} from "lucide-react";

export default function OpenAIDetailPage() {
  const [activeSubTab, setActiveSubTab] = useState("1. Overview");
  const [activeGraphFilter, setActiveGraphFilter] = useState("Products");

  const subNavs = [
    "1. Overview",
    "2. Timeline",
    "3. Funding",
    "4. Ownership",
    "5. Investors",
    "6. Leadership",
    "7. Products",
    "More ▾"
  ];

  return (
    <div className="bg-slate-50/50 dark:bg-zinc-950 text-slate-800 dark:text-zinc-100 min-h-screen font-sans -mx-4 md:-mx-8 -mt-4 md:-mt-8">
      
      {/* ========================================================================= */}
      {/* AIRBNB-STYLE BRANDED HEADER */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 w-full bg-white dark:bg-zinc-900 border-b border-slate-150 dark:border-zinc-800 px-4 md:px-12 py-3 flex items-center justify-between shadow-sm">
        {/* Airbnb Red Logo */}
        <div className="flex items-center gap-1.5 select-none cursor-pointer">
          <svg viewBox="0 0 32 32" className="w-8 h-8 fill-brandRed">
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533.981c.176.326.35.655.52.987l7.24 14.128c1.378 2.689 1.492 5.093.307 7.021-1.168 1.9-3.21 2.614-6.125 2.614H9.309c-2.915 0-4.957-.714-6.125-2.614-1.185-1.928-1.071-4.332.307-7.021l7.24-14.128c.17-.332.344-.661.52-.987l.533-.981C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.128.594-3.033 2.207l-.538.99c-.16.295-.318.592-.474.896l-7.24 14.13c-1.042 2.033-1.082 3.655-.262 4.992.83 1.353 2.453 1.785 4.856 1.785h13.384c2.403 0 4.026-.432 4.856-1.785.82-1.337.78-2.959-.262-4.992l-7.24-14.13c-.156-.304-.314-.601-.474-.896l-.538-.99C18.128 3.594 17.239 3 16 3zm0 8c3.238 0 5.875 2.637 5.875 5.875s-2.637 5.875-5.875 5.875-5.875-2.637-5.875-5.875S12.762 11 16 11zm0 2c-2.14 0-3.875 1.735-3.875 3.875s1.735 3.875 3.875 3.875 3.875-1.735 3.875-3.875S18.14 13 16 13z" />
          </svg>
          <span className="font-black text-xl tracking-tight text-brandRed font-mono">
            airbnb
          </span>
        </div>

        {/* Central search trigger bar */}
        <div className="hidden md:flex items-center gap-3 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-full py-2 pl-5 pr-2 w-full max-w-md shadow-sm">
          <span className="text-xs font-bold text-slate-800 dark:text-zinc-200 flex-1 truncate">
            Search for companies, people, investors, and more...
          </span>
          <button className="w-8 h-8 rounded-full bg-brandRed text-white flex items-center justify-center">
            <Search size={14} />
          </button>
        </div>

        {/* Right side navigation links */}
        <div className="flex items-center gap-5">
          <span className="text-xs font-bold text-slate-650 dark:text-zinc-350 cursor-pointer hover:text-slate-900">Explore</span>
          <span className="text-xs font-bold text-slate-650 dark:text-zinc-350 cursor-pointer hover:text-slate-900">Collections</span>
          <span className="text-xs font-bold text-slate-650 dark:text-zinc-350 cursor-pointer hover:text-slate-900">Log in</span>
          <button className="bg-brandRed hover:bg-brandRed-hover text-white text-xs font-black px-4 py-2 rounded-lg transition-colors">
            Sign up
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* SUB-NAVBAR CONTROLS */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-zinc-900 border-b border-slate-150 dark:border-zinc-800 px-4 md:px-12 py-1.5 flex items-center gap-5 overflow-x-auto scrollbar-none shadow-sm">
        {subNavs.map((nav) => {
          const isActive = activeSubTab === nav;
          return (
            <button
              key={nav}
              onClick={() => setActiveSubTab(nav)}
              className={`text-xs font-black py-2.5 px-1.5 relative flex-shrink-0 transition-colors ${
                isActive 
                  ? "text-brandRed" 
                  : "text-slate-500 dark:text-zinc-400 hover:text-slate-900"
              }`}
            >
              {nav}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brandRed" />
              )}
            </button>
          );
        })}
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 space-y-12">
        
        {/* ========================================================================= */}
        {/* 1. OVERVIEW PROFILE CONTAINER */}
        {/* ========================================================================= */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800/80 rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row gap-8 shadow-sm relative overflow-hidden">
          
          {/* Subtle logo backing styling */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-br from-brandRed/5 to-pink-500/5 blur-3xl pointer-events-none rounded-full" />

          {/* Logo container */}
          <div className="w-24 h-24 lg:w-28 lg:h-28 bg-black rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-extrabold text-5xl select-none relative shadow-md">
            🌀
          </div>

          {/* Text and stats */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl lg:text-3.5xl font-black text-slate-900 dark:text-white tracking-tight">OpenAI</h1>
              <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-black" title="Verified">✓</span>
            </div>

            <p className="text-slate-600 dark:text-zinc-350 text-sm font-semibold leading-relaxed max-w-2xl">
              AI research and deployment company building safe and beneficial artificial general intelligence.
            </p>

            {/* Metadata columns list */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3.5 gap-x-6 text-[11px] font-bold text-slate-500 dark:text-zinc-450 border-t border-slate-100 dark:border-zinc-850 pt-4">
              <div className="flex items-center gap-1.5 hover:text-brandRed transition-colors">
                <Globe size={13} /> <a href="https://openai.com" target="_blank" rel="noreferrer">openai.com ↗</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Building size={13} /> Founded: 2015
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={13} /> San Francisco, CA, USA
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={13} /> 1,000+ employees (est.)
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp size={13} /> Artificial Intelligence
              </div>
              <div className="flex items-center gap-1.5">
                <Building size={13} /> Privately Held
              </div>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-2">
              {/* X / Twitter */}
              <a href="#" className="p-2 border dark:border-zinc-800 hover:border-slate-300 rounded-lg text-slate-450 hover:text-slate-700 bg-slate-50 dark:bg-zinc-950 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="p-2 border dark:border-zinc-800 hover:border-slate-300 rounded-lg text-slate-450 hover:text-slate-700 bg-slate-50 dark:bg-zinc-950 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="p-2 border dark:border-zinc-800 hover:border-slate-300 rounded-lg text-slate-450 hover:text-slate-700 bg-slate-50 dark:bg-zinc-950 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.528 3.545 12 3.545 12 3.545s-7.528 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.022 0 12 0 12s0 3.978.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.86.508 9.388.508 9.388.508s7.528 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.978 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="#" className="p-2 border dark:border-zinc-800 hover:border-slate-300 rounded-lg text-slate-450 hover:text-slate-700 bg-slate-50 dark:bg-zinc-950 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Artificial Intelligence", "Machine Learning", "Generative AI", "Foundation Models", "AI Research"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black text-[9.5px] uppercase tracking-wider rounded-full border border-brandRed/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. TIMELINE ROADMAP */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">2. Timeline</h2>
            <div className="flex items-center gap-1 text-slate-400">
              <button className="p-1 rounded-lg border hover:bg-slate-50 dark:border-zinc-800"><ChevronRight size={14} className="rotate-180" /></button>
              <button className="p-1 rounded-lg border hover:bg-slate-50 dark:border-zinc-800"><ChevronRight size={14} /></button>
            </div>
          </div>

          <div className="relative bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 p-6 rounded-3xl overflow-x-auto scrollbar-none shadow-sm">
            <div className="min-w-[900px] py-4 relative flex items-center justify-between">
              
              {/* Connector line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-150 dark:bg-zinc-800 -translate-y-1/2 z-0" />

              {/* Timeline nodes */}
              {[
                { year: "2015", event: "OpenAI Founded" },
                { year: "2019", event: "GPT-2 Released" },
                { year: "2020", event: "GPT-3 Released" },
                { year: "2022", event: "ChatGPT Launched" },
                { year: "2023", event: "GPT-4 Released" },
                { year: "2024", event: "Sora Released" },
                { year: "2025", event: "Openstar Released" }
              ].map((node, i) => (
                <div key={i} className="flex flex-col items-center space-y-3 z-10 bg-white dark:bg-zinc-900 px-4">
                  <span className="text-[10px] font-black text-slate-450">{node.year}</span>
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-brandRed bg-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-brandRed" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-[10px] font-black text-slate-800 dark:text-white leading-tight">{node.event.split(" ")[0]}</h4>
                    <p className="text-[9px] text-slate-400 dark:text-zinc-550 font-bold uppercase mt-0.5">{node.event.split(" ").slice(1).join(" ")}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3 & 4. FUNDING HISTORY & OWNERSHIP DONUT */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Section 3: Funding Timeline */}
          <div className="space-y-4">
            <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">3. Funding Timeline</h2>
            <div className="bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 rounded-3xl p-5 shadow-sm space-y-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-zinc-850 pb-2 text-[10px] font-bold tracking-wider text-slate-400 dark:text-zinc-550 uppercase">
                    <th className="py-2">Round</th>
                    <th className="py-2">Date</th>
                    <th className="py-2">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-[11px] font-bold text-slate-700 dark:text-zinc-350">
                  <tr className="border-b border-slate-50 dark:border-zinc-850/40">
                    <td className="py-2.5">Seed</td>
                    <td className="py-2.5">2015</td>
                    <td className="py-2.5 text-brandRed">$1.0B</td>
                  </tr>
                  <tr className="border-b border-slate-50 dark:border-zinc-850/40">
                    <td className="py-2.5">Series A</td>
                    <td className="py-2.5">2019</td>
                    <td className="py-2.5 text-brandRed">$1.0B</td>
                  </tr>
                  <tr className="border-b border-slate-50 dark:border-zinc-850/40">
                    <td className="py-2.5">Series B</td>
                    <td className="py-2.5">2021</td>
                    <td className="py-2.5 text-brandRed">$300M</td>
                  </tr>
                  <tr className="border-b border-slate-50 dark:border-zinc-850/40">
                    <td className="py-2.5">Growth</td>
                    <td className="py-2.5">2023</td>
                    <td className="py-2.5 text-brandRed">$10B</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">Growth II</td>
                    <td className="py-2.5">2025</td>
                    <td className="py-2.5 text-brandRed">$6.0B</td>
                  </tr>
                </tbody>
              </table>
              <Link href="/funding" className="inline-flex items-center gap-1.5 text-[10px] font-black text-brandRed hover:underline pt-2">
                View funding history <ArrowRight size={11} />
              </Link>
            </div>
          </div>

          {/* Section 4: Ownership */}
          <div className="space-y-4">
            <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">4. Ownership</h2>
            <div className="bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-around gap-6">
              
              {/* Custom SVG Donut chart */}
              <div className="relative w-36 h-36">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {/* Segment 1: Microsoft (49%) -> stroke-dasharray="49 100" stroke-dashoffset="0" */}
                  <circle cx="50" cy="50" r="38" className="stroke-rose-500 fill-none stroke-[16]" strokeDasharray="117 238.7" strokeDashoffset="0" />
                  
                  {/* Segment 2: Employees (18%) -> offset = 49 */}
                  <circle cx="50" cy="50" r="38" className="stroke-pink-400 fill-none stroke-[16]" strokeDasharray="43 238.7" strokeDashoffset="-117" />
                  
                  {/* Segment 3: Founders (12%) -> offset = 49 + 18 = 67 */}
                  <circle cx="50" cy="50" r="38" className="stroke-amber-400 fill-none stroke-[16]" strokeDasharray="29 238.7" strokeDashoffset="-160" />
                  
                  {/* Segment 4: Investors (21%) -> offset = 67 + 12 = 79 */}
                  <circle cx="50" cy="50" r="38" className="stroke-teal-400 fill-none stroke-[16]" strokeDasharray="50 238.7" strokeDashoffset="-189" />
                </svg>
                <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white dark:bg-zinc-900 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-black text-slate-400">Total</span>
                  <span className="text-xs font-black text-slate-900 dark:text-white">100%</span>
                </div>
              </div>

              {/* Legend checklist */}
              <div className="space-y-2 text-[10px] font-black text-slate-700 dark:text-zinc-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-rose-500 rounded" />
                  <span className="w-20 truncate">Microsoft</span>
                  <span>49%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-pink-400 rounded" />
                  <span className="w-20 truncate">Employees</span>
                  <span>18%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber-400 rounded" />
                  <span className="w-20 truncate">Founders</span>
                  <span>12%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-teal-400 rounded" />
                  <span className="w-20 truncate">Investors</span>
                  <span>21%</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. INVESTORS ROSTER */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">5. Investors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
            
            {/* Seed Investors */}
            <div className="space-y-3">
              <h3 className="text-[10.5px] font-bold text-slate-450 uppercase border-b pb-1.5">Seed Investors</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs font-bold text-slate-750 dark:text-zinc-300">
                  <span className="text-orange-500 font-extrabold w-5 h-5 flex items-center justify-center bg-orange-50 rounded">Y</span> Y Combinator
                </li>
                <li className="flex items-center gap-2 text-xs font-bold text-slate-750 dark:text-zinc-300">
                  <span className="text-red-500 font-extrabold w-5 h-5 flex items-center justify-center bg-red-50 rounded">👨‍💼</span> Sam Altman
                </li>
                <li className="flex items-center gap-2 text-xs font-bold text-slate-750 dark:text-zinc-300">
                  <span className="text-blue-500 font-extrabold w-5 h-5 flex items-center justify-center bg-blue-50 rounded">🤵</span> Peter Thiel
                </li>
              </ul>
            </div>

            {/* Series Investors */}
            <div className="space-y-3">
              <h3 className="text-[10.5px] font-bold text-slate-450 uppercase border-b pb-1.5">Series Investors</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs font-bold text-slate-750 dark:text-zinc-300">
                  <span className="text-green-600 font-extrabold w-5 h-5 flex items-center justify-center bg-green-50 rounded">🌲</span> Sequoia Capital
                </li>
                <li className="flex items-center gap-2 text-xs font-bold text-slate-750 dark:text-zinc-300">
                  <span className="text-purple-650 font-extrabold w-5 h-5 flex items-center justify-center bg-purple-50 rounded">a</span> Andreessen Horowitz
                </li>
              </ul>
            </div>

            {/* Growth Investors */}
            <div className="space-y-3">
              <h3 className="text-[10.5px] font-bold text-slate-450 uppercase border-b pb-1.5">Growth Investors</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs font-bold text-slate-750 dark:text-zinc-300">
                  <span className="text-rose-500 font-extrabold w-5 h-5 flex items-center justify-center bg-rose-50 rounded">🌀</span> Microsoft
                </li>
                <li className="flex items-center gap-2 text-xs font-bold text-slate-750 dark:text-zinc-300">
                  <span className="text-blue-500 font-extrabold w-5 h-5 flex items-center justify-center bg-blue-50 rounded">🏦</span> SoftBank
                </li>
                <li className="flex items-center gap-2 text-xs font-bold text-slate-750 dark:text-zinc-300">
                  <span className="text-yellow-600 font-extrabold w-5 h-5 flex items-center justify-center bg-yellow-50 rounded">🐅</span> Tiger Global
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. FOUNDERS & LEADERSHIP */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">6. Founders & Leadership</h2>
            <Link href="/leadership" className="text-[10.5px] font-black text-brandRed hover:underline">
              View all leadership →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Sam Altman", role: "CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" },
              { name: "Greg Brockman", role: "President & Co-founder", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80" },
              { name: "Ilya Sutskever", role: "Chief Scientist & Co-founder", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80" }
            ].map((lead, i) => (
              <div key={i} className="flex items-center gap-4 bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 p-4 rounded-2xl shadow-sm">
                <img src={lead.img} alt={lead.name} className="w-11 h-11 rounded-full object-cover border dark:border-zinc-800" />
                <div>
                  <h4 className="text-xs font-black text-slate-800 dark:text-white">{lead.name}</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">{lead.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 7. PRODUCTS GRID */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">7. Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { name: "ChatGPT", desc: "Conversational assistant", logo: "🌀", bg: "bg-emerald-500 text-white" },
              { name: "GPT-4o", desc: "Multimodal AI model", logo: "▲", bg: "bg-purple-600 text-white" },
              { name: "Codex", desc: "AI for software dev", logo: "💻", bg: "bg-zinc-900 text-white" },
              { name: "Sora", desc: "Text-to-video model", logo: "🎬", bg: "bg-indigo-650 text-white" },
              { name: "Operator", desc: "AI agent for tasks", logo: "⚙️", bg: "bg-blue-600 text-white" },
              { name: "Agents", desc: "Autonomous AI agents", logo: "🤖", bg: "bg-teal-650 text-white" }
            ].map((p, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 p-4 rounded-2xl shadow-sm flex flex-col justify-between h-36">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${p.bg} shadow-sm`}>
                  {p.logo}
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-850 dark:text-white">{p.name}</h4>
                  <p className="text-[9px] text-slate-400 dark:text-zinc-550 font-bold leading-tight mt-0.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 8 & 9. ACQUISITIONS & INVESTMENTS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Acquisitions */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">8. Acquisitions</h2>
              <Link href="/acquisitions" className="text-[10px] font-black text-brandRed hover:underline">
                View all acquisitions →
              </Link>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-slate-155/70 dark:border-zinc-800 rounded-3xl p-5 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-zinc-850 pb-2 text-[9.5px] font-bold tracking-wider text-slate-400 dark:text-zinc-550 uppercase">
                    <th className="py-2">Company</th>
                    <th className="py-2">Date</th>
                    <th className="py-2">Focus</th>
                  </tr>
                </thead>
                <tbody className="text-[11px] font-bold text-slate-700 dark:text-zinc-350">
                  <tr className="border-b border-slate-50 dark:border-zinc-850/40">
                    <td className="py-2.5 flex items-center gap-1.5"><span className="text-[9px] w-4.5 h-4.5 rounded bg-blue-500 text-white flex items-center justify-center">R</span> Rockset</td>
                    <td className="py-2.5">2024</td>
                    <td className="py-2.5 text-slate-500">Database technology</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 flex items-center gap-1.5"><span className="text-[9px] w-4.5 h-4.5 rounded bg-zinc-900 text-white flex items-center justify-center">○</span> IRI</td>
                    <td className="py-2.5">2022</td>
                    <td className="py-2.5 text-slate-500">AI design startup</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Investments */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">9. Investments</h2>
              <Link href="/investments" className="text-[10px] font-black text-brandRed hover:underline">
                View all investments →
              </Link>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-slate-155/70 dark:border-zinc-800 rounded-3xl p-5 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-zinc-850 pb-2 text-[9.5px] font-bold tracking-wider text-slate-400 dark:text-zinc-550 uppercase">
                    <th className="py-2">Company</th>
                    <th className="py-2">Focus</th>
                    <th className="py-2">Stage</th>
                  </tr>
                </thead>
                <tbody className="text-[11px] font-bold text-slate-700 dark:text-zinc-350">
                  <tr className="border-b border-slate-50 dark:border-zinc-850/40">
                    <td className="py-2.5 flex items-center gap-1.5"><span className="text-[9px] w-4.5 h-4.5 rounded bg-orange-500 text-white flex items-center justify-center">🤖</span> Figure</td>
                    <td className="py-2.5 text-slate-500">Humanoid Robotics</td>
                    <td className="py-2.5">Series B</td>
                  </tr>
                  <tr className="border-b border-slate-50 dark:border-zinc-850/40">
                    <td className="py-2.5 flex items-center gap-1.5"><span className="text-[9px] w-4.5 h-4.5 rounded bg-blue-600 text-white flex items-center justify-center">⚖️</span> Harvey</td>
                    <td className="py-2.5 text-slate-500">Legal AI</td>
                    <td className="py-2.5">Series C</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 flex items-center gap-1.5"><span className="text-[9px] w-4.5 h-4.5 rounded bg-teal-500 text-white flex items-center justify-center">🧠</span> Physical Intelligence</td>
                    <td className="py-2.5 text-slate-500">Robotics AI</td>
                    <td className="py-2.5">Series A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 10. COMPETITOR LANDSCAPE */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">10. Competitor Landscape</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
            
            {/* Direct Competitors */}
            <div className="space-y-3">
              <h3 className="text-[10.5px] font-bold text-slate-450 uppercase border-b pb-1.5">Direct Competitors</h3>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "Anthropic", logo: "▲" },
                  { name: "Google DeepMind", logo: "🧠" },
                  { name: "xAI", logo: "x" },
                  { name: "Mistral AI", logo: "Ｍ" },
                  { name: "Cohere", logo: "C" }
                ].map((c, i) => (
                  <span key={i} className="px-3.5 py-1.5 bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:border-slate-350">
                    <span className="text-slate-400 font-extrabold">{c.logo}</span> {c.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Adjoint Competitors */}
            <div className="space-y-3">
              <h3 className="text-[10.5px] font-bold text-slate-450 uppercase border-b pb-1.5">Adjoint Competitors</h3>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "Perplexity", logo: "❄️" },
                  { name: "Cursor", logo: "💎" },
                  { name: "Feedly", logo: "🟢" }
                ].map((c, i) => (
                  <span key={i} className="px-3.5 py-1.5 bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:border-slate-350">
                    <span className="text-slate-400 font-extrabold">{c.logo}</span> {c.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 11. AI ECOSYSTEM GRAPH */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">11. AI Ecosystem Graph</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 rounded-3xl p-6 shadow-sm min-h-[400px]">
            
            {/* Interactive Filters on the Left */}
            <div className="space-y-2 lg:col-span-1 border-r border-slate-100 dark:border-zinc-850 pr-4">
              <h3 className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider mb-4">Graph Filters</h3>
              {[
                "Products",
                "Investors",
                "Acquisitions",
                "Investments",
                "Competitors",
                "Alumni / Talent Flow",
                "Research"
              ].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveGraphFilter(f)}
                  className={`flex items-center gap-2 w-full text-left text-xs font-black px-2 py-2.5 rounded-xl transition-all ${
                    activeGraphFilter === f 
                      ? "bg-brandRed-light dark:bg-brandRed/10 text-brandRed font-black" 
                      : "text-slate-500 hover:bg-slate-50 dark:hover:bg-zinc-850/50"
                  }`}
                >
                  <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                    activeGraphFilter === f ? "border-brandRed bg-brandRed text-white" : "border-slate-300 bg-white"
                  }`}>
                    {activeGraphFilter === f && <Check size={10} />}
                  </div>
                  <span>{f}</span>
                </button>
              ))}
            </div>

            {/* SVG Tree Connection Canvas on the Right */}
            <div className="lg:col-span-3 flex items-center justify-center p-4 relative overflow-hidden bg-slate-50/20 dark:bg-zinc-950/20 rounded-2xl select-none">
              
              {/* SVG Connector drawing lines */}
              <svg className="absolute inset-0 w-full h-full stroke-slate-200 dark:stroke-zinc-800 fill-none stroke-[1.5]" viewBox="0 0 600 350">
                {/* Lines to Products */}
                <path d="M300,175 Q200,80 180,60" />
                <path d="M300,175 Q200,110 190,110" />
                <path d="M300,175 Q200,140 180,160" />

                {/* Lines to Investors */}
                <path d="M300,175 Q240,250 160,250" />
                <path d="M300,175 Q260,280 190,290" />

                {/* Lines to Competitors */}
                <path d="M300,175 Q400,90 420,90" />
                <path d="M300,175 Q400,130 430,130" />
                <path d="M300,175 Q420,230 440,240" />
              </svg>

              {/* Node Badges */}
              <div className="relative w-full h-80">
                {/* Center Node: OpenAI */}
                <div className="absolute inset-0 m-auto w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-3xl shadow-lg z-10">
                  🌀
                </div>

                {/* Category 1: Products */}
                <div className="absolute top-8 left-20 px-3 py-1 bg-white dark:bg-zinc-900 border dark:border-zinc-800 rounded-lg text-[9px] font-black text-slate-800 dark:text-zinc-200 shadow">
                  ChatGPT
                </div>
                <div className="absolute top-20 left-24 px-3 py-1 bg-white dark:bg-zinc-900 border dark:border-zinc-800 rounded-lg text-[9px] font-black text-slate-800 dark:text-zinc-200 shadow">
                  GPT-4o
                </div>
                <div className="absolute top-32 left-20 px-3 py-1 bg-white dark:bg-zinc-900 border dark:border-zinc-800 rounded-lg text-[9px] font-black text-slate-800 dark:text-zinc-200 shadow">
                  Sora
                </div>

                {/* Category 2: Investors */}
                <div className="absolute bottom-16 left-12 px-3 py-1 bg-white dark:bg-zinc-900 border dark:border-zinc-800 rounded-lg text-[9px] font-black text-slate-850 dark:text-zinc-200 shadow flex items-center gap-1">
                  <span className="text-red-500">🌀</span> Microsoft
                </div>
                <div className="absolute bottom-6 left-28 px-3 py-1 bg-white dark:bg-zinc-900 border dark:border-zinc-800 rounded-lg text-[9px] font-black text-slate-850 dark:text-zinc-200 shadow flex items-center gap-1">
                  <span className="text-green-600">🌲</span> Sequoia Capital
                </div>

                {/* Category 3: Competitors */}
                <div className="absolute top-12 right-24 px-3 py-1 bg-white dark:bg-zinc-900 border dark:border-zinc-800 rounded-lg text-[9px] font-black text-slate-850 dark:text-zinc-200 shadow">
                  Anthropic
                </div>
                <div className="absolute top-24 right-20 px-3 py-1 bg-white dark:bg-zinc-900 border dark:border-zinc-800 rounded-lg text-[9px] font-black text-slate-850 dark:text-zinc-200 shadow">
                  Google DeepMind
                </div>
                <div className="absolute bottom-20 right-20 px-3 py-1 bg-white dark:bg-zinc-900 border dark:border-zinc-800 rounded-lg text-[9px] font-black text-slate-850 dark:text-zinc-200 shadow">
                  Mistral AI
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 12 & 13. NEWS & OPEN JOBS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Section 12: News */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">12. News</h2>
              <Link href="/news" className="text-[10px] font-black text-brandRed hover:underline">
                View all news →
              </Link>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 rounded-3xl p-5 shadow-sm divide-y divide-slate-50 dark:divide-zinc-850">
              {[
                { title: "OpenAI launches GPT-4o with improved multimodal capabilities.", date: "May 13, 2025" },
                { title: "OpenAI raises $10B in new funding round led by SoftBank.", date: "Mar 21, 2025" },
                { title: "OpenAI releases Openstar, an AI agent for everyday tasks.", date: "Jan 23, 2025" }
              ].map((news, idx) => (
                <div key={idx} className="py-3 first:pt-0 last:pb-0 cursor-pointer group">
                  <h4 className="text-[11.5px] font-black text-slate-800 dark:text-white leading-normal group-hover:text-brandRed transition-colors">
                    {news.title}
                  </h4>
                  <span className="text-[9px] text-slate-400 dark:text-zinc-550 font-bold block mt-1">{news.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 13: Open Jobs */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">13. Open Jobs</h2>
              <Link href="/jobs" className="text-[10px] font-black text-brandRed hover:underline">
                View all jobs →
              </Link>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 rounded-3xl p-5 shadow-sm divide-y divide-slate-50 dark:divide-zinc-850">
              {[
                { role: "Research Scientist", team: "Research", loc: "San Francisco, CA", type: "Full-time" },
                { role: "Software Engineer, Infrastructure", team: "Engineering", loc: "San Francisco, CA", type: "Full-time" },
                { role: "Product Manager, ChatGPT", team: "Product", loc: "San Francisco, CA", type: "Full-time" }
              ].map((job, idx) => (
                <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between cursor-pointer group">
                  <div className="min-w-0">
                    <h4 className="text-[11.5px] font-black text-slate-800 dark:text-white group-hover:text-brandRed transition-colors truncate">
                      {job.role}
                    </h4>
                    <p className="text-[9.5px] text-slate-400 dark:text-zinc-550 font-bold mt-0.5">{job.team} • {job.loc}</p>
                  </div>
                  <span className="text-[9px] font-bold text-slate-450 bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 px-2 py-0.5 rounded uppercase">{job.type}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 14 & 15. RESEARCH PAPERS & PATENTS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Section 14: Research Papers */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">14. Research Papers</h2>
              <Link href="/research" className="text-[10px] font-black text-brandRed hover:underline">
                View all papers →
              </Link>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 rounded-3xl p-5 shadow-sm divide-y divide-slate-50 dark:divide-zinc-850">
              {[
                { title: "GPT-4 Technical Report", date: "Mar 2023" },
                { title: "GPT-2 System Card", date: "May 2019" },
                { title: "Sora: A Review of Diffusion Video Generation", date: "Feb 2024" }
              ].map((p, idx) => (
                <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between cursor-pointer group">
                  <h4 className="text-[11.5px] font-black text-slate-800 dark:text-white leading-normal group-hover:text-brandRed transition-colors pr-4">
                    {p.title}
                  </h4>
                  <span className="text-[9px] text-slate-455 dark:text-zinc-555 font-bold flex-shrink-0">{p.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 15: Patents */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">15. Patents</h2>
              <Link href="/patents" className="text-[10px] font-black text-brandRed hover:underline">
                View all patents →
              </Link>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 rounded-3xl p-5 shadow-sm divide-y divide-slate-50 dark:divide-zinc-850">
              {[
                { patent: "System for training large language models", category: "AI/ML", date: "2023-01-21" },
                { patent: "Methods for aligning AI models", category: "AI Safety", date: "2022-12-28" },
                { patent: "Efficient inference for transformer models", category: "AI/ML", date: "2021-11-02" }
              ].map((p, idx) => (
                <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between cursor-pointer group">
                  <div className="min-w-0 pr-4">
                    <h4 className="text-[11.5px] font-black text-slate-800 dark:text-white group-hover:text-brandRed transition-colors truncate">
                      {p.patent}
                    </h4>
                    <p className="text-[9px] text-slate-400 dark:text-zinc-555 font-bold mt-0.5">{p.category}</p>
                  </div>
                  <span className="text-[9px] text-slate-455 dark:text-zinc-555 font-bold flex-shrink-0">{p.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 16, 17 & 18. ALUMNI, COLLECTIONS & SIMILAR */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Section 16: Alumni Companies */}
          <div className="space-y-4">
            <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">16. Alumni Companies</h2>
            <div className="bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 rounded-3xl p-5 shadow-sm divide-y divide-slate-50 dark:divide-zinc-850">
              {[
                { name: "Anthropic", logo: "▲" },
                { name: "Perplexity", logo: "❄️" },
                { name: "Thinking Machines Lab", logo: "🧠" },
                { name: "Safe Superintelligence", logo: "🛡️" },
                { name: "World Labs", logo: "🌍" },
                { name: "xAI", logo: "x" }
              ].map((c, idx) => (
                <div key={idx} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0 cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-sm">{c.logo}</span>
                    <span className="text-xs font-black text-slate-800 dark:text-white group-hover:text-brandRed transition-colors">{c.name}</span>
                  </div>
                  <ChevronRight size={12} className="text-slate-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Section 17: Collections */}
          <div className="space-y-4">
            <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">17. Collections</h2>
            <div className="bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 rounded-3xl p-5 shadow-sm divide-y divide-slate-50 dark:divide-zinc-850">
              {[
                "AI Labs",
                "Foundation Models",
                "Generative AI",
                "Top AI Companies",
                "YC AI Companies"
              ].map((c, idx) => (
                <div key={idx} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0 cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-xs">📂</span>
                    <span className="text-xs font-black text-slate-800 dark:text-white group-hover:text-brandRed transition-colors">{c}</span>
                  </div>
                  <ChevronRight size={12} className="text-slate-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Section 18: Similar Companies */}
          <div className="space-y-4">
            <h2 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">18. Similar Companies</h2>
            <div className="bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 rounded-3xl p-5 shadow-sm divide-y divide-slate-50 dark:divide-zinc-850">
              {[
                { name: "Anthropic", logo: "▲" },
                { name: "Google DeepMind", logo: "🧠" },
                { name: "Mistral AI", logo: "Ｍ" },
                { name: "Cohere", logo: "C" },
                { name: "xAI", logo: "x" }
              ].map((c, idx) => (
                <div key={idx} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0 cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-sm">{c.logo}</span>
                    <span className="text-xs font-black text-slate-800 dark:text-white group-hover:text-brandRed transition-colors">{c.name}</span>
                  </div>
                  <ChevronRight size={12} className="text-slate-400" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* AIRBNB-STYLE FOOTER */}
      {/* ========================================================================= */}
      <footer className="w-full bg-white dark:bg-zinc-900 border-t border-slate-150 dark:border-zinc-800 px-4 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-black text-slate-450 dark:text-zinc-500 shadow-inner">
        <div className="flex items-center gap-2 select-none">
          <svg viewBox="0 0 32 32" className="w-5 h-5 fill-brandRed">
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533.981c.176.326.35.655.52.987l7.24 14.128c1.378 2.689 1.492 5.093.307 7.021-1.168 1.9-3.21 2.614-6.125 2.614H9.309c-2.915 0-4.957-.714-6.125-2.614-1.185-1.928-1.071-4.332.307-7.021l7.24-14.128c.17-.332.344-.661.52-.987l.533-.981C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.128.594-3.033 2.207l-.538.99c-.16.295-.318.592-.474.896l-7.24 14.13c-1.042 2.033-1.082 3.655-.262 4.992.83 1.353 2.453 1.785 4.856 1.785h13.384c2.403 0 4.026-.432 4.856-1.785.82-1.337.78-2.959-.262-4.992l-7.24-14.13c-.156-.304-.314-.601-.474-.896l-.538-.99C18.128 3.594 17.239 3 16 3zm0 8c3.238 0 5.875 2.637 5.875 5.875s-2.637 5.875-5.875 5.875-5.875-2.637-5.875-5.875S12.762 11 16 11zm0 2c-2.14 0-3.875 1.735-3.875 3.875s1.735 3.875 3.875 3.875 3.875-1.735 3.875-3.875S18.14 13 16 13z" />
          </svg>
          <span>© 2026 Airbnb, Inc. All rights reserved. • Privacy • Terms • Sitemap</span>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span className="cursor-pointer hover:underline">English (US)</span>
          <span className="cursor-pointer hover:underline">$ USD</span>
        </div>
      </footer>

    </div>
  );
}
