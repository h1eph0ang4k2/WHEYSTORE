using MyRow = wheystore.SanPhamDB.ReviewRow;

namespace wheystore.SanPhamDB;

public interface IReviewDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class ReviewDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IReviewDeleteHandler
{
}