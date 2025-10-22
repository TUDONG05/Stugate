// src/controllers/homeController.js

const sinhVienModel = require('../models/SVModel');

const getDashboardSinhVien = async (req, res) => {
  console.log('Session:', req.session.user);

  const user = req.session.user;
  if (!user) return res.redirect('/');

  const sinhVien = await sinhVienModel.findByID(user.id);
  console.log('Dữ liệu sinh viên:', sinhVien);

  res.render('dashboard_sv', { sinhVien });
};

// Giang vien
// --------------------------------------------
const giangVienModel = require('../models/GVModel');
const getDashboardGiangVien = async(req, res) => {
  console.log('Session:', req.session.user);

  const user = req.session.user;
  if (!user) return res.redirect('/');

  const giangVien = await giangVienModel.findByID(user.id);
  console.log('Dữ liệu giảng viên:', giangVien);

  res.render('dashboard_gv', { giangVien });
};


// Quan ly
// -------------------------------------------------
const quanLyModel = require('../models/QLModel');
const getDashboardQuanLy =async (req, res) => {
  console.log('Session:', req.session.user);

  const user = req.session.user;
  if (!user) return res.redirect('/');

  const quanLy = await quanLyModel.findByID(user.id);
  console.log('Dữ liệu quản lý:', quanLy);

  res.render('dashboard_ql', { quanLy });
};

module.exports = {
  getDashboardSinhVien,
  getDashboardGiangVien,
  getDashboardQuanLy
};
