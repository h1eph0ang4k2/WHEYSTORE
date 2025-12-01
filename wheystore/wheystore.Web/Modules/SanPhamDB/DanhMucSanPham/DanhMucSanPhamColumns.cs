namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.DanhMucSanPham")]
[BasedOnRow(typeof(DanhMucSanPhamRow), CheckNames = true)]
public class DanhMucSanPhamColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int MaLoai { get; set; }
    [EditLink]
    public string TenLoai { get; set; }
    public string MoTa { get; set; }
}