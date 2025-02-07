const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/', (req, res) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const verified = jwt.verify(token.split(' ')[1], process.env.JWT_KEY);
    res.status(200).json({ message: 'Authenticated user accessed resource', user: verified });
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

module.exports = router;
