namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(SanPhamHuongViLinkRow))]
public class SanPhamHuongViLinkPage : Controller
{
    [Route("SanPhamDB/SanPhamHuongViLink")]
    public ActionResult Index()
    {
        return this.GridPage<SanPhamHuongViLinkRow>("@/SanPhamDB/SanPhamHuongViLink/SanPhamHuongViLinkPage");
    }
}