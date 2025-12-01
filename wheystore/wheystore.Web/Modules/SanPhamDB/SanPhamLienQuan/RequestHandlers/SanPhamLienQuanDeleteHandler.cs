using MyRow = wheystore.SanPhamDB.SanPhamLienQuanRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamLienQuanDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class SanPhamLienQuanDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ISanPhamLienQuanDeleteHandler
{
}