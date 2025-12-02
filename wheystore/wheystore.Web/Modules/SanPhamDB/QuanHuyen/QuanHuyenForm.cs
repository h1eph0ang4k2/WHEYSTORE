namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.QuanHuyen")]
[BasedOnRow(typeof(QuanHuyenRow), CheckNames = true)]
public class QuanHuyenForm
{
    public string TenQuanHuyen { get; set; }
    public int TinhThanhId { get; set; }
}