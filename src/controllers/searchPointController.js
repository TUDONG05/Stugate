const sinhVienModel = require('../models/SVModel');

const getDashboardSinhVien = async (req, res) => {
  console.log('Session:', req.session.user);

  const user = req.session.user;
  if (!user) return res.redirect('/');

  const sinhVien = await sinhVienModel.findByID(user.id);
  console.log('Dữ liệu sinh viên:', sinhVien);

  res.render('dashboard_sv', { sinhVien });
};
