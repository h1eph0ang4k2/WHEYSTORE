namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("GioHang")]
[DisplayName("Gio Hang"), InstanceName("Gio Hang")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class GioHangRow : Row<GioHangRow.RowFields>, IIdRow, INameRow
{
    const string jUser = nameof(jUser);
    const string jMaSp = nameof(jMaSp);

    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("User"), NotNull, ForeignKey(typeof(Administration.UserRow)), LeftJoin(jUser), TextualField(nameof(Username))]
    [LookupEditor(typeof(Administration.UserRow), Async = true)]
    public int? UserId { get => fields.UserId[this]; set => fields.UserId[this] = value; }

    [DisplayName("Ma Sp"), NotNull, ForeignKey(typeof(SanPhamRow)), LeftJoin(jMaSp), TextualField(nameof(MaSpTenSp))]
    [ServiceLookupEditor(typeof(SanPhamRow), Service = "SanPhamDB/SanPham/List")]
    public int? MaSp { get => fields.MaSp[this]; set => fields.MaSp[this] = value; }

    [DisplayName("So Luong"), NotNull]
    public int? SoLuong { get => fields.SoLuong[this]; set => fields.SoLuong[this] = value; }

    [DisplayName("Gia Luc Them"), Size(18), NotNull]
    public decimal? GiaLucThem { get => fields.GiaLucThem[this]; set => fields.GiaLucThem[this] = value; }

    [DisplayName("Ngay Tao"), NotNull]
    public DateTime? NgayTao { get => fields.NgayTao[this]; set => fields.NgayTao[this] = value; }

    [DisplayName("Ghi Chu"), Size(500), QuickSearch, NameProperty]
    public string GhiChu { get => fields.GhiChu[this]; set => fields.GhiChu[this] = value; }

    [DisplayName("User Username"), Origin(jUser, nameof(Administration.UserRow.Username))]
    public string Username { get => fields.Username[this]; set => fields.Username[this] = value; }

    [DisplayName("Ma Sp Ten Sp"), Origin(jMaSp, nameof(SanPhamRow.TenSp))]
    public string MaSpTenSp { get => fields.MaSpTenSp[this]; set => fields.MaSpTenSp[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field UserId;
        public Int32Field MaSp;
        public Int32Field SoLuong;
        public DecimalField GiaLucThem;
        public DateTimeField NgayTao;
        public StringField GhiChu;

        public StringField Username;
        public StringField MaSpTenSp;
    }
}