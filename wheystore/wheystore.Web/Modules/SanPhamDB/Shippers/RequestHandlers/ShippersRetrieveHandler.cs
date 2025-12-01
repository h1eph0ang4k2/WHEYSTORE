using MyRow = wheystore.SanPhamDB.ShippersRow;

namespace wheystore.SanPhamDB;

public interface IShippersRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class ShippersRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IShippersRetrieveHandler
{
}