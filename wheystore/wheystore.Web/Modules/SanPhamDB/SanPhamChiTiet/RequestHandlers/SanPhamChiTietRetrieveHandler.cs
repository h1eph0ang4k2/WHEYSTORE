using MyRow = wheystore.SanPhamDB.SanPhamChiTietRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamChiTietRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class SanPhamChiTietRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ISanPhamChiTietRetrieveHandler
{
}