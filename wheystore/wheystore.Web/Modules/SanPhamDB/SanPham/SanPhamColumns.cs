namespace wheystore.SanPhamDB.Columns;
using Serenity.ComponentModel;
using System;

[ColumnsScript("SanPhamDB.SanPham")]
[BasedOnRow(typeof(SanPhamRow), CheckNames = true)]
public class SanPhamColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int MaSp { get; set; }
    [EditLink]
    public bool HienThi { get; set; }
    public string TenSp { get; set; }
    public decimal GiaBan { get; set; }

    [DisplayName("Danh Mục")]
    public string DanhMucSanPham { get; set; }

    [DisplayName("Nhà Cung Cấp")]
    public string TenNhaCungCap { get; set; }

    [DisplayName("Thương Hiệu")]
    public string TenThuongHieu { get; set; }

    [DisplayName("Trạng Thái"),
    BooleanFormatter(TrueText = "Đang giảm giá", FalseText = "Không giảm")]

    public int SoLuong { get; set; }
    public string MoTa { get; set; }

    public decimal GiamGia { get; set; }
    public decimal GiaKhuyenMai { get; set; }
   


    public string AnhSp { get; set; }
    public string AnhSpCt { get; set; }
   
    
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    

    
}