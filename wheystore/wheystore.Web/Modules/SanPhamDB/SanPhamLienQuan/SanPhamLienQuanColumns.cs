namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.SanPhamLienQuan")]
[BasedOnRow(typeof(SanPhamLienQuanRow), CheckNames = true)]
public class SanPhamLienQuanColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public string SanPhamTenSp { get; set; }
    public string SanPhamLienQuanTenSp { get; set; }
}