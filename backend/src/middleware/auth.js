const { fail } = require("./response");

function requireApiKey(req, res, next) {
  const key = req.headers["x-api-key"];
  if (!key) return fail(res, "MISSING_API_KEY", "X-API-Key header is required.", 401);
  if (key !== process.env.API_SECRET_KEY) return fail(res, "INVALID_API_KEY", "Invalid API key.", 401);
  next();
}

module.exports = { requireApiKey };