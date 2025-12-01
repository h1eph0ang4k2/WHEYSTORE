using MyRow = wheystore.SanPhamDB.NhaCungCapRow;

namespace wheystore.SanPhamDB;

public interface INhaCungCapRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class NhaCungCapRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    INhaCungCapRetrieveHandler
{
}