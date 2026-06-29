const express = require("express");
const router = express.Router();
const supabase = require("../lib/supabase");
const { ok, fail } = require("../middleware/response");

router.get("/:slug", async (req, res) => {
  try {
    const { data, error } = await supabase.from("founders").select("*").eq("slug", req.params.slug).single();
    if (error || !data) return fail(res, "NOT_FOUND", "Founder not found.", 404);
    return ok(res, data);
  } catch (err) { return fail(res, "DB_ERROR", err.message, 500); }
});

module.exports = router;