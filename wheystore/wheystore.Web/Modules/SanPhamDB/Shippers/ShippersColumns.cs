namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.Shippers")]
[BasedOnRow(typeof(ShippersRow), CheckNames = true)]
public class ShippersColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int MaShipper { get; set; }
    [EditLink]
    public string MaShipperCode { get; set; }
    public string TenCongTy { get; set; }
    public string TenShipper { get; set; }
    public string SoDienThoai { get; set; }
}