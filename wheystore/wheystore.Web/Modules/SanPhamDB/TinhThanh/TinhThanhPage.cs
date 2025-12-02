namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(TinhThanhRow))]
public class TinhThanhPage : Controller
{
    [Route("SanPhamDB/TinhThanh")]
    public ActionResult Index()
    {
        return this.GridPage<TinhThanhRow>("@/SanPhamDB/TinhThanh/TinhThanhPage");
    }
}