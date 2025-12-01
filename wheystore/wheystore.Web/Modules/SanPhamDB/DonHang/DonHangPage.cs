namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(DonHangRow))]
public class DonHangPage : Controller
{
    [Route("SanPhamDB/DonHang")]
    public ActionResult Index()
    {
        return this.GridPage<DonHangRow>("@/SanPhamDB/DonHang/DonHangPage");
    }
}