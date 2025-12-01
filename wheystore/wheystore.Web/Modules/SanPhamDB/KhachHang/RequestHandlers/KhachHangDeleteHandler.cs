using MyRow = wheystore.SanPhamDB.KhachHangRow;

namespace wheystore.SanPhamDB;

public interface IKhachHangDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class KhachHangDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IKhachHangDeleteHandler
{
}