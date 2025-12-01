using MyRow = wheystore.SanPhamDB.KhachHangRow;

namespace wheystore.SanPhamDB;

public interface IKhachHangListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class KhachHangListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IKhachHangListHandler
{
}