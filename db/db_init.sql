CREATE DATABASE IF NOT EXISTS stugate CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE stugate;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Thêm 1 user demo (username: test, password: 123456)
INSERT INTO users (username, password)
VALUES ('admin','123456')
ON DUPLICATE KEY UPDATE username = username;
