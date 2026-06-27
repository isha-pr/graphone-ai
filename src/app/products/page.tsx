"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Heart, Globe, Filter } from "lucide-react";
import { productsData, getCompanyById } from "@/data/mockData";

function ProductsContent() {
  const searchParams = useSearchParams();
  const highlightId = searchParams.get("id");

  const [activeTab, setActiveTab] = useState("All");
  const [likesState, setLikesState] = useState<Record<string, { count: number; liked: boolean }>>(() => {
    const initial: Record<string, { count: number; liked: boolean }> = {};
    productsData.forEach(p => {
      initial[p.id] = { count: p.likes, liked: false };
    });
    return initial;
  });

  // Automatically scroll to or highlight a product if passed via query params
  useEffect(() => {
    if (highlightId) {
      const product = productsData.find(p => p.id === highlightId);
      if (product) {
        setActiveTab(product.category);
        setTimeout(() => {
          const el = document.getElementById(`product-card-${highlightId}`);
          el?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 150);
      }
    }
  }, [highlightId]);

  const handleLike = (id: string) => {
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

  const tabs = ["All", "Chat", "Code", "Image", "Video", "Voice", "Productivity"];

  const filteredProducts = productsData.filter(p => {
    if (activeTab === "All") return true;
    return p.category === activeTab;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Header Info */}
      <div className="space-y-2">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
          AI Products Index
        </h1>
        <p className="text-sm text-slate-400 dark:text-zinc-400 font-medium">
          Discover and evaluate the world&apos;s leading consumer and developer artificial intelligence interfaces.
        </p>
      </div>

      {/* Categories Filtering tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex flex-wrap gap-1">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  isSelected
                    ? "bg-brandRed text-white shadow-sm"
                    : "text-slate-500 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-900"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-zinc-550 bg-slate-50 dark:bg-zinc-900 border dark:border-zinc-800 px-3 py-1.5 rounded-xl">
          <Filter size={13} />
          <span>{filteredProducts.length} Platforms Cataloged</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProducts.map((p) => {
          const parentCompany = getCompanyById(p.companyId);
          const likeInfo = likesState[p.id] || { count: p.likes, liked: false };
          const isHighlighted = p.id === highlightId;

          return (
            <div
              key={p.id}
              id={`product-card-${p.id}`}
              className={`bg-white dark:bg-zinc-900 border p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden group shadow-sm ${
                isHighlighted
                  ? "border-brandRed ring-2 ring-brandRed-light dark:ring-brandRed/20"
                  : "border-slate-100 dark:border-zinc-800 hover:shadow-md"
              }`}
            >
              {isHighlighted && (
                <div className="absolute top-0 right-0 bg-brandRed text-white text-[8.5px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                  Matched Result
                </div>
              )}

              <div>
                {/* Product Logo & Company */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-950 border dark:border-zinc-850 flex items-center justify-center text-2xl flex-shrink-0">
                    {p.logo}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-white flex items-center gap-2">
                      {p.name}
                      {parentCompany && (
                        <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-medium">
                          by {parentCompany.name}
                        </span>
                      )}
                    </h3>
                    <p className="text-[11px] text-slate-400 dark:text-zinc-500 font-semibold mt-0.5">
                      Launch: {p.launchDate}
                    </p>
                  </div>
                </div>

                {/* Subtitle / Tagline */}
                <h4 className="text-xs font-bold text-slate-700 dark:text-zinc-350 mt-4">
                  {p.tagline}
                </h4>

                {/* Description */}
                <p className="text-[11px] text-slate-450 dark:text-zinc-450 mt-1 leading-relaxed font-semibold">
                  {p.description}
                </p>
              </div>

              {/* Bottom Actions Row */}
              <div className="flex items-center justify-between border-t border-slate-50 dark:border-zinc-850/80 pt-4 mt-6">
                {/* Meta stats */}
                <div className="flex items-center gap-3 text-[10px] text-slate-400 dark:text-zinc-500 font-bold">
                  <span className="bg-slate-50 dark:bg-zinc-800/80 px-2 py-0.5 rounded border dark:border-zinc-850">
                    {p.category}
                  </span>
                  <span>{p.users}</span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Website link */}
                  <a
                    href={p.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-slate-100 hover:border-slate-200 dark:border-zinc-800/80 hover:bg-slate-50 dark:hover:bg-zinc-850 rounded-xl text-slate-650 dark:text-zinc-400 transition-colors shadow-sm"
                    title="Visit site"
                  >
                    <Globe size={14} />
                  </a>

                  {/* Likes Interactive Button */}
                  <button
                    onClick={() => handleLike(p.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 border rounded-xl text-xs font-bold transition-all shadow-sm ${
                      likeInfo.liked
                        ? "bg-brandRed/5 border-brandRed text-brandRed"
                        : "border-slate-100 hover:border-slate-250 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-850 text-slate-650 dark:text-zinc-400"
                    }`}
                  >
                    <Heart size={13} className={likeInfo.liked ? "fill-brandRed text-brandRed animate-pulse" : ""} />
                    <span>{(likeInfo.count / 1000).toFixed(1)}K</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-16 text-center text-slate-400 dark:text-zinc-500">
          <p className="text-sm font-semibold">No platforms found for this category category tab.</p>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center text-xs text-slate-400 dark:text-zinc-550">
        Loading products index...
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
