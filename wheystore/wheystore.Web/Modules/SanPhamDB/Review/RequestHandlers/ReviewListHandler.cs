using MyRow = wheystore.SanPhamDB.ReviewRow;

namespace wheystore.SanPhamDB;

public interface IReviewListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class ReviewListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IReviewListHandler
{
}