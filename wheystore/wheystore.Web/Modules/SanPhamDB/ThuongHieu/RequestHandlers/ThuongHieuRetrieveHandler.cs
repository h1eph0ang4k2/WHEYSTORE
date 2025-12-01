using MyRow = wheystore.SanPhamDB.ThuongHieuRow;

namespace wheystore.SanPhamDB;

public interface IThuongHieuRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class ThuongHieuRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IThuongHieuRetrieveHandler
{
}