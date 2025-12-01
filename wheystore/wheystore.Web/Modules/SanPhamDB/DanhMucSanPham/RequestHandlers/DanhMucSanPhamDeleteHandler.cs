using MyRow = wheystore.SanPhamDB.DanhMucSanPhamRow;

namespace wheystore.SanPhamDB;

public interface IDanhMucSanPhamDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class DanhMucSanPhamDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IDanhMucSanPhamDeleteHandler
{
}