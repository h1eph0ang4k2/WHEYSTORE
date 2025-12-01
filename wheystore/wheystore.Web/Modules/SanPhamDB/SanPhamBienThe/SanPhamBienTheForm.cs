namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.SanPhamBienThe")]
[BasedOnRow(typeof(SanPhamBienTheRow), CheckNames = true)]
public class SanPhamBienTheForm
{
    public int SanPhamId { get; set; }
    public string TenBienThe { get; set; }
    public decimal GiaBan { get; set; }
    public decimal GiaKhuyenMai { get; set; }
    public int SoLuong { get; set; }
    public bool IsDefault { get; set; }
}