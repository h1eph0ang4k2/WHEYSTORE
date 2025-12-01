namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.KhachHang")]
[BasedOnRow(typeof(KhachHangRow), CheckNames = true)]
public class KhachHangForm
{
    public int UserId { get; set; }
    public string HoTen { get; set; }
    public string DienThoai { get; set; }
    public string Email { get; set; }
    public string DiaChi { get; set; }
    public string PhuongXa { get; set; }
    public string QuanHuyen { get; set; }
    public string TinhThanh { get; set; }
    public string MaBuuChinh { get; set; }
    public DateOnly NgaySinh { get; set; }
    public short GioiTinh { get; set; }
}