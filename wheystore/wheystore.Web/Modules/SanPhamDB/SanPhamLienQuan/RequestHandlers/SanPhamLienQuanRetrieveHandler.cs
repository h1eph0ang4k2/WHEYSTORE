using MyRow = wheystore.SanPhamDB.SanPhamLienQuanRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamLienQuanRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class SanPhamLienQuanRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ISanPhamLienQuanRetrieveHandler
{
}