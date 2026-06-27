# GraphOne AI — The Global Intelligence Layer

This is a premium, high-fidelity replica dashboard directory for **GraphOne AI** built using **Next.js 14 (App Router)**, **TypeScript (strict mode)**, and **Tailwind CSS**.

---

## 🚀 Key Features

1. **Dashboard Shell (Left Navigation Sidebar & Top Header)**:
   * Glassmorphic header with user notifications, dynamic profile details, and mobile-responsive drawer toggles.
   * Sticky left sidebar showing categories and submission triggers.
   * Full light/dark mode configuration integrated with Tailwind and stored in `localStorage` to prevent flashes.

2. **Screen 1 & 5 — Home & AI Products Page (`/`)**:
   * Circular interactive SVG Ecosystem Graph connecting hot technologies.
   * Featured "Vibe Coding Tools" card with overlapping user avatars.
   * Product of the Day card (Cursor).
   * Real-time category filtering tabs (Chat, Code, Video, Voice, etc.) that interactively render platform cards.
   * Live like state toggles that dynamically increment likes.
   * Stay ahead newsletter subscription box and trending search tags sidebar widget.

3. **Screen 2 — AI Startups Directory Page (`/companies`)**:
   * Category search index with grid filters for Unicorns, Emerging Startups, and Sector Groups.
   * Company cards displaying total funding, valuation, and 12-month employee growth.

4. **Screen 3 — Company Detail Page (`/companies/[id]`)**:
   * Profile header showing stats and social links.
   * Custom SVG interactive ecosystem node tree connecting founders, core products, and lead VC funds.
   * Funding history rounds table and Area Chart (Recharts) representing historical funding milestones.
   * Milepost timeline, product list, and similar startup cards.

5. **Screen 4 — Investors Discovery Page (`/investors`)**:
   * Investor listings filtering VCs, Angel networks, and active syndicated partnerships.
   * Portfolios highlighting Assets Under Management (AUM) and average lead check sizes.

6. **Screen 5 — Investor Profile Page (`/investors/[id]`)**:
   * Thesis summaries and co-investment network cards.
   * Portfolio Concentration Donut Chart (Recharts) detailing sector holdings.
   * Deal Velocity Bar Chart (Recharts) displaying quarterly investment numbers.
   * Recent lead investment history lists.

7. **Live Typeahead Search Modal**:
   * Triggers anywhere via the `/` keyboard shortcut (Esc to close).
   * Grouped searches across companies, products, investors, and founders with keyboard navigation (arrow keys + Enter) support.

---

## 🛠️ Tech Stack

* **Framework**: Next.js 14 (App Router)
* **Language**: TypeScript (Strict Mode)
* **Styling**: Tailwind CSS
* **Animations**: Framer Motion
* **Charts**: Recharts (with hydration-safe wrappers)
* **Icons**: Lucide React

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── layout.tsx         # Global Shell, Font configuration, ClientShell wrapper
│   ├── globals.css        # Tailwind directives, theme variables, custom scrollbars
│   ├── page.tsx           # Home & AI Products discovery page (Screen 1)
│   ├── companies/
│   │   ├── page.tsx       # AI Startups directory listing (Screen 2)
│   │   └── [id]/
│   │       └── page.tsx   # Company dynamic profile (Screen 3)
│   ├── investors/
│   │   ├── page.tsx       # Investors discovery directory (Screen 4)
│   │   └── [id]/
│   │       └── page.tsx   # Investor dynamic profile (Screen 5)
│   └── products/
│       └── page.tsx       # Dedicated AI Products search catalogue (Screen 5 bonus)
├── components/
│   ├── Sidebar.tsx        # Responsive left navigation panel
│   ├── Header.tsx         # Top bar navigation, notifications, theme toggles
│   ├── SearchModal.tsx    # Live '/' key typeahead overlay
│   ├── EcosystemGraph.tsx # Custom SVG dynamic relationship diagram
│   ├── Charts.tsx         # Recharts wrappers with dynamic theme variables
│   └── ClientShell.tsx    # Coordinating context wrapper
├── context/
│   └── ThemeContext.tsx   # Local storage theme toggler provider
└── data/
    └── mockData.ts        # Database schema models and records for companies, investors, and products
```

---

## ⚙️ Local Setup Instructions

Follow these steps to run the application locally on your machine:

### 1. Install Dependencies
Clone the repository, navigate to the folder, and run:
```bash
npm install
```

### 2. Run Development Server
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for Production
Verify that the project compiles and builds successfully for deployment:
```bash
npm run build
```

### 4. Start Production Server
Launch the optimized build:
```bash
npm run start
```
