namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(SanPhamLienQuanRow))]
public class SanPhamLienQuanPage : Controller
{
    [Route("SanPhamDB/SanPhamLienQuan")]
    public ActionResult Index()
    {
        return this.GridPage<SanPhamLienQuanRow>("@/SanPhamDB/SanPhamLienQuan/SanPhamLienQuanPage");
    }
}