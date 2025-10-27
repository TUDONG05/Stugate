// src/routes/dashboard.js
const express = require('express');
const router = express.Router();
const {
  getDashboardSinhVien,
  getDashboardGiangVien,
  getDashboardQuanLy,
  getTimetable,
  getTimetableData
} = require('../controllers/homeController');

// trùng với đường dẫn authController dùng
router.get('/sv/trangchu', getDashboardSinhVien);
router.get('/gv/trangchu', getDashboardGiangVien);
router.get('/ql/trangchu', getDashboardQuanLy);
router.get('/sv/tkb', getTimetable);
router.get('/api/sv/tkb-data', getTimetableData);

module.exports = router;
