using MyRow = wheystore.SanPhamDB.ShippersRow;

namespace wheystore.SanPhamDB;

public interface IShippersListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class ShippersListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IShippersListHandler
{
}