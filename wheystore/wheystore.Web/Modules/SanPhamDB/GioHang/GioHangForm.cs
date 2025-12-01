namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.GioHang")]
[BasedOnRow(typeof(GioHangRow), CheckNames = true)]
public class GioHangForm
{
    public int UserId { get; set; }
    public int MaSp { get; set; }
    public int SoLuong { get; set; }
    public decimal GiaLucThem { get; set; }
    public DateTime NgayTao { get; set; }
    public string GhiChu { get; set; }
}