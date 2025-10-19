// models/sinhVienModel.js
const db = require('../config/db');

async function findByID(maQL) {
  const [rows] = await db.query('SELECT * FROM quanly ql WHERE ql.maQL =?', [maQL]);
  return rows[0] || null;
}

module.exports = {findByID};
