"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Globe, 
  ChevronRight, 
  Heart
} from "lucide-react";
import { getCompanyById, getInvestorById, productsData } from "@/data/mockData";
import EcosystemGraph from "@/components/EcosystemGraph";
import { FundingGrowthChart } from "@/components/Charts";

interface CompanyDetailPageProps {
  params: {
    id: string;
  };
}

export default function CompanyDetailPage({ params }: CompanyDetailPageProps) {
  const router = useRouter();
  const company = getCompanyById(params.id);

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    if (company) {
      setLikesCount(company.likes);
    }
  }, [company]);

  if (!company) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-zinc-200">Company Not Found</h2>
        <p className="text-sm text-slate-400">The company you are looking for does not exist in the GraphOne database.</p>
        <Link 
          href="/companies"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brandRed hover:underline"
        >
          <ArrowLeft size={14} /> Back to Directory
        </Link>
      </div>
    );
  }

  const handleLike = () => {
    if (liked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  // Compile nodes for this specific company's ecosystem graph
  const ecosystemNodes = [
    // 1. Founders
    ...company.founders.map((f, idx) => ({
      id: `founder-${f.name.replace(/\s+/g, "-")}`,
      label: f.name,
      type: "founder" as const,
      logo: "👤",
      url: "",
      angle: 30 + idx * 45
    })),
    // 2. Investors (up to 2)
    ...company.investors.slice(0, 2).map((invId, idx) => {
      const inv = getInvestorById(invId);
      return {
        id: `investor-${invId}`,
        label: inv?.name || invId,
        type: "investor" as const,
        logo: inv?.logo || "💰",
        url: `/investors/${invId}`,
        angle: 150 + idx * 60
      };
    }),
    // 3. Products (up to 2)
    ...productsData
      .filter(p => p.companyId === company.id)
      .slice(0, 2)
      .map((p, idx) => ({
        id: `product-${p.id}`,
        label: p.name,
        type: "product" as const,
        logo: p.logo || "📦",
        url: `/products?id=${p.id}`,
        angle: 270 + idx * 45
      }))
  ];

  // Get products made by this company
  const companyProducts = productsData.filter(p => p.companyId === company.id);

  return (
    <div className="space-y-8 pb-20">
      {/* Back navigation & Actions row */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-zinc-400 hover:text-slate-900"
        >
          <ArrowLeft size={14} /> Back to Directory
        </button>

        <div className="flex items-center gap-2">
          {/* Like button */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-bold transition-all shadow-sm ${
              liked
                ? "bg-brandRed/5 border-brandRed text-brandRed"
                : "border-slate-100 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-600 dark:text-zinc-400"
            }`}
          >
            <Heart size={14} className={liked ? "fill-brandRed text-brandRed" : ""} />
            <span>{(likesCount / 1000).toFixed(1)}K Likes</span>
          </button>
        </div>
      </div>

      {/* Main Header profile card */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
        
        {/* Branding & description info */}
        <div className="flex items-start gap-4 md:gap-6">
          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-4xl border dark:border-zinc-800 flex-shrink-0 ${company.logoBg || "bg-slate-50"}`}>
            {company.logo}
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
                {company.name}
              </h2>
              <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                company.status === "unicorn"
                  ? "bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-450 border border-amber-100"
                  : "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-450 border border-blue-100"
              }`}>
                {company.status}
              </span>
            </div>

            <p className="text-xs text-slate-400 dark:text-zinc-500 font-bold flex items-center gap-1.5">
              <span>Category: {company.category}</span>
              <span>•</span>
              <span>Founded: {company.foundingYear}</span>
            </p>

            <p className="text-xs text-slate-450 dark:text-zinc-450 font-semibold max-w-xl leading-relaxed pt-1.5">
              {company.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-1.5">
              {company.tags.map(t => (
                <span key={t} className="text-[9px] font-bold text-slate-500 dark:text-zinc-400 bg-slate-50 dark:bg-zinc-850 px-2.5 py-0.5 rounded border dark:border-zinc-800">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action button & link details */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-0 md:w-56">
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-brandRed hover:bg-brandRed-hover text-white text-xs font-bold rounded-xl transition-all shadow-sm"
          >
            <Globe size={14} /> Visit Website <ChevronRight size={12} />
          </a>
          
          <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold border dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950/50 p-2.5 rounded-xl">
            <div className="border-r dark:border-zinc-800">
              <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-550 block">Valuation</span>
              <span className="text-slate-800 dark:text-zinc-200 mt-0.5 block">{company.valuation}</span>
            </div>
            <div>
              <span className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-zinc-550 block">Funding</span>
              <span className="text-slate-800 dark:text-zinc-200 mt-0.5 block">{company.fundingTotal}</span>
            </div>
          </div>
        </div>
      </div>

      {/* TWO COLUMN CONTENT VIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: TIMELINE, PRODUCTS, ECOSYSTEM GRAPH */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* 1. Ecosystem Graph */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 space-y-4 shadow-sm">
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
              Ecosystem network
            </h3>
            <p className="text-[11px] text-slate-400 dark:text-zinc-500 font-semibold">
              Inspect relationships connecting {company.name} with founders, core platforms, and investor check sources.
            </p>
            <EcosystemGraph 
              centerNode={{ name: company.name, logo: company.logo, logoBg: company.logoBg }} 
              nodes={ecosystemNodes} 
              height={300}
            />
          </div>

          {/* 2. Interactive Funding Analytics */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 space-y-4 shadow-sm">
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
              Funding Milestones
            </h3>
            <p className="text-[11px] text-slate-400 dark:text-zinc-550 font-semibold">
              Historical chart displaying capital sizes raised across early seed and corporate investment timelines.
            </p>
            <FundingGrowthChart rounds={company.fundingHistory} />
          </div>

          {/* 3. Products List */}
          {companyProducts.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider pl-1">
                Products developed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {companyProducts.map(p => (
                  <Link
                    key={p.id}
                    href={`/products?id=${p.id}`}
                    className="bg-white dark:bg-zinc-900 hover:shadow-md border border-slate-100 dark:border-zinc-800 p-5 rounded-2xl flex items-start gap-3 transition-shadow duration-150 cursor-pointer shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 flex items-center justify-center text-xl flex-shrink-0">
                      {p.logo}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-slate-800 dark:text-white truncate">{p.name}</h4>
                      <p className="text-[10px] text-slate-450 dark:text-zinc-400 font-semibold line-clamp-2 mt-0.5">{p.tagline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 4. Company Timeline milestones */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 space-y-6 shadow-sm">
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
              Company Milestones
            </h3>

            <div className="relative border-l-2 border-slate-100 dark:border-zinc-800 ml-2.5 space-y-8 py-2">
              {company.timeline.map((event, idx) => (
                <div key={idx} className="relative pl-8">
                  {/* Timeline point indicator */}
                  <span className="absolute -left-1.5 top-1 w-3.5 h-3.5 rounded-full bg-brandRed border-4 border-white dark:border-zinc-900 shadow-sm" />
                  
                  <span className="text-[10px] font-bold text-brandRed bg-brandRed-light dark:bg-brandRed/10 px-2 py-0.5 rounded font-mono">
                    {event.year}
                  </span>
                  
                  <h4 className="text-xs font-bold text-slate-850 dark:text-zinc-200 mt-2">
                    {event.title}
                  </h4>
                  
                  <p className="text-[11px] text-slate-400 dark:text-zinc-500 font-semibold mt-1 leading-normal max-w-xl">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: FUNDING HISTORY TABLE, INVESTORS, FOUNDERS, SIMILAR */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* 1. Founders Profile Widget */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xs uppercase font-extrabold text-slate-400 dark:text-zinc-550 tracking-wider mb-4">
              Founders
            </h3>
            <div className="space-y-3.5">
              {company.founders.map((f, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <img
                    src={f.avatar}
                    alt={f.name}
                    className="w-10 h-10 rounded-full object-cover border dark:border-zinc-800 shadow-sm"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-850 dark:text-zinc-200 truncate">{f.name}</p>
                    <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-medium truncate mt-0.5">{f.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Funding Rounds Table */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 shadow-sm overflow-hidden">
            <h3 className="text-xs uppercase font-extrabold text-slate-400 dark:text-zinc-550 tracking-wider mb-4">
              Funding Rounds
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-[10px] text-left">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-zinc-850 pb-2 text-slate-400 dark:text-zinc-500 font-extrabold">
                    <th className="pb-2">Round</th>
                    <th className="pb-2">Date</th>
                    <th className="pb-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-zinc-850/50">
                  {company.fundingHistory.map((round, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-zinc-850/10">
                      <td className="py-2.5 font-bold text-slate-850 dark:text-zinc-350">{round.round}</td>
                      <td className="py-2.5 font-semibold text-slate-400 dark:text-zinc-500">{round.date}</td>
                      <td className="py-2.5 text-right font-bold text-slate-800 dark:text-white">{round.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Lead Investors list */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xs uppercase font-extrabold text-slate-400 dark:text-zinc-550 tracking-wider mb-4">
              Lead Investors
            </h3>
            <div className="space-y-3">
              {company.investors.map((invId) => {
                const inv = getInvestorById(invId);
                if (!inv) return null;
                return (
                  <Link
                    key={inv.id}
                    href={`/investors/${inv.id}`}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-850/50 hover:bg-slate-100 border dark:border-zinc-850/60 transition-colors cursor-pointer shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-900 border dark:border-zinc-800 flex items-center justify-center text-sm shadow-sm">
                        {inv.logo}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-800 dark:text-zinc-200 truncate">{inv.name}</p>
                        <p className="text-[9px] text-slate-400 dark:text-zinc-500 font-medium truncate">{inv.type} partner</p>
                      </div>
                    </div>
                    <ChevronRight size={14} className="text-slate-400 dark:text-zinc-500" />
                  </Link>
                );
              })}
              {company.investors.length === 0 && (
                <p className="text-[10px] text-slate-400 dark:text-zinc-500 italic">Self-funded / Boostrapped</p>
              )}
            </div>
          </div>

          {/* 4. Similar Startups */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xs uppercase font-extrabold text-slate-400 dark:text-zinc-550 tracking-wider mb-4">
              Similar Companies
            </h3>
            <div className="space-y-3">
              {company.similarCompanies.map((simId) => {
                const sim = getCompanyById(simId);
                if (!sim) return null;
                return (
                  <Link
                    key={sim.id}
                    href={`/companies/${sim.id}`}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-850/50 hover:bg-slate-100 border dark:border-zinc-850/60 transition-colors cursor-pointer shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg border dark:border-zinc-850 ${sim.logoBg || "bg-white"}`}>
                        {sim.logo}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-850 dark:text-zinc-200 truncate">{sim.name}</p>
                        <p className="text-[9px] text-slate-400 dark:text-zinc-500 font-medium truncate mt-0.5">{sim.category} platform</p>
                      </div>
                    </div>
                    <ChevronRight size={14} className="text-slate-400 dark:text-zinc-500" />
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
