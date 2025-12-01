namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(DanhMucSanPhamRow))]
public class DanhMucSanPhamPage : Controller
{
    [Route("SanPhamDB/DanhMucSanPham")]
    public ActionResult Index()
    {
        return this.GridPage<DanhMucSanPhamRow>("@/SanPhamDB/DanhMucSanPham/DanhMucSanPhamPage");
    }
}