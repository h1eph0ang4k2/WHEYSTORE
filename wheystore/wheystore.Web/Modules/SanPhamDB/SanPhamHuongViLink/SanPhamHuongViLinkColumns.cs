namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.SanPhamHuongViLink")]
[BasedOnRow(typeof(SanPhamHuongViLinkRow), CheckNames = true)]
public class SanPhamHuongViLinkColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public string SanPhamTenSp { get; set; }
    public string HuongViTenHuongVi { get; set; }
}