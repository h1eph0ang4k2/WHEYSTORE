using MyRow = wheystore.SanPhamDB.QuaTangRow;

namespace wheystore.SanPhamDB;

public interface IQuaTangDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class QuaTangDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IQuaTangDeleteHandler
{
}