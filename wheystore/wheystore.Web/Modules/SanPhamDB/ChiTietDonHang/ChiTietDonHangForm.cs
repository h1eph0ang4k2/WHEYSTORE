namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.ChiTietDonHang")]
[BasedOnRow(typeof(ChiTietDonHangRow), CheckNames = true)]
public class ChiTietDonHangForm
{
    public int MaDh { get; set; }
    public int MaSp { get; set; }
    public string TenSp { get; set; }
    public string AnhSp { get; set; }
    public decimal DonGia { get; set; }
    public decimal GiamGia { get; set; }
    public int SoLuong { get; set; }
    public decimal ThanhTien { get; set; }
}