namespace wheystore.SanPhamDB.Columns;

[ColumnsScript("SanPhamDB.XaPhuong")]
[BasedOnRow(typeof(XaPhuongRow), CheckNames = true)]
public class XaPhuongColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    [EditLink]
    public string TenXaPhuong { get; set; }

    [DisplayName("Quận Huyện")]
    public string QuanHuyenTen { get; set; }
}