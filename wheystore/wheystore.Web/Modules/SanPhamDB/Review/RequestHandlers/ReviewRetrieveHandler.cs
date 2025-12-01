using MyRow = wheystore.SanPhamDB.ReviewRow;

namespace wheystore.SanPhamDB;

public interface IReviewRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class ReviewRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IReviewRetrieveHandler
{
}