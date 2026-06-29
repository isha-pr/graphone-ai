const express = require("express");
const router = express.Router();
const supabase = require("../lib/supabase");
const { cached } = require("../lib/cache");
const response = require("../middleware/response");
const ok = response.ok;
const fail = response.fail;

router.get("/stats", async (req, res) => {
  try {
    const data = await cached("platform:stats", async () => {
      const { data, error } = await supabase.from("platform_stats").select("*").single();
      if (error) throw error;
      return data;
    }, 300);
    return ok(res, data, { cached: true, ttl_seconds: 300 });
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

router.get("/feed", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 20;
    const offset = parseInt(req.query.offset) || 0;
    const [newsRes, roundsRes, companiesRes] = await Promise.all([
      supabase.from("news_articles").select("id, title, url, published_at, source, tag, summary").order("published_at", { ascending: false }).limit(30),
      supabase.from("funding_rounds").select("id, round_type, amount, currency, date, company_id").order("date", { ascending: false }).limit(20),
      supabase.from("companies").select("id, name, slug, category, stage, logo_url, hq_country, created_at, trending_score").order("created_at", { ascending: false }).limit(20),
    ]);
    const now = Date.now();
    const newsItems = (newsRes.data || []).map(n => ({ type: "news", id: n.id, title: n.title, subtitle: n.source, url: n.url, tag: n.tag, summary: n.summary, timestamp: n.published_at, score: 100 / ((now - new Date(n.published_at).getTime()) / 3600000 + 1) }));
    const fundingItems = (roundsRes.data || []).map(r => ({ type: "funding", id: r.id, title: r.round_type + " round - $" + ((r.amount || 0) / 1e6).toFixed(0) + "M", amount: r.amount, round_type: r.round_type, company_id: r.company_id, timestamp: r.date + "T00:00:00Z", score: (100 / ((now - new Date(r.date).getTime()) / 3600000 + 1)) * 1.5 }));
    const companyItems = (companiesRes.data || []).map(c => ({ type: "new_company", id: c.id, title: c.name + " joined the graph", subtitle: c.category + " - " + c.hq_country, company: c, timestamp: c.created_at, score: (c.trending_score || 0) / 2 }));
    const feed = [...newsItems, ...fundingItems, ...companyItems].sort((a, b) => b.score - a.score).slice(offset, offset + limit);
    return ok(res, feed, { limit, offset });
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

module.exports = router;