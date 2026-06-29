require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(rateLimit({ windowMs: 60000, max: 100 }));

app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerSpec, { customCss: "" }));

app.get("/", (req, res) => {
  res.json({ data: { name: "GraphOne API", version: "1.0.0", status: "ok", docs: "/api-docs" }, meta: {}, error: null });
});

app.use("/companies", require("./routes/companies"));
app.use("/investors", require("./routes/investors"));
app.use("/products", require("./routes/products"));
app.use("/news", require("./routes/news"));
app.use("/founders", require("./routes/founders"));
app.use("/search", require("./routes/search"));
app.use("/", require("./routes/utility"));

app.use((req, res) => {
  res.status(404).json({ data: null, meta: {}, error: { code: "NOT_FOUND", message: "Route not found" } });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ data: null, meta: {}, error: { code: "INTERNAL_ERROR", message: "Something went wrong." } });
});

app.listen(PORT, () => {
  console.log("GraphOne API running on http://localhost:" + PORT);
  console.log("Swagger docs at http://localhost:" + PORT + "/api-docs");
});

module.exports = app;