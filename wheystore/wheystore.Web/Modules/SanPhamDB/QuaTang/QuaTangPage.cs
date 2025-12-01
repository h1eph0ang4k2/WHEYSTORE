namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(QuaTangRow))]
public class QuaTangPage : Controller
{
    [Route("SanPhamDB/QuaTang")]
    public ActionResult Index()
    {
        return this.GridPage<QuaTangRow>("@/SanPhamDB/QuaTang/QuaTangPage");
    }
}