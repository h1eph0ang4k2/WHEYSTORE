namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.TinTuc")]
[BasedOnRow(typeof(TinTucRow), CheckNames = true)]
public class TinTucColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int TinTucId { get; set; }
    public int DanhMucId { get; set; }
    [EditLink]
    public string TieuDe { get; set; }
    public string Slug { get; set; }
    public string TomTat { get; set; }
    public string AnhBia { get; set; }
    public string NoiDungHtml { get; set; }
    public string SeoTitle { get; set; }
    public string SeoDescription { get; set; }
    public bool IsPublished { get; set; }
    public bool IsHot { get; set; }
    public int ViewCount { get; set; }
    public DateTime NgayDang { get; set; }
    public DateTime NgayCapNhat { get; set; }
    public string TacGia { get; set; }
}