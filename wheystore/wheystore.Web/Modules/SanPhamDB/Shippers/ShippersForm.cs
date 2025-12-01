namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.Shippers")]
[BasedOnRow(typeof(ShippersRow), CheckNames = true)]
public class ShippersForm
{
    public string MaShipperCode { get; set; }
    public string TenCongTy { get; set; }
    public string TenShipper { get; set; }
    public string SoDienThoai { get; set; }
}