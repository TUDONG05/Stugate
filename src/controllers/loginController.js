// controllers/authController.js
const adminModel = require('../models/QLModel');
const teacherModel = require('../models/GVModel');
const studentModel = require('../models/SVModel');

// ánh xạ userType -> model
const models = {
  admin: adminModel,
  teacher: teacherModel,
  student: studentModel,
};

// ánh xạ userType -> dashboard
const dashboards = {
  admin: '/ql/trangchu',
  teacher: '/gv/trangchu',
  student: '/sv/trangchu',
};

const getLogin = async (req, res) => {
  try {
    const { loginId, password, userType } = req.body;

    console.log('Form input:', { loginId, password, userType });

    // Kiểm tra dữ liệu nhập
    if (!loginId || !password || !userType) {
      return res.render('login', { error: 'Vui lòng nhập đầy đủ thông tin.' });
    }

    const model = models[userType];
    console.log('Selected model:', model);
    if (!model) return res.render('login', { error: 'Loại người dùng không hợp lệ.' });

    console.log('Calling findByID...');
    const user = await model.findByID(loginId);
    console.log('User from DB:', user);

    if (user && user.matKhau === password) {
      console.log('Login successful!');

      // Lưu thông tin user vào session
      req.session.user = {
        id: user.maSV || user.maGV || user.maQL,
        name: user.tenSV || user.tenGV || user.tenQL,
        userType,
      };

      // Điều hướng đến dashboard tương ứng
      return res.redirect(dashboards[userType]);
    }


    console.log('Login failed: wrong username or password');
    return res.render('login', { error: 'Sai tên đăng nhập hoặc mật khẩu.' });
  } catch (err) {
    console.error('Login error:', err);
    return res.render('login', { error: 'Lỗi máy chủ. Vui lòng thử lại sau.' });
  }
};

module.exports = getLogin;
