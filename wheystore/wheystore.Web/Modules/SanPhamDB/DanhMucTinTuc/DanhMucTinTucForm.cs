namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.DanhMucTinTuc")]
[BasedOnRow(typeof(DanhMucTinTucRow), CheckNames = true)]
public class DanhMucTinTucForm
{
    public string TenDm { get; set; }
    public string Slug { get; set; }
    public string MoTa { get; set; }
    public int ThuTu { get; set; }
    public bool HienThi { get; set; }
}