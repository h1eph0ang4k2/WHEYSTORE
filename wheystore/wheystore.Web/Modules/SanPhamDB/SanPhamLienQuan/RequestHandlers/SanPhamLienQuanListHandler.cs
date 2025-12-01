using MyRow = wheystore.SanPhamDB.SanPhamLienQuanRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamLienQuanListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class SanPhamLienQuanListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ISanPhamLienQuanListHandler
{
}