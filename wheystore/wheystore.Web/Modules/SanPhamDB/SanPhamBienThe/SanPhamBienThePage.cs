namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(SanPhamBienTheRow))]
public class SanPhamBienThePage : Controller
{
    [Route("SanPhamDB/SanPhamBienThe")]
    public ActionResult Index()
    {
        return this.GridPage<SanPhamBienTheRow>("@/SanPhamDB/SanPhamBienThe/SanPhamBienThePage");
    }
}