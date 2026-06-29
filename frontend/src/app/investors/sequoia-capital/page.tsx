"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Calendar, 
  Bookmark, 
  ChevronRight, 
  ChevronLeft, 
  ArrowRight, 
  FileText
} from "lucide-react";

export default function SequoiaCapitalProfile() {
  const [isFollowed, setIsFollowed] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const teamMembers = [
    { name: "Roelof Botha", role: "Managing Partner", img: "/images/portrait_roelof_botha.png" },
    { name: "Pat Grady", role: "Managing Partner", img: "/images/portrait_pat_grady.png" },
    { name: "Doug Leone", role: "Managing Partner", img: "/images/portrait_doug_leone.png" },
    { name: "Alfred Lin", role: "Partner", img: "/images/portrait_alfred_lin.png" }
  ];

  const highlights = [
    { title: "Deals", subtitle: "Last 90 Days", val: "+12", color: "text-red-500 bg-red-50 dark:bg-red-950/20 border-red-100 dark:border-red-900/10" },
    { title: "Lead", subtitle: "Investments", val: "+4", color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/10" },
    { title: "Series A", subtitle: "Most Active Stage", val: "Series A", color: "text-blue-600 bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/10" },
    { title: "Top Partner", subtitle: "a16z", val: "a16z", color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/10" },
    { title: "Deals", subtitle: "YTD", val: "38", color: "text-purple-600 bg-purple-50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/10" },
    { title: "Top Focus Area", subtitle: "Agents", val: "Agents", color: "text-rose-500 bg-rose-50 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/10" }
  ];

  const recentInvestments = [
    { name: "Harvey", sector: "Legal AI", stage: "Series D", amount: "$150M", date: "May 2024", role: "Lead Investor", bg: "from-slate-900 to-zinc-950", icon: "⚖️" },
    { name: "Luma AI", sector: "AI Video", stage: "Series C", amount: "$90M", date: "Apr 2024", role: "Co-led", bg: "from-blue-900 to-indigo-950", icon: "🎥" },
    { name: "Mistral AI", sector: "Foundation Models", stage: "Series B", amount: "$60M", date: "Mar 2024", role: "Lead Investor", bg: "from-rose-900 to-orange-950", icon: "🌀" },
    { name: "Perplexity", sector: "AI Search", stage: "Series B", amount: "$73.6M", date: "Jan 2024", role: "Co-led", bg: "from-teal-900 to-zinc-950", icon: "❄️" },
    { name: "Clarity", sector: "AI Platform", stage: "Series A", amount: "$15M", date: "Jan 2024", role: "Lead Investor", bg: "from-purple-900 to-zinc-950", icon: "🛡️" }
  ];

  const nextCarousel = () => {
    if (carouselIndex < recentInvestments.length - 3) {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  const prevCarousel = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    }
  };

  return (
    <div className="space-y-10 pb-20">
      
      {/* ========================================================================= */}
      {/* HEADER BREADCRUMB */}
      {/* ========================================================================= */}
      <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 dark:text-zinc-550">
        <Link href="/" className="hover:text-slate-600">Home</Link>
        <span>&gt;</span>
        <Link href="/investors" className="hover:text-slate-600">Investors</Link>
        <span>&gt;</span>
        <span className="text-slate-800 dark:text-zinc-305 font-black">Sequoia Capital</span>
      </div>

      {/* ========================================================================= */}
      {/* PROFILE BLOCK CARD */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 lg:p-8 flex flex-col lg:flex-row justify-between gap-8 shadow-sm">
        
        {/* Left main info details */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sequoia square green logo */}
          <div className="w-24 h-24 rounded-2xl bg-[#0F3223] flex items-center justify-center text-5xl select-none flex-shrink-0 shadow-inner">
            🌲
          </div>
          
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-100 dark:bg-emerald-950/30 px-2.5 py-0.5 rounded flex items-center gap-1">
                  ✓ Verified Investor
                </span>
              </div>
              <h1 className="text-2.5xl md:text-3.5xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                Sequoia Capital
                <span className="w-5 h-5 rounded-full bg-brandRed text-white text-[10px] flex items-center justify-center font-bold">✓</span>
              </h1>
              <p className="text-sm font-extrabold text-slate-500 dark:text-zinc-400">
                Backing the daring from idea to iconic.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-slate-400 dark:text-zinc-500">
              <span className="flex items-center gap-1">
                <MapPin size={14} /> Menlo Park, California, USA
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} /> Founded in 1972
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {["VC", "Growth Equity", "Private Equity"].map((badge, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-zinc-800 text-[10.5px] font-bold text-slate-600 dark:text-zinc-350 rounded-full">
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button 
                onClick={() => setIsFollowed(!isFollowed)}
                className={`text-[12px] font-black px-6 py-2.5 rounded-full transition-all flex items-center gap-1.5 shadow-sm ${
                  isFollowed 
                  ? "bg-slate-200 dark:bg-zinc-850 text-slate-800 dark:text-white"
                  : "bg-brandRed hover:bg-brandRed-hover text-white shadow-brandRed/20"
                }`}
              >
                {isFollowed ? "Following" : "Follow Investor"}
              </button>
              
              <button className="w-9 h-9 rounded-full border dark:border-zinc-800 flex items-center justify-center text-slate-400 hover:text-slate-700 bg-white dark:bg-zinc-900 shadow-sm transition-colors">
                <Bookmark size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Key People panel */}
        <div className="border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-zinc-800 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between max-w-sm">
          <div>
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 dark:text-zinc-550 mb-4">
              Key People
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {teamMembers.map((person, i) => (
                <div key={i} className="text-center space-y-1">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-100 mx-auto border border-slate-200 dark:border-zinc-850 shadow-inner">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-[10px] font-black leading-tight text-slate-800 dark:text-zinc-300">
                    {person.name}
                  </h4>
                  <p className="text-[8.5px] text-slate-400 dark:text-zinc-500 font-semibold">
                    {person.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button className="text-xs font-black text-brandRed hover:text-brandRed-hover flex items-center gap-1 mt-6 lg:mt-0">
            View all team members <ArrowRight size={13} />
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* HIGHLIGHTS METRICS SUMMARY ROW */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {highlights.map((item, i) => (
          <div key={i} className={`p-5 rounded-2xl border flex flex-col justify-between h-28 shadow-sm ${item.color}`}>
            <span className="text-[10px] font-black uppercase opacity-70 leading-none">
              {item.title}
            </span>
            <div className="space-y-0.5">
              <div className="text-2.5xl font-black tracking-tight leading-none">
                {item.val}
              </div>
              <p className="text-[9.5px] font-bold opacity-60 leading-none">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* INVESTMENT THESIS & PORTFOLIO CONCENTRATION */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left investment thesis */}
        <div className="md:col-span-2 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 lg:p-8 flex flex-col justify-between shadow-sm min-h-[300px]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2.5xl text-brandRed font-black">“</span>
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                Investment Thesis
              </h2>
            </div>
            
            <p className="text-sm font-medium text-slate-500 dark:text-zinc-400 leading-relaxed">
              Sequoia partners with visionary founders building category-defining companies. Our focus is on technology and innovation that creates long-term impact and shapes the future.
            </p>
          </div>

          <div className="space-y-5 mt-6">
            <div className="space-y-2">
              <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-500 block">Focus sectors</span>
              <div className="flex flex-wrap gap-1.5">
                {["All Agents", "AI Infrastructure", "Developer Tools", "Healthcare AI", "Security AI"].map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 text-[9.5px] font-bold text-slate-600 dark:text-zinc-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-500 block">Preferred Stages</span>
              <div className="flex flex-wrap gap-1.5">
                {["Seed", "Series A", "Series B", "Growth"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-zinc-800 text-[10px] font-black text-slate-700 dark:text-zinc-300 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Portfolio concentration Donut Chart */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 lg:p-8 flex flex-col justify-between shadow-sm min-h-[300px]">
          <div>
            <h2 className="text-sm font-black text-slate-900 dark:text-white tracking-tight mb-4">
              Portfolio Concentration
            </h2>
            
            <div className="flex items-center gap-4">
              {/* Dynamic SVG donut */}
              <div className="relative w-28 h-28 flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* AI Infrastructure 35% */}
                  <circle cx="18" cy="18" r="15.91" fill="none" stroke="#FF4F00" strokeWidth="4.2" strokeDasharray="35 65" strokeDashoffset="100" />
                  {/* AI Agents 22% */}
                  <circle cx="18" cy="18" r="15.91" fill="none" stroke="#3B82F6" strokeWidth="4.2" strokeDasharray="22 78" strokeDashoffset="65" />
                  {/* AI Coding 18% */}
                  <circle cx="18" cy="18" r="15.91" fill="none" stroke="#8B5CF6" strokeWidth="4.2" strokeDasharray="18 82" strokeDashoffset="43" />
                  {/* Healthcare AI 15% */}
                  <circle cx="18" cy="18" r="15.91" fill="none" stroke="#10B981" strokeWidth="4.2" strokeDasharray="15 85" strokeDashoffset="25" />
                  {/* Other 10% */}
                  <circle cx="18" cy="18" r="15.91" fill="none" stroke="#EC4899" strokeWidth="4.2" strokeDasharray="10 90" strokeDashoffset="10" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-sm font-black text-slate-800 dark:text-white leading-none">85</span>
                  <span className="text-[7.5px] font-extrabold uppercase text-slate-400">Companies</span>
                </div>
              </div>

              {/* Legends list */}
              <div className="space-y-1.5 flex-1">
                {[
                  { label: "AI Infrastructure", pct: "35%", color: "bg-[#FF4F00]" },
                  { label: "AI Agents", pct: "22%", color: "bg-blue-500" },
                  { label: "AI Coding", pct: "18%", color: "bg-purple-500" },
                  { label: "Healthcare AI", pct: "15%", color: "bg-emerald-500" },
                  { label: "Other", pct: "10%", color: "bg-pink-500" }
                ].map((leg, i) => (
                  <div key={i} className="flex items-center justify-between text-[10px] font-bold text-slate-500 dark:text-zinc-400">
                    <div className="flex items-center gap-1.5 truncate">
                      <div className={`w-2 h-2 rounded-full ${leg.color} flex-shrink-0`} />
                      <span className="truncate">{leg.label}</span>
                    </div>
                    <span className="font-extrabold text-slate-800 dark:text-zinc-200 ml-1">{leg.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* RECENT INVESTMENTS CAROUSEL */}
      {/* ========================================================================= */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">
            Recent Investments
          </h2>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={prevCarousel}
              disabled={carouselIndex === 0}
              className="w-8 h-8 rounded-full border dark:border-zinc-800 flex items-center justify-center text-slate-400 hover:text-slate-650 bg-white dark:bg-zinc-900 shadow-sm disabled:opacity-40 transition-opacity"
            >
              <ChevronLeft size={15} />
            </button>
            <button 
              onClick={nextCarousel}
              disabled={carouselIndex >= recentInvestments.length - 3}
              className="w-8 h-8 rounded-full border dark:border-zinc-800 flex items-center justify-center text-slate-400 hover:text-slate-650 bg-white dark:bg-zinc-900 shadow-sm disabled:opacity-40 transition-opacity"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* Carousel grid viewport */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
          {recentInvestments.slice(carouselIndex, carouselIndex + 3).map((item, i) => (
            <div key={i} className={`bg-gradient-to-br ${item.bg} text-white p-6 rounded-2xl shadow-sm h-52 flex flex-col justify-between relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-xl pointer-events-none rounded-full" />
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg select-none">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase bg-white/10 px-2 py-0.5 rounded text-white/90">
                    {item.stage}
                  </span>
                </div>
                
                <h3 className="text-base font-black tracking-tight mt-4 leading-none">
                  {item.name}
                </h3>
                <p className="text-[10px] font-bold text-white/70 mt-1">
                  {item.sector}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-4">
                <div>
                  <div className="text-lg font-black tracking-tight leading-none">{item.amount}</div>
                  <span className="text-[8px] uppercase tracking-wider font-extrabold text-white/50">{item.date}</span>
                </div>
                
                <span className="text-[9px] font-black bg-white/90 text-slate-900 px-2.5 py-1 rounded-full">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* THREE COLUMN GRID: VELOCITY, FLOW, STAGE EVOLUTION */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Col 1: Investment Velocity */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 lg:p-7 shadow-sm">
          <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 dark:text-zinc-550 mb-5 flex items-center gap-1.5">
            📈 Investment Velocity
          </h3>
          
          <div className="space-y-3">
            {[
              { yr: "2022", deals: 14 },
              { yr: "2023", deals: 21 },
              { yr: "2024", deals: 36 },
              { yr: "2025", deals: 48 },
              { yr: "2026", deals: 31 }
            ].map((v, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-xs font-black text-slate-800 dark:text-zinc-200 w-8">{v.yr}</span>
                <div className="flex-1 bg-slate-50 dark:bg-zinc-950 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-brandRed h-full rounded-full" 
                    style={{ width: `${(v.deals / 50) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] font-extrabold text-slate-500 w-16 text-right">
                  {v.deals} {v.yr === "2026" ? "Deals YTD" : "AI Deals"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Col 2: Capital Flow */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 lg:p-7 shadow-sm">
          <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 dark:text-zinc-550 mb-5 flex items-center gap-1.5">
            📊 Capital Flow
          </h3>
          
          <div className="space-y-4">
            <div>
              <span className="text-[8px] uppercase tracking-wider font-extrabold text-emerald-500 block mb-2">Increasing Capital</span>
              <div className="space-y-1.5">
                {["AI Agents", "AI Coding", "AI Infrastructure"].map((flow, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs font-black text-slate-800 dark:text-zinc-250">
                    <span className="text-emerald-500">↗</span> {flow}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-50 dark:border-zinc-850 pt-3">
              <span className="text-[8px] uppercase tracking-wider font-extrabold text-red-500 block mb-2">Decreasing Capital</span>
              <div className="space-y-1.5">
                {["Enterprise AI", "Traditional SaaS", "Consumer Apps"].map((flow, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs font-black text-slate-550 dark:text-zinc-400">
                    <span className="text-red-400">↘</span> {flow}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Col 3: Stage Evolution */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 lg:p-7 shadow-sm">
          <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 dark:text-zinc-550 mb-5 flex items-center gap-1.5">
            ⚗️ Stage Evolution
          </h3>
          
          <div className="space-y-3">
            {[
              { yr: "2021", desc: "Seed Heavy", dot: "bg-amber-400" },
              { yr: "2022", desc: "Seed + Series A", dot: "bg-blue-400" },
              { yr: "2023", desc: "Series A Focus", dot: "bg-indigo-500" },
              { yr: "2024", desc: "Series A + Growth", dot: "bg-purple-500" },
              { yr: "2025", desc: "Growth Equity Expansion", dot: "bg-emerald-500" }
            ].map((ev, i) => (
              <div key={i} className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-zinc-405">
                <span className="font-black text-slate-800 dark:text-zinc-200">{ev.yr}</span>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${ev.dot}`} />
                  <span className="font-semibold">{ev.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* PORTFOLIO WINNERS & FOLLOW-ON STRENGTH */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Portfolio Winners */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
          <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 dark:text-zinc-550">
            🏆 Portfolio Winners
          </h3>
          
          <div className="space-y-4">
            <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-500 block">Notable Winners</span>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {["ANTHROPIC", "Cursor", "Harvey", "Perplexity", "Databricks", "Stripe"].map((logo, i) => (
                <div key={i} className="flex items-center justify-center p-2 border dark:border-zinc-850 rounded-xl text-[9px] font-black text-slate-800 dark:text-zinc-200 bg-slate-50 dark:bg-zinc-950 font-mono">
                  {logo}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 border-t border-slate-100 dark:border-zinc-800/80 pt-5">
            {[
              { val: "18", label: "Unicorns", color: "text-blue-500" },
              { val: "6", label: "IPOs", color: "text-emerald-500" },
              { val: "24", label: "Acquisitions", color: "text-purple-500" },
              { val: "85", label: "Active Companies", color: "text-slate-700 dark:text-zinc-300" }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <div className={`text-xl font-black ${stat.color}`}>{stat.val}</div>
                <div className="text-[9px] text-slate-400 dark:text-zinc-500 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Follow-on strength */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
          <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 dark:text-zinc-550">
            📊 Follow-On Strength
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "82%", sub: "Raised Next Round", color: "text-emerald-600 bg-emerald-500/10 border-emerald-100 dark:border-emerald-950/20" },
              { val: "14", sub: "Months Average Time", color: "text-blue-600 bg-blue-500/10 border-blue-100 dark:border-blue-950/20" },
              { val: "3.8x", sub: "Median Funding Growth", color: "text-rose-600 bg-rose-500/10 border-rose-100 dark:border-rose-950/20" },
              { val: "68%", sub: "Raised Series B+", color: "text-purple-650 bg-purple-500/10 border-purple-100 dark:border-purple-950/20" }
            ].map((metric, i) => (
              <div key={i} className={`p-4 rounded-xl border flex flex-col justify-between h-24 ${metric.color}`}>
                <div className="text-xl font-black tracking-tight leading-none">{metric.val}</div>
                <div className="text-[8.5px] font-bold text-slate-500 dark:text-zinc-400 leading-tight">{metric.sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* NETWORK STRENGTH & CO-INVESTOR NETWORK */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Network Strength */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-4">
          <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 dark:text-zinc-550">
            🕸️ Network Strength
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { title: "Most Connected", label: "Founder", icon: "👤" },
              { title: "Most Connected", label: "Startup", icon: "🏢" },
              { title: "Most Connected", label: "Co-Investor", icon: "🤝" },
              { title: "Largest Founder", label: "Network", icon: "👥" },
              { title: "Largest AI", label: "Community Reach", icon: "🌍" }
            ].map((node, i) => (
              <div key={i} className="bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 p-4 rounded-xl text-center space-y-2">
                <span className="text-lg block">{node.icon}</span>
                <div>
                  <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 block leading-none">{node.title}</span>
                  <span className="text-[9.5px] font-black text-slate-800 dark:text-zinc-300 leading-tight block mt-0.5">{node.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Co-Investor network */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 dark:text-zinc-550">
              🤝 Co-Investor Network
            </h3>
            <span className="text-[10px] font-black text-brandRed">View all co-investors &rarr;</span>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 pt-2">
            {[
              { name: "a16z", color: "text-[#FF4F00] bg-[#FF4F00]/5 border-[#FF4F00]/20" },
              { name: "Lightspeed", color: "text-blue-500 bg-blue-500/5 border-blue-500/20" },
              { name: "Accel", color: "text-slate-800 bg-slate-500/5 border-slate-500/20 dark:text-white" },
              { name: "Index", color: "text-indigo-650 bg-indigo-500/5 border-indigo-500/20 dark:text-indigo-400" },
              { name: "GC", color: "text-purple-600 bg-purple-500/5 border-purple-500/20 dark:text-purple-400" },
              { name: "KP", color: "text-emerald-600 bg-emerald-500/5 border-emerald-500/20 dark:text-emerald-400" }
            ].map((co, i) => (
              <div key={i} className={`p-4 border rounded-xl text-center text-xs font-black select-none ${co.color}`}>
                {co.name}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* AI MARKET INFLUENCE & EXIT INTELLIGENCE */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left AI Market influence */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-4">
          <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 dark:text-zinc-550">
            🤖 AI Market Influence
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { val: "18%", label: "AI Infrastructure Rounds" },
              { val: "14%", label: "AI Agent Funding" },
              { val: "12%", label: "Developer Tools Funding" },
              { val: "Top 3", label: "Most Active AI Investor" },
              { val: "#1", label: "Series A Investor" }
            ].map((metric, i) => (
              <div key={i} className="bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 p-4 rounded-xl text-center space-y-1">
                <span className="text-xl font-black text-brandRed block leading-none">{metric.val}</span>
                <span className="text-[8.5px] font-bold text-slate-450 dark:text-zinc-500 leading-tight block">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Exit intelligence */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-4">
          <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 dark:text-zinc-550">
            🔑 Exit Intelligence
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { val: "$10B+", label: "Largest Exit" },
              { val: "Databricks", label: "Recent IPO" },
              { val: "Stripe", label: "Largest Acquisition" },
              { val: "6.2", label: "Years Avg Exit Time" },
              { val: "6", label: "IPOs" },
              { val: "24", label: "Acquisitions" }
            ].map((node, i) => (
              <div key={i} className="bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 p-4 rounded-xl text-center space-y-1">
                <span className="text-[10px] font-black text-slate-800 dark:text-zinc-200 block truncate leading-none">{node.val}</span>
                <span className="text-[7.5px] font-bold text-slate-400 dark:text-zinc-550 block leading-tight mt-0.5">{node.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* RESEARCH & MENTIONS & RELATED INVESTORS */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Research listing */}
        <div className="md:col-span-2 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 dark:text-zinc-550">
              📰 Research & Mentions
            </h3>
            <span className="text-[10px] font-black text-brandRed">View all research &rarr;</span>
          </div>

          <div className="space-y-3 pt-2">
            {[
              { title: "Top AI Investors 2024", source: "GraphOne Report", date: "May 2024" },
              { title: "State of AI Funding", source: "GraphOne Analysis", date: "Apr 2024" },
              { title: "Sequoia's AI Thesis Deep Dive", source: "GraphOne Research", date: "Mar 2024" }
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 rounded-xl hover:shadow-sm transition-shadow cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="text-slate-400 dark:text-zinc-550" size={16} />
                  <div>
                    <h4 className="text-xs font-black text-slate-800 dark:text-zinc-200">{doc.title}</h4>
                    <span className="text-[8.5px] font-bold text-slate-400 dark:text-zinc-500 mt-0.5 block">{doc.source}</span>
                  </div>
                </div>
                <span className="text-[8.5px] font-black text-slate-400 dark:text-zinc-500">{doc.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Related Investors list */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-4">
          <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 dark:text-zinc-550">
            🔗 Related Investors
          </h3>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              { name: "a16z", label: "Andreessen Horowitz", color: "bg-[#FF4F00]/5 text-[#FF4F00] border-[#FF4F00]/25" },
              { name: "Accel", label: "Accel Partners", color: "bg-slate-500/5 text-slate-900 border-slate-500/25 dark:text-white" },
              { name: "Lightspeed", label: "Lightspeed Venture", color: "bg-blue-500/5 text-blue-500 border-blue-500/25" },
              { name: "Kleiner Perkins", label: "Kleiner Perkins", color: "bg-emerald-500/5 text-emerald-600 border-emerald-500/25 dark:text-emerald-400" }
            ].map((rel, i) => (
              <div key={i} className={`p-4 border rounded-xl flex flex-col justify-between h-24 shadow-inner cursor-pointer hover:-translate-y-0.5 transition-transform ${rel.color}`}>
                <span className="text-xs font-black">{rel.name}</span>
                <span className="text-[8px] font-bold opacity-60 leading-tight">{rel.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
