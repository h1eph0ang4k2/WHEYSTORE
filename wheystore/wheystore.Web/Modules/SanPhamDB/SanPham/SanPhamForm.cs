using wheystore.SanPhamDB;
using System.Collections.Generic;


namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.SanPham")]
[BasedOnRow(typeof(SanPhamRow), CheckNames = true)]
public class SanPhamForm
{
    public string TenSp { get; set; }
    public decimal GiaBan { get; set; }
    public int SoLuong { get; set; }
    public string MoTa { get; set; }
    [DisplayName("Category")]
    [LookupEditor(typeof(DanhMucSanPhamRow))]
    public int MaLoai { get; set; }

    [DisplayName("Supplier")]
    [ServiceLookupEditor(typeof(NhaCungCapRow))]
    public int NhaCungCap { get; set; }

    [DisplayName("Thương Hiệu")]
    [LookupEditor(typeof(ThuongHieuRow))]
    public int ThuongHieuId { get; set; }
    public string AnhSp { get; set; }
    public string AnhSpCt { get; set; }

    // Giảm giá % từ 0 -> 100, không cho nhập số lẻ
    [DecimalEditor(MinValue = 0, MaxValue = 100, Decimals = 0)]
    public decimal GiamGia { get; set; }
    // Giá khuyến mãi: để readonly, chỉ cho code set
    [ReadOnly(true)]

    
    public decimal GiaKhuyenMai { get; set; }
    public bool HienThi { get; set; }

    

    public List<int> HuongViList { get; set; }

    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }


}