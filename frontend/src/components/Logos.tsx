"use client";

import React from "react";

interface LogoProps {
  className?: string;
}

// GraphOne Main Brand Hexagon Logo
export const GraphOneLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2.5 7.5v9L12 22l9.5-5.5v-9L12 2z" fill="#ff1a3d" />
    <path d="M6 14.5l6 3 6-3M6 10l6 3 6-3M12 5.5l6 3-6 3-6-3 6-3z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Cursor Logo
export const CursorLogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5.5 17.5l6-6-6-6M13.5 17.5h5.5" />
  </svg>
);

// Claude Logo
export const ClaudeLogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212z"/>
  </svg>
);

// Lovable Logo
export const LovableLogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="url(#lovableGradient)" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lovableGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff4582" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

// Midjourney Logo
export const MidjourneyLogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v13M12 3.5c3.5 3 6.5 6.5 6.5 9.5H12M12 5.5c-3 2.5-5.5 5.5-5.5 7.5h5.5M3 17.5h18c-2 2-5 3-9 3s-7-1-9-3z" />
  </svg>
);

// Perplexity Logo
export const PerplexityLogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M8 .188a.5.5 0 0 1 .503.5V4.03l3.022-2.92.059-.048a.51.51 0 0 1 .49-.054.5.5 0 0 1 .306.46v3.247h1.117l.1.01a.5.5 0 0 1 .403.49v5.558a.5.5 0 0 1-.503.5H12.38v3.258a.5.5 0 0 1-.312.462.51.51 0 0 1-.55-.11l-3.016-3.018v3.448c0 .275-.225.5-.503.5a.5.5 0 0 1-.503-.5v-3.448l-3.018 3.019a.51.51 0 0 1-.548.11.5.5 0 0 1-.312-.463v-3.258H2.503a.5.5 0 0 1-.503-.5V5.215l.01-.1c.047-.229.25-.4.493-.4H3.62V1.469l.006-.074a.5.5 0 0 1 .302-.387.51.51 0 0 1 .547.102l3.023 2.92V.687c0-.276.225-.5.503-.5M4.626 9.333v3.984l2.87-2.872v-4.01zm3.877 1.113 2.871 2.871V9.333l-2.87-2.897zm3.733-1.668a.5.5 0 0 1 .145.35v1.145h.612V5.715H9.201zm-9.23 1.495h.613V9.13c0-.131.052-.257.145-.35l3.033-3.064h-3.79zm1.62-5.558H6.76L4.626 2.652zm4.613 0h2.134V2.652z"/>
  </svg>
);

// OpenAI Logo
export const OpenAILogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934A4.1 4.1 0 0 0 8.423.2 4.15 4.15 0 0 0 6.305.086a4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679A4 4 0 0 0 .554 4.72a3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057L5.29 12.09a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041L6.473 13.3c-1.454.826-3.311.335-4.15-1.098m-.85-6.94A3.02 3.02 0 0 1 3.07 3.949v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094zm11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04L9.533 2.7a3.07 3.07 0 0 1 .257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664zM5.503 8.575 4.139 7.8a.05.05 0 0 1-.026-.037V4.049c0-.57.166-1.127.476-1.607s.752-.864 1.275-1.105a3.08 3.08 0 0 1 .134-.142"/>
  </svg>
);

// ChatGPT Logo
export const ChatGPTLogo = OpenAILogo;

// Anthropic Logo
export const AnthropicLogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L3 22h4l2.5-6h5l2.5 6h4L12 2zm-1.5 11L12 7.5l1.5 5.5h-3z" />
  </svg>
);

// Runway Logo
export const RunwayLogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 4h6a5 5 0 0 1 5 5 5 5 0 0 1-5 5H8v6H6V4zm2 2v6h4a3 3 0 0 0 3-3 3 3 0 0 0-3-3H8z" />
  </svg>
);

// ElevenLabs Logo
export const ElevenLabsLogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="7" y="4" width="3.2" height="16" rx="1.2" />
    <rect x="13.8" y="4" width="3.2" height="12" rx="1.2" />
  </svg>
);

// Descript Logo
export const DescriptLogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="4" y="5" width="10" height="2.5" rx="1.2" />
    <rect x="4" y="10.75" width="16" height="2.5" rx="1.2" />
    <rect x="4" y="16.5" width="12" height="2.5" rx="1.2" />
  </svg>
);

// Canva Logo
export const CanvaLogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="url(#canvaGradient)">
    <defs>
      <linearGradient id="canvaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00c4cc" />
        <stop offset="50%" stopColor="#7d2ae8" />
        <stop offset="100%" stopColor="#ff4582" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" />
    <path d="M15 9a3.5 3.5 0 0 0-5 0v6a3.5 3.5 0 0 0 5 0" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Databricks Logo
export const DatabricksLogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L2.5 8.5v7L12 21l9.5-5.5v-7L12 3z" fill="#FF3621" />
    <path d="M12 3v18M2.5 8.5l9.5 5.5 9.5-5.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Notion Logo
export const NotionLogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="black" />
    <path d="M6.5 6v12h2.5V10.5l5 7.5H16.5V6H14v7.5l-5-7.5H6.5z" fill="white" />
  </svg>
);

// Pinecone Logo
export const PineconeLogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22l7-9H5l7 9z" fill="#10b981" stroke="#10b981" />
    <path d="M12 17l6-8H6l6 8z" fill="#059669" stroke="#059669" />
    <path d="M12 12l5-7H7l5 7z" fill="#047857" stroke="#047857" />
  </svg>
);

// Weaviate Logo
export const WeaviateLogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 16c3-6 7-6 10 0s6 6 10 0" stroke="#10b981" />
    <path d="M4 8c3 6 7 6 10 0s6-6 10 0" stroke="#34d399" />
  </svg>
);

// LangChain Logo
export const LangChainLogo = ({ className = "w-4 h-4" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="11" height="8" rx="2" stroke="#10b981" fill="#10b981" fillOpacity="0.1" />
    <rect x="10" y="5" width="11" height="8" rx="2" stroke="#047857" fill="#047857" fillOpacity="0.2" />
  </svg>
);

// GraphOne Studio Logo
export const StudioLogo = ({ className = "w-8 h-8" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2.5 7.5v9L12 22l9.5-5.5v-9L12 2z" fill="#7c3aed" />
    <path d="M6 14.5l6 3 6-3M6 10l6 3 6-3M12 5.5l6 3-6 3-6-3 6-3z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
