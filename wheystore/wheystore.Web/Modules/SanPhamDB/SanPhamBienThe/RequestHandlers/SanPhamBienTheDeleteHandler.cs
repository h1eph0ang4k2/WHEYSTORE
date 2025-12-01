using MyRow = wheystore.SanPhamDB.SanPhamBienTheRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamBienTheDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class SanPhamBienTheDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ISanPhamBienTheDeleteHandler
{
}