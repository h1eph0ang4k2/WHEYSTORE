namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("SanPhamQuaTang")]
[DisplayName("San Pham Qua Tang"), InstanceName("San Pham Qua Tang")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
public sealed class SanPhamQuaTangRow : Row<SanPhamQuaTangRow.RowFields>, IIdRow
{
    const string jSanPham = nameof(jSanPham);
    const string jQuaTang = nameof(jQuaTang);

    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("San Pham"), NotNull, ForeignKey(typeof(SanPhamRow)), LeftJoin(jSanPham), TextualField(nameof(SanPhamTenSp))]
    [ServiceLookupEditor(typeof(SanPhamRow), Service = "SanPhamDB/SanPham/List")]
    public int? SanPhamId { get => fields.SanPhamId[this]; set => fields.SanPhamId[this] = value; }

    [DisplayName("Qua Tang"), NotNull, ForeignKey("QuaTang", "Id"), LeftJoin(jQuaTang), TextualField(nameof(QuaTangTenQua))]
    public int? QuaTangId { get => fields.QuaTangId[this]; set => fields.QuaTangId[this] = value; }

    [DisplayName("Thu Tu"), NotNull]
    public int? ThuTu { get => fields.ThuTu[this]; set => fields.ThuTu[this] = value; }

    [DisplayName("Is Default"), NotNull]
    public bool? IsDefault { get => fields.IsDefault[this]; set => fields.IsDefault[this] = value; }

    [DisplayName("San Pham Ten Sp"), Origin(jSanPham, nameof(SanPhamRow.TenSp))]
    public string SanPhamTenSp { get => fields.SanPhamTenSp[this]; set => fields.SanPhamTenSp[this] = value; }

    [DisplayName("Qua Tang Ten Qua"), Expression($"{jQuaTang}.[TenQua]")]
    public string QuaTangTenQua { get => fields.QuaTangTenQua[this]; set => fields.QuaTangTenQua[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field SanPhamId;
        public Int32Field QuaTangId;
        public Int32Field ThuTu;
        public BooleanField IsDefault;

        public StringField SanPhamTenSp;
        public StringField QuaTangTenQua;
    }
}