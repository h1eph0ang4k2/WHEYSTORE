namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("SanPhamLienQuan")]
[DisplayName("San Pham Lien Quan"), InstanceName("San Pham Lien Quan")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
public sealed class SanPhamLienQuanRow : Row<SanPhamLienQuanRow.RowFields>, IIdRow
{
    const string jSanPham = nameof(jSanPham);
    const string jSanPhamLienQuan = nameof(jSanPhamLienQuan);

    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("San Pham"), NotNull, ForeignKey(typeof(SanPhamRow)), LeftJoin(jSanPham), TextualField(nameof(SanPhamTenSp))]
    [ServiceLookupEditor(typeof(SanPhamRow), Service = "SanPhamDB/SanPham/List")]
    public int? SanPhamId { get => fields.SanPhamId[this]; set => fields.SanPhamId[this] = value; }

    [DisplayName("San Pham Lien Quan"), NotNull, ForeignKey(typeof(SanPhamRow)), LeftJoin(jSanPhamLienQuan)]
    [TextualField(nameof(SanPhamLienQuanTenSp)), ServiceLookupEditor(typeof(SanPhamRow), Service = "SanPhamDB/SanPham/List")]
    public int? SanPhamLienQuanId { get => fields.SanPhamLienQuanId[this]; set => fields.SanPhamLienQuanId[this] = value; }

    [DisplayName("San Pham Ten Sp"), Origin(jSanPham, nameof(SanPhamRow.TenSp))]
    public string SanPhamTenSp { get => fields.SanPhamTenSp[this]; set => fields.SanPhamTenSp[this] = value; }

    [DisplayName("San Pham Lien Quan Ten Sp"), Origin(jSanPhamLienQuan, nameof(SanPhamRow.TenSp))]
    public string SanPhamLienQuanTenSp { get => fields.SanPhamLienQuanTenSp[this]; set => fields.SanPhamLienQuanTenSp[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field SanPhamId;
        public Int32Field SanPhamLienQuanId;

        public StringField SanPhamTenSp;
        public StringField SanPhamLienQuanTenSp;
    }
}