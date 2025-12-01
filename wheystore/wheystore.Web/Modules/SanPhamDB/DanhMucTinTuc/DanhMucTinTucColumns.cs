namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.DanhMucTinTuc")]
[BasedOnRow(typeof(DanhMucTinTucRow), CheckNames = true)]
public class DanhMucTinTucColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int MaDm { get; set; }
    [EditLink]
    public string TenDm { get; set; }
    public string Slug { get; set; }
    public string MoTa { get; set; }
    public int ThuTu { get; set; }
    public bool HienThi { get; set; }
}