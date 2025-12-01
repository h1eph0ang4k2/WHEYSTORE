namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.ChiTietDonHang")]
[BasedOnRow(typeof(ChiTietDonHangRow), CheckNames = true)]
public class ChiTietDonHangColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int ChiTietDonHangId { get; set; }
    public int MaDh { get; set; }
    public int MaSp { get; set; }
    [EditLink]
    public string TenSp { get; set; }
    public string AnhSp { get; set; }
    public decimal DonGia { get; set; }
    public decimal GiamGia { get; set; }
    public int SoLuong { get; set; }
    public decimal ThanhTien { get; set; }
}