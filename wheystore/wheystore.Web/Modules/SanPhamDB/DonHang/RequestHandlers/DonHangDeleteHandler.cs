using MyRow = wheystore.SanPhamDB.DonHangRow;

namespace wheystore.SanPhamDB;

public interface IDonHangDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class DonHangDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IDonHangDeleteHandler
{
}