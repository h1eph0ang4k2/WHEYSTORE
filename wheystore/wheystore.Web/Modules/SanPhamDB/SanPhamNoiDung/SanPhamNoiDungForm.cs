namespace wheystore.SanPhamDB.Forms;

[FormScript("SanPhamDB.SanPhamNoiDung")]
[BasedOnRow(typeof(SanPhamNoiDungRow), CheckNames = true)]
public class SanPhamNoiDungForm
{
    public int SanPhamId { get; set; }
    public string TieuDe { get; set; }
    public int LoaiSection { get; set; }
    public string NoiDungHtml { get; set; }
    public int ThuTu { get; set; }
}