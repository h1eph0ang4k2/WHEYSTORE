using MyRow = wheystore.SanPhamDB.SanPhamHuongViLinkRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamHuongViLinkListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class SanPhamHuongViLinkListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ISanPhamHuongViLinkListHandler
{
}