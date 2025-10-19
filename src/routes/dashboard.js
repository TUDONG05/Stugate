// src/routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();

router.get('/dashboard/sinhvien', (req, res) => {
  res.render('dashboard_sinhvien');
});

router.get('/dashboard/teacher', (req, res) => {
  res.render('dashboard_teacher');
});

router.get('/dashboard/admin', (req, res) => {
  res.render('dashboard_admin');
});

module.exports = router;
