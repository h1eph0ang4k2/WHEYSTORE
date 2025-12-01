using MyRow = wheystore.SanPhamDB.GioHangRow;

namespace wheystore.SanPhamDB;

public interface IGioHangDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class GioHangDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IGioHangDeleteHandler
{
}