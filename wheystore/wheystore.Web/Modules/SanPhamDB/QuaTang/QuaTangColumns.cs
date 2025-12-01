namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.QuaTang")]
[BasedOnRow(typeof(QuaTangRow), CheckNames = true)]
public class QuaTangColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    [EditLink]
    public string TenQua { get; set; }
    public decimal GiaTri { get; set; }
    public string MoTa { get; set; }
    public string Anh { get; set; }
}