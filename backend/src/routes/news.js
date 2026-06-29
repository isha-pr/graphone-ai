const express = require("express");
const router = express.Router();
const supabase = require("../lib/supabase");
const { cached } = require("../lib/cache");
const { ok, fail } = require("../middleware/response");

router.get("/trending", async (req, res) => {
  try {
    const data = await cached("news:trending", async () => {
      const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const { data, error } = await supabase.from("news_articles").select("*").gte("published_at", since).order("read_count", { ascending: false }).limit(10);
      if (error) throw error;
      return data;
    }, 600);
    return ok(res, data, { cached: true, ttl_seconds: 600, window: "24 hours" });
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

router.get("/", async (req, res) => {
  try {
    const { tag, limit, offset } = req.query;
    const l = parseInt(limit) || 20;
    const o = parseInt(offset) || 0;
    let query = supabase.from("news_articles").select("*", { count: "exact" });
    if (tag) query = query.eq("tag", tag);
    query = query.order("published_at", { ascending: false }).range(o, o + l - 1);
    const { data, error, count } = await query;
    if (error) throw error;
    return ok(res, data, { total: count, limit: l, offset: o });
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

module.exports = router;