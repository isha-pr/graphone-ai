"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, Building } from "lucide-react";
import { companiesData } from "@/data/mockData";

function CompaniesListingContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filterType, setFilterType] = useState<"all" | "trending" | "fastest-growing" | "unicorn" | "emerging">("all");
  const [selectedSector, setSelectedSector] = useState<string>("All");

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  const sectors = ["All", "Chat", "Code", "Image", "Video", "Voice", "Productivity"];

  // Filter logic
  const filteredCompanies = companiesData.filter((c) => {
    // 1. Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesSearch = 
        c.name.toLowerCase().includes(q) || 
        c.description.toLowerCase().includes(q) ||
        c.tags.some(t => t.toLowerCase().includes(q));
      if (!matchesSearch) return false;
    }

    // 2. Sector Tabs
    if (selectedSector !== "All") {
      const matchesSector = c.category === selectedSector || c.tags.includes(selectedSector);
      if (!matchesSector) return false;
    }

    // 3. Status Filters
    if (filterType === "unicorn") return c.status === "unicorn";
    if (filterType === "emerging") return c.status === "emerging";
    if (filterType === "trending") return c.likes > 3000;
    if (filterType === "fastest-growing") return c.employeeGrowth > 50;

    return true;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Page Title & Hero Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
            <Building className="text-brandRed" size={28} /> AI Startups Listing
          </h1>
          <p className="text-sm text-slate-400 dark:text-zinc-400 font-medium">
            Analyze the fastest growing artificial intelligence organizations, unicorn networks, and pre-seed entities.
          </p>
        </div>

        {/* Local Search Input */}
        <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl px-3.5 py-2 w-full md:w-80 shadow-sm">
          <Search size={15} className="text-slate-400 dark:text-zinc-500" />
          <input
            type="text"
            placeholder="Search startups or sectors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs font-semibold text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Grid of Metric Stats widgets */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Valuation Tracked", value: "$210.4B", desc: "Across cataloged entities" },
          { label: "Active Startups", value: "24", desc: "Updated daily" },
          { label: "Avg Employee Growth", value: "+68%", desc: "Trailing 12-months" },
          { label: "Unicorn Startups", value: "11", desc: "Valued at > $1B" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-4 rounded-2xl shadow-sm">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-zinc-550">{stat.label}</span>
            <p className="text-lg font-black text-slate-950 dark:text-white mt-1">{stat.value}</p>
            <span className="text-[9px] font-semibold text-slate-400 dark:text-zinc-500 block mt-0.5">{stat.desc}</span>
          </div>
        ))}
      </div>

      {/* Segment filters and Sector selection */}
      <div className="space-y-4">
        {/* Type segment selectors */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 dark:border-zinc-850 pb-3">
          {[
            { label: "All Startups", type: "all" as const },
            { label: "Trending 🔥", type: "trending" as const },
            { label: "Fastest Growing 🚀", type: "fastest-growing" as const },
            { label: "Unicorns 🦄", type: "unicorn" as const },
            { label: "Emerging Startups ✨", type: "emerging" as const }
          ].map((item) => (
            <button
              key={item.type}
              onClick={() => setFilterType(item.type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                filterType === item.type
                  ? "bg-brandRed/5 border-brandRed text-brandRed"
                  : "border-transparent text-slate-500 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Sector tab selectors */}
        <div className="flex flex-wrap items-center gap-1.5">
          {sectors.map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedSector(sec)}
              className={`px-3 py-1 text-[11px] font-bold rounded-lg transition-all ${
                selectedSector === sec
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-sm"
                  : "text-slate-550 dark:text-zinc-400 bg-slate-50 dark:bg-zinc-900 hover:bg-slate-100 border border-slate-100 dark:border-zinc-800"
              }`}
            >
              {sec}
            </button>
          ))}
        </div>
      </div>

      {/* Startups Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCompanies.map((c) => (
          <Link
            key={c.id}
            href={`/companies/${c.id}`}
            className="group bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 hover:border-slate-200 dark:hover:border-zinc-750 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-200 cursor-pointer shadow-sm"
          >
            {/* Top row details */}
            <div>
              <div className="flex items-center justify-between">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-2xl border dark:border-zinc-800 ${c.logoBg || "bg-slate-100"}`}>
                  {c.logo}
                </div>
                <div className="text-right">
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    c.status === "unicorn"
                      ? "bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-450 border border-amber-100/50"
                      : "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-450 border border-blue-100/50"
                  }`}>
                    {c.status}
                  </span>
                </div>
              </div>

              <h3 className="text-base font-extrabold text-slate-850 dark:text-white mt-4 group-hover:text-brandRed transition-colors duration-150">
                {c.name}
              </h3>
              
              <p className="text-[11px] text-slate-400 dark:text-zinc-550 font-semibold line-clamp-2 mt-1 leading-normal">
                {c.description}
              </p>
            </div>

            {/* Bottom Row Details: Stats & Tags */}
            <div className="mt-6 pt-4 border-t border-slate-50 dark:border-zinc-850/80 space-y-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-500 block">Valuation</span>
                  <span className="text-[11px] font-bold text-slate-800 dark:text-zinc-200 block mt-0.5">{c.valuation}</span>
                </div>
                <div>
                  <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-500 block">Funding</span>
                  <span className="text-[11px] font-bold text-slate-800 dark:text-zinc-200 block mt-0.5">{c.fundingTotal}</span>
                </div>
                <div>
                  <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-500 block">Emp Growth</span>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-450 block mt-0.5">+{c.employeeGrowth}%</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {c.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[8px] font-bold text-slate-500 dark:text-zinc-400 bg-slate-50 dark:bg-zinc-800 px-1.5 py-0.5 rounded border dark:border-zinc-850">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <div className="py-16 text-center text-slate-400 dark:text-zinc-500 border border-dashed rounded-2xl">
          <p className="text-sm font-semibold">No startups match your search queries.</p>
        </div>
      )}
    </div>
  );
}

export default function CompaniesListingPage() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center text-xs text-slate-400 dark:text-zinc-550">
        Loading directory...
      </div>
    }>
      <CompaniesListingContent />
    </Suspense>
  );
}
