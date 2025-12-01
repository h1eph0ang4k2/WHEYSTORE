using MyRow = wheystore.SanPhamDB.DanhMucSanPhamRow;

namespace wheystore.SanPhamDB;

public interface IDanhMucSanPhamListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class DanhMucSanPhamListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IDanhMucSanPhamListHandler
{
}