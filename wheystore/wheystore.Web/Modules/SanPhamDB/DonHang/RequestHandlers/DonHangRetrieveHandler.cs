using MyRow = wheystore.SanPhamDB.DonHangRow;

namespace wheystore.SanPhamDB;

public interface IDonHangRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class DonHangRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IDonHangRetrieveHandler
{
}