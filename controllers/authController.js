// controllers/authController.js
const userModel = require('../models/userModel');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Vui lòng nhập đầy đủ thông tin.' });
    }

    const user = await userModel.findByUsername(username);
    if (user && user.password === password) {
      
      return res.json({ success: true, message: 'Đăng nhập thành công!' });
    }

    return res.json({ success: false, message: 'Sai tên đăng nhập hoặc mật khẩu.' });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ.' });
  }
};
