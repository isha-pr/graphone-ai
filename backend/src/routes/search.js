const express = require("express");
const router = express.Router();
const supabase = require("../lib/supabase");
const { cached } = require("../lib/cache");
const response = require("../middleware/response");
const ok = response.ok;
const fail = response.fail;

router.get("/", async (req, res) => {
  try {
    const q = req.query.q;
    const limit = parseInt(req.query.limit) || 10;
    if (!q) return fail(res, "VALIDATION_ERROR", "q parameter is required.", 400);
    const [companies, investors, founders, products] = await Promise.all([
      supabase.from("companies").select("id, name, slug, category, stage, logo_url, hq_country, funding_total").or("name.ilike.%" + q + "%,description.ilike.%" + q + "%").limit(limit),
      supabase.from("investors").select("id, name, slug, type, location, logo_url").or("name.ilike.%" + q + "%,bio.ilike.%" + q + "%").limit(limit),
      supabase.from("founders").select("id, name, slug, title, location").or("name.ilike.%" + q + "%,bio.ilike.%" + q + "%").limit(limit),
      supabase.from("products").select("id, name, slug, category, upvotes").or("name.ilike.%" + q + "%,description.ilike.%" + q + "%").limit(limit),
    ]);
    return ok(res, { companies: companies.data || [], investors: investors.data || [], founders: founders.data || [], products: products.data || [] }, { query: q });
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

module.exports = router;