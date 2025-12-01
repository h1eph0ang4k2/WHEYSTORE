namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.SanPhamHuongViLink")]
[BasedOnRow(typeof(SanPhamHuongViLinkRow), CheckNames = true)]
public class SanPhamHuongViLinkForm
{
    public int SanPhamId { get; set; }
    public int HuongViId { get; set; }
}