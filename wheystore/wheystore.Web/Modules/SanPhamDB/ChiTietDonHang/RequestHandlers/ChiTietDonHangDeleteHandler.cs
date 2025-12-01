using MyRow = wheystore.SanPhamDB.ChiTietDonHangRow;

namespace wheystore.SanPhamDB;

public interface IChiTietDonHangDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class ChiTietDonHangDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IChiTietDonHangDeleteHandler
{
}