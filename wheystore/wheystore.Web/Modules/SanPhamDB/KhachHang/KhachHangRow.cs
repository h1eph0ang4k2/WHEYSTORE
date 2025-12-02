namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("KhachHang")]
[DisplayName("Khach Hang"), InstanceName("Khach Hang")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
[LookupScript]

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

    

  
    [DisplayName("Tỉnh/Thành"),
     Column("TinhThanhID"),
     ForeignKey(typeof(TinhThanhRow)), LeftJoin("jTinhThanh"),
     TextualField(nameof(TinhThanhTen))]
    [LookupEditor(typeof(TinhThanhRow))]
    public int? TinhThanhId
    {
        get => fields.TinhThanhId[this];
        set => fields.TinhThanhId[this] = value;
    }

    [DisplayName("Tỉnh/Thành"), Expression("jTinhThanh.TenTinhThanh")]
    public string TinhThanhTen
    {
        get => fields.TinhThanhTen[this];
        set => fields.TinhThanhTen[this] = value;
    }

    
    [DisplayName("Quận/Huyện"),
     Column("QuanHuyenID"),
     ForeignKey(typeof(QuanHuyenRow)), LeftJoin("jQuanHuyen"),
     TextualField(nameof(QuanHuyenTen))]
    [LookupEditor(typeof(QuanHuyenRow))]
    public int? QuanHuyenId
    {
        get => fields.QuanHuyenId[this];
        set => fields.QuanHuyenId[this] = value;
    }

    [DisplayName("Quận/Huyện"), Expression("jQuanHuyen.TenQuanHuyen")]
    public string QuanHuyenTen
    {
        get => fields.QuanHuyenTen[this];
        set => fields.QuanHuyenTen[this] = value;
    }

    [DisplayName("Xã/Phường"),
     Column("XaPhuongID"),
     ForeignKey(typeof(XaPhuongRow)), LeftJoin("jXaPhuong"),
     TextualField(nameof(XaPhuongTen))]
    [LookupEditor(typeof(XaPhuongRow))]
    public int? XaPhuongId
    {
        get => fields.XaPhuongId[this];
        set => fields.XaPhuongId[this] = value;
    }

    [DisplayName("Xã/Phường"), Expression("jXaPhuong.TenXaPhuong")]
    public string XaPhuongTen
    {
        get => fields.XaPhuongTen[this];
        set => fields.XaPhuongTen[this] = value;
    }



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
        public StringField MaBuuChinh;
        public DateOnlyField NgaySinh;
        public Int16Field GioiTinh;
        public Int32Field TinhThanhId;
        public StringField TinhThanhTen;
        public Int32Field QuanHuyenId;
        public StringField QuanHuyenTen;
        public Int32Field XaPhuongId;
        public StringField XaPhuongTen;

    }
}