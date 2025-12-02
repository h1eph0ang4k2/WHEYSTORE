namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.QuanHuyen")]
[BasedOnRow(typeof(QuanHuyenRow), CheckNames = true)]
public class QuanHuyenColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    [EditLink]
    public string TenQuanHuyen { get; set; }
    public string TinhThanhTenTinhThanh { get; set; }
}