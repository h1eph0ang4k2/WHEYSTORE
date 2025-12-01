using MyRow = wheystore.SanPhamDB.SanPhamQuaTangRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamQuaTangDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class SanPhamQuaTangDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ISanPhamQuaTangDeleteHandler
{
}