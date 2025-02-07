const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Authentication Service is Running');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (email === 'admin' && password === 'admin') {
    const token = jwt.sign({ email }, process.env.JWT_KEY, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
