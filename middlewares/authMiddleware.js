const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  // Extract token from Authorization header (expects "Bearer <token>")
  const token = req.headers.authorization?.split(' ')[1];  

  // If no token is provided, return an error response
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    // Verify the token using the secret stored in process.env.JWT_SECRET
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach the decoded user data to the request object
    req.user = payload;

    // Call the next middleware or route handler
    next();
  } catch (error) {
    // If verification fails (invalid token), return an error response
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = { authenticate };
