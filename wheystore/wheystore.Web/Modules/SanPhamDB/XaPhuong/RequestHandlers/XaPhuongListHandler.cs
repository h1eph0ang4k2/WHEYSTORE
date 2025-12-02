using MyRow = wheystore.SanPhamDB.XaPhuongRow;

namespace wheystore.SanPhamDB;

public interface IXaPhuongListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class XaPhuongListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IXaPhuongListHandler
{
}