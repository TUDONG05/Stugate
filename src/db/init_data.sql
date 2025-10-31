USE StuGate;

-- === XÓA DỮ LIỆU CŨ (nếu có) THEO THỨ TỰ PHỤ THUỘC ===
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE Diem;
TRUNCATE TABLE TaiLieu;
TRUNCATE TABLE ThongBao;
TRUNCATE TABLE DangKyHoc;
TRUNCATE TABLE LopHoc;
TRUNCATE TABLE LichHoc;
TRUNCATE TABLE MonHoc;
TRUNCATE TABLE GiangVien;
TRUNCATE TABLE SinhVien;
TRUNCATE TABLE QuanLy;
SET FOREIGN_KEY_CHECKS = 1;

-- === SINH VIÊN ===
INSERT INTO SinhVien (maSV, hoTen, email, matKhau, soDienThoai, diaChi, diemGPA)
VALUES 
('sv001', 'Nguyễn Văn Sinh', 'sv001@example.com', 'sv', '0909123456', 'TP.HCM', 3.25),
('sv002', 'Trần Thị Học', 'sv002@example.com', '123', '0912123456', 'Hà Nội', 3.70);

-- === GIẢNG VIÊN ===
INSERT INTO GiangVien (maGV, hoTen, email, matKhau)
VALUES 
('gv001', 'ThS. Lê Thị Mai', 'mai@gv.com', '123'),
('gv002', 'TS. Nguyễn Văn An', 'an@gv.com', '123');

-- === QUẢN LÝ ===
INSERT INTO QuanLy (maQL, hoTen, email, matKhau)
VALUES 
('ql001', 'Phạm Quản Lý', 'admin@stugate.com', 'admin');

-- === MÔN HỌC ===
INSERT INTO MonHoc (maMH, tenMH, soTinChi)
VALUES 
('MH001', 'Lập trình Web', 3),
('MH002', 'Cơ sở dữ liệu', 3),
('MH003', 'Trí tuệ nhân tạo', 4);

-- === LỊCH HỌC ===
INSERT INTO LichHoc (maLichHoc, thuTrongTuan, tietHoc, phongHoc)
VALUES 
('LH001', 2, '1-3', 'A101'),
('LH002', 4, '4-6', 'B202'),
('LH003', 6, '7-9', 'C303');

-- === LỚP HỌC (liên kết GIẢNG VIÊN + MÔN + LỊCH) ===
INSERT INTO LopHoc (maLop, tenLop, hocKy, maGV, maLichHoc, maMH)
VALUES 
('L001', 'Web 01', 'HK1', 'gv001', 'LH001', 'MH001'),
('L002', 'CSDL 01', 'HK1', 'gv002', 'LH002', 'MH002'),
('L003', 'AI 01', 'HK1', 'gv001', 'LH003', 'MH003');

-- === ĐĂNG KÝ HỌC (liên kết SINH VIÊN + LỚP HỌC) ===
INSERT INTO DangKyHoc (maSV, maLop)
VALUES 
('sv001', 'L001'),
('sv001', 'L002'),
('sv002', 'L003');

-- === ĐIỂM (liên kết SINH VIÊN + LỚP HỌC) ===
INSERT INTO Diem (maSV, maLop, diemThanhPhan, diemCuoiKy, diemTongKet)
VALUES
('sv001', 'L001', 8.5, 8.0, 8.2),
('sv001', 'L002', 7.0, 8.0, 7.5),
('sv002', 'L003', 9.0, 8.5, 8.8);

-- === TÀI LIỆU (liên kết LỚP HỌC) ===
INSERT INTO TaiLieu (tenFile, duongDan, maLop)
VALUES 
('Slide bài 1.pdf', '/uploads/slide1.pdf', 'L001'),
('CSDL nâng cao.docx', '/uploads/csdl.docx', 'L002');

-- === THÔNG BÁO (liên kết LỚP HỌC) ===
INSERT INTO ThongBao (tieuDe, noiDung, maLop)
VALUES 
('Lưu ý lịch học', 'Tuần này học bù vào thứ 6', 'L001'),
('Cập nhật tài liệu mới', 'Đã thêm tài liệu bài 3', 'L002');


-- === SINH VIÊN MỚI ===
INSERT INTO SinhVien (maSV, hoTen, email, matKhau, soDienThoai, diaChi, diemGPA)
VALUES 
('sv003', 'Lê Thị Lan', 'sv003@example.com', '123', '0922123456', 'Đà Nẵng', 3.40),
('sv004', 'Phạm Văn Hùng', 'sv004@example.com', '123', '0933123456', 'Hải Phòng', 3.10);

-- === GIẢNG VIÊN MỚI ===
INSERT INTO GiangVien (maGV, hoTen, email, matKhau)
VALUES 
('gv003', 'ThS. Trần Văn Bình', 'binh@gv.com', '123'),
('gv004', 'TS. Hoàng Thị Lan', 'lan@gv.com', '123');

-- === MÔN HỌC MỚI ===
INSERT INTO MonHoc (maMH, tenMH, soTinChi)
VALUES 
('MH004', 'Hệ điều hành', 3),
('MH005', 'Mạng máy tính', 3);

-- === LỊCH HỌC MỚI ===
INSERT INTO LichHoc (maLichHoc, thuTrongTuan, tietHoc, phongHoc)
VALUES 
('LH004', 2, '10-12', 'D101'),
('LH005', 5, '1-3', 'E202');

-- === LỚP HỌC MỚI ===
INSERT INTO LopHoc (maLop, tenLop, hocKy, maGV, maLichHoc, maMH)
VALUES 
('L004', 'HĐH 01', 'HK1', 'gv003', 'LH004', 'MH004'),
('L005', 'Mạng 01', 'HK1', 'gv004', 'LH005', 'MH005');

-- === ĐĂNG KÝ HỌC MỞ RỘNG ===
INSERT INTO DangKyHoc (maSV, maLop)
VALUES 
('sv001', 'L003'), -- sv001 học thêm AI 01
('sv002', 'L001'), -- sv002 học thêm Web 01
('sv002', 'L002'), -- sv002 học thêm CSDL 01
('sv003', 'L001'),
('sv003', 'L004'),
('sv004', 'L002'),
('sv004', 'L005');

-- === ĐIỂM MỞ RỘNG ===
INSERT INTO Diem (maSV, maLop, diemThanhPhan, diemCuoiKy, diemTongKet)
VALUES
('sv001', 'L003', 8.0, 8.5, 8.3),
('sv002', 'L001', 7.5, 8.0, 7.8),
('sv002', 'L002', 6.5, 7.5, 7.0),
('sv003', 'L001', 9.0, 8.8, 8.9),
('sv003', 'L004', 8.0, 8.0, 8.0),
('sv004', 'L002', 7.0, 7.5, 7.3),
('sv004', 'L005', 8.5, 8.0, 8.2);

-- === TÀI LIỆU MỚI ===
INSERT INTO TaiLieu (tenFile, duongDan, maLop)
VALUES 
('HĐH Slide.pdf', '/uploads/hdh.pdf', 'L004'),
('Mạng Slide.pdf', '/uploads/mang.pdf', 'L005');

-- === THÔNG BÁO MỚI ===
INSERT INTO ThongBao (tieuDe, noiDung, maLop)
VALUES 
('Bài tập HĐH', 'Nộp bài tuần này', 'L004'),
('Hướng dẫn mạng', 'Thêm bài lab 2', 'L005');
