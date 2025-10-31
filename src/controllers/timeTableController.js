// const timetableModel = require('../models/SVModel');

// const getTimetable = async (req, res) => {
//   try {
//     const user = req.session.user;
//     if (!user) return res.redirect('/');

//     // Lấy dữ liệu từ Model
//     const timetableData = await timetableModel.getTimetable(user.maSV);

    


//     // Gom nhóm dữ liệu theo thứ
//     const groupedData = {};
//     for (const item of timetableData) {
//       if (!groupedData[item.thuTrongTuan]) groupedData[item.thuTrongTuan] = [];
//       groupedData[item.thuTrongTuan].push(item);
//     }

//     res.render('timetable', { user, groupedData });
//   } catch (error) {
//     console.error('Lỗi khi lấy thời khóa biểu:', error);
//     res.status(500).send('Lỗi server');
//   }
// };


// module.exports = { getTimetable };


const timetableModel = require('../models/SVModel');

const getTimetable = async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) return res.redirect('/');

    const timetableData = await timetableModel.getTimetable(user.maSV);

    const groupedData = {};

    for (const item of timetableData) {
      const thu = item.thuTrongTuan;

      // Xác định buổi học theo tiết
      const [start] = item.tietHoc.split('-').map(Number);
      let buoi = '';
      if (start >= 1 && start <= 6) buoi = 'sang';
      else if (start >= 7 && start <= 11) buoi = 'chieu';
      else buoi = 'toi';

      if (!groupedData[thu]) {
        groupedData[thu] = { sang: [], chieu: [], toi: [] };
      }

      groupedData[thu][buoi].push(
        `${item.tenMH} (${item.tenLop}) - ${item.phongHoc} - GV: ${item.giangVien} - Tiết ${item.tietHoc}`
      );
    }

    res.render('timetable', { user, groupedData });
  } catch (error) {
    console.error('Lỗi khi lấy thời khóa biểu:', error);
    res.status(500).send('Lỗi server');
  }
};

module.exports = { getTimetable };
