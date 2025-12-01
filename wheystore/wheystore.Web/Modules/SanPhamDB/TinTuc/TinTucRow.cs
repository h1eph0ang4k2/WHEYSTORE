namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("TinTuc")]
[DisplayName("Tin Tuc"), InstanceName("Tin Tuc")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class TinTucRow : Row<TinTucRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Tin Tuc Id"), Identity, IdProperty]
    public int? TinTucId { get => fields.TinTucId[this]; set => fields.TinTucId[this] = value; }

    [DisplayName("Danh Muc Id"), NotNull]
    public int? DanhMucId { get => fields.DanhMucId[this]; set => fields.DanhMucId[this] = value; }

    [DisplayName("Tieu De"), Size(200), NotNull, QuickSearch, NameProperty]
    public string TieuDe { get => fields.TieuDe[this]; set => fields.TieuDe[this] = value; }

    [DisplayName("Slug"), Size(250), NotNull]
    public string Slug { get => fields.Slug[this]; set => fields.Slug[this] = value; }

    [DisplayName("Tom Tat"), Size(500)]
    public string TomTat { get => fields.TomTat[this]; set => fields.TomTat[this] = value; }

    [DisplayName("Anh Bia"), Size(255)]
    public string AnhBia { get => fields.AnhBia[this]; set => fields.AnhBia[this] = value; }

    [DisplayName("Noi Dung Html")]
    public string NoiDungHtml { get => fields.NoiDungHtml[this]; set => fields.NoiDungHtml[this] = value; }

    [DisplayName("Seo Title"), Size(200)]
    public string SeoTitle { get => fields.SeoTitle[this]; set => fields.SeoTitle[this] = value; }

    [DisplayName("Seo Description"), Size(300)]
    public string SeoDescription { get => fields.SeoDescription[this]; set => fields.SeoDescription[this] = value; }

    [DisplayName("Is Published"), NotNull]
    public bool? IsPublished { get => fields.IsPublished[this]; set => fields.IsPublished[this] = value; }

    [DisplayName("Is Hot"), NotNull]
    public bool? IsHot { get => fields.IsHot[this]; set => fields.IsHot[this] = value; }

    [DisplayName("View Count"), NotNull]
    public int? ViewCount { get => fields.ViewCount[this]; set => fields.ViewCount[this] = value; }

    [DisplayName("Ngay Dang"), NotNull]
    public DateTime? NgayDang { get => fields.NgayDang[this]; set => fields.NgayDang[this] = value; }

    [DisplayName("Ngay Cap Nhat")]
    public DateTime? NgayCapNhat { get => fields.NgayCapNhat[this]; set => fields.NgayCapNhat[this] = value; }

    [DisplayName("Tac Gia"), Size(100)]
    public string TacGia { get => fields.TacGia[this]; set => fields.TacGia[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field TinTucId;
        public Int32Field DanhMucId;
        public StringField TieuDe;
        public StringField Slug;
        public StringField TomTat;
        public StringField AnhBia;
        public StringField NoiDungHtml;
        public StringField SeoTitle;
        public StringField SeoDescription;
        public BooleanField IsPublished;
        public BooleanField IsHot;
        public Int32Field ViewCount;
        public DateTimeField NgayDang;
        public DateTimeField NgayCapNhat;
        public StringField TacGia;

    }
}