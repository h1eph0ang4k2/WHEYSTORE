namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("SanPhamBienThe")]
[DisplayName("San Pham Bien The"), InstanceName("San Pham Bien The")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class SanPhamBienTheRow : Row<SanPhamBienTheRow.RowFields>, IIdRow, INameRow
{
    const string jSanPham = nameof(jSanPham);

    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("San Pham"), NotNull, ForeignKey(typeof(SanPhamRow)), LeftJoin(jSanPham), TextualField(nameof(SanPhamTenSp))]
    [ServiceLookupEditor(typeof(SanPhamRow), Service = "SanPhamDB/SanPham/List")]
    public int? SanPhamId { get => fields.SanPhamId[this]; set => fields.SanPhamId[this] = value; }

    [DisplayName("Ten Bien The"), Size(100), NotNull, QuickSearch, NameProperty]
    public string TenBienThe { get => fields.TenBienThe[this]; set => fields.TenBienThe[this] = value; }

    [DisplayName("Gia Ban"), Size(18), NotNull]
    public decimal? GiaBan { get => fields.GiaBan[this]; set => fields.GiaBan[this] = value; }

    [DisplayName("Gia Khuyen Mai"), Size(18)]
    public decimal? GiaKhuyenMai { get => fields.GiaKhuyenMai[this]; set => fields.GiaKhuyenMai[this] = value; }

    [DisplayName("So Luong"), NotNull]
    public int? SoLuong { get => fields.SoLuong[this]; set => fields.SoLuong[this] = value; }

    [DisplayName("Is Default"), NotNull]
    public bool? IsDefault { get => fields.IsDefault[this]; set => fields.IsDefault[this] = value; }

    [DisplayName("San Pham Ten Sp"), Origin(jSanPham, nameof(SanPhamRow.TenSp))]
    public string SanPhamTenSp { get => fields.SanPhamTenSp[this]; set => fields.SanPhamTenSp[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field SanPhamId;
        public StringField TenBienThe;
        public DecimalField GiaBan;
        public DecimalField GiaKhuyenMai;
        public Int32Field SoLuong;
        public BooleanField IsDefault;
        public StringField SanPhamTenSp;
    }
}