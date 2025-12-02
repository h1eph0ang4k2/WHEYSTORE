using MyRow = wheystore.SanPhamDB.TinhThanhRow;

namespace wheystore.SanPhamDB;

public interface ITinhThanhListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class TinhThanhListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ITinhThanhListHandler
{
}