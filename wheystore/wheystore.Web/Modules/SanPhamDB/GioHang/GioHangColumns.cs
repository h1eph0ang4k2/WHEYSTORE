namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.GioHang")]
[BasedOnRow(typeof(GioHangRow), CheckNames = true)]
public class GioHangColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public string Username { get; set; }
    public string MaSpTenSp { get; set; }
    public int SoLuong { get; set; }
    public decimal GiaLucThem { get; set; }
    public DateTime NgayTao { get; set; }
    [EditLink]
    public string GhiChu { get; set; }
}