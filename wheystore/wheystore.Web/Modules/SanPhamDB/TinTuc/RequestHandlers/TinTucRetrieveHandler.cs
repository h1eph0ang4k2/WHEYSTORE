using MyRow = wheystore.SanPhamDB.TinTucRow;

namespace wheystore.SanPhamDB;

public interface ITinTucRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class TinTucRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ITinTucRetrieveHandler
{
}