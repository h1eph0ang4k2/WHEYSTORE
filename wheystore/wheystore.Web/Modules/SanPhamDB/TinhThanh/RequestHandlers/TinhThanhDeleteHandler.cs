using MyRow = wheystore.SanPhamDB.TinhThanhRow;

namespace wheystore.SanPhamDB;

public interface ITinhThanhDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class TinhThanhDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ITinhThanhDeleteHandler
{
}