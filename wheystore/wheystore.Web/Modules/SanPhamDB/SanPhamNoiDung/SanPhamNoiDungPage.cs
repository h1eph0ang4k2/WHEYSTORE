namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(SanPhamNoiDungRow))]
public class SanPhamNoiDungPage : Controller
{
    [Route("SanPhamDB/SanPhamNoiDung")]
    public ActionResult Index()
    {
        return this.GridPage<SanPhamNoiDungRow>("@/SanPhamDB/SanPhamNoiDung/SanPhamNoiDungPage");
    }
}