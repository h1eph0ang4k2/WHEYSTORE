using MyRow = wheystore.SanPhamDB.GioHangRow;

namespace wheystore.SanPhamDB;

public interface IGioHangListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class GioHangListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IGioHangListHandler
{
}