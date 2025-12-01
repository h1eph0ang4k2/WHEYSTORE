namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("Review")]
[DisplayName("Review"), InstanceName("Review")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class ReviewRow : Row<ReviewRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("San Pham Id"), NotNull]
    public int? SanPhamId { get => fields.SanPhamId[this]; set => fields.SanPhamId[this] = value; }

    [DisplayName("Khach Hang Id")]
    public int? KhachHangId { get => fields.KhachHangId[this]; set => fields.KhachHangId[this] = value; }

    [DisplayName("User Id")]
    public int? UserId { get => fields.UserId[this]; set => fields.UserId[this] = value; }

    [DisplayName("Rating"), NotNull]
    public short? Rating { get => fields.Rating[this]; set => fields.Rating[this] = value; }

    [DisplayName("Tieu De"), Size(200), QuickSearch, NameProperty]
    public string TieuDe { get => fields.TieuDe[this]; set => fields.TieuDe[this] = value; }

    [DisplayName("Noi Dung")]
    public string NoiDung { get => fields.NoiDung[this]; set => fields.NoiDung[this] = value; }

    [DisplayName("Anh Review"), Size(1000)]
    public string AnhReview { get => fields.AnhReview[this]; set => fields.AnhReview[this] = value; }

    [DisplayName("Da Duyet"), NotNull]
    public bool? DaDuyet { get => fields.DaDuyet[this]; set => fields.DaDuyet[this] = value; }

    [DisplayName("So Lan Huu Ich"), NotNull]
    public int? SoLanHuuIch { get => fields.SoLanHuuIch[this]; set => fields.SoLanHuuIch[this] = value; }

    [DisplayName("Bi An"), NotNull]
    public bool? BiAn { get => fields.BiAn[this]; set => fields.BiAn[this] = value; }

    [DisplayName("Created At"), NotNull]
    public DateTime? CreatedAt { get => fields.CreatedAt[this]; set => fields.CreatedAt[this] = value; }

    [DisplayName("Updated At")]
    public DateTime? UpdatedAt { get => fields.UpdatedAt[this]; set => fields.UpdatedAt[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field SanPhamId;
        public Int32Field KhachHangId;
        public Int32Field UserId;
        public Int16Field Rating;
        public StringField TieuDe;
        public StringField NoiDung;
        public StringField AnhReview;
        public BooleanField DaDuyet;
        public Int32Field SoLanHuuIch;
        public BooleanField BiAn;
        public DateTimeField CreatedAt;
        public DateTimeField UpdatedAt;

    }
}