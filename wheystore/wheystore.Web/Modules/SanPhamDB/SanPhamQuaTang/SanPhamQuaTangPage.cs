namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(SanPhamQuaTangRow))]
public class SanPhamQuaTangPage : Controller
{
    [Route("SanPhamDB/SanPhamQuaTang")]
    public ActionResult Index()
    {
        return this.GridPage<SanPhamQuaTangRow>("@/SanPhamDB/SanPhamQuaTang/SanPhamQuaTangPage");
    }
}