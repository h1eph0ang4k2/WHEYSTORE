using MyRow = wheystore.SanPhamDB.ChiTietDonHangRow;

namespace wheystore.SanPhamDB;

public interface IChiTietDonHangRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class ChiTietDonHangRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IChiTietDonHangRetrieveHandler
{
}