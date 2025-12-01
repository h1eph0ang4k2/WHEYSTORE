namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.SanPhamQuaTang")]
[BasedOnRow(typeof(SanPhamQuaTangRow), CheckNames = true)]
public class SanPhamQuaTangForm
{
    public int SanPhamId { get; set; }
    public int QuaTangId { get; set; }
    public int ThuTu { get; set; }
    public bool IsDefault { get; set; }
}