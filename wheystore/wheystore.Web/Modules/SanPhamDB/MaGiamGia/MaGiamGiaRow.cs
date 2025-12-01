namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("MaGiamGia")]
[DisplayName("Ma Giam Gia"), InstanceName("Ma Giam Gia")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class MaGiamGiaRow : Row<MaGiamGiaRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Ma Code"), Size(50), NotNull, QuickSearch, NameProperty]
    public string MaCode { get => fields.MaCode[this]; set => fields.MaCode[this] = value; }

    [DisplayName("Mo Ta"), Size(255)]
    public string MoTa { get => fields.MoTa[this]; set => fields.MoTa[this] = value; }

    [DisplayName("Loai Giam"), NotNull]
    public short? LoaiGiam { get => fields.LoaiGiam[this]; set => fields.LoaiGiam[this] = value; }

    [DisplayName("Gia Tri"), Size(18), NotNull]
    public decimal? GiaTri { get => fields.GiaTri[this]; set => fields.GiaTri[this] = value; }

    [DisplayName("Don Toi Thieu"), Size(18)]
    public decimal? DonToiThieu { get => fields.DonToiThieu[this]; set => fields.DonToiThieu[this] = value; }

    [DisplayName("Ngay Bat Dau")]
    public DateTime? NgayBatDau { get => fields.NgayBatDau[this]; set => fields.NgayBatDau[this] = value; }

    [DisplayName("Ngay Ket Thuc")]
    public DateTime? NgayKetThuc { get => fields.NgayKetThuc[this]; set => fields.NgayKetThuc[this] = value; }

    [DisplayName("So Lan Dung Toi Da")]
    public int? SoLanDungToiDa { get => fields.SoLanDungToiDa[this]; set => fields.SoLanDungToiDa[this] = value; }

    [DisplayName("So Lan Dung Moi Khach")]
    public int? SoLanDungMoiKhach { get => fields.SoLanDungMoiKhach[this]; set => fields.SoLanDungMoiKhach[this] = value; }

    [DisplayName("Is Active"), NotNull]
    public bool? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public StringField MaCode;
        public StringField MoTa;
        public Int16Field LoaiGiam;
        public DecimalField GiaTri;
        public DecimalField DonToiThieu;
        public DateTimeField NgayBatDau;
        public DateTimeField NgayKetThuc;
        public Int32Field SoLanDungToiDa;
        public Int32Field SoLanDungMoiKhach;
        public BooleanField IsActive;

    }
}