function ok(res, data, meta, status) {
  meta = meta || {};
  status = status || 200;
  return res.status(status).json({ data: data, meta: meta, error: null });
}

function fail(res, code, message, status) {
  status = status || 400;
  return res.status(status).json({ data: null, meta: {}, error: { code: code, message: message } });
}

function errorHandler(err, req, res, next) {
  console.error(err);
  return res.status(500).json({ data: null, meta: {}, error: { code: "INTERNAL_ERROR", message: "Something went wrong." } });
}

module.exports = { ok: ok, fail: fail, errorHandler: errorHandler };