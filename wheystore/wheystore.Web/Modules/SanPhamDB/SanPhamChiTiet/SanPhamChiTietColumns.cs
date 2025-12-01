namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.SanPhamChiTiet")]
[BasedOnRow(typeof(SanPhamChiTietRow), CheckNames = true)]
public class SanPhamChiTietColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public string SanPhamTenSp { get; set; }
    [EditLink]
    public string TrongLuongText { get; set; }
    public int SoLanDungMin { get; set; }
    public int SoLanDungMax { get; set; }
    public string HamLuongProtein { get; set; }
    public string Calories { get; set; }
    public string HamLuongBcaa { get; set; }
    public string XuatXu { get; set; }
}