using MyRow = wheystore.SanPhamDB.QuaTangRow;

namespace wheystore.SanPhamDB;

public interface IQuaTangRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class QuaTangRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IQuaTangRetrieveHandler
{
}