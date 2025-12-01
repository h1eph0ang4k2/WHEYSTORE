using MyRow = wheystore.SanPhamDB.SanPhamBienTheRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamBienTheListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class SanPhamBienTheListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ISanPhamBienTheListHandler
{
}