namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.KhachHang")]
[BasedOnRow(typeof(KhachHangRow), CheckNames = true)]
public class KhachHangColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public int UserId { get; set; }
    [EditLink]
    public string HoTen { get; set; }
    public string DienThoai { get; set; }
    public string Email { get; set; }
    public string DiaChi { get; set; }

   

    [DisplayName("Quận/Huyện")]
    public string QuanHuyenTen { get; set; }

    [DisplayName("Xã/Phường")]
    public string XaPhuongTen { get; set; }
    [DisplayName("Tỉnh Thành")]
    public string TinhThanh { get; set; }
    public string MaBuuChinh { get; set; }
    public DateOnly NgaySinh { get; set; }
    public short GioiTinh { get; set; }
}