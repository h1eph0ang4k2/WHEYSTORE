namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.ThuongHieu")]
[BasedOnRow(typeof(ThuongHieuRow), CheckNames = true)]
public class ThuongHieuColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    [EditLink]
    public string TenThuongHieu { get; set; }
    public string Slug { get; set; }
    public string Logo { get; set; }
    public string MoTa { get; set; }
    public int ThuTu { get; set; }
    public bool HienThi { get; set; }
    public bool NoiBat { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}