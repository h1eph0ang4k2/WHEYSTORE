using MyRow = wheystore.SanPhamDB.KhachHangRow;

namespace wheystore.SanPhamDB;

public interface IKhachHangRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class KhachHangRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IKhachHangRetrieveHandler
{
}