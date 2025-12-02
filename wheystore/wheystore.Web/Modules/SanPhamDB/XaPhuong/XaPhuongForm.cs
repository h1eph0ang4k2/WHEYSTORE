namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.XaPhuong")]
[BasedOnRow(typeof(XaPhuongRow), CheckNames = true)]
public class XaPhuongForm
{
    public string TenXaPhuong { get; set; }
    public int QuanHuyenId { get; set; }
}