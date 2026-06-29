# GraphOne API

Intelligence graph API for AI startups, investors, founders, and products.

## Live API
Base URL: `https://graphone-ai.onrender.com/`
Swagger Docs: `https://graphone-ai.onrender.com/api-docs/`

## Local Setup

### Prerequisites
- Node.js 18+
- Supabase account

### Steps
1. Clone the repo
```bash
git clone https://github.com/isha-pr/graphone-ai.git
cd graphone-ai
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key
API_SECRET_KEY=your-secret-key
PORT=3000
```

4. Run the database migration
- Go to Supabase SQL Editor
- Paste and run `migrations/001_init.sql`

5. Seed the database
```bash
npm run seed
```

6. Start the server
```bash
npm run dev
```

## API Endpoints

### Companies
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /companies | List with filters: category, stage, country, sort |
| GET | /companies/trending | Top 10 by trending score (cached 5min) |
| GET | /companies/:slug | Full company profile |
| GET | /companies/:slug/funding | Funding rounds timeline |
| GET | /companies/:slug/products | Company products |
| GET | /companies/:slug/graph | 1-hop ecosystem graph |
| POST | /companies | Create company (requires X-API-Key) |

### Investors
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /investors | List with filters: type, stage_focus, sector |
| GET | /investors/most-active | Top 10 by deal count last 90 days |
| GET | /investors/:slug | Full investor profile |
| GET | /investors/:slug/investments | Paginated investment history |
| GET | /investors/:slug/co-investors | Most frequent syndication partners |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /products | List with category filter + sort |
| GET | /products/:slug | Product detail |

### News
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /news | Paginated feed with tag filter |
| GET | /news/trending | Most read in last 24 hours |

### Founders
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /founders/:slug | Founder profile with linked company |

### Search & Utility
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /search?q= | Cross-entity search |
| GET | /stats | Platform aggregate stats (cached 5min) |
| GET | /feed | Ranked activity feed |

## Authentication
Write operations require an API key in the request header:
```
X-API-Key: your-secret-key
```

## Response Format
Every response follows this consistent shape:
```json
{
  "data": {},
  "meta": { "total": 100, "limit": 20, "offset": 0 },
  "error": null
}
```

Error responses:
```json
{
  "data": null,
  "meta": {},
  "error": {
    "code": "NOT_FOUND",
    "message": "Company not found."
  }
}
```

## Rate Limiting
100 requests per minute per IP. Exceeding returns HTTP 429.

## Trending Score Formula

The trending score is a weighted composite signal computed for every company:

```
trending_score =
  (funding_recency_score  * 0.35) +
  (news_mentions_7d_score * 0.25) +
  (product_upvotes_score  * 0.20) +
  (employee_count_score   * 0.15) +
  (data_confidence_score  * 0.05)
```

### Signal breakdown

| Signal | Weight | Formula | Reasoning |
|--------|--------|---------|-----------|
| Funding recency | 35% | 100 / (days_since_last_funding + 1) | Fresh capital is the strongest leading indicator of momentum |
| News mentions (7d) | 25% | (mentions / 20) * 100, capped at 100 | Media attention drives discovery and user interest |
| Product upvotes | 20% | (upvotes / 10000) * 100, capped at 100 | Community validation signals real-world traction |
| Employee count | 15% | (employees / 5000) * 100, capped at 100 | Headcount growth is a lagging but reliable growth proxy |
| Data confidence | 5% | Already 0-100 | Rewards complete profiles, penalizes sparse data |

### Example
A company that raised $500M last week, has 8 news articles this week, 5000 product upvotes, 300 employees, and a 90% complete profile scores:
- Funding: 100 / (7 + 1) = 12.5 → weighted: 4.375
- News: (8/20)*100 = 40 → weighted: 10
- Upvotes: (5000/10000)*100 = 50 → weighted: 10
- Employees: (300/5000)*100 = 6 → weighted: 0.9
- Confidence: 90 → weighted: 4.5
- **Total: 29.775 / 100**

Scores are refreshed by calling `SELECT refresh_all_trending_scores()` in Supabase.

## Caching
| Endpoint | TTL | Strategy |
|----------|-----|---------|
| /companies/trending | 5 min | node-cache in-memory |
| /investors/most-active | 5 min | node-cache in-memory |
| /news/trending | 10 min | node-cache in-memory |
| /stats | 5 min | node-cache in-memory |

## Database Schema
7 tables: companies, investors, funding_rounds, founders, products, news_articles, company_views

4 views: company_profiles, investor_activity, co_investor_pairs, platform_stats

Full migration: `migrations/001_init.sql`

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express
- **Database**: Supabase (Postgres)
- **Validation**: Zod
- **Caching**: node-cache
- **Docs**: Swagger UI
- **Deploy**: Railway

## What I Would Build Next (with 2 more days)

### 1. Semantic search with embeddings
Replace simple ILIKE search with vector embeddings. Store company/investor descriptions as pgvector embeddings in Supabase. Query with cosine similarity so "find me companies doing reasoning AI" returns Anthropic, DeepSeek, and Imbue — not just exact keyword matches.

### 2. Webhook system for funding alerts
Let users subscribe to `company.funded`, `company.trending`, and `investor.active` events. When a new funding round is inserted, fire a webhook to registered URLs. This turns GraphOne from a pull API into a real-time intelligence feed.

### 3. Automated trending score refresh
Set up a pg_cron job in Supabase to call `refresh_all_trending_scores()` every hour automatically. Right now scores are static after seeding. With auto-refresh, trending reflects real activity in real time.

### 4. Competitor detection via graph analysis
Use the co_investor_pairs view to build a proper graph traversal — if two companies share 3+ investors and are in the same category, flag them as competitors automatically. Surface this in the /graph endpoint as a confidence-scored competitor edge.

### 5. Public leaderboard with time-series trending
Store daily snapshots of trending_score per company in a new table. Plot score over time to show rising vs falling companies. A company jumping from score 20 to 80 in 7 days is a stronger signal than one sitting at 80 for months.
