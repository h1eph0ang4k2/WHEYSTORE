using MyRow = wheystore.SanPhamDB.SanPhamRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class SanPhamRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ISanPhamRetrieveHandler
{
}