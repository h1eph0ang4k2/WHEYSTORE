namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(GioHangRow))]
public class GioHangPage : Controller
{
    [Route("SanPhamDB/GioHang")]
    public ActionResult Index()
    {
        return this.GridPage<GioHangRow>("@/SanPhamDB/GioHang/GioHangPage");
    }
}