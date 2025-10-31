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

const db = require('../config/db');
// -----------------------------------------------------------------------
// // Timetable
// const getTimetable = async (req, res) => {
//   console.log('Session:', req.session.user);

//   const user = req.session.user;
//   if (!user) return res.redirect('/');

//   res.render('timetable', { user });
// };

// // API to get timetable data
// const getTimetableData = async (req, res) => {
//   try {
//     const user = req.session.user;
//     if (!user) return res.status(401).json({ error: 'Unauthorized' });

//     // Query to get student's timetable
//     const query = `
//       SELECT 
//         lich.maLichHoc,
//         lich.thuTrongTuan,
//         lich.tietHoc,
//         lich.phongHoc,
//         loph.tenLop,
//         mh.tenMH as tenMonHoc,
//         mh.soTinChi
//       FROM DangKyHoc dkh
//       JOIN LopHoc loph ON dkh.maLop = loph.maLop
//       JOIN LichHoc lich ON loph.maLichHoc = lich.maLichHoc
//       JOIN MonHoc mh ON loph.maMH = mh.maMH
//       WHERE dkh.maSV = ?
//     `;

//     const [rows] = await db.query(query, [user.id]);
    
//     res.json({ success: true, data: rows });
//   } catch (error) {
//     console.error('Error fetching timetable:', error);
//     res.status(500).json({ error: 'Failed to fetch timetable data' });
//   }
// };

module.exports = {
  getDashboardSinhVien,
  getDashboardGiangVien,
  getDashboardQuanLy,
  // getTimetable,
  // getTimetableData
};
