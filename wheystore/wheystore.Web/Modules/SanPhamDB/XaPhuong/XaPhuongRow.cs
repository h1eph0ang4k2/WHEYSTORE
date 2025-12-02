namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("XaPhuong")]
[DisplayName("Xa Phuong"), InstanceName("Xa Phuong")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
[LookupScript]
public sealed class XaPhuongRow : Row<XaPhuongRow.RowFields>, IIdRow, INameRow
{
    const string jQuanHuyen = nameof(jQuanHuyen);

    [DisplayName("Id"), Column("ID"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Ten Xa Phuong"), Size(200), NotNull, QuickSearch, NameProperty]
    public string TenXaPhuong { get => fields.TenXaPhuong[this]; set => fields.TenXaPhuong[this] = value; }

    [DisplayName("Quan Huyen"), Column("QuanHuyenID"), NotNull, ForeignKey(typeof(QuanHuyenRow)), LeftJoin(jQuanHuyen)]
    [TextualField(nameof(QuanHuyenTenQuanHuyen)), ServiceLookupEditor(typeof(QuanHuyenRow))]
    public int? QuanHuyenId { get => fields.QuanHuyenId[this]; set => fields.QuanHuyenId[this] = value; }

    [DisplayName("Quan Huyen Ten Quan Huyen"), Origin(jQuanHuyen, nameof(QuanHuyenRow.TenQuanHuyen))]
    public string QuanHuyenTenQuanHuyen { get => fields.QuanHuyenTenQuanHuyen[this]; set => fields.QuanHuyenTenQuanHuyen[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public StringField TenXaPhuong;
        public Int32Field QuanHuyenId;
        public StringField QuanHuyenTenQuanHuyen;
    }
}