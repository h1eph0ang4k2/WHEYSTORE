namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(ThuongHieuRow))]
public class ThuongHieuPage : Controller
{
    [Route("SanPhamDB/ThuongHieu")]
    public ActionResult Index()
    {
        return this.GridPage<ThuongHieuRow>("@/SanPhamDB/ThuongHieu/ThuongHieuPage");
    }
}