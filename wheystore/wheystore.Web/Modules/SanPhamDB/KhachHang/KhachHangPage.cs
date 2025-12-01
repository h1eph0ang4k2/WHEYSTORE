namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(KhachHangRow))]
public class KhachHangPage : Controller
{
    [Route("SanPhamDB/KhachHang")]
    public ActionResult Index()
    {
        return this.GridPage<KhachHangRow>("@/SanPhamDB/KhachHang/KhachHangPage");
    }
}