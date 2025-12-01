using MyRow = wheystore.SanPhamDB.SanPhamBienTheRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamBienTheRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class SanPhamBienTheRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ISanPhamBienTheRetrieveHandler
{
}