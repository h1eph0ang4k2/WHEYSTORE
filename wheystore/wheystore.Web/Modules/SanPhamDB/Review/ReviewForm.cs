namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.Review")]
[BasedOnRow(typeof(ReviewRow), CheckNames = true)]
public class ReviewForm
{
    public int SanPhamId { get; set; }
    public int KhachHangId { get; set; }
    public int UserId { get; set; }
    public short Rating { get; set; }
    public string TieuDe { get; set; }
    public string NoiDung { get; set; }
    public string AnhReview { get; set; }
    public bool DaDuyet { get; set; }
    public int SoLanHuuIch { get; set; }
    public bool BiAn { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}