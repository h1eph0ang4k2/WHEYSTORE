using MyRow = wheystore.SanPhamDB.GioHangRow;

namespace wheystore.SanPhamDB;

public interface IGioHangRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class GioHangRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IGioHangRetrieveHandler
{
}