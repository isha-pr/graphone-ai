const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "GraphOne API",
      version: "1.0.0",
      description: "Intelligence graph API for AI startups, investors, founders, and products. Tracks funding, trends, and ecosystem connections.",
      contact: {
        name: "GraphOne",
        url: "https://graphone.io"
      }
    },
    servers: [
      { url: "http://localhost:3000", description: "Local development" },
      { url: "https://graphone-api.railway.app", description: "Production" }
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "X-API-Key"
        }
      },
      schemas: {
        Company: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            name: { type: "string", example: "OpenAI" },
            slug: { type: "string", example: "openai" },
            description: { type: "string" },
            category: { type: "string", example: "LLM" },
            stage: { type: "string", example: "growth" },
            funding_total: { type: "integer", example: 11300000000 },
            valuation: { type: "integer", example: 80000000000 },
            employee_count: { type: "integer", example: 1800 },
            founded_year: { type: "integer", example: 2015 },
            hq_city: { type: "string", example: "San Francisco" },
            hq_country: { type: "string", example: "USA" },
            is_unicorn: { type: "boolean", example: true },
            trending_score: { type: "number", example: 87.5432 },
            growth_score: { type: "number", example: 98 },
            website: { type: "string", example: "https://openai.com" }
          }
        },
        Investor: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            name: { type: "string", example: "Andreessen Horowitz" },
            slug: { type: "string", example: "andreessen-horowitz" },
            type: { type: "string", enum: ["VC", "Angel", "Corporate", "Family Office", "Accelerator"] },
            bio: { type: "string" },
            aum: { type: "integer", example: 35000000000 },
            portfolio_count: { type: "integer", example: 500 },
            stage_focus: { type: "array", items: { type: "string" }, example: ["seed", "series-a"] },
            sector_focus: { type: "array", items: { type: "string" }, example: ["AI", "FinTech"] },
            location: { type: "string", example: "Menlo Park, CA" }
          }
        },
        FundingRound: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            company_id: { type: "string", format: "uuid" },
            round_type: { type: "string", example: "series-b" },
            amount: { type: "integer", example: 500000000 },
            currency: { type: "string", example: "USD" },
            date: { type: "string", format: "date", example: "2024-03-28" },
            valuation_at: { type: "integer", example: 18000000000 }
          }
        },
        Product: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            name: { type: "string", example: "ChatGPT" },
            slug: { type: "string", example: "chatgpt" },
            category: { type: "string", example: "Chatbot" },
            upvotes: { type: "integer", example: 98000 },
            launch_date: { type: "string", format: "date" },
            website_url: { type: "string" }
          }
        },
        NewsArticle: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            title: { type: "string" },
            url: { type: "string" },
            published_at: { type: "string", format: "date-time" },
            source: { type: "string", example: "TechCrunch" },
            tag: { type: "string", example: "funding" },
            summary: { type: "string" }
          }
        },
        ApiResponse: {
          type: "object",
          properties: {
            data: { description: "The response payload" },
            meta: { type: "object", description: "Pagination and extra info" },
            error: { description: "null on success, error object on failure" }
          }
        },
        Error: {
          type: "object",
          properties: {
            data: { type: "null" },
            meta: { type: "object" },
            error: {
              type: "object",
              properties: {
                code: { type: "string", example: "NOT_FOUND" },
                message: { type: "string", example: "Company not found." }
              }
            }
          }
        }
      }
    },
    paths: {
      "/companies": {
        get: {
          summary: "List all companies",
          tags: ["Companies"],
          parameters: [
            { name: "category", in: "query", schema: { type: "string" }, example: "LLM" },
            { name: "stage", in: "query", schema: { type: "string" }, example: "series-b" },
            { name: "country", in: "query", schema: { type: "string" }, example: "USA" },
            { name: "sort", in: "query", schema: { type: "string", enum: ["trending", "funded", "new"] } },
            { name: "limit", in: "query", schema: { type: "integer", default: 20 } },
            { name: "offset", in: "query", schema: { type: "integer", default: 0 } }
          ],
          responses: {
            200: { description: "List of companies", content: { "application/json": { schema: { "$ref": "#/components/schemas/ApiResponse" } } } }
          }
        },
        post: {
          summary: "Create a new company",
          tags: ["Companies"],
          security: [{ ApiKeyAuth: [] }],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["name", "slug", "category"],
                  properties: {
                    name: { type: "string" },
                    slug: { type: "string" },
                    category: { type: "string" },
                    stage: { type: "string" },
                    founded_year: { type: "integer" },
                    hq_country: { type: "string" }
                  }
                }
              }
            }
          },
          responses: {
            201: { description: "Company created" },
            401: { description: "Invalid or missing API key" }
          }
        }
      },
      "/companies/trending": {
        get: {
          summary: "Top 10 trending companies",
          tags: ["Companies"],
          description: "Returns top 10 companies ranked by trending score. Cached for 5 minutes. Formula: 35% funding recency + 25% news mentions (7d) + 20% product upvotes + 15% employee count + 5% data confidence.",
          responses: {
            200: { description: "Top 10 trending companies with scores" }
          }
        }
      },
      "/companies/{slug}": {
        get: {
          summary: "Get company full profile",
          tags: ["Companies"],
          parameters: [{ name: "slug", in: "path", required: true, schema: { type: "string" }, example: "openai" }],
          responses: {
            200: { description: "Full company profile" },
            404: { description: "Company not found" }
          }
        }
      },
      "/companies/{slug}/funding": {
        get: {
          summary: "Get company funding rounds timeline",
          tags: ["Companies"],
          parameters: [{ name: "slug", in: "path", required: true, schema: { type: "string" } }],
          responses: { 200: { description: "List of funding rounds" } }
        }
      },
      "/companies/{slug}/products": {
        get: {
          summary: "Get company products",
          tags: ["Companies"],
          parameters: [{ name: "slug", in: "path", required: true, schema: { type: "string" } }],
          responses: { 200: { description: "List of products" } }
        }
      },
      "/companies/{slug}/graph": {
        get: {
          summary: "Get 1-hop ecosystem graph",
          tags: ["Companies"],
          description: "Returns nodes and edges connecting the company to its investors, products, and competitors.",
          parameters: [{ name: "slug", in: "path", required: true, schema: { type: "string" }, example: "openai" }],
          responses: { 200: { description: "Graph with nodes and edges" } }
        }
      },
      "/investors": {
        get: {
          summary: "List all investors",
          tags: ["Investors"],
          parameters: [
            { name: "type", in: "query", schema: { type: "string", enum: ["VC", "Angel", "Corporate", "Family Office", "Accelerator"] } },
            { name: "stage_focus", in: "query", schema: { type: "string" }, example: "seed" },
            { name: "sector", in: "query", schema: { type: "string" }, example: "AI" },
            { name: "limit", in: "query", schema: { type: "integer", default: 20 } },
            { name: "offset", in: "query", schema: { type: "integer", default: 0 } }
          ],
          responses: { 200: { description: "List of investors" } }
        }
      },
      "/investors/most-active": {
        get: {
          summary: "Most active investors last 90 days",
          tags: ["Investors"],
          responses: { 200: { description: "Top 10 investors by deal count" } }
        }
      },
      "/investors/{slug}": {
        get: {
          summary: "Get investor profile",
          tags: ["Investors"],
          parameters: [{ name: "slug", in: "path", required: true, schema: { type: "string" }, example: "andreessen-horowitz" }],
          responses: { 200: { description: "Investor profile" }, 404: { description: "Not found" } }
        }
      },
      "/investors/{slug}/investments": {
        get: {
          summary: "Paginated investment history",
          tags: ["Investors"],
          parameters: [
            { name: "slug", in: "path", required: true, schema: { type: "string" } },
            { name: "limit", in: "query", schema: { type: "integer", default: 20 } },
            { name: "offset", in: "query", schema: { type: "integer", default: 0 } }
          ],
          responses: { 200: { description: "Investment history" } }
        }
      },
      "/investors/{slug}/co-investors": {
        get: {
          summary: "Who does this investor co-invest with most?",
          tags: ["Investors"],
          parameters: [{ name: "slug", in: "path", required: true, schema: { type: "string" }, example: "andreessen-horowitz" }],
          responses: { 200: { description: "Top co-investors by syndication count" } }
        }
      },
      "/products": {
        get: {
          summary: "List all products",
          tags: ["Products"],
          parameters: [
            { name: "category", in: "query", schema: { type: "string" } },
            { name: "sort", in: "query", schema: { type: "string", enum: ["popular", "newest"] } },
            { name: "limit", in: "query", schema: { type: "integer", default: 20 } }
          ],
          responses: { 200: { description: "List of products" } }
        }
      },
      "/products/{slug}": {
        get: {
          summary: "Get product detail",
          tags: ["Products"],
          parameters: [{ name: "slug", in: "path", required: true, schema: { type: "string" }, example: "chatgpt" }],
          responses: { 200: { description: "Product detail" }, 404: { description: "Not found" } }
        }
      },
      "/news": {
        get: {
          summary: "Paginated news feed",
          tags: ["News"],
          parameters: [
            { name: "tag", in: "query", schema: { type: "string" }, example: "funding" },
            { name: "limit", in: "query", schema: { type: "integer", default: 20 } },
            { name: "offset", in: "query", schema: { type: "integer", default: 0 } }
          ],
          responses: { 200: { description: "News articles" } }
        }
      },
      "/news/trending": {
        get: {
          summary: "Most read news in last 24 hours",
          tags: ["News"],
          responses: { 200: { description: "Trending news" } }
        }
      },
      "/founders/{slug}": {
        get: {
          summary: "Get founder profile",
          tags: ["Founders"],
          parameters: [{ name: "slug", in: "path", required: true, schema: { type: "string" }, example: "sam-altman" }],
          responses: { 200: { description: "Founder profile" }, 404: { description: "Not found" } }
        }
      },
      "/search": {
        get: {
          summary: "Cross-entity search",
          tags: ["Search & Utility"],
          description: "Search across companies, investors, founders, and products in one call.",
          parameters: [
            { name: "q", in: "query", required: true, schema: { type: "string" }, example: "openai" },
            { name: "limit", in: "query", schema: { type: "integer", default: 10 } }
          ],
          responses: { 200: { description: "Search results grouped by entity type" } }
        }
      },
      "/stats": {
        get: {
          summary: "Platform aggregate stats",
          tags: ["Search & Utility"],
          description: "Returns total counts and funding. Cached for 5 minutes.",
          responses: { 200: { description: "Platform stats" } }
        }
      },
      "/feed": {
        get: {
          summary: "Ranked activity feed",
          tags: ["Search & Utility"],
          description: "Mixes news, funding rounds, and new companies ranked by recency and relevance score.",
          parameters: [
            { name: "limit", in: "query", schema: { type: "integer", default: 20 } },
            { name: "offset", in: "query", schema: { type: "integer", default: 0 } }
          ],
          responses: { 200: { description: "Activity feed items" } }
        }
      }
    }
  },
  apis: []
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;