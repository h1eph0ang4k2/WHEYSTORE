namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.SanPhamHuongVi")]
[BasedOnRow(typeof(SanPhamHuongViRow), CheckNames = true)]
public class SanPhamHuongViForm
{
   
    public string TenHuongVi { get; set; }
    public bool IsDefault { get; set; }
}