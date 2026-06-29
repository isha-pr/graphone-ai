"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Rocket, 
  Box, 
  Users, 
  Briefcase, 
  FileText, 
  PlusSquare, 
  X 
} from "lucide-react";
import { GraphOneLogo } from "./Logos";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  persistent?: boolean;
}

export default function Sidebar({ isOpen = false, onClose, persistent = false }: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home, color: "text-brandRed" },
    { name: "AI Startups", href: "/companies", icon: Rocket, color: "text-purple-500 dark:text-purple-400" },
    { name: "AI Products", href: "/products", icon: Box, color: "text-emerald-500 dark:text-emerald-400" },
    { name: "Investors", href: "/investors", icon: Users, color: "text-amber-500 dark:text-amber-400" },
    { name: "Jobs", href: "/jobs", icon: Briefcase, color: "text-blue-500 dark:text-blue-400" },
    { name: "News", href: "/news", icon: FileText, color: "text-indigo-500 dark:text-indigo-400" }
  ];

  const contributeItems = [
    { name: "Submit Startup", href: "/submit-startup", icon: Rocket, color: "text-pink-500 dark:text-pink-400" },
    { name: "Submit Product", href: "/submit-product", icon: PlusSquare, color: "text-violet-500 dark:text-violet-400" }
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white dark:bg-zinc-900 border-r border-slate-100 dark:border-zinc-800 w-64 p-5">
      {/* Brand Logo */}
      <div className="flex items-center gap-2 mb-8 mt-2">
        <Link href="/" className="flex items-center gap-2">
          <GraphOneLogo className="w-8 h-8 flex-shrink-0" />
          <span className="font-extrabold text-xl tracking-tight text-slate-800 dark:text-white">
            GraphOne
          </span>
        </Link>
        {onClose && (
          <button 
            onClick={onClose} 
            className="md:hidden ml-auto p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-500 dark:text-zinc-400"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Main Navigation */}
      <div className="flex-1 space-y-6">
        <div>
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = item.href === "/" 
                ? pathname === "/" 
                : pathname.startsWith(item.href);

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-black transition-all duration-200 ${
                      isActive
                        ? "bg-brandRed-light dark:bg-brandRed/10 text-brandRed"
                        : "text-slate-700 hover:bg-slate-50 dark:text-zinc-300 dark:hover:bg-zinc-800/50 hover:text-slate-900 dark:hover:text-zinc-100"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contribute Actions */}
        <div className="space-y-2">
          <span className="text-[10px] font-black tracking-wider text-slate-400 dark:text-zinc-500 uppercase px-3">
            Contribute
          </span>
          <ul className="space-y-1">
            {contributeItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-black transition-all duration-200 ${
                      isActive
                        ? "bg-brandRed-light dark:bg-brandRed/10 text-brandRed"
                        : "text-slate-700 hover:bg-slate-50 dark:text-zinc-300 dark:hover:bg-zinc-800/50 hover:text-slate-900 dark:hover:text-zinc-100"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );

  if (persistent) {
    return sidebarContent;
  }

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Mobile Drawer Content */}
      <aside 
        className={`lg:hidden fixed inset-y-0 left-0 w-64 h-full z-40 bg-white dark:bg-zinc-900 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
