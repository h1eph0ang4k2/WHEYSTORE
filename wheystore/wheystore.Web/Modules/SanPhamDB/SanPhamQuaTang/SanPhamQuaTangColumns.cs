namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.SanPhamQuaTang")]
[BasedOnRow(typeof(SanPhamQuaTangRow), CheckNames = true)]
public class SanPhamQuaTangColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public string SanPhamTenSp { get; set; }
    public string QuaTangTenQua { get; set; }
    public int ThuTu { get; set; }
    public bool IsDefault { get; set; }
}