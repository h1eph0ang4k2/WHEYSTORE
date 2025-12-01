namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.MaGiamGia")]
[BasedOnRow(typeof(MaGiamGiaRow), CheckNames = true)]
public class MaGiamGiaColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    [EditLink]
    public string MaCode { get; set; }
    public string MoTa { get; set; }
    public short LoaiGiam { get; set; }
    public decimal GiaTri { get; set; }
    public decimal DonToiThieu { get; set; }
    public DateTime NgayBatDau { get; set; }
    public DateTime NgayKetThuc { get; set; }
    public int SoLanDungToiDa { get; set; }
    public int SoLanDungMoiKhach { get; set; }
    public bool IsActive { get; set; }
}