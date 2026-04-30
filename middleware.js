// Middleware for logging, errors, and request validation

function logger(req, res, next) {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
}

function notFoundHandler(req, res, next) {
  res.status(404).json({ error: 'Not Found' });
}

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
}

function validateFields(requiredFields = []) {
  return (req, res, next) => {
    const missing = requiredFields.filter(f => !(f in req.body));
    if (missing.length) {
      return res.status(400).json({ error: `Missing fields: ${missing.join(', ')}` });
    }
    next();
  };
}

module.exports = { logger, notFoundHandler, errorHandler, validateFields };