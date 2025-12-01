using MyRow = wheystore.SanPhamDB.ThuongHieuRow;

namespace wheystore.SanPhamDB;

public interface IThuongHieuListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class ThuongHieuListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IThuongHieuListHandler
{
}