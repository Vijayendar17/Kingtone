// Authentication middleware
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key_here';

function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  
  req.user = decoded;
  next();
}

module.exports = { generateToken, verifyToken, authMiddleware };