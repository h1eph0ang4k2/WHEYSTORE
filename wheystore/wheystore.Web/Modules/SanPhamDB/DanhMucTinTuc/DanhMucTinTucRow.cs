namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("DanhMucTinTuc")]
[DisplayName("Danh Muc Tin Tuc"), InstanceName("Danh Muc Tin Tuc")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class DanhMucTinTucRow : Row<DanhMucTinTucRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Ma Dm"), Column("MaDM"), Identity, IdProperty]
    public int? MaDm { get => fields.MaDm[this]; set => fields.MaDm[this] = value; }

    [DisplayName("Ten Dm"), Column("TenDM"), Size(150), NotNull, QuickSearch, NameProperty]
    public string TenDm { get => fields.TenDm[this]; set => fields.TenDm[this] = value; }

    [DisplayName("Slug"), Size(200), NotNull]
    public string Slug { get => fields.Slug[this]; set => fields.Slug[this] = value; }

    [DisplayName("Mo Ta"), Size(500)]
    public string MoTa { get => fields.MoTa[this]; set => fields.MoTa[this] = value; }

    [DisplayName("Thu Tu"), NotNull]
    public int? ThuTu { get => fields.ThuTu[this]; set => fields.ThuTu[this] = value; }

    [DisplayName("Hien Thi"), NotNull]
    public bool? HienThi { get => fields.HienThi[this]; set => fields.HienThi[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field MaDm;
        public StringField TenDm;
        public StringField Slug;
        public StringField MoTa;
        public Int32Field ThuTu;
        public BooleanField HienThi;

    }
}