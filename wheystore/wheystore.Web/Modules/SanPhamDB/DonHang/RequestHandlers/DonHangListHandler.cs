using MyRow = wheystore.SanPhamDB.DonHangRow;

namespace wheystore.SanPhamDB;

public interface IDonHangListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class DonHangListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IDonHangListHandler
{
}