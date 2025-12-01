using MyRow = wheystore.SanPhamDB.SanPhamRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class SanPhamListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ISanPhamListHandler
{
}