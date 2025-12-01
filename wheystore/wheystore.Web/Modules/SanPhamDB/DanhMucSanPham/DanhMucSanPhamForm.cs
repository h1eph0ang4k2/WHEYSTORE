namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.DanhMucSanPham")]
[BasedOnRow(typeof(DanhMucSanPhamRow), CheckNames = true)]
public class DanhMucSanPhamForm
{
    public string TenLoai { get; set; }
    public string MoTa { get; set; }
}