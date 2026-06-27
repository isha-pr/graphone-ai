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
  PlusCircle, 
  X 
} from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "AI Startups", href: "/companies", icon: Rocket },
    { name: "AI Products", href: "/products", icon: Box },
    { name: "Investors", href: "/investors", icon: Users },
    { name: "Jobs", href: "/jobs", icon: Briefcase, disabled: true },
    { name: "News", href: "/news", icon: FileText, disabled: true }
  ];

  const contributeItems = [
    { name: "Submit Startup", href: "/submit-startup", icon: PlusCircle, disabled: true },
    { name: "Submit Product", href: "/submit-product", icon: PlusCircle, disabled: true }
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white dark:bg-zinc-900 border-r border-slate-100 dark:border-zinc-800 w-64 p-5">
      {/* Brand Logo */}
      <div className="flex items-center gap-2 mb-8 mt-2">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brandRed flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-brandRed/45">
            G
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-800 dark:text-white">
            GraphOne <span className="text-brandRed text-xs font-semibold align-super">AI</span>
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
          <span className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-zinc-500 uppercase px-3">
            Navigation
          </span>
          <ul className="mt-2 space-y-1">
            {navItems.map((item) => {
              // Exact match for home, startsWith for others
              const isActive = item.href === "/" 
                ? pathname === "/" 
                : pathname.startsWith(item.href);
              
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  {item.disabled ? (
                    <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-350 dark:text-zinc-600 text-sm cursor-not-allowed opacity-60">
                      <Icon size={18} />
                      <span>{item.name}</span>
                      <span className="ml-auto text-[9px] bg-slate-100 dark:bg-zinc-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">SOON</span>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-brandRed-light dark:bg-brandRed/10 text-brandRed"
                          : "text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800/50 hover:text-slate-900 dark:hover:text-zinc-100"
                      }`}
                    >
                      <Icon size={18} className={isActive ? "text-brandRed" : "text-slate-400 dark:text-zinc-500"} />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contribute Actions */}
        <div>
          <span className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-zinc-500 uppercase px-3">
            Contribute
          </span>
          <ul className="mt-2 space-y-1">
            {contributeItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 dark:text-zinc-650 text-sm opacity-70 cursor-not-allowed">
                    <Icon size={18} className="text-slate-400 dark:text-zinc-650" />
                    <span className="font-medium text-slate-500 dark:text-zinc-500">{item.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-[11px] text-slate-400 dark:text-zinc-500">
        <p>© 2026 GraphOne AI.</p>
        <p className="mt-0.5">The Global Intelligence Layer.</p>
      </div>
    </div>
  );

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
