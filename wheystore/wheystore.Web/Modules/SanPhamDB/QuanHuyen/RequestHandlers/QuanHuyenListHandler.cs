using MyRow = wheystore.SanPhamDB.QuanHuyenRow;

namespace wheystore.SanPhamDB;

public interface IQuanHuyenListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class QuanHuyenListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IQuanHuyenListHandler
{
}