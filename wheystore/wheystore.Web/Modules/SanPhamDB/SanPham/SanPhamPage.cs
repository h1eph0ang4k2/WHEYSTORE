namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(SanPhamRow))]
public class SanPhamPage : Controller
{
    [Route("SanPhamDB/SanPham")]
    public ActionResult Index()
    {
        return this.GridPage<SanPhamRow>("@/SanPhamDB/SanPham/SanPhamPage");
    }
}