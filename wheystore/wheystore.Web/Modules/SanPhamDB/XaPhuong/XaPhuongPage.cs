namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(XaPhuongRow))]
public class XaPhuongPage : Controller
{
    [Route("SanPhamDB/XaPhuong")]
    public ActionResult Index()
    {
        return this.GridPage<XaPhuongRow>("@/SanPhamDB/XaPhuong/XaPhuongPage");
    }
}