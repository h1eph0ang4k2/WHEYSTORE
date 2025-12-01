namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("SanPhamChiTiet")]
[DisplayName("San Pham Chi Tiet"), InstanceName("San Pham Chi Tiet")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class SanPhamChiTietRow : Row<SanPhamChiTietRow.RowFields>, IIdRow, INameRow
{
    const string jSanPham = nameof(jSanPham);

    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("San Pham"), NotNull, ForeignKey(typeof(SanPhamRow)), LeftJoin(jSanPham), TextualField(nameof(SanPhamTenSp))]
    [ServiceLookupEditor(typeof(SanPhamRow), Service = "SanPhamDB/SanPham/List")]
    public int? SanPhamId { get => fields.SanPhamId[this]; set => fields.SanPhamId[this] = value; }

    [DisplayName("Trong Luong Text"), Size(50), QuickSearch, NameProperty]
    public string TrongLuongText { get => fields.TrongLuongText[this]; set => fields.TrongLuongText[this] = value; }

    [DisplayName("So Lan Dung Min")]
    public int? SoLanDungMin { get => fields.SoLanDungMin[this]; set => fields.SoLanDungMin[this] = value; }

    [DisplayName("So Lan Dung Max")]
    public int? SoLanDungMax { get => fields.SoLanDungMax[this]; set => fields.SoLanDungMax[this] = value; }

    [DisplayName("Ham Luong Protein"), Size(50)]
    public string HamLuongProtein { get => fields.HamLuongProtein[this]; set => fields.HamLuongProtein[this] = value; }

    [DisplayName("Calories"), Size(50)]
    public string Calories { get => fields.Calories[this]; set => fields.Calories[this] = value; }

    [DisplayName("Ham Luong Bcaa"), Size(50)]
    public string HamLuongBcaa { get => fields.HamLuongBcaa[this]; set => fields.HamLuongBcaa[this] = value; }

    [DisplayName("Xuat Xu"), Size(50)]
    public string XuatXu { get => fields.XuatXu[this]; set => fields.XuatXu[this] = value; }

    [DisplayName("San Pham Ten Sp"), Origin(jSanPham, nameof(SanPhamRow.TenSp))]
    public string SanPhamTenSp { get => fields.SanPhamTenSp[this]; set => fields.SanPhamTenSp[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field SanPhamId;
        public StringField TrongLuongText;
        public Int32Field SoLanDungMin;
        public Int32Field SoLanDungMax;
        public StringField HamLuongProtein;
        public StringField Calories;
        public StringField HamLuongBcaa;
        public StringField XuatXu;

        public StringField SanPhamTenSp;
    }
}