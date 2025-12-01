namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.NhaCungCap")]
[BasedOnRow(typeof(NhaCungCapRow), CheckNames = true)]
public class NhaCungCapForm
{
    public string TenCongTy { get; set; }
    public string TenLienHe { get; set; }
    public string ChucDanhLienHe { get; set; }
    public string DiaChi { get; set; }
    public string ThanhPho { get; set; }
    public string MaBuuChinh { get; set; }
    public string QuocGia { get; set; }
    public string SoDienThoai { get; set; }
    public string MaSoThue { get; set; }
    public string TrangChu { get; set; }
    public DateTime CreatedAt { get; set; }
}