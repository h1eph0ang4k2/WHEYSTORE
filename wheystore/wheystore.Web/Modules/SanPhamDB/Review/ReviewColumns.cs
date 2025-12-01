namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.Review")]
[BasedOnRow(typeof(ReviewRow), CheckNames = true)]
public class ReviewColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public int SanPhamId { get; set; }
    public int KhachHangId { get; set; }
    public int UserId { get; set; }
    public short Rating { get; set; }
    [EditLink]
    public string TieuDe { get; set; }
    public string NoiDung { get; set; }
    public string AnhReview { get; set; }
    public bool DaDuyet { get; set; }
    public int SoLanHuuIch { get; set; }
    public bool BiAn { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}