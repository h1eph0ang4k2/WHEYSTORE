namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("ChiTietDonHang")]
[DisplayName("Chi Tiet Don Hang"), InstanceName("Chi Tiet Don Hang")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class ChiTietDonHangRow : Row<ChiTietDonHangRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Chi Tiet Don Hang Id"), Identity, IdProperty]
    public int? ChiTietDonHangId { get => fields.ChiTietDonHangId[this]; set => fields.ChiTietDonHangId[this] = value; }

    [DisplayName("Ma Dh"), Column("MaDH"), NotNull]
    public int? MaDh { get => fields.MaDh[this]; set => fields.MaDh[this] = value; }

    [DisplayName("Ma Sp"), NotNull]
    public int? MaSp { get => fields.MaSp[this]; set => fields.MaSp[this] = value; }

    [DisplayName("Ten Sp"), Column("TenSP"), Size(200), NotNull, QuickSearch, NameProperty]
    public string TenSp { get => fields.TenSp[this]; set => fields.TenSp[this] = value; }

    [DisplayName("Anh Sp"), Size(255)]
    public string AnhSp { get => fields.AnhSp[this]; set => fields.AnhSp[this] = value; }

    [DisplayName("Don Gia"), Size(18), NotNull]
    public decimal? DonGia { get => fields.DonGia[this]; set => fields.DonGia[this] = value; }

    [DisplayName("Giam Gia"), Size(5), Scale(2), NotNull]
    public decimal? GiamGia { get => fields.GiamGia[this]; set => fields.GiamGia[this] = value; }

    [DisplayName("So Luong"), NotNull]
    public int? SoLuong { get => fields.SoLuong[this]; set => fields.SoLuong[this] = value; }

    [DisplayName("Thanh Tien"), Size(18), NotNull]
    public decimal? ThanhTien { get => fields.ThanhTien[this]; set => fields.ThanhTien[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field ChiTietDonHangId;
        public Int32Field MaDh;
        public Int32Field MaSp;
        public StringField TenSp;
        public StringField AnhSp;
        public DecimalField DonGia;
        public DecimalField GiamGia;
        public Int32Field SoLuong;
        public DecimalField ThanhTien;

    }
}