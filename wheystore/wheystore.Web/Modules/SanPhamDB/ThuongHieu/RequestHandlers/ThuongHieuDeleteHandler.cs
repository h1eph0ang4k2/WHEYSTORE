using MyRow = wheystore.SanPhamDB.ThuongHieuRow;

namespace wheystore.SanPhamDB;

public interface IThuongHieuDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class ThuongHieuDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IThuongHieuDeleteHandler
{
}