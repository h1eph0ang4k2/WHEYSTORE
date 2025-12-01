namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("DonHang")]
[DisplayName("Don Hang"), InstanceName("Don Hang")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class DonHangRow : Row<DonHangRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Ma Dh"), Column("MaDH"), Identity, IdProperty]
    public int? MaDh { get => fields.MaDh[this]; set => fields.MaDh[this] = value; }

    [DisplayName("Ma Khach Hang")]
    public int? MaKhachHang { get => fields.MaKhachHang[this]; set => fields.MaKhachHang[this] = value; }

    [DisplayName("Ho Ten Nguoi Nhan"), Size(150), NotNull, QuickSearch, NameProperty]
    public string HoTenNguoiNhan { get => fields.HoTenNguoiNhan[this]; set => fields.HoTenNguoiNhan[this] = value; }

    [DisplayName("Dia Chi Nguoi Nhan"), Size(300), NotNull]
    public string DiaChiNguoiNhan { get => fields.DiaChiNguoiNhan[this]; set => fields.DiaChiNguoiNhan[this] = value; }

    [DisplayName("So Dien Thoai Nguoi Nhan"), Size(24), NotNull]
    public string SoDienThoaiNguoiNhan { get => fields.SoDienThoaiNguoiNhan[this]; set => fields.SoDienThoaiNguoiNhan[this] = value; }

    [DisplayName("Email Nguoi Nhan"), Size(100)]
    public string EmailNguoiNhan { get => fields.EmailNguoiNhan[this]; set => fields.EmailNguoiNhan[this] = value; }

    [DisplayName("Tinh Thanh Nguoi Nhan"), Size(100), NotNull]
    public string TinhThanhNguoiNhan { get => fields.TinhThanhNguoiNhan[this]; set => fields.TinhThanhNguoiNhan[this] = value; }

    [DisplayName("Quan Huyen Nguoi Nhan"), Size(100), NotNull]
    public string QuanHuyenNguoiNhan { get => fields.QuanHuyenNguoiNhan[this]; set => fields.QuanHuyenNguoiNhan[this] = value; }

    [DisplayName("Phuong Xa Nguoi Nhan"), Size(100), NotNull]
    public string PhuongXaNguoiNhan { get => fields.PhuongXaNguoiNhan[this]; set => fields.PhuongXaNguoiNhan[this] = value; }

    [DisplayName("Ma Buu Chinh Nguoi Nhan"), Size(20)]
    public string MaBuuChinhNguoiNhan { get => fields.MaBuuChinhNguoiNhan[this]; set => fields.MaBuuChinhNguoiNhan[this] = value; }

    [DisplayName("Shipper Id")]
    public int? ShipperId { get => fields.ShipperId[this]; set => fields.ShipperId[this] = value; }

    [DisplayName("Ngay Dat Hang"), NotNull]
    public DateTime? NgayDatHang { get => fields.NgayDatHang[this]; set => fields.NgayDatHang[this] = value; }

    [DisplayName("Ngay Giao Hang Du Khien")]
    public DateTime? NgayGiaoHangDuKhien { get => fields.NgayGiaoHangDuKhien[this]; set => fields.NgayGiaoHangDuKhien[this] = value; }

    [DisplayName("Ngay Giao Hang Hoan Thanh")]
    public DateTime? NgayGiaoHangHoanThanh { get => fields.NgayGiaoHangHoanThanh[this]; set => fields.NgayGiaoHangHoanThanh[this] = value; }

    [DisplayName("Tong Tien Hang"), Size(18), NotNull]
    public decimal? TongTienHang { get => fields.TongTienHang[this]; set => fields.TongTienHang[this] = value; }

    [DisplayName("Phi Van Chuyen"), Size(18), NotNull]
    public decimal? PhiVanChuyen { get => fields.PhiVanChuyen[this]; set => fields.PhiVanChuyen[this] = value; }

    [DisplayName("Tong Thanh Toan"), Size(18), NotNull]
    public decimal? TongThanhToan { get => fields.TongThanhToan[this]; set => fields.TongThanhToan[this] = value; }

    [DisplayName("Giam Gia Don Hang"), Size(18), NotNull]
    public decimal? GiamGiaDonHang { get => fields.GiamGiaDonHang[this]; set => fields.GiamGiaDonHang[this] = value; }

    [DisplayName("Phuong Thuc Thanh Toan"), Size(100), NotNull]
    public string PhuongThucThanhToan { get => fields.PhuongThucThanhToan[this]; set => fields.PhuongThucThanhToan[this] = value; }

    [DisplayName("Da Thanh Toan"), NotNull]
    public bool? DaThanhToan { get => fields.DaThanhToan[this]; set => fields.DaThanhToan[this] = value; }

    [DisplayName("Trang Thai Don Hang"), NotNull]
    public short? TrangThaiDonHang { get => fields.TrangThaiDonHang[this]; set => fields.TrangThaiDonHang[this] = value; }

    [DisplayName("Ghi Chu"), Size(1000)]
    public string GhiChu { get => fields.GhiChu[this]; set => fields.GhiChu[this] = value; }

    [DisplayName("Created At"), NotNull]
    public DateTime? CreatedAt { get => fields.CreatedAt[this]; set => fields.CreatedAt[this] = value; }

    [DisplayName("Updated At")]
    public DateTime? UpdatedAt { get => fields.UpdatedAt[this]; set => fields.UpdatedAt[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field MaDh;
        public Int32Field MaKhachHang;
        public StringField HoTenNguoiNhan;
        public StringField DiaChiNguoiNhan;
        public StringField SoDienThoaiNguoiNhan;
        public StringField EmailNguoiNhan;
        public StringField TinhThanhNguoiNhan;
        public StringField QuanHuyenNguoiNhan;
        public StringField PhuongXaNguoiNhan;
        public StringField MaBuuChinhNguoiNhan;
        public Int32Field ShipperId;
        public DateTimeField NgayDatHang;
        public DateTimeField NgayGiaoHangDuKhien;
        public DateTimeField NgayGiaoHangHoanThanh;
        public DecimalField TongTienHang;
        public DecimalField PhiVanChuyen;
        public DecimalField TongThanhToan;
        public DecimalField GiamGiaDonHang;
        public StringField PhuongThucThanhToan;
        public BooleanField DaThanhToan;
        public Int16Field TrangThaiDonHang;
        public StringField GhiChu;
        public DateTimeField CreatedAt;
        public DateTimeField UpdatedAt;

    }
}