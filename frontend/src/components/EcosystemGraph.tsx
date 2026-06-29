"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Node {
  id: string;
  label: string;
  type: "company" | "investor" | "product" | "founder";
  logo: string;
  url: string;
  angle: number; // in degrees, for radial placement
}

interface EcosystemGraphProps {
  centerNode: {
    name: string;
    logo: string;
    logoBg?: string;
  };
  nodes: Node[];
  height?: number;
}

export default function EcosystemGraph({ centerNode, nodes, height = 355 }: EcosystemGraphProps) {
  const router = useRouter();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const cx = 200;
  const cy = 175;
  const radius = 125;

  const handleNodeClick = (url: string) => {
    if (url) {
      router.push(url);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-50/50 dark:bg-zinc-900/20 border border-slate-100 dark:border-zinc-800 rounded-2xl flex items-center justify-center p-4">
      {/* Dynamic inline styles for SVG animated dashes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animated-line {
          stroke-dasharray: 6, 4;
          animation: dash 1s linear infinite;
        }
      `}} />

      <svg 
        viewBox="0 0 400 350" 
        className="w-full max-w-[400px] h-auto drop-shadow-sm select-none"
        style={{ height: `${height}px` }}
      >
        {/* Radial guidelines */}
        <circle 
          cx={cx} 
          cy={cy} 
          r={radius} 
          fill="none" 
          stroke="rgba(255, 26, 61, 0.08)" 
          strokeWidth="1.5" 
          strokeDasharray="4 4" 
        />
        <circle 
          cx={cx} 
          cy={cy} 
          r={radius - 40} 
          fill="none" 
          stroke="rgba(124, 58, 237, 0.05)" 
          strokeWidth="1" 
          strokeDasharray="2 2" 
        />

        {/* Connections from center to nodes */}
        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x2 = cx + radius * Math.cos(rad);
          const y2 = cy + radius * Math.sin(rad);
          const isHovered = hoveredNode === node.id;

          return (
            <line
              key={`line-${node.id}`}
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              stroke={
                isHovered 
                  ? "url(#hoverGrad)" 
                  : "rgba(148, 163, 184, 0.2)"
              }
              strokeWidth={isHovered ? "2.5" : "1.5"}
              className={`transition-all duration-200 ${isHovered ? "animated-line" : ""}`}
            />
          );
        })}

        {/* Gradients */}
        <defs>
          <linearGradient id="hoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff1a3d" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Orbit Nodes */}
        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = cx + radius * Math.cos(rad);
          const y = cy + radius * Math.sin(rad);
          const isHovered = hoveredNode === node.id;

          return (
            <g
              key={node.id}
              onClick={() => handleNodeClick(node.url)}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              {/* Connection point indicator */}
              <circle
                cx={x}
                cy={y}
                r={isHovered ? 26 : 22}
                fill={isHovered ? "var(--background)" : "var(--background)"}
                stroke={
                  isHovered
                    ? "#ff1a3d"
                    : node.type === "investor"
                    ? "rgba(16, 185, 129, 0.3)"
                    : node.type === "product"
                    ? "rgba(255, 26, 61, 0.3)"
                    : "rgba(124, 58, 237, 0.3)"
                }
                strokeWidth={isHovered ? "2" : "1"}
                className="transition-all duration-200"
                style={{ filter: "url(#shadow)" }}
              />

              {/* Node Logo Text/Icon */}
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                fontSize={isHovered ? "15" : "13"}
                className="select-none"
              >
                {node.logo}
              </text>

              {/* Node Label Card */}
              <rect
                x={x - 45}
                y={y + (y > cy ? 28 : -42)}
                width="90"
                height="18"
                rx="4"
                fill="var(--background)"
                stroke={isHovered ? "rgba(255, 26, 61, 0.4)" : "rgba(148, 163, 184, 0.15)"}
                strokeWidth="1"
                style={{ filter: "url(#shadow)" }}
              />
              <text
                x={x}
                y={y + (y > cy ? 40 : -30)}
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="700"
                fill="var(--foreground)"
                className="opacity-90 select-none pointer-events-none"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Center Node (Always Focal Entity) */}
        <g className="cursor-default">
          {/* Outer glow rings */}
          <circle
            cx={cx}
            cy={cy}
            r="44"
            fill="none"
            stroke="rgba(255, 26, 61, 0.04)"
            strokeWidth="8"
          />
          <circle
            cx={cx}
            cy={cy}
            r="38"
            fill="none"
            stroke="rgba(255, 26, 61, 0.08)"
            strokeWidth="4"
          />
          {/* Main node base */}
          <circle
            cx={cx}
            cy={cy}
            r="32"
            fill="#ff1a3d"
            className="shadow-lg"
          />
          {/* Center Logo text */}
          <text
            x={cx}
            y={cy + 7}
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="bold"
            className="select-none"
          >
            {centerNode.logo}
          </text>
        </g>
      </svg>

      {/* Floating Info Badge on Hover */}
      {hoveredNode && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/90 dark:bg-zinc-950/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-zinc-800 shadow-xl flex items-center gap-1.5 pointer-events-none transition-opacity duration-150">
          <span>Click to inspect {nodes.find(n => n.id === hoveredNode)?.label}</span>
          <span className="text-brandRed">→</span>
        </div>
      )}
    </div>
  );
}
