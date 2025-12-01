namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.SanPhamChiTiet")]
[BasedOnRow(typeof(SanPhamChiTietRow), CheckNames = true)]
public class SanPhamChiTietForm
{
    public int SanPhamId { get; set; }
    public string TrongLuongText { get; set; }
    public int SoLanDungMin { get; set; }
    public int SoLanDungMax { get; set; }
    public string HamLuongProtein { get; set; }
    public string Calories { get; set; }
    public string HamLuongBcaa { get; set; }
    public string XuatXu { get; set; }
}