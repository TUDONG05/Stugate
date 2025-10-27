// File: test_db.js

// 1. Nạp tệp .env để lấy thông tin CSDL
require('dotenv').config();

// 2. Import pool kết nối từ tệp config của bạn
const pool = require('./src/config/db');

// 3. Viết hàm async để thử kết nối
async function checkConnection() {
    console.log('Đang thử kết nối đến MySQL...');

    let connection;

    try {
        // Thử lấy 1 kết nối từ pool
        connection = await pool.getConnection();

        // Nếu thành công, ping CSDL
        await connection.ping();

        console.log('✅✅✅ KẾT NỐI THÀNH CÔNG!');
        console.log('Thông tin CSDL của bạn đã chính xác.');

    } catch (error) {
        // 4. Nếu thất bại, đây là phần quan trọng nhất
        console.error('❌❌❌ KẾT NỐI THẤT BẠI! ❌❌❌');
        console.error('Lỗi chi tiết:');

        // In ra mã lỗi để bạn biết chính xác vấn đề
        if (error.code) {
            console.error(`Mã lỗi: ${error.code}`);
        }
        if (error.errno) {
            console.error(`Số lỗi: ${error.errno}`);
        }
        if (error.sqlMessage) {
            console.error(`Thông điệp: ${error.sqlMessage}`);
        }

        console.log('\n--- Gợi ý sửa lỗi ---');
        if (error.code === 'ECONNREFUSED') {
            console.log('Lỗi: MySQL server chưa chạy. Hãy Start MySQL (trong XAMPP) và thử lại.');
        } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
            console.log('Lỗi: Sai DB_USER hoặc DB_PASSWORD trong tệp .env.');
        } else if (error.code === 'ER_BAD_DB_ERROR') {
            console.log('Lỗi: Sai DB_NAME trong tệp .env. CSDL không tồn tại.');
        } else {
            console.log('Một lỗi khác đã xảy ra. Hãy kiểm tra thông tin trong .env.');
        }

    } finally {
        // 5. Luôn luôn giải phóng kết nối sau khi thử xong
        if (connection) {
            connection.release();
            console.log('Đã đóng kết nối.');
        }
        pool.end(); // Đóng pool để script kết thúc
    }
}

// Chạy hàm kiểm tra
checkConnection();