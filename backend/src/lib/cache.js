const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

function get(key) {
  const value = cache.get(key);
  return value === undefined ? null : value;
}

function set(key, value, ttl) {
  if (ttl !== undefined) cache.set(key, value, ttl);
  else cache.set(key, value);
}

function del(key) {
  cache.del(key);
}

async function cached(key, fn, ttl) {
  const hit = get(key);
  if (hit !== null) return hit;
  const result = await fn();
  set(key, result, ttl);
  return result;
}

module.exports = { get, set, del, cached };