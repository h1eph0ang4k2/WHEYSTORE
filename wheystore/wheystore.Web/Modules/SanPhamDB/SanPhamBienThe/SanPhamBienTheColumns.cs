namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.SanPhamBienThe")]
[BasedOnRow(typeof(SanPhamBienTheRow), CheckNames = true)]
public class SanPhamBienTheColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public string SanPhamTenSp { get; set; }
    [EditLink]
    public string TenBienThe { get; set; }
    public decimal GiaBan { get; set; }
    public decimal GiaKhuyenMai { get; set; }
    public int SoLuong { get; set; }
    public bool IsDefault { get; set; }
}