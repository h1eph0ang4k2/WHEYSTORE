namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.TinhThanh")]
[BasedOnRow(typeof(TinhThanhRow), CheckNames = true)]
public class TinhThanhForm
{
    public string TenTinhThanh { get; set; }
}