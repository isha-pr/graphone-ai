"use client";

import React from "react";
import { Bell, Search, Sun, Moon, ArrowRight, Menu } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface HeaderProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export default function Header({ onMenuClick, onSearchClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-100 dark:border-zinc-800/80 px-4 md:px-8 py-3.5 flex items-center justify-between">
      {/* Mobile Menu Trigger & Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-600 dark:text-zinc-400"
          aria-label="Toggle Menu"
        >
          <Menu size={20} />
        </button>

        {/* Small Brand Label for Mobile */}
        <div className="md:hidden flex items-center gap-1.5 font-bold tracking-tight text-slate-800 dark:text-white">
          <div className="w-6.5 h-6.5 rounded-md bg-brandRed flex items-center justify-center text-white text-xs font-bold">
            G
          </div>
          <span className="text-sm">GraphOne</span>
        </div>
      </div>

      {/* Center Search Input Trigger */}
      <div 
        onClick={onSearchClick}
        className="hidden md:flex items-center gap-3 bg-slate-50 dark:bg-zinc-900/60 hover:bg-slate-100 dark:hover:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-full py-1.5 pl-4 pr-1.5 w-full max-w-lg cursor-pointer transition-all duration-200 shadow-sm"
      >
        <Search size={16} className="text-slate-400 dark:text-zinc-500" />
        <span className="text-sm text-slate-400 dark:text-zinc-500 flex-1 select-none">
          Search startups, products, investors, jobs and news
        </span>
        <div className="flex items-center gap-2">
          <kbd className="text-[10px] bg-white dark:bg-zinc-800 text-slate-400 dark:text-zinc-500 border border-slate-200 dark:border-zinc-700 px-1.5 py-0.5 rounded font-mono shadow-sm">
            /
          </kbd>
          <button className="w-7 h-7 rounded-full bg-brandRed hover:bg-brandRed-hover flex items-center justify-center text-white transition-colors duration-150">
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2.5 md:gap-4">
        {/* Mobile Search Button */}
        <button
          onClick={onSearchClick}
          className="md:hidden p-2 rounded-full hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-600 dark:text-zinc-400"
          aria-label="Search"
        >
          <Search size={18} />
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-600 dark:text-zinc-400 transition-colors duration-150"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {/* Notifications Button */}
        <button className="relative p-2 rounded-full hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-600 dark:text-zinc-400 transition-colors duration-150">
          <Bell size={18} />
          <span className="absolute -top-0.5 -right-0.5 bg-brandRed text-white text-[9px] font-bold h-4 min-w-4 px-1 flex items-center justify-center rounded-full border-2 border-white dark:border-zinc-950">
            12
          </span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-1.5 cursor-pointer pl-1.5 border-l border-slate-100 dark:border-zinc-800">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
            alt="User profile"
            className="w-8 h-8 rounded-full object-cover border border-slate-150 dark:border-zinc-800 shadow-sm"
          />
          <svg
            className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500 hidden sm:block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </header>
  );
}
