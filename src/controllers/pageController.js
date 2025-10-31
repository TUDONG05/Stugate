const sinhVienModel = require('../models/SVModel');

async function renderPage(req, res, view, title) {
  const sinhVien = await sinhVienModel.findByID(req.user.id);
  res.render(view, { title, sinhVien });
}

exports.home = (req, res) => renderPage(req, res, 'home', 'Trang chủ');
exports.thongbao = (req, res) => renderPage(req, res, 'thongbao', 'Thông báo');
exports.thongtincanhan = (req, res) => renderPage(req, res, 'thongtincanhan', 'Thông tin cá nhân');
exports.thoikhoabieu = (req, res) => renderPage(req, res, 'thoikhoabieu', 'Thời khóa biểu');
exports.diem = (req, res) => renderPage(req, res, 'diem', 'Điểm');
exports.danhsachlop = (req, res) => renderPage(req, res, 'danhsachlop', 'Danh sách lớp học');
exports.hoctructuyen = (req, res) => renderPage(req, res, 'hoctructuyen', 'Học trực tuyến');
