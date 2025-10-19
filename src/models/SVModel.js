// models/sinhVienModel.js
const db = require('../config/db');

async function findByID(maSV) {
  const [rows] = await db.query('SELECT * FROM sinhvien sv WHERE sv.maSV =?', [maSV]);
  return rows[0] || null;
}

module.exports = { findByID};
