using MyRow = wheystore.SanPhamDB.XaPhuongRow;

namespace wheystore.SanPhamDB;

public interface IXaPhuongDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class XaPhuongDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IXaPhuongDeleteHandler
{
}