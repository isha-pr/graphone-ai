"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface HeaderProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export default function Header({ onMenuClick, onSearchClick }: HeaderProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Companies", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Investors", href: "/investors" },
    { name: "Funding", href: "/funding", disabled: true },
    { name: "Jobs", href: "/jobs", disabled: true },
    { name: "News", href: "/news", disabled: true }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-zinc-950 border-b border-slate-100 dark:border-zinc-800/80 px-4 lg:px-8 py-3.5 flex items-center justify-between shadow-sm">
      {/* LEFT: Logo & Search */}
      <div className="flex items-center gap-6 flex-1 max-w-xl">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-brandRed flex items-center justify-center text-white font-extrabold text-lg shadow-sm shadow-brandRed/30">
            g
          </div>
          <span className="font-black text-xl tracking-tight text-slate-800 dark:text-white">
            graphone
          </span>
        </Link>

        {/* Header Search Box */}
        <div 
          onClick={onSearchClick}
          className="hidden md:flex items-center gap-2.5 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-900/80 rounded-lg py-2 px-3 w-full cursor-pointer transition-all duration-150"
        >
          <Search size={14} className="text-slate-400 dark:text-zinc-500" />
          <span className="text-[11.5px] font-semibold text-slate-400 dark:text-zinc-500 select-none">
            Search companies, founders, products, investors...
          </span>
        </div>
      </div>

      {/* MIDDLE: Horizontal Nav Links */}
      <nav className="hidden lg:flex items-center gap-6 mx-4">
        {navLinks.map((link) => {
          // Companies active on root /, others match path
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

        {/* Auth Buttons */}
        <button className="hidden sm:inline-block text-[12.5px] font-bold text-slate-500 dark:text-zinc-400 hover:text-slate-800 px-3 py-1.5 transition-colors">
          Log in
        </button>
        
        <button className="text-[12.5px] font-black bg-brandRed hover:bg-brandRed-hover text-white px-4 py-2 rounded-full transition-all shadow-sm shadow-brandRed/20">
          Sign up
        </button>

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
