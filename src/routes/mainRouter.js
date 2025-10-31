const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

// Trang chủ
router.get('/', pageController.home);

// Các trang khác
router.get('/thongbao', pageController.thongbao);
router.get('/thongtincanhan', pageController.thongtincanhan);
router.get('/thoikhoabieu', pageController.thoikhoabieu);
router.get('/diem', pageController.diem);
router.get('/danhsachlop', pageController.danhsachlop);
router.get('/hoctructuyen', pageController.hoctructuyen);

module.exports = router;
