// models/userModel.js
const db = require('../config/db');

async function findByUsername(username) {
  const [rows] = await db.query('SELECT id, username, password FROM users WHERE username = ?', [username]);
  return rows[0] || null;
}

module.exports = { findByUsername };
