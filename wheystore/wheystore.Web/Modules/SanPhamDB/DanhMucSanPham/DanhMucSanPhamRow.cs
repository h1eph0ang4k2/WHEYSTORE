namespace wheystore.SanPhamDB;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("DanhMucSanPham")]
[DisplayName("Danh Muc San Pham"), InstanceName("Danh Muc San Pham")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
[LookupScript]
public sealed class DanhMucSanPhamRow : Row<DanhMucSanPhamRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Ma Loai"), Identity, IdProperty]
    public int? MaLoai { get => fields.MaLoai[this]; set => fields.MaLoai[this] = value; }

    [DisplayName("Ten Loai"), Size(100), NotNull, QuickSearch, NameProperty]
    public string TenLoai { get => fields.TenLoai[this]; set => fields.TenLoai[this] = value; }

    [DisplayName("Mo Ta")]
    public string MoTa { get => fields.MoTa[this]; set => fields.MoTa[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field MaLoai;
        public StringField TenLoai;
        public StringField MoTa;

    }
}