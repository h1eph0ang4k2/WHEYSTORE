using MyRow = wheystore.SanPhamDB.DanhMucTinTucRow;

namespace wheystore.SanPhamDB;

public interface IDanhMucTinTucRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class DanhMucTinTucRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IDanhMucTinTucRetrieveHandler
{
}