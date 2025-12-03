namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("Shipper")]
[DisplayName("Shippers"), InstanceName("Shippers")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
[LookupScript]
public sealed class ShippersRow : Row<ShippersRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Ma Shipper"), Identity, IdProperty]
    public int? MaShipper { get => fields.MaShipper[this]; set => fields.MaShipper[this] = value; }

    [DisplayName("Ma Shipper Code"), Size(20), QuickSearch, NameProperty]
    public string MaShipperCode { get => fields.MaShipperCode[this]; set => fields.MaShipperCode[this] = value; }

    [DisplayName("Ten Cong Ty"), Size(150), NotNull]
    public string TenCongTy { get => fields.TenCongTy[this]; set => fields.TenCongTy[this] = value; }

    [DisplayName("Ten Shipper"), Size(100)]
    public string TenShipper { get => fields.TenShipper[this]; set => fields.TenShipper[this] = value; }

    [DisplayName("So Dien Thoai"), Size(24)]
    public string SoDienThoai { get => fields.SoDienThoai[this]; set => fields.SoDienThoai[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field MaShipper;
        public StringField MaShipperCode;
        public StringField TenCongTy;
        public StringField TenShipper;
        public StringField SoDienThoai;

    }
}