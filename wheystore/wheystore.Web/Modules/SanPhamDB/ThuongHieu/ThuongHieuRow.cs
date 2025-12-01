namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("ThuongHieu")]
[DisplayName("Thuong Hieu"), InstanceName("Thuong Hieu")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
[LookupScript]
public sealed class ThuongHieuRow : Row<ThuongHieuRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Ten Thuong Hieu"), Size(150), NotNull, QuickSearch, NameProperty]
    public string TenThuongHieu { get => fields.TenThuongHieu[this]; set => fields.TenThuongHieu[this] = value; }

    [DisplayName("Slug"), Size(150)]
    public string Slug { get => fields.Slug[this]; set => fields.Slug[this] = value; }

    [DisplayName("Logo"), Size(255)]
    public string Logo { get => fields.Logo[this]; set => fields.Logo[this] = value; }

    [DisplayName("Mo Ta")]
    public string MoTa { get => fields.MoTa[this]; set => fields.MoTa[this] = value; }

    [DisplayName("Thu Tu"), NotNull]
    public int? ThuTu { get => fields.ThuTu[this]; set => fields.ThuTu[this] = value; }

    [DisplayName("Hien Thi"), NotNull]
    public bool? HienThi { get => fields.HienThi[this]; set => fields.HienThi[this] = value; }

    [DisplayName("Noi Bat"), NotNull]
    public bool? NoiBat { get => fields.NoiBat[this]; set => fields.NoiBat[this] = value; }

    [DisplayName("Created At"), NotNull]
    public DateTime? CreatedAt { get => fields.CreatedAt[this]; set => fields.CreatedAt[this] = value; }

    [DisplayName("Updated At")]
    public DateTime? UpdatedAt { get => fields.UpdatedAt[this]; set => fields.UpdatedAt[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public StringField TenThuongHieu;
        public StringField Slug;
        public StringField Logo;
        public StringField MoTa;
        public Int32Field ThuTu;
        public BooleanField HienThi;
        public BooleanField NoiBat;
        public DateTimeField CreatedAt;
        public DateTimeField UpdatedAt;

    }
}