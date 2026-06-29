const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({ data: null, meta: {}, error: { code: "RATE_LIMITED", message: "Too many requests. Limit is 100 per minute." } });
  },
});

module.exports = limiter;