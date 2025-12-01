using MyRow = wheystore.SanPhamDB.ReviewRow;

namespace wheystore.SanPhamDB;

public interface IReviewSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class ReviewSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IReviewSaveHandler
{
}