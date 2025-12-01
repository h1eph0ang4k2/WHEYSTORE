using MyRow = wheystore.SanPhamDB.SanPhamHuongViLinkRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamHuongViLinkRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class SanPhamHuongViLinkRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ISanPhamHuongViLinkRetrieveHandler
{
}