namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.QuaTang")]
[BasedOnRow(typeof(QuaTangRow), CheckNames = true)]
public class QuaTangForm
{
    public string TenQua { get; set; }
    public decimal GiaTri { get; set; }
    public string MoTa { get; set; }
    public string Anh { get; set; }
}