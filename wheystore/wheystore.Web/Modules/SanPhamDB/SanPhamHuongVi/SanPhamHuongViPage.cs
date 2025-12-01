namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(SanPhamHuongViRow))]
public class SanPhamHuongViPage : Controller
{
    [Route("SanPhamDB/SanPhamHuongVi")]
    public ActionResult Index()
    {
        return this.GridPage<SanPhamHuongViRow>("@/SanPhamDB/SanPhamHuongVi/SanPhamHuongViPage");
    }
}