namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("SanPhamNoiDung")]
[DisplayName("San Pham Noi Dung"), InstanceName("San Pham Noi Dung")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class SanPhamNoiDungRow : Row<SanPhamNoiDungRow.RowFields>, IIdRow, INameRow
{
    const string jSanPham = nameof(jSanPham);

    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("San Pham"), NotNull, ForeignKey(typeof(SanPhamRow)), LeftJoin(jSanPham), TextualField(nameof(SanPhamTenSp))]
    [ServiceLookupEditor(typeof(SanPhamRow), Service = "SanPhamDB/SanPham/List")]
    public int? SanPhamId { get => fields.SanPhamId[this]; set => fields.SanPhamId[this] = value; }

    [DisplayName("Tieu De"), Size(200), NotNull, QuickSearch, NameProperty]
    public string TieuDe { get => fields.TieuDe[this]; set => fields.TieuDe[this] = value; }

    [DisplayName("Loai Section")]
    public int? LoaiSection { get => fields.LoaiSection[this]; set => fields.LoaiSection[this] = value; }

    [DisplayName("Noi Dung Html"), NotNull]
    public string NoiDungHtml { get => fields.NoiDungHtml[this]; set => fields.NoiDungHtml[this] = value; }

    [DisplayName("Thu Tu"), NotNull]
    public int? ThuTu { get => fields.ThuTu[this]; set => fields.ThuTu[this] = value; }

    [DisplayName("San Pham Ten Sp"), Origin(jSanPham, nameof(SanPhamRow.TenSp))]
    public string SanPhamTenSp { get => fields.SanPhamTenSp[this]; set => fields.SanPhamTenSp[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field SanPhamId;
        public StringField TieuDe;
        public Int32Field LoaiSection;
        public StringField NoiDungHtml;
        public Int32Field ThuTu;

        public StringField SanPhamTenSp;
    }
}