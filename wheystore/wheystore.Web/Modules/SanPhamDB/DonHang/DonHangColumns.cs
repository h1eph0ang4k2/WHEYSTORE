namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.DonHang")]
[BasedOnRow(typeof(DonHangRow), CheckNames = true)]
public class DonHangColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int MaDh { get; set; }
    public int MaKhachHang { get; set; }
    [EditLink]
    public string HoTenNguoiNhan { get; set; }
    public string DiaChiNguoiNhan { get; set; }
    public string SoDienThoaiNguoiNhan { get; set; }
    public string EmailNguoiNhan { get; set; }
    public string TinhThanhNguoiNhan { get; set; }
    public string QuanHuyenNguoiNhan { get; set; }
    public string PhuongXaNguoiNhan { get; set; }
    public string MaBuuChinhNguoiNhan { get; set; }
    public int ShipperId { get; set; }
    public DateTime NgayDatHang { get; set; }
    public DateTime NgayGiaoHangDuKhien { get; set; }
    public DateTime NgayGiaoHangHoanThanh { get; set; }
    public decimal TongTienHang { get; set; }
    public decimal PhiVanChuyen { get; set; }
    public decimal TongThanhToan { get; set; }
    public decimal GiamGiaDonHang { get; set; }
    public string PhuongThucThanhToan { get; set; }
    public bool DaThanhToan { get; set; }
    public short TrangThaiDonHang { get; set; }
    public string GhiChu { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}