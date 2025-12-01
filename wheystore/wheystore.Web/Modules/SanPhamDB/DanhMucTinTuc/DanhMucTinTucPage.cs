namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(DanhMucTinTucRow))]
public class DanhMucTinTucPage : Controller
{
    [Route("SanPhamDB/DanhMucTinTuc")]
    public ActionResult Index()
    {
        return this.GridPage<DanhMucTinTucRow>("@/SanPhamDB/DanhMucTinTuc/DanhMucTinTucPage");
    }
}