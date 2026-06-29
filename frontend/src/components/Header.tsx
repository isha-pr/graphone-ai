"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Sun, Moon, Menu, Bell, ChevronDown, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface HeaderProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export default function Header({ onMenuClick, onSearchClick }: HeaderProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const isHome = pathname === "/";

  const navLinks = [
    { name: "Companies", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Investors", href: "/investors" },
    { name: "Funding", href: "/funding", disabled: true },
    { name: "Jobs", href: "/jobs", disabled: true },
    { name: "News", href: "/news", disabled: true }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-zinc-950 border-b border-slate-150/80 dark:border-zinc-800/80 px-4 lg:px-8 py-3.5 flex items-center justify-between shadow-sm">
      {/* LEFT: Logo & Search */}
      <div className="flex items-center gap-6 flex-1 max-w-xl">
        {/* Brand Logo - hidden on desktop if isHome because persistent sidebar shows it */}
        <Link href="/" className={`flex items-center gap-2 flex-shrink-0 ${isHome ? "lg:hidden" : ""}`}>
          <div className="w-8 h-8 rounded-full bg-brandRed flex items-center justify-center text-white font-extrabold text-lg shadow-sm shadow-brandRed/30">
            g
          </div>
          <span className="font-black text-xl tracking-tight text-slate-800 dark:text-white">
            graphone
          </span>
        </Link>

        {/* Header Search Box */}
        {isHome ? (
          <div className="hidden md:flex items-center justify-between bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-full py-1.5 pl-4 pr-1.5 w-[420px] shadow-inner focus-within:border-brandRed transition-colors">
            <div className="flex items-center gap-2 flex-1">
              <Search size={14} className="text-slate-400 dark:text-zinc-550" />
              <input 
                type="text" 
                placeholder="Search startups, products, investors, jobs and news"
                className="bg-transparent text-xs font-semibold text-slate-800 dark:text-zinc-200 outline-none w-full placeholder-slate-400 dark:placeholder-zinc-550 cursor-pointer"
                onClick={onSearchClick}
                readOnly
              />
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-[10px] font-bold text-slate-400 bg-slate-150/60 dark:bg-zinc-800 border dark:border-zinc-750 px-2 py-0.5 rounded">/</span>
              <button 
                onClick={onSearchClick}
                className="w-7 h-7 rounded-full bg-brandRed hover:bg-brandRed-hover flex items-center justify-center text-white shadow-sm transition-colors"
              >
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        ) : (
          <div 
            onClick={onSearchClick}
            className="hidden md:flex items-center gap-2.5 bg-slate-50 dark:bg-zinc-900 border border-slate-205 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-900/80 rounded-lg py-2 px-3 w-full cursor-pointer transition-all duration-150"
          >
            <Search size={14} className="text-slate-400 dark:text-zinc-550" />
            <span className="text-[11.5px] font-semibold text-slate-400 dark:text-zinc-500 select-none">
              Search companies, founders, products, investors...
            </span>
          </div>
        )}
      </div>

      {/* MIDDLE: Horizontal Nav Links - hidden on home because of custom sidebar */}
      {!isHome && (
        <nav className="hidden lg:flex items-center gap-6 mx-4">
          {navLinks.map((link) => {
            const isActive = link.href === "/" 
              ? pathname === "/" 
              : pathname.startsWith(link.href);

            if (link.disabled) {
              return (
                <span 
                  key={link.name} 
                  className="text-[12.5px] font-bold text-slate-350 dark:text-zinc-650 cursor-not-allowed select-none"
                >
                  {link.name}
                </span>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[12.5px] font-black tracking-tight relative py-1.5 transition-colors ${
                  isActive 
                    ? "text-brandRed" 
                    : "text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brandRed rounded" />
                )}
              </Link>
            );
          })}
        </nav>
      )}

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-3">
        {/* Mobile Search Icon */}
        <button
          onClick={onSearchClick}
          className="md:hidden p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-650 dark:text-zinc-400"
          aria-label="Search"
        >
          <Search size={17} />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-500 dark:text-zinc-400 transition-colors"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        {isHome ? (
          <>
            {/* Bell Notifications */}
            <button className="relative p-2 text-slate-500 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-900 rounded-full transition-all">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-brandRed text-white text-[9px] font-black rounded-full flex items-center justify-center shadow-sm shadow-brandRed/20">
                10
              </span>
            </button>

            {/* Profile Avatar dropdown */}
            <div className="flex items-center gap-1 cursor-pointer group pl-1">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200 dark:border-zinc-800 bg-slate-100 shadow-sm">
                <img 
                  src="/images/portrait_pat_grady.png" 
                  alt="User Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-700 dark:group-hover:text-zinc-200 transition-colors" />
            </div>
          </>
        ) : (
          <>
            {/* Auth Buttons */}
            <button className="hidden sm:inline-block text-[12.5px] font-bold text-slate-500 dark:text-zinc-400 hover:text-slate-800 px-3 py-1.5 transition-colors">
              Log in
            </button>
            
            <button className="text-[12.5px] font-black bg-brandRed hover:bg-brandRed-hover text-white px-4 py-2 rounded-full transition-all shadow-sm shadow-brandRed/20">
              Sign up
            </button>
          </>
        )}

        {/* Mobile menu icon */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-650 dark:text-zinc-400"
          aria-label="Toggle Menu"
        >
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
