using MyRow = wheystore.SanPhamDB.QuaTangRow;

namespace wheystore.SanPhamDB;

public interface IQuaTangListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class QuaTangListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IQuaTangListHandler
{
}