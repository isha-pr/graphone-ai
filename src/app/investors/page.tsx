"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Users, Search, TrendingUp } from "lucide-react";
import { investorsData, getCompanyById } from "@/data/mockData";

export default function InvestorsListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "trending" | "VC" | "Corporate" | "Angel" | "active">("all");

  const filteredInvestors = investorsData.filter(inv => {
    // 1. Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesSearch = 
        inv.name.toLowerCase().includes(q) || 
        inv.thesis.toLowerCase().includes(q);
      if (!matchesSearch) return false;
    }

    // 2. Tab Filter
    if (filterType === "VC") return inv.type === "VC";
    if (filterType === "Corporate") return inv.type === "Corporate";
    if (filterType === "Angel") return inv.type === "Angel";
    if (filterType === "trending") return inv.featured;
    if (filterType === "active") return inv.portfolioCount > 100;

    return true;
  });

  return (
    <div className="space-y-8 pb-16">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
            <Users className="text-brandRed" size={28} /> Investors Discovery
          </h1>
          <p className="text-sm text-slate-400 dark:text-zinc-400 font-medium">
            Analyze venture funds, accelerators, corporate entities, and angel networks funding the global AI intelligence layer.
          </p>
        </div>

        {/* Local Search Input */}
        <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl px-3.5 py-2 w-full md:w-80 shadow-sm">
          <Search size={15} className="text-slate-400 dark:text-zinc-500" />
          <input
            type="text"
            placeholder="Search investors or thesis..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs font-semibold text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-zinc-550 bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Grid of Metric Stats widgets */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Assets Under Management", value: "$158.4B", desc: "Cataloged VCs total" },
          { label: "Tracked Portfolios", value: "5,379", desc: "Cumulative investments" },
          { label: "Average Lead Check", value: "$8.5M", desc: "Seed to Series B checks" },
          { label: "Active Co-Invest Network", value: "85+", desc: "Syndicated VC connections" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-4 rounded-2xl shadow-sm">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-zinc-550">{stat.label}</span>
            <p className="text-lg font-black text-slate-950 dark:text-white mt-1">{stat.value}</p>
            <span className="text-[9px] font-semibold text-slate-400 dark:text-zinc-500 block mt-0.5">{stat.desc}</span>
          </div>
        ))}
      </div>

      {/* Filters Segment selectors */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 dark:border-zinc-850 pb-3">
        {[
          { label: "All Investors", type: "all" as const },
          { label: "Trending Portfolios 🔥", type: "trending" as const },
          { label: "Venture Capital (VC)", type: "VC" as const },
          { label: "Corporate Ventures", type: "Corporate" as const },
          { label: "Angel Investors 👼", type: "Angel" as const },
          { label: "Most Active ⚡", type: "active" as const }
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

      {/* Investors Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredInvestors.map((inv) => (
          <Link
            key={inv.id}
            href={`/investors/${inv.id}`}
            className="group bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 hover:border-slate-200 dark:hover:border-zinc-750 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-200 cursor-pointer shadow-sm"
          >
            <div>
              {/* Profile info row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 flex items-center justify-center text-xl flex-shrink-0 shadow-inner">
                    {inv.logo}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-850 dark:text-white group-hover:text-brandRed transition-colors duration-150">
                      {inv.name}
                    </h3>
                    <p className="text-[10px] text-slate-450 dark:text-zinc-500 font-bold uppercase mt-0.5">
                      {inv.type} Partner
                    </p>
                  </div>
                </div>

                {inv.featured && (
                  <span className="text-[9px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 px-2 py-0.5 rounded">
                    Featured
                  </span>
                )}
              </div>

              {/* Thesis description */}
              <p className="text-[11px] text-slate-400 dark:text-zinc-550 font-semibold line-clamp-2 mt-4 leading-relaxed pr-2">
                {inv.thesis}
              </p>
            </div>

            {/* Bottom Row Stats widgets */}
            <div className="mt-6 pt-4 border-t border-slate-50 dark:border-zinc-850/85 space-y-4">
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-450 dark:text-zinc-500 block">Managed Assets</span>
                  <span className="text-slate-800 dark:text-zinc-200 font-bold mt-0.5 block">{inv.managedAssets}</span>
                </div>
                <div>
                  <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-450 dark:text-zinc-500 block">Portfolios</span>
                  <span className="text-slate-800 dark:text-zinc-200 font-bold mt-0.5 block">{inv.portfolioCount} cos</span>
                </div>
                <div>
                  <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-450 dark:text-zinc-500 block">Lead Check</span>
                  <span className="text-slate-800 dark:text-zinc-200 font-bold mt-0.5 block">{inv.avgCheckSize}</span>
                </div>
              </div>

              {/* Recent Lead Investments */}
              {inv.recentInvestments.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-[9px] uppercase font-extrabold text-slate-400 dark:text-zinc-500 flex items-center gap-1.5">
                    <TrendingUp size={11} className="text-brandRed" /> Recent Lead Investments
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {inv.recentInvestments.slice(0, 3).map((ri, i) => {
                      const comp = getCompanyById(ri.companyId);
                      if (!comp) return null;
                      return (
                        <span key={i} className="text-[9px] font-bold text-slate-500 dark:text-zinc-400 bg-slate-50 dark:bg-zinc-850/80 px-2 py-0.5 rounded border dark:border-zinc-800">
                          {comp.name} ({ri.round})
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {filteredInvestors.length === 0 && (
        <div className="py-16 text-center text-slate-400 dark:text-zinc-500">
          <p className="text-sm font-semibold">No investors match your criteria.</p>
        </div>
      )}
    </div>
  );
}
