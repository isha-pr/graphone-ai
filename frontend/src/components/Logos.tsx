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
  <svg className={className} viewBox="0 0 512 509.64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#D77655" d="M115.612 0h280.775C459.974 0 512 52.026 512 115.612v278.415c0 63.587-52.026 115.612-115.613 115.612H115.612C52.026 509.639 0 457.614 0 394.027V115.612C0 52.026 52.026 0 115.612 0z"/>
    <path fill="#FCF2EE" fillRule="nonzero" d="M142.27 316.619l73.655-41.326 1.238-3.589-1.238-1.996-3.589-.001-12.31-.759-42.084-1.138-36.498-1.516-35.361-1.896-8.897-1.895-8.34-10.995.859-5.484 7.482-5.03 10.717.935 23.683 1.617 35.537 2.452 25.782 1.517 38.193 3.968h6.064l.86-2.451-2.073-1.517-1.618-1.517-36.776-24.922-39.81-26.338-20.852-15.166-11.273-7.683-5.687-7.204-2.451-15.721 10.237-11.273 13.75.935 3.513.936 13.928 10.716 29.749 23.027 38.848 28.612 5.687 4.727 2.275-1.617.278-1.138-2.553-4.271-21.13-38.193-22.546-38.848-10.035-16.101-2.654-9.655c-.935-3.968-1.617-7.304-1.617-11.374l11.652-15.823 6.445-2.073 15.545 2.073 6.547 5.687 9.655 22.092 15.646 34.78 24.265 47.291 7.103 14.028 3.791 12.992 1.416 3.968 2.449-.001v-2.275l1.997-26.641 3.69-32.707 3.589-42.084 1.239-11.854 5.863-14.206 11.652-7.683 9.099 4.348 7.482 10.716-1.036 6.926-4.449 28.915-8.72 45.294-5.687 30.331h3.313l3.792-3.791 15.342-20.372 25.782-32.227 11.374-12.789 13.27-14.129 8.517-6.724 16.1-.001 11.854 17.617-5.307 18.199-16.581 21.029-13.75 17.819-19.716 26.54-12.309 21.231 1.138 1.694 2.932-.278 44.536-9.479 24.062-4.347 28.714-4.928 12.992 6.066 1.416 6.167-5.106 12.613-30.71 7.583-36.018 7.204-53.636 12.689-.657.48.758.935 24.164 2.275 10.337.556h25.301l47.114 3.514 12.309 8.139 7.381 9.959-1.238 7.583-18.957 9.655-25.579-6.066-59.702-14.205-20.474-5.106-2.83-.001v1.694l17.061 16.682 31.266 28.233 39.152 36.397 1.997 8.999-5.03 7.102-5.307-.758-34.401-25.883-13.27-11.651-30.053-25.302-1.996-.001v2.654l6.926 10.136 36.574 54.975 1.895 16.859-2.653 5.485-9.479 3.311-10.414-1.895-21.408-30.054-22.092-33.844-17.819-30.331-2.173 1.238-10.515 113.261-4.929 5.788-11.374 4.348-9.478-7.204-5.03-11.652 5.03-23.027 6.066-30.052 4.928-23.886 4.449-29.674 2.654-9.858-.177-.657-2.173.278-22.37 30.71-34.021 45.977-26.919 28.815-6.445 2.553-11.173-5.789 1.037-10.337 6.243-9.2 37.257-47.392 22.47-29.371 14.508-16.961-.101-2.451h-.859l-98.954 64.251-17.618 2.275-7.583-7.103.936-11.652 3.589-3.791 29.749-20.474-.101.102.024.101z" />
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
