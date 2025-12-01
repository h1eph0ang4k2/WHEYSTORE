using MyRow = wheystore.SanPhamDB.SanPhamChiTietRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamChiTietListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class SanPhamChiTietListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ISanPhamChiTietListHandler
{
}