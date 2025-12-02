using MyRow = wheystore.SanPhamDB.XaPhuongRow;

namespace wheystore.SanPhamDB;

public interface IXaPhuongRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class XaPhuongRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IXaPhuongRetrieveHandler
{
}