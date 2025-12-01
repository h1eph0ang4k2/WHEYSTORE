using MyRow = wheystore.SanPhamDB.SanPhamHuongViRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamHuongViRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class SanPhamHuongViRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ISanPhamHuongViRetrieveHandler
{
}