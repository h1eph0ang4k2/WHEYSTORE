namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("KhachHang")]
[DisplayName("Khach Hang"), InstanceName("Khach Hang")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class KhachHangRow : Row<KhachHangRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("User Id"), NotNull]
    public int? UserId { get => fields.UserId[this]; set => fields.UserId[this] = value; }

    [DisplayName("Ho Ten"), Size(100), NotNull, QuickSearch, NameProperty]
    public string HoTen { get => fields.HoTen[this]; set => fields.HoTen[this] = value; }

    [DisplayName("Dien Thoai"), Size(20)]
    public string DienThoai { get => fields.DienThoai[this]; set => fields.DienThoai[this] = value; }

    [DisplayName("Email"), Size(100)]
    public string Email { get => fields.Email[this]; set => fields.Email[this] = value; }

    [DisplayName("Dia Chi"), Size(255)]
    public string DiaChi { get => fields.DiaChi[this]; set => fields.DiaChi[this] = value; }

    [DisplayName("Phuong Xa"), Size(100)]
    public string PhuongXa { get => fields.PhuongXa[this]; set => fields.PhuongXa[this] = value; }

    [DisplayName("Quan Huyen"), Size(100)]
    public string QuanHuyen { get => fields.QuanHuyen[this]; set => fields.QuanHuyen[this] = value; }

    [DisplayName("Tinh Thanh"), Size(100)]
    public string TinhThanh { get => fields.TinhThanh[this]; set => fields.TinhThanh[this] = value; }

    [DisplayName("Ma Buu Chinh"), Size(20)]
    public string MaBuuChinh { get => fields.MaBuuChinh[this]; set => fields.MaBuuChinh[this] = value; }

    [DisplayName("Ngay Sinh")]
    public DateOnly? NgaySinh { get => fields.NgaySinh[this]; set => fields.NgaySinh[this] = value; }

    [DisplayName("Gioi Tinh")]
    public short? GioiTinh { get => fields.GioiTinh[this]; set => fields.GioiTinh[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field UserId;
        public StringField HoTen;
        public StringField DienThoai;
        public StringField Email;
        public StringField DiaChi;
        public StringField PhuongXa;
        public StringField QuanHuyen;
        public StringField TinhThanh;
        public StringField MaBuuChinh;
        public DateOnlyField NgaySinh;
        public Int16Field GioiTinh;

    }
}