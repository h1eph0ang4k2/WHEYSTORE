using MyRow = wheystore.SanPhamDB.SanPhamQuaTangRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamQuaTangListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class SanPhamQuaTangListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ISanPhamQuaTangListHandler
{
}