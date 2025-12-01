namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.SanPhamNoiDung")]
[BasedOnRow(typeof(SanPhamNoiDungRow), CheckNames = true)]
public class SanPhamNoiDungColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public string SanPhamTenSp { get; set; }
    [EditLink]
    public string TieuDe { get; set; }
    public int LoaiSection { get; set; }
    public string NoiDungHtml { get; set; }
    public int ThuTu { get; set; }
}