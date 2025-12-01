namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(MaGiamGiaRow))]
public class MaGiamGiaPage : Controller
{
    [Route("SanPhamDB/MaGiamGia")]
    public ActionResult Index()
    {
        return this.GridPage<MaGiamGiaRow>("@/SanPhamDB/MaGiamGia/MaGiamGiaPage");
    }
}