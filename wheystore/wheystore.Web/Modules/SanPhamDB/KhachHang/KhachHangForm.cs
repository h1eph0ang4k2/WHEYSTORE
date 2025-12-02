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
    [LookupEditor(typeof(TinhThanhRow))]
    public int? TinhThanhId { get; set; }

   
    [LookupEditor(
        typeof(QuanHuyenRow),
        CascadeFrom = "TinhThanhId",    
        CascadeField = "TinhThanhId"   
    )]
    public int? QuanHuyenId { get; set; }

    
    [LookupEditor(
        typeof(XaPhuongRow),
        CascadeFrom = "QuanHuyenId",
        CascadeField = "QuanHuyenId"
    )]
    public int? XaPhuongId { get; set; }
    public string MaBuuChinh { get; set; }
    public DateOnly NgaySinh { get; set; }
    public short GioiTinh { get; set; }
}