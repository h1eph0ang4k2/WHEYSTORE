using MyRow = wheystore.SanPhamDB.QuanHuyenRow;

namespace wheystore.SanPhamDB;

public interface IQuanHuyenDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class QuanHuyenDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IQuanHuyenDeleteHandler
{
}