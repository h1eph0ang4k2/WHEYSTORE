namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(ShippersRow))]
public class ShippersPage : Controller
{
    [Route("SanPhamDB/Shippers")]
    public ActionResult Index()
    {
        return this.GridPage<ShippersRow>("@/SanPhamDB/Shippers/ShippersPage");
    }
}