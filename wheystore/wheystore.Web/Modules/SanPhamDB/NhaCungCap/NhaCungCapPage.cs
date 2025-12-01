namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(NhaCungCapRow))]
public class NhaCungCapPage : Controller
{
    [Route("SanPhamDB/NhaCungCap")]
    public ActionResult Index()
    {
        return this.GridPage<NhaCungCapRow>("@/SanPhamDB/NhaCungCap/NhaCungCapPage");
    }
}