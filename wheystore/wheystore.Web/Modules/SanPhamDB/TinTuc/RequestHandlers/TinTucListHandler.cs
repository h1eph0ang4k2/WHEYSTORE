using MyRow = wheystore.SanPhamDB.TinTucRow;

namespace wheystore.SanPhamDB;

public interface ITinTucListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class TinTucListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ITinTucListHandler
{
}