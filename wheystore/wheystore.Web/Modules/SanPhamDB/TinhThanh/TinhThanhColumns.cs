namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.TinhThanh")]
[BasedOnRow(typeof(TinhThanhRow), CheckNames = true)]
public class TinhThanhColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    [EditLink]
    public string TenTinhThanh { get; set; }
}