const express = require("express");
const router = express.Router();
const supabase = require("../lib/supabase");
const { cached } = require("../lib/cache");
const response = require("../middleware/response");
const ok = response.ok;
const fail = response.fail;
const { requireApiKey } = require("../middleware/auth");

router.get("/trending", async (req, res) => {
  try {
    const data = await cached("companies:trending", async () => {
      const { data, error } = await supabase.from("companies").select("*").order("trending_score", { ascending: false }).limit(10);
      if (error) throw error;
      return data;
    }, 300);
    return ok(res, data, { cached: true, ttl_seconds: 300 });
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

router.get("/", async (req, res) => {
  try {
    const { category, stage, country, sort, limit, offset } = req.query;
    const l = parseInt(limit) || 20;
    const o = parseInt(offset) || 0;
    let query = supabase.from("companies").select("*", { count: "exact" });
    if (category) query = query.ilike("category", "%" + category + "%");
    if (stage) query = query.eq("stage", stage);
    if (country) query = query.ilike("hq_country", "%" + country + "%");
    if (sort === "funded") query = query.order("funding_total", { ascending: false });
    else if (sort === "new") query = query.order("founded_year", { ascending: false });
    else query = query.order("trending_score", { ascending: false });
    query = query.range(o, o + l - 1);
    const { data, error, count } = await query;
    if (error) throw error;
    return ok(res, data, { total: count, limit: l, offset: o });
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

router.get("/:slug/funding", async (req, res) => {
  try {
    const { data: company } = await supabase.from("companies").select("id").eq("slug", req.params.slug).single();
    if (!company) return fail(res, "NOT_FOUND", "Company not found.", 404);
    const { data, error } = await supabase.from("funding_rounds").select("*").eq("company_id", company.id).order("date", { ascending: false });
    if (error) throw error;
    return ok(res, data);
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

router.get("/:slug/products", async (req, res) => {
  try {
    const { data: company } = await supabase.from("companies").select("id").eq("slug", req.params.slug).single();
    if (!company) return fail(res, "NOT_FOUND", "Company not found.", 404);
    const { data, error } = await supabase.from("products").select("*").eq("company_id", company.id).order("upvotes", { ascending: false });
    if (error) throw error;
    return ok(res, data);
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

router.get("/:slug/graph", async (req, res) => {
  try {
    const { data: company, error: coErr } = await supabase.from("companies").select("id, name, slug, category, stage, funding_total, logo_url").eq("slug", req.params.slug).single();
    if (coErr || !company) return fail(res, "NOT_FOUND", "Company not found.", 404);
    const { data: rounds } = await supabase.from("funding_rounds").select("id, round_type, amount, date, lead_investor_id, co_investors").eq("company_id", company.id);
    const investorIds = new Set();
    (rounds || []).forEach(r => { if (r.lead_investor_id) investorIds.add(r.lead_investor_id); (r.co_investors || []).forEach(id => investorIds.add(id)); });
    let investors = [];
    if (investorIds.size > 0) {
      const { data: invData } = await supabase.from("investors").select("id, name, slug, type, logo_url").in("id", [...investorIds]);
      investors = invData || [];
    }
    const { data: products } = await supabase.from("products").select("id, name, slug, category, upvotes").eq("company_id", company.id);
    const { data: related } = await supabase.from("companies").select("id, name, slug, category, stage, logo_url").eq("category", company.category).neq("id", company.id).limit(5);
    const nodes = [
      { id: company.id, type: "company", label: company.name, data: company },
      ...investors.map(i => ({ id: i.id, type: "investor", label: i.name, data: i })),
      ...(products || []).map(p => ({ id: p.id, type: "product", label: p.name, data: p })),
      ...(related || []).map(c => ({ id: c.id, type: "competitor", label: c.name, data: c })),
    ];
    const edges = [
      ...investors.map(i => ({ from: company.id, to: i.id, label: "funded_by" })),
      ...(products || []).map(p => ({ from: company.id, to: p.id, label: "has_product" })),
      ...(related || []).map(c => ({ from: company.id, to: c.id, label: "competitor" })),
    ];
    return ok(res, { nodes, edges }, { node_count: nodes.length, edge_count: edges.length });
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

router.get("/:slug", async (req, res) => {
  try {
    const { data, error } = await supabase.from("company_profiles").select("*").eq("slug", req.params.slug).single();
    if (error || !data) return fail(res, "NOT_FOUND", "Company not found.", 404);
    supabase.from("company_views").insert({ company_id: data.id }).then(() => {});
    return ok(res, data);
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

router.post("/", requireApiKey, async (req, res) => {
  try {
    const { data, error } = await supabase.from("companies").insert(req.body).select().single();
    if (error) throw error;
    return ok(res, data, {}, 201);
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

module.exports = router;