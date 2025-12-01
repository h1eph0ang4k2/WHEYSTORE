namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.SanPhamHuongVi")]
[BasedOnRow(typeof(SanPhamHuongViRow), CheckNames = true)]
public class SanPhamHuongViColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int? Id { get; set; }
    public string TenHuongVi { get; set; }
    public bool IsDefault { get; set; }
}