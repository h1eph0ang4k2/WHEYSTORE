using MyRow = wheystore.SanPhamDB.NhaCungCapRow;

namespace wheystore.SanPhamDB;

public interface INhaCungCapListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class NhaCungCapListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    INhaCungCapListHandler
{
}