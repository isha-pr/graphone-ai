const express = require("express");
const router = express.Router();
const supabase = require("../lib/supabase");
const { cached } = require("../lib/cache");
const { ok, fail } = require("../middleware/response");

router.get("/most-active", async (req, res) => {
  try {
    const data = await cached("investors:most-active", async () => {
      const { data, error } = await supabase.from("investor_activity").select("*").order("deals_last_90d", { ascending: false }).limit(10);
      if (error) throw error;
      return data;
    }, 300);
    return ok(res, data, { cached: true, ttl_seconds: 300 });
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

router.get("/", async (req, res) => {
  try {
    const { type, stage_focus, sector, limit, offset } = req.query;
    const l = parseInt(limit) || 20;
    const o = parseInt(offset) || 0;
    let query = supabase.from("investors").select("*", { count: "exact" });
    if (type) query = query.eq("type", type);
    if (stage_focus) query = query.contains("stage_focus", [stage_focus]);
    if (sector) query = query.contains("sector_focus", [sector]);
    query = query.order("portfolio_count", { ascending: false }).range(o, o + l - 1);
    const { data, error, count } = await query;
    if (error) throw error;
    return ok(res, data, { total: count, limit: l, offset: o });
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

router.get("/:slug/investments", async (req, res) => {
  try {
    const l = parseInt(req.query.limit) || 20;
    const o = parseInt(req.query.offset) || 0;
    const { data: investor } = await supabase.from("investors").select("id").eq("slug", req.params.slug).single();
    if (!investor) return fail(res, "NOT_FOUND", "Investor not found.", 404);
    const { data, error, count } = await supabase.from("funding_rounds").select("id, round_type, amount, currency, date, valuation_at, company_id", { count: "exact" }).or("lead_investor_id.eq." + investor.id + ",co_investors.cs.{" + investor.id + "}").order("date", { ascending: false }).range(o, o + l - 1);
    if (error) throw error;
    return ok(res, data, { total: count, limit: l, offset: o });
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

router.get("/:slug/co-investors", async (req, res) => {
  try {
    const { data: investor } = await supabase.from("investors").select("id, name").eq("slug", req.params.slug).single();
    if (!investor) return fail(res, "NOT_FOUND", "Investor not found.", 404);
    const { data, error } = await supabase.from("co_investor_pairs").select("investor_b_id, investor_b_name, co_investment_count").eq("investor_a_id", investor.id).order("co_investment_count", { ascending: false }).limit(10);
    if (error) throw error;
    return ok(res, data, { investor: investor.name });
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

router.get("/:slug", async (req, res) => {
  try {
    const { data, error } = await supabase.from("investors").select("*").eq("slug", req.params.slug).single();
    if (error || !data) return fail(res, "NOT_FOUND", "Investor not found.", 404);
    return ok(res, data);
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

module.exports = router;