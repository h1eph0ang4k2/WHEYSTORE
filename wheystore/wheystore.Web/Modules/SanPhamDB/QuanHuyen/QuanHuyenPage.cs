namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(QuanHuyenRow))]
public class QuanHuyenPage : Controller
{
    [Route("SanPhamDB/QuanHuyen")]
    public ActionResult Index()
    {
        return this.GridPage<QuanHuyenRow>("@/SanPhamDB/QuanHuyen/QuanHuyenPage");
    }
}