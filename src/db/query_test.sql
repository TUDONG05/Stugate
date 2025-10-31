    SELECT 
  lich.maLichHoc AS maLichHoc,
  lich.thuTrongTuan AS thuTrongTuan,
  lich.tietHoc AS tietHoc,
  lich.phongHoc AS phongHoc,
  loph.tenLop AS tenLop,
  mh.tenMH AS tenMH,
  mh.soTinChi AS soTinChi
  FROM DangKyHoc dkh
  JOIN LopHoc loph ON dkh.maLop = loph.maLop
  JOIN LichHoc lich ON loph.maLichHoc = lich.maLichHoc
  JOIN MonHoc mh ON loph.maMH = mh.maMH
  WHERE dkh.maSV = 'sv001'
  ORDER BY lich.thuTrongTuan, lich.tietHoc;


  SELECT 
      lich.maLichHoc AS id,
      lich.thuTrongTuan AS thuTrongTuan,
      lich.tietHoc AS tietHoc,
      lich.phongHoc AS phongHoc,
      loph.tenLop AS tenLop,
      mh.tenMH AS tenMH,
      mh.soTinChi AS soTinChi,
      gv.hoTen AS giangVien
    FROM DangKyHoc dkh
    JOIN LopHoc loph ON dkh.maLop = loph.maLop
    JOIN LichHoc lich ON loph.maLichHoc = lich.maLichHoc
    JOIN MonHoc mh ON loph.maMH = mh.maMH
    JOIN GiangVien gv ON loph.maGV = gv.maGV
    WHERE dkh.maSV = 'sv001'
    ORDER BY lich.thuTrongTuan, lich.tietHoc;
  