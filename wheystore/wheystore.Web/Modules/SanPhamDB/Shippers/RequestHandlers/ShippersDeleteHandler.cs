using MyRow = wheystore.SanPhamDB.ShippersRow;

namespace wheystore.SanPhamDB;

public interface IShippersDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class ShippersDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IShippersDeleteHandler
{
}