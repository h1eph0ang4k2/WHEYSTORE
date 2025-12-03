namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("QuanHuyen")]
[DisplayName("Quan Huyen"), InstanceName("Quan Huyen")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
[LookupScript]
public sealed class QuanHuyenRow : Row<QuanHuyenRow.RowFields>, IIdRow, INameRow
{
    const string jTinhThanh = nameof(jTinhThanh);

    [DisplayName("Id"), Column("ID"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Ten Quan Huyen"), Size(200), NotNull, QuickSearch, NameProperty]
    public string TenQuanHuyen { get => fields.TenQuanHuyen[this]; set => fields.TenQuanHuyen[this] = value; }

    [DisplayName("Tỉnh/Thành"),
     Column("TinhThanhID"),
     ForeignKey(typeof(TinhThanhRow)), LeftJoin(jTinhThanh),
     LookupInclude] 
    public int? TinhThanhId
    {
        get => fields.TinhThanhId[this];
        set => fields.TinhThanhId[this] = value;
    }

    [DisplayName("Tên Tỉnh/Thành"), Origin(jTinhThanh, nameof(TinhThanhRow.TenTinhThanh))]
    public string TinhThanhTen
    {
        get => fields.TinhThanhTen[this];
        set => fields.TinhThanhTen[this] = value;
    }

    public class RowFields : RowFieldsBase
    {

        public Int32Field Id;
        public StringField TenQuanHuyen;
        public Int32Field TinhThanhId;
        public StringField TinhThanhTen;
    }
}
