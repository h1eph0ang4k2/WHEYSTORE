using MyRow = wheystore.SanPhamDB.SanPhamRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class SanPhamDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ISanPhamDeleteHandler
{
}