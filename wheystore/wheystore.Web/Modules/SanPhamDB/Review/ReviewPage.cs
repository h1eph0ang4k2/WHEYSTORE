namespace wheystore.SanPhamDB.Pages;

[PageAuthorize(typeof(ReviewRow))]
public class ReviewPage : Controller
{
    [Route("SanPhamDB/Review")]
    public ActionResult Index()
    {
        return this.GridPage<ReviewRow>("@/SanPhamDB/Review/ReviewPage");
    }
}