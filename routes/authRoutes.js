// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);

// route trang dashboard (demo)
router.get('/dashboard', (req, res) => {
  res.send('Chào mừng đến dashboard!');
});

module.exports = router;
