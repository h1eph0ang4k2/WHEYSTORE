namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(ChiTietDonHangRow))]
public class ChiTietDonHangPage : Controller
{
    [Route("SanPhamDB/ChiTietDonHang")]
    public ActionResult Index()
    {
        return this.GridPage<ChiTietDonHangRow>("@/SanPhamDB/ChiTietDonHang/ChiTietDonHangPage");
    }
}