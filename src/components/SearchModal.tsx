"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, Rocket, Box, Users, User, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { companiesData, investorsData, productsData } from "@/data/mockData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  category: "company" | "product" | "investor" | "founder";
  url: string;
  icon: React.ReactNode;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Live Typeahead search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const tempResults: SearchResultItem[] = [];

    // Search Companies
    companiesData.forEach((c) => {
      if (c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)) {
        tempResults.push({
          id: `company-${c.id}`,
          title: c.name,
          subtitle: c.description,
          category: "company",
          url: `/companies/${c.id}`,
          icon: <Rocket className="text-blue-500" size={16} />
        });
      }

      // Search Founders
      c.founders.forEach((f) => {
        if (f.name.toLowerCase().includes(q) || f.role.toLowerCase().includes(q)) {
          tempResults.push({
            id: `founder-${c.id}-${f.name.replace(/\s+/g, "-")}`,
            title: f.name,
            subtitle: `${f.role} at ${c.name}`,
            category: "founder",
            url: `/companies/${c.id}`,
            icon: <User className="text-purple-500" size={16} />
          });
        }
      });
    });

    // Search Investors
    investorsData.forEach((inv) => {
      if (inv.name.toLowerCase().includes(q) || inv.thesis.toLowerCase().includes(q)) {
        tempResults.push({
          id: `investor-${inv.id}`,
          title: inv.name,
          subtitle: `${inv.type} • Assets: ${inv.managedAssets}`,
          category: "investor",
          url: `/investors/${inv.id}`,
          icon: <Users className="text-green-500" size={16} />
        });
      }
    });

    // Search Products
    productsData.forEach((p) => {
      if (p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q)) {
        tempResults.push({
          id: `product-${p.id}`,
          title: p.name,
          subtitle: p.tagline,
          category: "product",
          url: `/products?id=${p.id}`,
          icon: <Box className="text-brandRed" size={16} />
        });
      }
    });

    setResults(tempResults.slice(0, 8)); // Limit to 8 results
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleNavigate(results[selectedIndex].url);
      }
    }
  };

  const handleNavigate = (url: string) => {
    router.push(url);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-zinc-800 overflow-hidden z-10"
          >
            {/* Search Input Box */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100 dark:border-zinc-800">
              <Search className="text-slate-400 dark:text-zinc-500" size={20} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search companies, founders, investors, products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-zinc-500 bg-transparent outline-none text-base font-medium"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-400 dark:text-zinc-500 transition-colors"
                >
                  <X size={16} />
                </button>
              )}
              <kbd className="text-[10px] bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-400 px-1.5 py-0.5 rounded font-mono shadow-sm">
                ESC
              </kbd>
            </div>

            {/* Results Panel */}
            <div className="max-h-[380px] overflow-y-auto p-2">
              {!query.trim() && (
                <div className="py-8 text-center text-slate-400 dark:text-zinc-500">
                  <p className="text-sm font-medium">Search the GraphOne Intelligence Layer</p>
                  <p className="text-xs mt-1">Start typing to see companies, founders, investors, and products.</p>
                  <div className="flex items-center justify-center gap-4 mt-6 text-xs text-slate-350 dark:text-zinc-650">
                    <span className="flex items-center gap-1"><Rocket size={12} /> Startups</span>
                    <span className="flex items-center gap-1"><Box size={12} /> Products</span>
                    <span className="flex items-center gap-1"><Users size={12} /> Investors</span>
                  </div>
                </div>
              )}

              {query.trim() && results.length === 0 && (
                <div className="py-12 text-center text-slate-400 dark:text-zinc-500">
                  <p className="text-sm font-medium">No results found for &ldquo;{query}&rdquo;</p>
                  <p className="text-xs mt-1">Check spelling or try search queries like &ldquo;OpenAI&rdquo; or &ldquo;Sequoia&rdquo;.</p>
                </div>
              )}

              {query.trim() && results.length > 0 && (
                <div>
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                    Search Results ({results.length})
                  </div>
                  <ul className="space-y-0.5 mt-1">
                    {results.map((item, index) => {
                      const isSelected = index === selectedIndex;
                      return (
                        <li key={item.id}>
                          <div
                            onClick={() => handleNavigate(item.url)}
                            onMouseEnter={() => setSelectedIndex(index)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-150 select-none ${
                              isSelected
                                ? "bg-slate-50 dark:bg-zinc-800/80 text-brandRed"
                                : "text-slate-700 dark:text-zinc-350"
                            }`}
                          >
                            <div className={`p-2 rounded-lg bg-white dark:bg-zinc-800 border shadow-sm transition-colors duration-150 ${
                              isSelected ? "border-brandRed-light dark:border-brandRed/20" : "border-slate-100 dark:border-zinc-700"
                            }`}>
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-semibold truncate ${
                                isSelected ? "text-slate-900 dark:text-white" : "text-slate-800 dark:text-zinc-200"
                              }`}>
                                {item.title}
                              </p>
                              <p className="text-xs text-slate-400 dark:text-zinc-500 truncate mt-0.5">
                                {item.subtitle}
                              </p>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-450 dark:text-zinc-500 px-1.5 py-0.5 bg-slate-100 dark:bg-zinc-800 rounded">
                                {item.category}
                              </span>
                              {isSelected && (
                                <motion.div
                                  initial={{ opacity: 0, x: -4 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  className="text-brandRed"
                                >
                                  <ArrowRight size={14} />
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Modal Footer Controls */}
            <div className="px-4 py-2.5 bg-slate-50 dark:bg-zinc-900/60 border-t border-slate-100 dark:border-zinc-850 flex items-center justify-between text-[11px] text-slate-400 dark:text-zinc-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="bg-white dark:bg-zinc-800 border px-1 rounded font-mono shadow-sm">↑↓</kbd> Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-white dark:bg-zinc-800 border px-1 rounded font-mono shadow-sm">Enter</kbd> Select
                </span>
              </div>
              <div>
                <span>Press <kbd className="bg-white dark:bg-zinc-800 border px-1 rounded font-mono shadow-sm">Esc</kbd> to close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
