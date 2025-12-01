namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.SanPhamLienQuan")]
[BasedOnRow(typeof(SanPhamLienQuanRow), CheckNames = true)]
public class SanPhamLienQuanForm
{
    public int SanPhamId { get; set; }
    public int SanPhamLienQuanId { get; set; }
}