namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("TinhThanh")]
[DisplayName("Tinh Thanh"), InstanceName("Tinh Thanh")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
[LookupScript]
public sealed class TinhThanhRow : Row<TinhThanhRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Column("ID"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Ten Tinh Thanh"), Size(200), NotNull, QuickSearch, NameProperty]
    public string TenTinhThanh { get => fields.TenTinhThanh[this]; set => fields.TenTinhThanh[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public StringField TenTinhThanh;

    }
}