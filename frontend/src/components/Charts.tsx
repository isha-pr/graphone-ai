"use client";

import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from "recharts";

// Hydration guard wrapper
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(false); // Make sure it renders only client-side to measure bounds correctly
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[250px] w-full flex items-center justify-center bg-slate-50/50 dark:bg-zinc-900/30 rounded-xl border border-dashed border-slate-200 dark:border-zinc-800 animate-pulse text-xs text-slate-400 dark:text-zinc-500">
        Loading analytics visualization...
      </div>
    );
  }

  return <>{children}</>;
}

// 1. Funding Growth Chart (Area)
interface FundingData {
  round: string;
  amountNumeric: number; // in Millions
  amountLabel: string;
  valuationLabel: string;
}

export function FundingGrowthChart({ rounds }: { rounds: { round: string; amount: string; valuation: string }[] }) {
  // Format rounds data: reverse it so it goes chronologically, parse amount strings like "$12.5M", "$300M" to float
  const chartData: FundingData[] = [...rounds]
    .reverse()
    .map((r) => {
      let num = 0;
      const cleanAmount = r.amount.replace(/[^0-9.]/g, "");
      if (r.amount.includes("B")) {
        num = parseFloat(cleanAmount) * 1000; // convert B to M
      } else if (r.amount.includes("M")) {
        num = parseFloat(cleanAmount);
      }
      return {
        round: r.round,
        amountNumeric: num,
        amountLabel: r.amount,
        valuationLabel: r.valuation
      };
    })
    .filter(d => d.amountNumeric > 0);

  return (
    <ClientOnly>
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorFunding" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff1a3d" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ff1a3d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="round" 
              stroke="#888888" 
              fontSize={11} 
              tickLine={false} 
              axisLine={false} 
              dy={10}
            />
            <YAxis 
              stroke="#888888" 
              fontSize={11} 
              tickLine={false} 
              axisLine={false}
              tickFormatter={(value) => `$${value >= 1000 ? `${(value/1000).toFixed(1)}B` : `${value}M`}`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload as FundingData;
                  return (
                    <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-3 rounded-xl shadow-xl">
                      <p className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">{data.round} Round</p>
                      <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-1">Amount: {data.amountLabel}</p>
                      <p className="text-xs text-slate-400 dark:text-zinc-500 mt-0.5">Valuation: {data.valuationLabel}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area 
              type="monotone" 
              dataKey="amountNumeric" 
              stroke="#ff1a3d" 
              strokeWidth={2.5} 
              fillOpacity={1} 
              fill="url(#colorFunding)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ClientOnly>
  );
}

// 2. Portfolio Sector Concentration Chart (Pie / Donut)
const COLORS = ["#ff1a3d", "#7c3aed", "#10b981", "#3b82f6", "#f59e0b", "#6366f1"];

export function PortfolioConcentrationChart({ data }: { data: { sector: string; percentage: number }[] }) {
  return (
    <ClientOnly>
      <div className="h-[250px] w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={85}
              paddingAngle={4}
              dataKey="percentage"
              nameKey="sector"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const item = payload[0];
                  return (
                    <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-2.5 rounded-xl shadow-xl text-xs">
                      <span className="font-semibold text-slate-800 dark:text-zinc-200">{item.name}: </span>
                      <span className="font-bold text-slate-950 dark:text-white">{item.value}%</span>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconSize={10} 
              iconType="circle"
              formatter={(value) => <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ClientOnly>
  );
}

// 3. Investment Velocity Chart (Bar)
export function InvestmentVelocityChart({ data }: { data: { quarter: string; count: number }[] }) {
  return (
    <ClientOnly>
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
            <XAxis 
              dataKey="quarter" 
              stroke="#888888" 
              fontSize={11} 
              tickLine={false} 
              axisLine={false}
              dy={8}
            />
            <YAxis 
              stroke="#888888" 
              fontSize={11} 
              tickLine={false} 
              axisLine={false}
              allowDecimals={false}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const item = payload[0];
                  return (
                    <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-2.5 rounded-xl shadow-xl text-xs">
                      <p className="font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">{item.payload.quarter}</p>
                      <p className="font-extrabold text-slate-900 dark:text-white mt-1">Deals Closed: {item.value}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar 
              dataKey="count" 
              fill="#7c3aed" 
              radius={[4, 4, 0, 0]} 
              maxBarSize={45} 
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === data.length - 1 ? "#ff1a3d" : "#7c3aed"} 
                  fillOpacity={0.85}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ClientOnly>
  );
}
