// models/sinhVienModel.js
const db = require('../config/db');

async function findByID(maGV) {
  const [rows] = await db.query('SELECT * FROM giangvien gv WHERE gv.maGV =?', [maGV]);
  return rows[0] || null;
}

module.exports = { findByID};
