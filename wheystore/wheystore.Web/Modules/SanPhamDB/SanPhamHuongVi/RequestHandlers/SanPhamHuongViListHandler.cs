using MyRow = wheystore.SanPhamDB.SanPhamHuongViRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamHuongViListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class SanPhamHuongViListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ISanPhamHuongViListHandler
{
}