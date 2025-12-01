namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(SanPhamChiTietRow))]
public class SanPhamChiTietPage : Controller
{
    [Route("SanPhamDB/SanPhamChiTiet")]
    public ActionResult Index()
    {
        return this.GridPage<SanPhamChiTietRow>("@/SanPhamDB/SanPhamChiTiet/SanPhamChiTietPage");
    }
}