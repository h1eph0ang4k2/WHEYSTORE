using MyRow = wheystore.SanPhamDB.SanPhamQuaTangRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamQuaTangRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class SanPhamQuaTangRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ISanPhamQuaTangRetrieveHandler
{
}