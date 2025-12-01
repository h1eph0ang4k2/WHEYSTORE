using MyRow = wheystore.SanPhamDB.NhaCungCapRow;

namespace wheystore.SanPhamDB;

public interface INhaCungCapDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class NhaCungCapDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    INhaCungCapDeleteHandler
{
}