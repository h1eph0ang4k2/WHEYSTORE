namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(TinTucRow))]
public class TinTucPage : Controller
{
    [Route("SanPhamDB/TinTuc")]
    public ActionResult Index()
    {
        return this.GridPage<TinTucRow>("@/SanPhamDB/TinTuc/TinTucPage");
    }
}