using MyRow = wheystore.SanPhamDB.TinhThanhRow;

namespace wheystore.SanPhamDB;

public interface ITinhThanhRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class TinhThanhRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ITinhThanhRetrieveHandler
{
}