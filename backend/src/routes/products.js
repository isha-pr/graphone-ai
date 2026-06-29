const express = require("express");
const router = express.Router();
const supabase = require("../lib/supabase");
const { ok, fail } = require("../middleware/response");

router.get("/", async (req, res) => {
  try {
    const { category, sort, limit, offset } = req.query;
    const l = parseInt(limit) || 20;
    const o = parseInt(offset) || 0;
    let query = supabase.from("products").select("*", { count: "exact" });
    if (category) query = query.ilike("category", "%" + category + "%");
    if (sort === "newest") query = query.order("launch_date", { ascending: false });
    else query = query.order("upvotes", { ascending: false });
    query = query.range(o, o + l - 1);
    const { data, error, count } = await query;
    if (error) throw error;
    return ok(res, data, { total: count, limit: l, offset: o });
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

router.get("/:slug", async (req, res) => {
  try {
    const { data, error } = await supabase.from("products").select("*").eq("slug", req.params.slug).single();
    if (error || !data) return fail(res, "NOT_FOUND", "Product not found.", 404);
    return ok(res, data);
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

module.exports = router;