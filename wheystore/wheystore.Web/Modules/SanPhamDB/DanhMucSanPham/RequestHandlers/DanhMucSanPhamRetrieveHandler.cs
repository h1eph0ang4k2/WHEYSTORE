using MyRow = wheystore.SanPhamDB.DanhMucSanPhamRow;

namespace wheystore.SanPhamDB;

public interface IDanhMucSanPhamRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class DanhMucSanPhamRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IDanhMucSanPhamRetrieveHandler
{
}